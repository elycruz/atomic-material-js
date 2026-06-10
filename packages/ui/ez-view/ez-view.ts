import { html, type CSSResultGroup, unsafeCSS, type TemplateResult } from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';

import cssStr from './ez-view.scss?inline';

const styles = unsafeCSS(cssStr);

export const EzViewName = 'ez-view';

export const EzViewEvents: Record<string, string> = {
  Show: `${EzViewName}-show`,
  Hide: `${EzViewName}-hide`,
};

/**
 * A single panel within an `ez-views` stack.
 *
 * The host's `active` attribute is managed by the parent `ez-views`
 * (analogous to `[open]` on `<dialog>`). The default show/hide styling lives
 * in the overridable `views` CSS module — this element never sets inline
 * `style.display`, so consumers can fully take over via CSS, the
 * `ez-view-show` / `ez-view-hide` events, or `ez-views`' overridable
 * `showView` / `hideView` methods.
 *
 * The `tabpanel` role is **opt-in**: a tabs driver assigns it (plus an
 * `aria-labelledby` pointing at the controlling tab) via `assignTabPanel()`;
 * a wizard/carousel driver leaves it role-less. Role lives on the host via
 * `ElementInternals` (consistent with `ez-tab`).
 */
export class EzViewElement extends EzBaseElement {
  static localName = EzViewName;

  static override styles: CSSResultGroup = [EzBaseElement.styles, styles];

  static override properties = {
    ...EzBaseElement.properties,
    active: { type: Boolean, reflect: true },
  };

  declare active: boolean;

  #internals: ElementInternals;

  constructor() {
    super();
    this.active = false;
    this.#internals = this.attachInternals();
  }

  /**
   * Assign `tabpanel` semantics, labelled by the controlling tab. Called by a
   * tabs driver (`ez-tabs`) so the ARIA `tab` -> `tabpanel` relationship is
   * correct without hardcoding tab semantics into the primitive.
   */
  assignTabPanel(tabId = ''): void {
    this.#internals.role = 'tabpanel';

    if (tabId) this.setAttribute('aria-labelledby', tabId);
  }

  /** Drop any driver-assigned role/labelling. */
  clearRole(): void {
    this.#internals.role = null;
    this.removeAttribute('aria-labelledby');
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-view': EzViewElement;
  }
}
