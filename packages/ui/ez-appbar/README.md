# ez-appbar

Material Design 3 application bar component with scroll-aware behavior.

## Features

- Auto-hide/auto-show appbar on scroll.
- Support for auxiliary app bar when scrolling away from original app bar position.
- Configurable scrolling parent element.
- M3 design tokens for colors, elevation, typography, and spacing.
- Size variants: small (default, 64dp), medium (112dp), large (120dp).
- Style variants via `variety`: filled, outlined, elevated.
- Theme variants via `theme`: primary, secondary, tertiary, success, info, warning, error.
- On-scroll elevation and color change (M3 spec).
- Orientation variants: top (default), bottom.
- Events for appbar intersection states.

## Usage

### HTML (CSS-only, no custom element)

```html
<!-- Small (default) -->
<div class="ez-appbar">
  <h1>My App</h1>
</div>

<!-- Medium with subtitle (auto-detected via :has()) -->
<div class="ez-appbar ez-medium">
  <hgroup>
    <h1>My App</h1>
    <p>Subtitle</p>
  </hgroup>
</div>

<!-- Large, filled, primary theme -->
<div class="ez-appbar ez-large ez-filled ez-theme-primary">
  <h1>My App</h1>
</div>
```

### Custom Element (with auto scroll/hide behavior)

```html
<!-- Targets document.scrollingElement by default -->
<ez-appbar variety="filled" theme="primary">
  <h1>My App</h1>
</ez-appbar>

<!-- Targets a specific scroll container -->
<div class="scroll-pane" style="overflow-y: auto; height: 100vh;">
  <ez-appbar parent-selector=".scroll-pane" size="medium">
    <h1>My App</h1>
  </ez-appbar>
  <main>Content</main>
</div>

<!-- Bottom appbar -->
<ez-appbar class="ez--bottom" variety="filled" theme="primary">
  <p>&copy; 2024</p>
</ez-appbar>
```

### React

```tsx
import EzAppbar from '@atomic/ui-react/ez-appbar';

export function AppHeader() {
  return (
    <EzAppbar
      variety="filled"
      theme="primary"
      size="medium"
      onXAppbarIntersected={() => console.log('Visible')}
      onXAppbarNotIntersected={() => console.log('Hidden')}
    >
      <h1>My App</h1>
    </EzAppbar>
  );
}
```

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `variety` | `string` | `''` | Style variant: `'filled'`, `'outlined'`, `'elevated'` |
| `theme` | `string` | `''` | Theme: `'primary'`, `'secondary'`, `'tertiary'`, etc. |
| `size` | `string` | `''` | Size variant: `'small'`, `'medium'`, `'large'` |
| `parentSelector` | `string` | `''` | Selector for the scroll parent element |
| `hiddenClassName` | `string` | `'ez--hidden'` | CSS class applied when appbar is hidden |
| `visibleClassName` | `string` | `'ez--visible'` | CSS class applied for auxiliary appbar visibility |
| `debounceDelay` | `number` | `233` | Scroll handler debounce delay (ms) |
| `marginTop` | `number` | `0` | Top offset for intersection calculation |

## Events

| Event | Description |
|---|---|
| `ez-appbar-intersected` | Fired when appbar enters the intersection point (visible at top) |
| `ez-appbar-not-intersected` | Fired when appbar scrolls out of the intersection point |

## CSS Classes

### Control Classes (size)

- `.ez-medium` — Medium appbar (112dp, 136dp with subtitle)
- `.ez-large` — Large appbar (120dp, 152dp with subtitle)
- Subtitle height expansion is auto-detected via `:has(p, .ez-appbar-subtitle)`

### Style Classes

- `.ez-filled` — Filled background (uses theme color)
- `.ez-outlined` — Outline border
- `.ez-elevated` — Elevated with box shadow

### State Classes

- `.ez--hidden` — Hidden state (opacity 0, translated out)
- `.ez--visible` — Visible auxiliary appbar state
- `.ez--scrolled` — Toggled when scroll parent is scrolled (applies M3 on-scroll elevation/color)
- `.ez--top` — Explicit top positioning
- `.ez--bottom` — Bottom positioning
