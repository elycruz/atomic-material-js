import { html } from 'lit';
import { EzThemeVariants } from '../utils/constants.js';
import './../ez-ripple';

export default {
  title: 'CSS Components/Card',
};

export const Variants = {
  render: () => html`
    <section dir="ltr">
      <header><h2>Card Variants</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div class="ez-card ez-elevated">
          <div class="ez-card__header">
            <h3 style="margin: 0;">Elevated Card</h3>
            <p style="margin: 0; opacity: 0.7;">Subtitle</p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Elevated cards have a shadow and surface-container-low background.
            </p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text ez-theme-secondary" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-filled">
          <div class="ez-card__header">
            <h3 style="margin: 0;">Filled Card</h3>
            <p style="margin: 0; opacity: 0.7;">Subtitle</p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Filled cards use surface-container-highest background with no
              shadow.
            </p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text ez-theme-secondary" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined">
          <div class="ez-card__header">
            <h3 style="margin: 0;">Outlined Card</h3>
            <p style="margin: 0; opacity: 0.7;">Subtitle</p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Outlined cards have a border and surface background.
            </p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-outlined ez-theme-secondary" type="button">
              <ez-ripple></ez-ripple>
              Action 1
            </button>
            <button class="ez-btn ez-filled ez-theme-primary" type="button">
              <ez-ripple></ez-ripple>
              Action 2
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const WithMedia = {
  render: () => html`
    <section>
      <header><h2>Card with Media</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div class="ez-card ez-elevated" style="width: 320px;">
          <div class="ez-card__media">
            <div
              style="height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
            ></div>
          </div>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Media Card</h3>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">Card with a media area at the top.</p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Share
            </button>
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const Disabled = {
  render: () => html`
    <section>
      <header><h2>Disabled Cards</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Disabled cards have reduced opacity and no pointer interaction.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div class="ez-card ez-elevated" disabled>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Elevated (disabled)</h3>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">Uses the <code>disabled</code> attribute.</p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-filled" aria-disabled="true">
          <div class="ez-card__header">
            <h3 style="margin: 0;">Filled (aria-disabled)</h3>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">Uses <code>aria-disabled="true"</code>.</p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined" disabled>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Outlined (disabled)</h3>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">Uses the <code>disabled</code> attribute.</p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-outlined" type="button">
              <ez-ripple></ez-ripple>Action
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const InteractiveCards = {
  render: () => html`
    <section>
      <header><h2>Interactive Cards</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Cards rendered as links, buttons, or with <code>role="button"</code>
        gain a focus-visible ring. Tab through to see the focus indicator.
      </p>
      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <a
          href="javascript:void(0)"
          class="ez-card ez-elevated"
          style="text-decoration: none; color: inherit;"
        >
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Link Card</h3>
            <p style="margin: 0; opacity: 0.7;">
              Rendered as <code>&lt;a&gt;</code>
            </p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Click or tab to this card. It navigates like a link.
            </p>
          </div>
        </a>

        <button
          class="ez-card ez-filled"
          type="button"
          style="text-align: start; cursor: pointer; border: none; font: inherit;"
        >
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Button Card</h3>
            <p style="margin: 0; opacity: 0.7;">
              Rendered as <code>&lt;button&gt;</code>
            </p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Click or tab to this card. It acts as a button.
            </p>
          </div>
        </button>

        <div class="ez-card ez-outlined" role="button" tabindex="0">
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 style="margin: 0;">Role Button Card</h3>
            <p style="margin: 0; opacity: 0.7;">
              Uses <code>role="button"</code>
            </p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Focusable via <code>tabindex="0"</code> with focus-visible ring.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const Dragged = {
  render: () => html`
    <section>
      <header><h2>Dragged State</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Elevated cards gain a deeper shadow (level 4) when the
        <code>ez-dragged</code> class is applied.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: start;"
      >
        <div>
          <p style="margin: 0 0 0.5rem;"><strong>Normal</strong></p>
          <div class="ez-card ez-elevated">
            <div class="ez-card__header">
              <h3 style="margin: 0;">Elevated Card</h3>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">Default elevation (level 1).</p>
            </div>
          </div>
        </div>

        <div>
          <p style="margin: 0 0 0.5rem;"><strong>Dragged</strong></p>
          <div class="ez-card ez-elevated ez-dragged">
            <div class="ez-card__header">
              <h3 style="margin: 0;">Dragged Card</h3>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">Dragged elevation (level 4).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const HorizontalLayout = {
  render: () => html`
    <section dir="ltr">
      <header><h2>Horizontal Layout</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Adding <code>ez-layout-horizontal</code> keeps a row flow regardless of
        text direction.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div
          class="ez-card ez-elevated ez-layout-horizontal"
          style="max-width: 480px;"
        >
          <div class="ez-card__media" style="flex-shrink: 0;">
            <div
              style="width: 140px; height: 100%; min-height: 140px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"
            ></div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 style="margin: 0;">Horizontal Elevated</h3>
              <p style="margin: 0; opacity: 0.7;">Side-by-side layout</p>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">Media beside text content.</p>
            </div>
          </div>
        </div>

        <div
          class="ez-card ez-filled ez-layout-horizontal"
          style="max-width: 480px;"
        >
          <div class="ez-card__media" style="flex-shrink: 0;">
            <div
              style="width: 140px; height: 100%; min-height: 140px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"
            ></div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 style="margin: 0;">Horizontal Filled</h3>
              <p style="margin: 0; opacity: 0.7;">Side-by-side layout</p>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">Media beside text content.</p>
            </div>
          </div>
        </div>

        <div
          class="ez-card ez-outlined ez-layout-horizontal"
          style="max-width: 480px;"
        >
          <div class="ez-card__media" style="flex-shrink: 0;">
            <div
              style="width: 140px; height: 100%; min-height: 140px; background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);"
            ></div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 style="margin: 0;">Horizontal Outlined</h3>
              <p style="margin: 0; opacity: 0.7;">Side-by-side layout</p>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">Media beside text content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const RTL = {
  render: () => html`
    <section dir="rtl">
      <header><h2>بطاقات RTL</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Cards in a right-to-left context. Default cards flow as rows in RTL;
        <code>ez-layout-vertical</code> preserves column flow.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <button type="button" class="ez-card ez-elevated">
          <div class="ez-card__header">
            <h3 style="margin: 0;">بطاقة مرتفعة</h3>
            <p style="margin: 0; opacity: 0.7;">عنوان فرعي</p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">Default RTL layout flows as a row.</p>
          </div>
        </button>

        <div class="ez-card ez-filled ez-layout-vertical">
          <div class="ez-card__header">
            <h3 style="margin: 0;">بطاقة معبأة</h3>
            <p style="margin: 0; opacity: 0.7;">عنوان فرعي</p>
          </div>
          <div class="ez-card__content">
            <p style="margin: 0;">
              Explicit <code>ez-layout-vertical</code> keeps column flow in RTL.
            </p>
          </div>
          <div class="ez-card__actions">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>إجراء
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined">
          <div class="ez-card__media" style="flex-shrink: 0;">
            <div
              style="width: 140px; height: 100%; min-height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
            ></div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 style="margin: 0;">بطاقة محددة</h3>
            </div>
            <div class="ez-card__content">
              <p style="margin: 0;">RTL card with media beside text.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
};

export const WithThemes = {
  render: () => html`
    <section>
      <header><h2>Cards with Themed Actions</h2></header>
      <p style="margin: 0 0 1rem; opacity: 0.7;">
        Card surfaces are theme-independent. Themes apply to child elements like
        buttons in the actions area.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        ${Object.entries(EzThemeVariants).map(
          ([label, suffix]) => html`
            <div class="ez-card ez-outlined" style="width: 260px;">
              <div class="ez-card__header">
                <h3 style="margin: 0;">${label}</h3>
                <p style="margin: 0; opacity: 0.7;">ez-theme-${suffix}</p>
              </div>
              <div class="ez-card__content">
                <p style="margin: 0;">
                  Themed action buttons using the
                  <strong>${label.toLowerCase()}</strong> palette.
                </p>
              </div>
              <div class="ez-card__actions">
                <button class="ez-btn ez-text ez-theme-${suffix}" type="button">
                  <ez-ripple></ez-ripple>
                  Text
                </button>
                <button
                  class="ez-btn ez-filled ez-theme-${suffix}"
                  type="button"
                >
                  <ez-ripple></ez-ripple>
                  Filled
                </button>
              </div>
            </div>
          `
        )}
      </div>
    </section>
  `,
};
