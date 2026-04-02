import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import './../ez-ripple';

export default {
  title: 'CSS Components/Tabs',
};

type Story = StoryObj;

/**
 * Moves the `.ez-tabs__indicator` element to track the active tab.
 * Call after setting `.ez-active` on a tab.
 */
function syncIndicator(tabsEl: Element) {
  const indicator = tabsEl.querySelector<HTMLElement>('.ez-tabs__indicator'),
    activeTab = tabsEl.querySelector<HTMLElement>('.ez-tab.ez-active');

  if (!indicator || !activeTab) return;

  const tabsRect = tabsEl.getBoundingClientRect(),
    tabRect = activeTab.getBoundingClientRect(),
    isPrimary = tabsEl.classList.contains('ez-primary'),
    indicatorInset = isPrimary ? 2 : 0;

  indicator.style.width = `${tabRect.width - indicatorInset * 2}px`;
  indicator.style.transform = `translateX(${tabRect.left - tabsRect.left + tabsEl.scrollLeft + indicatorInset}px)`;
}

/**
 * Attaches click-based tab-switching behaviour to an `.ez-tabs` element.
 * Returns an unsubscribe function.
 */
function initTabs(tabsEl: Element) {
  function onClick(e: Event) {
    const tab = (e.target as HTMLElement).closest<HTMLElement>('.ez-tab');

    if (!tab || !tabsEl.contains(tab)) return;

    tabsEl
      .querySelectorAll('.ez-tab')
      .forEach(t => t.classList.remove('ez-active'));
    tab.classList.add('ez-active');
    syncIndicator(tabsEl);
  }

  tabsEl.addEventListener('click', onClick);
  syncIndicator(tabsEl);

  return () => tabsEl.removeEventListener('click', onClick);
}

/* ─── Primary tabs — label only ─────────────────────────────────────────── */

export const PrimaryLabelOnly: Story = {
  render: () => html`
    <section>
      <header><h2>Primary Tabs — Label Only</h2></header>

      <div
        class="ez-tabs ez-primary"
        role="tablist"
        aria-label="Primary tabs demo"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">Flights</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">Trips</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">Explore</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('.ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__label')?.textContent).toBe(
      'Flights'
    );

    if (tabs) initTabs(tabs);
  },
};

/* ─── Primary tabs — icon + label ───────────────────────────────────────── */

export const PrimaryIconAndLabel: Story = {
  render: () => html`
    <section>
      <header><h2>Primary Tabs — Icon + Label</h2></header>

      <div
        class="ez-tabs ez-primary"
        role="tablist"
        aria-label="Primary tabs with icons"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">flight</span>
          <span class="ez-tab__label">Flights</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">luggage</span>
          <span class="ez-tab__label">Trips</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">explore</span>
          <span class="ez-tab__label">Explore</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('.ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__icon')).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__label')).toBeInTheDocument();

    if (tabs) initTabs(tabs);
  },
};

/* ─── Secondary tabs — label only ───────────────────────────────────────── */

export const SecondaryLabelOnly: Story = {
  render: () => html`
    <section>
      <header><h2>Secondary Tabs — Label Only</h2></header>

      <div
        class="ez-tabs ez-secondary"
        role="tablist"
        aria-label="Secondary tabs demo"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">Photos</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">Albums</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="ez-tab__label">For You</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs.ez-secondary');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('.ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();

    if (tabs) initTabs(tabs);
  },
};

/* ─── Primary tabs — inline icon + label ────────────────────────────────── */

export const PrimaryInlineIcon: Story = {
  render: () => html`
    <section>
      <header><h2>Primary Tabs — Inline Icon + Label</h2></header>

      <div
        class="ez-tabs ez-primary"
        role="tablist"
        aria-label="Primary tabs with inline icons"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-inline ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">flight</span>
          <span class="ez-tab__label">Flights</span>
        </button>

        <button
          class="ez-tab ez-inline"
          type="button"
          role="tab"
          aria-selected="false"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">luggage</span>
          <span class="ez-tab__label">Trips</span>
        </button>

        <button
          class="ez-tab ez-inline"
          type="button"
          role="tab"
          aria-selected="false"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">explore</span>
          <span class="ez-tab__label">Explore</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('.ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();
    await expect(active?.classList.contains('ez-inline')).toBe(true);
    await expect(active?.querySelector('.ez-tab__icon')).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__label')).toBeInTheDocument();

    if (tabs) initTabs(tabs);
  },
};

/* ─── Secondary tabs — icon + label ─────────────────────────────────────── */

export const SecondaryIconAndLabel: Story = {
  render: () => html`
    <section>
      <header><h2>Secondary Tabs — Icon + Label</h2></header>

      <div
        class="ez-tabs ez-secondary"
        role="tablist"
        aria-label="Secondary tabs with icons"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">photo</span>
          <span class="ez-tab__label">Photos</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true"
            >photo_album</span
          >
          <span class="ez-tab__label">Albums</span>
        </button>

        <button class="ez-tab" type="button" role="tab" aria-selected="false">
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">star</span>
          <span class="ez-tab__label">For You</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs.ez-secondary');

    await expect(tabs).toBeInTheDocument();

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__icon')).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__label')).toBeInTheDocument();

    if (tabs) initTabs(tabs);
  },
};

/* ─── Secondary tabs — inline icon + label ──────────────────────────────── */

export const SecondaryInlineIcon: Story = {
  render: () => html`
    <section>
      <header><h2>Secondary Tabs — Inline Icon + Label</h2></header>

      <div
        class="ez-tabs ez-secondary"
        role="tablist"
        aria-label="Secondary tabs with inline icons"
      >
        <div class="ez-tabs__indicator"></div>

        <button
          class="ez-tab ez-inline ez-active"
          type="button"
          role="tab"
          aria-selected="true"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">photo</span>
          <span class="ez-tab__label">Photos</span>
        </button>

        <button
          class="ez-tab ez-inline"
          type="button"
          role="tab"
          aria-selected="false"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true"
            >photo_album</span
          >
          <span class="ez-tab__label">Albums</span>
        </button>

        <button
          class="ez-tab ez-inline"
          type="button"
          role="tab"
          aria-selected="false"
        >
          <ez-ripple></ez-ripple>
          <span class="md-icon ez-tab__icon" aria-hidden="true">star</span>
          <span class="ez-tab__label">For You</span>
        </button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector('.ez-tabs.ez-secondary');

    await expect(tabs).toBeInTheDocument();

    const active = tabs?.querySelector('.ez-tab.ez-active');

    await expect(active).toBeInTheDocument();
    await expect(active?.classList.contains('ez-inline')).toBe(true);
    await expect(active?.querySelector('.ez-tab__icon')).toBeInTheDocument();
    await expect(active?.querySelector('.ez-tab__label')).toBeInTheDocument();

    if (tabs) initTabs(tabs);
  },
};
