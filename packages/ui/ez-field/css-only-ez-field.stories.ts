import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'CSS Components/Field v2',
};

/**
 * Default field — plain input with no supporting text.
 * The `.ez-textfield` wrapper sits directly inside `.ez-field`.
 */
export const FieldDefault: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field — Default</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-default">Username</label>
          <div class="ez-textfield">
            <input
              id="field-default"
              type="text"
              placeholder="Enter username"
            />
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.ez-field');

    await expect(field).not.toBeNull();

    const input = field?.querySelector('.ez-textfield input');

    await expect(input).not.toBeNull();
  },
};

/**
 * Field with help text — the `.ez-textfield` wrapper and the help text element
 * are both placed inside a shared wrapping `<div>`.
 */
export const FieldWithHelp: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field — With Help Text</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-help">Email</label>
          <div>
            <div class="ez-textfield">
              <input
                id="field-help"
                type="email"
                placeholder="you@example.com"
              />
            </div>
            <div class="ez-field__supporting-text">
              We'll never share your email.
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.ez-field');

    await expect(field).not.toBeNull();

    const wrapper = field?.querySelector(':scope > div');

    await expect(wrapper).not.toBeNull();

    const inputWrapper = wrapper?.querySelector('.ez-textfield');

    await expect(inputWrapper).not.toBeNull();

    const helpText = wrapper?.querySelector('.ez-field__supporting-text');

    await expect(helpText).not.toBeNull();
  },
};

/**
 * Field with error text — the `.ez-textfield` wrapper and the error text element
 * are both placed inside a shared wrapping `<div>`.
 */
export const FieldWithError: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field — With Error Text</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-error">Password</label>
          <div>
            <div class="ez-textfield">
              <input id="field-error" type="password" placeholder="••••••••" />
            </div>
            <div class="ez-field__error-text">Password is required.</div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.ez-field');

    await expect(field).not.toBeNull();

    const wrapper = field?.querySelector(':scope > div');

    await expect(wrapper).not.toBeNull();

    const inputWrapper = wrapper?.querySelector('.ez-textfield');

    await expect(inputWrapper).not.toBeNull();

    const errorText = wrapper?.querySelector('.ez-field__error-text');

    await expect(errorText).not.toBeNull();
  },
};

/**
 * Field with both help and error text — both text elements and the
 * `.ez-textfield` wrapper share a single wrapping `<div>`.
 */
export const FieldWithHelpAndError: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field — With Help and Error Text</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-help-error">Zip Code</label>
          <div>
            <div class="ez-textfield">
              <input
                id="field-help-error"
                type="text"
                placeholder="#####-####"
              />
            </div>
            <div class="ez-field__supporting-text">#####(-####)</div>
            <div class="ez-field__error-text">Enter a valid US zip code.</div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector('.ez-field');

    await expect(field).not.toBeNull();

    const wrapper = field?.querySelector(':scope > div');

    await expect(wrapper).not.toBeNull();

    const inputWrapper = wrapper?.querySelector('.ez-textfield');

    await expect(inputWrapper).not.toBeNull();

    const helpText = wrapper?.querySelector('.ez-field__supporting-text');

    await expect(helpText).not.toBeNull();

    const errorText = wrapper?.querySelector('.ez-field__error-text');

    await expect(errorText).not.toBeNull();
  },
};

/**
 * Field variants — outlined (default), filled, and underlined input styles,
 * each with a `.ez-textfield` wrapper and supporting text inside a wrapping `<div>`.
 */
export const FieldVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field — Input Variants</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: flex-start;"
      >
        <div class="ez-field" data-testid="field-outlined">
          <label for="field-outlined">Outlined (default)</label>
          <div>
            <div class="ez-textfield ez-outlined">
              <input id="field-outlined" type="text" placeholder="Outlined" />
            </div>
            <div class="ez-field__supporting-text">Outlined variant</div>
          </div>
        </div>

        <div class="ez-field" data-testid="field-filled">
          <div>
            <div class="ez-textfield ez-filled">
              <label for="field-filled">Filled</label>
              <input id="field-filled" type="text" placeholder=" " />
            </div>
            <div class="ez-field__supporting-text">Filled variant</div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const outlined = canvasElement.querySelector(
        '[data-testid="field-outlined"]'
      ),
      filled = canvasElement.querySelector('[data-testid="field-filled"]');

    await expect(outlined).not.toBeNull();
    await expect(filled).not.toBeNull();

    await Promise.all(
      [outlined, filled].map(async field => {
        const wrapper = field?.querySelector(':scope > div');

        await expect(wrapper).not.toBeNull();

        const inputWrapper = wrapper?.querySelector('.ez-textfield');

        await expect(inputWrapper).not.toBeNull();

        const supportingText = wrapper?.querySelector(
          '.ez-field__supporting-text'
        );

        await expect(supportingText).not.toBeNull();
      })
    );
  },
};
