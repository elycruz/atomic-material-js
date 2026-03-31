import { html } from 'lit';

export default {
  title: 'CSS Components/Input Controls',
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
