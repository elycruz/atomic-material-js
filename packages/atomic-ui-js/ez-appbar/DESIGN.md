# App Bar Design

## Objective

Create an appbar component that gives the user full control on what to do on the main, targeted, features: Positioning and browser scroll intersection. Implements Material Design 3 appbar specs for colors, typography, elevation, and sizing.

## Definitions

Auxillary App Bar
:App Bar that is shown when the user is scrolling toward 'original' app bar's designated position, when the component's scrolling element is scrolled away from it.

App Bar
:Component that sits at the top of an html document, and/or element, and allows control of the document, and/or the application itself.

## Architecture

The component extends `EzBaseElement` (LitElement) with the `WithSize` mixin, providing:
- Shadow DOM with `<slot>` for light DOM content pass-through
- `variety` property — style variants (filled, outlined, elevated)
- `theme` property — theme variants (primary, secondary, tertiary, etc.)
- `size` property — size variants (small, medium, large)

Control classes (`ez-{variety}`, `ez-theme-{theme}`, `ez-{size}`) are applied to the host element in `willUpdate`, enabling CSS-only usage with `<div class="ez-appbar ez-medium ez-filled ez-theme-primary">`.

## M3 Spec Mapping

### Size Variants

| Variant | Height | Height (w/subtitle) | Title Token | Subtitle Token |
|---------|--------|---------------------|-------------|----------------|
| Small (default) | 64dp | — | title-large | label-medium |
| Medium | 112dp | 136dp | headline-medium | title-small |
| Large | 120dp | 152dp | display-small | title-medium |

### On-Scroll State

When scrolled, the `.ez--scrolled` class is toggled, applying:
- Background: `--md-sys-color-surface-container`
- Elevation: `--md-sys-elevation-level2`

## Example Usage

```html
<!-- Targets `document.scrollingElement` as parent scrolling-element. -->
<ez-appbar variety="filled" theme="primary">
  <h1>My App</h1>
</ez-appbar>

<!-- Targets '.example-scroll-pane' as parent scrolling-element -->
<div class="example-scroll-pane" style="overflow-y: auto;">
  <ez-appbar parent-selector=".example-scroll-pane" size="medium">
    <hgroup>
      <h1>My App</h1>
      <p>Subtitle</p>
    </hgroup>
  </ez-appbar>
</div>

<!-- Footer App Bar -->
<ez-appbar class="ez--bottom" variety="filled" theme="primary">
  <p>&copy;</p>
</ez-appbar>
```

## Properties

- `variety: string` — Style variant (filled, outlined, elevated).
- `theme: string` — Theme variant (primary, secondary, tertiary, etc.).
- `size: string` — Size variant (small, medium, large).
- `parentSelector: string` — Selector to use to acquire the target's parent scrolling-element.
- `hiddenClassName: string` — CSS class applied when hidden. Default `'ez--hidden'`.
- `visibleClassName: string` — CSS class applied for auxiliary visibility. Default `'ez--visible'`.
- `debounceDelay: number` — Scroll handler debounce in ms. Default `233`.
- `marginTop: number` — Top offset for intersection calculation. Default `0`.
- `readonly intersected: boolean` — Whether the appbar is at its intersection point.

## Events

- `ez-appbar-intersected` — Fired when the appbar enters the intersection point.
- `ez-appbar-not-intersected` — Fired when the appbar scrolls out of the intersection point.

## Approach

### Implementation Caveats

- Component extends `EzBaseElement` with `WithSize` mixin for variety/theme/size properties.
- Shadow DOM with `<slot>` allows light DOM content pass-through.
- Control classes applied to host element enable both custom element and CSS-only usage.
- ResizeObserver tracks appbar height for intersection calculation.
- On-scroll class (`.ez--scrolled`) enables M3 elevation/color changes via CSS.
