import { html, type CSSResultGroup, unsafeCSS, type TemplateResult } from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';

import textfieldCssStr from '../scss/modules/input/textfield.scss?inline';
import cssStr from './ez-textfield.scss?inline';

const textfieldStyles = unsafeCSS(textfieldCssStr),
  styles = unsafeCSS(cssStr);

export const EzTextfieldName = 'ez-textfield';

export class EzTextfieldElement extends EzBaseElement {
  static localName = EzTextfieldName;

  static get styles(): CSSResultGroup {
    return [EzBaseElement.styles, textfieldStyles, styles];
  }

  render(): TemplateResult {
    const varietyClass = this.variety ? `ez-${this.variety}` : '';

    return html`
      <div class="ez-textfield ${varietyClass}">
        <div class="ez-textfield-leading" part="leading">
          <slot name="leading"></slot>
        </div>
        <div class="ez-textfield-center" part="center">
          <slot></slot>
        </div>
        <div class="ez-textfield-trailing" part="trailing">
          <slot name="trailing"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-textfield': EzTextfieldElement;
  }
}
