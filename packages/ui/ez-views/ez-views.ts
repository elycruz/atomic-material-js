import {
  html,
  type CSSResultGroup,
  unsafeCSS,
  type TemplateResult,
  type PropertyValues,
} from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';
import { EzViewElement, EzViewEvents } from '../ez-view/ez-view.js';

import cssStr from './ez-views.scss?inline';

const styles = unsafeCSS(cssStr);

export const EzViewsName = 'ez-views';

export const EzViewsEvents: Record<string, string> = {
  Change: `${EzViewsName}-change`,
};

/** Context handed to the overridable `showView` / `hideView` operations. */
export interface EzViewsContext {
  prev: EzViewElement | null;
  next: EzViewElement;
  index: number;
  id: string;
}

let viewIdSeq = 0;

/**
 * A generic **view-stack** primitive that shows exactly one child `ez-view` at
 * a time — the content half of the ARIA `tablist → tab → tabpanel` triad.
 *
 * It is component-agnostic: `ez-tabs` (via `for` / `controls`), steppers,
 * wizards, master–detail, etc. drive it as *controllers*; the stack itself
 * stays neutral.
 *
 * The active view is identified by its native **`id`** (`active`); `selectedIndex`
 * mirrors it by 0-based position. The container drives everything by toggling
 * the `active` attribute on each `ez-view` (analogous to `[open]` on
 * `<dialog>`) — it **never** sets inline `style.display`. The default
 * `display:none` for inactive views lives in the overridable `views` CSS
 * module, so animation is achievable in userland via three routes: CSS
 * (`@starting-style` / `allow-discrete`), the `ez-view-show` / `ez-view-hide`
 * events, or subclassing the overridable `showView` / `hideView` methods.
 */
export class EzViewsElement extends EzBaseElement {
  static localName = EzViewsName;

  static override styles: CSSResultGroup = [EzBaseElement.styles, styles];

  static override properties = {
    ...EzBaseElement.properties,
    active: { type: String, reflect: true },
    lazy: { type: Boolean, reflect: true },
    destroyInactive: {
      type: Boolean,
      attribute: 'destroy-inactive',
      reflect: true,
    },
  };

  /** Active view by `id`. Reflected. */
  declare active: string;

  /** When set, inactive views are not rendered until first activated. */
  declare lazy: boolean;

  /** When set, inactive views are removed from the DOM. */
  declare destroyInactive: boolean;

  #initialized = false;

  #activeView: EzViewElement | null = null;

  /** Detached views (lazy / destroy-inactive), keyed by view -> placeholder. */
  #anchors = new Map<EzViewElement, Comment>();

  /** Reverse of `#anchors`, for reconstructing order from `childNodes`. */
  #anchorOf = new Map<Comment, EzViewElement>();

  /** Views that have been shown at least once (lazy keeps these mounted). */
  #shown = new Set<EzViewElement>();

  constructor() {
    super();
    this.active = '';
    this.lazy = false;
    this.destroyInactive = false;
  }

  /* ─── Public API ──────────────────────────────────────────────────────── */

  /** Active view by 0-based index; kept in sync with `active`. */
  get selectedIndex(): number {
    return this.#orderedViews().findIndex(v => v.id === this.active);
  }

  set selectedIndex(n: number) {
    const view = this.#orderedViews()[n];

    if (view) this.active = view.id;
  }

  /** Activate a view by `id` (escape hatch for event-driven controllers). */
  show(id: string): void {
    this.active = id;
  }

  /**
   * Show operation — **overridable**. Default attaches the view (if it was
   * detached under `lazy` / `destroy-inactive`), toggles the `active`
   * attribute, and dispatches `ez-view-show`. Override to run animations.
   */
  showView(view: EzViewElement, ctx: EzViewsContext): void {
    this.#attach(view);
    this.#shown.add(view);
    view.active = true;
    view.dispatchEvent(new CustomEvent(EzViewEvents.Show, { detail: ctx }));
  }

  /**
   * Hide operation — **overridable**. Default toggles off the `active`
   * attribute and dispatches `ez-view-hide`. DOM detachment (under
   * `destroy-inactive` / `lazy`) is reconciled separately so overrides can run
   * exit animations before the node leaves the tree.
   */
  hideView(view: EzViewElement, ctx: EzViewsContext): void {
    view.active = false;
    view.dispatchEvent(new CustomEvent(EzViewEvents.Hide, { detail: ctx }));
  }

  /* ─── Lifecycle ───────────────────────────────────────────────────────── */

  override firstUpdated(changed: PropertyValues): void {
    super.firstUpdated(changed);

    this.#prepareViews();

    const views = this.#orderedViews();

    let initial = this.active;

    if (!initial) {
      const siAttr = this.getAttribute('selected-index'),
        siIndex = siAttr === null ? NaN : Number(siAttr),
        preset = views.find(v => v.active);

      if (!Number.isNaN(siIndex) && views[siIndex]) {
        initial = views[siIndex].id;
      } else {
        initial = preset?.id ?? views[0]?.id ?? '';
      }
    }

    this.active = initial;
    this.#initialized = true;

    // Activate the initial view without announcing a change (no user action).
    this.#applyActive(true);
  }

  override updated(changed: PropertyValues): void {
    super.updated(changed);

    if (!this.#initialized) return;

    if (
      changed.has('active') ||
      changed.has('lazy') ||
      changed.has('destroyInactive')
    ) {
      this.#applyActive(false);
    }
  }

  /* ─── Internals ───────────────────────────────────────────────────────── */

  #onSlotChange = (): void => {
    if (!this.#initialized) return;

    this.#prepareViews();
    this.#applyActive(true);
  };

  /** Assign generated ids to any view lacking one (ids are the identifier). */
  #prepareViews(): void {
    this.querySelectorAll<EzViewElement>(':scope > ez-view').forEach(view => {
      if (!view.id) view.id = `ez-view-${++viewIdSeq}`;
    });
  }

  /** Ordered view list, including views currently detached via placeholders. */
  #orderedViews(): EzViewElement[] {
    const out: EzViewElement[] = [];

    Array.from(this.childNodes).forEach(node => {
      if (node instanceof EzViewElement) {
        out.push(node);
      } else if (node.nodeType === Node.COMMENT_NODE) {
        const view = this.#anchorOf.get(node as Comment);

        if (view) out.push(view);
      }
    });

    return out;
  }

  #applyActive(silent: boolean): void {
    const views = this.#orderedViews();

    if (!views.length) return;

    const requested = this.active,
      next = (requested && views.find(v => v.id === requested)) ?? views[0];

    if (!next) return;

    const prev =
        this.#activeView && this.#activeView !== next ? this.#activeView : null,
      alreadyActive =
        this.#activeView === next && next.active && !this.#anchors.has(next);

    if (alreadyActive) {
      if (this.active !== next.id) this.active = next.id;
      this.#reflectIndex();
      return;
    }

    const index = views.indexOf(next),
      ctx: EzViewsContext = { prev, next, index, id: next.id };

    // Hide the previously-active view plus any stray active views.
    views.forEach(v => {
      if (v !== next && v.active) this.hideView(v, ctx);
    });

    this.showView(next, ctx);

    this.#activeView = next;

    if (this.active !== next.id) this.active = next.id;

    this.#reconcileLayout();
    this.#reflectIndex();

    if (!silent) {
      this.dispatchEvent(
        new CustomEvent(EzViewsEvents.Change, {
          bubbles: true,
          composed: true,
          detail: { view: next, prevView: prev, id: next.id, index },
        })
      );
    }
  }

  /** Detach/attach inactive views per `lazy` / `destroy-inactive`. */
  #reconcileLayout(): void {
    this.#orderedViews().forEach(view => {
      const isActive = view.id === this.active;

      if (isActive) {
        this.#attach(view);
      } else if (this.destroyInactive) {
        this.#detach(view);
      } else if (this.lazy && !this.#shown.has(view)) {
        this.#detach(view);
      } else {
        this.#attach(view);
      }
    });
  }

  #reflectIndex(): void {
    const index = this.selectedIndex;

    if (index >= 0) this.setAttribute('selected-index', String(index));
  }

  /** Remove a view from the DOM, leaving a placeholder to preserve order. */
  #detach(view: EzViewElement): void {
    if (this.#anchors.has(view) || view.parentNode !== this) return;

    const anchor = document.createComment(`ez-view:${view.id}`);

    view.replaceWith(anchor);
    this.#anchors.set(view, anchor);
    this.#anchorOf.set(anchor, view);
  }

  /** Re-insert a previously detached view at its placeholder. */
  #attach(view: EzViewElement): void {
    const anchor = this.#anchors.get(view);

    if (!anchor) return;

    if (anchor.parentNode) anchor.replaceWith(view);

    this.#anchors.delete(view);
    this.#anchorOf.delete(anchor);
  }

  render(): TemplateResult {
    return html`<slot @slotchange=${this.#onSlotChange}></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-views': EzViewsElement;
  }
}
