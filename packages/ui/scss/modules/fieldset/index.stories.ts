import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'CSS Components/Field',
};

/**
 * Basic inline `.ez-field` with label + input, help text, and error message.
 */
export const FieldDefault: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field - Default (Inline)</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-default-1">Name</label>
          <input
            id="field-default-1"
            class="ez-input"
            type="text"
            placeholder="Enter name"
          />
        </div>

        <br /><br />

        <div class="ez-field">
          <label for="field-default-2">Email</label>
          <input
            id="field-default-2"
            class="ez-input"
            type="email"
            placeholder="Enter email"
          />
          <div class="ez-field__help">We'll never share your email.</div>
        </div>

        <br /><br />

        <div class="ez-field">
          <label for="field-default-3">Username</label>
          <input
            id="field-default-3"
            class="ez-input"
            type="text"
            placeholder="Enter username"
          />
          <div class="ez-field__error-message">Username is required.</div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const fields = canvasElement.querySelectorAll('.ez-field');

    await expect(fields.length).toBe(3);
    await expect(canvasElement.querySelector('.ez-field__help')).not.toBeNull();
    await expect(
      canvasElement.querySelector('.ez-field__error-message')
    ).not.toBeNull();
  },
};

/**
 * Vertical field layout with label above input.
 */
export const FieldVertical: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field - Vertical Layout</h2></header>

      <div class="ez-section-body">
        <div class="ez-field ez-field--vertical">
          <label for="field-vert-1">Full Name</label>
          <input
            id="field-vert-1"
            class="ez-input"
            type="text"
            placeholder="Enter full name"
          />
          <div class="ez-field__help">As it appears on your ID.</div>
        </div>

        <br />

        <div class="ez-field ez-field--vertical">
          <label for="field-vert-2">Email</label>
          <input
            id="field-vert-2"
            class="ez-input"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <br />

        <div class="ez-field ez-field--vertical">
          <label for="field-vert-3">Phone</label>
          <input
            id="field-vert-3"
            class="ez-input"
            type="tel"
            placeholder="Enter phone"
          />
          <div class="ez-field__error-message">Invalid phone number.</div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const vertFields = canvasElement.querySelectorAll('.ez-field--vertical');

    await expect(vertFields.length).toBe(3);
    await expect(canvasElement.querySelector('input[required]')).not.toBeNull();
    await expect(
      canvasElement.querySelector('.ez-field__error-message')
    ).not.toBeNull();
  },
};

/**
 * Custom content slot (`.ez-field__custom`) below field.
 */
export const FieldCustomSlot: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field - Custom Content</h2></header>

      <div class="ez-section-body">
        <div class="ez-field ez-field--vertical">
          <label for="field-custom-1">Bio</label>
          <textarea
            id="field-custom-1"
            class="ez-input"
            placeholder="Tell us about yourself"
          ></textarea>
          <div class="ez-field__custom">Max 250 characters.</div>
        </div>

        <br />

        <div class="ez-field ez-field--vertical">
          <label for="field-custom-2">Password</label>
          <input
            id="field-custom-2"
            class="ez-input"
            type="password"
            placeholder="Enter password"
            required
          />
          <div class="ez-field__error-message">Password is required.</div>
          <div class="ez-field__custom">Must be at least 8 characters.</div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const customs = canvasElement.querySelectorAll('.ez-field__custom');

    await expect(customs.length).toBe(2);
    await expect(
      canvasElement.querySelector('.ez-field__error-message')
    ).not.toBeNull();
  },
};

/**
 * Flex row layout with leading and trailing elements.
 */
export const FieldFlexRow: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field - Flex Row (Leading / Trailing)</h2></header>

      <div class="ez-section-body">
        <div class="ez-field ez-field--vertical">
          <label for="field-flex-1">Price</label>
          <div class="ez-field__flex-row">
            <span class="ez-field__leading">$</span>
            <input
              id="field-flex-1"
              class="ez-input"
              type="number"
              placeholder="0"
            />
            <span class="ez-field__trailing">.00</span>
          </div>
        </div>

        <br />

        <div class="ez-field ez-field--vertical">
          <label for="field-flex-2">Weight</label>
          <div class="ez-field__flex-row">
            <span class="ez-field__leading md-icon">scale</span>
            <input
              id="field-flex-2"
              class="ez-input"
              type="number"
              placeholder="0"
            />
            <span class="ez-field__trailing">kg</span>
          </div>
          <div class="ez-field__custom">Enter weight in kilograms.</div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const flexRows = canvasElement.querySelectorAll('.ez-field__flex-row'),
      leading = canvasElement.querySelectorAll('.ez-field__leading'),
      trailing = canvasElement.querySelectorAll('.ez-field__trailing');

    await expect(flexRows.length).toBe(2);
    await expect(leading.length).toBe(2);
    await expect(trailing.length).toBe(2);
  },
};

/**
 * Disabled field state.
 */
export const FieldDisabled: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Field - Disabled</h2></header>

      <div class="ez-section-body">
        <div class="ez-field">
          <label for="field-dis-1">Inline Disabled</label>
          <input
            id="field-dis-1"
            class="ez-input"
            type="text"
            value="Read only value"
            disabled
          />
        </div>

        <br /><br />

        <div class="ez-field ez-field--vertical">
          <label for="field-dis-2">Vertical Disabled</label>
          <input
            id="field-dis-2"
            class="ez-input"
            type="text"
            value="Read only value"
            disabled
          />
          <div class="ez-field__help">This field cannot be edited.</div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const disabled = canvasElement.querySelectorAll('input[disabled]');

    await expect(disabled.length).toBe(2);
  },
};

/**
 * Basic fieldset with legend containing vertical fields.
 */
export const FieldsetDefault: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Fieldset - Default</h2></header>

      <div class="ez-section-body">
        <fieldset class="ez-fieldset">
          <legend>Personal Info</legend>
          <div class="ez-field ez-field--vertical">
            <label for="fset-name">Name</label>
            <input
              id="fset-name"
              class="ez-input"
              type="text"
              placeholder="Full name"
              required
            />
          </div>
          <div class="ez-field ez-field--vertical">
            <label for="fset-email">Email</label>
            <input
              id="fset-email"
              class="ez-input"
              type="email"
              placeholder="Email address"
              required
            />
          </div>
          <div class="ez-field ez-field--vertical">
            <label for="fset-phone">Phone</label>
            <input
              id="fset-phone"
              class="ez-input"
              type="tel"
              placeholder="Phone number"
            />
          </div>
        </fieldset>

        <fieldset class="ez-fieldset">
          <legend>Preferences</legend>
          <div class="ez-field ez-field--vertical">
            <label for="fset-lang">Language</label>
            <select id="fset-lang" class="ez-input">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div class="ez-field ez-field--vertical">
            <label for="fset-notes">Notes</label>
            <textarea
              id="fset-notes"
              class="ez-input"
              placeholder="Additional notes"
            ></textarea>
          </div>
        </fieldset>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const fieldsets = canvasElement.querySelectorAll('.ez-fieldset'),
      legends = canvasElement.querySelectorAll('legend'),
      fields = canvasElement.querySelectorAll(
        '.ez-fieldset:first-of-type .ez-field'
      );

    await expect(fieldsets.length).toBe(2);
    await expect(legends.length).toBe(2);
    await expect(fields.length).toBe(3);
  },
};

/**
 * Two-column grid fieldset layout.
 */
export const FieldsetGrid: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Fieldset - Grid (2-column)</h2></header>

      <div class="ez-section-body">
        <fieldset class="ez-fieldset ez-grid ez-fieldset--grid-2">
          <legend>Contact Form</legend>

          <label for="grid-name">Name</label>
          <input
            id="grid-name"
            class="ez-input"
            type="text"
            placeholder="Full name"
            required
          />

          <label for="grid-email">Email</label>
          <input
            id="grid-email"
            class="ez-input"
            type="email"
            placeholder="Email"
            required
          />

          <label for="grid-phone">Phone</label>
          <input
            id="grid-phone"
            class="ez-input"
            type="tel"
            placeholder="Phone"
          />

          <label for="grid-msg">Message</label>
          <div class="ez-input">
            <textarea
              id="grid-msg"
              placeholder="Your message"
              rows="3"
            ></textarea>
          </div>
        </fieldset>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const grid = canvasElement.querySelector('.ez-fieldset--grid-2'),
      labels = grid?.querySelectorAll('label') ?? [],
      inputs = grid?.querySelectorAll('input, .ez-input') ?? [];

    await expect(grid).not.toBeNull();
    await expect(grid?.classList.contains('ez-grid')).toBe(true);
    await expect(labels.length).toBe(4);
    await expect(inputs.length).toBe(4);
  },
};
