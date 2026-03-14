import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import { ezSurfaceName } from './ez-surface.js';

const surfaceStyle =
  'padding: 24px; min-width: 120px; min-height: 80px; text-align: center;';

export default {
  title: 'Custom Elements/Surface',
  component: 'ez-surface',
};

export const ElevationLevels: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Elevation Levels (0–5)</h2></header>
      <div
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; padding: 1rem;"
      >
        ${[0, 1, 2, 3, 4, 5].map(
          level => html`
            <ez-surface
              elevation="${level}"
              data-testid="elevation-${level}"
              style="${surfaceStyle}"
            >
              Level ${level}
            </ez-surface>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    for (let level = 0; level <= 5; level++) {
      const el = canvas.getByTestId(`elevation-${level}`);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveProperty('nodeName', ezSurfaceName.toUpperCase()); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('elevation', String(level)); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveProperty('shadowRoot', null); // eslint-disable-line no-await-in-loop
    }
  },
};

export const HoverElevation: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Hover Elevation</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Hover over each surface to see the elevation change.
      </p>
      <div
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; padding: 1rem;"
      >
        <ez-surface
          elevation="1"
          hover-elevation="3"
          data-testid="hover-elev-1"
          style="${surfaceStyle} cursor: pointer;"
        >
          1 → 3
        </ez-surface>

        <ez-surface
          elevation="0"
          hover-elevation="2"
          data-testid="hover-elev-2"
          style="${surfaceStyle} cursor: pointer;"
        >
          0 → 2
        </ez-surface>

        <ez-surface
          elevation="2"
          hover-elevation="5"
          data-testid="hover-elev-3"
          style="${surfaceStyle} cursor: pointer;"
        >
          2 → 5
        </ez-surface>
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    const el1 = canvas.getByTestId('hover-elev-1');

    await expect(el1).toHaveAttribute('elevation', '1');
    await expect(el1).toHaveAttribute('hover-elevation', '3');

    const el2 = canvas.getByTestId('hover-elev-2');

    await expect(el2).toHaveAttribute('elevation', '0');
    await expect(el2).toHaveAttribute('hover-elevation', '2');

    const el3 = canvas.getByTestId('hover-elev-3');

    await expect(el3).toHaveAttribute('elevation', '2');
    await expect(el3).toHaveAttribute('hover-elevation', '5');
  },
};

export const EntranceAnimations: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Entrance Animations</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Each surface animates in when mounted.
      </p>
      <div
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; padding: 1rem;"
      >
        ${['fade-in', 'scale-up', 'slide-up', 'slide-left'].map(
          anim => html`
            <ez-surface
              elevation="2"
              animation="${anim}"
              animate-on="enter"
              data-testid="enter-${anim}"
              style="${surfaceStyle}"
            >
              ${anim}
            </ez-surface>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    for (const anim of ['fade-in', 'scale-up', 'slide-up', 'slide-left']) {
      const el = canvas.getByTestId(`enter-${anim}`);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('animation', anim); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('animate-on', 'enter'); // eslint-disable-line no-await-in-loop
    }
  },
};

export const ContinuousAnimations: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Continuous Animations</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Hover over each surface to trigger the continuous animation.
      </p>
      <div
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; padding: 1rem;"
      >
        ${['pulse', 'float', 'breathe'].map(
          anim => html`
            <ez-surface
              elevation="2"
              animation="${anim}"
              animate-on="hover"
              data-testid="continuous-${anim}"
              style="${surfaceStyle} cursor: pointer;"
            >
              ${anim}
            </ez-surface>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    for (const anim of ['pulse', 'float', 'breathe']) {
      const el = canvas.getByTestId(`continuous-${anim}`);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('animation', anim); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('animate-on', 'hover'); // eslint-disable-line no-await-in-loop
    }
  },
};

export const WithShape: StoryObj = {
  render: () => {
    // Dynamically import shape registration
    void import('../ez-shape/register.js');

    return html`
      <section>
        <header><h2>Surface + Shape</h2></header>
        <p style="margin: 0 0 1rem; opacity: 0.7;">
          Composing ez-surface inside ez-shape for shaped elevated containers.
        </p>
        <div
          style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: center; padding: 1rem;"
        >
          <ez-shape shape="circle" morph-to="diamond" morph-on="hover">
            <ez-surface
              elevation="3"
              hover-elevation="5"
              data-testid="shaped-surface-1"
              style="width: 160px; height: 160px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;"
            >
              Circle
            </ez-surface>
          </ez-shape>

          <ez-shape shape="diamond" morph-to="heart" morph-on="hover">
            <ez-surface
              elevation="2"
              hover-elevation="4"
              data-testid="shaped-surface-2"
              style="width: 160px; height: 160px; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;"
            >
              Diamond
            </ez-surface>
          </ez-shape>
        </div>
      </section>
    `;
  },
  play: async ({ canvas }) => {
    const el1 = canvas.getByTestId('shaped-surface-1');

    await expect(el1).toBeInTheDocument();
    await expect(el1).toHaveAttribute('elevation', '3');

    const el2 = canvas.getByTestId('shaped-surface-2');

    await expect(el2).toBeInTheDocument();
    await expect(el2).toHaveAttribute('elevation', '2');
  },
};

export const ProgrammaticAPI: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Programmatic Animation</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Click buttons to trigger animations programmatically.
      </p>
      <div style="display: flex; gap: 1rem; margin-bottom: 1rem;">
        <button
          type="button"
          data-testid="btn-fade-in"
          onclick="document.querySelector('#prog-surface').playAnimation('fade-in')"
        >
          Fade In
        </button>
        <button
          type="button"
          data-testid="btn-scale-up"
          onclick="document.querySelector('#prog-surface').playAnimation('scale-up')"
        >
          Scale Up
        </button>
        <button
          type="button"
          data-testid="btn-pulse"
          onclick="document.querySelector('#prog-surface').playAnimation('pulse')"
        >
          Pulse
        </button>
        <button
          type="button"
          data-testid="btn-stop"
          onclick="document.querySelector('#prog-surface').stopAnimation()"
        >
          Stop
        </button>
      </div>
      <ez-surface
        id="prog-surface"
        elevation="2"
        data-testid="prog-surface"
        style="${surfaceStyle}"
      >
        Animate me!
      </ez-surface>
    </section>
  `,
  play: async ({ canvas }) => {
    const surface = canvas.getByTestId('prog-surface');

    await expect(surface).toBeInTheDocument();
    await expect(surface).toHaveAttribute('elevation', '2');

    // Verify programmatic API exists
    await expect(surface).toHaveProperty('playAnimation');
    await expect(surface).toHaveProperty('stopAnimation');
  },
};
