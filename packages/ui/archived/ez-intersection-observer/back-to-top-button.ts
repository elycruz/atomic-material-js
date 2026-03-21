import { LitElement, html, css } from 'lit';
import { registerCustomElement } from '../dom/registerCustomElement.js';

import '../../ez-intersection-observer/register.js';
import '../../ez-ripple/register.js';

export const BackToTopButtonName = 'back-to-top-button';

let _uuid = 0;

export class BackToTopButtonElement extends LitElement {
  static localName = BackToTopButtonName;

  static override styles = css`
    :host {
      display: inline-flex;
      justify-content: flex-end;
      flex-flow: row nowrap;
      position: sticky;
      left: 100%;
      bottom: 1rem;
    }

    ez-intersection-observer > * {
      transition:
        transform 0.21s ease-in-out,
        opacity 0.21s;
      transform: translateX(100%);
      pointer-events: none;
      user-select: none;
      opacity: 0;
    }

    ez-intersection-observer.visible > * {
      pointer-events: all;
      transform: translateX(0);
      opacity: 1;
    }
  `;

  static properties = {
    anchorTarget: { type: String, attribute: 'anchor-target' },
    intersectingTarget: { type: String, attribute: 'intersecting-target' },
    rootSelector: { type: String, attribute: 'root-selector' },
    rootMargin: { type: String, attribute: 'root-margin' },
    threshold: { type: String },
    reverse: { type: Boolean },
  };

  anchorTarget = '#site-top';
  intersectingTarget = '#site-top';
  rootSelector?: string;
  rootMargin?: string;
  threshold?: string;
  reverse = false;

  #id = `back-to-top-btn-${_uuid++}`;

  override render() {
    const toggleId = this.#id;

    return html`
      <ez-intersection-observer
        id="${toggleId}"
        classNameToToggle="visible"
        classNameToToggleTarget="#${toggleId}"
        intersectingTarget="${this.intersectingTarget}"
        ?reverse="${this.reverse}"
        rootMargin="${this.rootMargin ?? ''}"
        root="${this.rootSelector ?? ''}"
        threshold="${this.threshold ?? ''}"
      >
        <a
          href="${this.anchorTarget}"
          class="back-to-top-btn ez-btn ez-filled ez-elevated ez-theme-primary"
        >
          <ez-ripple></ez-ripple>
          <slot><span>Back to top</span></slot>
        </a>
      </ez-intersection-observer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [BackToTopButtonName]: BackToTopButtonElement;
  }
}

registerCustomElement(BackToTopButtonName, BackToTopButtonElement);
