# `.ez-btn` / `.ez-button`

A CSS-only button component with Material Design 3 expressive styling — variant classes, a full size scale, icon buttons, shape morphing on press/select, and automatic dark mode support.

## Usage

```html
<!-- Basic button (text variant, default) -->
<button class="ez-btn ez-theme-primary" type="button">
  Click me
</button>

<!-- With ripple effect -->
<button class="ez-btn ez-theme-primary" type="button">
  <ez-ripple></ez-ripple>
  <span>Click me</span>
</button>

<!-- Filled variant -->
<button class="ez-btn ez-filled ez-theme-primary" type="button">
  <ez-ripple></ez-ripple>
  <span>Submit</span>
</button>

<!-- Outlined variant -->
<button class="ez-btn ez-outlined ez-theme-secondary" type="button">
  <ez-ripple></ez-ripple>
  <span>Cancel</span>
</button>

<!-- With icon -->
<button class="ez-btn ez-filled ez-theme-primary" type="button">
  <ez-ripple></ez-ripple>
  <span class="md-icon">stars</span>
  <span>Favorite</span>
</button>

<!-- As a link -->
<a class="ez-btn ez-outlined ez-theme-info" href="/about">
  <ez-ripple></ez-ripple>
  <span>Learn more</span>
</a>
```

## Variants

Apply a variant class alongside `.ez-btn` to change the button's visual style. The default (no variant class) renders as a transparent text button.

| Class | Description |
|---|---|
| _(none)_ | Text button — transparent background, themed text color |
| `.ez-filled` | Solid background with contrasting text |
| `.ez-outlined` | Transparent background with a themed border |
| `.ez-elevated` | Surface background with MD3 box-shadow elevation |
| `.ez-tonal` | Secondary container background (filled tonal) |

## Sizes

| Class | Container Height | Notes |
|---|---|---|
| `.ez-xsmall` | 32px | Compact actions |
| `.ez-small` | 40px | Same as default |
| _(none)_ | 40px | Default size |
| `.ez-medium` | 56px | Prominent actions |
| `.ez-large` | 96px | Hero/CTA buttons |
| `.ez-xlarge` | 136px | Display-level buttons |
| `.ez-util` | 18px | Minimal utility size |

```html
<button class="ez-btn ez-outlined ez-theme-primary ez-medium" type="button">
  <ez-ripple></ez-ripple>
  <span>Medium</span>
</button>
```

## Icon Buttons

Add `.ez-icon-btn` as a co-class for a round icon-only button (40 × 40px).

```html
<!-- Standard icon button -->
<button class="ez-btn ez-icon-btn ez-theme-secondary" type="button" aria-label="Settings">
  <ez-ripple></ez-ripple>
  <span class="md-icon">settings</span>
</button>

<!-- Filled icon button -->
<button class="ez-btn ez-icon-btn ez-filled ez-theme-secondary" type="button" aria-label="Add">
  <ez-ripple></ez-ripple>
  <span class="md-icon">add</span>
</button>
```

## Shape

By default buttons use a pill shape (`border-radius: 50%`-height). Add `.ez-square` for rounded-rectangle corners instead.

```html
<button class="ez-btn ez-filled ez-square ez-theme-primary" type="button">
  <ez-ripple></ez-ripple>
  <span>Square</span>
</button>
```

### Shape Morphing

Buttons animate their border-radius on press and selection:

- **Press** — pill corners morph toward squarish on `:active`, then revert.
- **Select** — when `aria-pressed="true"` or `.ez-selected` is set, corners stay morphed. Square buttons morph in the opposite direction (toward circular).

## Themes

Apply a `.ez-theme-{name}` class to color the button using the library's color scale.

| Class | Theme |
|---|---|
| `.ez-theme-primary` | Primary |
| `.ez-theme-secondary` | Secondary |
| `.ez-theme-success` | Success |
| `.ez-theme-info` | Info |
| `.ez-theme-warning` | Warning |
| `.ez-theme-error` | Error |
| `.ez-theme-neutral` | Neutral / Grayscale |

## Disabled State

Use the native `disabled` attribute. Disabled buttons receive reduced opacity, no box-shadow, and `pointer-events: none`.

```html
<button class="ez-btn ez-filled ez-theme-primary" type="button" disabled>
  Disabled
</button>
```

## Ripple Integration

Place an `<ez-ripple>` element within the button component for Material Design hover and press ripple effects. Place text and icons inside `<span>` elements so they layer above the ripple (by `.ez-btn`/`.ez-button` declared css).

```html
<button class="ez-btn ez-theme-primary" type="button">
  <ez-ripple></ez-ripple>
  <span>Label</span>
</button>
```

## Button Group

Wrap button sets within an `.ez-btn-group` for a flex row layout with consistent gap spacing.

```html
<div class="ez-btn-group">
  <button class="ez-btn ez-filled ez-theme-primary" type="button">
    <ez-ripple></ez-ripple><span>Save</span>
  </button>
  <button class="ez-btn ez-outlined ez-theme-primary" type="button">
    <ez-ripple></ez-ripple><span>Cancel</span>
  </button>
</div>
```

## CSS Custom Properties

Override these properties to customize button appearance:

**Note:** Use these instead of the raw css prop equivalents to allow effect to cascade across all button variants and states.

| Property | Default | Description |
|---|---|---|
| `--md-btn-container-height` | `40px` | Button container height |
| `--md-btn-container-shape` | `calc(infinity * 1px)` | Border-radius (pill by default) |

## Architecture

CSS component only — no JavaScript. Styles are composed from modular CSS files imported via `css/modules/button/index.css`.
