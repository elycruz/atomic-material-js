import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import '../ez-ripple/register.js';
import { ezButtonName } from './ez-button.js';
import {
  EzThemeVariants,
  EzStyleVariants,
  EzSizeVariants,
} from '../utils/index.js';

export default {
  title: 'Custom Elements/Button',
  component: 'ez-button',
};

const themes = Object.values(EzThemeVariants),
  styleVariants = Object.values(EzStyleVariants).filter(Boolean),
  sizes = Object.values(EzSizeVariants);

function getShadowButton(el: Element): HTMLButtonElement {
  const inner = el.shadowRoot?.querySelector('button');

  if (!inner) throw new Error('Shadow button not found');
  return inner;
}

function getShadowAnchor(el: Element): HTMLAnchorElement {
  const inner = el.shadowRoot?.querySelector('a');

  if (!inner) throw new Error('Shadow anchor not found');
  return inner;
}

/**
 * Style variants — filled, outlined, elevated, tonal.
 */
export const Variants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Variants</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button theme="primary">Text (default)</ez-button>
        ${styleVariants.map(
          v => html` <ez-button variety=${v} theme="primary">${v}</ez-button> `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll(ezButtonName));

    await expect(buttons.length).toBe(styleVariants.length + 1);

    // Every button should have a shadow root with an internal <button class="ez-btn">
    const allHaveShadow = buttons.every(btn =>
      btn.shadowRoot?.querySelector('button')?.classList.contains('ez-btn')
    );

    await expect(allHaveShadow).toBe(true);

    // Check filled variant maps to internal class
    const filledBtn = canvasElement.querySelector(
      `${ezButtonName}[variety="filled"]`
    );

    await expect(filledBtn).not.toBeNull();

    if (!filledBtn) return;

    const filledInner = getShadowButton(filledBtn);

    await expect(filledInner.classList.contains('ez-filled')).toBe(true);
  },
};

/**
 * Size variants — xsmall through xlarge.
 */
export const Sizes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Sizes</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        ${sizes.map(
          s => html`
            <ez-button variety="outlined" theme="primary" size=${s}
              >${s}</ez-button
            >
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll(ezButtonName);

    await expect(buttons.length).toBe(sizes.length);

    const mediumBtn = canvasElement.querySelector(
      `${ezButtonName}[size="medium"]`
    );

    await expect(mediumBtn).not.toBeNull();

    if (!mediumBtn) return;

    const inner = getShadowButton(mediumBtn);

    await expect(inner.classList.contains('ez-medium')).toBe(true);
  },
};

/**
 * Theme variants — all theme families with filled style.
 */
export const Themes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Button Themes</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        ${themes.map(
          t => html` <ez-button variety="filled" theme=${t}>${t}</ez-button> `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll(ezButtonName);

    await expect(buttons.length).toBe(themes.length);

    const primaryBtn = canvasElement.querySelector(
      `${ezButtonName}[theme="primary"]`
    );

    await expect(primaryBtn).not.toBeNull();

    if (!primaryBtn) return;

    const inner = getShadowButton(primaryBtn);

    await expect(inner.classList.contains('ez-theme-primary')).toBe(true);
  },
};

/**
 * Disabled state.
 */
export const Disabled: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Disabled Buttons</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button disabled>Text</ez-button>
        <ez-button variety="filled" theme="primary" disabled>Filled</ez-button>
        <ez-button variety="outlined" theme="secondary" disabled
          >Outlined</ez-button
        >
        <ez-button variety="elevated" disabled>Elevated</ez-button>
        <ez-button variety="tonal" theme="tertiary" disabled>Tonal</ez-button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll(ezButtonName));

    await expect(buttons.length).toBe(5);

    // All internal buttons should be disabled
    const allDisabled = buttons.every(btn => {
      const inner = btn.shadowRoot?.querySelector('button');

      return inner?.disabled;
    });

    await expect(allDisabled).toBe(true);

    // Verify first button's internal button is disabled and has correct styles
    const firstInner = getShadowButton(buttons[0]);

    await expect(firstInner.disabled).toBe(true);
  },
};

/**
 * Icon-only buttons.
 */
export const IconButtons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Icon Buttons</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button icon theme="secondary" aria-label="Settings">⚙</ez-button>
        <ez-button icon variety="filled" theme="secondary" aria-label="Add"
          >+</ez-button
        >
        <ez-button icon variety="tonal" theme="secondary" aria-label="Edit"
          >✎</ez-button
        >
        <ez-button icon variety="outlined" theme="secondary" aria-label="Star"
          >★</ez-button
        >
        <ez-button icon theme="secondary" disabled aria-label="Disabled"
          >⚙</ez-button
        >
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = Array.from(canvasElement.querySelectorAll(ezButtonName));

    await expect(buttons.length).toBe(5);

    const allHaveIconClass = buttons.every(btn =>
      btn.shadowRoot?.querySelector('button')?.classList.contains('ez-icon-btn')
    );

    await expect(allHaveIconClass).toBe(true);
  },
};

/**
 * Buttons with leading and trailing icon slots.
 */
export const WithIcons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Buttons with Icons</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button variety="filled" theme="primary">
          <span slot="leading-icon">→</span>
          Send
        </ez-button>
        <ez-button variety="outlined" theme="secondary">
          Back
          <span slot="trailing-icon">←</span>
        </ez-button>
        <ez-button variety="tonal" theme="success">
          <span slot="leading-icon">✓</span>
          Confirm
          <span slot="trailing-icon">!</span>
        </ez-button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll(ezButtonName);

    await expect(buttons.length).toBe(3);

    // Check leading icon slot is populated
    const firstBtn = buttons[0],
      leadingSlot = firstBtn.shadowRoot?.querySelector(
        'slot[name="leading-icon"]'
      ) as HTMLSlotElement | null;

    await expect(leadingSlot).not.toBeNull();
    await expect(leadingSlot?.assignedElements().length).toBe(1);
  },
};

/**
 * Link buttons with href.
 */
export const LinkButton: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Link Buttons</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button href="https://example.com" variety="filled" theme="primary">
          Visit Example
        </ez-button>
        <ez-button href="https://example.com" variety="outlined" theme="info">
          Learn More
        </ez-button>
        <ez-button
          href="https://example.com"
          variety="tonal"
          theme="success"
          disabled
        >
          Disabled Link
        </ez-button>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll(ezButtonName);

    await expect(buttons.length).toBe(3);

    // Link buttons render <a> instead of <button>
    const linkBtn = buttons[0],
      anchor = getShadowAnchor(linkBtn);

    await expect(anchor.href).toContain('example.com');
    await expect(anchor.classList.contains('ez-btn')).toBe(true);
    await expect(anchor.classList.contains('ez-filled')).toBe(true);

    // Should not have a <button>
    const button = linkBtn.shadowRoot?.querySelector('button');

    await expect(button).toBeNull();

    // Disabled link should have aria-disabled
    const disabledLink = buttons[2],
      disabledAnchor = getShadowAnchor(disabledLink);

    await expect(disabledAnchor.getAttribute('aria-disabled')).toBe('true');
  },
};

/**
 * Multi-token variety — space-separated variant tokens.
 */
export const MultiTokenVariety: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Multi-Token Variety</h2></header>
      <div
        style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;"
      >
        <ez-button variety="outlined" theme="primary" size="medium">
          Single token
        </ez-button>
        <ez-button variety="filled" theme="primary" icon aria-label="Star"
          >★</ez-button
        >
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const buttons = canvasElement.querySelectorAll(ezButtonName);

    await expect(buttons.length).toBe(2);

    // First button: single variety token
    const inner1 = getShadowButton(buttons[0]);

    await expect(inner1.classList.contains('ez-outlined')).toBe(true);
    await expect(inner1.classList.contains('ez-medium')).toBe(true);

    // Second button: icon + filled
    const inner2 = getShadowButton(buttons[1]);

    await expect(inner2.classList.contains('ez-filled')).toBe(true);
    await expect(inner2.classList.contains('ez-icon-btn')).toBe(true);
  },
};
