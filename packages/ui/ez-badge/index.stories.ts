import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/index.js';

export default {
  title: 'CSS Components/Badge',
};

const themes = Object.values(EzThemeVariants),
  iconSvg = html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"
      />
    </svg>
  `;

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
          ${iconSvg}
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
          ${iconSvg}
          <span class="ez-badge">3</span>
        </span>

        <span class="ez-badge-wrapper">
          ${iconSvg}
          <span class="ez-badge">99</span>
        </span>

        <span class="ez-badge-wrapper">
          ${iconSvg}
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
          ${iconSvg}
          <span class="ez-badge">5</span>
        </span>

        <span class="ez-badge-wrapper" aria-label="Messages: new">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
            />
          </svg>
          <span class="ez-badge"></span>
        </span>

        <span class="ez-badge-wrapper" aria-label="Cart: 12 items">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
            />
          </svg>
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
                ${iconSvg}
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
