import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';

export default {
  title: 'Custom Elements/Appbar/Sizes',
  component: 'ez-appbar',
};

/**
 * Appbar size variants: small (default, 64dp), medium (112dp/136dp with subtitle),
 * large (120dp/152dp with subtitle).
 */
export const AppbarSizes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Appbar Sizes</h2></header>

      <div
        style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;"
      >
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

    const [small, medium, mediumSub, large, largeSub] = appbars;

    // Small (default) should not have size classes
    await expect(small.classList.contains('ez-medium')).toBe(false);
    await expect(small.classList.contains('ez-large')).toBe(false);

    // Medium should have ez-medium class
    await expect(medium.classList.contains('ez-medium')).toBe(true);

    // Medium with subtitle
    await expect(mediumSub.classList.contains('ez-medium')).toBe(true);
    await expect(mediumSub.classList.contains('ez-has-subtitle')).toBe(true);

    const mediumSubtitle = mediumSub.querySelector('p');

    await expect(mediumSubtitle).not.toBeNull();
    await expect(mediumSubtitle?.textContent).toBe('With subtitle');

    // Large should have ez-large class
    await expect(large.classList.contains('ez-large')).toBe(true);

    // Large with subtitle
    await expect(largeSub.classList.contains('ez-large')).toBe(true);
    await expect(largeSub.classList.contains('ez-has-subtitle')).toBe(true);

    // Verify all appbars have shadow roots with slots
    const allHaveShadowRoots = appbars.every(
      appbar =>
        appbar.shadowRoot !== null &&
        appbar.shadowRoot.querySelector('slot') !== null
    );

    await expect(allHaveShadowRoots).toBe(true);
  },
};
