import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import { EzShapeName, SHAPE_NAMES } from './ez-shape.js';

const shapeBoxStyle =
  'width: 120px; height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);';

export default {
  title: 'Custom Elements/Shape',
  component: 'ez-shape',
};

export const AllShapes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>All 35 M3 Expressive Shapes</h2></header>
      <div
        style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;"
      >
        ${SHAPE_NAMES.map(
          shape => html`
            <div style="text-align: center;">
              <ez-shape shape="${shape}" data-testid="shape-${shape}">
                <div style="${shapeBoxStyle}"></div>
              </ez-shape>
              <p style="margin: 0.5rem 0 0; font-size: 0.75rem;">${shape}</p>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    for (const shape of SHAPE_NAMES) {
      const el = canvas.getByTestId(`shape-${shape}`);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveProperty('nodeName', EzShapeName.toUpperCase()); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveAttribute('shape', shape); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveProperty('shadowRoot', null); // eslint-disable-line no-await-in-loop
    }
  },
};

export const MorphOnHover: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Morph on Hover</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        All shapes now use SVG clipPath so transitions animate smoothly between
        any pair.
      </p>
      <div
        style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;"
      >
        <div style="text-align: center;">
          <ez-shape
            shape="circle"
            morph-to="diamond"
            morph-on="hover"
            data-testid="morph-hover-1"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">circle → diamond</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="square"
            morph-to="flower"
            morph-on="hover"
            data-testid="morph-hover-2"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">square → flower</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="heart"
            morph-to="boom"
            morph-on="hover"
            data-testid="morph-hover-3"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">heart → boom</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="pill"
            morph-to="very-sunny"
            morph-on="hover"
            data-testid="morph-hover-4"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">pill → very-sunny</p>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    const el1 = canvas.getByTestId('morph-hover-1');

    await expect(el1).toHaveAttribute('shape', 'circle');
    await expect(el1).toHaveAttribute('morph-to', 'diamond');
    await expect(el1).toHaveAttribute('morph-on', 'hover');

    const el2 = canvas.getByTestId('morph-hover-2');

    await expect(el2).toHaveAttribute('shape', 'square');
    await expect(el2).toHaveAttribute('morph-to', 'flower');
    await expect(el2).toHaveAttribute('morph-on', 'hover');

    const el3 = canvas.getByTestId('morph-hover-3');

    await expect(el3).toHaveAttribute('shape', 'heart');
    await expect(el3).toHaveAttribute('morph-to', 'boom');
    await expect(el3).toHaveAttribute('morph-on', 'hover');

    const el4 = canvas.getByTestId('morph-hover-4');

    await expect(el4).toHaveAttribute('shape', 'pill');
    await expect(el4).toHaveAttribute('morph-to', 'very-sunny');
    await expect(el4).toHaveAttribute('morph-on', 'hover');
  },
};

export const MorphOnPress: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Morph on Press</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Press and hold each shape to see the morph target.
      </p>
      <div
        style="display: flex; gap: 1.5rem; flex-wrap: wrap; align-items: center;"
      >
        <div style="text-align: center;">
          <ez-shape
            shape="circle"
            morph-to="ghostish"
            morph-on="press"
            data-testid="morph-press-1"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">circle → ghostish</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="diamond"
            morph-to="puffy-diamond"
            morph-on="press"
            data-testid="morph-press-2"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">diamond → puffy-diamond</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="pentagon"
            morph-to="gem"
            morph-on="press"
            data-testid="morph-press-3"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">pentagon → gem</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="sunny"
            morph-to="soft-burst"
            morph-on="press"
            data-testid="morph-press-4"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">sunny → soft-burst</p>
        </div>

        <div style="text-align: center;">
          <ez-shape
            shape="triangle"
            morph-to="arch"
            morph-on="press"
            data-testid="morph-press-5"
          >
            <div style="${shapeBoxStyle}"></div>
          </ez-shape>
          <p style="margin: 0.5rem 0 0;">triangle → arch</p>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    const el1 = canvas.getByTestId('morph-press-1');

    await expect(el1).toHaveAttribute('shape', 'circle');
    await expect(el1).toHaveAttribute('morph-on', 'press');

    const el2 = canvas.getByTestId('morph-press-2');

    await expect(el2).toHaveAttribute('shape', 'diamond');
    await expect(el2).toHaveAttribute('morph-on', 'press');

    const el3 = canvas.getByTestId('morph-press-3');

    await expect(el3).toHaveAttribute('shape', 'pentagon');
    await expect(el3).toHaveAttribute('morph-on', 'press');

    const el4 = canvas.getByTestId('morph-press-4');

    await expect(el4).toHaveAttribute('shape', 'sunny');
    await expect(el4).toHaveAttribute('morph-on', 'press');

    const el5 = canvas.getByTestId('morph-press-5');

    await expect(el5).toHaveAttribute('shape', 'triangle');
    await expect(el5).toHaveAttribute('morph-on', 'press');
  },
};
