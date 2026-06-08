# `ez-field` — Current-State Analysis

> Generated: 2026-06-08

## Overview

`<ez-field>` is a **Lit-based Custom Element** that provides **validation-aware field wrapping** with dynamic error/help text propagation. It is a **behavioral layer** (shadow DOM slots + validation logic) that pairs with CSS-only `.ez-field` / `.ez-textfield` classes for visual styling.

## Files

| File | Purpose |
|---|---|
| `ez-field.ts` | LitElement implementation (~280 lines) |
| `ez-field.scss` | Inline shadow-DOM styles (lightweight layout) |
| `ez-field.stories.ts` | Storybook stories + interactive tests (~470 lines) |
| `css-only-ez-field.stories.ts` | CSS-only `.ez-field` / `.ez-textfield` demos (~210 lines) |
| `register.ts` | `registerCustomElement()` call |
| `index.ts` | Re-exports barrel |
| `README.md` | Usage documentation |

## API Surface

### Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `selectors` | `string` | `input:not([type="hidden"]), textarea, select` | CSS selector for tracked inputs |
| `error` (attr=`error`) | `string` | `''` | Alias for `validationMessage` — programmatically set/read error text |
| `validationMessage` | `string` | `''` | Current error message shown in `#error` slot |
| `validateOnChange` | `boolean` | `true` | Run validation on `change` events |
| `validateOnInput` | `boolean` | `false` | Run validation on `input` events |
| `validityMessaging` | `ValidityMessaging` | — | Custom messages per `ValidityState` key |
| `validate` | `(input) => string \| undefined` | — | Custom validator callback |
| `_nested` | `boolean` | `false` | Auto-detected; suppresses error slot if nested inside parent `ez-field` |

### Shadow DOM Parts / Slots

- `#leading` (part=`leading`) — Leading content/icons
- `default slot` (part=`center` wrapper) — Main input content
- `#help` (part=`help`) — Help text
- `#error` (part=`error`) — Error message (renders `validationMessage` as fallback content)
- `#content` (part=`content`) — Custom supplementary content

## Validation Pipeline

Three-tier validation system (priority order):

1. **`validate` callback** (highest priority) — Custom function called per input; if it returns a string, that becomes the error message.
2. **`validityMessaging` map** — Maps `ValidityState` keys (e.g., `valueMissing`, `typeMismatch`) to custom messages. Used when no `validate` function returns a result.
3. **Native `validationMessage`** — Browser's built-in message, used as fallback when neither of the above is configured.

### Events Listened

- `invalid`, `input`, `change` (on the component itself)
- `invalid` on each tracked input (via `selectors`)
- `reset` on the closest `<form>` ancestor

## Key Behaviors

- **Nested field support**: `_nested` flag auto-detects when inside a parent `ez-field` and hides the duplicate error slot (useful for radio groups).
- **Form reset**: Clears all custom validity and `validationMessage` on form `reset`.
- **Error slot fallback content**: `validationMessage` is rendered as light DOM fallback inside `<slot name="error">`, so it shows without needing slotted content.
- **Dynamic selectors**: Changing `selectors` re-queries inputs and rebinds event listeners.

## Shadow DOM CSS

Minimal — only handles internal flex layout (`ez-field`, `ez-field-center`) and styling of error/help/content parts. Uses:

- `--md-sys-color-error`, `--md-sys-color-on-surface-variant` (with fallbacks)
- `@extend %md-typescale-body-small` via component-prelude
- Empty parts hidden via `:empty` selector

## CSS-Only Counterpart

A full CSS-only `.ez-field` system exists in `scss/modules/fieldset/field.scss` supporting:

- `.ez-field--vertical` layout modifier
- `.ez-field-leading`, `.ez-field-trailing`, `.ez-field-help`, `.ez-field-error`, `.ez-field-content` utility classes
- Label styling with required asterisk (`::before`)
- `ez-ripple` disabled detection

`.ez-textfield` (`scss/modules/input/textfield.scss`) provides:

- `.ez-filled` / `.ez-outlined` variants
- Floating labels (flat DOM and structured)
- Full M3 theming via custom properties
- Error states, disabled states, hover/focus transitions
- Reduced motion support
- Fullwidth modifier

## Storybook Coverage

### JS Stories (`ez-field.stories.ts`) — 6 stories

1. **Default** — Basic field rendering, shadow DOM verification
2. **Validity Messaging** — Custom `validityMessaging` with email validation
3. **Custom Validate** — `validate` callback with min-length check
4. **Form Reset** — Reset button clears validation state
5. **Error Property** — `error` attribute/property alias, shadow DOM error rendering, get/set/clear cycle
6. **Kitchen Sink** — Comprehensive demo: default, required, server error, email, zipcode, checkbox, textarea, radio groups, fill/unfill buttons

All have `play` functions with DOM assertions.

### CSS Stories (`css-only-ez-field.stories.ts`) — 5 stories

1. **Field Default** — Plain input, no supporting text
2. **Field With Help** — Help text via `.ez-field__supporting-text`
3. **Field With Error** — Error text via `.ez-field__error-text`
4. **Field With Help And Error** — Both help and error text
5. **Field Variants** — Outlined and filled variants

All have `play` functions.

### Fieldset Stories (`scss/modules/fieldset/index.stories.ts`) — 6 stories

1. **Field Default** — Inline fields with help/error
2. **Field Vertical** — Vertical layout
3. **Field Custom Slot** — `.ez-field-content` usage
4. **Field Leading Trailing** — Leading/trailing spans
5. **Field Disabled** — Disabled state
6. **Fieldset Default** — Basic fieldset with legend
7. **Fieldset Grid** — Two-column grid layout

## Testing

**No dedicated unit tests** — no `.test.ts` or `.spec.ts` files exist for `ez-field`. All testing is via Storybook `play` functions.

## Archived Experiment

`archived/x-field-experiment/` contains an earlier version of `EzFieldElement` with:

- Simpler render (no leading/trailing/content slots)
- No `_nested` support
- No `error` attribute alias
- No form reset handling differences

The current version is a significant evolution.

## Notable Observations

1. **Dual naming convention**: `validationMessage` property exposed via `error` attribute. The getter/setter `error` property provides a cleaner API but the attribute reflects `validationMessage`.
2. **No `disabled`/`readonly` properties** on the element itself — relies on inner inputs' states.
3. **No `aria` attribute management** — `error`, `help`, etc. slots don't automatically set `aria-describedby` or `aria-invalid` on inner inputs.
4. **Event listeners bound in constructor** via a tuple list; individual input listeners use helper utilities from `utils/dom/events.js`.
5. **`selectors` default excludes hidden inputs** (`input:not([type="hidden"])`) but includes all `textarea` and `select`.
6. **No async validation support** — `validate` callback is synchronous only.
7. **No `reportValidity()` public method** — consumers can't programmatically trigger validation from outside.
8. **Exported publicly** via `packages/ui/index.ts`.
9. **`EzFieldInputElement` type** covers `HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement` but the `validate` callback and `validityMessaging` getters accept `EzFieldInputElement` (current) vs the archived version which used only `HTMLInputElement`.
