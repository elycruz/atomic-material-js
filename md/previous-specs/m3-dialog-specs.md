# Material Design 3 — Dialog Component Specs

> Source: [m3.material.io/components/dialogs/specs](https://m3.material.io/components/dialogs/specs)

---

## Overview

Dialogs provide important prompts in a user flow. They inform users about a task and can contain critical information, require decisions, or involve multiple tasks. Dialogs are purposefully interruptive and should be used sparingly.

**Implementation**: CSS-only module using the native `<dialog>` element with `.ez-dialog` class names. The native element provides built-in modal behavior (`showModal()` / `close()`), `::backdrop` scrim, top-layer rendering, Escape key dismissal, focus trapping, `returnValue`, and `close` / `cancel` events.

---

## Variants

| Variant | Description |
|---|---|
| **Basic Dialog** | Standard dialog for alerts, confirmations, and simple choices |
| **Full-Screen Dialog** | Used on mobile for complex tasks requiring an input method editor or multi-step flows. Automatically activated via CSS Container Query at `≤600px` viewport width, or manually via `.ez-dialog--fullscreen` class |

---

## Anatomy

### Basic Dialog

| # | Element | CSS Class | Required |
|---|---|---|---|
| 1 | Container | `.ez-dialog` (on `<dialog>`) | Yes |
| 2 | Icon | `.ez-dialog__icon` | Optional |
| 3 | Headline | `.ez-dialog__headline` | Optional |
| 4 | Supporting text / Content | `.ez-dialog__content` | Optional |
| 5 | Divider (scroll separator) | `.ez-dialog__divider` | Optional |
| 6 | Actions (text buttons) | `.ez-dialog__actions` | Optional |
| 7 | Scrim | `::backdrop` (native) | Yes |

### Full-Screen Dialog

| # | Element | CSS Class | Required |
|---|---|---|---|
| 1 | Container | `.ez-dialog.ez-dialog--fullscreen` | Yes |
| 2 | Header area | `.ez-dialog__header` | Yes |
| 3 | Close affordance icon | `.ez-dialog__close` | Yes |
| 4 | Header text | `.ez-dialog__headline` (inside header) | Yes |
| 5 | Text button (confirm action) | `.ez-dialog__confirm` | Yes |
| 6 | Divider | `.ez-dialog__divider` | Optional |
| 7 | Content area | `.ez-dialog__content` | Yes |

---

## Container

| Property | Value |
|---|---|
| **Shape** | Extra Large — `28dp` corner radius (`--md-sys-shape-corner-extra-large`) |
| **Color** | `--md-sys-color-surface-container-high` |
| **Elevation** | Level 3 (`--md-sys-elevation-level3`) |
| **Min width** | `280dp` |
| **Max width** | `560dp` |
| **Scrim color** | `--md-sys-color-scrim` at `32%` opacity |
| **Full-screen shape** | `0dp` corner radius |
| **Full-screen size** | `100vw × 100dvh`, no elevation |

---

## Spacing & Layout

### Padding

| Region | Value |
|---|---|
| Top padding (to icon or headline) | `24dp` |
| Horizontal padding (headline & body) | `24dp` |
| Gap between icon and headline | `16dp` |
| Gap between headline and supporting text | `16dp` |
| Bottom padding (supporting text to actions) | `24dp` |
| Actions — horizontal padding | `24dp` |
| Actions — bottom padding | `24dp` |
| Gap between action buttons | `8dp` |

### Full-Screen Dialog – Header Bar

| Property | Value |
|---|---|
| Header bar height (single line) | `56dp` |
| Header bar height (two lines) | `80dp` |
| Title text top/bottom padding | `20dp` |
| Close affordance left-edge padding | `16dp` |
| Confirm action text padding (L/R) | `16dp` |

---

## Typography

| Element | Type Role | Size | Line Height | Weight |
|---|---|---|---|---|
| Headline | Headline Small | `24sp` | `32sp` | 400 |
| Supporting text | Body Medium | `14sp` | `20sp` | 400 |
| Full-screen title | Headline Small | `24sp` | `32sp` | 400 |
| Confirm action (full-screen) | Label Large | `14sp` | `20sp` | 500 |

---

## Color Roles

| Element | Token |
|---|---|
| Container background | `--md-sys-color-surface-container-high` |
| Headline text | `--md-sys-color-on-surface` |
| Supporting text | `--md-sys-color-on-surface-variant` |
| Icon (optional) | `--md-sys-color-secondary` |
| Action button text | `--md-sys-color-primary` |
| Scrim | `--md-sys-color-scrim` |
| Scroll divider | `--md-sys-color-outline` |

---

## Design Tokens (CSS Custom Properties)

### Component Token

Only one component-level custom property is exposed, following the project convention of using system tokens directly and only creating component properties where customization is genuinely needed:

| Token | Default Value | Purpose |
|---|---|---|
| `--ez-dialog-container-shape` | `var(--md-sys-shape-corner-extra-large, 28px)` | Override container corner radius |

### System Token References

| Token | Description |
|---|---|
| `--md-sys-color-surface-container-high` | Container fill |
| `--md-sys-color-on-surface` | Headline & primary text |
| `--md-sys-color-on-surface-variant` | Supporting/secondary text |
| `--md-sys-color-secondary` | Icon color |
| `--md-sys-color-primary` | Action button label |
| `--md-sys-color-scrim` | Backdrop overlay |
| `--md-sys-color-outline` | Scroll divider |
| `--md-sys-shape-corner-extra-large` | Container corner radius (28px) |
| `--md-sys-elevation-level3` | Container shadow |
| `--md-sys-typescale-headline-small-*` | Headline typography |
| `--md-sys-typescale-body-medium-*` | Body text typography |
| `--md-sys-motion-easing-emphasized-decelerate` | Open animation easing |
| `--md-sys-motion-easing-emphasized-accelerate` | Close animation easing |
| `--md-sys-motion-duration-medium2` | Open animation duration (300ms) |
| `--md-sys-motion-duration-short4` | Close animation duration (200ms) |

---

## Actions

- Only **text buttons** are used for dialog actions (`.ez-btn` without `.ez-filled`, `.ez-outlined`, etc.).
- Buttons are **right-aligned** by default.
- **Affirmative** action is placed on the right; **dismissive** on the left.
- When button labels are too long for side-by-side layout, use **stacked buttons** via `.ez-stacked` class on `.ez-dialog__actions` (affirmative on top).
- Dismissive actions are **never disabled**; affirmative may be disabled until a required choice is made.

### Button Measurements

| Property | Value |
|---|---|
| Button height | `36dp` |
| Touchable target height | `48dp` |
| Min button width | `64dp` |
| Internal button padding | `8dp` |
| Gap between buttons (side-by-side) | `8dp` |
| Padding between text and touch target | `24dp` |
| Padding below touch target to dialog edge | `8dp` |

---

## Scrollable Content

- When content scrolls, a **divider stroke** (`1dp`) separates the content area from the actions area.
- A divider also appears below the headline when content has scrolled.
- Divider color: `--md-sys-color-outline`
- Use `.ez-dialog__divider` elements with the `.active` class (toggled via JS scroll listener) to show/hide dividers.

---

## Accessibility

- Dialogs are labelled by their headline via `aria-labelledby`. If no headline is present, add `aria-label` to the `<dialog>`.
- For alerts requiring user response, add `role="alertdialog"` to the `<dialog>` element.
- Focus is **trapped** within the dialog while it is open (native `<dialog>` behavior with `showModal()`).
- The **scrim** click and **Escape key** dismiss the dialog (native `<dialog>` behavior, fires `cancel` event).
- Dialogs retain focus until dismissed or a required action is taken.
- Add `autofocus` attribute to the element that should receive focus when the dialog opens.

---

## Motion / Animation

- Dialog **opens** with a scale-up animation from `80%` → `100%` with a fade-in.
- Dialog **closes** with a fade-out.
- Open easing: `--md-sys-motion-easing-emphasized-decelerate` (`cubic-bezier(0.05, 0.7, 0.1, 1.0)`)
- Close easing: `--md-sys-motion-easing-emphasized-accelerate` (`cubic-bezier(0.3, 0.0, 0.8, 0.15)`)
- Open duration: `--md-sys-motion-duration-medium2` (`300ms`)
- Close duration: `--md-sys-motion-duration-short4` (`200ms`)
- Full-screen dialog opens with a **slide-up** animation instead of scale.
- Use CSS `@starting-style` for entry animations on the `[open]` attribute.
- Add `prefers-reduced-motion` media query to skip animations when user prefers reduced motion.

---

## Responsive Behavior

The dialog uses a **CSS Container Query** to automatically switch to the full-screen layout on mobile-sized viewports:

```css
@container (max-width: 600px) {
  .ez-dialog { /* fullscreen styles applied automatically */ }
}
```

This means:
- On viewports `≤600px`, the dialog fills the screen with `0dp` corner radius, no elevation shadow.
- On larger viewports, the standard centered dialog with `28dp` corners is shown.
- The `.ez-dialog--fullscreen` class can still be used to force fullscreen at any viewport size.

---

## CSS Class API

### Base Classes

| Class | Element | Description |
|---|---|---|
| `.ez-dialog` | `<dialog>` | Base dialog container styles |
| `.ez-dialog--fullscreen` | `<dialog>` | Forces full-screen variant at any viewport size |
| `.ez-dialog__icon` | `<div>` | Optional icon above headline (24dp, centered) |
| `.ez-dialog__headline` | `<h2>` etc. | Dialog title (headline-small typescale) |
| `.ez-dialog__content` | `<div>` or `<form>` | Main body / scrollable content area |
| `.ez-dialog__divider` | `<hr>` | Scroll separator (hidden by default, shown with `.active`) |
| `.ez-dialog__actions` | `<div>` | Action button container (flex, right-aligned) |

### Full-Screen Specific Classes

| Class | Element | Description |
|---|---|---|
| `.ez-dialog__header` | `<div>` | Header bar (56dp height, flex row) |
| `.ez-dialog__close` | `<button>` | Close affordance icon button |
| `.ez-dialog__confirm` | `<button>` | Confirm action text button in header |

### Modifier Classes

| Class | Description |
|---|---|
| `.ez-stacked` | On `.ez-dialog__actions` — stacks buttons vertically for long labels |
| `.active` | On `.ez-dialog__divider` — makes the divider visible |

---

## Native `<dialog>` API Reference

The native `<dialog>` element provides these built-in capabilities (no custom JavaScript needed):

### Methods

| Method | Description |
|---|---|
| `showModal()` | Opens dialog as modal with backdrop, focus trap, and top-layer |
| `close(returnValue?)` | Closes dialog, optionally sets `returnValue` |

### Properties

| Property | Type | Description |
|---|---|---|
| `open` | `boolean` | Read-only attribute indicating open state |
| `returnValue` | `string` | Value set when closed (identifies which button closed it) |

### Events

| Event | Bubbles | Composed | Description |
|---|---|---|---|
| `close` | No | No | Fired when the dialog is closed |
| `cancel` | Yes | No | Fired when dismissed via Escape key |

---

## Usage Example (Basic Dialog)

```html
<dialog class="ez-dialog" id="my-dialog" aria-labelledby="dialog-title">
  <div class="ez-dialog__icon">
    <span class="material-symbols-rounded">info</span>
  </div>
  <h2 class="ez-dialog__headline" id="dialog-title">Dialog title</h2>
  <form class="ez-dialog__content" id="dialog-form" method="dialog">
    Supporting text goes here.
  </form>
  <div class="ez-dialog__actions">
    <button class="ez-btn ez-theme-primary" form="dialog-form" value="cancel">
      <ez-ripple></ez-ripple>
      Cancel
    </button>
    <button class="ez-btn ez-theme-primary" form="dialog-form" value="confirm">
      <ez-ripple></ez-ripple>
      Confirm
    </button>
  </div>
</dialog>

<script>
  const dialog = document.getElementById('my-dialog');

  // Open
  dialog.showModal();

  // Listen for close
  dialog.addEventListener('close', () => {
    console.log('Closed with:', dialog.returnValue);
  });
</script>
```

## Usage Example (Full-Screen Dialog)

```html
<dialog class="ez-dialog ez-dialog--fullscreen" id="fullscreen-dialog" aria-labelledby="fs-title">
  <div class="ez-dialog__header">
    <button class="ez-dialog__close ez-btn ez-icon-btn" type="button"
            onclick="this.closest('dialog').close()">
      <ez-ripple></ez-ripple>
      <span class="material-symbols-rounded">close</span>
    </button>
    <h2 class="ez-dialog__headline" id="fs-title">New event</h2>
    <button class="ez-dialog__confirm ez-btn ez-theme-primary" type="button"
            onclick="this.closest('dialog').close('save')">
      Save
    </button>
  </div>
  <hr class="ez-dialog__divider" />
  <div class="ez-dialog__content">
    <!-- Complex form content -->
  </div>
</dialog>
```

---

## Theming Example

```css
/* Override container shape */
.ez-dialog {
  --ez-dialog-container-shape: 16px;
}

/* Or override system tokens globally */
:root {
  --md-sys-color-surface-container-high: #ece6f0;
  --md-sys-color-on-surface: #1c1b1f;
  --md-sys-color-on-surface-variant: #49454f;
}
```

---

*Last updated: March 2026 — based on Material Design 3 specification, material-web component source, and project CSS conventions.*
