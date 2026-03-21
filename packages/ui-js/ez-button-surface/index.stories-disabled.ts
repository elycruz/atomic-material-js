import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import '../ez-ripple/register.js';
import { ezButtonSurfaceName } from './ez-button-surface.js';

export default {
  title: 'Custom Elements/ButtonSurface',
  component: 'ez-button-surface',
};

export const WithinButtons: StoryObj = {
  render: () => html`
    <section
      style="display: flex; gap: 1rem; align-items: center; padding: 1rem;"
    >
      <button
        type="button"
        class="ez-btn ez-filled ez-theme-primary _ez-with-button-surface"
        data-testid="btn-1"
      >
        <ez-ripple></ez-ripple>
        <ez-button-surface data-testid="surface-1"></ez-button-surface>
        <span>Primary</span>
      </button>

      <button
        type="button"
        class="ez-btn ez-filled ez-theme-info _ez-with-button-surface"
        data-testid="btn-2"
      >
        <ez-ripple></ez-ripple>
        <ez-button-surface data-testid="surface-2"></ez-button-surface>
        <span>Info</span>
      </button>

      <button
        type="button"
        class="ez-btn ez-filled ez-theme-error _ez-with-button-surface"
        data-testid="btn-3"
      >
        <ez-ripple></ez-ripple>
        <ez-button-surface data-testid="surface-3"></ez-button-surface>
        <span>Error</span>
      </button>
    </section>
  `,
  play: async ({ canvas }) => {
    for (let i = 1; i <= 3; i++) {
      const surface = canvas.getByTestId(`surface-${i}`),
        nodeName = ezButtonSurfaceName.toUpperCase();

      await expect(surface).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(surface).toHaveProperty('nodeName', nodeName); // eslint-disable-line no-await-in-loop

      // Verify shadow DOM exists
      await expect(surface).toHaveProperty('shadowRoot'); // eslint-disable-line no-await-in-loop
      await expect(surface.shadowRoot).not.toBeNull(); // eslint-disable-line no-await-in-loop

      // Verify three-part structure
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const shadow = surface.shadowRoot!,
        head = shadow.querySelector('[part="head"]'),
        center = shadow.querySelector('[part="center"]'),
        tail = shadow.querySelector('[part="tail"]');

      await expect(head).not.toBeNull(); // eslint-disable-line no-await-in-loop
      await expect(center).not.toBeNull(); // eslint-disable-line no-await-in-loop
      await expect(tail).not.toBeNull(); // eslint-disable-line no-await-in-loop
    }
  },
};
