import { html } from 'lit';

export default {
  title: 'CSS Components/Input Controls',
};

export const TextInputs = {
  render: () => html`
    <section>
      <header><h2>Text Inputs</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>Outlined (default)</dt>
          <dd>
            <input class="ez-input" type="text" placeholder="Text input" />
          </dd>
          <dd>
            <input
              class="ez-textfield"
              type="text"
              placeholder="Textfield class"
            />
          </dd>
          <dd>
            <ez-input>
              <input type="text" placeholder="ez-input element wrapper" />
            </ez-input>
          </dd>

          <dt>Underlined</dt>
          <dd>
            <input
              class="ez-input ez-underlined"
              type="text"
              placeholder="Underlined"
            />
          </dd>

          <dt>Input Types</dt>
          <dd>
            <input class="ez-input" type="text" placeholder="type=text" />
          </dd>
          <dd>
            <input class="ez-input" type="email" placeholder="type=email" />
          </dd>
          <dd>
            <input
              class="ez-input"
              type="password"
              placeholder="type=password"
            />
          </dd>
          <dd>
            <input class="ez-input" type="number" placeholder="type=number" />
          </dd>
          <dd>
            <input class="ez-input" type="search" placeholder="type=search" />
          </dd>
          <dd>
            <input class="ez-input" type="tel" placeholder="type=tel" />
          </dd>
          <dd>
            <input class="ez-input" type="url" placeholder="type=url" />
          </dd>
          <dd>
            <input class="ez-input" type="date" />
          </dd>
          <dd>
            <input class="ez-input" type="datetime-local" />
          </dd>
          <dd>
            <input class="ez-input" type="month" />
          </dd>
          <dd>
            <input class="ez-input" type="week" />
          </dd>
          <dd>
            <input class="ez-input" type="time" />
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const SelectAndTextarea = {
  render: () => html`
    <section>
      <header><h2>Select &amp; Textarea</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>Select (outlined)</dt>
          <dd>
            <select class="ez-input">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </dd>

          <dt>Select (.ez-textfield)</dt>
          <dd>
            <select class="ez-textfield">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </dd>

          <dt>Select (with wrapper)</dt>
          <dd>
            <ez-input>
              <select>
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
              </select>
            </ez-input>
          </dd>

          <dt>Textarea (outlined)</dt>
          <dd>
            <textarea class="ez-input" placeholder="Textarea"></textarea>
          </dd>

          <dt>Textarea (.ez-textfield)</dt>
          <dd>
            <textarea
              class="ez-textfield"
              placeholder="Textarea with textfield class"
            ></textarea>
          </dd>

          <dt>Textarea (with wrapper)</dt>
          <dd>
            <ez-input>
              <textarea placeholder="Textarea in wrapper"></textarea>
            </ez-input>
          </dd>

          <dt>Textarea (underlined)</dt>
          <dd>
            <textarea
              class="ez-input ez-underlined"
              placeholder="Underlined textarea"
            ></textarea>
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const CheckboxAndRadio = {
  render: () => html`
    <section>
      <header><h2>Checkbox &amp; Radio</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>Checkbox (.ez-checkbox)</dt>
          <dd>
            <label
              ><input class="ez-checkbox" type="checkbox" /> Unchecked</label
            >
          </dd>
          <dd>
            <label
              ><input class="ez-checkbox" type="checkbox" checked />
              Checked</label
            >
          </dd>
          <dd>
            <label
              ><input class="ez-checkbox" type="checkbox" readonly />
              Readonly</label
            >
          </dd>

          <dt>Checkbox (.ez-input[type="checkbox"])</dt>
          <dd>
            <label><input class="ez-input" type="checkbox" /> Unchecked</label>
          </dd>
          <dd>
            <label
              ><input class="ez-input" type="checkbox" checked /> Checked</label
            >
          </dd>

          <dt>Radio (.ez-radio)</dt>
          <dd>
            <label
              ><ez-ripple class="ez-theme-primary"
                ><input
                  class="ez-radio"
                  type="radio"
                  name="radio-demo-1"
                  value="1"
                />
              </ez-ripple>
              Option 1</label
            >
          </dd>
          <dd>
            <label
              ><input
                class="ez-radio"
                type="radio"
                name="radio-demo-1"
                value="2"
                checked
              />
              Option 2</label
            >
          </dd>
          <dd>
            <label
              ><input
                class="ez-radio"
                type="radio"
                name="radio-demo-1"
                value="3"
              />
              Option 3</label
            >
          </dd>

          <dt>Radio (.ez-input[type="radio"])</dt>
          <dd>
            <label
              ><input
                class="ez-input"
                type="radio"
                name="radio-demo-2"
                value="1"
              />
              Option 1</label
            >
          </dd>
          <dd>
            <label
              ><input
                class="ez-input"
                type="radio"
                name="radio-demo-2"
                value="2"
                checked
              />
              Option 2</label
            >
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const ButtonTypes = {
  render: () => html`
    <section>
      <header><h2>Button-type Inputs</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>input[type="submit"]</dt>
          <dd>
            <input type="submit" value="Submit" />
          </dd>

          <dt>input[type="reset"]</dt>
          <dd>
            <input type="reset" value="Reset" />
          </dd>

          <dt>input[type="button"]</dt>
          <dd>
            <input type="button" value="Button" />
          </dd>

          <dt>input[type="file"]</dt>
          <dd>
            <input type="file" />
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const ColorInput = {
  render: () => html`
    <section>
      <header><h2>Color Input</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>input[type="color"]</dt>
          <dd>
            <input type="color" value="#6200ee" />
          </dd>

          <dt>input[type="color"] with .ez-color</dt>
          <dd>
            <input class="ez-color" type="color" value="#03dac5" />
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const RangeInput = {
  render: () => html`
    <section>
      <header><h2>Range Input</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>input[type="range"]</dt>
          <dd class="ez-range-container">
            <input type="range" min="0" max="100" value="50" />
          </dd>

          <dt>input[type="range"] with .ez-range</dt>
          <dd class="ez-range-container">
            <input class="ez-range" type="range" min="0" max="100" value="75" />
          </dd>
        </dl>
      </div>
    </section>
  `,
};

export const HiddenInput = {
  render: () => html`
    <section>
      <header><h2>Hidden Input</h2></header>

      <div class="ez-section-body">
        <dl>
          <dt>input[type="hidden"] (not visible)</dt>
          <dd>
            <input type="hidden" name="hidden-field" value="secret" />
            <em>Hidden input is present but not displayed.</em>
          </dd>
        </dl>
      </div>
    </section>
  `,
};

/**
 * MD3 filled and outlined text fields with floating labels.
 */
export const MD3TextFields = {
  render: () => html`
    <section>
      <header><h2>MD3 Text Fields</h2></header>

      <div class="ez-section-body">
        <h3>Filled</h3>
        <div class="ez-vgroup">
          <div class="ez-field">
            <div class="ez-input ez-filled" style="position: relative;">
              <label for="md3-filled-1">Label</label>
              <input id="md3-filled-1" type="text" placeholder=" " />
            </div>
          </div>
          <div class="ez-field">
            <div class="ez-input ez-filled" style="position: relative;">
              <label for="md3-filled-2">With supporting text</label>
              <input id="md3-filled-2" type="text" placeholder=" " />
            </div>
            <div class="ez-field__supporting-text">Supporting text</div>
          </div>
          <div class="ez-field">
            <div class="ez-input ez-filled" style="position: relative;">
              <label for="md3-filled-err">Error state</label>
              <input id="md3-filled-err" type="text" placeholder=" " required />
            </div>
            <div class="ez-field__error-text">Error message</div>
          </div>
        </div>

        <h3>Outlined</h3>
        <div class="ez-vgroup">
          <div class="ez-field">
            <div class="ez-input ez-outlined" style="position: relative;">
              <label for="md3-outlined-1">Label</label>
              <input id="md3-outlined-1" type="text" placeholder=" " />
            </div>
          </div>
          <div class="ez-field">
            <div class="ez-input ez-outlined" style="position: relative;">
              <label for="md3-outlined-2">With counter</label>
              <input
                id="md3-outlined-2"
                type="text"
                placeholder=" "
                maxlength="100"
              />
            </div>
            <div class="ez-field__counter">0 / 100</div>
          </div>
        </div>
      </div>
    </section>
  `,
};

/**
 * MD3 checkbox states: checked, unchecked, indeterminate, error, disabled.
 */
export const MD3CheckboxStates = {
  render: () => html`
    <section>
      <header><h2>MD3 Checkbox States</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label><input class="ez-checkbox" type="checkbox" /> Unchecked</label>
          <label
            ><input class="ez-checkbox" type="checkbox" checked />
            Checked</label
          >
          <label
            ><input class="ez-checkbox" type="checkbox" disabled />
            Disabled</label
          >
          <label
            ><input class="ez-checkbox ez-error" type="checkbox" /> Error</label
          >
          <label
            ><input class="ez-checkbox ez-error" type="checkbox" checked />
            Error + Checked</label
          >
        </div>
      </div>
    </section>
  `,
};

/**
 * MD3 radio states: selected, unselected, error, disabled.
 */
export const MD3RadioStates = {
  render: () => html`
    <section>
      <header><h2>MD3 Radio States</h2></header>

      <div class="ez-section-body">
        <div class="ez-vgroup">
          <label
            ><input class="ez-radio" type="radio" name="md3-radio" value="1" />
            Option 1</label
          >
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="md3-radio"
              value="2"
              checked
            />
            Option 2 (selected)</label
          >
          <label
            ><input
              class="ez-radio"
              type="radio"
              name="md3-radio"
              value="3"
              disabled
            />
            Option 3 (disabled)</label
          >
          <label
            ><input
              class="ez-radio ez-error"
              type="radio"
              name="md3-radio-err"
              value="1"
            />
            Error state</label
          >
          <label
            ><input
              class="ez-radio ez-error"
              type="radio"
              name="md3-radio-err"
              value="2"
              checked
            />
            Error + Selected</label
          >
        </div>
      </div>
    </section>
  `,
};

/**
 * MD3 switch: on, off, disabled.
 */
export const MD3Switch = {
  render: () => html`
    <section>
      <header><h2>MD3 Switch</h2></header>

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
};
