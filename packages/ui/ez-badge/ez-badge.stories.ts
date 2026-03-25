import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/index.js';
import './register.js';

export default {
  title: 'Custom Elements/Badge',
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
        <span>
          <span class="md-icon" aria-hidden="true">notifications</span>
          <ez-badge data-testid="small-icon"></ez-badge>
        </span>

        <span>
          <button class="ez-btn ez-outlined ez-theme-primary" type="button">
            Notifications
          </button>
          <ez-badge data-testid="small-button"></ez-badge>
        </span>
      </div>
    </section>
  `,

  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('ez-badge');

    await expect(badges.length).toBe(2);

    await Promise.all(
      Array.from(badges).map(async badge => {
        await expect(badge).toBeInTheDocument();
      })
    );
  },
};

/**
 * Large badge — badge with text content rendered at 16dp.
 */
export const LargeBadge: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Large Badge (with content)</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; align-items: center;"
      >
        <span>
          <span class="md-icon" aria-hidden="true">notifications</span>
          <ez-badge data-testid="badge-3">3</ez-badge>
        </span>

        <span>
          <span class="md-icon" aria-hidden="true">notifications</span>
          <ez-badge data-testid="badge-99">99</ez-badge>
        </span>

        <span>
          <span class="md-icon" aria-hidden="true">notifications</span>
          <ez-badge data-testid="badge-999">999+</ez-badge>
        </span>
      </div>
    </section>
  `,

  play: async ({ canvasElement }) => {
    const badge3 = canvasElement.querySelector('[data-testid="badge-3"]'),
      badge99 = canvasElement.querySelector('[data-testid="badge-99"]'),
      badge999 = canvasElement.querySelector('[data-testid="badge-999"]');

    await expect(badge3).toBeInTheDocument();
    await expect(badge99).toBeInTheDocument();
    await expect(badge999).toBeInTheDocument();

    await expect(badge3?.textContent?.trim()).toBe('3');
    await expect(badge99?.textContent?.trim()).toBe('99');
    await expect(badge999?.textContent?.trim()).toBe('999+');
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
        <span data-testid="pos-notif" aria-label="Notifications: 5">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <ez-badge>5</ez-badge>
        </span>

        <span data-testid="pos-mail" aria-label="Messages: new">
          <span class="md-icon" aria-hidden="true">mail</span>
          <ez-badge></ez-badge>
        </span>

        <span data-testid="pos-cart" aria-label="Cart: 12 items">
          <span class="md-icon" aria-hidden="true">shopping_cart</span>
          <ez-badge>12</ez-badge>
        </span>
      </div>
    </section>
  `,

  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('ez-badge');

    await expect(badges.length).toBe(3);

    // First: large badge with number
    await expect(badges[0]?.textContent?.trim()).toBe('5');

    // Second: small dot badge (no text content)
    await expect(badges[1]?.textContent?.trim()).toBe('');

    // Third: large badge with number
    await expect(badges[2]?.textContent?.trim()).toBe('12');
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
              <span>
                <span class="md-icon" aria-hidden="true">notifications</span>
                <ez-badge class="${theme ? `ez-theme-${theme}` : ''}">
                  7
                </ez-badge>
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
    const badges = canvasElement.querySelectorAll('ez-badge');

    await expect(badges.length).toBe(themes.length);

    await Promise.all(
      Array.from(badges).map(async badge => {
        await expect(badge.textContent?.trim()).toBe('7');
      })
    );
  },
};
