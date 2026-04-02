import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import '../ez-tab/register.js';
import './register.js';
import { EzTabsName, EzTabsEvents } from './ez-tabs.js';

export default {
  title: 'Custom Elements/Tabs',
  component: EzTabsName,
};

type Story = StoryObj;

/* ─── Primary tabs — label only ─────────────────────────────────────────── */

export const PrimaryLabelOnly: Story = {
  render: () => html`
    <section>
      <header><h2>Primary Tabs — Label Only</h2></header>

      <ez-tabs variant="primary" aria-label="Primary tabs demo">
        <ez-tab active>Flights</ez-tab>
        <ez-tab>Trips</ez-tab>
        <ez-tab>Explore</ez-tab>
      </ez-tabs>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('ez-tab[active]');

    await expect(active).toBeInTheDocument();
  },
};

/* ─── Primary tabs — icon + label ───────────────────────────────────────── */

export const PrimaryIconAndLabel: Story = {
  render: () => html`
    <section>
      <header><h2>Primary Tabs — Icon + Label</h2></header>

      <ez-tabs variant="primary" aria-label="Primary tabs with icons">
        <ez-tab active>
          <span slot="icon" class="md-icon" aria-hidden="true">flight</span>
          Flights
        </ez-tab>
        <ez-tab>
          <span slot="icon" class="md-icon" aria-hidden="true">luggage</span>
          Trips
        </ez-tab>
        <ez-tab>
          <span slot="icon" class="md-icon" aria-hidden="true">explore</span>
          Explore
        </ez-tab>
      </ez-tabs>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = tabs?.querySelectorAll('ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('ez-tab[active]');

    await expect(active).toBeInTheDocument();
    await expect(active?.querySelector('[slot="icon"]')).toBeInTheDocument();
  },
};

/* ─── Secondary tabs — label only ───────────────────────────────────────── */

export const SecondaryLabelOnly: Story = {
  render: () => html`
    <section>
      <header><h2>Secondary Tabs — Label Only</h2></header>

      <ez-tabs variant="secondary" aria-label="Secondary tabs demo">
        <ez-tab active>Photos</ez-tab>
        <ez-tab>Albums</ez-tab>
        <ez-tab>For You</ez-tab>
      </ez-tabs>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs');

    await expect(tabs).toBeInTheDocument();
    await expect(tabs?.getAttribute('variant')).toBe('secondary');

    const tabItems = tabs?.querySelectorAll('ez-tab');

    await expect(tabItems?.length).toBe(3);

    const active = tabs?.querySelector('ez-tab[active]');

    await expect(active).toBeInTheDocument();
  },
};

/* ─── Secondary tabs — icon + label ─────────────────────────────────────── */

export const SecondaryIconAndLabel: Story = {
  render: () => html`
    <section>
      <header><h2>Secondary Tabs — Icon + Label</h2></header>

      <ez-tabs variant="secondary" aria-label="Secondary tabs with icons">
        <ez-tab active>
          <span slot="icon" class="md-icon" aria-hidden="true">photo</span>
          Photos
        </ez-tab>
        <ez-tab>
          <span slot="icon" class="md-icon" aria-hidden="true"
            >photo_album</span
          >
          Albums
        </ez-tab>
        <ez-tab>
          <span slot="icon" class="md-icon" aria-hidden="true">star</span>
          For You
        </ez-tab>
      </ez-tabs>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const active = tabs?.querySelector('ez-tab[active]');

    await expect(active).toBeInTheDocument();
    await expect(active?.querySelector('[slot="icon"]')).toBeInTheDocument();
  },
};

/* ─── Tab change event ───────────────────────────────────────────────────── */

export const TabChangeEvent: Story = {
  render: () => html`
    <section>
      <header><h2>Tab Change Event</h2></header>

      <ez-tabs
        variant="primary"
        aria-label="Tab change event demo"
        @ez-tabs-tab-change=${(e: CustomEvent) => {
          const output = (e.currentTarget as HTMLElement)
            .closest('section')
            ?.querySelector('output');

          if (output) {
            const detail = e.detail as { tab: HTMLElement };

            output.textContent = `Active tab: ${detail.tab?.textContent?.trim()}`;
          }
        }}
      >
        <ez-tab active>First</ez-tab>
        <ez-tab>Second</ez-tab>
        <ez-tab>Third</ez-tab>
      </ez-tabs>

      <output style="display: block; margin-top: 1rem;"
        >Active tab: First</output
      >
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs');

    await expect(tabs).toBeInTheDocument();

    const tabItems = Array.from(
      tabs?.querySelectorAll('ez-tab') ?? []
    ) as HTMLElement[];

    await expect(tabItems.length).toBe(3);

    let tabChangeCount = 0;

    tabs?.addEventListener(EzTabsEvents.TabChange, () => {
      tabChangeCount++;
    });

    tabItems[1]?.click();

    await Promise.all(
      [tabItems[0], tabItems[1]]
        .filter(Boolean)
        .map(
          t =>
            (t as unknown as { updateComplete: Promise<boolean> })
              .updateComplete
        )
    );

    await expect(tabItems[1]?.hasAttribute('active')).toBe(true);
    await expect(tabItems[0]?.hasAttribute('active')).toBe(false);
    await expect(tabChangeCount).toBe(1);
  },
};
