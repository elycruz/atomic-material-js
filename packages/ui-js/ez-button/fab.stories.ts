import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/constants.js';
import './../ez-ripple';

export default {
  title: 'CSS Components/FAB',
};

const fabIcon = html`<span class="md-icon">edit</span>`;

/**
 * Icon-only FAB — all four sizes with tonal primary theme.
 */
export const FABSizes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>FAB Sizes</h2></header>

      <div class="ez-section-body">
        <div class="ez-button-group" style="align-items: center;">
          <button
            class="ez-btn ez-fab ez-xsmall ez-tonal ez-theme-primary"
            type="button"
            aria-label="Edit"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
          </button>
          <button
            class="ez-btn ez-fab ez-tonal ez-theme-primary"
            type="button"
            aria-label="Edit"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
          </button>
          <button
            class="ez-btn ez-fab ez-medium ez-tonal ez-theme-primary"
            type="button"
            aria-label="Edit"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
          </button>
          <button
            class="ez-btn ez-fab ez-large ez-tonal ez-theme-primary"
            type="button"
            aria-label="Edit"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const fabs = canvasElement.querySelectorAll('.ez-fab');

    await expect(fabs.length).toBe(4);
    await expect(fabs[0].classList.contains('ez-xsmall')).toBe(true);
    await expect(fabs[3].classList.contains('ez-large')).toBe(true);
  },
};

/**
 * FAB with different variant/theme combinations.
 */
export const FABVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>FAB Variants</h2></header>

      <div class="ez-section-body">
        ${Object.entries(EzThemeVariants).map(
          ([name, cls]) => html`
            <h3>${name}</h3>
            <div
              class="ez-button-group"
              style="margin-bottom: 1rem; align-items: center;"
            >
              <button
                class="ez-btn ez-fab ez-tonal ez-theme-${cls}"
                type="button"
                aria-label="${name} tonal"
              >
                <ez-ripple></ez-ripple>
                ${fabIcon}
              </button>
              <button
                class="ez-btn ez-fab ez-filled ez-theme-${cls}"
                type="button"
                aria-label="${name} filled"
              >
                <ez-ripple></ez-ripple>
                ${fabIcon}
              </button>
              <button
                class="ez-btn ez-fab ez-elevated ez-theme-${cls}"
                type="button"
                aria-label="${name} elevated"
              >
                <ez-ripple></ez-ripple>
                ${fabIcon}
              </button>
              <button
                class="ez-btn ez-fab ez-outlined ez-theme-${cls}"
                type="button"
                aria-label="${name} outlined"
              >
                <ez-ripple></ez-ripple>
                ${fabIcon}
              </button>
              <button
                class="ez-btn ez-fab ez-tonal ez-theme-${cls}"
                type="button"
                disabled
                aria-label="${name} disabled"
              >
                ${fabIcon}
              </button>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const fabs = canvasElement.querySelectorAll('.ez-fab');

    await expect(fabs.length).toBeGreaterThan(0);

    const tonal = canvasElement.querySelector('.ez-fab.ez-tonal');

    await expect(tonal).not.toBeNull();

    const filled = canvasElement.querySelector('.ez-fab.ez-filled');

    await expect(filled).not.toBeNull();
  },
};

/**
 * Extended FAB — icon + text label, all three sizes.
 */
export const ExtendedFAB: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Extended FAB</h2></header>

      <div class="ez-section-body">
        <h3>Sizes</h3>
        <div class="ez-button-group" style="align-items: center;">
          <button
            class="ez-btn ez-fab ez-extended ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Compose</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-medium ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Compose</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-large ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Compose</span>
          </button>
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Themes</h3>
        <div class="ez-button-group" style="flex-wrap: wrap; align-items: center;">
          ${Object.entries(EzThemeVariants).map(
            ([name, cls]) => html`
              <button
                class="ez-btn ez-fab ez-extended ez-tonal ez-theme-${cls}"
                type="button"
              >
                <ez-ripple></ez-ripple>
                ${fabIcon}
                <span>${name}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Variants</h3>
        <div class="ez-button-group" style="flex-wrap: wrap; align-items: center;">
          <button
            class="ez-btn ez-fab ez-extended ez-tonal ez-theme-secondary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Tonal</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-filled ez-theme-secondary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Filled</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-elevated ez-theme-secondary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Elevated</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-outlined ez-theme-secondary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>Outlined</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-tonal ez-theme-secondary"
            type="button"
            disabled
          >
            ${fabIcon}
            <span>Disabled</span>
          </button>
        </div>
      </div>

      <div class="ez-section-body">
        <h3>RTL</h3>
        <div
          class="ez-button-group"
          dir="rtl"
          style="flex-wrap: wrap; align-items: center;"
        >
          <button
            class="ez-btn ez-fab ez-extended ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>إنشاء</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-filled ez-theme-secondary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>تعديل</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-medium ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>إنشاء</span>
          </button>
          <button
            class="ez-btn ez-fab ez-extended ez-large ez-tonal ez-theme-primary"
            type="button"
          >
            <ez-ripple></ez-ripple>
            ${fabIcon}
            <span>إنشاء</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const extendedFabs = canvasElement.querySelectorAll('.ez-fab.ez-extended');

    await expect(extendedFabs.length).toBeGreaterThan(0);

    const mediumExtended = canvasElement.querySelector(
      '.ez-fab.ez-extended.ez-medium'
    );

    await expect(mediumExtended).not.toBeNull();

    const largeExtended = canvasElement.querySelector(
      '.ez-fab.ez-extended.ez-large'
    );

    await expect(largeExtended).not.toBeNull();
  },
};
