import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';
import './stories.scss';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';

export default {
  title: 'Custom Elements/Appbar/Behavior',
  component: 'ez-appbar',
};

/**
 * Appbar behavior: scroll auto-hide/show and bottom positioning.
 */
export const AppbarBehavior: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Appbar Behavior</h2></header>

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

    await expect(appbars.length).toBe(2);

    // Scroll behavior appbar
    const scrollAppbar = appbars[0];

    await expect(scrollAppbar.getAttribute('parent-selector')).toBe(
      '.scroll-pane'
    );
    await expect(scrollAppbar.shadowRoot).not.toBeNull();
    await expect(scrollAppbar.shadowRoot?.querySelector('slot')).not.toBeNull();

    // Bottom appbar
    const bottomAppbar = appbars[1];

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
