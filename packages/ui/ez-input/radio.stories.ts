import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'CSS Components/Radio',
};

/**
 * MD3 radio button states: selected, unselected, disabled.
 */
export const RadioStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Radio</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="radio-states"
              value="1"
            />
            Option 1 (unselected)</label
          >
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="radio-states"
              value="2"
              checked
            />
            Option 2 (selected)</label
          >
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="radio-states"
              value="3"
              disabled
            />
            Option 3 (disabled)</label
          >
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="radio-states"
              value="4"
              checked
              disabled
            />
            Option 4 (disabled, selected)</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const radios = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-radio[type="radio"]'
    );

    await expect(radios.length).toBe(4);

    const checked = canvasElement.querySelector<HTMLInputElement>(
      '.ez-radio[type="radio"]:not([disabled])[checked]'
    );

    await expect(checked).not.toBeNull();

    const disabled = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-radio[type="radio"][disabled]'
    );

    await expect(disabled.length).toBe(2);
  },
};

/**
 * MD3 error state radio buttons.
 */
export const RadioError: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Radio — Error State</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input
              class="ez-radio ez-error"
              type="radio"
              name="radio-error"
              value="1"
            />
            Error (unselected)</label
          >
          <label
            ><input
              class="ez-radio ez-error"
              type="radio"
              name="radio-error"
              value="2"
              checked
            />
            Error (selected)</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const errorRadios = canvasElement.querySelectorAll('.ez-radio.ez-error');

    await expect(errorRadios.length).toBe(2);
  },
};

/**
 * Radio button group with ez-ripple for enhanced interaction.
 */
export const RadioWithRipple: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Radio — With Ripple</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><ez-ripple class="ez-theme-primary"
              ><input
                class="ez-radio"
                type="radio"
                name="radio-ripple"
                value="1"
            /></ez-ripple>
            Option 1</label
          >
          <label
            ><ez-ripple class="ez-theme-primary"
              ><input
                class="ez-radio"
                type="radio"
                name="radio-ripple"
                value="2"
                checked
            /></ez-ripple>
            Option 2 (selected)</label
          >
          <label
            ><ez-ripple class="ez-theme-primary"
              ><input
                class="ez-radio"
                type="radio"
                name="radio-ripple"
                value="3"
            /></ez-ripple>
            Option 3</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const radios = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-radio[type="radio"]'
    );

    await expect(radios.length).toBe(3);

    const ripples = canvasElement.querySelectorAll('ez-ripple');

    await expect(ripples.length).toBe(3);
  },
};
