import { html } from 'lit';

export default {
  title: 'CSS Components/Checkbox',
};

export const CheckboxStates = {
  render: () => html`
    <section>
      <header><h2>Checkbox</h2></header>

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
            ><input class="ez-checkbox ez-error" type="checkbox" />
            Error</label
          >
          <label
            ><input class="ez-checkbox ez-error" type="checkbox" checked />
            Error + Checked</label
          >
          <label
            ><input class="ez-checkbox" type="checkbox" readonly />
            Readonly</label
          >
        </div>
      </div>
    </section>
  `,
};

export const SwitchStates = {
  render: () => html`
    <section>
      <header><h2>Switch</h2></header>

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
