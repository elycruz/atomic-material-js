import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import '../../../ez-ripple';

export default {
  title: 'CSS Components/Chip',
};

/**
 * All 4 chip variants rendered side by side.
 */
export const ChipVariants: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Chip Variants</h2></header>

      <div class="ez-section-body">
        <div class="ez-chip-set">
          <button class="ez-chip ez-assist" type="button">
            <ez-ripple></ez-ripple>
            <span>Assist</span>
          </button>

          <button class="ez-chip ez-filter" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Filter</span>
          </button>

          <button class="ez-chip ez-input" type="button">
            <ez-ripple></ez-ripple>
            <span>Input</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove Input"
              >close</span
            >
          </button>

          <button class="ez-chip ez-suggestion" type="button">
            <ez-ripple></ez-ripple>
            <span>Suggestion</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const chips = canvasElement.querySelectorAll('.ez-chip');

    await expect(chips.length).toBe(4);
    await expect(canvasElement.querySelector('.ez-assist')).toBeTruthy();
    await expect(canvasElement.querySelector('.ez-filter')).toBeTruthy();
    await expect(canvasElement.querySelector('.ez-input')).toBeTruthy();
    await expect(canvasElement.querySelector('.ez-suggestion')).toBeTruthy();
  },
};

/**
 * Chips with leading icons, trailing close icons, and avatars.
 */
export const ChipWithIcons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Chips with Icons</h2></header>

      <div class="ez-section-body">
        <h3>Assist — with leading icon</h3>
        <div class="ez-chip-set">
          <button class="ez-chip ez-assist" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Add to calendar</span>
          </button>

          <button class="ez-chip ez-assist" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">directions</span>
            <span>Get directions</span>
          </button>

          <button class="ez-chip ez-assist" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">lightbulb</span>
            <span>Turn on lights</span>
          </button>
        </div>

        <br />

        <h3>Filter — with trailing icon</h3>
        <div class="ez-chip-set">
          <button class="ez-chip ez-filter" type="button" aria-pressed="false">
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Documents</span>
            <span class="md-icon">arrow_drop_down</span>
          </button>

          <button
            class="ez-chip ez-filter ez-selected"
            type="button"
            aria-pressed="true"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Images</span>
            <span class="md-icon">arrow_drop_down</span>
          </button>
        </div>

        <br />

        <h3>Input — with avatar and close icon</h3>
        <div class="ez-chip-set" data-testid="input-chips-with-icons">
          <button class="ez-chip ez-input" type="button">
            <ez-ripple></ez-ripple>
            <img
              class="ez-chip-avatar"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%236750A4'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='white' font-size='12'%3EJD%3C/text%3E%3C/svg%3E"
              alt=""
            />
            <span>Jane Doe</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove Jane Doe"
              >close</span
            >
          </button>

          <button class="ez-chip ez-input" type="button">
            <ez-ripple></ez-ripple>
            <img
              class="ez-chip-avatar"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23625B71'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='white' font-size='12'%3EJS%3C/text%3E%3C/svg%3E"
              alt=""
            />
            <span>John Smith</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove John Smith"
              >close</span
            >
          </button>
        </div>

        <br />

        <h3>Suggestion — with leading icon</h3>
        <div class="ez-chip-set">
          <button class="ez-chip ez-suggestion" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">search</span>
            <span>Price: low to high</span>
          </button>

          <button class="ez-chip ez-suggestion" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">star</span>
            <span>Top rated</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const avatars = canvasElement.querySelectorAll('.ez-chip-avatar'),
      closeIcons = canvasElement.querySelectorAll('.ez-chip-close'),
      leadingIcons = canvasElement.querySelectorAll('.ez-assist .md-icon');

    await expect(avatars.length).toBe(2);
    await expect(closeIcons.length).toBeGreaterThanOrEqual(2);
    await expect(leadingIcons.length).toBe(3);
  },
};

/**
 * Disabled, selected, and elevated chip states.
 */
export const ChipStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Chip States</h2></header>

      <div class="ez-section-body">
        <h3>Disabled</h3>
        <div class="ez-chip-set" data-testid="disabled-chips">
          <button class="ez-chip ez-assist" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Disabled Assist</span>
          </button>

          <button class="ez-chip ez-filter" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Disabled Filter</span>
          </button>

          <button class="ez-chip ez-input" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span>Disabled Input</span>
            <span class="md-icon ez-chip-close">close</span>
          </button>

          <button class="ez-chip ez-suggestion" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span>Disabled Suggestion</span>
          </button>
        </div>

        <br />

        <h3>Selected (via .ez-selected class)</h3>
        <div class="ez-chip-set" data-testid="selected-chips">
          <button
            class="ez-chip ez-filter ez-selected"
            type="button"
            aria-pressed="true"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Selected Filter</span>
          </button>

          <button
            class="ez-chip ez-input ez-selected"
            type="button"
            aria-pressed="true"
          >
            <ez-ripple></ez-ripple>
            <span>Selected Input</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove Selected Input"
              >close</span
            >
          </button>
        </div>

        <br />

        <h3>Elevated</h3>
        <div class="ez-chip-set" data-testid="elevated-chips">
          <button class="ez-chip ez-assist ez-elevated" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Elevated Assist</span>
          </button>

          <button class="ez-chip ez-filter ez-elevated" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Elevated Filter</span>
          </button>

          <button class="ez-chip ez-suggestion ez-elevated" type="button">
            <ez-ripple></ez-ripple>
            <span>Elevated Suggestion</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const disabledChips = canvasElement.querySelectorAll(
        '[data-testid="disabled-chips"] .ez-chip'
      ),
      selectedChips = canvasElement.querySelectorAll(
        '[data-testid="selected-chips"] .ez-chip'
      ),
      elevatedChips = canvasElement.querySelectorAll(
        '[data-testid="elevated-chips"] .ez-chip'
      );

    await expect(disabledChips.length).toBe(4);
    await expect(selectedChips.length).toBe(2);
    await expect(elevatedChips.length).toBe(3);

    await Promise.all(
      Array.from(disabledChips).map(async chip => {
        await expect((chip as HTMLButtonElement).disabled).toBe(true);
      })
    );

    await Promise.all(
      Array.from(selectedChips).map(async chip => {
        await expect(chip.classList.contains('ez-selected')).toBe(true);
        await expect(chip.getAttribute('aria-pressed')).toBe('true');
      })
    );

    await Promise.all(
      Array.from(elevatedChips).map(async chip => {
        await expect(chip.classList.contains('ez-elevated')).toBe(true);
      })
    );
  },
};

/**
 * Disabled chips — flat and elevated — per M3 spec.
 * Flat chips get faded outline, elevated chips lose shadow.
 * Both use per-element opacity (12% container, 38% content).
 */
export const ChipDisabledStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Disabled Chips — M3 Spec</h2></header>

      <div class="ez-section-body">
        <h3>Disabled — Flat (outlined)</h3>
        <div class="ez-chip-set" data-testid="disabled-flat">
          <button class="ez-chip ez-assist" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Assist</span>
          </button>

          <button class="ez-chip ez-filter" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Filter</span>
          </button>

          <button class="ez-chip ez-input" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span>Input</span>
            <span class="md-icon ez-chip-close">close</span>
          </button>

          <button class="ez-chip ez-suggestion" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span>Suggestion</span>
          </button>
        </div>

        <br />

        <h3>Disabled — Elevated</h3>
        <div class="ez-chip-set" data-testid="disabled-elevated">
          <button class="ez-chip ez-assist ez-elevated" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Assist</span>
          </button>

          <button class="ez-chip ez-filter ez-elevated" type="button" disabled>
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Filter</span>
          </button>

          <button
            class="ez-chip ez-suggestion ez-elevated"
            type="button"
            disabled
          >
            <ez-ripple></ez-ripple>
            <span>Suggestion</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const flatChips = canvasElement.querySelectorAll(
        '[data-testid="disabled-flat"] .ez-chip'
      ),
      elevatedChips = canvasElement.querySelectorAll(
        '[data-testid="disabled-elevated"] .ez-chip'
      );

    await expect(flatChips.length).toBe(4);
    await expect(elevatedChips.length).toBe(3);

    await Promise.all(
      Array.from(flatChips).map(async chip => {
        await expect((chip as HTMLButtonElement).disabled).toBe(true);

        const style = getComputedStyle(chip);

        await expect(style.pointerEvents).toBe('none');
        await expect(style.cursor).toBe('default');
      })
    );

    await Promise.all(
      Array.from(elevatedChips).map(async chip => {
        await expect((chip as HTMLButtonElement).disabled).toBe(true);

        const style = getComputedStyle(chip);

        await expect(style.boxShadow).toBe('none');
      })
    );
  },
};

/**
 * Dragged chip state — elevated shadow applied via .ez-dragged class.
 */
export const ChipDraggedState: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Dragged Chips</h2></header>

      <div class="ez-section-body">
        <h3>Flat chip — dragged (elevation level3)</h3>
        <div class="ez-chip-set" data-testid="dragged-flat">
          <button class="ez-chip ez-assist ez-dragged" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Dragged Assist</span>
          </button>

          <button class="ez-chip ez-filter ez-dragged" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Dragged Filter</span>
          </button>
        </div>

        <br />

        <h3>Elevated chip — dragged (elevation level3)</h3>
        <div class="ez-chip-set" data-testid="dragged-elevated">
          <button
            class="ez-chip ez-assist ez-elevated ez-dragged"
            type="button"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Dragged Elevated</span>
          </button>
        </div>

        <br />

        <h3>Normal chip (not dragged) — for comparison</h3>
        <div class="ez-chip-set">
          <button class="ez-chip ez-assist" type="button">
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Normal Assist</span>
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const draggedFlat = canvasElement.querySelectorAll(
        '[data-testid="dragged-flat"] .ez-chip'
      ),
      draggedElevated = canvasElement.querySelectorAll(
        '[data-testid="dragged-elevated"] .ez-chip'
      );

    await expect(draggedFlat.length).toBe(2);
    await expect(draggedElevated.length).toBe(1);

    await Promise.all(
      Array.from(draggedFlat).map(async chip => {
        const style = getComputedStyle(chip);

        await expect(style.boxShadow).not.toBe('none');
      })
    );

    await Promise.all(
      Array.from(draggedElevated).map(async chip => {
        const style = getComputedStyle(chip);

        await expect(style.boxShadow).not.toBe('none');
      })
    );
  },
};

/**
 * Filter chip set using `<label>` + `<input type="checkbox">` for
 * multi-select — no JavaScript required.
 */
export const FilterChipCheckboxGroup: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Filter Chips — Checkbox (Multi-Select)</h2>
        <p>
          Uses native <code>&lt;input type="checkbox"&gt;</code> inside button
          labels. Toggle selection by clicking — no JS needed.
        </p>
      </header>

      <div class="ez-section-body">
        <div
          class="ez-chip-set"
          role="group"
          aria-label="Document filters"
          data-testid="filter-checkbox"
        >
          ${['Docs', 'Slides', 'Sheets', 'Images', 'Videos'].map(
            (label, i) => html`
              <label class="ez-chip ez-filter" for="fc-${i}">
                <input
                  type="checkbox"
                  id="fc-${i}"
                  name="filter-checkbox"
                  value="${label.toLowerCase()}"
                  ?checked=${label === 'Docs' || label === 'Images'}
                />
                <ez-ripple></ez-ripple>
                <span class="md-icon ez-chip-checkmark">check</span>
                <span>${label}</span>
              </label>
            `
          )}
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const chipSet = canvasElement.querySelector(
        '[data-testid="filter-checkbox"]'
      ),
      labels = chipSet?.querySelectorAll('label.ez-chip') ?? [],
      checkboxes = chipSet?.querySelectorAll('input[type="checkbox"]') ?? [];

    await expect(labels.length).toBe(5);
    await expect(checkboxes.length).toBe(5);

    const checkedBoxes =
      chipSet?.querySelectorAll('input[type="checkbox"]:checked') ?? [];

    await expect(checkedBoxes.length).toBe(2);
  },
};

/**
 * Filter chip set using `<label>` + `<input type="radio">` for
 * single-select — no JavaScript required.
 */
export const FilterChipRadioGroup: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Filter Chips — Radio (Single-Select)</h2>
        <p>
          Uses native <code>&lt;input type="radio"&gt;</code> inside button
          labels. Only one chip can be selected at a time.
        </p>
      </header>

      <div class="ez-section-body">
        <div
          class="ez-chip-set"
          role="radiogroup"
          aria-label="Sort by"
          data-testid="filter-radio"
        >
          ${['Price', 'Rating', 'Distance', 'Newest'].map(
            (label, i) => html`
              <label class="ez-chip ez-filter" for="fr-${i}">
                <input
                  type="radio"
                  id="fr-${i}"
                  name="filter-radio"
                  value="${label.toLowerCase()}"
                  ?checked=${label === 'Rating'}
                />
                <ez-ripple></ez-ripple>
                <span class="md-icon ez-chip-checkmark">check</span>
                <span>${label}</span>
              </label>
            `
          )}
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const chipSet = canvasElement.querySelector('[data-testid="filter-radio"]'),
      labels = chipSet?.querySelectorAll('label.ez-chip') ?? [],
      radios = chipSet?.querySelectorAll('input[type="radio"]') ?? [];

    await expect(labels.length).toBe(4);
    await expect(radios.length).toBe(4);

    const checkedRadios =
      chipSet?.querySelectorAll('input[type="radio"]:checked') ?? [];

    await expect(checkedRadios.length).toBe(1);
  },
};

/**
 * Input chips in a set with avatars and close icons.
 */
export const InputChipSet: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Input Chip Set</h2>
        <p>
          Input chips represent user-entered data like contacts. Each has an
          avatar and a remove button.
        </p>
      </header>

      <div class="ez-section-body">
        <h3>Recipients</h3>
        <div
          class="ez-chip-set"
          role="group"
          aria-label="Recipients"
          data-testid="input-chipset"
        >
          ${[
            { name: 'Alice Wang', initials: 'AW', color: '#6750A4' },
            { name: 'Bob Chen', initials: 'BC', color: '#625B71' },
            { name: 'Carol Davis', initials: 'CD', color: '#7D5260' },
          ].map(
            ({ name, initials, color }) => html`
              <button class="ez-chip ez-input" type="button">
                <ez-ripple></ez-ripple>
                <img
                  class="ez-chip-avatar"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='12' fill='${encodeURIComponent(
                    color
                  )}'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='white' font-size='10'%3E${initials}%3C/text%3E%3C/svg%3E"
                  alt=""
                />
                <span>${name}</span>
                <span
                  class="md-icon ez-chip-close"
                  role="button"
                  aria-label="Remove ${name}"
                  >close</span
                >
              </button>
            `
          )}
        </div>

        <br />

        <h3>Input chips — with icon (no avatar)</h3>
        <div class="ez-chip-set" role="group" aria-label="Tags">
          ${['JavaScript', 'TypeScript', 'CSS'].map(
            tag => html`
              <button class="ez-chip ez-input" type="button">
                <ez-ripple></ez-ripple>
                <span class="md-icon">code</span>
                <span>${tag}</span>
                <span
                  class="md-icon ez-chip-close"
                  role="button"
                  aria-label="Remove ${tag}"
                  >close</span
                >
              </button>
            `
          )}
        </div>

        <br />

        <h3>Input chip — selected state</h3>
        <div class="ez-chip-set" role="group" aria-label="Selected input">
          <button
            class="ez-chip ez-input ez-selected"
            type="button"
            aria-pressed="true"
          >
            <ez-ripple></ez-ripple>
            <img
              class="ez-chip-avatar"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%236750A4'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='white' font-size='10'%3EAW%3C/text%3E%3C/svg%3E"
              alt=""
            />
            <span>Alice Wang</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove Alice Wang"
              >close</span
            >
          </button>

          <button class="ez-chip ez-input" type="button">
            <ez-ripple></ez-ripple>
            <img
              class="ez-chip-avatar"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='12' fill='%23625B71'/%3E%3Ctext x='12' y='16' text-anchor='middle' fill='white' font-size='10'%3EBC%3C/text%3E%3C/svg%3E"
              alt=""
            />
            <span>Bob Chen</span>
            <span
              class="md-icon ez-chip-close"
              role="button"
              aria-label="Remove Bob Chen"
              >close</span
            >
          </button>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const chipSet = canvasElement.querySelector(
        '[data-testid="input-chipset"]'
      ),
      chips = chipSet?.querySelectorAll('.ez-chip') ?? [],
      avatars = chipSet?.querySelectorAll('.ez-chip-avatar') ?? [],
      closeIcons = chipSet?.querySelectorAll('.ez-chip-close') ?? [];

    await expect(chips.length).toBe(3);
    await expect(avatars.length).toBe(3);
    await expect(closeIcons.length).toBe(3);

    await Promise.all(
      Array.from(closeIcons).map(async icon => {
        await expect(icon.getAttribute('role')).toBe('button');
        await expect(icon.getAttribute('aria-label')).toBeTruthy();
      })
    );
  },
};

/**
 * Interactive behavior tests — chip sizing, border-radius, and selection.
 */
export const ChipInteraction: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Chip Interaction Tests</h2></header>

      <div class="ez-section-body">
        <div class="ez-chip-set" data-testid="interaction-chips">
          <button
            class="ez-chip ez-assist"
            type="button"
            data-testid="chip-assist"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon">event</span>
            <span>Assist</span>
          </button>

          <button
            class="ez-chip ez-filter ez-selected"
            type="button"
            aria-pressed="true"
            data-testid="chip-filter-selected"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Selected</span>
          </button>

          <button
            class="ez-chip ez-filter"
            type="button"
            aria-pressed="false"
            data-testid="chip-filter-unselected"
          >
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Unselected</span>
          </button>

          <button
            class="ez-chip ez-suggestion"
            type="button"
            disabled
            data-testid="chip-disabled"
          >
            <ez-ripple></ez-ripple>
            <span>Disabled</span>
          </button>
        </div>

        <br />

        <div
          class="ez-chip-set"
          role="group"
          aria-label="Checkbox interaction"
          data-testid="interaction-checkbox"
        >
          <label class="ez-chip ez-filter" for="ic-0">
            <input
              type="checkbox"
              id="ic-0"
              name="interaction-cb"
              value="a"
              checked
            />
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Checked A</span>
          </label>

          <label class="ez-chip ez-filter" for="ic-1">
            <input type="checkbox" id="ic-1" name="interaction-cb" value="b" />
            <ez-ripple></ez-ripple>
            <span class="md-icon ez-chip-checkmark">check</span>
            <span>Unchecked B</span>
          </label>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const assistChip = canvasElement.querySelector(
        '[data-testid="chip-assist"]'
      ),
      selectedFilter = canvasElement.querySelector(
        '[data-testid="chip-filter-selected"]'
      ),
      unselectedFilter = canvasElement.querySelector(
        '[data-testid="chip-filter-unselected"]'
      ),
      disabledChip = canvasElement.querySelector(
        '[data-testid="chip-disabled"]'
      );

    await expect(assistChip).toBeTruthy();
    await expect(selectedFilter).toBeTruthy();
    await expect(unselectedFilter).toBeTruthy();
    await expect(disabledChip).toBeTruthy();

    // Verify chip container height and border-radius
    const assistStyle = getComputedStyle(assistChip as HTMLElement);

    await expect(assistStyle.minHeight).toBe('32px');
    await expect(assistStyle.borderRadius).toBe('8px');

    // Verify selected filter has checkmark visible
    const selectedCheckmark =
      selectedFilter?.querySelector('.ez-chip-checkmark');

    await expect(selectedCheckmark).toBeTruthy();

    const selectedCheckStyle = getComputedStyle(
      selectedCheckmark as HTMLElement
    );

    await expect(selectedCheckStyle.display).not.toBe('none');

    // Verify unselected filter has checkmark hidden
    const unselectedCheckmark =
      unselectedFilter?.querySelector('.ez-chip-checkmark');

    await expect(unselectedCheckmark).toBeTruthy();

    const unselectedCheckStyle = getComputedStyle(
      unselectedCheckmark as HTMLElement
    );

    await expect(unselectedCheckStyle.display).toBe('none');

    // Verify disabled state
    await expect((disabledChip as HTMLButtonElement).disabled).toBe(true);

    // Verify checkbox checked state
    const checkedInput = canvasElement.querySelector(
      '[data-testid="interaction-checkbox"] input:checked'
    );

    await expect(checkedInput).toBeTruthy();
    await expect((checkedInput as HTMLInputElement).value).toBe('a');
  },
};
