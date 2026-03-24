import { LitElement, html, type CSSResultGroup } from 'lit';

import styles from './ez-badge.style.js';

export const ezBadgeName = 'ez-badge';

/**
 * `<ez-badge>` — MD3 badge custom element.
 *
 * Wraps content and displays a badge indicator (small dot or large badge).
 * Badge content is provided as child text content of the element.
 *
 * @example
 * ```html
 * <!-- Small dot badge (no text content) -->
 * <ez-badge>
 *   <button>Notifications</button>
 * </ez-badge>
 *
 * <!-- Large badge with count -->
 * <ez-badge>
 *   3
 *   <button>Notifications</button>
 * </ez-badge>
 * ```
 */
export class EzBadgeElement extends LitElement {
  static localName = ezBadgeName;

  static get styles(): CSSResultGroup {
    return styles;
  }

  static properties = {
    _badgeText: { state: true },
  };

  _badgeText = '';

  #observer: MutationObserver | null = null;

  connectedCallback() {
    super.connectedCallback();
    this.#applyParentPosition();
    this.#extractBadgeText();
    this.#observer = new MutationObserver(() => {
      this.#extractBadgeText();
    });
    this.#observer.observe(this, {
      childList: true,
      characterData: true,
      subtree: true,
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#observer?.disconnect();
    this.#observer = null;
  }

  #applyParentPosition() {
    const parent = this.parentElement;

    if (!parent) return;

    const { position } = getComputedStyle(parent);

    if (position === 'static' || position === '') {
      parent.style.position = 'relative';
    }
  }

  #extractBadgeText() {
    const text = Array.from(this.childNodes)
      .filter(node => node.nodeType === Node.TEXT_NODE)
      .map(node => node.textContent?.trim() ?? '')
      .join('')
      .trim();

    this._badgeText = text;
  }

  render() {
    return html`
      <slot></slot>
      <span class="badge${this._badgeText ? ' large' : ''}" part="badge">
        ${this._badgeText}
      </span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-badge': EzBadgeElement;
  }
}
