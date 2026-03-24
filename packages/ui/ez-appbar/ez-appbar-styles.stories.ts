import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';

export default {
  title: 'Custom Elements/Appbar/Styles',
  component: 'ez-appbar',
};

/**
 * Appbar style variants: filled (default), outlined, and elevated.
 */
export const AppbarStyles: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Appbar Styles</h2></header>

      <div
        style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;"
      >
        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar variety="filled" theme="primary">
            <h1>Filled</h1>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar variety="outlined" theme="primary">
            <h1>Outlined</h1>
          </ez-appbar>
        </div>

        <div style="border: 1px solid #ccc; overflow: hidden;">
          <ez-appbar variety="elevated" theme="primary">
            <h1>Elevated</h1>
          </ez-appbar>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName));

    await expect(appbars.length).toBe(3);

    const [filled, outlined, elevated] = appbars;

    // Filled
    await expect(filled.classList.contains('ez-filled')).toBe(true);
    await expect(filled.classList.contains('ez-theme-primary')).toBe(true);

    // Outlined
    await expect(outlined.classList.contains('ez-outlined')).toBe(true);
    await expect(outlined.classList.contains('ez-theme-primary')).toBe(true);

    // Elevated
    await expect(elevated.classList.contains('ez-elevated')).toBe(true);
    await expect(elevated.classList.contains('ez-theme-primary')).toBe(true);

    // Verify all appbars have shadow roots with slots
    const allHaveShadowRoots = appbars.every(
      appbar =>
        appbar.shadowRoot !== null &&
        appbar.shadowRoot.querySelector('slot') !== null
    );

    await expect(allHaveShadowRoots).toBe(true);
  },
};
