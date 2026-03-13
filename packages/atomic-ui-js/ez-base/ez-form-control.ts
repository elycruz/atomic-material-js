import { type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

import { EzBaseElement } from './ez-base.js';

import {
  DEFAULT_VALUE_NAME,
  DISABLED_NAME,
  NAME_NAME,
  TABINDEX_NAME,
  VALUE_NAME,
} from '../utils/constants.js';

import { isNullable } from '../utils/object.js';

export interface FormControl extends HTMLElement {
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  readOnly?: boolean;
  value?: string;

  readonly form: HTMLFormElement | null;
  readonly validationMessage: string;
  readonly validity: ValidityState;
  readonly willValidate: boolean;
  readonly labels: NodeList;

  checkValidity(): boolean;
  reportValidity(): boolean;
  setCustomValidity(msg: string): void;
}

export interface FormControlProps {
  defaultValue?: string;
  disabled?: boolean;
  name?: string;
  readOnly?: boolean;
  value?: string;
}

export abstract class EzFormControlElement
  extends EzBaseElement
  implements FormControl
{
  static formAssociated = true;

  protected _name: string;

  get name(): string {
    return this._name || '';
  }

  @property({ type: String, reflect: true })
  set name(x: string) {
    const oldValue = this._name;

    this._name = x;
    this.requestUpdate(NAME_NAME, oldValue);
  }

  @property({ type: Boolean, reflect: true }) accessor readOnly: boolean;

  protected _defaultValue: string;

  get defaultValue(): string {
    return this._defaultValue || '';
  }

  @property({ type: String, attribute: DEFAULT_VALUE_NAME, reflect: true })
  set defaultValue(x: string) {
    const oldDefaultValue = this._defaultValue,
      oldValue = this._value;

    this.value = this._defaultValue = x;
    this.requestUpdate(DEFAULT_VALUE_NAME, oldDefaultValue);
    this.requestUpdate(VALUE_NAME, oldValue);
  }

  protected _disabled: boolean;

  get disabled(): boolean {
    return isNullable(this._disabled) ? false : this._disabled;
  }

  @property({ type: Boolean, reflect: true })
  set disabled(x: boolean) {
    const oldValue = this._disabled,
      oldTabIndex = this.tabIndex;

    let requestTabIndexUpdate = true;

    this._disabled = x;

    if (x) {
      this.tabIndex = -1;
      this._tabIndexInternallyDirty = true;
    } else if (!isNullable(this._lastUserSetTabIndex)) {
      this.tabIndex = this._lastUserSetTabIndex;
      this._tabIndexInternallyDirty = false;
    } else {
      requestTabIndexUpdate = false;
    }
    this.requestUpdate(DISABLED_NAME, oldValue);

    if (requestTabIndexUpdate) {
      this.requestUpdate(TABINDEX_NAME, oldTabIndex);
    }
  }

  protected _autoFocus: boolean;

  get autoFocus(): boolean {
    return isNullable(this._autoFocus) ? false : this._autoFocus;
  }

  @property({ type: Boolean, reflect: true })
  set autoFocus(x: boolean) {
    const oldValue = this._autoFocus;

    this._autoFocus = x;
    this.requestUpdate('autoFocus', oldValue);
  }

  protected _tabIndex: number;
  protected _tabIndexInternallyDirty: boolean;
  protected _lastUserSetTabIndex: number;

  @property({ type: Number, reflect: true }) accessor tabIndex: number;

  protected _value: string;

  get value(): string {
    return this._value || '';
  }

  @property({ type: String })
  set value(x: string) {
    const oldValue = this._value;

    this._value = x;
    this.requestUpdate(VALUE_NAME, oldValue);
  }

  protected _internals: ElementInternals;

  get form(): HTMLFormElement | null {
    return this._internals?.form;
  }

  get validationMessage(): string {
    return this._internals?.validationMessage;
  }

  get validity(): ValidityState {
    return this._internals?.validity;
  }

  get willValidate(): boolean {
    return this._internals?.willValidate;
  }

  get labels(): NodeList {
    return this._internals?.labels;
  }

  protected constructor() {
    super();
    this._internals = this.attachInternals();
  }

  checkValidity(): boolean {
    return this._internals?.checkValidity();
  }

  reportValidity(): boolean {
    return this._internals?.reportValidity();
  }

  setCustomValidity(message: string): void {
    this._internals?.setValidity({ customError: !!message }, message);
  }

  protected setFormValue(
    value?: File | string | FormData | null,
    state?: File | string | FormData | null
  ): void {
    this._internals?.setFormValue(value ?? null, state ?? null);
  }

  protected setValidity(
    flags?: ValidityStateFlags,
    message?: string,
    anchor?: HTMLElement
  ): void {
    this._internals?.setValidity(flags, message, anchor);
  }

  formResetCallback(): void {
    this.value = this.defaultValue;
  }

  protected updated(_changedProperties: PropertyValues) {
    super.updated(_changedProperties);
    void this.updateComplete.then(() => {
      if (
        _changedProperties.has('tabIndex') &&
        !this._tabIndexInternallyDirty
      ) {
        this._lastUserSetTabIndex = this.tabIndex;
      }
    });
  }
}
