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
    selectors: { type: String },
    validationMessage: {
      type: String,
      attribute: 'validationMessage',
      reflect: true,
    },
    validateOnChange: { type: Boolean },
    validateOnInput: { type: Boolean },
    validityMessaging: { type: Object, state: true },
    validate: { type: Function, state: true },
  };

  selectors?: string;
  validationMessage?: string;
  validateOnChange?: boolean;
  validateOnInput?: boolean;
  validityMessaging?: ValidityMessaging;
  validate?: (input: EzFieldInputElement) => undefined | ValidationMessage;

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
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.#_initialized && this.isConnected) {
      if (this.selectors && this.#_inputs) this.#_addEventListeners();

      this.#_initialized = true;
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this.#_initialized) {
      this.#_removeEventListeners();
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
      <div class="flex-container">
        <slot name="leading" part="leading"></slot>
        <div class="center-column">
          <slot></slot>
          <div class="error-message" part="error">
            ${this.validationMessage}
          </div>
          <slot name="supporting-text" part="supporting-text"></slot>
          <slot name="help" part="help"></slot>
          <slot name="counter" part="counter"></slot>
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

    const { validity } = target;

    if (!this.validityMessaging || validity.customError) {
      this.validationMessage = target.validationMessage;
    } else {
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

  #_onInputOrChange = (e: Event): void => {
    const { target } = e;

    if (
      !(target instanceof HTMLElement) ||
      !target.matches(this.selectors ?? '')
    )
      return;

    const inputTarget = target as EzFieldInputElement;

    if (!inputTarget.validationMessage) this.validationMessage = '';

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

  #_onFormReset = (): void => {
    this.#_inputs?.forEach(input => {
      input.setCustomValidity('');
    });
    this.validationMessage = '';
  };

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

      if (this.validityMessaging && !validity.customError) {
        (
          Object.entries(this.validityMessaging) as [
            keyof ValidityMessaging,
            ValidationMessageGetter | ValidationMessage,
          ][]
        ).forEach(([key, messageOrGetter]) => {
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
