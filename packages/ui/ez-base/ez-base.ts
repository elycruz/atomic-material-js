import {
  LitElement,
  html,
  css,
  type CSSResultGroup,
  type TemplateResult,
} from 'lit';
import { property } from 'lit/decorators.js';

import {
  THEME_NAME,
  VARIETY_NAME,
  type StyleVariant,
  type ThemeVariant,
} from '../utils/constants.js';

import { isNullable } from '../utils/object.js';

export interface EzBaseProps {
  variety?: StyleVariant;
  theme?: ThemeVariant;
}

export class EzBaseElement extends LitElement {
  static readonly styles: CSSResultGroup = css`
    :host {
      display: inline-block;
    }
    :host,
    :host * {
      box-sizing: border-box;
    }
  `;

  protected _variety: string;

  get variety(): string {
    return isNullable(this._variety) ? '' : this._variety;
  }

  @property({ type: String, reflect: true })
  set variety(xs: string) {
    const oldValue = this._variety;

    this._variety = xs || '';
    this.requestUpdate(VARIETY_NAME, oldValue);
  }

  protected _theme: ThemeVariant | '';

  get theme(): ThemeVariant | '' {
    return isNullable(this._theme) ? '' : this._theme;
  }

  @property({ type: String, reflect: true })
  set theme(xs: ThemeVariant | '') {
    const oldValue = this._theme;

    this._theme = xs || '';
    this.requestUpdate(THEME_NAME, oldValue);
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}
