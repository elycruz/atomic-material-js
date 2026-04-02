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
