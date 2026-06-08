import {
  html,
  type CSSResultGroup,
  unsafeCSS,
  type TemplateResult,
  type PropertyValues,
} from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';
import '../ez-ripple/index.js';

import tabsCssStr from '../scss/modules/tabs.scss?inline';
import cssStr from './ez-tab.scss?inline';

const tabsStyles = unsafeCSS(tabsCssStr),
  styles = unsafeCSS(cssStr);

export const EzTabName = 'ez-tab';

export class EzTabElement extends EzBaseElement {
  static localName = EzTabName;

  // Delegate focus into the inner focusable node so the roving-tabindex
  // focus management driven by `ez-tabs` (which calls `tab.focus()` on the
  // host) actually lands on the tab.
  static override shadowRootOptions: ShadowRootInit = {
    ...EzBaseElement.shadowRootOptions,
    delegatesFocus: true,
  };

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

  #internals: ElementInternals;

  constructor() {
    super();
    this.active = false;

    // Expose ARIA semantics on the host element itself (not the inner shadow
    // DOM node) so the `tablist` -> `tab` relationship stays intact in the
    // accessibility tree.
    this.#internals = this.attachInternals();
    this.#internals.role = 'tab';
    this.#internals.ariaSelected = 'false';
  }

  override willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('active')) {
      this.#internals.ariaSelected = this.active ? 'true' : 'false';
    }
  }

  render(): TemplateResult {
    return html`
      <div
        class="ez-tab ${this.active ? 'ez-active' : ''}"
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
