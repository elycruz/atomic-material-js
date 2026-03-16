import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../utils/storybook';
import './stories.scss';

import './register.js';
import { EzAppbarName } from './ez-appbar.js';
import { EzThemeVariants } from '../utils/index.js';

export default {
  title: 'Custom Elements/Appbar',
  component: 'ez-appbar',
};

const themes = Object.values(EzThemeVariants),
  supportedStyles = ['filled', 'outlined', 'elevated'] as const;

/**
 * Demonstrates all supported appbar use cases:
 * - Size variants: Small (default, 64dp), Medium (112dp), Large (120dp)
 * - Style variants: filled, outlined, elevated
 * - Theme variants: primary, secondary, tertiary, etc.
 * - Scroll behavior with sticky positioning
 * - Bottom appbar positioning
 */
export const Overview: StoryObj = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Size variants -->
      <section>
        <header><h2>Size Variants</h2></header>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <ez-appbar data-testid="small">
            <h1>Small (Default)</h1>
          </ez-appbar>

          <ez-appbar data-testid="small-subtitle">
            <hgroup>
              <h1>Small</h1>
              <p>With subtitle</p>
            </hgroup>
          </ez-appbar>

          <ez-appbar size="medium" data-testid="medium">
            <h1>Medium</h1>
          </ez-appbar>

          <ez-appbar
            size="medium"
            class="ez-has-subtitle"
            data-testid="medium-subtitle"
          >
            <hgroup>
              <h1>Medium</h1>
              <p>With subtitle</p>
            </hgroup>
          </ez-appbar>

          <ez-appbar size="large" data-testid="large">
            <h1>Large</h1>
          </ez-appbar>

          <ez-appbar
            size="large"
            class="ez-has-subtitle"
            data-testid="large-subtitle"
          >
            <hgroup>
              <h1>Large</h1>
              <p>With subtitle</p>
            </hgroup>
          </ez-appbar>
        </div>
      </section>

      <!-- Style variants -->
      <section>
        <header><h2>Style Variants</h2></header>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${supportedStyles.map(
            v => html`
              <ez-appbar variety=${v} theme="primary" data-testid="style-${v}">
                <h1>${v}</h1>
              </ez-appbar>
            `
          )}
        </div>
      </section>

      <!-- Theme variants (filled) -->
      <section>
        <header><h2>Theme Variants (Filled)</h2></header>
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${themes.map(
            t => html`
              <ez-appbar variety="filled" theme=${t} data-testid="theme-${t}">
                <h1>${t}</h1>
              </ez-appbar>
            `
          )}
        </div>
      </section>

      <!-- Scroll behavior -->
      <section>
        <header><h2>Scroll Behavior</h2></header>
        <div
          class="scroll-pane"
          style="height: 300px; overflow-y: auto; border: 1px solid #ccc;"
        >
          <ez-appbar parent-selector=".scroll-pane" data-testid="scroll">
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

      <!-- Bottom appbar -->
      <section>
        <header><h2>Bottom Appbar</h2></header>
        <div
          style="height: 200px; position: relative; border: 1px solid #ccc; display: flex; flex-direction: column;"
        >
          <div style="flex: 1; padding: 1rem;">
            <p>Content above the bottom appbar.</p>
          </div>
          <ez-appbar
            class="ez--bottom"
            variety="filled"
            theme="primary"
            data-testid="bottom"
          >
            <h1>Bottom Bar</h1>
          </ez-appbar>
        </div>
      </section>
    </div>
  `,
  play: async ({ canvasElement }) => {
    // --- Size variant assertions ---
    const small = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="small"]`
    );

    await expect(small).not.toBeNull();
    await expect(small?.shadowRoot).not.toBeNull();
    await expect(small?.shadowRoot?.querySelector('slot')).not.toBeNull();
    await expect(small?.classList.contains('ez-medium')).toBe(false);
    await expect(small?.classList.contains('ez-large')).toBe(false);

    const smallSub = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="small-subtitle"]`
    );

    await expect(smallSub).not.toBeNull();
    await expect(smallSub?.querySelector('p')?.textContent).toBe(
      'With subtitle'
    );

    const medium = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="medium"]`
    );

    await expect(medium).not.toBeNull();
    await expect(medium?.classList.contains('ez-medium')).toBe(true);

    const mediumSub = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="medium-subtitle"]`
    );

    await expect(mediumSub).not.toBeNull();
    await expect(mediumSub?.classList.contains('ez-medium')).toBe(true);
    await expect(mediumSub?.classList.contains('ez-has-subtitle')).toBe(true);
    await expect(mediumSub?.querySelector('p')?.textContent).toBe(
      'With subtitle'
    );

    const large = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="large"]`
    );

    await expect(large).not.toBeNull();
    await expect(large?.classList.contains('ez-large')).toBe(true);

    const largeSub = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="large-subtitle"]`
    );

    await expect(largeSub).not.toBeNull();
    await expect(largeSub?.classList.contains('ez-large')).toBe(true);
    await expect(largeSub?.classList.contains('ez-has-subtitle')).toBe(true);

    // --- Style variant assertions ---
    const filled = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="style-filled"]`
    );

    await expect(filled).not.toBeNull();
    await expect(filled?.classList.contains('ez-filled')).toBe(true);
    await expect(filled?.classList.contains('ez-theme-primary')).toBe(true);

    const outlined = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="style-outlined"]`
    );

    await expect(outlined).not.toBeNull();
    await expect(outlined?.classList.contains('ez-outlined')).toBe(true);

    const elevated = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="style-elevated"]`
    );

    await expect(elevated).not.toBeNull();
    await expect(elevated?.classList.contains('ez-elevated')).toBe(true);

    // --- Theme variant assertions ---
    const themeAppbars = themes.map(t =>
      canvasElement.querySelector<HTMLElement>(
        `${EzAppbarName}[data-testid="theme-${t}"]`
      )
    );

    await expect(themeAppbars.every(el => el !== null)).toBe(true);

    await expect(
      themeAppbars.every(
        (el, i) =>
          el?.classList.contains(`ez-theme-${themes[i]}`) &&
          el?.classList.contains('ez-filled')
      )
    ).toBe(true);

    // --- Scroll behavior assertions ---
    const scroll = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="scroll"]`
    );

    await expect(scroll).not.toBeNull();
    await expect(scroll?.getAttribute('parent-selector')).toBe('.scroll-pane');
    await expect(scroll?.shadowRoot).not.toBeNull();

    // --- Bottom appbar assertions ---
    const bottom = canvasElement.querySelector<HTMLElement>(
      `${EzAppbarName}[data-testid="bottom"]`
    );

    await expect(bottom).not.toBeNull();
    await expect(bottom?.classList.contains('ez--bottom')).toBe(true);
    await expect(bottom?.classList.contains('ez-filled')).toBe(true);
    await expect(bottom?.classList.contains('ez-theme-primary')).toBe(true);
  },
};
