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
        <ez-badge data-testid="small-icon">
          <span class="md-icon" aria-hidden="true">notifications</span>
        </ez-badge>

        <ez-badge data-testid="small-button">
          <button class="ez-btn ez-outlined ez-theme-primary" type="button">
            Notifications
          </button>
        </ez-badge>
      </div>
    </section>
  `,

  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('ez-badge');

    await expect(badges.length).toBe(2);

    await Promise.all(
      Array.from(badges).map(async badge => {
        await expect(badge).toBeInTheDocument();

        const indicator = badge.shadowRoot?.querySelector('.badge');

        await expect(indicator).toBeTruthy();
        await expect(indicator?.classList.contains('large')).toBe(false);
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
        <ez-badge data-testid="badge-3">
          3
          <span class="md-icon" aria-hidden="true">notifications</span>
        </ez-badge>

        <ez-badge data-testid="badge-99">
          99
          <span class="md-icon" aria-hidden="true">notifications</span>
        </ez-badge>

        <ez-badge data-testid="badge-999">
          999+
          <span class="md-icon" aria-hidden="true">notifications</span>
        </ez-badge>
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

    await expect(
      badge3?.shadowRoot?.querySelector('.badge')?.textContent?.trim()
    ).toBe('3');
    await expect(
      badge99?.shadowRoot?.querySelector('.badge')?.textContent?.trim()
    ).toBe('99');
    await expect(
      badge999?.shadowRoot?.querySelector('.badge')?.textContent?.trim()
    ).toBe('999+');

    // Verify large class is applied
    await expect(
      badge3?.shadowRoot?.querySelector('.badge')?.classList.contains('large')
    ).toBe(true);
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
        <ez-badge data-testid="pos-notif" aria-label="Notifications: 5">
          5
          <span class="md-icon" aria-hidden="true">notifications</span>
        </ez-badge>

        <ez-badge data-testid="pos-mail" aria-label="Messages: new">
          <span class="md-icon" aria-hidden="true">mail</span>
        </ez-badge>

        <ez-badge data-testid="pos-cart" aria-label="Cart: 12 items">
          12
          <span class="md-icon" aria-hidden="true">shopping_cart</span>
        </ez-badge>
      </div>
    </section>
  `,

  play: async ({ canvasElement }) => {
    const badges = canvasElement.querySelectorAll('ez-badge');

    await expect(badges.length).toBe(3);

    // First: large badge with number
    const firstIndicator = badges[0]?.shadowRoot?.querySelector('.badge');

    await expect(firstIndicator?.textContent?.trim()).toBe('5');
    await expect(firstIndicator?.classList.contains('large')).toBe(true);

    // Second: small dot badge (no text content)
    const secondIndicator = badges[1]?.shadowRoot?.querySelector('.badge');

    await expect(secondIndicator?.classList.contains('large')).toBe(false);

    // Third: large badge with number
    const thirdIndicator = badges[2]?.shadowRoot?.querySelector('.badge');

    await expect(thirdIndicator?.textContent?.trim()).toBe('12');
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
              <ez-badge class="${theme ? `ez-theme-${theme}` : ''}">
                7
                <span class="md-icon" aria-hidden="true">notifications</span>
              </ez-badge>
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
        const indicator = badge.shadowRoot?.querySelector('.badge');

        await expect(indicator?.textContent?.trim()).toBe('7');
        await expect(indicator?.classList.contains('large')).toBe(true);
      })
    );
  },
};
