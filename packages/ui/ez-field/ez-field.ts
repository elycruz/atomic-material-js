import {
  LitElement,
  html,
  type PropertyValues,
  type CSSResultGroup,
  unsafeCSS,
} from 'lit';

import {
  addEventListener,
  addEventListeners,
  removeEventListener,
  removeEventListeners,
  type EventListenerTuple,
} from '../utils/dom/events.js';

import cssStr from './ez-field.scss?inline';

const styles = unsafeCSS(cssStr);

export const EzFieldName = 'ez-field';

export type EzFieldInputElement =
  | HTMLInputElement
  | HTMLTextAreaElement
  | HTMLSelectElement;

export type ValidationMessageGetter = (i: EzFieldInputElement) => string;
export type ValidationMessage = string;
export type ValidityMessaging = {
  [key in keyof ValidityState]?: ValidationMessageGetter | ValidationMessage;
};

export class EzFieldElement extends LitElement {
  static localName = EzFieldName;

  static get styles(): CSSResultGroup {
    return styles;
  }

  static properties = {
    selectors: { type: String, reflect: false },
    validationMessage: {
      type: String,
      attribute: 'error',
      reflect: true,
    },
    validateOnChange: { type: Boolean },
    validateOnInput: { type: Boolean },
    validityMessaging: { type: Object, state: true },
    validate: { type: Function, state: true },
    _nested: { type: Boolean, state: true },
  };

  declare selectors?: string;
  declare validationMessage?: string;

  get error(): string {
    return this.validationMessage ?? '';
  }

  set error(value: string) {
    const prevValue = this.validationMessage;

    this.validationMessage = value;
    this.requestUpdate('validationMessage', prevValue);
  }

  declare validateOnChange?: boolean;
  declare validateOnInput?: boolean;
  declare validityMessaging?: ValidityMessaging;
  declare validate?: (
    input: EzFieldInputElement
  ) => undefined | ValidationMessage;
  declare _nested: boolean;

  get localName(): typeof EzFieldName {
    return EzFieldName;
  }

  #_initialized = false;
  #_evListenersTupleList: EventListenerTuple[];
  #_form?: HTMLFormElement;
  #_inputs?: NodeListOf<EzFieldInputElement>;

  constructor() {
    super();
    this.#_evListenersTupleList = [
      [this.#_onInvalid, 'invalid'],
      [this.#_onInputOrChange, 'input'],
      [this.#_onInputOrChange, 'change'],
    ];
    this.selectors = `input:not([type="hidden"]), textarea, select`;
    this.validationMessage = '';
    this.validateOnChange = true;
    this._nested = false;
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.#_initialized && this.isConnected) {
      this._nested = !!this.parentElement?.closest('ez-field');

      if (this.selectors && this.#_inputs) this.#_addEventListeners();

      this.#_initialized = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.#_initialized) {
      this.#_removeEventListeners();
      this._nested = false;
      this.#_initialized = false;
    }
  }

  updated(_changedProperties: PropertyValues): void {
    super.updated(_changedProperties);

    if (_changedProperties.has('selectors')) {
      if (this.selectors) {
        this.#_inputs = this.querySelectorAll(this.selectors);
        this.#_addEventListeners();
      } else this.#_removeEventListeners();
    }
  }

  render() {
    return html`
      <div class="ez-field">
        <slot name="leading" part="leading"></slot>
        <div class="center" part="center">
          <slot></slot>
          <slot name="help" part="help"></slot>
          <div class="error" part="error" ?hidden=${this._nested}>
            ${this.validationMessage}
          </div>
          <slot name="custom" part="custom"></slot>
        </div>
        <slot name="trailing" part="trailing"></slot>
      </div>
    `;
  }

  #_onInvalid = (e: Event): void => {
    e.preventDefault();

    const { currentTarget } = e,
      target = currentTarget as EzFieldInputElement,
      { selectors } = this;

    if (!selectors || !target?.matches(selectors)) return;

    // Handle validity custom messaging.
    const { validity } = target;

    // If no custom messaging or custom message is already set
    if (!this.validityMessaging || validity.customError) {
      this.validationMessage = target.validationMessage;
    }
    // Else get custom method and re-trigger 'invalid' call
    else {
      (
        Object.entries(this.validityMessaging) as [
          keyof ValidityMessaging,
          ValidationMessageGetter | ValidationMessage,
        ][]
      ).forEach(([key, messageOrGetter]) => {
        if (key === 'valid' || !validity[key] || !messageOrGetter) return;

        const message =
          typeof messageOrGetter === 'function'
            ? messageOrGetter(target)
            : messageOrGetter;

        target.setCustomValidity(message);
        target.reportValidity();
      });
    }
  };

  /**
   * Triggers error message propagation to UI
   */
  #_onInputOrChange = (e: Event): void => {
    const { target } = e;

    // If event target doesn't match tracked elements, bail
    if (
      !(target instanceof HTMLElement) ||
      !target.matches(this.selectors ?? '')
    )
      return;

    const inputTarget = target as EzFieldInputElement;

    // Clear validation message if none
    if (!inputTarget.validationMessage) this.validationMessage = '';

    // If no input elements, and/or event isn't tracked one, return
    if (
      !this.#_inputs?.length ||
      !(
        (this.validateOnChange && e.type === 'change') ||
        (this.validateOnInput && e.type === 'input')
      )
    )
      return;

    this.#_propagateErrorMessages();
  };

  /**
   * Clears error message on form reset.
   */
  #_onFormReset = (): void => {
    this.#_inputs?.forEach(input => {
      input.setCustomValidity('');
    });
    this.validationMessage = '';
  };

  /**
   * Propagates error messages to the UI.
   */
  #_propagateErrorMessages(): void {
    this.#_inputs?.forEach(input => {
      input.setCustomValidity('');

      const message = this.validate?.(input);

      if (message) {
        input.setCustomValidity(message);
        input.reportValidity();
        this.validationMessage = message;
        return;
      }

      const { validity } = input;

      if (validity.valid) {
        this.validationMessage = '';
        return;
      }

      // Handle validity custom messaging.
      // If we have non "validate" custom messaging, propagate it
      if (this.validityMessaging && !validity.customError) {
        (
          Object.entries(this.validityMessaging) as [
            keyof ValidityMessaging,
            ValidationMessageGetter | ValidationMessage,
          ][]
        ).forEach(([key, messageOrGetter]) => {
          // Skip all keys except matching one
          if (key === 'valid' || !validity[key] || !messageOrGetter) return;

          const msg =
            typeof messageOrGetter === 'function'
              ? messageOrGetter(input)
              : messageOrGetter;

          input.setCustomValidity(msg);
          input.reportValidity();
        });
      }
    });
  }

  /**
   * Removes and adds event listeners.
   */
  #_addEventListeners(): this {
    if (this.#_form)
      removeEventListener(this.#_onFormReset, 'reset', this.#_form);

    const form = this.closest('form');

    if (form) {
      removeEventListener(this.#_onFormReset, 'reset', form);
      addEventListener(this.#_onFormReset, 'reset', form);
      this.#_form = form;
    }

    if (this.#_inputs)
      this.#_inputs.forEach(x => {
        removeEventListener(this.#_onInvalid, 'invalid', x);
        addEventListener(this.#_onInvalid, 'invalid', x);
      });

    addEventListeners(this.#_evListenersTupleList, this);
    return this;
  }

  #_removeEventListeners(): this {
    if (this.#_form)
      removeEventListener(this.#_onFormReset, 'reset', this.#_form);
    if (this.#_inputs)
      this.#_inputs.forEach(x =>
        removeEventListener(this.#_onInvalid, 'invalid', x)
      );
    removeEventListeners(this.#_evListenersTupleList, this);
    return this;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-field': EzFieldElement;
  }
}
