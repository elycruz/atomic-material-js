import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import { EzThemeVariants } from '../utils/constants.js';
import './../ez-ripple';

export default {
  title: 'CSS Components/Dialog',
};

const openDialog = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement | null;

    dialog?.showModal();
  },
  closeDialog = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement | null;

    dialog?.close();
  };

export const BasicDialog: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Basic Dialog</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('basic-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Dialog
        </button>

        <dialog
          class="ez-dialog"
          id="basic-dialog"
          aria-labelledby="basic-dialog-title"
        >
          <h2 class="ez-dialog__headline" id="basic-dialog-title">
            Basic dialog title
          </h2>
          <form
            class="ez-dialog__content"
            id="basic-dialog-form"
            method="dialog"
          >
            A dialog is a type of modal window that appears in front of app
            content to provide critical information, or prompt for a decision to
            be made.
          </form>
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              form="basic-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              Cancel
            </button>
            <button
              class="ez-btn ez-theme-primary"
              form="basic-dialog-form"
              value="confirm"
            >
              <ez-ripple></ez-ripple>
              Confirm
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#basic-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass('ez-dialog');

    // Verify structure
    const headline = dialog.querySelector('.ez-dialog__headline');

    await expect(headline).toBeInTheDocument();
    await expect(headline?.textContent?.trim()).toBe('Basic dialog title');

    const content = dialog.querySelector('.ez-dialog__content');

    await expect(content).toBeInTheDocument();

    const actions = dialog.querySelector('.ez-dialog__actions');

    await expect(actions).toBeInTheDocument();
    await expect(actions?.children.length).toBe(2);

    // Open and verify
    dialog.showModal();
    await expect(dialog).toHaveAttribute('open');

    // Close and verify
    dialog.close('confirm');
    await expect(dialog.open).toBe(false);
    await expect(dialog.returnValue).toBe('confirm');
  },
};

export const AlertDialog: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Alert Dialog</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-error"
          type="button"
          @click=${() => {
            openDialog('alert-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Delete Item
        </button>

        <dialog
          class="ez-dialog"
          id="alert-dialog"
          role="alertdialog"
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-desc"
        >
          <h2 class="ez-dialog__headline" id="alert-dialog-title">
            Confirm deletion
          </h2>
          <form
            class="ez-dialog__content"
            id="alert-dialog-form"
            method="dialog"
          >
            <p id="alert-dialog-desc" style="margin: 0;">
              Are you sure you wish to delete this item? This action cannot be
              undone.
            </p>
          </form>
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              form="alert-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              Cancel
            </button>
            <button
              class="ez-btn ez-theme-error"
              form="alert-dialog-form"
              value="delete"
            >
              <ez-ripple></ez-ripple>
              Delete
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#alert-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveAttribute('role', 'alertdialog');
    await expect(dialog).toHaveAttribute(
      'aria-labelledby',
      'alert-dialog-title'
    );
    await expect(dialog).toHaveAttribute(
      'aria-describedby',
      'alert-dialog-desc'
    );
  },
};

export const DialogWithIcon: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Dialog with Icon</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('icon-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Icon Dialog
        </button>

        <dialog
          class="ez-dialog"
          id="icon-dialog"
          aria-labelledby="icon-dialog-title"
        >
          <div class="ez-dialog__icon">
            <span class="material-symbols-outlined" aria-hidden="true"
              >delete</span
            >
          </div>
          <h2
            class="ez-dialog__headline"
            id="icon-dialog-title"
            style="text-align: center;"
          >
            Permanently delete?
          </h2>
          <form
            class="ez-dialog__content"
            id="icon-dialog-form"
            method="dialog"
            style="text-align: center;"
          >
            Deleting the selected photos will also remove them from all synced
            devices.
          </form>
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              form="icon-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              Cancel
            </button>
            <button
              class="ez-btn ez-theme-primary"
              form="icon-dialog-form"
              value="delete"
            >
              <ez-ripple></ez-ripple>
              Delete
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#icon-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();

    const icon = dialog.querySelector('.ez-dialog__icon');

    await expect(icon).toBeInTheDocument();

    const headline = dialog.querySelector('.ez-dialog__headline');

    await expect(headline).toBeInTheDocument();

    // Icon should appear before headline in DOM
    const children = Array.from(dialog.children),
      iconIndex = icon ? children.indexOf(icon) : -1,
      headlineIndex = headline ? children.indexOf(headline) : -1;

    await expect(iconIndex).toBeLessThan(headlineIndex);
  },
};

export const ScrollableContent: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Scrollable Content with Dividers</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('scroll-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Scrollable Dialog
        </button>

        <dialog
          class="ez-dialog"
          id="scroll-dialog"
          aria-labelledby="scroll-dialog-title"
        >
          <h2 class="ez-dialog__headline" id="scroll-dialog-title">
            Terms of Service
          </h2>
          <hr class="ez-dialog__divider" id="scroll-divider-top" />
          <div
            class="ez-dialog__content"
            id="scroll-dialog-content"
            style="max-height: 200px;"
          >
            ${Array.from(
              { length: 15 },
              (_, i) => html`
                <p>
                  Section ${i + 1}: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris.
                </p>
              `
            )}
          </div>
          <hr class="ez-dialog__divider active" id="scroll-divider-bottom" />
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              type="button"
              @click=${() => {
                closeDialog('scroll-dialog');
              }}
            >
              <ez-ripple></ez-ripple>
              Decline
            </button>
            <button
              class="ez-btn ez-theme-primary"
              type="button"
              @click=${() => {
                closeDialog('scroll-dialog');
              }}
            >
              <ez-ripple></ez-ripple>
              Accept
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#scroll-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();

    const content = dialog.querySelector('.ez-dialog__content');

    await expect(content).toBeInTheDocument();

    const dividers = dialog.querySelectorAll('.ez-dialog__divider');

    await expect(dividers.length).toBe(2);

    // Bottom divider should have active class (content overflows)
    const bottomDivider = dialog.querySelector('#scroll-divider-bottom');

    await expect(bottomDivider).toHaveClass('active');
  },
};

export const FullScreenDialog: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Full-Screen Dialog</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('fullscreen-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Full-Screen Dialog
        </button>

        <dialog
          class="ez-dialog ez-dialog--fullscreen"
          id="fullscreen-dialog"
          aria-labelledby="fullscreen-dialog-title"
        >
          <div class="ez-dialog__header">
            <button
              class="ez-dialog__close ez-btn ez-icon-btn"
              type="button"
              @click=${() => {
                closeDialog('fullscreen-dialog');
              }}
              aria-label="Close"
            >
              <ez-ripple></ez-ripple>
              ✕
            </button>
            <h2 class="ez-dialog__headline" id="fullscreen-dialog-title">
              New event
            </h2>
            <button
              class="ez-dialog__confirm ez-btn ez-theme-primary"
              type="button"
              @click=${() => {
                closeDialog('fullscreen-dialog');
              }}
            >
              <ez-ripple></ez-ripple>
              Save
            </button>
          </div>
          <hr class="ez-dialog__divider active" />
          <div class="ez-dialog__content">
            <p>
              Full-screen dialogs fill the entire screen and are typically used
              for complex tasks on mobile, such as creating a new calendar event
              or composing an email.
            </p>
            <div
              style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;"
            >
              <label>
                <strong>Event title</strong>
                <input
                  type="text"
                  class="ez-input"
                  placeholder="Add title"
                  style="display: block; width: 100%; margin-top: 0.25rem;"
                />
              </label>
              <label>
                <strong>Date</strong>
                <input
                  type="date"
                  class="ez-input"
                  style="display: block; width: 100%; margin-top: 0.25rem;"
                />
              </label>
              <label>
                <strong>Description</strong>
                <textarea
                  class="ez-input"
                  rows="4"
                  placeholder="Add description"
                  style="display: block; width: 100%; margin-top: 0.25rem;"
                ></textarea>
              </label>
            </div>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#fullscreen-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass('ez-dialog--fullscreen');

    // Verify header structure
    const header = dialog.querySelector('.ez-dialog__header');

    await expect(header).toBeInTheDocument();

    const closeBtn = dialog.querySelector('.ez-dialog__close');

    await expect(closeBtn).toBeInTheDocument();

    const headline = header?.querySelector('.ez-dialog__headline');

    await expect(headline).toBeInTheDocument();

    const confirmBtn = dialog.querySelector('.ez-dialog__confirm');

    await expect(confirmBtn).toBeInTheDocument();

    const content = dialog.querySelector('.ez-dialog__content');

    await expect(content).toBeInTheDocument();
  },
};

export const FormIntegration: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Form Integration</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Using <code>&lt;form method="dialog"&gt;</code> to automatically close
        the dialog and set <code>returnValue</code>.
      </p>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('form-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Choose Ringtone
        </button>
        <p id="form-dialog-result" style="margin-top: 0.5rem; opacity: 0.7;">
          No selection yet.
        </p>

        <dialog
          class="ez-dialog"
          id="form-dialog"
          aria-labelledby="form-dialog-title"
        >
          <h2 class="ez-dialog__headline" id="form-dialog-title">
            Phone ringtone
          </h2>
          <form
            class="ez-dialog__content"
            id="form-dialog-form"
            method="dialog"
          >
            <div style="display: flex; flex-direction: column; gap: 0.75rem;">
              ${['Default', 'Callisto', 'Ganymede', 'Luna', 'Oberon'].map(
                name => html`
                  <label
                    style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;"
                  >
                    <input
                      type="radio"
                      name="ringtone"
                      value="${name.toLowerCase()}"
                      class="ez-radio"
                    />
                    ${name}
                  </label>
                `
              )}
            </div>
          </form>
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              form="form-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              Cancel
            </button>
            <button
              class="ez-btn ez-theme-primary"
              form="form-dialog-form"
              value="ok"
            >
              <ez-ripple></ez-ripple>
              OK
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#form-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();

    // Verify form with method="dialog"
    const form = dialog.querySelector('form');

    await expect(form).toBeInTheDocument();
    await expect(form).toHaveAttribute('method', 'dialog');

    // Verify radio options
    const radios = dialog.querySelectorAll('input[type="radio"]');

    await expect(radios.length).toBe(5);

    // Open, select, submit
    dialog.showModal();

    const lunaRadio = dialog.querySelector<HTMLInputElement>(
      'input[value="luna"]'
    );

    if (lunaRadio) lunaRadio.checked = true;

    dialog.close('ok');
    await expect(dialog.returnValue).toBe('ok');
  },
};

export const StackedActions: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Stacked Actions</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        When button labels are too long for side-by-side layout, use
        <code>.ez-stacked</code> on the actions container.
      </p>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('stacked-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Stacked Dialog
        </button>

        <dialog
          class="ez-dialog"
          id="stacked-dialog"
          aria-labelledby="stacked-dialog-title"
        >
          <h2 class="ez-dialog__headline" id="stacked-dialog-title">
            Turn on travel mode?
          </h2>
          <form
            class="ez-dialog__content"
            id="stacked-dialog-form"
            method="dialog"
          >
            Travel mode adds estimated transit time to calendar events based on
            your home and work addresses.
          </form>
          <div class="ez-dialog__actions ez-stacked">
            <button
              class="ez-btn ez-theme-primary"
              form="stacked-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              No thanks, maybe later
            </button>
            <button
              class="ez-btn ez-theme-primary"
              form="stacked-dialog-form"
              value="enable"
            >
              <ez-ripple></ez-ripple>
              Turn on travel mode
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#stacked-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();

    const actions = dialog.querySelector('.ez-dialog__actions');

    await expect(actions).toBeInTheDocument();
    await expect(actions).toHaveClass('ez-stacked');
  },
};

export const ResponsiveFullscreen: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Responsive Auto-Fullscreen</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        On small viewports (≤600px), dialogs with
        \`.ez-dialog--auto-fullscreen\` automatically switch to fullscreen via
        CSS Media Query. Resize the browser to see the effect.
      </p>
      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('responsive-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Dialog (auto-fullscreen)
        </button>
        <button
          class="ez-btn ez-outlined ez-theme-secondary"
          type="button"
          @click=${() => {
            openDialog('responsive-dialog-opt-out');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Dialog (no auto-fullscreen)
        </button>
      </div>

      <dialog
        class="ez-dialog ez-dialog--auto-fullscreen"
        id="responsive-dialog"
        aria-labelledby="responsive-dialog-title"
      >
        <h2 class="ez-dialog__headline" id="responsive-dialog-title">
          Responsive dialog
        </h2>
        <form
          class="ez-dialog__content"
          id="responsive-dialog-form"
          method="dialog"
        >
          This dialog automatically goes fullscreen on small viewports (≤600px).
          Try resizing your browser window to see it switch.
        </form>
        <div class="ez-dialog__actions">
          <button
            class="ez-btn ez-theme-primary"
            form="responsive-dialog-form"
            value="close"
          >
            <ez-ripple></ez-ripple>
            Close
          </button>
        </div>
      </dialog>

      <dialog
        class="ez-dialog"
        id="responsive-dialog-opt-out"
        aria-labelledby="responsive-dialog-opt-out-title"
      >
        <h2 class="ez-dialog__headline" id="responsive-dialog-opt-out-title">
          Opt-out dialog
        </h2>
        <form
          class="ez-dialog__content"
          id="responsive-opt-out-form"
          method="dialog"
        >
          This dialog doesn't have <code>.ez-dialog--auto-fullscreen</code> so
          it stays centered regardless of viewport size.
        </form>
        <div class="ez-dialog__actions">
          <button
            class="ez-btn ez-theme-primary"
            form="responsive-opt-out-form"
            value="close"
          >
            <ez-ripple></ez-ripple>
            Close
          </button>
        </div>
      </dialog>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#responsive-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass('ez-dialog');

    const optOutDialog = canvasElement.querySelector<HTMLDialogElement>(
      '#responsive-dialog-opt-out'
    );

    if (!optOutDialog) return;

    await expect(optOutDialog).toBeInTheDocument();
    await expect(optOutDialog).not.toHaveClass('ez-dialog--auto-fullscreen');
  },
};

export const WithThemes: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Dialogs with Themed Actions</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Dialog action buttons inherit theme colors from theme classes.
      </p>
      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        ${Object.entries(EzThemeVariants).map(
          ([label, suffix]) => html`
            <div>
              <button
                class="ez-btn ez-filled ez-theme-${suffix}"
                type="button"
                @click=${() => {
                  openDialog(`theme-dialog-${suffix}`);
                }}
              >
                <ez-ripple></ez-ripple>
                ${label}
              </button>

              <dialog
                class="ez-dialog"
                id="theme-dialog-${suffix}"
                aria-labelledby="theme-dialog-${suffix}-title"
              >
                <h2
                  class="ez-dialog__headline"
                  id="theme-dialog-${suffix}-title"
                >
                  ${label} Theme
                </h2>
                <form
                  class="ez-dialog__content"
                  id="theme-dialog-${suffix}-form"
                  method="dialog"
                >
                  Dialog with <strong>ez-theme-${suffix}</strong> action
                  buttons.
                </form>
                <div class="ez-dialog__actions">
                  <button
                    class="ez-btn ez-theme-${suffix}"
                    form="theme-dialog-${suffix}-form"
                    value="cancel"
                  >
                    <ez-ripple></ez-ripple>
                    Cancel
                  </button>
                  <button
                    class="ez-btn ez-filled ez-theme-${suffix}"
                    form="theme-dialog-${suffix}-form"
                    value="ok"
                  >
                    <ez-ripple></ez-ripple>
                    Confirm
                  </button>
                </div>
              </dialog>
            </div>
          `
        )}
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialogs = canvasElement.querySelectorAll('.ez-dialog'),
      themeCount = Object.keys(EzThemeVariants).length;

    await expect(dialogs.length).toBe(themeCount);

    // Verify each dialog has proper structure
    await Promise.all(
      Array.from(dialogs).map(async dialog => {
        const headline = dialog.querySelector('.ez-dialog__headline');

        await expect(headline).toBeInTheDocument();

        const actions = dialog.querySelector('.ez-dialog__actions');

        await expect(actions).toBeInTheDocument();
      })
    );
  },
};

export const DialogWithHeader: StoryObj = {
  render: () => html`
    <section>
      <header><h2>Dialog with Header (Tailwind Flex)</h2></header>
      <div class="ez-section-body">
        <button
          class="ez-btn ez-filled ez-theme-primary"
          type="button"
          @click=${() => {
            openDialog('header-dialog');
          }}
        >
          <ez-ripple></ez-ripple>
          Open Dialog with Header
        </button>

        <dialog
          class="ez-dialog"
          id="header-dialog"
          aria-labelledby="header-dialog-title"
        >
          <div class="flex flex-row items-center justify-between px-6 pt-6">
            <h2
              class="ez-dialog__headline"
              id="header-dialog-title"
              style="padding: 0; margin: 0;"
            >
              Dialog Title
            </h2>
            <button
              class="ez-btn ez-icon-btn"
              type="button"
              aria-label="Close"
              @click=${() => {
                closeDialog('header-dialog');
              }}
            >
              <ez-ripple></ez-ripple>
              <span class="material-symbols-outlined" aria-hidden="true"
                >close</span
              >
            </button>
          </div>
          <form
            class="ez-dialog__content"
            id="header-dialog-form"
            method="dialog"
          >
            This dialog uses a header div with Tailwind flex utilities to
            position the title and close button. The close button sits in the
            upper-right corner via <code>justify-between</code>.
          </form>
          <div class="ez-dialog__actions">
            <button
              class="ez-btn ez-theme-primary"
              form="header-dialog-form"
              value="cancel"
            >
              <ez-ripple></ez-ripple>
              Cancel
            </button>
            <button
              class="ez-btn ez-filled ez-theme-primary"
              form="header-dialog-form"
              value="confirm"
            >
              <ez-ripple></ez-ripple>
              Confirm
            </button>
          </div>
        </dialog>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const dialog =
      canvasElement.querySelector<HTMLDialogElement>('#header-dialog');

    if (!dialog) return;

    await expect(dialog).toBeInTheDocument();
    await expect(dialog).toHaveClass('ez-dialog');

    // Verify header structure
    const header = dialog.querySelector('div.flex');

    await expect(header).toBeInTheDocument();
    await expect(header).toHaveClass('flex-row');
    await expect(header).toHaveClass('items-center');
    await expect(header).toHaveClass('justify-between');

    // Verify title is in header
    const headline = header?.querySelector('.ez-dialog__headline');

    await expect(headline).toBeInTheDocument();
    await expect(headline?.textContent?.trim()).toBe('Dialog Title');

    // Verify close button is in header
    const closeBtn = header?.querySelector('button[aria-label="Close"]');

    await expect(closeBtn).toBeInTheDocument();

    // Verify content and actions
    const content = dialog.querySelector('.ez-dialog__content');

    await expect(content).toBeInTheDocument();

    const actions = dialog.querySelector('.ez-dialog__actions');

    await expect(actions).toBeInTheDocument();
    await expect(actions?.children.length).toBe(2);

    // Open and verify
    dialog.showModal();
    await expect(dialog).toHaveAttribute('open');

    // Close via button and verify
    dialog.close('confirm');
    await expect(dialog.open).toBe(false);
    await expect(dialog.returnValue).toBe('confirm');
  },
};
