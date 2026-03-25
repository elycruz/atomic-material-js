import { html } from 'lit';
import { expect } from 'storybook/test';
import type { StoryObj } from '@storybook/web-components-vite';
import './../ez-ripple';

export default {
  title: 'CSS Components/Card',
};

type Story = StoryObj;

export const Variants: Story = {
  render: () => html`
    <section dir="ltr">
      <header><h2>Card Variants</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1.5rem; flex-flow: column nowrap; max-width: 480px;"
      >
        <div class="ez-card ez-elevated">
          <div class="ez-card__header">
            <h3 class="ez-card__title">Elevated Card</h3>
            <p class="ez-card__subtitle">Subtitle</p>
          </div>
          <div class="ez-card__body">
            <p>
              Elevated cards have a shadow and surface-container-low background.
            </p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-filled">
          <div class="ez-card__header">
            <h3 class="ez-card__title">Filled Card</h3>
            <p class="ez-card__subtitle">Subtitle</p>
          </div>
          <div class="ez-card__body">
            <p>
              Filled cards use surface-container-highest background with no
              shadow.
            </p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined">
          <div class="ez-card__header">
            <h3 class="ez-card__title">Outlined Card</h3>
            <p class="ez-card__subtitle">Subtitle</p>
          </div>
          <div class="ez-card__body">
            <p>Outlined cards have a border and surface background.</p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn" type="button">
              <ez-ripple></ez-ripple>
              Action 1
            </button>
            <button class="ez-btn ez-filled" type="button">
              <ez-ripple></ez-ripple>
              Action 2
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const cards = canvasElement.querySelectorAll('.ez-card');

    await expect(cards.length).toBe(3);

    await Promise.all(
      Array.from(cards).map(async card => {
        const title = card.querySelector('.ez-card__title'),
          subtitle = card.querySelector('.ez-card__subtitle'),
          body = card.querySelector('.ez-card__body'),
          footer = card.querySelector('.ez-card__footer');

        await expect(title).toBeTruthy();
        await expect(subtitle).toBeTruthy();
        await expect(body).toBeTruthy();
        await expect(footer).toBeTruthy();
      })
    );
  },
};

export const WithMedia: Story = {
  render: () => html`
    <section>
      <header><h2>Card with Media</h2></header>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div class="ez-card ez-elevated" style="width: 320px;">
          <div
            class="ez-card__media"
            style="height: 180px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
          ></div>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Media Card</h3>
          </div>
          <div class="ez-card__body">
            <p>Card with a media area at the top.</p>
          </div>
          <div class="ez-card__footer">
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
  play: async ({ canvasElement }) => {
    const media = canvasElement.querySelector('.ez-card__media');

    await expect(media).toBeTruthy();
    await expect(media ? getComputedStyle(media).display : '').toBe('block');
  },
};

export const Disabled: Story = {
  render: () => html`
    <section>
      <header><h2>Disabled Cards</h2></header>
      <p class="ez-card__subtitle">
        Disabled cards have reduced opacity and no pointer interaction.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <div class="ez-card ez-elevated" disabled>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Elevated (disabled)</h3>
          </div>
          <div class="ez-card__body">
            <p>Uses the <code>disabled</code> attribute.</p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>
              Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-filled" aria-disabled="true">
          <div class="ez-card__header">
            <h3 class="ez-card__title">Filled (aria-disabled)</h3>
          </div>
          <div class="ez-card__body">
            <p>Uses <code>aria-disabled="true"</code>.</p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>Action
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined" disabled>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Outlined (disabled)</h3>
          </div>
          <div class="ez-card__body">
            <p>Uses the <code>disabled</code> attribute.</p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-outlined" type="button">
              <ez-ripple></ez-ripple>Action
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const disabledCards = canvasElement.querySelectorAll(
      '.ez-card[disabled], .ez-card[aria-disabled="true"]'
    );

    await expect(disabledCards.length).toBe(3);

    await Promise.all(
      Array.from(disabledCards).map(async card => {
        const opacity = parseFloat(getComputedStyle(card).opacity);

        await expect(opacity).toBeLessThan(1);
      })
    );
  },
};

export const InteractiveCards: Story = {
  render: () => html`
    <section>
      <header><h2>Interactive Cards</h2></header>
      <p class="ez-card__subtitle">
        Cards rendered as links, buttons, or with <code>role="button"</code>
        gain a focus-visible ring. Tab through to see the focus indicator.
      </p>
      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap; max-width: 480px;"
      >
        <a
          href="javascript:void(0)"
          class="ez-card ez-elevated"
          style="text-decoration: none; color: inherit;"
        >
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Link Card</h3>
            <p class="ez-card__subtitle">Rendered as <code>&lt;a&gt;</code></p>
          </div>
          <div class="ez-card__body">
            <p>Click or tab to this card. It navigates like a link.</p>
          </div>
        </a>

        <button
          class="ez-card ez-filled"
          type="button"
          style="text-align: start; cursor: pointer; border: none; font: inherit;"
        >
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Button Card</h3>
            <p class="ez-card__subtitle">
              Rendered as <code>&lt;button&gt;</code>
            </p>
          </div>
          <div class="ez-card__body">
            <p>Click or tab to this card. It acts as a button.</p>
          </div>
        </button>

        <div class="ez-card ez-outlined" role="button" tabindex="0">
          <ez-ripple></ez-ripple>
          <div class="ez-card__header">
            <h3 class="ez-card__title">Role Button Card</h3>
            <p class="ez-card__subtitle">Uses <code>role="button"</code></p>
          </div>
          <div class="ez-card__body">
            <p>
              Focusable via <code>tabindex="0"</code> with focus-visible ring.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const interactiveCards = canvasElement.querySelectorAll(
      'a.ez-card, button.ez-card, .ez-card[role="button"]'
    );

    await expect(interactiveCards.length).toBe(3);
  },
};

export const Dragged: Story = {
  render: () => html`
    <section>
      <header><h2>Dragged State</h2></header>
      <p class="ez-card__subtitle">
        Elevated cards gain a deeper shadow (level 4) when the
        <code>ez-dragged</code> class is applied.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 2rem; flex-wrap: wrap; align-items: start;"
      >
        <div>
          <p><strong>Normal</strong></p>
          <div class="ez-card ez-elevated">
            <div class="ez-card__header">
              <h3 class="ez-card__title">Elevated Card</h3>
            </div>
            <div class="ez-card__body">
              <p>Default elevation (level 1).</p>
            </div>
          </div>
        </div>

        <div>
          <p><strong>Dragged</strong></p>
          <div class="ez-card ez-elevated ez-dragged">
            <div class="ez-card__header">
              <h3 class="ez-card__title">Dragged Card</h3>
            </div>
            <div class="ez-card__body">
              <p>Dragged elevation (level 4).</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const draggedCard = canvasElement.querySelector('.ez-card.ez-dragged'),
      normalCard = canvasElement.querySelector('.ez-card:not(.ez-dragged)');

    await expect(draggedCard).toBeTruthy();
    await expect(normalCard).toBeTruthy();

    const draggedShadow = draggedCard
        ? getComputedStyle(draggedCard).boxShadow
        : '',
      normalShadow = normalCard ? getComputedStyle(normalCard).boxShadow : '';

    await expect(draggedShadow).not.toBe(normalShadow);
  },
};

export const HorizontalLayout: Story = {
  render: () => html`
    <section dir="ltr">
      <header><h2>Horizontal Layout</h2></header>
      <p class="ez-card__subtitle">
        Adding <code>ez-layout-horizontal</code> keeps a row flow regardless of
        text direction.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap; max-width: 640px;"
      >
        <div class="ez-card ez-elevated ez-layout-horizontal">
          <div
            class="ez-card__media"
            style="width: 140px; min-height: 140px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);"
          ></div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 class="ez-card__title">Horizontal Elevated</h3>
              <p class="ez-card__subtitle">Side-by-side layout</p>
            </div>
            <div class="ez-card__body">
              <p>Media beside text content.</p>
            </div>
          </div>
        </div>

        <div class="ez-card ez-filled ez-layout-horizontal">
          <div
            class="ez-card__media"
            style="width: 140px; min-height: 140px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);"
          ></div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 class="ez-card__title">Horizontal Filled</h3>
              <p class="ez-card__subtitle">Side-by-side layout</p>
            </div>
            <div class="ez-card__body">
              <p>Media beside text content.</p>
            </div>
          </div>
        </div>

        <div class="ez-card ez-outlined ez-layout-horizontal">
          <div
            class="ez-card__media"
            style="width: 140px; min-height: 140px; background: linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%);"
          ></div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 class="ez-card__title">Horizontal Outlined</h3>
              <p class="ez-card__subtitle">Side-by-side layout</p>
            </div>
            <div class="ez-card__body">
              <p>Media beside text content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const horizontalCards = canvasElement.querySelectorAll(
      '.ez-card.ez-layout-horizontal'
    );

    await expect(horizontalCards.length).toBe(3);

    await Promise.all(
      Array.from(horizontalCards).map(async card => {
        const media = card.querySelector('.ez-card__media');

        await expect(media).toBeTruthy();
      })
    );
  },
};

export const RTL: Story = {
  render: () => html`
    <section dir="rtl">
      <header><h2>بطاقات RTL</h2></header>
      <p class="ez-card__subtitle">
        Cards in a right-to-left context. Default cards flow as rows in RTL;
        <code>ez-layout-vertical</code> preserves column flow.
      </p>

      <div
        class="ez-section-body"
        style="display: flex; gap: 1rem; flex-wrap: wrap;"
      >
        <button type="button" class="ez-card ez-elevated">
          <div class="ez-card__header">
            <h3 class="ez-card__title">بطاقة مرتفعة</h3>
            <p class="ez-card__subtitle">عنوان فرعي</p>
          </div>
          <div class="ez-card__body">
            <p>Default RTL layout flows as a row.</p>
          </div>
        </button>

        <div class="ez-card ez-filled ez-layout-vertical">
          <div class="ez-card__header">
            <h3 class="ez-card__title">بطاقة معبأة</h3>
            <p class="ez-card__subtitle">عنوان فرعي</p>
          </div>
          <div class="ez-card__body">
            <p>
              Explicit <code>ez-layout-vertical</code> keeps column flow in RTL.
            </p>
          </div>
          <div class="ez-card__footer">
            <button class="ez-btn ez-text" type="button">
              <ez-ripple></ez-ripple>إجراء
            </button>
          </div>
        </div>

        <div class="ez-card ez-outlined">
          <div
            class="ez-card__media"
            style="flex-shrink: 0; height: 100%; min-height: 120px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
          ></div>
          <div style="display: flex; flex-direction: column;">
            <div class="ez-card__header">
              <h3 class="ez-card__title">بطاقة محددة</h3>
            </div>
            <div class="ez-card__body">
              <p>RTL card with media beside text.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  play: async ({ canvasElement }) => {
    const section = canvasElement.querySelector('section[dir="rtl"]');

    await expect(section).toBeTruthy();

    const cards = section?.querySelectorAll('.ez-card');

    await expect(cards?.length).toBe(3);
  },
};
