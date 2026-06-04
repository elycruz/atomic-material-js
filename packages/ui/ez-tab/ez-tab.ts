import { html, type CSSResultGroup, unsafeCSS, type TemplateResult } from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';
import '../ez-ripple/index.js';

import tabsCssStr from '../scss/modules/tabs.scss?inline';
import cssStr from './ez-tab.scss?inline';

const tabsStyles = unsafeCSS(tabsCssStr),
  styles = unsafeCSS(cssStr);

export const EzTabName = 'ez-tab';

export class EzTabElement extends EzBaseElement {
  static localName = EzTabName;

  static override styles: CSSResultGroup = [
    EzBaseElement.styles,
    tabsStyles,
    styles,
  ];

  static override properties = {
    ...EzBaseElement.properties,
    active: { type: Boolean, reflect: true },
  };

  declare active: boolean;

  constructor() {
    super();
    this.active = false;
  }

  render(): TemplateResult {
    return html`
      <div
        class="ez-tab ${this.active ? 'ez-active' : ''}"
        role="tab"
        aria-selected="${this.active ? 'true' : 'false'}"
        tabindex="${this.active ? '0' : '-1'}"
      >
        <ez-ripple></ez-ripple>
        <slot name="icon"></slot>
        <slot name="icon-inline"></slot>
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-tab': EzTabElement;
  }
}
