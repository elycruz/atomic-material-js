import { html } from 'lit';

export default {
  title: 'CSS Components/List',
};

export const OneLine = {
  render: () => html`
    <section>
      <header><h2>One-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item">
          <span class="ez-list-item__leading">📄</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 1</span>
          </span>
          <span class="ez-list-item__trailing">Meta</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item">
          <span class="ez-list-item__leading">📄</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 2</span>
          </span>
          <span class="ez-list-item__trailing">Meta</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item">
          <span class="ez-list-item__leading">📄</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 3</span>
          </span>
        </li>
      </ul>
    </section>
  `,
};

export const TwoLine = {
  render: () => html`
    <section>
      <header><h2>Two-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading">👤</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Jane Doe</span>
            <span class="ez-list-item__supporting-text">Software Engineer</span>
          </span>
          <span class="ez-list-item__trailing">3m ago</span>
        </li>
        <hr class="ez-divider ez-inset" />
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading">👤</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">John Smith</span>
            <span class="ez-list-item__supporting-text">Product Manager</span>
          </span>
          <span class="ez-list-item__trailing">1h ago</span>
        </li>
      </ul>
    </section>
  `,
};

export const ThreeLine = {
  render: () => html`
    <section>
      <header><h2>Three-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-three-line">
          <span class="ez-list-item__leading">✉</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Meeting Notes</span>
            <span class="ez-list-item__supporting-text">
              Discussion about the new project timeline and resource allocation
              for Q3.
            </span>
          </span>
          <span class="ez-list-item__trailing">Jun 15</span>
        </li>
        <hr class="ez-divider ez-inset" />
        <li class="ez-list-item ez-three-line">
          <span class="ez-list-item__leading">✉</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Design Review</span>
            <span class="ez-list-item__supporting-text">
              Updated mockups for the dashboard redesign. Please review and
              provide feedback.
            </span>
          </span>
          <span class="ez-list-item__trailing">Jun 14</span>
        </li>
      </ul>
    </section>
  `,
};
