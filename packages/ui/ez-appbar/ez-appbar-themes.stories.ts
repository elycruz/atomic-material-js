import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/constants.js';
import '../utils/storybook';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';

export default {
  title: 'Custom Elements/Appbar/Themes',
  component: 'ez-appbar',
};

/**
 * Appbar theme variants across all supported themes.
 */
export const AppbarThemes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Appbar Themes</h2></header>

      <div
        style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;"
      >
        ${Object.entries(EzThemeVariants).map(
          ([name, cls]) => html`
            <div style="border: 1px solid #ccc; overflow: hidden;">
              <ez-appbar variety="filled" theme="${cls}">
                <h1>${name}</h1>
              </ez-appbar>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName)),
      themeValues = Object.values(EzThemeVariants);

    await expect(appbars.length).toBe(themeValues.length);

    // Each appbar should have the correct theme class and filled style
    await Promise.all(
      appbars.map(async (appbar, i) => {
        await expect(
          appbar.classList.contains(`ez-theme-${themeValues[i]}`)
        ).toBe(true);
        await expect(appbar.classList.contains('ez-filled')).toBe(true);
      })
    );

    // Verify all appbars have shadow roots with slots
    const allHaveShadowRoots = appbars.every(
      appbar =>
        appbar.shadowRoot !== null &&
        appbar.shadowRoot.querySelector('slot') !== null
    );

    await expect(allHaveShadowRoots).toBe(true);
  },
};
