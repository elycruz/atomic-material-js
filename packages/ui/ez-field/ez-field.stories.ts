import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';

import './register.js';
import {
  EzFieldName,
  type EzFieldElement,
  type ValidityMessaging,
} from './ez-field.js';

export default {
  title: 'Custom Elements/Field',
  component: 'ez-field',
};

export const Default: StoryObj = {
  render: () => html`
    <form action="#">
      <fieldset class="ez-grid ez-fieldset--grid-2">
        <legend>Default</legend>

        <label for="default-input">Default</label>
        <ez-field selectors="input" data-testid="default-field">
          <input id="default-input" name="default-input" class="ez-input" />
          <div slot="help">(Optional)</div>
        </ez-field>

        <label for="required-input">Required</label>
        <ez-field selectors="input" data-testid="required-field">
          <input
            id="required-input"
            name="required-input"
            required
            class="ez-input"
          />
        </ez-field>
      </fieldset>

      <fieldset>
        <button type="reset">Reset</button>
        <button>Submit</button>
      </fieldset>
    </form>
  `,
  play: async ({ canvasElement }) => {
    const form = canvasElement.querySelector('form');

    await expect(form).toBeInTheDocument();

    const field = canvasElement.querySelector('[data-testid="default-field"]');

    await expect(field).toBeInTheDocument();
    await expect(field).toHaveProperty('nodeName', EzFieldName.toUpperCase());
    await expect(field?.shadowRoot).toBeTruthy();

    const requiredField = canvasElement.querySelector(
      '[data-testid="required-field"]'
    );

    await expect(requiredField).toBeInTheDocument();
    await expect(requiredField?.shadowRoot).toBeTruthy();
  },
};

export const ValidityMessagingStory: StoryObj = {
  name: 'Validity Messaging',
  render: () => html`
    <form action="#">
      <fieldset class="ez-grid ez-fieldset--grid-2">
        <legend>Validity Messaging</legend>

        <label for="vm-email">Email</label>
        <ez-field selectors="input" validateOnInput data-testid="vm-field">
          <input
            id="vm-email"
            name="vm-email"
            type="email"
            required
            class="ez-input"
            data-testid="vm-input"
          />
        </ez-field>
      </fieldset>

      <fieldset>
        <button type="reset">Reset</button>
        <button>Submit</button>
      </fieldset>
    </form>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector<EzFieldElement>(
        '[data-testid="vm-field"]'
      ),
      input = canvasElement.querySelector<HTMLInputElement>(
        '[data-testid="vm-input"]'
      );

    await expect(field).toBeInTheDocument();
    await expect(input).toBeInTheDocument();

    if (field) {
      field.validityMessaging = {
        valueMissing: 'This field is required.',
        typeMismatch: 'Please enter a valid email.',
      } satisfies ValidityMessaging;
    }

    await expect(field?.validityMessaging).toBeDefined();
    await expect(field?.validationMessage).toBeFalsy();
  },
};

export const CustomValidateStory: StoryObj = {
  name: 'Custom Validate',
  render: () => html`
    <form action="#">
      <fieldset class="ez-grid ez-fieldset--grid-2">
        <legend>Custom Validate Callback</legend>

        <label for="cv-input">Min 3 chars</label>
        <ez-field selectors="input" validateOnInput data-testid="cv-field">
          <input
            id="cv-input"
            name="cv-input"
            type="text"
            class="ez-input"
            data-testid="cv-input"
          />
        </ez-field>
      </fieldset>

      <fieldset>
        <button type="reset">Reset</button>
        <button>Submit</button>
      </fieldset>
    </form>
  `,
  play: async ({ canvasElement }) => {
    const field = canvasElement.querySelector<EzFieldElement>(
        '[data-testid="cv-field"]'
      ),
      input = canvasElement.querySelector<HTMLInputElement>(
        '[data-testid="cv-input"]'
      );

    await expect(field).toBeInTheDocument();
    await expect(input).toBeInTheDocument();

    if (field) {
      field.validate = (i: HTMLInputElement) => {
        if (i.value && i.value.length < 3)
          return 'Must be at least 3 characters';
        return undefined;
      };
    }

    await expect(field?.validate).toBeDefined();
    await expect(field?.validationMessage).toBeFalsy();
  },
};

export const FormResetStory: StoryObj = {
  name: 'Form Reset',
  render: () => html`
    <form action="#">
      <fieldset class="ez-grid ez-fieldset--grid-2">
        <legend>Form Reset</legend>

        <label for="reset-input">Required</label>
        <ez-field selectors="input" validateOnChange data-testid="reset-field">
          <input
            id="reset-input"
            name="reset-input"
            type="text"
            required
            class="ez-input"
          />
        </ez-field>
      </fieldset>

      <fieldset>
        <button type="reset" data-testid="reset-btn">Reset</button>
        <button>Submit</button>
      </fieldset>
    </form>
  `,
  play: async ({ canvas, canvasElement }) => {
    const field = canvasElement.querySelector<EzFieldElement>(
        '[data-testid="reset-field"]'
      ),
      resetBtn = canvas.getByTestId('reset-btn');

    await expect(field).toBeInTheDocument();
    await expect(resetBtn).toBeInTheDocument();
    await expect(field?.validationMessage).toBeFalsy();
    await expect(field).toHaveProperty('nodeName', EzFieldName.toUpperCase());
    await expect(field?.shadowRoot).toBeTruthy();
  },
};

export const KitchenSink: StoryObj = {
  render: () => html`
    <section>
      <header>
        <h2>Ez-Field</h2>
      </header>

      <article>
        <form action="#" data-testid="ks-form">
          <fieldset class="ez-grid ez-fieldset--grid-2">
            <legend>Fieldset - Grid Layout Approach</legend>

            <label for="ks-default-input">Default</label>
            <ez-field selectors="input" data-testid="ks-field-default">
              <input
                id="ks-default-input"
                name="default-input"
                class="ez-input"
              />
              <div slot="help">(Optional)</div>
            </ez-field>

            <label for="ks-required-input">Required</label>
            <ez-field selectors="input" data-testid="ks-field-required">
              <input
                id="ks-required-input"
                name="required-input"
                required
                class="ez-input"
              />
            </ez-field>

            <label for="ks-required-with-serv-message"
              >Required (with server err message)</label
            >
            <ez-field
              selectors="input"
              validationMessage="Server-side Err Message"
              data-testid="ks-field-server-err"
            >
              <input
                id="ks-required-with-serv-message"
                name="required-with-serv-message"
                required
                class="ez-input"
              />
            </ez-field>

            <label for="ks-email-input">Email (+ \`validateOnInput\`)</label>
            <ez-field selectors="input" validateOnInput>
              <input
                id="ks-email-input"
                name="email-input"
                type="email"
                maxlength="255"
                required
                class="ez-input"
              />
            </ez-field>

            <label for="ks-zipcode-input"
              >Zipcode (+ \`validateOnInput\`)</label
            >
            <ez-field selectors="input" validateOnInput>
              <input
                id="ks-zipcode-input"
                name="zipcode-input"
                type="text"
                class="ez-input"
                maxlength="10"
                pattern="^\\d{5}(-\\d{4})?$"
                required
              />
              <div slot="help">#####(-####)</div>
            </ez-field>

            <label for="ks-checkbox-input">Checkbox</label>
            <ez-field class="ez-layout-horizontal" selectors="input">
              <input
                type="checkbox"
                class="ez-checkbox"
                id="ks-checkbox-input"
                name="checkbox-input"
                required
              />
            </ez-field>

            <label for="ks-checkbox-input-2"
              >Checkbox (\`validateOnChange\`)</label
            >
            <ez-field
              class="ez-layout-horizontal"
              selectors="input"
              validateOnChange
            >
              <input
                type="checkbox"
                class="ez-checkbox"
                id="ks-checkbox-input-2"
                name="checkbox-input-2"
                required
              />
            </ez-field>

            <label for="ks-textarea">Textarea (\`validateOnChange\`)</label>
            <ez-field selectors="textarea" validateOnChange>
              <textarea
                id="ks-textarea"
                name="textarea"
                minlength="5"
              ></textarea>
            </ez-field>

            <label for="ks-textarea-2"
              >Textarea - Required (\`validateOnChange\`)</label
            >
            <ez-field selectors="textarea" validateOnChange>
              <textarea
                id="ks-textarea-2"
                name="textarea-2"
                minlength="5"
                required
              ></textarea>
            </ez-field>

            <label for="ks-radio-1">Radio-Group</label>
            <ez-field class="ez-field ez-layout-horizontal" selectors="input">
              <div class="ez-flex ez-flex-row-wrap gap-16px">
                <ez-field>
                  <input
                    type="radio"
                    class="ez-radio"
                    name="radio-group-1"
                    id="ks-radio-1"
                    required
                    value="1"
                  />
                  <label for="ks-radio-1">Radio 1</label>
                </ez-field>
                <ez-field>
                  <input
                    type="radio"
                    class="ez-radio"
                    name="radio-group-1"
                    id="ks-radio-2"
                    required
                    value="2"
                  />
                  <label for="ks-radio-2">Radio 2</label>
                </ez-field>
                <ez-field>
                  <input
                    type="radio"
                    class="ez-radio"
                    name="radio-group-1"
                    id="ks-radio-3"
                    required
                    value="3"
                  />
                  <label for="ks-radio-3">Radio 3</label>
                </ez-field>
                <ez-field>
                  <input
                    type="radio"
                    class="ez-radio"
                    name="radio-group-1"
                    id="ks-radio-4"
                    required
                    value="4"
                  />
                  <label for="ks-radio-4">Radio 4</label>
                </ez-field>
                <ez-field>
                  <input
                    type="radio"
                    class="ez-radio"
                    name="radio-group-1"
                    id="ks-radio-5"
                    required
                    value="5"
                  />
                  <label for="ks-radio-5">Radio 5</label>
                </ez-field>
              </div>
            </ez-field>
          </fieldset>

          <fieldset>
            <button type="reset">Reset</button>
            <button>Submit</button>
            <button type="button" class="fill" data-testid="ks-fill-btn">
              Set defaults
            </button>
            <button type="button" class="un-fill" data-testid="ks-unfill-btn">
              Remove defaults
            </button>
          </fieldset>
        </form>

        <form action="#">
          <fieldset>
            <legend>General, Default Layout, Approach</legend>
          </fieldset>

          <fieldset>
            <button type="reset">Reset</button>
            <button>Submit</button>
          </fieldset>
        </form>
      </article>
    </section>
  `,
  play: async ({ canvas, canvasElement }) => {
    const form = canvas.getByTestId('ks-form');

    await expect(form).toBeInTheDocument();

    const fields = canvasElement.querySelectorAll('ez-field');

    await expect(fields.length).toBeGreaterThan(0);

    // Verify first few fields render correctly
    const defaultField = canvas.getByTestId('ks-field-default');

    await expect(defaultField).toBeInTheDocument();
    await expect(defaultField).toHaveProperty(
      'nodeName',
      EzFieldName.toUpperCase()
    );

    const requiredField = canvas.getByTestId('ks-field-required');

    await expect(requiredField).toBeInTheDocument();

    // Verify server-side error message renders
    const serverErrField = canvasElement.querySelector<EzFieldElement>(
      '[data-testid="ks-field-server-err"]'
    );

    await expect(serverErrField).toBeInTheDocument();
    await expect(serverErrField?.validationMessage).toBe(
      'Server-side Err Message'
    );

    // Verify set/remove defaults buttons exist
    const fillBtn = canvas.getByTestId('ks-fill-btn'),
      unfillBtn = canvas.getByTestId('ks-unfill-btn');

    await expect(fillBtn).toBeInTheDocument();
    await expect(unfillBtn).toBeInTheDocument();

    // Wire up fill/unfill button functionality
    const exampleValues: Record<string, string | boolean> = {
        'default-input': 'Hello',
        'required-input': 'World',
        'required-with-serv-message': 'World x2',
        'email-input': 'test@test',
        'zipcode-input': '12345-1234',
        'checkbox-input': true,
        'checkbox-input-2': true,
        'textarea-2': 'Sally sells seashells',
        'radio-group-1': '2',
      },
      formEl = form as HTMLFormElement;

    fillBtn.addEventListener('click', () => {
      for (const [k, v] of Object.entries(exampleValues)) {
        const elm = formEl.elements.namedItem(k) as
          | HTMLInputElement
          | RadioNodeList
          | null;

        if (!elm) continue;

        const radioGroupElm0 =
            elm instanceof RadioNodeList ? elm.item(0) : null,
          xField =
            radioGroupElm0?.parentElement?.parentElement?.closest<EzFieldElement>(
              'ez-field'
            ) ??
            (elm as HTMLInputElement).closest?.<EzFieldElement>('ez-field');

        if (k.startsWith('checkbox') && elm instanceof HTMLInputElement) {
          elm.defaultChecked = elm.checked = v as boolean;
        } else if (elm instanceof HTMLInputElement) {
          elm.defaultValue = elm.value = String(v);
        }

        if (xField) xField.validationMessage = '';
        (radioGroupElm0 ?? (elm as HTMLInputElement)).checkValidity?.();
      }
    });

    unfillBtn.addEventListener('click', () => {
      for (const [k] of Object.entries(exampleValues)) {
        const elm = formEl.elements.namedItem(k) as
          | HTMLInputElement
          | RadioNodeList
          | null;

        if (!elm) continue;

        const radioGroupElm0 =
            elm instanceof RadioNodeList ? elm.item(0) : null,
          xField =
            radioGroupElm0?.parentElement?.parentElement?.closest<EzFieldElement>(
              'ez-field'
            ) ??
            (elm as HTMLInputElement).closest?.<EzFieldElement>('ez-field');

        if (k.startsWith('checkbox') && elm instanceof HTMLInputElement) {
          elm.defaultChecked = elm.checked = false;
        } else if (elm instanceof HTMLInputElement) {
          elm.defaultValue = elm.value = '';
        }

        if (xField) xField.validationMessage = '';
      }
    });
  },
};
