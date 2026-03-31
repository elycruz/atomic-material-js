import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'CSS Components/Checkbox',
};

/**
 * MD3 checkbox states: unchecked, checked, indeterminate, disabled, error.
 */
export const CheckboxStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Checkbox</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label><input class="ez-checkbox" type="checkbox" /> Unchecked</label>
          <label
            ><input class="ez-checkbox" type="checkbox" checked />
            Checked</label
          >
          <label
            ><input class="ez-checkbox" type="checkbox" disabled /> Disabled
            (unchecked)</label
          >
          <label
            ><input class="ez-checkbox" type="checkbox" checked disabled />
            Disabled (checked)</label
          >
          <label
            ><input class="ez-checkbox" type="checkbox" readonly />
            Readonly</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const checkboxes = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-checkbox[type="checkbox"]'
    );

    await expect(checkboxes.length).toBe(5);

    const checked = canvasElement.querySelector<HTMLInputElement>(
      '.ez-checkbox[type="checkbox"]:not([disabled]):not([readonly])[checked]'
    );

    await expect(checked).not.toBeNull();

    const disabled = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-checkbox[type="checkbox"][disabled]'
    );

    await expect(disabled.length).toBe(2);
  },
};

/**
 * MD3 error state checkboxes.
 */
export const CheckboxError: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Checkbox — Error State</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input class="ez-checkbox ez-error" type="checkbox" /> Error
            (unchecked)</label
          >
          <label
            ><input class="ez-checkbox ez-error" type="checkbox" checked />
            Error (checked)</label
          >
          <label
            ><input
              class="ez-checkbox ez-error"
              type="checkbox"
              indeterminate
            />
            Error (indeterminate)</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const errorCheckboxes = canvasElement.querySelectorAll(
      '.ez-checkbox.ez-error'
    );

    await expect(errorCheckboxes.length).toBe(3);
  },
};

/**
 * MD3 indeterminate checkbox state.
 */
export const CheckboxIndeterminate: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Checkbox — Indeterminate</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input
              class="ez-checkbox"
              type="checkbox"
              .indeterminate="${true}"
            />
            Indeterminate</label
          >
          <label
            ><input
              class="ez-checkbox"
              type="checkbox"
              .indeterminate="${true}"
              disabled
            />
            Indeterminate (disabled)</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const checkboxes = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-checkbox[type="checkbox"]'
    );

    await expect(checkboxes.length).toBe(2);

    const indeterminate = Array.from(checkboxes).filter(cb => cb.indeterminate);

    await expect(indeterminate.length).toBe(2);
  },
};
