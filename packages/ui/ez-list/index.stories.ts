import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import './../ez-ripple';

export default {
  title: 'CSS Components/List',
};

type Story = StoryObj;

export const OneLine: Story = {
  render: () => html`
    <section>
      <header><h2>One-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">description</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 1</span>
          </span>
          <span class="ez-list-item__trailing">Meta</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">description</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 2</span>
          </span>
          <span class="ez-list-item__trailing">Meta</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">description</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">List item 3</span>
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const list = canvasElement.querySelector('.ez-list');

    await expect(list).toBeInTheDocument();

    const items = list?.querySelectorAll('.ez-list-item');

    await expect(items?.length).toBe(3);

    await Promise.all(
      Array.from(items ?? []).map(async item => {
        const headline = item.querySelector('.ez-list-item__headline');

        await expect(headline).toBeInTheDocument();
      })
    );
  },
};

export const TwoLine: Story = {
  render: () => html`
    <section>
      <header><h2>Two-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">person</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Jane Doe</span>
            <span class="ez-list-item__supporting-text">Software Engineer</span>
          </span>
          <span class="ez-list-item__trailing">3m ago</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">person</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">John Smith</span>
            <span class="ez-list-item__supporting-text">Product Manager</span>
          </span>
          <span class="ez-list-item__trailing">1h ago</span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.ez-list-item.ez-two-line');

    await expect(items.length).toBe(2);

    await Promise.all(
      Array.from(items).map(async item => {
        const supporting = item.querySelector('.ez-list-item__supporting-text');

        await expect(supporting).toBeInTheDocument();
      })
    );
  },
};

export const ThreeLine: Story = {
  render: () => html`
    <section>
      <header><h2>Three-line List</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-three-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">mail</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Meeting Notes</span>
            <span class="ez-list-item__supporting-text">
              Discussion about the new project timeline and resource allocation
              for Q3.
            </span>
          </span>
          <span class="ez-list-item__trailing">Jun 15</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item ez-three-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">mail</span>
          </span>
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
  play: async ({ canvasElement }) => {
    const items = canvasElement.querySelectorAll('.ez-list-item.ez-three-line');

    await expect(items.length).toBe(2);

    await Promise.all(
      Array.from(items).map(async item => {
        const supporting = item.querySelector('.ez-list-item__supporting-text');

        await expect(supporting).toBeInTheDocument();
        await expect(supporting?.textContent?.trim().length).toBeGreaterThan(0);
      })
    );
  },
};

export const WithOverline: Story = {
  render: () => html`
    <section>
      <header><h2>List with Overline</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-three-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">photo</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__overline">OVERLINE</span>
            <span class="ez-list-item__headline">List item</span>
            <span class="ez-list-item__supporting-text"
              >Supporting text for this item</span
            >
          </span>
          <span class="ez-list-item__trailing">100+</span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">photo</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__overline">OVERLINE</span>
            <span class="ez-list-item__headline">List item</span>
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const overlines = canvasElement.querySelectorAll('.ez-list-item__overline');

    await expect(overlines.length).toBe(2);

    await Promise.all(
      Array.from(overlines).map(async overline => {
        await expect(overline).toBeInTheDocument();
        await expect(overline.textContent?.trim()).toBe('OVERLINE');
      })
    );
  },
};

export const LeadingVariants: Story = {
  render: () => html`
    <section>
      <header><h2>Leading Variants</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading ez-avatar">A</span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Avatar leading</span>
            <span class="ez-list-item__supporting-text"
              >40×40 circular avatar</span
            >
          </span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading ez-image">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56'%3E%3Crect fill='%23667eea' width='56' height='56'/%3E%3C/svg%3E"
              alt="placeholder"
              style="width: 100%; height: 100%; object-fit: cover;"
            />
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Image leading</span>
            <span class="ez-list-item__supporting-text"
              >56×56 image thumbnail</span
            >
          </span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item ez-two-line">
          <span class="ez-list-item__leading ez-video">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='56'%3E%3Crect fill='%23764ba2' width='100' height='56'/%3E%3C/svg%3E"
              alt="video thumbnail"
              style="width: 100%; height: auto; display: block;"
            />
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Video leading</span>
            <span class="ez-list-item__supporting-text"
              >100px wide video thumbnail</span
            >
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const avatar = canvasElement.querySelector(
        '.ez-list-item__leading.ez-avatar'
      ),
      image = canvasElement.querySelector('.ez-list-item__leading.ez-image'),
      video = canvasElement.querySelector('.ez-list-item__leading.ez-video');

    await expect(avatar).toBeInTheDocument();
    await expect(image).toBeInTheDocument();
    await expect(video).toBeInTheDocument();

    // Avatar should be circular
    const avatarStyle = avatar ? getComputedStyle(avatar) : null;

    await expect(avatarStyle?.borderRadius).toMatch(/50%|9999/);
  },
};

export const SelectedState: Story = {
  render: () => html`
    <section>
      <header><h2>Selected State</h2></header>

      <ul class="ez-list" role="listbox" style="max-width: 360px;">
        <li class="ez-list-item" role="option" aria-selected="false">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">inbox</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Unselected item</span>
          </span>
        </li>
        <li class="ez-list-item ez-selected" role="option" aria-selected="true">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">inbox</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Selected (class)</span>
          </span>
          <span class="ez-list-item__trailing">
            <span class="md-icon" aria-hidden="true">check</span>
          </span>
        </li>
        <li class="ez-list-item" role="option" aria-selected="true">
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">inbox</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Selected (aria)</span>
          </span>
          <span class="ez-list-item__trailing">
            <span class="md-icon" aria-hidden="true">check</span>
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const selected = canvasElement.querySelectorAll(
      '.ez-list-item.ez-selected, .ez-list-item[aria-selected="true"]'
    );

    await expect(selected.length).toBe(2);

    const unselected = canvasElement.querySelector(
      '.ez-list-item[aria-selected="false"]'
    );

    await expect(unselected).toBeInTheDocument();
    await expect(unselected).not.toHaveClass('ez-selected');
  },
};

export const DisabledState: Story = {
  render: () => html`
    <section>
      <header><h2>Disabled State</h2></header>

      <ul class="ez-list" style="max-width: 360px;">
        <li class="ez-list-item">
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Enabled item</span>
          </span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item" disabled>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Disabled (attribute)</span>
          </span>
        </li>
        <hr class="ez-divider" />
        <li class="ez-list-item" aria-disabled="true">
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Disabled (aria)</span>
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const disabled = canvasElement.querySelectorAll(
      '.ez-list-item[disabled], .ez-list-item[aria-disabled="true"]'
    );

    await expect(disabled.length).toBe(2);

    await Promise.all(
      Array.from(disabled).map(async item => {
        const opacity = parseFloat(getComputedStyle(item).opacity);

        await expect(opacity).toBeLessThan(1);
      })
    );
  },
};

export const InteractiveItems: Story = {
  render: () => html`
    <section>
      <header><h2>Interactive List Items</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Items as <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, or with
        <code>role</code> gain hover/focus/pressed state layers. Tab through to
        see focus indicators.
      </p>

      <ul class="ez-list" style="max-width: 360px;">
        <a
          href="javascript:void(0)"
          class="ez-list-item"
          style="text-decoration: none; color: inherit;"
        >
          <ez-ripple></ez-ripple>
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">link</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Link item</span>
          </span>
        </a>
        <hr class="ez-divider" />
        <button
          class="ez-list-item"
          type="button"
          style="width: 100%; border: none; background: none; font: inherit; text-align: start; cursor: pointer;"
        >
          <ez-ripple></ez-ripple>
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">touch_app</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Button item</span>
          </span>
        </button>
        <hr class="ez-divider" />
        <li class="ez-list-item" role="option" tabindex="0">
          <ez-ripple></ez-ripple>
          <span class="ez-list-item__leading">
            <span class="md-icon" aria-hidden="true">check_box</span>
          </span>
          <span class="ez-list-item__content">
            <span class="ez-list-item__headline">Option role item</span>
          </span>
        </li>
      </ul>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector('a.ez-list-item'),
      button = canvasElement.querySelector('button.ez-list-item'),
      option = canvasElement.querySelector('.ez-list-item[role="option"]');

    await expect(link).toBeInTheDocument();
    await expect(button).toBeInTheDocument();
    await expect(option).toBeInTheDocument();

    // Each interactive item should have a ripple
    const ripples = canvasElement.querySelectorAll('.ez-list-item ez-ripple');

    await expect(ripples.length).toBe(3);
  },
};

export const ExpandableList: Story = {
  render: () => html`
    <section>
      <header><h2>Expandable List (Extended)</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Uses <code>.ez-list-expand</code> with a toggle row and collapsible
        content region. Click the toggle to expand/collapse.
      </p>

      <div style="max-width: 360px;">
        <div class="ez-list-expand">
          <button
            class="ez-list-expand__toggle"
            type="button"
            aria-expanded="false"
            aria-controls="expand-content-1"
            @click=${(e: Event) => {
              const btn = e.currentTarget as HTMLButtonElement,
                expanded = btn.getAttribute('aria-expanded') === 'true';

              btn.setAttribute('aria-expanded', String(!expanded));
            }}
          >
            <span class="ez-list-item__content">
              <span class="ez-list-item__headline">Categories</span>
            </span>
            <span class="ez-list-expand__toggle-icon">
              <span class="md-icon" aria-hidden="true">expand_more</span>
            </span>
          </button>
          <ul class="ez-list ez-list-expand__content" id="expand-content-1">
            <li class="ez-list-item">
              <span class="ez-list-item__content">
                <span class="ez-list-item__headline">Sub-item A</span>
              </span>
            </li>
            <li class="ez-list-item">
              <span class="ez-list-item__content">
                <span class="ez-list-item__headline">Sub-item B</span>
              </span>
            </li>
            <li class="ez-list-item">
              <span class="ez-list-item__content">
                <span class="ez-list-item__headline">Sub-item C</span>
              </span>
            </li>
          </ul>
        </div>

        <div class="ez-list-expand" style="margin-top: 0.5rem;">
          <button
            class="ez-list-expand__toggle ez-expanded"
            type="button"
            aria-expanded="true"
            aria-controls="expand-content-2"
            @click=${(e: Event) => {
              const btn = e.currentTarget as HTMLButtonElement,
                expanded = btn.getAttribute('aria-expanded') === 'true';

              btn.setAttribute('aria-expanded', String(!expanded));
              btn.classList.toggle('ez-expanded');
            }}
          >
            <span class="ez-list-item__content">
              <span class="ez-list-item__headline">Settings</span>
            </span>
            <span class="ez-list-expand__toggle-icon">
              <span class="md-icon" aria-hidden="true">expand_more</span>
            </span>
          </button>
          <ul class="ez-list ez-list-expand__content" id="expand-content-2">
            <li class="ez-list-item">
              <span class="ez-list-item__content">
                <span class="ez-list-item__headline">General</span>
              </span>
            </li>
            <li class="ez-list-item">
              <span class="ez-list-item__content">
                <span class="ez-list-item__headline">Privacy</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const expandContainers = canvasElement.querySelectorAll('.ez-list-expand');

    await expect(expandContainers.length).toBe(2);

    // First group: collapsed by default
    const collapsedToggle = canvasElement.querySelector(
      '.ez-list-expand__toggle[aria-expanded="false"]'
    );

    await expect(collapsedToggle).toBeInTheDocument();

    const collapsedContent = collapsedToggle?.parentElement?.querySelector(
      '.ez-list-expand__content'
    );

    await expect(collapsedContent).toBeInTheDocument();

    if (collapsedContent) {
      await expect(getComputedStyle(collapsedContent).display).toBe('none');
    }

    // Second group: expanded by default
    const expandedToggle = canvasElement.querySelector(
      '.ez-list-expand__toggle[aria-expanded="true"]'
    );

    await expect(expandedToggle).toBeInTheDocument();

    const expandedContent = expandedToggle?.parentElement?.querySelector(
      '.ez-list-expand__content'
    );

    await expect(expandedContent).toBeInTheDocument();

    if (expandedContent) {
      await expect(getComputedStyle(expandedContent).display).not.toBe('none');
    }

    // Click the collapsed toggle to expand it
    (collapsedToggle as HTMLButtonElement).click();

    // Wait a tick for DOM update
    await new Promise<void>(r => {
      setTimeout(r, 50);
    });

    await expect(collapsedToggle).toHaveAttribute('aria-expanded', 'true');

    if (collapsedContent) {
      await expect(getComputedStyle(collapsedContent).display).not.toBe('none');
    }

    // Toggle icon should be present
    const icons = canvasElement.querySelectorAll(
      '.ez-list-expand__toggle-icon'
    );

    await expect(icons.length).toBe(2);
  },
};
