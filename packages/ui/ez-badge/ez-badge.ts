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

  #slotElement: HTMLSlotElement | null = null;

  firstUpdated() {
    this.#slotElement = this.shadowRoot?.querySelector('slot') ?? null;

    this.#updateBadgeText();

    // Listen to slotchange events to update badge text when content changes
    this.#slotElement?.addEventListener('slotchange', () => {
      this.#updateBadgeText();
    });
  }

  connectedCallback() {
    super.connectedCallback();

    this.#applyParentPosition();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.#slotElement?.removeEventListener('slotchange', this.#updateBadgeText);
  }

  #applyParentPosition() {
    const parent = this.parentElement;

    if (!parent) return;

    const { position } = getComputedStyle(parent);

    if (position === 'static' || position === '') {
      parent.style.position = 'relative';
    }
  }

  #updateBadgeText = () => {
    if (!this.#slotElement) return;

    // Get text content from the slot's assigned nodes
    const assignedNodes = this.#slotElement.assignedNodes({ flatten: true });

    const text = assignedNodes
      .map(node => node.textContent?.trim() ?? '')
      .join('')
      .trim();

    this._badgeText = text;
  };

  render() {
    return html`
      <slot hidden></slot>
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
