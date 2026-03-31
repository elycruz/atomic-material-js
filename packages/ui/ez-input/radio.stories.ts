import { html } from 'lit';

export default {
  title: 'CSS Components/Radio',
};

export const RadioStates = {
  render: () => html`
    <section>
      <header><h2>Radio</h2></header>

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
