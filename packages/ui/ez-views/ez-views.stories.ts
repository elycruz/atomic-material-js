import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import '../ez-tab/register.js';
import '../ez-tabs/register.js';
import '../ez-view/register.js';
import './register.js';
import { EzViewsName, EzViewsEvents } from './ez-views.js';
import { EzViewEvents } from '../ez-view/ez-view.js';

export default {
  title: 'Custom Elements/Views',
  component: EzViewsName,
};

type Story = StoryObj;

interface Updatable {
  updateComplete: Promise<boolean>;
}

const settle = (el: Element | null | undefined): Promise<boolean> =>
  (el as unknown as Updatable)?.updateComplete ?? Promise.resolve(true);

/* ─── Standalone stack — switch by id, index, and show() ─────────────────── */

export const StandaloneSwitching: Story = {
  render: () => html`
    <section>
      <header><h2>Standalone View Stack</h2></header>

      <ez-views id="standalone-views">
        <ez-view id="view-one">First view</ez-view>
        <ez-view id="view-two">Second view</ez-view>
        <ez-view id="view-three">Third view</ez-view>
      </ez-views>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const views = canvasElement.querySelector<HTMLElement>('ez-views');

    await settle(views);

    const items = Array.from(
      views?.querySelectorAll<HTMLElement>('ez-view') ?? []
    );

    await expect(items.length).toBe(3);

    // Defaults to the first view's id.
    await expect((views as unknown as { active: string }).active).toBe(
      'view-one'
    );
    await expect(items[0]?.hasAttribute('active')).toBe(true);
    await expect(items[1]?.hasAttribute('active')).toBe(false);

    // Activate by id.
    (views as unknown as { active: string }).active = 'view-two';
    await settle(views);

    await expect(items[1]?.hasAttribute('active')).toBe(true);
    await expect(items[0]?.hasAttribute('active')).toBe(false);

    // Activate by index — kept in sync with `active`.
    (views as unknown as { selectedIndex: number }).selectedIndex = 2;
    await settle(views);

    await expect(items[2]?.hasAttribute('active')).toBe(true);
    await expect((views as unknown as { active: string }).active).toBe(
      'view-three'
    );
    await expect(
      (views as unknown as { selectedIndex: number }).selectedIndex
    ).toBe(2);

    // Escape-hatch `show(id)`.
    (views as unknown as { show: (id: string) => void }).show('view-one');
    await settle(views);

    await expect(items[0]?.hasAttribute('active')).toBe(true);
    await expect(items[2]?.hasAttribute('active')).toBe(false);
  },
};

/* ─── ez-views-change event + ez-view-show / ez-view-hide lifecycle ──────── */

export const ChangeAndLifecycleEvents: Story = {
  render: () => html`
    <section>
      <header><h2>Change &amp; Lifecycle Events</h2></header>

      <ez-views id="event-views">
        <ez-view id="ev-one">One</ez-view>
        <ez-view id="ev-two">Two</ez-view>
      </ez-views>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const views = canvasElement.querySelector<HTMLElement>('ez-views');

    await settle(views);

    const items = Array.from(
      views?.querySelectorAll<HTMLElement>('ez-view') ?? []
    );

    let changeCount = 0,
      changeId = '',
      changeIndex = -1,
      changeView: Element | null = null,
      changePrev: Element | null = null,
      showCount = 0,
      hideCount = 0;

    views?.addEventListener(EzViewsEvents.Change, (e: Event) => {
      const detail = (e as CustomEvent).detail as {
        id: string;
        index: number;
        view: Element;
        prevView: Element | null;
      };

      changeCount++;
      changeId = detail.id;
      changeIndex = detail.index;
      changeView = detail.view;
      changePrev = detail.prevView;
    });

    items[1]?.addEventListener(EzViewEvents.Show, () => {
      showCount++;
    });
    items[0]?.addEventListener(EzViewEvents.Hide, () => {
      hideCount++;
    });

    (views as unknown as { active: string }).active = 'ev-two';
    await settle(views);

    await expect(changeCount).toBe(1);
    await expect(showCount).toBe(1);
    await expect(hideCount).toBe(1);
    await expect(changeId).toBe('ev-two');
    await expect(changeIndex).toBe(1);
    await expect(changeView).toBe(items[1]);
    await expect(changePrev).toBe(items[0]);
  },
};

/* ─── Tabs-driven stack — declarative for / controls wiring ──────────────── */

export const TabsDriven: Story = {
  render: () => html`
    <section>
      <header><h2>Tabs-driven View Stack</h2></header>

      <ez-tabs for="posts-views" aria-label="Posts">
        <ez-tab active controls="post-index">Index</ez-tab>
        <ez-tab controls="post-create">Create</ez-tab>
        <ez-tab controls="post-update">Update</ez-tab>
      </ez-tabs>

      <ez-views id="posts-views">
        <ez-view id="post-index">Index content</ez-view>
        <ez-view id="post-create">Create content</ez-view>
        <ez-view id="post-update">Update content</ez-view>
      </ez-views>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const tabs = canvasElement.querySelector<HTMLElement>('ez-tabs'),
      views = canvasElement.querySelector<HTMLElement>('ez-views');

    await settle(tabs);
    await settle(views);

    const tabItems = Array.from(
        tabs?.querySelectorAll<HTMLElement>('ez-tab') ?? []
      ),
      viewItems = Array.from(
        views?.querySelectorAll<HTMLElement>('ez-view') ?? []
      );

    // Initial active tab drives the matching view.
    await expect((views as unknown as { active: string }).active).toBe(
      'post-index'
    );
    await expect(viewItems[0]?.hasAttribute('active')).toBe(true);

    // ARIA wiring: tab -> aria-controls, view -> aria-labelledby (tab id).
    await expect(tabItems[0]?.getAttribute('aria-controls')).toBe('post-index');
    await expect(tabItems[0]?.id).toBeTruthy();
    await expect(viewItems[0]?.getAttribute('aria-labelledby')).toBe(
      tabItems[0]?.id
    );

    // Clicking a tab activates its controlled view.
    tabItems[1]?.click();
    await settle(tabs);
    await settle(views);

    await expect((views as unknown as { active: string }).active).toBe(
      'post-create'
    );
    await expect(viewItems[1]?.hasAttribute('active')).toBe(true);
    await expect(viewItems[0]?.hasAttribute('active')).toBe(false);
  },
};

/* ─── Lazy — inactive views deferred until first activation ──────────────── */

export const Lazy: Story = {
  render: () => html`
    <section>
      <header><h2>Lazy View Stack</h2></header>

      <ez-views id="lazy-views" lazy>
        <ez-view id="lazy-one">One</ez-view>
        <ez-view id="lazy-two">Two</ez-view>
      </ez-views>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const views = canvasElement.querySelector<HTMLElement>('ez-views');

    await settle(views);

    // Active view present; inactive view not yet rendered.
    await expect(views?.querySelector('#lazy-one')).toBeTruthy();
    await expect(views?.querySelector('#lazy-two')).toBeFalsy();

    (views as unknown as { active: string }).active = 'lazy-two';
    await settle(views);

    // Now rendered…
    await expect(views?.querySelector('#lazy-two')).toBeTruthy();

    // …and lazy keeps it mounted after switching away.
    (views as unknown as { active: string }).active = 'lazy-one';
    await settle(views);

    await expect(views?.querySelector('#lazy-two')).toBeTruthy();
  },
};

/* ─── Destroy-inactive — only the active view stays in the DOM ───────────── */

export const DestroyInactive: Story = {
  render: () => html`
    <section>
      <header><h2>Destroy-inactive View Stack</h2></header>

      <ez-views id="destroy-views" destroy-inactive>
        <ez-view id="destroy-one">One</ez-view>
        <ez-view id="destroy-two">Two</ez-view>
      </ez-views>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const views = canvasElement.querySelector<HTMLElement>('ez-views');

    await settle(views);

    await expect(views?.querySelector('#destroy-one')).toBeTruthy();
    await expect(views?.querySelector('#destroy-two')).toBeFalsy();

    (views as unknown as { active: string }).active = 'destroy-two';
    await settle(views);

    // Previously-active view leaves the DOM; new active view enters.
    await expect(views?.querySelector('#destroy-two')).toBeTruthy();
    await expect(views?.querySelector('#destroy-one')).toBeFalsy();
  },
};
