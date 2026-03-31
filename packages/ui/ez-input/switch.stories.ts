import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'CSS Components/Switch',
};

/**
 * MD3 switch states: on, off, disabled.
 */
export const SwitchStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Switch</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input class="ez-switch" type="checkbox" role="switch" />
            Off</label
          >
          <label
            ><input class="ez-switch" type="checkbox" role="switch" checked />
            On</label
          >
          <label
            ><input class="ez-switch" type="checkbox" role="switch" disabled />
            Disabled (off)</label
          >
          <label
            ><input
              class="ez-switch"
              type="checkbox"
              role="switch"
              checked
              disabled
            />
            Disabled (on)</label
          >
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const switches = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-switch[type="checkbox"][role="switch"]'
    );

    await expect(switches.length).toBe(4);

    const checkedSwitch = canvasElement.querySelector<HTMLInputElement>(
      '.ez-switch[type="checkbox"][role="switch"]:not([disabled])[checked]'
    );

    await expect(checkedSwitch).not.toBeNull();

    const disabledSwitches = canvasElement.querySelectorAll<HTMLInputElement>(
      '.ez-switch[type="checkbox"][role="switch"][disabled]'
    );

    await expect(disabledSwitches.length).toBe(2);
  },
};
