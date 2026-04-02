import {
  html,
  type CSSResultGroup,
  unsafeCSS,
  type TemplateResult,
  type PropertyValues,
} from 'lit';

import { EzBaseElement } from '../ez-base/ez-base.js';
import { EzTabElement } from '../ez-tab/ez-tab.js';

import tabsCssStr from '../scss/modules/tabs.scss?inline';
import cssStr from './ez-tabs.scss?inline';

const tabsStyles = unsafeCSS(tabsCssStr),
  styles = unsafeCSS(cssStr);

export const EzTabsName = 'ez-tabs';

export const EzTabsEvents: Record<string, string> = {
  TabChange: `${EzTabsName}-tab-change`,
};

export type EzTabsVariant = 'primary' | 'secondary';

export class EzTabsElement extends EzBaseElement {
  static localName = EzTabsName;

  static override styles: CSSResultGroup = [
    EzBaseElement.styles,
    tabsStyles,
    styles,
  ];

  static override properties = {
    ...(EzBaseElement as unknown as typeof EzBaseElement).properties,
    variant: { type: String, reflect: true },
  };

  declare variant: EzTabsVariant | '';

  constructor() {
    super();
    this.variant = 'primary';
  }

  #resizeObserver: ResizeObserver | null = null;

  #indicator: HTMLElement | null = null;

  #container: HTMLElement | null = null;

  #syncIndicator(): void {
    const container = this.#container,
      indicator = this.#indicator,
      activeTab = this.querySelector<EzTabElement>('ez-tab[active]');

    if (!container || !indicator || !activeTab) return;

    const tabsRect = container.getBoundingClientRect(),
      tabRect = activeTab.getBoundingClientRect(),
      isPrimary = !this.variant || this.variant === 'primary',
      indicatorInset = isPrimary ? 2 : 0;

    indicator.style.width = `${tabRect.width - indicatorInset * 2}px`;
    indicator.style.transform = `translateX(${
      tabRect.left - tabsRect.left + container.scrollLeft + indicatorInset
    }px)`;
  }

  #onTabClick = (e: Event): void => {
    const target = e.target as HTMLElement,
      tab = target.closest<EzTabElement>('ez-tab');

    if (!tab || !this.contains(tab)) return;

    const prevActive = this.querySelector<EzTabElement>('ez-tab[active]');

    if (prevActive === tab) return;

    if (prevActive) prevActive.active = false;

    tab.active = true;

    this.#syncIndicator();

    this.dispatchEvent(
      new CustomEvent(EzTabsEvents.TabChange, {
        bubbles: true,
        composed: true,
        detail: { tab, prevTab: prevActive },
      })
    );
  };

  #onKeyDown = (e: KeyboardEvent): void => {
    const tabs = Array.from(this.querySelectorAll<EzTabElement>('ez-tab'));

    if (!tabs.length) return;

    const activeIndex = tabs.findIndex(t => t.active);

    let nextIndex = activeIndex;

    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();

    if (nextIndex === activeIndex) return;

    const prevActive = tabs[activeIndex],
      nextTab = tabs[nextIndex];

    if (prevActive) prevActive.active = false;

    if (!nextTab) return;

    nextTab.active = true;
    nextTab.focus();

    this.#syncIndicator();

    this.dispatchEvent(
      new CustomEvent(EzTabsEvents.TabChange, {
        bubbles: true,
        composed: true,
        detail: { tab: nextTab, prevTab: prevActive },
      })
    );
  };

  #onSlotChange = (): void => {
    this.#syncIndicator();
  };

  override firstUpdated(_changedProperties: PropertyValues): void {
    super.firstUpdated(_changedProperties);

    this.#container = this.renderRoot.querySelector<HTMLElement>('.ez-tabs');
    this.#indicator = this.renderRoot.querySelector<HTMLElement>(
      '.ez-tabs__indicator'
    );

    this.addEventListener('click', this.#onTabClick);
    this.addEventListener('keydown', this.#onKeyDown);

    this.#resizeObserver = new ResizeObserver(() => {
      this.#syncIndicator();
    });

    this.#resizeObserver.observe(this);

    this.#syncIndicator();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();

    this.removeEventListener('click', this.#onTabClick);
    this.removeEventListener('keydown', this.#onKeyDown);

    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
  }

  override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('variant')) {
      this.#syncIndicator();
    }
  }

  get variantClass(): string {
    if (!this.variant || this.variant === 'primary') return 'ez-primary';

    if (this.variant === 'secondary') return 'ez-secondary';

    return '';
  }

  render(): TemplateResult {
    return html`
      <div class="ez-tabs ${this.variantClass}" role="tablist">
        <div class="ez-tabs__indicator"></div>
        <slot @slotchange=${this.#onSlotChange}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ez-tabs': EzTabsElement;
  }
}
