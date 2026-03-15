import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';
import './stories.scss';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';
import { EzStyleVariants, EzThemeVariants } from '../utils/index.js';

export default {
  title: 'Custom Elements/Appbar',
  component: 'ez-appbar',
};

const themes = Object.values(EzThemeVariants),
  styleVariants = Object.values(EzStyleVariants).filter(Boolean);

/**
 * Small appbar (default) — 64dp height, title-large typography.
 */
export const SmallDefault: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Small Appbar (Default)</h2></header>
      <div class="scroll-pane">
        <ez-appbar parentSelector=".scroll-pane">
          <h1>App Title</h1>
        </ez-appbar>
        <lipsum-article></lipsum-article>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbar = canvasElement.querySelector(EzAppbarName);

    await expect(appbar).not.toBeNull();

    if (!appbar) return;

    await expect(appbar.shadowRoot).not.toBeNull();
    await expect(appbar.shadowRoot?.querySelector('slot')).not.toBeNull();

    // Default size: no .ez-medium or .ez-large
    await expect(appbar.classList.contains('ez-medium')).toBe(false);
    await expect(appbar.classList.contains('ez-large')).toBe(false);
  },
};

/**
 * Small appbar with subtitle.
 */
export const SmallWithSubtitle: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Small Appbar with Subtitle</h2></header>
      <div style="border: 1px solid #ccc; overflow: hidden;">
        <ez-appbar>
          <hgroup>
            <h1>App Title</h1>
            <p>Subtitle text</p>
          </hgroup>
        </ez-appbar>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbar = canvasElement.querySelector(EzAppbarName);

    await expect(appbar).not.toBeNull();

    if (!appbar) return;

    const subtitle = appbar.querySelector('p');

    await expect(subtitle).not.toBeNull();
    await expect(subtitle?.textContent).toBe('Subtitle text');
  },
};

/**
 * Size variants — small (default), medium (112dp), large (120dp).
 */
export const SizeVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Size Variants</h2></header>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar>
            <h1>Small (Default)</h1>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar size="medium">
            <h1>Medium</h1>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar size="medium" class="ez-has-subtitle">
            <hgroup>
              <h1>Medium</h1>
              <p>With subtitle</p>
            </hgroup>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar size="large">
            <h1>Large</h1>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar size="large" class="ez-has-subtitle">
            <hgroup>
              <h1>Large</h1>
              <p>With subtitle</p>
            </hgroup>
          </ez-appbar>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName));

    await expect(appbars.length).toBe(5);

    // First: small (default) — no size class
    await expect(appbars[0].classList.contains('ez-medium')).toBe(false);
    await expect(appbars[0].classList.contains('ez-large')).toBe(false);

    // Second: medium
    await expect(appbars[1].classList.contains('ez-medium')).toBe(true);

    // Third: medium with subtitle
    await expect(appbars[2].classList.contains('ez-medium')).toBe(true);
    await expect(appbars[2].classList.contains('ez-has-subtitle')).toBe(true);

    // Fourth: large
    await expect(appbars[3].classList.contains('ez-large')).toBe(true);

    // Fifth: large with subtitle
    await expect(appbars[4].classList.contains('ez-large')).toBe(true);
    await expect(appbars[4].classList.contains('ez-has-subtitle')).toBe(true);
  },
};

/**
 * Style variants — filled, outlined, elevated.
 */
export const StyleVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Style Variants</h2></header>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar>
            <h1>Default</h1>
          </ez-appbar>
        </div>

        ${styleVariants.map(
          v => html`
            <div style="border: 1px solid #ccc; overflow: hidden;">
              <ez-appbar variety=${v} theme="primary">
                <h1>${v}</h1>
              </ez-appbar>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName));

    await expect(appbars.length).toBe(styleVariants.length + 1);

    // Check filled variant maps to host class
    const filledAppbar = canvasElement.querySelector(
      `${EzAppbarName}[variety="filled"]`
    );

    await expect(filledAppbar).not.toBeNull();

    if (!filledAppbar) return;

    await expect(filledAppbar.classList.contains('ez-filled')).toBe(true);
    await expect(filledAppbar.classList.contains('ez-theme-primary')).toBe(
      true
    );

    // Check outlined variant
    const outlinedAppbar = canvasElement.querySelector(
      `${EzAppbarName}[variety="outlined"]`
    );

    await expect(outlinedAppbar).not.toBeNull();
    await expect(outlinedAppbar?.classList.contains('ez-outlined')).toBe(true);

    // Check elevated variant
    const elevatedAppbar = canvasElement.querySelector(
      `${EzAppbarName}[variety="elevated"]`
    );

    await expect(elevatedAppbar).not.toBeNull();
    await expect(elevatedAppbar?.classList.contains('ez-elevated')).toBe(true);
  },
};

/**
 * Theme variants — primary, secondary, tertiary, etc.
 */
export const ThemeVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Theme Variants (Filled)</h2></header>
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        ${themes.map(
          t => html`
            <div style="border: 1px solid #ccc; overflow: hidden;">
              <ez-appbar variety="filled" theme=${t}>
                <h1>${t}</h1>
              </ez-appbar>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName));

    await expect(appbars.length).toBe(themes.length);

    // Each appbar should have theme class on host
    const classChecks = appbars.map((appbar, i) => [
      appbar.classList.contains(`ez-theme-${themes[i]}`),
      appbar.classList.contains('ez-filled'),
    ]);

    await expect(classChecks.every(([theme, filled]) => theme && filled)).toBe(
      true
    );
  },
};

/**
 * Scroll behavior — appbar within a scroll container showing hide/show.
 */
export const ScrollBehavior: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Scroll Behavior</h2></header>
      <div
        class="scroll-pane"
        style="height: 300px; overflow-y: auto; border: 1px solid #ccc;"
      >
        <ez-appbar parent-selector=".scroll-pane">
          <h1>Sticky Appbar</h1>
        </ez-appbar>
        <div style="padding: 1rem;">
          ${Array.from(
            { length: 20 },
            (_, i) => html`<p>Scroll content paragraph ${i + 1}.</p>`
          )}
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbar = canvasElement.querySelector(EzAppbarName);

    await expect(appbar).not.toBeNull();

    if (!appbar) return;

    await expect(appbar.getAttribute('parent-selector')).toBe('.scroll-pane');
    await expect(appbar.shadowRoot).not.toBeNull();
  },
};

/**
 * Bottom appbar — positioned at the bottom.
 */
export const BottomAppbar: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Bottom Appbar</h2></header>
      <div
        style="height: 200px; position: relative; border: 1px solid #ccc; display: flex; flex-direction: column;"
      >
        <div style="flex: 1; padding: 1rem;">
          <p>Content above the bottom appbar.</p>
        </div>
        <ez-appbar class="ez--bottom" variety="filled" theme="primary">
          <h1>Bottom Bar</h1>
        </ez-appbar>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbar = canvasElement.querySelector(EzAppbarName);

    await expect(appbar).not.toBeNull();

    if (!appbar) return;

    await expect(appbar.classList.contains('ez--bottom')).toBe(true);
    await expect(appbar.classList.contains('ez-filled')).toBe(true);
    await expect(appbar.classList.contains('ez-theme-primary')).toBe(true);
  },
};
