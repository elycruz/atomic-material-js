import {
  html,
  type CSSResultGroup,
  type TemplateResult,
  ReactiveElement,
} from 'lit';
import { property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { EzFormControlElement } from '../ez-base/ez-form-control.js';
import { SIZE_NAME, type SizeVariant } from '../utils/constants.js';
import { isNullable } from '../utils/object.js';

import { allStyles } from './ez-button.styles.js';

export const ezButtonName = 'ez-button';

export type ButtonType = 'button' | 'submit' | 'reset';

/**
 * A Material Design 3 button custom element.
 *
 * Wraps a Shadow DOM `<button>` (or `<a>` when `href` is set) and reuses the
 * existing button CSS modules via adopted constructable stylesheets.
 *
 * @element ez-button
 *
 * @slot - Default slot for the button label text.
 * @slot leading-icon - Slot for an icon before the label.
 * @slot trailing-icon - Slot for an icon after the label.
 *
 * @csspart button - The internal `<button>` or `<a>` element.
 *
 * @example
 * ```html
 * <ez-button variety="filled" theme="primary">Click me</ez-button>
 * <ez-button variety="outlined icon-btn" theme="info">
 *   <span class="md-icon" slot="leading-icon">star</span>
 * </ez-button>
 * <ez-button href="https://example.com" variety="tonal">Link</ez-button>
 * ```
 */
export class EzButtonElement extends EzFormControlElement {
  static localName = ezButtonName;

  static override shadowRootOptions = {
    ...ReactiveElement.shadowRootOptions,
    delegatesFocus: true,
  };

  static override styles: CSSResultGroup =
    allStyles as unknown as CSSResultGroup;

  // Override protected constructor from EzFormControlElement to public
  // so the class can be passed as a CustomElementConstructor.
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor() {
    super();
  }

  protected _size: SizeVariant | '';

  get size(): SizeVariant | '' {
    return isNullable(this._size) ? '' : this._size;
  }

  @property({ type: String, reflect: true })
  set size(xs: SizeVariant | '') {
    const oldValue = this._size;

    this._size = xs || '';
    this.requestUpdate(SIZE_NAME, oldValue);
  }

  @property({ type: String, reflect: true })
  accessor type: ButtonType = 'button';

  @property({ type: Boolean, reflect: true })
  accessor icon = false;

  @property({ type: String, reflect: true })
  accessor href = '';

  override render(): TemplateResult {
    const varietyTokens = this.variety ? this.variety.split(/\s+/) : [],
      themeClass = this.theme ? `ez-theme-${this.theme}` : '',
      classes = {
        'ez-btn': true,
        ...(themeClass ? { [themeClass]: true } : {}),
        ...(this.size ? { [`ez-${this.size}`]: true } : {}),
        'ez-icon-btn': this.icon,
        ...Object.fromEntries(
          varietyTokens.filter(Boolean).map(token => [`ez-${token}`, true])
        ),
      };

    if (this.href) {
      return html`
        <a
          part="button"
          class=${classMap(classes)}
          href=${this.href}
          tabindex=${ifDefined(this.disabled ? -1 : undefined)}
          aria-disabled=${ifDefined(this.disabled ? 'true' : undefined)}
        >
          <ez-ripple></ez-ripple>
          <span class="ez-btn-content">
            <slot name="leading-icon"></slot>
            <slot></slot>
            <slot name="trailing-icon"></slot>
          </span>
        </a>
      `;
    }

    return html`
      <button
        part="button"
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled}
      >
        <ez-ripple></ez-ripple>
        <span class="ez-btn-content">
          <slot name="leading-icon"></slot>
          <slot></slot>
          <slot name="trailing-icon"></slot>
        </span>
      </button>
    `;
  }

  override connectedCallback(): void {
    super.connectedCallback();

    if (this.type === 'submit') {
      this.addEventListener('click', this.#handleSubmitClick);
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('click', this.#handleSubmitClick);
  }

  #handleSubmitClick = (): void => {
    if (this.disabled) return;

    if (this.type === 'submit' && this.form) {
      this.form.requestSubmit();
    } else if (this.type === 'reset' && this.form) {
      this.form.reset();
    }
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-button': EzButtonElement;
  }
}
