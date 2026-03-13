import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzSizeVariants } from '../utils/constants.js';

const typescaleSizes = Object.values(EzSizeVariants)
    .filter(
      s =>
        s === EzSizeVariants.Small ||
        s === EzSizeVariants.Medium ||
        s === EzSizeVariants.Large
    )
    .reverse(),
  sampleText = 'The quick brown fox jumps over the lazy dog',
  typescaleStyles = [
    { role: 'Display', sizes: typescaleSizes },
    { role: 'Headline', sizes: typescaleSizes },
    { role: 'Title', sizes: typescaleSizes },
    { role: 'Body', sizes: typescaleSizes },
    { role: 'Label', sizes: typescaleSizes },
  ];

export default {
  title: 'CSS Components/Typography',
};

export const TypeScale: StoryObj = {
  render: () => html`
    <section>
      <header><h2>M3 Type Scale</h2></header>
      <p style="margin: 0 0 1.5rem; opacity: 0.7;">
        All 15 Material Design 3 typescale utility classes
        (<code>.md-typescale-*</code>).
      </p>

      ${typescaleStyles.map(
        ({ role, sizes }) => html`
          <div style="margin-bottom: 2rem;">
            <h3
              style="margin: 0 0 1rem; opacity: 0.6; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;"
            >
              ${role}
            </h3>

            ${sizes.map(size => {
              const cls = `md-typescale-${role.toLowerCase()}-${size}`;

              return html`
                <div
                  style="margin-bottom: 1rem; display: flex; align-items: baseline; gap: 1rem;"
                >
                  <code
                    style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
                  >
                    .${cls}
                  </code>
                  <span class="${cls}" data-testid="${cls}">
                    ${role} ${size} — ${sampleText}
                  </span>
                </div>
              `;
            })}
          </div>
        `
      )}
    </section>
  `,
  play: async ({ canvas }) => {
    for (const { role, sizes } of typescaleStyles) {
      for (const size of sizes) {
        const testId = `md-typescale-${role.toLowerCase()}-${size}`,
          el = canvas.getByTestId(testId);

        await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
        // eslint-disable-next-line no-await-in-loop
        await expect(el).toHaveClass(
          `md-typescale-${role.toLowerCase()}-${size}`
        );
      }
    }
  },
};

export const HTMLElements: StoryObj = {
  render: () => html`
    <section>
      <header><h2>HTML Element Mappings</h2></header>
      <p style="margin: 0 0 1.5rem; opacity: 0.7;">
        Typography styles applied to semantic HTML elements via
        <code>copy.css</code>.
      </p>

      <div style="margin-bottom: 2rem;">
        <h3
          style="margin: 0 0 1rem; opacity: 0.6; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;"
        >
          Headings (h1–h6)
        </h3>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h1 — display large
            </code>
            <h1 data-testid="h1">${sampleText}</h1>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h2 — headline large
            </code>
            <h2 data-testid="h2">${sampleText}</h2>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h3 — headline medium
            </code>
            <h3 data-testid="h3">${sampleText}</h3>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h4 — headline small
            </code>
            <h4 data-testid="h4">${sampleText}</h4>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h5 — title large
            </code>
            <h5 data-testid="h5">${sampleText}</h5>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              h6 — title medium
            </code>
            <h6 data-testid="h6">${sampleText}</h6>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3
          style="margin: 0 0 1rem; opacity: 0.6; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;"
        >
          Body text
        </h3>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              p — body large
            </code>
            <p data-testid="p">${sampleText}</p>
          </div>

          <div style="display: flex; align-items: baseline; gap: 1rem;">
            <code
              style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
            >
              a — body large
            </code>
            <a href="#" data-testid="a">${sampleText}</a>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 2rem;">
        <h3
          style="margin: 0 0 1rem; opacity: 0.6; font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em;"
        >
          Class equivalents (.ez-h1–.ez-h6)
        </h3>

        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${[1, 2, 3, 4, 5, 6].map(
            n => html`
              <div style="display: flex; align-items: baseline; gap: 1rem;">
                <code
                  style="flex-shrink: 0; width: 14rem; font-size: 0.75rem; opacity: 0.5;"
                >
                  .ez-h${n}
                </code>
                <span class="ez-h${n}" data-testid="ez-h${n}">
                  ${sampleText}
                </span>
              </div>
            `
          )}
        </div>
      </div>
    </section>
  `,
  play: async ({ canvas }) => {
    for (const tag of ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a']) {
      const el = canvas.getByTestId(tag);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
    }

    for (let i = 1; i <= 6; i++) {
      const el = canvas.getByTestId(`ez-h${i}`);

      await expect(el).toBeInTheDocument(); // eslint-disable-line no-await-in-loop
      await expect(el).toHaveClass(`ez-h${i}`); // eslint-disable-line no-await-in-loop
    }
  },
};
