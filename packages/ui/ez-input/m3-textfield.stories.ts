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
  stateClasses = 'ez-has-label',
  id = '',
  disabled = false,
  required = false,
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
    value ? 'ez-has-value' : '',
    helpText ? 'ez-has-help' : '',
    messages.length ? 'ez-has-messages' : '',
    leadingIcon ? 'ez-has-leading' : '',
    trailingIcon ? 'ez-has-trailing' : '',
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
            <span class="ez-m3-tf-label">${label}</span>
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

    const helpVisible = canvasElement.querySelector(
      '.ez-has-help .ez-m3-tf-help'
    );

    await expect(helpVisible).not.toBeNull();

    const messagesVisible = canvasElement.querySelector(
      '.ez-has-messages .ez-m3-tf-messages'
    );

    await expect(messagesVisible).not.toBeNull();

    const requiredField = canvasElement.querySelector('.ez-required');

    await expect(requiredField).not.toBeNull();

    const disabledField = canvasElement.querySelector('.ez-disabled');

    await expect(disabledField).not.toBeNull();

    const hasValueField = canvasElement.querySelector('.ez-has-value');

    await expect(hasValueField).not.toBeNull();
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

    const helpVisible = canvasElement.querySelector(
      '.ez-has-help .ez-m3-tf-help'
    );

    await expect(helpVisible).not.toBeNull();

    const messagesVisible = canvasElement.querySelector(
      '.ez-has-messages .ez-m3-tf-messages'
    );

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
 * Demonstrates state classes: has-value, disabled, required, has-leading,
 * has-trailing, has-help, has-messages.
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

        <h3>.ez-has-value</h3>
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

        <h3>.ez-has-leading</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Leading icon',
          id: 'state-leading',
          leadingIcon: 'search',
        })}

        <h3>.ez-has-trailing</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'Trailing icon',
          id: 'state-trailing',
          trailingIcon: 'cancel',
        })}

        <h3>.ez-has-help</h3>
        ${renderTextField({
          variant: 'ez-filled',
          label: 'With help',
          id: 'state-help',
          helpText: 'This is helper text',
        })}

        <h3>.ez-has-messages</h3>
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
    const hasValue = canvasElement.querySelector('.ez-has-value');

    await expect(hasValue).not.toBeNull();

    const disabled = canvasElement.querySelector('.ez-disabled');

    await expect(disabled).not.toBeNull();

    const required = canvasElement.querySelector('.ez-required');

    await expect(required).not.toBeNull();

    const hasLeading = canvasElement.querySelector(
      '.ez-has-leading .ez-m3-tf-leading'
    );

    await expect(hasLeading).not.toBeNull();

    const hasTrailing = canvasElement.querySelector(
      '.ez-has-trailing .ez-m3-tf-trailing'
    );

    await expect(hasTrailing).not.toBeNull();

    const hasHelp = canvasElement.querySelector('.ez-has-help .ez-m3-tf-help');

    await expect(hasHelp).not.toBeNull();

    const hasMessages = canvasElement.querySelector(
      '.ez-has-messages .ez-m3-tf-messages'
    );

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

    const hasLeading = canvasElement.querySelectorAll('.ez-has-leading');

    await expect(hasLeading.length).toBe(4);

    const hasTrailing = canvasElement.querySelectorAll('.ez-has-trailing');

    await expect(hasTrailing.length).toBe(4);

    const bothIcons = canvasElement.querySelector(
      '.ez-has-leading.ez-has-trailing'
    );

    await expect(bothIcons).not.toBeNull();
  },
};
