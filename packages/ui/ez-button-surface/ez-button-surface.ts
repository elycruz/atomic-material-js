export const ezButtonSurfaceName = 'ez-button-surface';

const _surfaceHtml = `
  <div class="head end-part" part="head"></div>
  <div class="center" part="center"></div>
  <div class="tail end-part" part="tail"></div>
  `,
  _styles = new CSSStyleSheet();

_styles.replaceSync(`
  :host {
    position: absolute;
    inset: 0;
    overflow: hidden;
    user-select: none;
    display: flex;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  :host > * {
    background: inherit;
  }

  .end-part {
    width: var(--ez-button-surface-end-size, 1.5rem);
    flex-shrink: 0;
  }

  .head {
    border-radius: inherit;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .tail {
    border-radius: inherit;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .center {
    flex: 1;
  }
`);

const _resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    const el = entry.target as EzButtonSurfaceElement,
      parent = el.parentElement;

    if (!parent) continue;

    const width =
      entry.borderBoxSize?.[0]?.inlineSize ?? entry.contentRect.width;

    if (width > 0) {
      // parent.style.width = `${width}px`;
    }
  }
});

/**
 * A three-part surface element for buttons that allows the center part
 * to scale via `transform: scaleX(...)` while preserving border-radius
 * on the head and tail end-caps.
 *
 * @element ez-button-surface
 *
 * @csspart head - Leading end-cap that preserves border-radius.
 * @csspart center - Center section that can be scaled.
 * @csspart tail - Trailing end-cap that preserves border-radius.
 *
 * @cssprop --ez-button-surface-end-size - Width of head/tail end-caps (default: 1.5rem).
 *
 * @example
 * ```html
 * <button class="ez-btn ez-theme-info _ez-with-button-surface">
 *   <ez-ripple></ez-ripple>
 *   <ez-button-surface></ez-button-surface>
 *   <span>Info</span>
 * </button>
 * ```
 */
export class EzButtonSurfaceElement extends HTMLElement {
  static localName = ezButtonSurfaceName;

  #initialized = false;

  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    shadow.adoptedStyleSheets.push(_styles);
    shadow.innerHTML = _surfaceHtml.trim();
  }

  connectedCallback() {
    if (!this.#initialized && this.isConnected) {
      _resizeObserver.observe(this);
      this.#initialized = true;
    }
  }

  disconnectedCallback() {
    if (this.#initialized) {
      _resizeObserver.unobserve(this);
      this.#initialized = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-button-surface': EzButtonSurfaceElement;
  }
}
