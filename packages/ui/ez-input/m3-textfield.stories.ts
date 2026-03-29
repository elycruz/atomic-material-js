import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

export default {
  title: 'M3 Input',
};

const textFieldInputTypes = [
  'text',
  'date',
  'datetime-local',
  'email',
  'month',
  'number',
  'password',
  'search',
  'tel',
  'time',
  'url',
  'week',
] as const;

/**
 * Helper that renders a standard .ez-m3-textfield with options.
 */
function renderTextField({
  variant = 'ez-filled',
  label = 'Label',
  type = 'text',
  placeholder = ' ',
  stateClasses = '',
  id = '',
  disabled = false,
  required = false,
  error = false,
  helpText = '',
  messages = [] as string[],
  leadingIcon = '',
  trailingIcon = '',
  value = '',
  fullwidth = false,
}: {
  variant?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  stateClasses?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
  messages?: string[];
  leadingIcon?: string;
  trailingIcon?: string;
  value?: string;
  fullwidth?: boolean;
} = {}) {
  const rootClasses = [
    'ez-m3-textfield',
    variant,
    stateClasses,
    fullwidth ? 'ez-fullwidth' : '',
    disabled ? 'ez-disabled' : '',
    required ? 'ez-required' : '',
    error ? 'ez-error' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <div class="${rootClasses}">
      <div class="ez-m3-tf-wrapper">
        <div class="ez-m3-tf-field">
          ${leadingIcon
            ? html`<div class="ez-m3-tf-leading">
                <span class="md-icon">${leadingIcon}</span>
              </div>`
            : ''}
          <div class="ez-m3-tf-center">
            <input
              class="ez-m3-tf-input"
              type="${type}"
              placeholder="${placeholder}"
              id="${id}"
              .value="${value}"
              ?disabled="${disabled}"
              ?required="${required}"
            />
            <label class="ez-m3-tf-label" for="${id}">${label}</label>
          </div>
          ${trailingIcon
            ? html`<div class="ez-m3-tf-trailing">
                <span class="md-icon">${trailingIcon}</span>
              </div>`
            : ''}
        </div>
      </div>
      ${helpText ? html`<div class="ez-m3-tf-help">${helpText}</div>` : ''}
      ${messages.length
        ? html`<ul class="ez-m3-tf-messages">
            ${messages.map(m => html`<li>${m}</li>`)}
          </ul>`
        : ''}
    </div>
  `;
}

/**
 * Helper that renders a .ez-m3-textfield wrapping a <select>.
 */
function renderSelectField({
  variant = 'ez-filled',
  label = 'Label',
  id = '',
  disabled = false,
  required = false,
  error = false,
  helpText = '',
  messages = [] as string[],
  leadingIcon = '',
  trailingIcon = '',
  options = [] as { value: string; text: string }[],
  value = '',
  fullwidth = false,
}: {
  variant?: string;
  label?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
  messages?: string[];
  leadingIcon?: string;
  trailingIcon?: string;
  options?: { value: string; text: string }[];
  value?: string;
  fullwidth?: boolean;
} = {}) {
  const rootClasses = [
    'ez-m3-textfield',
    variant,
    fullwidth ? 'ez-fullwidth' : '',
    disabled ? 'ez-disabled' : '',
    required ? 'ez-required' : '',
    error ? 'ez-error' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <div class="${rootClasses}">
      <div class="ez-m3-tf-wrapper">
        <div class="ez-m3-tf-field">
          ${leadingIcon
            ? html`<div class="ez-m3-tf-leading">
                <span class="md-icon">${leadingIcon}</span>
              </div>`
            : ''}
          <div class="ez-m3-tf-center">
            <select
              class="ez-m3-tf-input"
              id="${id}"
              .value="${value}"
              ?disabled="${disabled}"
              ?required="${required}"
            >
              ${options.map(
                o =>
                  html`<option
                    value="${o.value}"
                    ?selected="${o.value === value}"
                  >
                    ${o.text}
                  </option>`
              )}
            </select>
            <label class="ez-m3-tf-label" for="${id}">${label}</label>
          </div>
          ${trailingIcon
            ? html`<div class="ez-m3-tf-trailing">
                <span class="md-icon">${trailingIcon}</span>
              </div>`
            : ''}
        </div>
      </div>
      ${helpText ? html`<div class="ez-m3-tf-help">${helpText}</div>` : ''}
      ${messages.length
        ? html`<ul class="ez-m3-tf-messages">
            ${messages.map(m => html`<li>${m}</li>`)}
          </ul>`
        : ''}
    </div>
  `;
}

/**
 * Helper that renders a .ez-m3-textfield wrapping a <textarea>.
 */
function renderTextareaField({
  variant = 'ez-filled',
  label = 'Label',
  placeholder = ' ',
  id = '',
  disabled = false,
  required = false,
  error = false,
  helpText = '',
  messages = [] as string[],
  value = '',
  rows = 4,
  fullwidth = false,
}: {
  variant?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  helpText?: string;
  messages?: string[];
  value?: string;
  rows?: number;
  fullwidth?: boolean;
} = {}) {
  const rootClasses = [
    'ez-m3-textfield',
    variant,
    fullwidth ? 'ez-fullwidth' : '',
    disabled ? 'ez-disabled' : '',
    required ? 'ez-required' : '',
    error ? 'ez-error' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return html`
    <div class="${rootClasses}">
      <div class="ez-m3-tf-wrapper">
        <div class="ez-m3-tf-field">
          <div class="ez-m3-tf-center">
            <textarea
              class="ez-m3-tf-input"
              placeholder="${placeholder}"
              id="${id}"
              rows="${rows}"
              .value="${value}"
              ?disabled="${disabled}"
              ?required="${required}"
            ></textarea>
            <label class="ez-m3-tf-label" for="${id}">${label}</label>
          </div>
        </div>
      </div>
      ${helpText ? html`<div class="ez-m3-tf-help">${helpText}</div>` : ''}
      ${messages.length
        ? html`<ul class="ez-m3-tf-messages">
            ${messages.map(m => html`<li>${m}</li>`)}
          </ul>`
        : ''}
    </div>
  `;
}

/**
 * Filled text field variant — label, helper text, error, and required states.
 */
export const FilledTextField: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Filled Text Field</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px;"
      >
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Label',
          id: 'filled-basic',
        })}
        ${renderTextField({
          variant: 'ez-filled',
          label: 'With helper text',
          id: 'filled-help',
          helpText: 'Supporting text goes here',
        })}
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Error state',
          id: 'filled-error',
          messages: ['This field is required', 'Must be at least 3 characters'],
        })}
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Required field',
          id: 'filled-required',
          required: true,
        })}
        ${renderTextField({
          variant: 'ez-filled',
          label: 'With value',
          id: 'filled-value',
          value: 'Hello world',
        })}
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Disabled',
          id: 'filled-disabled',
          disabled: true,
          value: 'Cannot edit',
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const textfields = canvasElement.querySelectorAll('.ez-m3-textfield');

    await expect(textfields.length).toBe(6);

    const filled = canvasElement.querySelectorAll('.ez-filled');

    await expect(filled.length).toBe(6);

    const helpVisible = canvasElement.querySelector('.ez-m3-tf-help');

    await expect(helpVisible).not.toBeNull();

    const messagesVisible = canvasElement.querySelector('.ez-m3-tf-messages');

    await expect(messagesVisible).not.toBeNull();

    const requiredField = canvasElement.querySelector('.ez-required');

    await expect(requiredField).not.toBeNull();

    const disabledField = canvasElement.querySelector('.ez-disabled');

    await expect(disabledField).not.toBeNull();

    const hasValueInput = canvasElement.querySelector<HTMLInputElement>(
      '#filled-value .ez-m3-tf-input'
    );

    await expect(hasValueInput?.value).toBe('Hello world');
  },
};

/**
 * Outlined text field variant — label, helper text, error, and required states.
 */
export const OutlinedTextField: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Outlined Text Field</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px;"
      >
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Label',
          id: 'outlined-basic',
        })}
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'With helper text',
          id: 'outlined-help',
          helpText: 'Supporting text goes here',
        })}
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Error state',
          id: 'outlined-error',
          messages: ['Invalid email address'],
        })}
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Required field',
          id: 'outlined-required',
          required: true,
        })}
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'With value',
          id: 'outlined-value',
          value: 'user@example.com',
        })}
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Disabled',
          id: 'outlined-disabled',
          disabled: true,
          value: 'Cannot edit',
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const textfields = canvasElement.querySelectorAll('.ez-m3-textfield');

    await expect(textfields.length).toBe(6);

    const outlined = canvasElement.querySelectorAll('.ez-outlined');

    await expect(outlined.length).toBe(6);

    const helpVisible = canvasElement.querySelector('.ez-m3-tf-help');

    await expect(helpVisible).not.toBeNull();

    const messagesVisible = canvasElement.querySelector('.ez-m3-tf-messages');

    await expect(messagesVisible).not.toBeNull();

    const requiredField = canvasElement.querySelector('.ez-required');

    await expect(requiredField).not.toBeNull();

    const disabledField = canvasElement.querySelector('.ez-disabled');

    await expect(disabledField).not.toBeNull();
  },
};

/**
 * All supported input types rendered as filled text fields.
 */
export const InputTypes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Supported Input Types</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px;"
      >
        ${textFieldInputTypes.map(type =>
          renderTextField({
            variant: 'ez-filled',
            label: `type="${type}"`,
            type,
            id: `type-${type}`,
          })
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const inputs = canvasElement.querySelectorAll('.ez-m3-tf-input');

    await expect(inputs.length).toBe(textFieldInputTypes.length);

    await Promise.all(
      textFieldInputTypes.map(async (type, i) => {
        await expect((inputs[i] as HTMLInputElement).type).toBe(type);
      })
    );
  },
};

/**
 * Demonstrates structural states: has-value, disabled, required, leading icon,
 * trailing icon, help text, and validation messages.
 */
export const TextFieldStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Text Field States</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 360px;"
      >
        <h3>Default (empty)</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Default',
          id: 'state-default',
        })}

        <h3>Has value</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Has value',
          id: 'state-has-value',
          value: 'Some text',
        })}

        <h3>Disabled</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Disabled',
          id: 'state-disabled',
          disabled: true,
        })}

        <h3>Required</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Required',
          id: 'state-required',
          required: true,
        })}

        <h3>Leading icon</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Leading icon',
          id: 'state-leading',
          leadingIcon: 'search',
        })}

        <h3>Trailing icon</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Trailing icon',
          id: 'state-trailing',
          trailingIcon: 'cancel',
        })}

        <h3>Help text</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'With help',
          id: 'state-help',
          helpText: 'This is helper text',
        })}

        <h3>Validation messages</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'With errors',
          id: 'state-messages',
          messages: ['Error 1', 'Error 2'],
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const hasValueInput = canvasElement.querySelector<HTMLInputElement>(
      '#state-has-value .ez-m3-tf-input'
    );

    await expect(hasValueInput?.value).toBe('Some text');

    const disabled = canvasElement.querySelector('.ez-disabled');

    await expect(disabled).not.toBeNull();

    const required = canvasElement.querySelector('.ez-required');

    await expect(required).not.toBeNull();

    const hasLeading = canvasElement.querySelector('.ez-m3-tf-leading');

    await expect(hasLeading).not.toBeNull();

    const hasTrailing = canvasElement.querySelector('.ez-m3-tf-trailing');

    await expect(hasTrailing).not.toBeNull();

    const hasHelp = canvasElement.querySelector('.ez-m3-tf-help');

    await expect(hasHelp).not.toBeNull();

    const hasMessages = canvasElement.querySelector('.ez-m3-tf-messages');

    await expect(hasMessages).not.toBeNull();

    const messageLis = canvasElement.querySelectorAll('.ez-m3-tf-messages li');

    await expect(messageLis.length).toBe(2);
  },
};

/**
 * Fullwidth text fields — filled and outlined.
 */
export const FullwidthTextField: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Fullwidth Text Field</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem;"
      >
        <h3>Filled fullwidth</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Filled fullwidth',
          id: 'fw-filled',
          fullwidth: true,
        })}

        <h3>Outlined fullwidth</h3>
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Outlined fullwidth',
          id: 'fw-outlined',
          fullwidth: true,
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const fullwidth = canvasElement.querySelectorAll('.ez-fullwidth');

    await expect(fullwidth.length).toBe(2);

    const filledFw = canvasElement.querySelector('.ez-fullwidth.ez-filled');

    await expect(filledFw).not.toBeNull();

    const outlinedFw = canvasElement.querySelector('.ez-fullwidth.ez-outlined');

    await expect(outlinedFw).not.toBeNull();
  },
};

/**
 * Leading and trailing icon combinations.
 */
export const LeadingTrailingIcons: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Leading &amp; Trailing Icons</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 360px;"
      >
        <h3>Filled — leading icon</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Search',
          id: 'icon-leading',
          leadingIcon: 'search',
        })}

        <h3>Filled — trailing icon</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Password',
          type: 'password',
          id: 'icon-trailing',
          trailingIcon: 'visibility',
        })}

        <h3>Filled — both icons</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Email',
          type: 'email',
          id: 'icon-both-filled',
          leadingIcon: 'mail',
          trailingIcon: 'cancel',
        })}

        <h3>Outlined — both icons</h3>
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Phone',
          type: 'tel',
          id: 'icon-both-outlined',
          leadingIcon: 'phone',
          trailingIcon: 'cancel',
        })}

        <h3>With value + both icons</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Username',
          id: 'icon-with-value',
          leadingIcon: 'person',
          trailingIcon: 'check_circle',
          value: 'john_doe',
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const leadingIcons = canvasElement.querySelectorAll('.ez-m3-tf-leading');

    await expect(leadingIcons.length).toBe(4);

    const trailingIcons = canvasElement.querySelectorAll('.ez-m3-tf-trailing');

    await expect(trailingIcons.length).toBe(4);

    const bothIcons = canvasElement.querySelector(
      '.ez-m3-tf-field:has(.ez-m3-tf-leading):has(.ez-m3-tf-trailing)'
    );

    await expect(bothIcons).not.toBeNull();
  },
};

/**
 * Error states — filled and outlined with error class, icons, and messages.
 */
export const ErrorStates: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Error States</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 360px;"
      >
        <h3>Filled — error</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Email',
          id: 'err-filled',
          error: true,
          messages: ['Invalid email address'],
          trailingIcon: 'error',
          value: 'bad@',
        })}

        <h3>Outlined — error</h3>
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Username',
          id: 'err-outlined',
          error: true,
          messages: ['Username is taken'],
          trailingIcon: 'error',
          value: 'admin',
        })}

        <h3>Filled — error with leading icon</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Phone',
          id: 'err-filled-icons',
          error: true,
          leadingIcon: 'phone',
          trailingIcon: 'error',
          messages: ['Invalid phone number'],
          value: '123',
        })}

        <h3>Outlined — error with help text</h3>
        ${renderTextField({
          variant: 'ez-outlined',
          label: 'Password',
          type: 'password',
          id: 'err-outlined-help',
          error: true,
          helpText: 'Must be at least 8 characters',
          trailingIcon: 'error',
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const errorFields = canvasElement.querySelectorAll('.ez-error');

    await expect(errorFields.length).toBe(4);

    const filledError = canvasElement.querySelector('.ez-error.ez-filled');

    await expect(filledError).not.toBeNull();

    const outlinedError = canvasElement.querySelector('.ez-error.ez-outlined');

    await expect(outlinedError).not.toBeNull();

    const errorTrailing = canvasElement.querySelectorAll(
      '.ez-error .ez-m3-tf-trailing'
    );

    await expect(errorTrailing.length).toBe(4);

    const errorMessages = canvasElement.querySelectorAll(
      '.ez-error .ez-m3-tf-messages'
    );

    await expect(errorMessages.length).toBe(3);
  },
};

const sampleOptions = [
  { value: '', text: 'Choose an option' },
  { value: 'apple', text: 'Apple' },
  { value: 'banana', text: 'Banana' },
  { value: 'cherry', text: 'Cherry' },
];

/**
 * Select element rendered inside .ez-m3-textfield — filled and outlined variants.
 */
export const SelectTextField: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Select Text Field</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px;"
      >
        <h3>Filled</h3>
        ${renderSelectField({
          variant: 'ez-filled',
          label: 'Fruit',
          id: 'select-filled',
          options: sampleOptions,
        })}

        <h3>Outlined</h3>
        ${renderSelectField({
          variant: 'ez-outlined',
          label: 'Fruit',
          id: 'select-outlined',
          options: sampleOptions,
        })}

        <h3>Filled — with value</h3>
        ${renderSelectField({
          variant: 'ez-filled',
          label: 'Fruit',
          id: 'select-filled-value',
          options: sampleOptions,
          value: 'banana',
        })}

        <h3>Filled — with trailing icon</h3>
        ${renderSelectField({
          variant: 'ez-filled',
          label: 'Fruit',
          id: 'select-trailing',
          options: sampleOptions,
          trailingIcon: 'arrow_drop_down',
        })}

        <h3>Filled — disabled</h3>
        ${renderSelectField({
          variant: 'ez-filled',
          label: 'Fruit',
          id: 'select-disabled',
          options: sampleOptions,
          value: 'cherry',
          disabled: true,
        })}

        <h3>Outlined — required with help text</h3>
        ${renderSelectField({
          variant: 'ez-outlined',
          label: 'Fruit',
          id: 'select-required',
          options: sampleOptions,
          required: true,
          helpText: 'Pick your favourite fruit',
        })}

        <h3>Filled — error with messages</h3>
        ${renderSelectField({
          variant: 'ez-filled',
          label: 'Fruit',
          id: 'select-error',
          options: sampleOptions,
          error: true,
          messages: ['Selection is required'],
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const textfields = canvasElement.querySelectorAll('.ez-m3-textfield');

    await expect(textfields.length).toBe(7);

    const selects = canvasElement.querySelectorAll<HTMLSelectElement>(
      'select.ez-m3-tf-input'
    );

    await expect(selects.length).toBe(7);

    const filledValueSelect = canvasElement.querySelector<HTMLSelectElement>(
      '#select-filled-value'
    );

    await expect(filledValueSelect?.value).toBe('banana');

    const disabledSelect =
      canvasElement.querySelector<HTMLSelectElement>('#select-disabled');

    await expect(disabledSelect?.disabled).toBe(true);

    const helpText = canvasElement.querySelector('.ez-m3-tf-help');

    await expect(helpText).not.toBeNull();

    const errorMessages = canvasElement.querySelector('.ez-m3-tf-messages');

    await expect(errorMessages).not.toBeNull();
  },
};

/**
 * Textarea element rendered inside .ez-m3-textfield — filled and outlined variants.
 */
export const TextareaTextField: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Textarea Text Field</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 320px;"
      >
        <h3>Filled</h3>
        ${renderTextareaField({
          variant: 'ez-filled',
          label: 'Description',
          id: 'textarea-filled',
        })}

        <h3>Outlined</h3>
        ${renderTextareaField({
          variant: 'ez-outlined',
          label: 'Description',
          id: 'textarea-outlined',
        })}

        <h3>Filled — with value</h3>
        ${renderTextareaField({
          variant: 'ez-filled',
          label: 'Bio',
          id: 'textarea-filled-value',
          value: 'Hello, this is a multi-line\ntext area with content.',
        })}

        <h3>Outlined — with value</h3>
        ${renderTextareaField({
          variant: 'ez-outlined',
          label: 'Notes',
          id: 'textarea-outlined-value',
          value: 'Some outlined notes here.',
        })}

        <h3>Filled — disabled</h3>
        ${renderTextareaField({
          variant: 'ez-filled',
          label: 'Description',
          id: 'textarea-disabled',
          value: 'Cannot edit this',
          disabled: true,
        })}

        <h3>Outlined — required with help text</h3>
        ${renderTextareaField({
          variant: 'ez-outlined',
          label: 'Comments',
          id: 'textarea-required',
          required: true,
          helpText: 'Enter your comments here',
        })}

        <h3>Filled — error with messages</h3>
        ${renderTextareaField({
          variant: 'ez-filled',
          label: 'Feedback',
          id: 'textarea-error',
          error: true,
          messages: ['Feedback is required', 'Minimum 10 characters'],
        })}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const textfields = canvasElement.querySelectorAll('.ez-m3-textfield');

    await expect(textfields.length).toBe(7);

    const textareas = canvasElement.querySelectorAll<HTMLTextAreaElement>(
      'textarea.ez-m3-tf-input'
    );

    await expect(textareas.length).toBe(7);

    const filledValueTextarea =
      canvasElement.querySelector<HTMLTextAreaElement>(
        '#textarea-filled-value'
      );

    await expect(filledValueTextarea?.value).toContain('multi-line');

    const disabledTextarea =
      canvasElement.querySelector<HTMLTextAreaElement>('#textarea-disabled');

    await expect(disabledTextarea?.disabled).toBe(true);

    const helpText = canvasElement.querySelector('.ez-m3-tf-help');

    await expect(helpText).not.toBeNull();

    const errorMessages = canvasElement.querySelector('.ez-m3-tf-messages');

    await expect(errorMessages).not.toBeNull();

    const messageLis = canvasElement.querySelectorAll('.ez-m3-tf-messages li');

    await expect(messageLis.length).toBe(2);
  },
};
