import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import './../ez-ripple';
import {
  EzThemeVariants,
  EzStyleVariants,
  EzSizeVariants,
} from '../utils/index.js';

export default {
  title: 'CSS Components/Button',
};

const themes = Object.values(EzThemeVariants),
  variants = Object.values(EzStyleVariants).map(k => ({
    label: !k ? 'Text' : `${k[0].toUpperCase()}${k.slice(1)}`,
    cls: EzStyleVariants.Default === k ? '' : `ez-${k}`,
  })),
  sizes = Object.entries(EzSizeVariants).map(([label, value]) => ({
    label: value === EzSizeVariants.Small ? `${label} (default)` : label,
    cls: value === EzSizeVariants.Small ? '' : `ez-${value}`,
  }));

/**
 * Button sizes — xsmall through xlarge, using primary outlined.
 */
export const ButtonSizes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Sizes</h2></header>

      <div class="ez-section-body">
        <div class="ez-button-group" style="align-items: center;">
          ${sizes.map(
            s => html`
              <button
                class="ez-btn ez-outlined ez-theme-primary ${s.cls}"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>${s.label}</span>
              </button>
            `
          )}
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const btns = canvasElement.querySelectorAll('.ez-btn');

    await expect(btns.length).toBe(sizes.length);
    await expect(btns[0]?.classList.contains('ez-xsmall')).toBe(true);
    await expect(btns[4]?.classList.contains('ez-xlarge')).toBe(true);
  },
};

/**
 * Button colours — all theme families in outlined variant.
 */
export const ButtonColors: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Colors</h2></header>

      <div class="ez-section-body">
        ${variants.map(
          v => html`
            <h3>${v.label}</h3>
            <div
              class="ez-button-group"
              style="flex-wrap: wrap; margin-bottom: 1rem;"
            >
              ${themes.map(
                t => html`
                  <button class="ez-btn ${v.cls} ez-theme-${t}" type="button">
                    <ez-ripple></ez-ripple>
                    <span>${t}</span>
                  </button>
                `
              )}
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const btns = canvasElement.querySelectorAll('.ez-btn'),
      expectedCount = variants.length * themes.length;

    await expect(btns.length).toBe(expectedCount);

    await Promise.all(
      themes.map(t => {
        const themed = canvasElement.querySelector(`.ez-theme-${t}`);

        return expect(themed).not.toBeNull();
      })
    );
  },
};

/**
 * Button variants — text, outlined, filled, tonal, elevated with
 * default, disabled, and icon states.
 */
export const ButtonVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Variants</h2></header>

      <div class="ez-section-body">
        ${variants.map(
          v => html`
            <h3>${v.label}</h3>
            <div class="ez-button-group" style="margin-bottom: 1rem;">
              <button class="ez-btn ${v.cls} ez-theme-primary" type="button">
                <ez-ripple></ez-ripple>
                <span>Default</span>
              </button>
              <button
                class="ez-btn ${v.cls} ez-theme-primary"
                type="button"
                disabled
              >
                <span>Disabled</span>
              </button>
              <button class="ez-btn ${v.cls} ez-theme-primary" type="button">
                <ez-ripple></ez-ripple>
                <span class="md-icon">stars</span>
                <span>With Icon</span>
              </button>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const groups = canvasElement.querySelectorAll('.ez-button-group');

    await expect(groups.length).toBe(variants.length);

    const disabledBtns = canvasElement.querySelectorAll('.ez-btn[disabled]');

    await expect(disabledBtns.length).toBe(variants.length);

    const iconBtns = canvasElement.querySelectorAll('.ez-btn .md-icon');

    await expect(iconBtns.length).toBe(variants.length);
  },
};

/**
 * MD3 Icon buttons: Standard, Filled, Tonal, Outlined.
 */
export const IconButtons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Icon Buttons</h2></header>

      <div class="ez-section-body">
        <div class="ez-button-group">
          <button
            class="ez-btn ez-icon-btn ez-theme-secondary"
            type="button"
            aria-label="Settings"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon">settings</span>
          </button>
          <button
            class="ez-btn ez-icon-btn ez-filled ez-theme-secondary"
            type="button"
            aria-label="Add"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-theme-secondary">add</span>
          </button>
          <button
            class="ez-btn ez-icon-btn ez-tonal ez-theme-secondary"
            type="button"
            aria-label="Edit"
          >
            <ez-ripple></ez-ripple>
            ✎
          </button>
          <button
            class="ez-btn ez-icon-btn ez-outlined ez-theme-secondary"
            type="button"
            aria-label="Star"
          >
            <ez-ripple></ez-ripple>
            ★
          </button>
          <button
            class="ez-btn ez-icon-btn ez-theme-secondary"
            type="button"
            disabled
            aria-label="Disabled"
          >
            ⚙
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const iconBtns = canvasElement.querySelectorAll('.ez-icon-btn');

    await expect(iconBtns.length).toBe(5);
  },
};

/**
 * Buttons with icons — LTR vs RTL direction comparison.
 */
export const RTLButtons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Buttons — LTR vs RTL</h2></header>

      <div class="ez-section-body">
        <h3>LTR (default)</h3>
        <div class="ez-button-group" dir="ltr">
          <button class="ez-btn ez-filled ez-theme-primary" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">send</span>
            <span>Send</span>
          </button>
          <button class="ez-btn ez-outlined ez-theme-secondary" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">arrow_back</span>
            <span>Back</span>
          </button>
          <button class="ez-btn ez-tonal ez-theme-success" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">check_circle</span>
            <span>Confirm</span>
          </button>
          <button class="ez-btn ez-elevated ez-theme-info" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">download</span>
            <span>Download</span>
          </button>
        </div>
      </div>

      <div class="ez-section-body">
        <h3>RTL</h3>
        <div class="ez-button-group" dir="rtl">
          <button class="ez-btn ez-filled ez-theme-primary" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">send</span>
            <span>إرسال</span>
          </button>
          <button class="ez-btn ez-outlined ez-theme-secondary" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">arrow_back</span>
            <span>رجوع</span>
          </button>
          <button class="ez-btn ez-tonal ez-theme-success" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">check_circle</span>
            <span>تأكيد</span>
          </button>
          <button class="ez-btn ez-elevated ez-theme-info" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">download</span>
            <span>تحميل</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const ltrGroup = canvasElement.querySelector('[dir="ltr"]'),
      rtlGroup = canvasElement.querySelector('[dir="rtl"]');

    await expect(ltrGroup).not.toBeNull();
    await expect(rtlGroup).not.toBeNull();
  },
};
