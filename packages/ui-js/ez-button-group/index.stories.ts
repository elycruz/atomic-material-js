import { html } from 'lit';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants, EzSizeVariants } from '../utils/constants.js';
import '../ez-ripple';

export default {
  title: 'CSS Components/Button Group',
};

const themes = Object.keys(EzThemeVariants),
  numbers = ['One', 'Two', 'Three', 'Four', 'Five', 'Six'];

/**
 * Reactive button group — hover, press, or focus a button
 * and watch neighbors react with spring easing.
 */
export const PureButton = {
  render: () => html`
    <section>
      <header>
        <h2>(Pure Button) Button Groups</h2>
      </header>

      <div class="ez-section-body">
        <h5>Default</h5>
        <div class="ez-button-group">
          ${numbers.map(
            (_, i) => html`
              <button
                class="ez-btn ez-filled ez-theme-${themes[i].toLowerCase()}"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>Button</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Connected (with \`.ez-connected')</h3>

        <div class="ez-button-group ez-connected">
          ${['One', 'Two', 'Three', 'Four', 'Five'].map(
            (_, i) => html`
              <button
                class="ez-btn ez-filled ez-theme-${themes[i].toLowerCase()}"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>Button</span>
              </button>
            `
          )}
        </div>
      </div>

      ${Object.entries(EzSizeVariants)
        .filter(([, v]) => v !== EzSizeVariants.Small)
        .map(
          ([label, size], i) => html`
            <div class="ez-section-body">
              <h3>${label}</h3>
              <dl>
                <dt>Default</dt>
                <dd>
                  <div class="ez-button-group">
                    ${numbers.slice(0, numbers.length - i).map(
                      btnLabel => html`
                        <button
                          class="ez-btn ez-${size} ez-filled ez-theme-${themes[
                            i
                          ].toLowerCase()}"
                          type="button"
                        >
                          <ez-ripple></ez-ripple>
                          <span>${btnLabel}</span>
                        </button>
                      `
                    )}
                  </div>
                </dd>
                <dt>Connected</dt>
                <dd>
                  <div class="ez-button-group ez-connected">
                    ${numbers.slice(0, numbers.length - i).map(
                      btnLabel => html`
                        <button
                          class="ez-btn ez-${size} ez-filled ez-theme-${themes[
                            i
                          ].toLowerCase()}"
                          type="button"
                        >
                          <ez-ripple></ez-ripple>
                          <span>${btnLabel}</span>
                        </button>
                      `
                    )}
                  </div>
                </dd>
              </dl>
            </div>
          `
        )}
    </section>
  `,
};

/**
 * Connected button group — buttons visually joined with inner corner radii.
 * All five sizes with selected state examples.
 */
export const ConnectedGroup = {
  render: () => html`
    <section>
      <header>
        <h2>Connected Button Group</h2>
      </header>

      <div class="ez-section-body">
        <h3>Default / Small (40dp)</h3>
        <div class="ez-button-group ez-connected">
          ${['One', 'Two', 'Three', 'Four'].map(
            label => html`
              <button class="ez-btn ez-outlined ez-theme-primary" type="button">
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>XSmall (32dp)</h3>
        <div class="ez-button-group ez-connected ez-xsmall">
          ${['A', 'B', 'C', 'D'].map(
            label => html`
              <button
                class="ez-btn ez-xsmall ez-outlined ez-theme-secondary"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Medium (56dp)</h3>
        <div class="ez-button-group ez-connected ez-medium">
          ${['Alpha', 'Beta', 'Gamma'].map(
            label => html`
              <button
                class="ez-btn ez-medium ez-outlined ez-theme-success"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Large (96dp)</h3>
        <div class="ez-button-group ez-connected ez-large">
          ${['Left', 'Center', 'Right'].map(
            label => html`
              <button
                class="ez-btn ez-large ez-tonal ez-theme-primary"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>XLarge (136dp)</h3>
        <div class="ez-button-group ez-connected ez-xlarge">
          ${['First', 'Second', 'Third'].map(
            label => html`
              <button
                class="ez-btn ez-xlarge ez-tonal ez-theme-info"
                type="button"
              >
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </button>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Radio Button Group</h3>
        <div class="ez-button-group ez-connected">
          ${Array.from({ length: 3 }).map(
            (_, i) => html`
              <label
                class="ez-btn ez-filled ez-theme-primary ez-medium"
                for="connected-selected-${i}"
              >
                <input
                  type="radio"
                  name="connected-selected"
                  id="connected-selected-${i}"
                  value="radio-${i}"
                  ?checked=${i === 0}
                />
                <ez-ripple></ez-ripple>
                <span>Radio ${i + 1}</span>
              </label>
            `
          )}
        </div>
      </div>
      <div class="ez-section-body">
        <h3>Checkbox Button Group</h3>
        <div class="ez-button-group ez-connected">
          ${Array.from({ length: 3 }).map(
            (_, i) => html`
              <label
                class="ez-btn ez-filled ez-theme-primary ez-medium"
                for="checkbox-button-${i}"
              >
                <input
                  type="checkbox"
                  name="checkbox-button-${i}"
                  id="checkbox-button-${i}"
                  value="radio-${i}"
                  ?checked=${i === 1}
                />
                <ez-ripple></ez-ripple>
                <span>Checkbox ${i + 1}</span>
              </label>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Themes</h3>
        <div class="ez-button-group ez-connected">
          ${Object.entries(EzThemeVariants).map(
            ([name, theme]) => html`
              <button class="ez-btn ez-filled ez-theme-${theme}" type="button">
                <ez-ripple></ez-ripple>
                <span>${name}</span>
              </button>
            `
          )}
        </div>
      </div>
    </section>
  `,
};

/**
 * Radio control group — single-select using native radio inputs inside
 * button-styled labels. No JS needed; the browser enforces mutual exclusion.
 */
export const RadioControlGroup: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Radio Control Group</h2>
        <p>
          Single-select via native
          <code>&lt;input type="radio"&gt;</code> inside button labels.
        </p>
      </header>

      <div class="ez-section-body">
        <h3>"Filled Button" Group</h3>
        <div class="ez-button-group" data-testid="radio-standard">
          ${['Bold', 'Italic', 'Underline'].map(
            (label, i) => html`
              <label
                class="ez-btn ez-filled ez-theme-primary"
                for="radio-standard-${i}"
              >
                <ez-ripple></ez-ripple>
                <input
                  type="radio"
                  name="radio-standard"
                  id="radio-standard-${i}"
                  value="${label}"
                  ?checked=${i === 1}
                />
                <span>${label}</span>
              </label>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>"Outlined Button" Connected Group</h3>
        <div class="ez-button-group ez-connected" data-testid="radio-connected">
          ${['Left', 'Center', 'Right'].map(
            (label, i) => html`
              <label
                class="ez-btn ez-outlined ez-theme-secondary"
                for="radio-connected-${i}"
              >
                <input
                  type="radio"
                  name="radio-connected"
                  id="radio-connected-${i}"
                  value="${label}"
                  ?checked=${i === 1}
                />
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </label>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>"Elevated Button" Connected Group</h3>
        <div class="ez-button-group ez-connected">
          ${Object.entries(EzThemeVariants).map(
            ([name, theme], i) => html`
              <label
                class="ez-btn ez-elevated ez-theme-${theme}"
                for="radio-theme-${i}"
              >
                <input
                  type="radio"
                  name="radio-themes"
                  id="radio-theme-${i}"
                  value="${theme}"
                  ?checked=${theme === 'success'}
                />
                <ez-ripple></ez-ripple>
                <span>${name}</span>
              </label>
            `
          )}
        </div>
      </div>
    </section>
  `,
};

/**
 * Checkbox control group — multi-select using native checkbox inputs inside
 * button-styled labels. No JS needed; each checkbox toggles independently.
 */
export const CheckboxControlGroup: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Checkbox Control Group</h2>
        <p>
          Multi-select via native
          <code>&lt;input type="checkbox"&gt;</code> inside button labels.
        </p>
      </header>

      <div class="ez-section-body">
        <h3>Standard Group (Outlined)</h3>
        <div class="ez-button-group" data-testid="checkbox-standard">
          ${['A', 'B', 'C', 'D', 'E'].map(
            label => html`
              <label
                class="ez-btn ez-outlined ez-theme-secondary"
                for="cb-std-${label}"
              >
                <input
                  type="checkbox"
                  id="cb-std-${label}"
                  name="checkbox-standard"
                  value="${label}"
                  ?checked=${label === 'C'}
                />
                <ez-ripple></ez-ripple>
                <span>${label}</span>
              </label>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>Connected Group (Filled)</h3>
        <div class="ez-button-group ez-connected" data-testid="checkbox-connected">
          ${['Sans', 'Serif', 'Mono'].map(
            label => html`
              <label
                class="ez-btn ez-filled ez-theme-primary"
                for="cb-conn-${label}"
              >
                <input
                  type="checkbox"
                  id="cb-conn-${label}"
                  name="checkbox-connected"
                  value="${label}"
                  ?checked=${label === 'Serif'}
                />
                <ez-ripple></ez-ripple>
                <span class="ez-btn-content">${label}</span>
              </label>
            `
          )}
        </div>
      </div>

      <div class="ez-section-body">
        <h3>All Themes (Connected)</h3>
        <div class="ez-button-group ez-connected">
          ${Object.entries(EzThemeVariants).map(
            ([name, theme]) => html`
              <label
                class="ez-btn ez-tonal ez-theme-${theme}"
                for="cb-theme-${theme}"
              >
                <input
                  type="checkbox"
                  id="cb-theme-${theme}"
                  name="checkbox-themes"
                  value="${theme}"
                  ?checked=${theme === 'info'}
                />
                <ez-ripple></ez-ripple>
                <span>${name}</span>
              </label>
            `
          )}
        </div>
      </div>
    </section>
  `,
};
