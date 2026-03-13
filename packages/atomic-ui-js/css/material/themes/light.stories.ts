import { html, css, unsafeCSS, LitElement } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { expect } from 'storybook/test';

interface SwatchDef {
  label: string;
  bg: string;
  text: string;
}

const sys = (name: string) => `--md-sys-color-${name}`,
  ext = (name: string, role: string) => `--md-extended-color-${name}-${role}`,
  accentRows: SwatchDef[][] = [
    [
      { label: 'Primary', bg: sys('primary'), text: sys('on-primary') },
      { label: 'Secondary', bg: sys('secondary'), text: sys('on-secondary') },
      { label: 'Tertiary', bg: sys('tertiary'), text: sys('on-tertiary') },
      { label: 'Error', bg: sys('error'), text: sys('on-error') },
    ],
    [
      { label: 'On Primary', bg: sys('on-primary'), text: sys('primary') },
      {
        label: 'On Secondary',
        bg: sys('on-secondary'),
        text: sys('secondary'),
      },
      { label: 'On Tertiary', bg: sys('on-tertiary'), text: sys('tertiary') },
      { label: 'On Error', bg: sys('on-error'), text: sys('error') },
    ],
    [
      {
        label: 'Primary Container',
        bg: sys('primary-container'),
        text: sys('on-primary-container'),
      },
      {
        label: 'Secondary Container',
        bg: sys('secondary-container'),
        text: sys('on-secondary-container'),
      },
      {
        label: 'Tertiary Container',
        bg: sys('tertiary-container'),
        text: sys('on-tertiary-container'),
      },
      {
        label: 'Error Container',
        bg: sys('error-container'),
        text: sys('on-error-container'),
      },
    ],
    [
      {
        label: 'On Primary Container',
        bg: sys('on-primary-container'),
        text: sys('primary-container'),
      },
      {
        label: 'On Secondary Container',
        bg: sys('on-secondary-container'),
        text: sys('secondary-container'),
      },
      {
        label: 'On Tertiary Container',
        bg: sys('on-tertiary-container'),
        text: sys('tertiary-container'),
      },
      {
        label: 'On Error Container',
        bg: sys('on-error-container'),
        text: sys('error-container'),
      },
    ],
  ];

interface FixedColumnDef {
  fixed: SwatchDef;
  fixedDim: SwatchDef;
  onFixed: SwatchDef;
  onFixedVariant: SwatchDef;
}

const fixedColumns: FixedColumnDef[] = [
    {
      fixed: {
        label: 'Primary Fixed',
        bg: sys('primary-fixed'),
        text: sys('on-primary-fixed'),
      },
      fixedDim: {
        label: 'Primary Fixed Dim',
        bg: sys('primary-fixed-dim'),
        text: sys('on-primary-fixed'),
      },
      onFixed: {
        label: 'On Primary Fixed',
        bg: sys('on-primary-fixed'),
        text: sys('primary-fixed'),
      },
      onFixedVariant: {
        label: 'On Primary Fixed Variant',
        bg: sys('on-primary-fixed-variant'),
        text: sys('primary-fixed'),
      },
    },
    {
      fixed: {
        label: 'Secondary Fixed',
        bg: sys('secondary-fixed'),
        text: sys('on-secondary-fixed'),
      },
      fixedDim: {
        label: 'Secondary Fixed Dim',
        bg: sys('secondary-fixed-dim'),
        text: sys('on-secondary-fixed'),
      },
      onFixed: {
        label: 'On Secondary Fixed',
        bg: sys('on-secondary-fixed'),
        text: sys('secondary-fixed'),
      },
      onFixedVariant: {
        label: 'On Secondary Fixed Variant',
        bg: sys('on-secondary-fixed-variant'),
        text: sys('secondary-fixed'),
      },
    },
    {
      fixed: {
        label: 'Tertiary Fixed',
        bg: sys('tertiary-fixed'),
        text: sys('on-tertiary-fixed'),
      },
      fixedDim: {
        label: 'Tertiary Fixed Dim',
        bg: sys('tertiary-fixed-dim'),
        text: sys('on-tertiary-fixed'),
      },
      onFixed: {
        label: 'On Tertiary Fixed',
        bg: sys('on-tertiary-fixed'),
        text: sys('tertiary-fixed'),
      },
      onFixedVariant: {
        label: 'On Tertiary Fixed Variant',
        bg: sys('on-tertiary-fixed-variant'),
        text: sys('tertiary-fixed'),
      },
    },
  ],
  surfaceTopRow: SwatchDef[] = [
    { label: 'Surface Dim', bg: sys('surface-dim'), text: sys('on-surface') },
    { label: 'Surface', bg: sys('surface'), text: sys('on-surface') },
    {
      label: 'Surface Bright',
      bg: sys('surface-bright'),
      text: sys('on-surface'),
    },
  ],
  surfaceContainerRow: SwatchDef[] = [
    {
      label: 'Surface Container Lowest',
      bg: sys('surface-container-lowest'),
      text: sys('on-surface'),
    },
    {
      label: 'Surface Container Low',
      bg: sys('surface-container-low'),
      text: sys('on-surface'),
    },
    {
      label: 'Surface Container',
      bg: sys('surface-container'),
      text: sys('on-surface'),
    },
    {
      label: 'Surface Container High',
      bg: sys('surface-container-high'),
      text: sys('on-surface'),
    },
    {
      label: 'Surface Container Highest',
      bg: sys('surface-container-highest'),
      text: sys('on-surface'),
    },
  ],
  inverseSwatches: SwatchDef[] = [
    {
      label: 'Inverse Surface',
      bg: sys('inverse-surface'),
      text: sys('inverse-on-surface'),
    },
    {
      label: 'Inverse On Surface',
      bg: sys('inverse-on-surface'),
      text: sys('inverse-surface'),
    },
    {
      label: 'Inverse Primary',
      bg: sys('inverse-primary'),
      text: sys('on-primary-fixed'),
    },
  ],
  bottomLeftRow: SwatchDef[] = [
    { label: 'On Surface', bg: sys('on-surface'), text: sys('surface') },
    {
      label: 'On Surface Variant',
      bg: sys('on-surface-variant'),
      text: sys('surface'),
    },
    { label: 'Outline', bg: sys('outline'), text: sys('surface') },
    {
      label: 'Outline Variant',
      bg: sys('outline-variant'),
      text: sys('on-surface'),
    },
  ],
  bottomRightRow: SwatchDef[] = [
    { label: 'Scrim', bg: sys('scrim'), text: sys('surface') },
    { label: 'Shadow', bg: sys('shadow'), text: sys('surface') },
  ],
  extendedNames = ['success', 'warning', 'info'] as const,
  extendedRows: SwatchDef[][] = [
    extendedNames.map(n => ({
      label: `${n[0].toUpperCase()}${n.slice(1)}`,
      bg: ext(n, 'color'),
      text: ext(n, 'on-color'),
    })),
    extendedNames.map(n => ({
      label: `On ${n[0].toUpperCase()}${n.slice(1)}`,
      bg: ext(n, 'on-color'),
      text: ext(n, 'color'),
    })),
    extendedNames.map(n => ({
      label: `${n[0].toUpperCase()}${n.slice(1)} Container`,
      bg: ext(n, 'color-container'),
      text: ext(n, 'on-color-container'),
    })),
    extendedNames.map(n => ({
      label: `On ${n[0].toUpperCase()}${n.slice(1)} Container`,
      bg: ext(n, 'on-color-container'),
      text: ext(n, 'color-container'),
    })),
  ],
  radius = unsafeCSS('0.75rem');

class EzMdColorSchemePreview extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2.5rem;
      background: var(--md-sys-color-surface-container-lowest);
      font-family:
        system-ui,
        -apple-system,
        sans-serif;
    }

    /* ---- Swatch base ---- */

    .swatch {
      position: relative;
      display: flex;
      align-items: flex-end;
      padding: 0.625rem 0.875rem;
      font-size: 0.8125rem;
      font-weight: 500;
      cursor: pointer;
      transition: opacity 0.15s ease;
      box-sizing: border-box;
      line-height: 1.3;
    }

    .swatch:hover {
      opacity: 0.88;
    }

    .copied-feedback {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.6);
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      pointer-events: none;
      animation: fadeOut 1s ease forwards;
      border-radius: inherit;
    }

    @keyframes fadeOut {
      0% {
        opacity: 1;
      }
      70% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }

    /* ---- Rounding helpers ---- */

    .round-top {
      border-radius: ${radius} ${radius} 0 0;
    }

    .round-bottom {
      border-radius: 0 0 ${radius} ${radius};
    }

    .round-tl {
      border-top-left-radius: ${radius};
    }

    .round-tr {
      border-top-right-radius: ${radius};
    }

    .round-bl {
      border-bottom-left-radius: ${radius};
    }

    .round-br {
      border-bottom-right-radius: ${radius};
    }

    .round-all {
      border-radius: ${radius};
    }

    /* ---- Section spacing ---- */

    section + section {
      margin-top: 1.25rem;
    }

    /* ---- Accent grid (4 cols × 4 rows) ---- */

    .accent-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 5.5rem 2.5rem 3.5rem 3.5rem;
      column-gap: 0.75rem;
    }

    /* ---- Fixed section (3 columns) ---- */

    .fixed-section {
      display: flex;
      gap: 0.75rem;
    }

    .fixed-column {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .split-row {
      display: flex;
    }

    .split-row .swatch {
      flex: 1;
    }

    .fixed-column .swatch {
      min-height: 2.75rem;
    }

    .fixed-column .split-row .swatch {
      min-height: 3.5rem;
    }

    /* ---- Surface + Inverse section ---- */

    .surface-inverse {
      display: flex;
      gap: 1.5rem;
    }

    .surface-area {
      flex: 3;
      display: flex;
      flex-direction: column;
    }

    .surface-top-row {
      display: flex;
    }

    .surface-top-row .swatch {
      flex: 1;
      min-height: 5rem;
    }

    .surface-container-row {
      display: flex;
    }

    .surface-container-row .swatch {
      flex: 1;
      min-height: 5rem;
    }

    .inverse-area {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .inverse-area .swatch {
      flex: 1;
    }

    /* ---- Bottom row ---- */

    .bottom-section {
      display: flex;
      gap: 1.5rem;
    }

    .bottom-left {
      flex: 3;
      display: flex;
      gap: 0.5rem;
    }

    .bottom-right {
      flex: 1;
      display: flex;
      gap: 0.5rem;
    }

    .bottom-section .swatch {
      flex: 1;
      min-height: 3rem;
    }

    .shadow-swatch {
      outline: 1px solid var(--md-sys-color-outline-variant);
    }

    /* ---- Extended section heading ---- */

    h3 {
      margin: 2.5rem 0 0.75rem;
      font-size: 1.125rem;
      font-weight: 500;
      color: var(--md-sys-color-on-surface);
    }

    /* ---- Extended grid (3 cols × 4 rows) ---- */

    .extended-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 5.5rem 2.5rem 3.5rem 3.5rem;
      column-gap: 0.75rem;
    }
  `;

  #rgbToHex(rgb: string): string {
    const match = /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/.exec(rgb);

    if (!match) return rgb;

    const [, r, g, b] = match;

    return (
      '#' + [r, g, b].map(c => Number(c).toString(16).padStart(2, '0')).join('')
    );
  }

  #handleCellClick(e: Event) {
    const cell = e.currentTarget as HTMLElement,
      hex = this.#rgbToHex(getComputedStyle(cell).backgroundColor);

    void navigator.clipboard.writeText(hex).then(() => {
      const feedback = document.createElement('span');

      feedback.className = 'copied-feedback';
      feedback.textContent = `Copied ${hex}`;
      cell.appendChild(feedback);
      setTimeout(() => {
        feedback.remove();
      }, 1000);
    });
  }

  #renderSwatch(s: SwatchDef, extraClass = '') {
    return html`
      <div
        class="swatch ${extraClass}"
        style="background: var(${s.bg}); color: var(${s.text})"
        title="${s.bg} — click to copy hex"
        @click=${(e: Event) => {
          this.#handleCellClick(e);
        }}
      >
        ${s.label}
      </div>
    `;
  }

  #renderAccentGrid() {
    return html`
      <section class="accent-grid" data-testid="accent-colors">
        ${accentRows.map((row, rowIdx) => {
          const cls =
            rowIdx === 0
              ? 'round-top'
              : rowIdx === accentRows.length - 1
                ? 'round-bottom'
                : '';

          return row.map(s => this.#renderSwatch(s, cls));
        })}
      </section>
    `;
  }

  #renderFixedSection() {
    return html`
      <section class="fixed-section" data-testid="fixed-colors">
        ${fixedColumns.map(
          col => html`
            <div class="fixed-column">
              <div class="split-row">
                ${this.#renderSwatch(col.fixed, 'round-tl')}
                ${this.#renderSwatch(col.fixedDim, 'round-tr')}
              </div>
              ${this.#renderSwatch(col.onFixed)}
              ${this.#renderSwatch(col.onFixedVariant, 'round-bottom')}
            </div>
          `
        )}
      </section>
    `;
  }

  #renderSurfaceInverse() {
    return html`
      <section class="surface-inverse" data-testid="surface-colors">
        <div class="surface-area">
          <div class="surface-top-row">
            ${surfaceTopRow.map((s, i) =>
              this.#renderSwatch(
                s,
                i === 0
                  ? 'round-tl'
                  : i === surfaceTopRow.length - 1
                    ? 'round-tr'
                    : ''
              )
            )}
          </div>
          <div class="surface-container-row">
            ${surfaceContainerRow.map((s, i) =>
              this.#renderSwatch(
                s,
                i === 0
                  ? 'round-bl'
                  : i === surfaceContainerRow.length - 1
                    ? 'round-br'
                    : ''
              )
            )}
          </div>
        </div>
        <div class="inverse-area">
          ${inverseSwatches.map((s, i) =>
            this.#renderSwatch(
              s,
              i === 0
                ? 'round-top'
                : i === inverseSwatches.length - 1
                  ? 'round-bottom'
                  : ''
            )
          )}
        </div>
      </section>
    `;
  }

  #renderBottomRow() {
    return html`
      <section class="bottom-section" data-testid="bottom-colors">
        <div class="bottom-left">
          ${bottomLeftRow.map(s => this.#renderSwatch(s, 'round-all'))}
        </div>
        <div class="bottom-right">
          ${bottomRightRow.map((s, i) =>
            this.#renderSwatch(
              s,
              `round-all${i === bottomRightRow.length - 1 ? ' shadow-swatch' : ''}`
            )
          )}
        </div>
      </section>
    `;
  }

  #renderExtendedGrid() {
    return html`
      <h3>Extended Colors</h3>
      <section class="extended-grid" data-testid="extended-colors">
        ${extendedRows.map((row, rowIdx) => {
          const cls =
            rowIdx === 0
              ? 'round-top'
              : rowIdx === extendedRows.length - 1
                ? 'round-bottom'
                : '';

          return row.map(s => this.#renderSwatch(s, cls));
        })}
      </section>
    `;
  }

  render() {
    return html`
      ${this.#renderAccentGrid()} ${this.#renderFixedSection()}
      ${this.#renderSurfaceInverse()} ${this.#renderBottomRow()}
      ${this.#renderExtendedGrid()}
    `;
  }
}

customElements.define('ez-md-color-scheme-preview', EzMdColorSchemePreview);

export default {
  title: 'CSS/Material Color Scheme',
};

export const LightTheme: StoryObj = {
  render: () => html`<ez-md-color-scheme-preview></ez-md-color-scheme-preview>`,

  play: async ({ canvasElement }) => {
    const el = canvasElement.querySelector('ez-md-color-scheme-preview');

    await expect(el).toBeInTheDocument();

    const root = el?.shadowRoot;

    await expect(root).toBeTruthy();

    await expect(
      root?.querySelector('[data-testid="accent-colors"]')
    ).toBeTruthy();
    await expect(
      root?.querySelector('[data-testid="fixed-colors"]')
    ).toBeTruthy();
    await expect(
      root?.querySelector('[data-testid="surface-colors"]')
    ).toBeTruthy();
    await expect(
      root?.querySelector('[data-testid="bottom-colors"]')
    ).toBeTruthy();
    await expect(
      root?.querySelector('[data-testid="extended-colors"]')
    ).toBeTruthy();

    const accentSwatches = root?.querySelectorAll(
      '[data-testid="accent-colors"] .swatch'
    );

    await expect(accentSwatches?.length).toBe(16);

    const extendedSwatches = root?.querySelectorAll(
      '[data-testid="extended-colors"] .swatch'
    );

    await expect(extendedSwatches?.length).toBe(12);
  },
};
