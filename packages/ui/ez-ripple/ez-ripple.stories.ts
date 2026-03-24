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

export const DraggedStateVariation: StoryObj = {
  render: () => html`
    <p style="margin-bottom: 0.5rem;">
      The dragged state uses a higher opacity (0.16) per M3 spec. The button
      below has its parent marked as <code>.ez-dragged</code>.
    </p>

    <div class="ez-dragged" style="display: inline-block; position: relative;">
      <button type="button" class="ez-btn ez-theme-primary">
        <ez-ripple data-testid="ripple-dragged"></ez-ripple>
        Dragged Button
      </button>
    </div>

    <div style="display: inline-block; position: relative; margin-left: 1rem;">
      <button type="button" class="ez-btn ez-theme-primary">
        <ez-ripple dragged data-testid="ripple-dragged-attr"></ez-ripple>
        Dragged (attr)
      </button>
    </div>
  `,
  play: async ({ canvas }) => {
    const draggedBtn = canvas.getByTestId('ripple-dragged');

    await expect(draggedBtn).toBeInTheDocument();
    await expect(draggedBtn).toHaveProperty(
      'nodeName',
      EzRippleName.toUpperCase()
    );

    const draggedAttrBtn = canvas.getByTestId('ripple-dragged-attr');

    await expect(draggedAttrBtn).toBeInTheDocument();
    await expect(draggedAttrBtn).toHaveAttribute('dragged');
  },
};
