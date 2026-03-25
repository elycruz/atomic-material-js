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
export class EzBadgeElement extends HTMLElement {
  static localName = ezBadgeName;

  get localName() {
    return ezBadgeName;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-badge': EzBadgeElement;
  }
}
