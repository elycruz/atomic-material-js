import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/index.js';

export default {
  title: 'CSS Components/Badge',
};

const themes = Object.values(EzThemeVariants);

/**
 * Badge (CSS) — small (dot) and large (with content) badges, positioning, and
 * themes, using the `.ez-badge-wrapper` / `.ez-badge` CSS classes.
 */
export const DefaultVariation: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Small Badge (Dot)</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; align-items: center;"
      >
        <span class="ez-badge-wrapper" data-testid="small-icon">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge"></span>
        </span>

        <span class="ez-badge-wrapper" data-testid="small-button">
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

    <section>
      <header><h2>Large Badge (with content)</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; align-items: center;"
      >
        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge" data-testid="badge-3">3</span>
        </span>

        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge" data-testid="badge-99">99</span>
        </span>

        <span class="ez-badge-wrapper">
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge" data-testid="badge-999">999+</span>
        </span>
      </div>
    </section>

    <section>
      <header><h2>Badge Positioning</h2></header>
      <div
        class="ez-section-body"
        style="display: flex; gap: 3rem; align-items: center; padding: 1rem;"
      >
        <span
          class="ez-badge-wrapper"
          data-testid="pos-notif"
          aria-label="Notifications: 5"
        >
          <span class="md-icon" aria-hidden="true">notifications</span>
          <span class="ez-badge">5</span>
        </span>

        <span
          class="ez-badge-wrapper"
          data-testid="pos-mail"
          aria-label="Messages: new"
        >
          <span class="md-icon" aria-hidden="true">mail</span>
          <span class="ez-badge"></span>
        </span>

        <span
          class="ez-badge-wrapper"
          data-testid="pos-cart"
          aria-label="Cart: 12 items"
        >
          <span class="md-icon" aria-hidden="true">shopping_cart</span>
          <span class="ez-badge">12</span>
        </span>
      </div>
    </section>

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
                data-testid="theme-${theme || 'default'}"
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
    // Small (dot) badges
    const smallIcon = canvasElement.querySelector(
        '[data-testid="small-icon"] .ez-badge'
      ),
      smallButton = canvasElement.querySelector(
        '[data-testid="small-button"] .ez-badge'
      );

    await expect(smallIcon).toBeInTheDocument();
    await expect(smallButton).toBeInTheDocument();
    await expect(smallIcon?.textContent?.trim()).toBe('');
    await expect(smallButton?.textContent?.trim()).toBe('');

    // Large badges (with content)
    const badge3 = canvasElement.querySelector('[data-testid="badge-3"]'),
      badge99 = canvasElement.querySelector('[data-testid="badge-99"]'),
      badge999 = canvasElement.querySelector('[data-testid="badge-999"]');

    await expect(badge3?.textContent?.trim()).toBe('3');
    await expect(badge99?.textContent?.trim()).toBe('99');
    await expect(badge999?.textContent?.trim()).toBe('999+');

    // Positioning — badges anchored to different elements
    const posNotif = canvasElement.querySelector(
        '[data-testid="pos-notif"] .ez-badge'
      ),
      posMail = canvasElement.querySelector(
        '[data-testid="pos-mail"] .ez-badge'
      ),
      posCart = canvasElement.querySelector(
        '[data-testid="pos-cart"] .ez-badge'
      );

    await expect(posNotif?.textContent?.trim()).toBe('5');
    await expect(posMail?.textContent?.trim()).toBe('');
    await expect(posCart?.textContent?.trim()).toBe('12');

    // Themed badges
    const themedBadges = canvasElement.querySelectorAll(
      '[data-testid^="theme-"] .ez-badge'
    );

    await expect(themedBadges.length).toBe(themes.length);

    await Promise.all(
      Array.from(themedBadges).map(async badge => {
        await expect(badge.textContent?.trim()).toBe('7');
      })
    );
  },
};
