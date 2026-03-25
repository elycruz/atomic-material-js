import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';

export default {
  title: 'Custom Elements/Appbar',
  component: 'ez-appbar',
};

/**
 * Appbar component with all supported variants and use cases.
 *
 * Supports:
 * - Size variants: small (default, 64dp), medium (112dp/136dp with subtitle), large (120dp/152dp with subtitle)
 * - Style variants: filled (default), outlined, elevated
 * - Scroll behavior: auto-hide/show on scroll
 * - Bottom positioning
 */
export const AllVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Appbar - All Variants</h2></header>

      <!-- Size Variants -->
      <h3>Size Variants</h3>
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

      <!-- Style Variants -->
      <h3>Style Variants</h3>
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

      <!-- Scroll Behavior -->
      <h3>Scroll Behavior</h3>
      <div
        class="scroll-pane"
        style="height: 300px; overflow-y: auto; border: 1px solid #ccc; margin-bottom: 2rem;"
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

      <!-- Bottom Appbar -->
      <h3>Bottom Appbar</h3>
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
    const appbars = Array.from(canvasElement.querySelectorAll(EzAppbarName));

    // Total: 5 size variants + 3 style variants + 1 scroll + 1 bottom = 10
    await expect(appbars.length).toBe(10);

    // Size variants
    const [small, medium, mediumSub, large, largeSub] = appbars.slice(0, 5);

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

    // Style variants
    const [filled, outlined, elevated] = appbars.slice(5, 8);

    // Filled
    await expect(filled.classList.contains('ez-filled')).toBe(true);
    await expect(filled.classList.contains('ez-theme-primary')).toBe(true);

    // Outlined
    await expect(outlined.classList.contains('ez-outlined')).toBe(true);
    await expect(outlined.classList.contains('ez-theme-primary')).toBe(true);

    // Elevated
    await expect(elevated.classList.contains('ez-elevated')).toBe(true);
    await expect(elevated.classList.contains('ez-theme-primary')).toBe(true);

    // Scroll behavior appbar
    const scrollAppbar = appbars[8];

    await expect(scrollAppbar.getAttribute('parent-selector')).toBe(
      '.scroll-pane'
    );
    await expect(scrollAppbar.shadowRoot).not.toBeNull();
    await expect(scrollAppbar.shadowRoot?.querySelector('slot')).not.toBeNull();

    // Bottom appbar
    const bottomAppbar = appbars[9];

    await expect(bottomAppbar.classList.contains('ez--bottom')).toBe(true);
    await expect(bottomAppbar.classList.contains('ez-filled')).toBe(true);
    await expect(bottomAppbar.classList.contains('ez-theme-primary')).toBe(
      true
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
