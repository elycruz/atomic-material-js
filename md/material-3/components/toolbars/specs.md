# Toolbar: Specs

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsf I3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEVzTZATzt yOcGm6n3BhH6QXE4KMPnSmk1EmvGpm=w40)

- Docked toolbar
- Floating toolbar

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

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values.

### Toolbar - Floating - FAB


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab icon size | md.comp.toolbar.floating-fab.icon.size | 24dp |

#### Enabled / Action item container color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab icon color | md.comp.toolbar.floating-fab.icon.color | #49454F |
| Toolbar floating fab label color | md.comp.toolbar.floating-fab.label-text.color | #49454F |

#### Enabled / Floating action button

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab fab container color | md.comp.toolbar.floating-fab.fab.container.color | #6750A4 |

#### Enabled / Surface

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab container color | md.comp.toolbar.floating-fab.container.color | #FFFBFE |
| Toolbar floating fab container elevation | md.comp.toolbar.floating-fab.container.elevation |  |
| Toolbar floating fab container shape | md.comp.toolbar.floating-fab.container.shape |  |

#### Hovered / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab hovered icon color | md.comp.toolbar.floating-fab.hovered.icon.color | #49454F |
| Toolbar floating fab selected hovered icon color | md.comp.toolbar.floating-fab.selected.hovered.icon.color | #4A4458 |
| Toolbar floating fab hovered label color | md.comp.toolbar.floating-fab.hovered.label-text.color | #49454F |
| Toolbar floating fab selected hovered label color | md.comp.toolbar.floating-fab.selected.hovered.label-text.color | #4A4458 |
| Toolbar floating fab hovered state layer color | md.comp.toolbar.floating-fab.hovered.state-layer.color | #49454F |
| Toolbar floating fab selected hovered state layer color | md.comp.toolbar.floating-fab.selected.hovered.state-layer.color | #4A4458 |
| Toolbar floating fab hovered state layer opacity | md.comp.toolbar.floating-fab.hovered.state-layer.opacity | 0.08 |

#### Focused / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab focused icon color | md.comp.toolbar.floating-fab.focused.icon.color | #49454F |
| Toolbar floating fab selected focused icon color | md.comp.toolbar.floating-fab.selected.focused.icon.color | #4A4458 |
| Toolbar floating fab focused label color | md.comp.toolbar.floating-fab.focused.label-text.color | #49454F |
| Toolbar floating fab selected focused label color | md.comp.toolbar.floating-fab.selected.focused.label-text.color | #4A4458 |
| Toolbar floating fab focused state layer color | md.comp.toolbar.floating-fab.focused.state-layer.color | #49454F |
| Toolbar floating fab selected focused state layer color | md.comp.toolbar.floating-fab.selected.focused.state-layer.color | #4A4458 |
| Toolbar floating fab focused state layer opacity | md.comp.toolbar.floating-fab.focused.state-layer.opacity | 0.12 |

#### Pressed / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating fab pressed state layer color | md.comp.toolbar.floating-fab.pressed.state-layer.color | #49454F |
| Toolbar floating fab selected pressed state layer color | md.comp.toolbar.floating-fab.selected.pressed.state-layer.color | #4A4458 |
| Toolbar floating fab pressed state layer opacity | md.comp.toolbar.floating-fab.pressed.state-layer.opacity | 0.1 |
| Toolbar floating fab pressed icon color | md.comp.toolbar.floating-fab.pressed.icon.color | #49454F |
| Toolbar floating fab selected pressed icon color | md.comp.toolbar.floating-fab.selected.pressed.icon.color | #4A4458 |
| Toolbar floating fab pressed label color | md.comp.toolbar.floating-fab.pressed.label-text.color | #49454F |
| Toolbar floating fab selected pressed label color | md.comp.toolbar.floating-fab.selected.pressed.label-text.color | #4A4458 |

### Toolbar - Floating


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating icon size | md.comp.toolbar.floating.icon.size | 24dp |

#### Enabled / Action item container color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating icon color | md.comp.toolbar.floating.icon.color | #49454F |
| Toolbar floating label color | md.comp.toolbar.floating.label-text.color | #49454F |

#### Enabled / Surface

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating container color | md.comp.toolbar.floating.container.color | #FFFBFE |
| Toolbar floating container elevation | md.comp.toolbar.floating.container.elevation |  |
| Toolbar floating container shape | md.comp.toolbar.floating.container.shape |  |

#### Hovered / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating hovered icon color | md.comp.toolbar.floating.hovered.icon.color | #49454F |
| Toolbar floating selected hovered icon color | md.comp.toolbar.floating.selected.hovered.icon.color | #4A4458 |
| Toolbar floating hovered label color | md.comp.toolbar.floating.hovered.label-text.color | #49454F |
| Toolbar floating selected hovered label color | md.comp.toolbar.floating.selected.hovered.label-text.color | #4A4458 |
| Toolbar floating hovered state layer color | md.comp.toolbar.floating.hovered.state-layer.color | #49454F |
| Toolbar floating selected hovered state layer color | md.comp.toolbar.floating.selected.hovered.state-layer.color | #4A4458 |
| Toolbar floating hovered state layer opacity | md.comp.toolbar.floating.hovered.state-layer.opacity | 0.08 |

#### Focused / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating focused icon color | md.comp.toolbar.floating.focused.icon.color | #49454F |
| Toolbar floating selected focused icon color | md.comp.toolbar.floating.selected.focused.icon.color | #4A4458 |
| Toolbar floating focused label color | md.comp.toolbar.floating.focused.label-text.color | #49454F |
| Toolbar floating selected focused label color | md.comp.toolbar.floating.selected.focused.label-text.color | #4A4458 |
| Toolbar floating focused state layer color | md.comp.toolbar.floating.focused.state-layer.color | #49454F |
| Toolbar floating selected focused state layer color | md.comp.toolbar.floating.selected.focused.state-layer.color | #4A4458 |
| Toolbar floating focused state layer opacity | md.comp.toolbar.floating.focused.state-layer.opacity | 0.12 |

#### Pressed / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar floating pressed state layer color | md.comp.toolbar.floating.pressed.state-layer.color | #49454F |
| Toolbar floating selected pressed state layer color | md.comp.toolbar.floating.selected.pressed.state-layer.color | #4A4458 |
| Toolbar floating pressed state layer opacity | md.comp.toolbar.floating.pressed.state-layer.opacity | 0.1 |
| Toolbar floating pressed icon color | md.comp.toolbar.floating.pressed.icon.color | #49454F |
| Toolbar floating selected pressed icon color | md.comp.toolbar.floating.selected.pressed.icon.color | #4A4458 |
| Toolbar floating pressed label color | md.comp.toolbar.floating.pressed.label-text.color | #49454F |
| Toolbar floating selected pressed label color | md.comp.toolbar.floating.selected.pressed.label-text.color | #4A4458 |

### Toolbar - Docked


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked icon size | md.comp.toolbar.docked.icon.size | 24dp |

#### Enabled / Action item container color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked icon color | md.comp.toolbar.docked.icon.color | #49454F |
| Toolbar docked label color | md.comp.toolbar.docked.label-text.color | #49454F |

#### Enabled / Surface

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked container color | md.comp.toolbar.docked.container.color | #FFFBFE |
| Toolbar docked container height | md.comp.toolbar.docked.container.height | 80dp |
| Toolbar docked container elevation | md.comp.toolbar.docked.container.elevation |  |
| Toolbar docked container shape | md.comp.toolbar.docked.container.shape |  |

#### Hovered / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked hovered icon color | md.comp.toolbar.docked.hovered.icon.color | #49454F |
| Toolbar docked selected hovered icon color | md.comp.toolbar.docked.selected.hovered.icon.color | #4A4458 |
| Toolbar docked hovered label color | md.comp.toolbar.docked.hovered.label-text.color | #49454F |
| Toolbar docked selected hovered label color | md.comp.toolbar.docked.selected.hovered.label-text.color | #4A4458 |
| Toolbar docked hovered state layer color | md.comp.toolbar.docked.hovered.state-layer.color | #49454F |
| Toolbar docked selected hovered state layer color | md.comp.toolbar.docked.selected.hovered.state-layer.color | #4A4458 |
| Toolbar docked hovered state layer opacity | md.comp.toolbar.docked.hovered.state-layer.opacity | 0.08 |

#### Focused / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked focused icon color | md.comp.toolbar.docked.focused.icon.color | #49454F |
| Toolbar docked selected focused icon color | md.comp.toolbar.docked.selected.focused.icon.color | #4A4458 |
| Toolbar docked focused label color | md.comp.toolbar.docked.focused.label-text.color | #49454F |
| Toolbar docked selected focused label color | md.comp.toolbar.docked.selected.focused.label-text.color | #4A4458 |
| Toolbar docked focused state layer color | md.comp.toolbar.docked.focused.state-layer.color | #49454F |
| Toolbar docked selected focused state layer color | md.comp.toolbar.docked.selected.focused.state-layer.color | #4A4458 |
| Toolbar docked focused state layer opacity | md.comp.toolbar.docked.focused.state-layer.opacity | 0.12 |

#### Pressed / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar docked pressed state layer color | md.comp.toolbar.docked.pressed.state-layer.color | #49454F |
| Toolbar docked selected pressed state layer color | md.comp.toolbar.docked.selected.pressed.state-layer.color | #4A4458 |
| Toolbar docked pressed state layer opacity | md.comp.toolbar.docked.pressed.state-layer.opacity | 0.1 |
| Toolbar docked pressed icon color | md.comp.toolbar.docked.pressed.icon.color | #49454F |
| Toolbar docked selected pressed icon color | md.comp.toolbar.docked.selected.pressed.icon.color | #4A4458 |
| Toolbar docked pressed label color | md.comp.toolbar.docked.pressed.label-text.color | #49454F |
| Toolbar docked selected pressed label color | md.comp.toolbar.docked.selected.pressed.label-text.color | #4A4458 |

### Toolbar - Color - Vibrant


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant icon size | md.comp.toolbar.vibrant.icon.size | 24dp |

#### Enabled / Action item container color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant icon color | md.comp.toolbar.vibrant.icon.color | #6750A4 |
| Toolbar vibrant label color | md.comp.toolbar.vibrant.label-text.color | #6750A4 |

#### Enabled / Surface

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant container color | md.comp.toolbar.vibrant.container.color | #FFD60D |
| Toolbar vibrant container height | md.comp.toolbar.vibrant.container.height | 80dp |
| Toolbar vibrant container elevation | md.comp.toolbar.vibrant.container.elevation |  |
| Toolbar vibrant container shape | md.comp.toolbar.vibrant.container.shape |  |

#### Hovered / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant hovered icon color | md.comp.toolbar.vibrant.hovered.icon.color | #6750A4 |
| Toolbar vibrant selected hovered icon color | md.comp.toolbar.vibrant.selected.hovered.icon.color | #49454F |
| Toolbar vibrant hovered label color | md.comp.toolbar.vibrant.hovered.label-text.color | #6750A4 |
| Toolbar vibrant selected hovered label color | md.comp.toolbar.vibrant.selected.hovered.label-text.color | #49454F |
| Toolbar vibrant hovered state layer color | md.comp.toolbar.vibrant.hovered.state-layer.color | #6750A4 |
| Toolbar vibrant selected hovered state layer color | md.comp.toolbar.vibrant.selected.hovered.state-layer.color | #49454F |
| Toolbar vibrant hovered state layer opacity | md.comp.toolbar.vibrant.hovered.state-layer.opacity | 0.08 |

#### Focused / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant focused icon color | md.comp.toolbar.vibrant.focused.icon.color | #6750A4 |
| Toolbar vibrant selected focused icon color | md.comp.toolbar.vibrant.selected.focused.icon.color | #49454F |
| Toolbar vibrant focused label color | md.comp.toolbar.vibrant.focused.label-text.color | #6750A4 |
| Toolbar vibrant selected focused label color | md.comp.toolbar.vibrant.selected.focused.label-text.color | #49454F |
| Toolbar vibrant focused state layer color | md.comp.toolbar.vibrant.focused.state-layer.color | #6750A4 |
| Toolbar vibrant selected focused state layer color | md.comp.toolbar.vibrant.selected.focused.state-layer.color | #49454F |
| Toolbar vibrant focused state layer opacity | md.comp.toolbar.vibrant.focused.state-layer.opacity | 0.12 |

#### Pressed / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar vibrant pressed state layer color | md.comp.toolbar.vibrant.pressed.state-layer.color | #6750A4 |
| Toolbar vibrant selected pressed state layer color | md.comp.toolbar.vibrant.selected.pressed.state-layer.color | #49454F |
| Toolbar vibrant pressed state layer opacity | md.comp.toolbar.vibrant.pressed.state-layer.opacity | 0.1 |
| Toolbar vibrant pressed icon color | md.comp.toolbar.vibrant.pressed.icon.color | #6750A4 |
| Toolbar vibrant selected pressed icon color | md.comp.toolbar.vibrant.selected.pressed.icon.color | #49454F |
| Toolbar vibrant pressed label color | md.comp.toolbar.vibrant.pressed.label-text.color | #6750A4 |
| Toolbar vibrant selected pressed label color | md.comp.toolbar.vibrant.selected.pressed.label-text.color | #49454F |

### Toolbar - Color - Standard


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard icon size | md.comp.toolbar.standard.icon.size | 24dp |

#### Enabled / Action item container color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard icon color | md.comp.toolbar.standard.icon.color | #49454F |
| Toolbar standard label color | md.comp.toolbar.standard.label-text.color | #49454F |

#### Enabled / Scrim color

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard scrim color | md.comp.toolbar.standard.scrim.color | #00000033 |

#### Enabled / Surface

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard container color | md.comp.toolbar.standard.container.color | #FFFBFE |
| Toolbar standard container height | md.comp.toolbar.standard.container.height | 80dp |
| Toolbar standard container elevation | md.comp.toolbar.standard.container.elevation |  |
| Toolbar standard container shape | md.comp.toolbar.standard.container.shape |  |

#### Hovered / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard hovered icon color | md.comp.toolbar.standard.hovered.icon.color | #49454F |
| Toolbar standard selected hovered icon color | md.comp.toolbar.standard.selected.hovered.icon.color | #4A4458 |
| Toolbar standard hovered label color | md.comp.toolbar.standard.hovered.label-text.color | #49454F |
| Toolbar standard selected hovered label color | md.comp.toolbar.standard.selected.hovered.label-text.color | #4A4458 |
| Toolbar standard hovered state layer color | md.comp.toolbar.standard.hovered.state-layer.color | #49454F |
| Toolbar standard selected hovered state layer color | md.comp.toolbar.standard.selected.hovered.state-layer.color | #4A4458 |
| Toolbar standard hovered state layer opacity | md.comp.toolbar.standard.hovered.state-layer.opacity | 0.08 |

#### Focused / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard focused icon color | md.comp.toolbar.standard.focused.icon.color | #49454F |
| Toolbar standard selected focused icon color | md.comp.toolbar.standard.selected.focused.icon.color | #4A4458 |
| Toolbar standard focused label color | md.comp.toolbar.standard.focused.label-text.color | #49454F |
| Toolbar standard selected focused label color | md.comp.toolbar.standard.selected.focused.label-text.color | #4A4458 |
| Toolbar standard focused state layer color | md.comp.toolbar.standard.focused.state-layer.color | #49454F |
| Toolbar standard selected focused state layer color | md.comp.toolbar.standard.selected.focused.state-layer.color | #4A4458 |
| Toolbar standard focused state layer opacity | md.comp.toolbar.standard.focused.state-layer.opacity | 0.12 |

#### Pressed / Action items

| Token | Reference | Value |
|-------|-----------|-------|
| Toolbar standard pressed state layer color | md.comp.toolbar.standard.pressed.state-layer.color | #49454F |
| Toolbar standard selected pressed state layer color | md.comp.toolbar.standard.selected.pressed.state-layer.color | #4A4458 |
| Toolbar standard pressed state layer opacity | md.comp.toolbar.standard.pressed.state-layer.opacity | 0.1 |
| Toolbar standard pressed icon color | md.comp.toolbar.standard.pressed.icon.color | #49454F |
| Toolbar standard selected pressed icon color | md.comp.toolbar.standard.selected.pressed.icon.color | #4A4458 |
| Toolbar standard pressed label color | md.comp.toolbar.standard.pressed.label-text.color | #49454F |
| Toolbar standard selected pressed label color | md.comp.toolbar.standard.selected.pressed.label-text.color | #4A4458 |

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
