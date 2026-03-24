import { LitElement, html, type CSSResultGroup } from 'lit';

import styles from './ez-badge.style.js';

export const ezBadgeName = 'ez-badge';

/**
 * `<ez-badge>` — MD3 badge custom element.
 *
 * Displays a badge indicator (small dot or large badge with text).
 * Badge content is the element's text content.
 *
 * @example
 * ```html
 * <!-- Small dot badge (no text content) -->
 * <ez-badge></ez-badge>
 *
 * <!-- Large badge with count -->
 * <ez-badge>3</ez-badge>
 * <ez-badge>999+</ez-badge>
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
    this.#updateBadgeText();
    this.#observer = new MutationObserver(() => {
      this.#updateBadgeText();
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

  #updateBadgeText() {
    this._badgeText = this.textContent?.trim() ?? '';
  }

  render() {
    return html`
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
