# Buttons: Specs

## Variants

![Diagram comparing buttons with toggle buttons.](https://lh3.googleusercontent.com/uVm73OdNxJ_mAgda3YicHg4pX1vJCYj7t_P9k1DtJxccr5eDpbF-gj92CDcCAWNgSO52afKQ0429mgkC1BLu0nTCoY0uRdn7v5y-u7HztlS_=w40)

| Variant | M3 | M3 Expressive |
|---|---|---|
| Default | Available | Available |
| Toggle (selection) | -- | Available |

## Configurations

![Diagram showing configurations of buttons.](https://lh3.googleusercontent.com/qtqOoy4NuC3QFb7pfhfLLiZPXFCDrM-rLo38WY2V4ao1NGmIml-wNHF0Gk4ydIEttrZsWWGMlACpZAu5YiQZTrK5NaG52Zqr0PSE4IpQVBoi=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---|---|
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended.Use 16dp |
| 16dp | -- | Available |

## Tokens & specs

### Button - Color - Elevated

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated container color | md.comp.button.elevated.container.color | #F7F2FA |
| Button elevated container color - toggle (unselected) | md.comp.button.elevated.unselected.container.color | #F7F2FA |
| Button elevated container color - toggle (selected) | md.comp.button.elevated.selected.container.color | #6750A4 |
| Button elevated shadow color | md.comp.button.elevated.container.shadow-color | #000000 |
| Button elevated elevation | md.comp.button.elevated.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Button elevated label color | md.comp.button.elevated.label-text.color | #6750A4 |
| Button elevated label color - toggle (unselected) | md.comp.button.elevated.unselected.label-text.color | #6750A4 |
| Button elevated label color - toggle (selected) | md.comp.button.elevated.selected.label-text.color | #FFFFFF |
| Button elevated icon color | md.comp.button.elevated.icon.color | #6750A4 |
| Button elevated icon color - toggle (unselected) | md.comp.button.elevated.unselected.icon.color | #6750A4 |
| Button elevated icon color - toggle (selected) | md.comp.button.elevated.selected.icon.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated disabled container color | md.comp.button.elevated.disabled.container.color | #1D1B20 |
| Button elevated disabled container opacity | md.comp.button.elevated.disabled.container.opacity | 0.1 |
| Button elevated disabled container elevation | md.comp.button.elevated.disabled.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button elevated disabled label color | md.comp.button.elevated.disabled.label-text.color | #1D1B20 |
| Button elevated disabled label opacity | md.comp.button.elevated.disabled.label-text.opacity | 0.38 |
| Button elevated disabled icon color | md.comp.button.elevated.disabled.icon.color | #1D1B20 |
| Button elevated disabled icon opacity | md.comp.button.elevated.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated hovered container state layer color | md.comp.button.elevated.hovered.state-layer.color | #6750A4 |
| Button elevated hovered container state layer color - toggle (unselected) | md.comp.button.elevated.unselected.hovered.state-layer.color | #6750A4 |
| Button elevated hovered container state layer color - toggle (selected) | md.comp.button.elevated.selected.hovered.state-layer.color | #FFFFFF |
| Button elevated hovered container state layer opacity | md.comp.button.elevated.hovered.state-layer.opacity | 0.08 |
| Button elevated hovered label color | md.comp.button.elevated.hovered.label-text.color | #6750A4 |
| Button elevated hovered label color - toggle (unselected) | md.comp.button.elevated.unselected.hovered.label-text.color | #6750A4 |
| Button elevated hovered label color - toggle (selected) | md.comp.button.elevated.selected.hovered.label-text.color | #FFFFFF |
| Button elevated hovered icon color | md.comp.button.elevated.hovered.icon.color | #6750A4 |
| Button elevated hovered icon color - toggle (unselected) | md.comp.button.elevated.unselected.hovered.icon.color | #6750A4 |
| Button elevated hovered icon color - toggle (selected) | md.comp.button.elevated.selected.hovered.icon.color | #FFFFFF |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated focused container state layer color | md.comp.button.elevated.focused.state-layer.color | #6750A4 |
| Button elevated focused container state layer color - toggle (unselected) | md.comp.button.elevated.unselected.focused.state-layer.color | #6750A4 |
| Button elevated focused container state layer color - toggle (selected) | md.comp.button.elevated.selected.focused.state-layer.color | #FFFFFF |
| Button elevated focused container state layer opacity | md.comp.button.elevated.focused.state-layer.opacity | 0.1 |
| Button elevated focused container state layer elevation | md.comp.button.elevated.focused.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Button elevated focused label color | md.comp.button.elevated.focused.label-text.color | #6750A4 |
| Button elevated focused label color - toggle (unselected) | md.comp.button.elevated.unselected.focused.label-text.color | #6750A4 |
| Button elevated focused label color - toggle (selected) | md.comp.button.elevated.selected.focused.label-text.color | #FFFFFF |
| Button elevated focused icon color | md.comp.button.elevated.focused.icon.color | #6750A4 |
| Button elevated focused icon color - toggle (unselected) | md.comp.button.elevated.unselected.focused.icon.color | #6750A4 |
| Button elevated focused icon color - toggle (selected) | md.comp.button.elevated.selected.focused.icon.color | #FFFFFF |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated pressed container state layer color | md.comp.button.elevated.pressed.state-layer.color | #6750A4 |
| Button elevated pressed container state layer color - toggle (unselected) | md.comp.button.elevated.unselected.pressed.state-layer.color | #6750A4 |
| Button elevated pressed container state layer color - toggle (selected) | md.comp.button.elevated.selected.pressed.state-layer.color | #FFFFFF |
| Button elevated pressed container state layer opacity | md.comp.button.elevated.pressed.state-layer.opacity | 0.1 |
| Button elevated pressed container state layer elevation | md.comp.button.elevated.pressed.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Button elevated pressed label color | md.comp.button.elevated.pressed.label-text.color | #6750A4 |
| Button elevated pressed label color - toggle (unselected) | md.comp.button.elevated.unselected.pressed.label-text.color | #6750A4 |
| Button elevated pressed label color - toggle (selected) | md.comp.button.elevated.selected.pressed.label-text.color | #FFFFFF |
| Button elevated pressed icon color | md.comp.button.elevated.pressed.icon.color | #6750A4 |
| Button elevated pressed icon color - toggle (unselected) | md.comp.button.elevated.unselected.pressed.icon.color | #6750A4 |
| Button elevated pressed icon color - toggle (selected) | md.comp.button.elevated.selected.pressed.icon.color | #FFFFFF |

### Button - Color - Filled

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled container color | md.comp.button.filled.container.color | #6750A4 |
| Button filled container color - toggle (unselected) | md.comp.button.filled.unselected.container.color | #F3EDF7 |
| Button filled container color - toggle (selected) | md.comp.button.filled.selected.container.color | #6750A4 |
| Button filled shadow color | md.comp.button.filled.container.shadow-color | #000000 |
| Button filled elevation | md.comp.button.filled.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button filled label color | md.comp.button.filled.label-text.color | #FFFFFF |
| Button filled label color - toggle (unselected) | md.comp.button.filled.unselected.label-text.color | #49454F |
| Button filled label color - toggle (selected) | md.comp.button.filled.selected.label-text.color | #FFFFFF |
| Button filled icon color | md.comp.button.filled.icon.color | #FFFFFF |
| Button filled icon color - toggle (unselected) | md.comp.button.filled.unselected.icon.color | #49454F |
| Button filled icon color - toggle (selected) | md.comp.button.filled.selected.icon.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled disabled container color | md.comp.button.filled.disabled.container.color | #1D1B20 |
| Button filled disabled container opacity | md.comp.button.filled.disabled.container.opacity | 0.1 |
| Button filled disabled container elevation | md.comp.button.filled.disabled.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button filled disabled label color | md.comp.button.filled.disabled.label-text.color | #1D1B20 |
| Button filled disabled label opacity | md.comp.button.filled.disabled.label-text.opacity | 0.38 |
| Button filled disabled icon color | md.comp.button.filled.disabled.icon.color | #1D1B20 |
| Button filled disabled icon opacity | md.comp.button.filled.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled hovered container state layer color | md.comp.button.filled.hovered.state-layer.color | #FFFFFF |
| Button filled hovered container state layer color - toggle (unselected) | md.comp.button.filled.unselected.hovered.state-layer.color | #49454F |
| Button filled hovered container state layer color - toggle (selected) | md.comp.button.filled.selected.hovered.state-layer.color | #FFFFFF |
| Button filled hovered container state layer opacity | md.comp.button.filled.hovered.state-layer.opacity | 0.08 |
| Button filled hovered label color | md.comp.button.filled.hovered.label-text.color | #FFFFFF |
| Button filled hovered label color - toggle (unselected) | md.comp.button.filled.unselected.hovered.label-text.color | #49454F |
| Button filled hovered label color - toggle (selected) | md.comp.button.filled.selected.hovered.label-text.color | #FFFFFF |
| Button filled hovered icon color | md.comp.button.filled.hovered.icon.color | #FFFFFF |
| Button filled hovered icon color - toggle (unselected) | md.comp.button.filled.unselected.hovered.icon.color | #49454F |
| Button filled hovered icon color - toggle (selected) | md.comp.button.filled.selected.hovered.icon.color | #FFFFFF |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled focused container state layer color | md.comp.button.filled.focused.state-layer.color | #FFFFFF |
| Button filled focused container state layer color - toggle (unselected) | md.comp.button.filled.unselected.focused.state-layer.color | #49454F |
| Button filled focused container state layer color - toggle (selected) | md.comp.button.filled.selected.focused.state-layer.color | #FFFFFF |
| Button filled focused container state layer opacity | md.comp.button.filled.focused.state-layer.opacity | 0.1 |
| Button filled focused container state layer elevation | md.comp.button.filled.focused.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button filled focused label color | md.comp.button.filled.focused.label-text.color | #FFFFFF |
| Button filled focused label color - toggle (unselected) | md.comp.button.filled.unselected.focused.label-text.color | #49454F |
| Button filled focused label color - toggle (selected) | md.comp.button.filled.selected.focused.label-text.color | #FFFFFF |
| Button filled focused icon color | md.comp.button.filled.focused.icon.color | #FFFFFF |
| Button filled focused icon color - toggle (unselected) | md.comp.button.filled.unselected.focused.icon.color | #49454F |
| Button filled focused icon color - toggle (selected) | md.comp.button.filled.selected.focused.icon.color | #FFFFFF |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled pressed container state layer color | md.comp.button.filled.pressed.state-layer.color | #FFFFFF |
| Button filled pressed container state layer color - toggle (unselected) | md.comp.button.filled.unselected.pressed.state-layer.color | #49454F |
| Button filled pressed container state layer color - toggle (selected) | md.comp.button.filled.selected.pressed.state-layer.color | #FFFFFF |
| Button filled pressed container state layer opacity | md.comp.button.filled.pressed.state-layer.opacity | 0.1 |
| Button filled pressed container state layer elevation | md.comp.button.filled.pressed.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button filled pressed label color | md.comp.button.filled.pressed.label-text.color | #FFFFFF |
| Button filled pressed label color - toggle (unselected) | md.comp.button.filled.unselected.pressed.label-text.color | #49454F |
| Button filled pressed label color - toggle (selected) | md.comp.button.filled.selected.pressed.label-text.color | #FFFFFF |
| Button filled pressed icon color | md.comp.button.filled.pressed.icon.color | #FFFFFF |
| Button filled pressed icon color - toggle (unselected) | md.comp.button.filled.unselected.pressed.icon.color | #49454F |
| Button filled pressed icon color - toggle (selected) | md.comp.button.filled.selected.pressed.icon.color | #FFFFFF |

### Button - Color - Tonal

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal container color | md.comp.button.tonal.container.color | #E8DEF8 |
| Button tonal container color - toggle (unselected) | md.comp.button.tonal.unselected.container.color | #E8DEF8 |
| Button tonal container color - toggle (selected) | md.comp.button.tonal.selected.container.color | #625B71 |
| Button tonal shadow color | md.comp.button.tonal.container.shadow-color | #000000 |
| Button tonal elevation | md.comp.button.tonal.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button tonal label color | md.comp.button.tonal.label-text.color | #4A4458 |
| Button tonal label color - toggle (unselected) | md.comp.button.tonal.unselected.label-text.color | #4A4458 |
| Button tonal label color - toggle (selected) | md.comp.button.tonal.selected.label-text.color | #FFFFFF |
| Button tonal icon color | md.comp.button.tonal.icon.color | #4A4458 |
| Button tonal icon color - toggle (unselected) | md.comp.button.tonal.unselected.icon.color | #4A4458 |
| Button tonal icon color - toggle (selected) | md.comp.button.tonal.selected.icon.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal disabled container color | md.comp.button.tonal.disabled.container.color | #1D1B20 |
| Button tonal disabled container opacity | md.comp.button.tonal.disabled.container.opacity | 0.1 |
| Button tonal disabled container elevation | md.comp.button.tonal.disabled.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button tonal disabled label color | md.comp.button.tonal.disabled.label-text.color | #1D1B20 |
| Button tonal disabled label opacity | md.comp.button.tonal.disabled.label-text.opacity | 0.38 |
| Button tonal disabled icon color | md.comp.button.tonal.disabled.icon.color | #1D1B20 |
| Button tonal disabled icon opacity | md.comp.button.tonal.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal hovered container state layer color | md.comp.button.tonal.hovered.state-layer.color | #4A4458 |
| Button tonal hovered container state layer color - toggle (unselected) | md.comp.button.tonal.unselected.hovered.state-layer.color | #4A4458 |
| Button tonal hovered container state layer color - toggle (selected) | md.comp.button.tonal.selected.hovered.state-layer.color | #FFFFFF |
| Button tonal hovered container state layer opacity | md.comp.button.tonal.hovered.state-layer.opacity | 0.08 |
| Button tonal hovered label color | md.comp.button.tonal.hovered.label-text.color | #4A4458 |
| Button tonal hovered label color - toggle (unselected) | md.comp.button.tonal.unselected.hovered.label-text.color | #4A4458 |
| Button tonal hovered label color - toggle (selected) | md.comp.button.tonal.selected.hovered.label-text.color | #FFFFFF |
| Button tonal hovered icon color | md.comp.button.tonal.hovered.icon.color | #4A4458 |
| Button tonal hovered icon color - toggle (unselected) | md.comp.button.tonal.unselected.hovered.icon.color | #4A4458 |
| Button tonal hovered icon color - toggle (selected) | md.comp.button.tonal.selected.hovered.icon.color | #FFFFFF |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal focused container state layer color | md.comp.button.tonal.focused.state-layer.color | #4A4458 |
| Button tonal focused container state layer color - toggle (unselected) | md.comp.button.tonal.unselected.focused.state-layer.color | #4A4458 |
| Button tonal focused container state layer color - toggle (selected) | md.comp.button.tonal.selected.focused.state-layer.color | #FFFFFF |
| Button tonal focused container state layer opacity | md.comp.button.tonal.focused.state-layer.opacity | 0.1 |
| Button tonal focused container state layer elevation | md.comp.button.tonal.focused.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button tonal focused label color | md.comp.button.tonal.focused.label-text.color | #4A4458 |
| Button tonal focused label color - toggle (unselected) | md.comp.button.tonal.unselected.focused.label-text.color | #4A4458 |
| Button tonal focused label color - toggle (selected) | md.comp.button.tonal.selected.focused.label-text.color | #FFFFFF |
| Button tonal focused icon color | md.comp.button.tonal.focused.icon.color | #4A4458 |
| Button tonal focused icon color - toggle (unselected) | md.comp.button.tonal.unselected.focused.icon.color | #4A4458 |
| Button tonal focused icon color - toggle (selected) | md.comp.button.tonal.selected.focused.icon.color | #FFFFFF |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal pressed container state layer color | md.comp.button.tonal.pressed.state-layer.color | #4A4458 |
| Button tonal pressed container state layer color - toggle (unselected) | md.comp.button.tonal.unselected.pressed.state-layer.color | #4A4458 |
| Button tonal pressed container state layer color - toggle (selected) | md.comp.button.tonal.selected.pressed.state-layer.color | #FFFFFF |
| Button tonal pressed container state layer opacity | md.comp.button.tonal.pressed.state-layer.opacity | 0.1 |
| Button tonal pressed container state layer elevation | md.comp.button.tonal.pressed.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Button tonal pressed label color | md.comp.button.tonal.pressed.label-text.color | #4A4458 |
| Button tonal pressed label color - toggle (unselected) | md.comp.button.tonal.unselected.pressed.label-text.color | #4A4458 |
| Button tonal pressed label color - toggle (selected) | md.comp.button.tonal.selected.pressed.label-text.color | #FFFFFF |
| Button tonal pressed icon color | md.comp.button.tonal.pressed.icon.color | #4A4458 |
| Button tonal pressed icon color - toggle (unselected) | md.comp.button.tonal.unselected.pressed.icon.color | #4A4458 |
| Button tonal pressed icon color - toggle (selected) | md.comp.button.tonal.selected.pressed.icon.color | #FFFFFF |

### Button - Color - Outlined

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined outline color | md.comp.button.outlined.outline.color | #CAC4D0 |
| Button outlined container color - toggle (selected) | md.comp.button.outlined.selected.container.color | #322F35 |
| Button outlined label color | md.comp.button.outlined.label-text.color | #49454F |
| Button outlined label color - toggle (unselected) | md.comp.button.outlined.unselected.label-text.color | #49454F |
| Button outlined label color - toggle (selected) | md.comp.button.outlined.selected.label-text.color | #F5EFF7 |
| Button outlined icon color | md.comp.button.outlined.icon.color | #49454F |
| Button outlined icon color - toggle (unselected) | md.comp.button.outlined.unselected.icon.color | #49454F |
| Button outlined icon color - toggle (selected) | md.comp.button.outlined.selected.icon.color | #F5EFF7 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined disabled outline color | md.comp.button.outlined.disabled.outline.color | #CAC4D0 |
| Button outlined disabled outline color (unselected) | md.comp.button.outlined.unselected.disabled.outline.color | #CAC4D0 |
| Button outlined disabled container color (selected) | md.comp.button.outlined.selected.disabled.container.color | #1D1B20 |
| Button outlined disabled container opacity | md.comp.button.outlined.disabled.container.opacity | 0.1 |
| Button outlined disabled label color | md.comp.button.outlined.disabled.label-text.color | #1D1B20 |
| Button outlined disabled label opacity | md.comp.button.outlined.disabled.label-text.opacity | 0.38 |
| Button outlined disabled icon color | md.comp.button.outlined.disabled.icon.color | #1D1B20 |
| Button outlined disabled icon opacity | md.comp.button.outlined.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined hovered state layer color | md.comp.button.outlined.hovered.state-layer.color | #49454F |
| Button outlined hovered state layer color - toggle (unselected) | md.comp.button.outlined.unselected.hovered.state-layer.color | #49454F |
| Button outlined hovered state layer color - toggle (selected) | md.comp.button.outlined.selected.hovered.state-layer.color | #F5EFF7 |
| Button outlined hovered state layer opacity | md.comp.button.outlined.hovered.state-layer.opacity | 0.08 |
| Button outlined hovered outline color | md.comp.button.outlined.hovered.outline.color | #CAC4D0 |
| Button outlined hovered outline color - toggle (unselected) | md.comp.button.outlined.unselected.hovered.outline.color | #CAC4D0 |
| Button outlined hovered label color | md.comp.button.outlined.hovered.label-text.color | #49454F |
| Button outlined hovered label color - toggle (unselected) | md.comp.button.outlined.unselected.hovered.label-text.color | #49454F |
| Button outlined hovered label color - toggle (selected) | md.comp.button.outlined.selected.hovered.label-text.color | #F5EFF7 |
| Button outlined hovered icon color | md.comp.button.outlined.hovered.icon.color | #49454F |
| Button outlined hovered icon color - toggle (unselected) | md.comp.button.outlined.unselected.hovered.icon.color | #49454F |
| Button outlined hovered icon color - toggle (selected) | md.comp.button.outlined.selected.hovered.icon.color | #F5EFF7 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined focused container state layer color | md.comp.button.outlined.focused.state-layer.color | #49454F |
| Button outlined focused container state layer color - toggle (unselected) | md.comp.button.outlined.unselected.focused.state-layer.color | #49454F |
| Button outlined focused container state layer color - toggle (selected) | md.comp.button.outlined.selected.focused.state-layer.color | #F5EFF7 |
| Button outlined focused container state layer opacity | md.comp.button.outlined.focused.state-layer.opacity | 0.1 |
| Button outlined focused outline color | md.comp.button.outlined.focused.outline.color | #CAC4D0 |
| Button outlined focused outline color - toggle (unselected) | md.comp.button.outlined.unselected.focused.outline.color | #CAC4D0 |
| Button outlined focused label color | md.comp.button.outlined.focused.label-text.color | #49454F |
| Button outlined focused label color - toggle (unselected) | md.comp.button.outlined.unselected.focused.label-text.color | #49454F |
| Button outlined focused label color - toggle (selected) | md.comp.button.outlined.selected.focused.label-text.color | #F5EFF7 |
| Button outlined focused icon color | md.comp.button.outlined.focused.icon.color | #49454F |
| Button outlined focused icon color - toggle (unselected) | md.comp.button.outlined.unselected.focused.icon.color | #49454F |
| Button outlined focused icon color - toggle (selected) | md.comp.button.outlined.selected.focused.icon.color | #F5EFF7 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined pressed container state layer color | md.comp.button.outlined.pressed.state-layer.color | #49454F |
| Button outlined pressed container state layer color - toggle (unselected) | md.comp.button.outlined.unselected.pressed.state-layer.color | #49454F |
| Button outlined pressed container state layer color - toggle (selected) | md.comp.button.outlined.selected.pressed.state-layer.color | #F5EFF7 |
| Button outlined pressed container state layer opacity | md.comp.button.outlined.pressed.state-layer.opacity | 0.1 |
| Button outlined pressed outline color | md.comp.button.outlined.pressed.outline.color | #CAC4D0 |
| Button outlined pressed outline color - toggle (unselected) | md.comp.button.outlined.unselected.pressed.outline.color | #CAC4D0 |
| Button outlined pressed label color | md.comp.button.outlined.pressed.label-text.color | #49454F |
| Button outlined pressed label color - toggle (unselected) | md.comp.button.outlined.unselected.pressed.label-text.color | #49454F |
| Button outlined pressed label color - toggle (selected) | md.comp.button.outlined.selected.pressed.label-text.color | #F5EFF7 |
| Button outlined pressed icon color | md.comp.button.outlined.pressed.icon.color | #49454F |
| Button outlined pressed icon color - toggle (unselected) | md.comp.button.outlined.unselected.pressed.icon.color | #49454F |
| Button outlined pressed icon color - toggle (selected) | md.comp.button.outlined.selected.pressed.icon.color | #F5EFF7 |

### Button - Color - Text

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button text label color | md.comp.button.text.label-text.color | #6750A4 |
| Button text icon color | md.comp.button.text.icon.color | #6750A4 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button text disabled container color | md.comp.button.text.disabled.container.color | #1D1B20 |
| Button text disabled container opacity | md.comp.button.text.disabled.container.opacity | 0.1 |
| Button text disabled label color | md.comp.button.text.disabled.label-text.color | #1D1B20 |
| Button text disabled label opacity | md.comp.button.text.disabled.label-text.opacity | 0.38 |
| Button text disabled icon color | md.comp.button.text.disabled.icon.color | #1D1B20 |
| Button text disabled icon opacity | md.comp.button.text.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button text hovered state layer color | md.comp.button.text.hovered.state-layer.color | #6750A4 |
| Button text hovered state layer opacity | md.comp.button.text.hovered.state-layer.opacity | 0.08 |
| Button text hovered label color | md.comp.button.text.hovered.label-text.color | #6750A4 |
| Button text hovered icon color | md.comp.button.text.hovered.icon.color | #6750A4 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button text focused state layer color | md.comp.button.text.focused.state-layer.color | #6750A4 |
| Button text focused state layer opacity | md.comp.button.text.focused.state-layer.opacity | 0.1 |
| Button text focused label color | md.comp.button.text.focused.label-text.color | #6750A4 |
| Button text focused icon color | md.comp.button.text.focused.icon.color | #6750A4 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button text pressed state layer color | md.comp.button.text.pressed.state-layer.color | #6750A4 |
| Button text pressed state layer opacity | md.comp.button.text.pressed.state-layer.opacity | 0.1 |
| Button text pressed label color | md.comp.button.text.pressed.label-text.color | #6750A4 |
| Button text pressed icon color | md.comp.button.text.pressed.icon.color | #6750A4 |

### Button - Size - Xsmall

| Token | Reference | Value |
|-------|-----------|-------|
| Button xsmall container height | md.comp.button.xsmall.container.height | 32dp |
| Button xsmall outline width | md.comp.button.xsmall.outlined.outline.width | 1dp |
| Button xsmall label size | md.comp.button.xsmall.label-text | Font: ? (Roboto, 500, 14pt/20pt, 0.1pt) |
| Button xsmall icon size | md.comp.button.xsmall.icon.size | 20dp |
| Button xsmall shape round | md.comp.button.xsmall.container.shape.round | Shape: md.sys.shape.corner.full (rounded_corner) |
| Button xsmall shape square | md.comp.button.xsmall.container.shape.square | Shape: md.sys.shape.corner.medium (Button xsmall shape square, 12dp) |
| Button xsmall leading space | md.comp.button.xsmall.leading-space | 12dp |
| Button xsmall between icon label space | md.comp.button.xsmall.icon-label-space | 8dp |
| Button xsmall trailing space | md.comp.button.xsmall.trailing-space | 12dp |
| Button xsmall shape pressed morph | md.comp.button.xsmall.pressed.container.shape | Shape: md.sys.shape.corner.small (rounded_corner, 8dp) |
| Button xsmall shape spring animation damping | md.comp.button.xsmall.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Button xsmall shape spring animation stiffness | md.comp.button.xsmall.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Button xsmall selected container shape round | md.comp.button.xsmall.selected.container.shape.round | Shape: md.sys.shape.corner.medium (rounded_corner, 12dp) |
| Button xsmall selected container shape square | md.comp.button.xsmall.selected.container.shape.square | Shape: md.sys.shape.corner.full (Button xsmall selected container shape square) |

### Button - Size - Small

| Token | Reference | Value |
|-------|-----------|-------|
| Button small container height | md.comp.button.small.container.height | 40dp |
| Button small outline width | md.comp.button.small.outlined.outline.width | 1dp |
| Button small label size | md.comp.button.small.label-text | Font: ? (Roboto, 500, 14pt/20pt, 0.1pt) |
| Button small icon size | md.comp.button.small.icon.size | 20dp |
| Button small shape round | md.comp.button.small.container.shape.round | Shape: md.sys.shape.corner.full (rounded_corner) |
| Button small shape square | md.comp.button.small.container.shape.square | Shape: md.sys.shape.corner.medium (Button small shape square, 12dp) |
| Button small leading space | md.comp.button.small.leading-space | 16dp |
| Button small between icon label space | md.comp.button.small.icon-label-space | 8dp |
| Button small trailing space | md.comp.button.small.trailing-space | 16dp |
| Button small shape pressed morph | md.comp.button.small.pressed.container.shape | Shape: md.sys.shape.corner.small (rounded_corner, 8dp) |
| Button small shape spring animation damping | md.comp.button.small.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Button small shape spring animation stiffness | md.comp.button.small.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Button small selected container shape round | md.comp.button.small.selected.container.shape.round | Shape: md.sys.shape.corner.medium (rounded_corner, 12dp) |
| Button small selected container shape square | md.comp.button.small.selected.container.shape.square | Shape: md.sys.shape.corner.full (Button small selected container shape square) |

### Button - Size - Medium

| Token | Reference | Value |
|-------|-----------|-------|
| Button medium container height | md.comp.button.medium.container.height | 56dp |
| Button medium outline width | md.comp.button.medium.outlined.outline.width | 1dp |
| Button medium label size | md.comp.button.medium.label-text | Font: ? (Roboto, 500, 16pt/24pt, 0.15pt) |
| Button medium icon size | md.comp.button.medium.icon.size | 24dp |
| Button medium shape round | md.comp.button.medium.container.shape.round | Shape: md.sys.shape.corner.full (rounded_corner) |
| Button medium shape square | md.comp.button.medium.container.shape.square | Shape: md.sys.shape.corner.large (Button medium shape square, 16dp) |
| Button medium leading space | md.comp.button.medium.leading-space | 24dp |
| Button medium between icon label space | md.comp.button.medium.icon-label-space | 8dp |
| Button medium trailing space | md.comp.button.medium.trailing-space | 24dp |
| Button medium shape pressed morph | md.comp.button.medium.pressed.container.shape | Shape: md.sys.shape.corner.medium (rounded_corner, 12dp) |
| Button medium shape spring animation damping | md.comp.button.medium.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Button medium shape spring animation stiffness | md.comp.button.medium.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Button medium selected container shape round | md.comp.button.medium.selected.container.shape.round | Shape: md.sys.shape.corner.large (rounded_corner, 16dp) |
| Button medium selected container shape square | md.comp.button.medium.selected.container.shape.square | Shape: md.sys.shape.corner.full (Button medium selected container shape square) |

### Button - Size - Large

| Token | Reference | Value |
|-------|-----------|-------|
| Button large container height | md.comp.button.large.container.height | 96dp |
| Button large outline width | md.comp.button.large.outlined.outline.width | 2dp |
| Button large label size | md.comp.button.large.label-text | Font: ? (Roboto, 400, 24pt/32pt, 0) |
| Button large icon size | md.comp.button.large.icon.size | 32dp |
| Button large shape round | md.comp.button.large.container.shape.round | Shape: md.sys.shape.corner.full (rounded_corner) |
| Button large shape square | md.comp.button.large.container.shape.square | Shape: md.sys.shape.corner.extra-large (Button large shape square, 28dp) |
| Button large leading space | md.comp.button.large.leading-space | 48dp |
| Button large between icon label space | md.comp.button.large.icon-label-space | 12dp |
| Button large trailing space | md.comp.button.large.trailing-space | 48dp |
| Button large shape pressed morph | md.comp.button.large.pressed.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, 16dp) |
| Button large shape spring animation damping | md.comp.button.large.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Button large shape spring animation stiffness | md.comp.button.large.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Button large selected container shape round | md.comp.button.large.selected.container.shape.round | Shape: md.sys.shape.corner.extra-large (rounded_corner, 28dp) |
| Button large selected container shape square | md.comp.button.large.selected.container.shape.square | Shape: md.sys.shape.corner.full (Button large selected container shape square) |

### Button - Size - Xlarge

| Token | Reference | Value |
|-------|-----------|-------|
| Button xlarge container height | md.comp.button.xlarge.container.height | 136dp |
| Button xlarge outline width | md.comp.button.xlarge.outlined.outline.width | 3dp |
| Button xlarge label size | md.comp.button.xlarge.label-text | Font: ? (Roboto, 400, 32pt/40pt, 0) |
| Button xlarge icon size | md.comp.button.xlarge.icon.size | 40dp |
| Button xlarge shape round | md.comp.button.xlarge.container.shape.round | Shape: md.sys.shape.corner.full (rounded_corner) |
| Button xlarge shape square | md.comp.button.xlarge.container.shape.square | Shape: md.sys.shape.corner.extra-large (Button xlarge shape square, 28dp) |
| Button xlarge leading space | md.comp.button.xlarge.leading-space | 64dp |
| Button xlarge between icon label space | md.comp.button.xlarge.icon-label-space | 16dp |
| Button xlarge trailing space | md.comp.button.xlarge.trailing-space | 64dp |
| Button xlarge shape pressed morph | md.comp.button.xlarge.pressed.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, 16dp) |
| Button xlarge shape spring animation damping | md.comp.button.xlarge.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Button xlarge shape spring animation stiffness | md.comp.button.xlarge.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Button xlarge selected container shape round | md.comp.button.xlarge.selected.container.shape.round | Shape: md.sys.shape.corner.extra-large (rounded_corner, 28dp) |
| Button xlarge selected container shape square | md.comp.button.xlarge.selected.container.shape.square | Shape: md.sys.shape.corner.full (Button xlarge selected container shape square) |

## Anatomy

![Diagram labeling 3 parts of a button.](https://lh3.googleusercontent.com/Vd3wDLwuuQXUGiUdmogIFMY3V4WzpDIz9WvepaTJAmdJhaiKXTxshhrlEwJizdXlvsISt1vMjtSw5AdEr74lkf-uocBR-renjDhE95DrK05r=w40)

## Color

Color values are implemented through design tokens Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code. More on tokens . For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.There are five built-in button color styles: elevated, filled, tonal, outlined, and textThe default and toggle buttons use different colorsToggle buttons don't use the text style

> **Note:** These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Diagram shows dark and light color schemes for buttons.](https://lh3.googleusercontent.com/rniAgyk0C8Ys1AH7Lxciu7xnv8p_HA8iVm0AmoTKx5Ntedg_FdE0W66BG1udiPwCbGek3f0g8R2vlirupxprvRfYX8ID2uslj_bVROAMHgI=w40)

| | 1. Default | 2. Toggle unselected | 3. Toggle selected |
|---|---|---|---|
| Elevated containerElevated icon & label | Surface container lowPrimary | Surface container lowPrimary | PrimaryOn primary |
| Filled containerFilled icon & label | PrimaryOn primary | Surface containerOn surface variant | PrimaryOn primary |
| Tonal containerTonal icon & label | Secondary containerOn secondary container | Secondary containerOn secondary container | SecondaryOn secondary |
| Outlined containerOutlined icon & label | Outline variant (outline)On surface variant | Outline variant (outline)On surface variant | Inverse surfaceInverse on surface |
| Text icon & label | Primary | -- | -- |

## States

States show the interaction status of a component or UI element.

### Elevated button states

Default

![Elevated button states.](https://lh3.googleusercontent.com/n_5apeWPNXiSqDwG3UYvNY5A-FyHJOvbkdqH0Mq47KIxzVbHAq76C6DM1jG_TYTWiHgMPMjgdWA8N3zSKVM2ISe5HiS3MdV5P_u6A8rscjg=w40)

Toggle

![Toggle elevated button states.](https://lh3.googleusercontent.com/GQDxPmCDjJpgGWRA_VTNzseTsmouIs0lh8IVP8woIQk4cgCiAnDMZThBIfxG1GHEqTlUoL585KoCLj8c-1gmGB4OXQJs9qhHkSyjVB0ad6tE=w40)

### Filled button states

Default

![Filled button states.](https://lh3.googleusercontent.com/RwG9SEB4yIRACbW517DyRW2mUveISG198EE64jJb0f277Q33MLyuP9uiKdCmeWhZeWKXDx_yRiSQtlWlpaFp2kRVRX7LlCN5TWc-QwwqszbX3Q=w40)

Toggle

![Toggle filled button states.](https://lh3.googleusercontent.com/E5kuWUQdXuEsPuAXHuafbZFRyWBRb--3WQE9SxTnDTxerb8-pzFKMV5aRuUDe5LA80MxUYbbQOZiDC-Z33okhaKxPfPOgJ-biOGjtD8lbZ95=w40)

### Tonal button states

Default

![Tonal button states.](https://lh3.googleusercontent.com/wdF2kYSVD8W-FnPza7kOisTKCDc5FZKUskKzi8j3yZ0m7Ras4cKeoBCwUjpRr4EXjlSia_UfiRWFCCXl4VhbU9ZiwpbpVZetlqdtRGey0LU=w40)

Toggle

![Toggle tonal button states.](https://lh3.googleusercontent.com/SKh3_709LukNHRLX1h-4h3GWRx_g-PfrLaU28b33QM11qyAwNH2d-NPumu2KYhi9TECvF2QqeQ4ptDYUxgdMvdYTbcTiwmm-dsg6CS8Bd_0=w40)

### Outlined button states

The outlined button's container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

Default

![Outlined button states.](https://lh3.googleusercontent.com/0RiSKbIPPzMC64WPAmZrA0Xi2bxyaBAQ8vmzHpEp1yjrhjSJqC0xv3_4jJgYaqh7v4BH7lAJZXkkN_HVyyIupF2JQQWfsYkCl5w2Pd_HEq90=w40)

Toggle

![Outlined button states.](https://lh3.googleusercontent.com/U9yJ0EWfejvgr2j2FQRTLwN2Fk4H0pM4JxoYvRkql-jgBFGSqS26j--nqv_a23AL1Fhsjk5GAjgK4E1h_zDezwK_14acNyWL1Gy4_DWIgkY=w40)

### Text button style states

The text button's container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

![Default text button style states.](https://lh3.googleusercontent.com/BYjS_Tdp0yXd5Dh1aupX_ELYzONtiZU21cT0y1kA5Pb3ne2T43AcIQ85r6jYIkHW6yRp0kQb7TNPiw5qKB9OuAyLUK1GKAa84krq1YOktFnf=w40)

## Shape morph

### Pressed state

### When selected

## Measurements

![Diagram of measurements of all button sizes.](https://lh3.googleusercontent.com/JI2E9iCMwHgDDeC9fzCaTP1M974jPyBdpsV1OJoM83PKO0IINS4OUaPbdn9iT6ogQQqtFeBYb_IBT_sycEUkj3S6t4KEjZbGE1xT7-RL0JDX=w40)

### Target areas

![Diagram of small button target areas.](https://lh3.googleusercontent.com/35JMIvVuBd4UPv4LMpZ6rM_Hkn4S2UZlra92CcqY20cPp9334PxNr8KPaR-1P1d8q6Emonifwrp79hmxD5e2Ia_FQBDuKQhTKptbwn8uvPNZUQ=w40)

### Corner sizes

![Diagram of corner radii of buttons.](https://lh3.googleusercontent.com/sULNWNl9-8wPo3EiYHaqeFSTE3FnFXFotQmIJzabpV-JJPCaSWvwhK3u82A6CeaMqBYmQz3dyWBArTDULDf2FRWfTYV2ZtrX0IA2na9bdbJa=w40)

| | XS | S | M | L | XL |
|---|---|---|---|---|---|
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |
