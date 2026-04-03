# Toolbar: Specs

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsf I3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEVzTZATzt yOcGm6n3BhH6QXE4KMPnSmk1EmvGpm=w40)

- Docked toolbar
- Floating toolbar

## Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](https://lh3.googleusercontent.com/tIdFhkPyYLLkFb4gUvrKPLzfIPcmAx4al6ORcGUGmS8oukJMF7ZziTtOV7r-Nxwq0V63i9VTRfaVICziXGg4J8hd5TKaoZaDr28KS-7jQkI=w40)

### Variant availability

| Variant | M3 | M3 Expressive |
|---------|-----|---------------|
| Docked toolbar | -- | Available |
| Floating toolbar | -- | Available |
| Bottom app bar | Available | Not recommended. Use docked toolbar. |

Note: Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

### Standard and vibrant toolbars

![Color configuration of toolbars.](https://lh3.googleusercontent.com/o4tXTZsCpct2GOpsIk9NZcIqwhbbw1CLCMMGKLi8rjcbmGoiECpJUHMaKtCGRRJ_bL-ngPgBlom5zJAj0wdfLm7PRdk93iZLI0BvB08Ulll7JZB7SqoR=w40)

### Configuration options

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|---------------|
| Color | Standard (default) | Available as bottom app bar | Available |
| Color | Vibrant | -- | Available |
| Floating toolbar layout | Horizontal (default) | -- | Available |
| Floating toolbar layout | Vertical | -- | Available |
| Other elements | With FAB | Available as bottom app bar | Available* |

Note: *Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is fully supported. On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### Toolbar - Color - Standard

See design tokens configuration for detailed color values across different states (Enabled, Disabled, Hovered, Focused, Pressed).

## Anatomy

Components:
- Container
- Placed components

## Flexibility & slots

When configuring a toolbar, think of it as a container with several slots. Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.

![2 elements of a toolbar.](https://lh3.googleusercontent.com/q5KTYC5SjXAnSvSVvP72h2InKksCupfh4xqfQsa8eqO3ImcNxSiNEvy VzwrM54a_bgMyYUG2oOrlj sqGFjeuEhoQ-)

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Standard

Standard color schemes and icon button types:
- Surface container
- Filled button (Primary, On primary)
- Toggle tonal button (Secondary container, On secondary container)
- Standard button (Primary)

### Vibrant

Vibrant color scheme and icon button types:
- Primary container
- Filled button (Primary, On primary)
- Toggle tonal button: (Surface container, On surface)
- Standard button (On primary container)

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

- Default margins and padding
- Margins and padding with leading, middle, and trailing content
- Alignment and padding can be configured to create unique layouts:
  - Left and right alignment
  - Center-aligned, 8dp padding between items

### Floating toolbar

- Default padding of floating toolbar
- Floating toolbar size and padding measurements
- Floating toolbar margins

## Bottom app bar (baseline)

### Container

### Tokens & specs

Bottom app bar tokens are in one token set.

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

Bottom app bar color role used for light and dark themes:
- Surface container

### Measurements

Bottom app bar padding and size measurements

### Common layouts

- Icon buttons and FAB
- Icon buttons and no FAB

## Token Tables

### Toolbar - Color - Standard

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard container color | md.comp.toolbar.standard.container.color | #F3EDF7 |
| Toolbar standard button container color | md.comp.toolbar.standard.button.container.color | #F3EDF7 |
| Toolbar standard selected button container color | md.comp.toolbar.standard.selected.button.container.color | #E8DEF8 |
| Toolbar standard icon color | md.comp.toolbar.standard.icon.color | #49454F |
| Toolbar standard selected icon color | md.comp.toolbar.standard.selected.icon.color | #4A4458 |
| Toolbar standard label color | md.comp.toolbar.standard.label-text.color | #49454F |
| Toolbar standard selected label color | md.comp.toolbar.standard.selected.label-text.color | #4A4458 |
| Toolbar standard container shape | md.comp.toolbar.standard.container.shape | Shape: corner.none (No corner, Square) |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard disabled icon color | md.comp.toolbar.standard.disabled.icon.color | #1D1B20 |
| Toolbar standard disabled icon opacity | md.comp.toolbar.standard.disabled.icon.opacity | 0.38 |
| Toolbar standard disabled label color | md.comp.toolbar.standard.disabled.label-text.color | #1D1B20 |
| Toolbar standard disabled label opacity | md.comp.toolbar.standard.disabled.label-text.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard hovered state layer color | md.comp.toolbar.standard.hovered.state-layer.color | #49454F |
| Toolbar standard selected hovered state layer color | md.comp.toolbar.standard.selected.hovered.state-layer.color | #4A4458 |
| Toolbar standard hovered state layer opacity | md.comp.toolbar.standard.hovered.state-layer.opacity | 0.08 |
| Toolbar standard hovered icon color | md.comp.toolbar.standard.hovered.icon.color | #49454F |
| Toolbar standard selected hovered icon color | md.comp.toolbar.standard.selected.hovered.icon.color | #4A4458 |
| Toolbar standard hovered label color | md.comp.toolbar.standard.hovered.label-text.color | #49454F |
| Toolbar standard selected hovered label color | md.comp.toolbar.standard.selected.hovered.label-text.color | #4A4458 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard focused state layer color | md.comp.toolbar.standard.focused.state-layer.color | #49454F |
| Toolbar standard selected focused state layer color | md.comp.toolbar.standard.selected.focused.state-layer.color | #4A4458 |
| Toolbar standard focused state layer opacity | md.comp.toolbar.standard.focused.state-layer.opacity | 0.1 |
| Toolbar standard focused icon color | md.comp.toolbar.standard.focused.icon.color | #49454F |
| Toolbar standard selected focused icon color | md.comp.toolbar.standard.selected.focused.icon.color | #4A4458 |
| Toolbar standard focused label color | md.comp.toolbar.standard.focused.label-text.color | #49454F |
| Toolbar standard selected focused label color | md.comp.toolbar.standard.selected.focused.label-text.color | #4A4458 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard pressed state layer color | md.comp.toolbar.standard.pressed.state-layer.color | #49454F |
| Toolbar standard selected pressed state layer color | md.comp.toolbar.standard.selected.pressed.state-layer.color | #4A4458 |
| Toolbar standard pressed state layer opacity | md.comp.toolbar.standard.pressed.state-layer.opacity | 0.1 |
| Toolbar standard pressed icon color | md.comp.toolbar.standard.pressed.icon.color | #49454F |
| Toolbar standard selected pressed icon color | md.comp.toolbar.standard.selected.pressed.icon.color | #4A4458 |
| Toolbar standard pressed label color | md.comp.toolbar.standard.pressed.label-text.color | #49454F |
| Toolbar standard selected pressed label color | md.comp.toolbar.standard.selected.pressed.label-text.color | #4A4458 |
