# Toolbars: Specs

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsfI3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEV4EZATztyOcGm6n3BbHH6QXE4KMPnSmk1EmvGpm=w40)

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](https://lh3.googleusercontent.com/tIdFhkPyYLLkFb4gUvrKPLzfIPcmAx4al6ORcGUGmS8oukJMF7ZzittOV7r-Nxwq0V63i9VTRfaVICziXGg4J8hd5TKaoZaDr28KS-7jQkI=w40)

| Variant | M3 | M3 Expressive |
|---|---| --- |
| Docked toolbar | -- | Available |
| Floating toolbar | -- | Available |
| Bottom app bar | Available | Not recommended. Use docked toolbar. |

Note: Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

![Color configuration of toolbars.](https://lh3.googleusercontent.com/o4tXTZsCpct2GOpIk9NZcIqwhbbw1CLCMMGKI8rjcbmGoiECpJUHMaKtCGRJ_bL-ngPgBlo5zJAj0wdfLm7PRdk93iZI0BvB08Ull7JZB7SqoQ=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Color | Standard (default) | Available as bottom app bar | Available |
| | Vibrant | -- | Available |
| Floating toolbar layout | Horizontal (default) | -- | Available |
| | Vertical | -- | Available |
| Other elements | With FAB | Available as bottom app bar | Available* |

Note: *Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is fully supported. On other platforms, each component needs to be added separately.

## Tokens & specs

### Toolbar - Color - Standard

#### Enabled

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard container color | md.comp.toolbar.standard.container.color | #F3EDF7 |
| Toolbar standard button container color | md.comp.toolbar.standard.button.container.color | #F3EDF7 |
| Toolbar standard selected button container color | md.comp.toolbar.standard.selected.button.container.color | #E8DEF8 |
| Toolbar standard icon color | md.comp.toolbar.standard.icon.color | #49454F |
| Toolbar standard selected icon color | md.comp.toolbar.standard.selected.icon.color | #4A4458 |
| Toolbar standard label color | md.comp.toolbar.standard.label-text.color | #49454F |
| Toolbar standard selected label color | md.comp.toolbar.standard.selected.label-text.color | #4A4458 |
| Toolbar standard container shape | md.comp.toolbar.standard.container.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |

#### Disabled

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard disabled icon color | md.comp.toolbar.standard.disabled.icon.color | #1D1B20 |
| Toolbar standard disabled icon opacity | md.comp.toolbar.standard.disabled.icon.opacity | 0.38 |
| Toolbar standard disabled label color | md.comp.toolbar.standard.disabled.label-text.color | #1D1B20 |
| Toolbar standard disabled label opacity | md.comp.toolbar.standard.disabled.label-text.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard hovered state layer color | md.comp.toolbar.standard.hovered.state-layer.color | #49454F |
| Toolbar standard selected hovered state layer color | md.comp.toolbar.standard.selected.hovered.state-layer.color | #4A4458 |
| Toolbar standard hovered state layer opacity | md.comp.toolbar.standard.hovered.state-layer.opacity | 0.08 |
| Toolbar standard hovered icon color | md.comp.toolbar.standard.hovered.icon.color | #49454F |
| Toolbar standard selected hovered icon color | md.comp.toolbar.standard.selected.hovered.icon.color | #4A4458 |
| Toolbar standard hovered label color | md.comp.toolbar.standard.hovered.label-text.color | #49454F |
| Toolbar standard selected hovered label color | md.comp.toolbar.standard.selected.hovered.label-text.color | #4A4458 |

#### Focused

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard focused state layer color | md.comp.toolbar.standard.focused.state-layer.color | #49454F |
| Toolbar standard selected focused state layer color | md.comp.toolbar.standard.selected.focused.state-layer.color | #4A4458 |
| Toolbar standard focused state layer opacity | md.comp.toolbar.standard.focused.state-layer.opacity | 0.1 |
| Toolbar standard focused icon color | md.comp.toolbar.standard.focused.icon.color | #49454F |
| Toolbar standard selected focused icon color | md.comp.toolbar.standard.selected.focused.icon.color | #4A4458 |
| Toolbar standard focused label color | md.comp.toolbar.standard.focused.label-text.color | #49454F |
| Toolbar standard selected focused label color | md.comp.toolbar.standard.selected.focused.label-text.color | #4A4458 |

#### Pressed

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard pressed state layer color | md.comp.toolbar.standard.pressed.state-layer.color | #49454F |
| Toolbar standard selected pressed state layer color | md.comp.toolbar.standard.selected.pressed.state-layer.color | #4A4458 |
| Toolbar standard pressed state layer opacity | md.comp.toolbar.standard.pressed.state-layer.opacity | 0.1 |
| Toolbar standard pressed icon color | md.comp.toolbar.standard.pressed.icon.color | #49454F |
| Toolbar standard selected pressed icon color | md.comp.toolbar.standard.selected.pressed.icon.color | #4A4458 |
| Toolbar standard pressed label color | md.comp.toolbar.standard.pressed.label-text.color | #49454F |
| Toolbar standard selected pressed label color | md.comp.toolbar.standard.selected.pressed.label-text.color | #4A4458 |

### Toolbar - Color - Vibrant

#### Enabled

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar standard container color | md.comp.toolbar.vibrant.container.color | #EADDFF |
| Toolbar vibrant button container color | md.comp.toolbar.vibrant.button.container.color | #EADDFF |
| Toolbar vibrant selected button container color | md.comp.toolbar.vibrant.selected.button.container.color | #F3EDF7 |
| Toolbar vibrant icon color | md.comp.toolbar.vibrant.icon.color | #4F378B |
| Toolbar vibrant selected icon color | md.comp.toolbar.vibrant.selected.icon.color | #1D1B20 |
| Toolbar vibrant label color | md.comp.toolbar.vibrant.label-text.color | #4F378B |
| Toolbar vibrant selected label color | md.comp.toolbar.vibrant.selected.label-text.color | #1D1B20 |
| Toolbar vibrant container shape | md.comp.toolbar.vibrant.container.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |

#### Disabled

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar vibrant disabled icon color | md.comp.toolbar.vibrant.disabled.icon.color | #1D1B20 |
| Toolbar vibrant disabled icon opacity | md.comp.toolbar.vibrant.disabled.icon.opacity | 0.38 |
| Toolbar vibrant disabled label color | md.comp.toolbar.vibrant.disabled.label-text.color | #1D1B20 |
| Toolbar vibrant disabled label opacity | md.comp.toolbar.vibrant.disabled.label-text.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar vibrant hovered state layer color | md.comp.toolbar.vibrant.hovered.state-layer.color | #4F378B |
| Toolbar vibrant selected hovered state layer color | md.comp.toolbar.vibrant.selected.hovered.state-layer.color | #1D1B20 |
| Toolbar vibrant hovered state layer opacity | md.comp.toolbar.vibrant.hovered.state-layer.opacity | 0.08 |
| Toolbar vibrant hovered icon color | md.comp.toolbar.vibrant.hovered.icon.color | #4F378B |
| Toolbar vibrant selected hovered icon color | md.comp.toolbar.vibrant.selected.hovered.icon.color | #1D1B20 |
| Toolbar vibrant hovered label color | md.comp.toolbar.vibrant.hovered.label-text.color | #4F378B |
| Toolbar vibrant selected hovered label color | md.comp.toolbar.vibrant.selected.hovered.label-text.color | #1D1B20 |

#### Focused

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar vibrant focused state layer color | md.comp.toolbar.vibrant.focused.state-layer.color | #4F378B |
| Toolbar vibrant selected focused state layer color | md.comp.toolbar.vibrant.selected.focused.state-layer.color | #1D1B20 |
| Toolbar vibrant focused state layer opacity | md.comp.toolbar.vibrant.focused.state-layer.opacity | 0.1 |
| Toolbar vibrant focused icon color | md.comp.toolbar.vibrant.focused.icon.color | #4F378B |
| Toolbar vibrant selected focused icon color | md.comp.toolbar.vibrant.selected.focused.icon.color | #1D1B20 |
| Toolbar vibrant focused label color | md.comp.toolbar.vibrant.focused.label-text.color | #4F378B |
| Toolbar vibrant selected focused label color | md.comp.toolbar.vibrant.selected.focused.label-text.color | #1D1B20 |

#### Pressed

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar vibrant pressed state layer color | md.comp.toolbar.vibrant.pressed.state-layer.color | #4F378B |
| Toolbar vibrant selected pressed state layer color | md.comp.toolbar.vibrant.selected.pressed.state-layer.color | #1D1B20 |
| Toolbar vibrant pressed state layer opacity | md.comp.toolbar.vibrant.pressed.state-layer.opacity | 0.1 |
| Toolbar vibrant pressed icon color | md.comp.toolbar.vibrant.pressed.icon.color | #4F378B |
| Toolbar vibrant selected pressed icon color | md.comp.toolbar.vibrant.selected.pressed.icon.color | #1D1B20 |
| Toolbar vibrant pressed label color | md.comp.toolbar.vibrant.pressed.label-text.color | #4F378B |
| Toolbar vibrant selected pressed label color | md.comp.toolbar.vibrant.selected.pressed.label-text.color | #1D1B20 |

### Toolbar - Docked

#### Size

| Token | Reference | Value |
|-------|-----------| ------- |
| Docked toolbar container height | md.comp.toolbar.docked.container.height | 64dp |
| Docked toolbar leading padding | md.comp.toolbar.docked.container.leading-space | 16dp |
| Docked toolbar trailing padding | md.comp.toolbar.docked.container.trailing-space | 16dp |
| Docked toolbar max space between actions | md.comp.toolbar.docked.container.max-spacing | 32dp |
| Docked toolbar min space between actions | md.comp.toolbar.docked.container.min-spacing | 4dp |

#### Shape

| Token | Reference | Value |
|-------|-----------| ------- |
| Docked toolbar container shape | md.comp.toolbar.docked.container.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |

### Toolbar - Floating

#### Size

| Token | Reference | Value |
|-------|-----------| ------- |
| Floating toolbar container height - horizontal | md.comp.toolbar.floating.horizontal.container.height | 64dp |
| Floating toolbar container height - vertical | md.comp.toolbar.floating.vertical.container.width | 64dp |
| Floating toolbar leading space | md.comp.toolbar.floating.container.leading-space | 8dp |
| Floating toolbar trailing space | md.comp.toolbar.floating.container.trailing-space | 8dp |
| Floating toolbar margin from screen edge - horizontal | md.comp.toolbar.floating.horizontal.container.external-space | 16dp |
| Floating toolbar margin from screen edge - vertical | md.comp.toolbar.floating.vertical.container.external-space | 24dp |
| Floating toolbar space between actions | md.comp.toolbar.floating.container.between-space | 4dp |

#### Shape

| Token | Reference | Value |
|-------|-----------| ------- |
| Floating toolbar container shape | md.comp.toolbar.floating.container.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |

#### Elevation

| Token | Reference | Value |
|-------|-----------| ------- |
| Floating toolbar container elevation | md.comp.toolbar.floating.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |

### Toolbar - Floating - FAB

#### Expanded

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar floating FAB container height | md.comp.toolbar.floating.fab.container.height | 56dp |
| Toolbar floating FAB container width | md.comp.toolbar.floating.fab.container.width | 56dp |
| Toolbar floating FAB icon size | md.comp.toolbar.floating.fab.icon.size | 24dp |
| Toolbar floating FAB container shape | md.comp.toolbar.floating.fab.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| Toolbar floating FAB container elevation | md.comp.toolbar.floating.fab.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Collapsed

| Token | Reference | Value |
|-------|-----------| ------- |
| Toolbar floating FAB medium container height | md.comp.toolbar.floating.fab.medium.container.height | 80dp |
| Toolbar floating FAB medium container width | md.comp.toolbar.floating.fab.medium.container.width | 80dp |
| Toolbar floating FAB medium icon size | md.comp.toolbar.floating.fab.medium.icon.size | 28dp |
| Toolbar floating FAB medium container shape | md.comp.toolbar.floating.fab.medium.container.shape | Shape: md.sys.shape.corner.large-increased (rounded_corner, Rounded 20dp) |
| Toolbar floating FAB medium container elevation | md.comp.toolbar.floating.fab.medium.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |

## Anatomy

![2 elements of a toolbar.](https://lh3.googleusercontent.com/q5KTYC5SjXAnSvSVvP72h2InKksCupfh4xqfQsa8eqO3ImcNxSiNEvyVzwrM54a_bgMyYUG2oOrljsquGFjeuEhoQ-lfYIhLhcYRjTURpOs0mQ=w40)

### Flexibility & slots

![A toolbar with 5 slots, conceptual spaces for UI elements, next to each other.](https://lh3.googleusercontent.com/U8tAffspM1NK0nWpYaxRxJHvPJOXWBX8GEuuEMeW6b-RjRo7OKtlMaYohHO-8Rn9QzwodfT_aJgLSocPQnHQDqhiMpfonWKsTd8XBUj-kKs=w40)

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Standard

![4 color roles in the standard color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/vnb-hvZkhHov6Q_xpnqsRpE-v1-ahJAuOOAS49Uw7K1JgYNot331UJ_viioRQnCmG5c_kqdBCgTXYkFkIfdYmd2lUUnIiqJes4VaQa_i30dvYg=w40)

### Vibrant

![4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/MSHjbfagavP64_aZ8he_iw3phiUh6IkZDUjRhPkoMvHcSGsAh-0j3khoUTMDeaPdCVcRwhCp9XyMVOQuvKVvIDxcYcqgTe1tZ5YBzAxchYzx=w40)

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

![Default internal padding of a docked toolbar.](https://lh3.googleusercontent.com/Eovie9hEPA5n7suVT8sw4C5TaWOwLmXIl0J3WBMBVOcBFDGyGqhwTTePHEyqXbPNsWb4kH1PH0QZ0llhRfnV9iozSM-bZFjevV4HNZio2qCD=w40)

![2 docked toolbars with different margins and alignment.](https://lh3.googleusercontent.com/Vsgw_yvIWA9pxAKEs4qmxtfhofUIoJnSXq6bO3_6v_OmMq4BZhQnS5FaT70GZEHJOzMm7DPuYd-ZUVsVtbJ1WuLqVCQ9khS6P6J8EMzlyOo=w40)

### Floating toolbar

![Diagram noting margin around edge of floating toolbar.](https://lh3.googleusercontent.com/BmOWzjQZ3a-oyRtJT94Nez52vT0DHXNgDWueCiIVnteA35K89UKvwAP_gs8fdqn450QEN9oEnw_yWK0oIKbqEZ9xhqope0Jt4C0lM83X4pc3ng=w40)

![Diagram noting layout measurements.](https://lh3.googleusercontent.com/OStcy-GlT-NRB63inDLnhvNm3czBqigQcIhixAV3N7fMvikSrBtiJtNJc_r0m8yP6nyxDkzhLQnsxBdp_FG6qDARNyB0S52U-CDXNkkG89E=w40)

![Diagram noting layout margins.](https://lh3.googleusercontent.com/l1zIH0wA5J3kRRwuwvmIpG4gmlFXXYK88L4lF0q5vQ0_ThjPiPwpPJk0mOT8zbMyO20rMum-TPkHfY651sPtrWzVPiiVl7MXQxtWq3IthryT=w40)

![Diagram of bottom app bar indicating the container.](https://lh3.googleusercontent.com/XW6h1Afu7o0EPJEU5KC5OEODx1r67sQMqU9pUmqzyOAPy1b_y8-pMDrw-GqoWeSbEXhBR7cA_qDpTDdG8qwlAYoSH0Vc9jh5lviGtvZ76pekyw=w40)

### Tokens & specs

Bottom app bar tokens are in one token set.

### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

![Diagram of bottom app bar indicating its color mappings.](https://lh3.googleusercontent.com/RDMrnLfQpoptezvVbHosgCQV_qq-MEVY3hKWH4U1fo8wYZLg0Zv4Z1jqiQT1FxojqUYoCEZ8lekjZ3SYJe3-vuO50wNCzsNx7lBpp6iWgqN0rQ=w40)

### Measurements

![Diagram showing layout values and paddings for bottom app bar.](https://lh3.googleusercontent.com/42HaRTtyV44uEgw2rZzgGwWNqlOy1g0mCiaUjMy7iuiG2lAJ4ACu5xe9PEJgOfE2PFIJ_8TjIRqrk75Wc2YmtrtcrYklJzE3nSV8HbBbW7Y=w40)

### Common layouts

![Side by side view of bottom app bars in different configurations.](https://lh3.googleusercontent.com/JvPTixMCyejczwwssuEezKtZO-2y_RmCjTIrMEpHFu5HOAApXlYpEt-Pq3GV4Bd1LJQlgRd4O3PPpK7YpOkaQMUvEo3Sg2E1I8iLh56BNKvC=w40)
