/**
 * Styles for the `<ez-button>` custom element.
 *
 * These are the existing button CSS modules adopted verbatim as constructable
 * stylesheets for use inside Shadow DOM. The selectors match elements within
 * the shadow tree directly (e.g., `.ez-filled` matches the internal
 * `<button class="ez-btn ez-filled">`).
 *
 * @todo Update this to either use *.scss imports, and/or use import assertions to reuse the existing css styles.
 */

const _hostStyles = new CSSStyleSheet();

_hostStyles.replaceSync(`
  :host {
    display: inline-flex;
  }
  :host,
  :host * {
    box-sizing: border-box;
  }
  :host([hidden]) {
    display: none;
  }
`);

const _buttonStyles = new CSSStyleSheet();

_buttonStyles.replaceSync(`
/**
 * Base
 * ---------------- */
.ez-btn,
.ez-button {
  --md-btn-container-height: 40px;
  --md-btn-container-shape: var(--md-sys-shape-corner-full, calc(infinity * 1px));

  --_btn-container-height: var(--md-btn-container-height);
  --_btn-container-shape: calc(var(--_btn-container-height, 100%) / 2);
  --_btn-scale: 1.08; /* Used for selected/pressed state scaling */
  --_btn-icon-size: 20px;
  /*--_btn-shift: calc(var(--_btn-icon-size / 2) - 1px);*/
  --_btn-border-width: var(--ez-border-width);

  /* Unchanging styles */
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  text-decoration: none;
  text-align: center;
  user-select: none;

  /* Direct CSS values */
  min-height: var(--_btn-container-height);
  border-radius: var(--_btn-container-shape);
  border: none;
  background: ButtonFace;
  color: ButtonText;
  box-shadow: none;
  font-family: var(--md-sys-typescale-label-large-font, inherit), sans-serif;
  font-weight: var(--md-sys-typescale-label-large-weight, bold);
  /*transform: translateX(var(--_btn-shift)) scaleX(var(--_btn-scale, 1));*/

  /* Ensure good performance for transform and border-radius changes */
  will-change: transform, border-radius;

  transition:
    border-color var(--md-sys-motion-duration-short4, 200ms) var(--md-sys-motion-easing-expressive-default-effects, cubic-bezier(0.34, 0.80, 0.34, 1.00)),
    color var(--md-sys-motion-duration-short4, 200ms) var(--md-sys-motion-easing-expressive-default-effects, cubic-bezier(0.34, 0.80, 0.34, 1.00)),
    background-color var(--md-sys-motion-duration-short4, 200ms) var(--md-sys-motion-easing-expressive-default-effects, cubic-bezier(0.34, 0.80, 0.34, 1.00)),
    opacity var(--md-sys-motion-duration-short4, 200ms) var(--md-sys-motion-easing-expressive-default-effects, cubic-bezier(0.34, 0.80, 0.34, 1.00)),
    box-shadow var(--md-sys-motion-duration-short4, 200ms) var(--md-sys-motion-easing-expressive-default-effects, cubic-bezier(0.34, 0.80, 0.34, 1.00)),
    transform var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00));
}

.ez-btn-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  transform: scale(var(--inv-x, 1), var(--inv-y, 1));
  will-change: transform;
  transition: transform var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00));
  pointer-events: none;
}

.ez-btn-bg {
  position: absolute;
  inset: 0;
  background-color: var(--md-sys-color-primary-container);
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 300ms ease,
    transform var(--md-sys-motion-duration-long) var(--md-sys-motion-easing-spring);
  border-radius: inherit;
}

:where(
  .ez-btn,
  .ez-button
):not(:disabled):hover {
  cursor: pointer;
}

/*
 * Contents
 * -------------------- */
/**
 * Setup \`ez-ripple\` element for animations.
 */
.ez-btn, .ez-button,
:where(.ez-btn, .ez-button) > *:not(ez-ripple, ez-button-surface) {
  position: relative;
}

:where(.ez-btn, .ez-button) > *:not(ez-ripple) {
  z-index: 3;
}

:where(.ez-btn, .ez-button) > ez-ripple {
  z-index: 1;
}

:where(.ez-btn, .ez-button):not(.ez-outlined) {
  border: none;
}

/**
 * Contained icon sizing
 * ------------------- */
:where(.ez-btn, .ez-button) > .md-icon {
  font-size: var(--_btn-icon-size);
  width: var(--_btn-icon-size);
  height: var(--_btn-icon-size);
}

/**
 * Selected-state background
 * ------------------- */
:where(.ez-btn, .ez-button) > .ez-btn-bg {
  position: absolute;
  inset: 0;
  /*opacity: 0;*/
  /*transform: scale(0.9);*/
  transition:
    opacity var(--md-sys-motion-duration-short4, 200ms) ease,
    transform var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00));
}

:where(.ez-btn, .ez-button):is([aria-pressed="true"], .ez-selected, :has(input:checked)) > .ez-btn-bg {
  opacity: 1;
  transform: scale(1);
}

/**
 * Content wrapper
 * ------------------- */
:where(.ez-btn, .ez-button) > .ez-btn-content {
  display: flex;
  align-items: center;
  gap: 8px;
  position: relative;
  white-space: nowrap;
  pointer-events: none;
  transform: scaleX(var(--_btn-inv-x, 1));
  will-change: transform;
  transition: transform var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00));
}

/** Label element support (for radio/checkbox button groups support)
 * ------------------- */
:where(.ez-btn, .ez-button):is(label) {
  display: inline-block;

  &:has(:focus-visible) {
    outline: 3px solid var(--ez-focus-ring-color);
    outline-offset: 2px;
  }
}

:where(.ez-btn, .ez-button):is(label) :where(input[type="checkbox"], input[type="radio"]) {
  position: absolute;
  appearance: none;
  display: block;
  inset: 0;
  width: 100%;
  height: 100%;

  &, &:checked {
    background: transparent;
    border: none;
  }
}

/** Ripple styles **/
:where(.ez-btn, .ez-button):not(.ez-filled) ez-ripple::after,
:where(.ez-btn, .ez-button):not(.ez-filled) ez-ripple::before {
  background: var(--md-color-theme);
}

/*
 * Sizes — M3 Expressive button scale
 * ------------------- */

/* XSmall — 32px container */
:where(.ez-btn, .ez-button).ez-xsmall {
  --_btn-container-height: 32px;
  --_btn-icon-size: 20px;
  padding-block: 0;
  padding-inline: 0.75rem;
  gap: 0.5rem;
  font-size: var(--md-sys-typescale-label-large-size, 1.16667rem);
  font-weight: var(--md-sys-typescale-label-large-weight, 500);
  letter-spacing: var(--md-sys-typescale-label-large-tracking, 0rem);
  line-height: var(--md-sys-typescale-label-large-line-height, 1.66667rem);
  min-height: var(--_btn-container-height);
}

/* Small (default) — 40px container */
:where(.ez-btn, .ez-button):is(
  :not(.ez-xsmall, .ez-small, .ez-medium, .ez-large, .ez-xlarge, .ez-util), .ez-small
) {
  --_btn-container-height: 40px;
  --_btn-icon-size: 20px;
  padding-block: 0;
  padding-inline: 1rem;
  gap: 0.5rem;
  font-size: var(--md-sys-typescale-label-large-size, 1.16667rem);
  font-weight: var(--md-sys-typescale-label-large-weight, 500);
  letter-spacing: var(--md-sys-typescale-label-large-tracking, 0rem);
  line-height: var(--md-sys-typescale-label-large-line-height, 1.66667rem);
  min-height: var(--_btn-container-height);
}

/* Util (legacy escape hatch) */
:where(.ez-btn, .ez-button).ez-util {
  --_btn-container-height: 18px;
  --_btn-container-shape: calc(var(--_btn-container-height) / 2);

  font-size: var(--ez-12px);
  line-height: var(--ez-12px);
  padding: var(--ez-3px);
}

/* Medium — 56px container */
:where(.ez-btn, .ez-button).ez-medium {
  --_btn-container-height: 56px;
  --_btn-icon-size: 24px;
  padding-block: 0;
  padding-inline: 1.5rem;
  gap: 0.5rem;
  font-size: var(--md-sys-typescale-title-medium-size, 1.33333rem);
  font-weight: var(--md-sys-typescale-title-medium-weight, 500);
  letter-spacing: var(--md-sys-typescale-title-medium-tracking, 0rem);
  line-height: var(--md-sys-typescale-title-medium-line-height, 2rem);
  min-height: var(--_btn-container-height);
}

/* Large — 96px container */
:where(.ez-btn, .ez-button).ez-large {
  --_btn-container-height: 96px;
  --_btn-icon-size: 32px;
  padding-block: 0;
  padding-inline: 3rem;
  gap: 0.75rem;
  font-size: var(--md-sys-typescale-headline-small-size, 2rem);
  font-weight: var(--md-sys-typescale-headline-small-weight, 400);
  letter-spacing: var(--md-sys-typescale-headline-small-tracking, 0rem);
  line-height: var(--md-sys-typescale-headline-small-line-height, 2.66667rem);
  min-height: var(--_btn-container-height);
}

/* XLarge — 136px container */
:where(.ez-btn, .ez-button).ez-xlarge {
  --_btn-container-height: 136px;
  --_btn-icon-size: 40px;
  padding-block: 0;
  padding-inline: 4rem;
  gap: 1rem;
  font-size: var(--md-sys-typescale-headline-large-size, 2.66667rem);
  font-weight: var(--md-sys-typescale-headline-large-weight, 400);
  letter-spacing: var(--md-sys-typescale-headline-large-tracking, 0rem);
  line-height: var(--md-sys-typescale-headline-large-line-height, 3.33333rem);
  min-height: var(--_btn-container-height);
}

/*
 * Filled
 * -------------------- */

/** Ripple styles **/
:where(.ez-btn, .ez-button).ez-filled ez-ripple::after,
:where(.ez-btn, .ez-button).ez-filled ez-ripple::before {
  --ez-ripple-hover-opacity: 0.55;
  --ez-ripple-active-opacity: 0.21;

  background: var(--md-color-on-theme);
}

:where(.ez-btn, .ez-button).ez-filled {
  background-color: var(--md-color-theme, ButtonFace);
  border-color: var(--md-color-theme, ButtonText);
  color: var(--md-color-on-theme, ButtonText);
}

:where(.ez-btn, .ez-button).ez-filled:focus-visible {
  --ez-focus-ring-color: var(--md-color-theme, ButtonText);

  border-color: var(--md-color-theme, ButtonText);
}

/**
 * MD3 Variants — Outlined
 * -------------------- */

/* Outlined */
:where(.ez-btn, .ez-button).ez-outlined {
  --_btn-border-width: var(--ez-border-width, 1px);

  background: transparent;
  color: var(--md-color-theme, ButtonText);
  border: var(--_btn-border-width) solid var(--md-color-theme, ButtonBorder);
}

/**
 * Padding adjustments for 'outlined' button variant.
 */

/** For xsmall size **/
:where(.ez-btn, .ez-button).ez-outlined.ez-xsmall {
  padding-inline: calc(0.75rem - var(--_btn-border-width));
}

/** For small/unsized size **/
:where(.ez-btn, .ez-button).ez-outlined:where(
  .ez-small,
   :not(.ez-xsmall, .ez-small, .ez-medium, .ez-large, .ez-xlarge, .ez-util)
) {
  padding-inline: calc(1rem - var(--_btn-border-width));
}

/** For util size **/
:where(.ez-btn, .ez-button).ez-outlined.ez-util {
  padding: calc(var(--ez-3px) - var(--_btn-border-width));
}

/** For medium size **/
:where(.ez-btn, .ez-button).ez-outlined.ez-medium {
  padding-inline: calc(1.5rem - var(--_btn-border-width));
}

/** For large size — 2px outline **/
:where(.ez-btn, .ez-button).ez-outlined.ez-large {
  --_btn-border-width: 2px;
  padding-inline: calc(3rem - var(--_btn-border-width));
}

/** For xlarge size — 3px outline **/
:where(.ez-btn, .ez-button).ez-outlined.ez-xlarge {
  --_btn-border-width: 3px;
  padding-inline: calc(4rem - var(--_btn-border-width));
}

/**
 * MD3 Variants — Elevated
 * -------------------- */

/* Elevated */
:where(.ez-btn, .ez-button).ez-elevated {
  background: var(--md-sys-color-surface-container-low, ButtonFace);
  color: var(--md-color-theme, var(--md-sys-color-primary, ButtonText));
  box-shadow: var(--md-sys-elevation-level1, 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%));
}

:where(.ez-btn, .ez-button).ez-elevated:not(:disabled):hover {
  box-shadow: var(--md-sys-elevation-level3, 0 1px 2px 0 rgb(0 0 0 / 30%), 0 2px 6px 2px rgb(0 0 0 / 15%));
}

:where(.ez-btn, .ez-button).ez-elevated:not(:disabled):active {
  box-shadow: var(--md-sys-elevation-level2, 0 1px 2px 0 rgb(0 0 0 / 30%), 0 2px 6px 2px rgb(0 0 0 / 15%));
}

/**
 * MD3 Variants — Filled Tonal
 * -------------------- */

/* Filled Tonal */
:where(.ez-btn, .ez-button).ez-tonal {
  background: var(--md-color-theme-container, var(--md-sys-color-secondary-container, ButtonFace));
  color: var(--md-color-on-theme-container, var(--md-sys-color-on-secondary-container, ButtonText));
}

:where(.ez-btn, .ez-button).ez-tonal:not(:disabled):hover {
  box-shadow: var(--md-sys-elevation-level1, 0 1px 2px 0 rgb(0 0 0 / 30%), 0 1px 3px 1px rgb(0 0 0 / 15%));
}

/**
 * MD3 Variants — Text (E.g., Not "Filled" variant base)
 * -------------------- */
:where(.ez-btn, .ez-button):not(.ez-filled) {
  background: transparent;
  color: var(--md-color-theme, ButtonText);
}

:where(.ez-btn, .ez-button):not(.ez-filled):hover {
  color: color-mix(in oklch, var(--md-color-theme), #000 13%);
}

:where(.ez-btn, .ez-button):not(.ez-filled):has(> [rippleactive]),
:where(.ez-btn, .ez-button):not(.ez-filled):active {
  color: color-mix(in oklch, var(--md-color-theme), #000 21%);
}

/**
 * Disabled state
 * -------------------- */
:where(.ez-btn, .ez-button):disabled {
  opacity: 0.55;
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}

/**
 * Icon button — requires \`.ez-btn\` as a co-class.
 * Usage: \`<button class="ez-btn ez-icon-btn">…</button>\`
 * -------------------- */
.ez-btn.ez-icon-btn {
  --_icon-btn-container-size: 40px;
  --_icon-btn-container-shape: calc(var(--_icon-btn-container-size) / 2);

  width: var(--_icon-btn-container-size);
  height: var(--_icon-btn-container-size);
  min-height: var(--_icon-btn-container-size);
  padding: var(--md-sys-spacing-2, 0.5rem);
  border-radius: var(--_icon-btn-container-shape);
}

/**
 * Active / Selected shape morph
 * -------------------- */

@keyframes ez-btn-pressed-morph {
  to {
    border-radius: var(--_btn-pressed-shape, 12px);
  }
}

@keyframes ez-btn-pressed-unmorph {
  from {
    border-radius: var(--_btn-pressed-shape, 12px);
  }
}

@keyframes ez-btn-selected-morph {
  to {
    border-radius: var(--_btn-selected-shape, 16px);
  }
}

@keyframes ez-btn-selected-unmorph {
  from {
    border-radius: var(--_btn-selected-shape, 16px);
  }
}

/* Default state — reverse morph (dual of active animation) */
:where(.ez-btn, .ez-button):not(:disabled) {
  animation: ez-btn-pressed-unmorph var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00));
}

/* Round (default) buttons → squarish corners when pressed */
:where(.ez-btn, .ez-button):not(:disabled):active {
  animation: ez-btn-pressed-morph var(--md-sys-motion-duration-medium2, 300ms) var(--md-sys-motion-easing-expressive-default-spatial, cubic-bezier(0.38, 1.21, 0.22, 1.00)) forwards;
}

:where(.ez-btn, .ez-button):not(:disabled):active:is(.ez-util, .ez-xsmall, .ez-small) {
  --_btn-pressed-shape: 8px;
}

:where(.ez-btn, .ez-button):not(:disabled):active:not(.ez-util, .ez-xsmall, .ez-small, .ez-large, .ez-xlarge) {
  --_btn-pressed-shape: 12px;
}

:where(.ez-btn, .ez-button):not(:disabled):active:is(.ez-large, .ez-xlarge) {
  --_btn-pressed-shape: 16px;
}

`);

const _rippleStyles = new CSSStyleSheet();

_rippleStyles.replaceSync(`
/**
 * How it works:
 * \`::before\` pseudo selector gets designated as the hover/\`:focus-visible\` surface,
 *  and \`::after\` pseudo selector gets designated as the mousedown/click surface.
 * The \`::before\` hover transition only happens via \`transition\`,
 * The \`:active\` animation happens via \`animation\`.
 */

@keyframes ripple-in-behavior {
  0% {
    transform: translate(var(--ez-ripple-x), var(--ez-ripple-y)) scale(var(--ez-ripple-inactive-scale));
    opacity: var(--ez-ripple-active-opacity-end);
  }

  55% {
    transform: translate(var(--ez-ripple-x), var(--ez-ripple-y)) scale(var(--ez-ripple-active-scale));
    opacity: var(--ez-ripple-active-opacity);
  }

  100% {
    transform: translate(var(--ez-ripple-x), var(--ez-ripple-y)) scale(var(--ez-ripple-active-scale));
    opacity: var(--ez-ripple-active-opacity-end);
  }
}

@keyframes ripple-out-behavior {
  0% {
    transform: translate(var(--ez-ripple-x), var(--ez-ripple-y)) scale(var(--ez-ripple-active-scale));
    opacity: var(--ez-ripple-active-opacity-end);
  }

  100% {
    transform: translate(var(--ez-ripple-x), var(--ez-ripple-y)) scale(var(--ez-ripple-active-scale));
    opacity: var(--ez-ripple-inactive-opacity);
  }
}

ez-ripple {
  --ez-ripple-x: 50%;
  --ez-ripple-y: 50%;
  --ez-ripple-opacity: 0.08;
  --ez-ripple-active-opacity: 0.16;
  --ez-ripple-active-opacity-end: 0.1;
  --ez-ripple-inactive-opacity: 0;
  --ez-ripple-active-scale: 1;
  --ez-ripple-inactive-scale: 0;
  --ez-ripple-speed: 0.21s;
  --ez-ripple-active-speed: 0.55s;
  --ez-ripple-active-speed-out: 0.21s;

  position: relative;
  display: inline-grid;
  transition: background var(--ez-ripple-speed),
  background-color var(--ez-ripple-speed);
}

ez-ripple,
*:has(> ez-ripple:empty) {
  overflow: hidden;
}

ez-ripple:empty {
  --ez-ripple-diameter: 200%;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

ez-ripple:has(:disabled) {
  pointer-events: none;
}

ez-ripple:not(:empty) {
  --ez-ripple-diameter: 100%;

  padding: 0.5rem;
  border-radius: 50%;
}

ez-ripple:not(:empty) > :first-child {
  place-self: center;
}

ez-ripple:not(:empty):hover {
  background: oklch(from var(--md-color-on-theme) l c h / 10%);
}

ez-ripple::after,
ez-ripple::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "";
  background: var(--md-color-theme);
  pointer-events: none;
  transform-origin: center;
  transition: opacity var(--ez-ripple-speed),
  background var(--ez-ripple-speed),
  background-color var(--ez-ripple-speed),
  transform var(--ez-ripple-speed) ease-out;
  width: var(--ez-ripple-diameter);
  height: var(--ez-ripple-diameter);
  border-radius: 50%;
}

ez-ripple::before {
  transform: translate(
    var(--ez-ripple-x),
    var(--ez-ripple-y)
  ) scale(
    var(--ez-ripple-inactive-scale)
  );
  opacity: var(--ez-ripple-inactive-opacity);
  z-index: 1;
}

ez-ripple:where(
    [rippleactive]
  )::before,
ez-ripple:has(
    :hover,
    :focus,
    :active
  )::before,
*:has(> ez-ripple:empty):where(:hover, :active, :focus) > ez-ripple:empty::before {
  transform: translate(
    var(--ez-ripple-x),
    var(--ez-ripple-y)
  ) scale(
    var(--ez-ripple-active-scale)
  );
  opacity: var(--ez-ripple-opacity);
}

ez-ripple::after {
  z-index: 2;
}

/**
 * "active" out animation.
 */
ez-ripple:not([rippleactive])::after {
  animation: var(--ez-ripple-active-speed-out) ripple-out-behavior ease-in-out;
  animation-fill-mode: forwards;
}

/**
 * "active" in animation.
 */
ez-ripple[rippleactive]::after,
ez-ripple:has(:active, :hover:active)::after,
*:has(> ez-ripple:empty):is(:active, :hover:active, :has(> ez-ripple:empty[rippleactive])) > ez-ripple:empty::after {
  animation: var(--ez-ripple-active-speed) ripple-in-behavior ease-in-out;
  animation-fill-mode: forwards;
}
`);

const _themeStyles = new CSSStyleSheet();

_themeStyles.replaceSync(`
/**
 * themes.css
 *
 * Material Design 3 theme utility classes.
 *
 * Each \`.md-theme-{family}\` / \`.ez-theme-{family}\` class maps generic
 * \`--md-color-theme-*\` custom properties to the family-specific
 * \`--md-sys-color-*\` or \`--md-extended-color-*\` tokens defined in
 * the active theme (e.g. material/themes/light.css).
 *
 * Components can use the generic properties so their colour automatically
 * follows whichever theme class is applied to a parent element.
 */

/* ---- Standard colour roles ---- */

.md-theme-primary,
.ez-theme-primary {
  --md-color-theme: var(--md-sys-color-primary);
  --md-color-on-theme: var(--md-sys-color-on-primary);
  --md-color-theme-container: var(--md-sys-color-primary-container);
  --md-color-on-theme-container: var(--md-sys-color-on-primary-container);
}

.md-theme-secondary,
.ez-theme-secondary {
  --md-color-theme: var(--md-sys-color-secondary);
  --md-color-on-theme: var(--md-sys-color-on-secondary);
  --md-color-theme-container: var(--md-sys-color-secondary-container);
  --md-color-on-theme-container: var(--md-sys-color-on-secondary-container);
}

.md-theme-tertiary,
.ez-theme-tertiary {
  --md-color-theme: var(--md-sys-color-tertiary);
  --md-color-on-theme: var(--md-sys-color-on-tertiary);
  --md-color-theme-container: var(--md-sys-color-tertiary-container);
  --md-color-on-theme-container: var(--md-sys-color-on-tertiary-container);
}

.md-theme-error,
.ez-theme-error {
  --md-color-theme: var(--md-sys-color-error);
  --md-color-on-theme: var(--md-sys-color-on-error);
  --md-color-theme-container: var(--md-sys-color-error-container);
  --md-color-on-theme-container: var(--md-sys-color-on-error-container);
}

/* ---- Extended colour roles ---- */

.md-theme-success,
.ez-theme-success {
  --md-color-theme: var(--md-extended-color-success-color);
  --md-color-on-theme: var(--md-extended-color-success-on-color);
  --md-color-theme-container: var(--md-extended-color-success-color-container);
  --md-color-on-theme-container: var(--md-extended-color-success-on-color-container);
}

.md-theme-info,
.ez-theme-info {
  --md-color-theme: var(--md-extended-color-info-color);
  --md-color-on-theme: var(--md-extended-color-info-on-color);
  --md-color-theme-container: var(--md-extended-color-info-color-container);
  --md-color-on-theme-container: var(--md-extended-color-info-on-color-container);
}

.md-theme-warning,
.ez-theme-warning {
  --md-color-theme: var(--md-extended-color-warning-color);
  --md-color-on-theme: var(--md-extended-color-warning-on-color);
  --md-color-theme-container: var(--md-extended-color-warning-color-container);
  --md-color-on-theme-container: var(--md-extended-color-warning-on-color-container);
}

/* ---- Surface ---- */

.md-theme-surface,
.ez-theme-surface {
  --md-color-theme: var(--md-sys-color-surface);
  --md-color-on-theme: var(--md-sys-color-on-surface);
  --md-color-theme-container: var(--md-sys-color-surface-container);
  --md-color-on-theme-container: var(--md-sys-color-on-surface);
}

/* ---- Dark scheme: swap container ↔ non-container AND on- ↔ non-on- ---- */

@media (prefers-color-scheme: dark) {
  /* Standard colour roles */

  .md-theme-primary,
  .ez-theme-primary {
    --md-color-theme: var(--md-sys-color-on-primary-container);
    --md-color-on-theme: var(--md-sys-color-primary-container);
    --md-color-theme-container: var(--md-sys-color-on-primary);
    --md-color-on-theme-container: var(--md-sys-color-primary);
  }

  .md-theme-secondary,
  .ez-theme-secondary {
    --md-color-theme: var(--md-sys-color-on-secondary-container);
    --md-color-on-theme: var(--md-sys-color-secondary-container);
    --md-color-theme-container: var(--md-sys-color-on-secondary);
    --md-color-on-theme-container: var(--md-sys-color-secondary);
  }

  .md-theme-tertiary,
  .ez-theme-tertiary {
    --md-color-theme: var(--md-sys-color-on-tertiary-container);
    --md-color-on-theme: var(--md-sys-color-tertiary-container);
    --md-color-theme-container: var(--md-sys-color-on-tertiary);
    --md-color-on-theme-container: var(--md-sys-color-tertiary);
  }

  .md-theme-error,
  .ez-theme-error {
    --md-color-theme: var(--md-sys-color-on-error-container);
    --md-color-on-theme: var(--md-sys-color-error-container);
    --md-color-theme-container: var(--md-sys-color-on-error);
    --md-color-on-theme-container: var(--md-sys-color-error);
  }

  /* Extended colour roles */

  .md-theme-success,
  .ez-theme-success {
    --md-color-theme: var(--md-extended-color-success-on-color-container);
    --md-color-on-theme: var(--md-extended-color-success-color-container);
    --md-color-theme-container: var(--md-extended-color-success-on-color);
    --md-color-on-theme-container: var(--md-extended-color-success-color);
  }

  .md-theme-info,
  .ez-theme-info {
    --md-color-theme: var(--md-extended-color-info-on-color-container);
    --md-color-on-theme: var(--md-extended-color-info-color-container);
    --md-color-theme-container: var(--md-extended-color-info-on-color);
    --md-color-on-theme-container: var(--md-extended-color-info-color);
  }

  .md-theme-warning,
  .ez-theme-warning {
    --md-color-theme: var(--md-extended-color-warning-on-color-container);
    --md-color-on-theme: var(--md-extended-color-warning-color-container);
    --md-color-theme-container: var(--md-extended-color-warning-on-color);
    --md-color-on-theme-container: var(--md-extended-color-warning-color);
  }

  /* Surface */

  .md-theme-surface,
  .ez-theme-surface {
    --md-color-theme: var(--md-sys-color-on-surface);
    --md-color-on-theme: var(--md-sys-color-surface-container);
    --md-color-theme-container: var(--md-sys-color-on-surface);
    --md-color-on-theme-container: var(--md-sys-color-surface);
  }
}
`);

export {
  _hostStyles as hostStyles,
  _buttonStyles as buttonStyles,
  _rippleStyles as rippleStyles,
  _themeStyles as themeStyles,
};

export const allStyles = [
  _hostStyles,
  _buttonStyles,
  _rippleStyles,
  _themeStyles,
];
