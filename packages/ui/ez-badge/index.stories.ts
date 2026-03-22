import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/index.js';

export default {
  title: 'CSS Components/Badge',
};

const themes = Object.values(EzThemeVariants);

/**
 * Small badge (dot) — empty badge rendered as a 6dp dot indicator.
 */
export const SmallBadge: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Small Badge (Dot)</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; align-items: center;"
      >
        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge"></span>
        </span>

        <span class="ez-badge-wrapper">
          <button
            class="ez-btn ez-outlined ez-theme-primary"
            type="button"
            style="position:relative;"
          >
            Notifications
          </button>
          <span class="ez-badge"></span>
        </span>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('.ez-badge');

    await expect(badges.length).toBe(2);

    await Promise.all(
      Array.from(badges).map(async badge => {
        await expect(badge.textContent?.trim()).toBe('');
        await expect(badge.classList.contains('ez-badge')).toBe(true);
      })
    );

    const wrappers = canvasElement.querySelectorAll('.ez-badge-wrapper');

    await expect(wrappers.length).toBe(2);
  },
};

/**
 * Large badge — badge with numeric or text content, rendered at 16dp.
 */
export const LargeBadge: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Large Badge (with content)</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; align-items: center;"
      >
        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge">3</span>
        </span>

        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge">99</span>
        </span>

        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge">999+</span>
        </span>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('.ez-badge');

    await expect(badges.length).toBe(3);
    await expect(badges[0]?.textContent?.trim()).toBe('3');
    await expect(badges[1]?.textContent?.trim()).toBe('99');
    await expect(badges[2]?.textContent?.trim()).toBe('999+');
  },
};

/**
 * Badge positioning — badges anchored to different elements.
 */
export const Positioning: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Badge Positioning</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 3rem; align-items: center; padding: 1rem;"
      >
        <span class="ez-badge-wrapper" aria-label="Notifications: 5">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge">5</span>
        </span>

        <span class="ez-badge-wrapper" aria-label="Messages: new">
          <span class="md-icon" aria-hidden="true">mail</span>
          <span class="ez-badge"></span>
        </span>

        <span class="ez-badge-wrapper" aria-label="Cart: 12 items">
          <span class="md-icon" aria-hidden="true">shopping_cart</span>
          <span class="ez-badge">12</span>
        </span>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const wrappers = canvasElement.querySelectorAll('.ez-badge-wrapper');

    await expect(wrappers.length).toBe(3);

    // First: large badge with number
    const firstBadge = wrappers[0]?.querySelector('.ez-badge');

    await expect(firstBadge?.textContent?.trim()).toBe('5');

    // Second: small dot badge
    const secondBadge = wrappers[1]?.querySelector('.ez-badge');

    await expect(secondBadge?.textContent?.trim()).toBe('');

    // Third: large badge with number
    const thirdBadge = wrappers[2]?.querySelector('.ez-badge');

    await expect(thirdBadge?.textContent?.trim()).toBe('12');
  },
};

/**
 * Themed badges — badges using different theme color families.
 */
export const WithThemes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Themed Badges</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center;"
      >
        ${themes.map(
          theme => html`
            <div style="text-align: center;">
              <span
                class="ez-badge-wrapper ${theme ? `ez-theme-${theme}` : ''}"
              >
                <span class="md-icon" aria-hidden="true">notifications</span>
                <span class="ez-badge">7</span>
              </span>
              <div style="margin-top: 0.5rem; font-size: 0.75rem;">
                ${theme || 'default'}
              </div>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('.ez-badge');

    await expect(badges.length).toBe(themes.length);

    await Promise.all(
      Array.from(badges).map(async badge => {
        await expect(badge.textContent?.trim()).toBe('7');
      })
    );
  },
};
