import { html } from 'lit';

export default {
  title: 'CSS Components/Divider',
};

export const Variants = {
  render: () => html`
    <section>
      <header><h2>Divider Variants</h2></header>

      <div class="ez-section-body">
        <h3>Full-width (default)</h3>
        <p>Content above</p>
        <hr class="ez-divider" />
        <p>Content below</p>

        <h3>Inset</h3>
        <p>Content above</p>
        <hr class="ez-divider ez-inset" />
        <p>Content below</p>

        <h3>Middle inset</h3>
        <p>Content above</p>
        <hr class="ez-divider ez-middle-inset" />
        <p>Content below</p>

        <h3>Vertical</h3>
        <div
          style="display: flex; align-items: stretch; height: 60px; gap: 1rem;"
        >
          <span>Left</span>
          <hr class="ez-divider ez-vertical" />
          <span>Right</span>
        </div>
      </div>
    </section>
  `,
};
