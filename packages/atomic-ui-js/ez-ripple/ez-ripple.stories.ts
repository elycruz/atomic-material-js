import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import { EzRippleName } from './ez-ripple.js';

export default {
  title: 'Custom Elements/Ripple',
  component: 'ez-ripple',
};

export const DefaultVariation: StoryObj = {
  render: () => html`
    <button type="button" class="ez-btn ez-theme-primary">
      <ez-ripple data-testid="ripple-1"></ez-ripple>
      Within a Button
    </button>

    <div>
      <label for="checkbox">
        <ez-ripple class="ez-theme-error">
          <input type="checkbox" class="ez-checkbox" id="checkbox" />
        </ez-ripple>
        <span>Around a Checkbox</span>
      </label>
    </div>
  `,
  play: async ({ canvas }) => {
    // Assert structure
    // ----
    const button = canvas.getByRole('button');

    await expect(button).toBeInTheDocument();

    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).toBeInTheDocument();

    const ripple = button.firstElementChild;

    await expect(ripple).toBeInTheDocument();
    await expect(ripple).toHaveProperty('nodeName', EzRippleName.toUpperCase());
    // Ensure no additional DOM is generated
    await expect(ripple).toBeEmptyDOMElement();
    // Ensure no `shadowRoot` is created
    await expect(ripple).toHaveProperty('shadowRoot', null);

    const ripple2 = checkbox.parentElement;

    await expect(ripple2).toBeInTheDocument();
    await expect(ripple2).toHaveProperty(
      'nodeName',
      EzRippleName.toUpperCase()
    );
    await expect(ripple2?.children).toHaveProperty('length', 1);
    // Ensure no additional DOM is generated
    await expect(ripple2).toHaveProperty('childElementCount', 1);
    // Ensure no `shadowRoot` is created
    await expect(ripple2).toHaveProperty('shadowRoot', null);
  },
};

export const RtlVariation: StoryObj = {
  render: () => html`
    <div dir="rtl">
      <button type="button" class="ez-btn ez-theme-primary">
        <ez-ripple data-testid="ripple-rtl-1"></ez-ripple>
        زر RTL
      </button>

      <div>
        <label for="checkbox-rtl">
          <ez-ripple class="ez-theme-error">
            <input
              type="checkbox"
              class="ez-checkbox"
              id="checkbox-rtl"
              name="checkbox-rtl"
            />
          </ez-ripple>
          <span>خانة اختيار RTL</span>
        </label>
      </div>
    </div>
  `,
  play: async ({ canvas }) => {
    const button = canvas.getByRole('button');

    await expect(button).toBeInTheDocument();

    const checkbox = canvas.getByRole('checkbox');

    await expect(checkbox).toBeInTheDocument();

    // Verify ripple inside RTL button
    const ripple = button.firstElementChild;

    await expect(ripple).toBeInTheDocument();
    await expect(ripple).toHaveProperty('nodeName', EzRippleName.toUpperCase());
    await expect(ripple).toBeEmptyDOMElement();
    await expect(ripple).toHaveProperty('shadowRoot', null);

    // Verify ripple around RTL checkbox
    const ripple2 = checkbox.parentElement;

    await expect(ripple2).toBeInTheDocument();
    await expect(ripple2).toHaveProperty(
      'nodeName',
      EzRippleName.toUpperCase()
    );
    await expect(ripple2).toHaveProperty('childElementCount', 1);
    await expect(ripple2).toHaveProperty('shadowRoot', null);
  },
};
