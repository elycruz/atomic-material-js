# Split Buttons: Specs

## Variants

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Split button | -- | Available |

## Configurations

- Color configurations: Elevated, filled, tonal, outlined
- Size configurations: XS, S, M, L, XL

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|-----|
| Size | XS, S, M, L, XL | -- | Available |
| Color | Elevated, filled, tonal, outlined | -- | Available |

## Anatomy

- Leading button
- Icon
- Label text
- Trailing button

The leading button in split buttons can have an icon, label text, or both. The trailing button should always have a menu icon.

Options:
- Label + icon
- Label
- Icon

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

Split buttons use the same color schemes as standard buttons. However, unlike toggle buttons, the split button color doesn't change when selected—only a state layer is applied.

Split buttons use the same colors and state layers as buttons.

**Color Styles:** Elevated, Filled, Tonal, Outlined

## States

States are visual representations used to communicate the status of a component or interactive element. Split button states use the same colors and state layers as buttons and icon buttons.

### Leading Button Shape

The inner corners change shape for hovered, focused, and pressed states.

- Enabled
- Disabled
- Hovered
- Focused
- Pressed, pressed with focus

### Trailing Button Shape

The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.

- Enabled
- Disabled
- Hovered
- Focused
- Pressed, pressed with focus
- Selected, selected with focus

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They're centered normally when symmetrical.

### Menu Icon Offset When Unselected

- XS: -1dp from center
- S: -1dp from center
- M: -2dp from center
- L: -3dp from center
- XL: -6dp from center

### Inner Corner Radius

The inner corner radius changes depending on button sizing. The space should always be 2dp.

- Extra small: 4dp
- Small: 4dp
- Medium: 4dp
- Large: 8dp
- Extra large: 12dp

## Tokens & Specs

Use the table's menu to select a token set. Split button token sets are organized by size.

**Note:** Learn about design tokens.

### Button - Color - Outlined


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined outline color | md.comp.button.outlined.outline.color | #79747E |
| Button outlined outline color - toggle (unselected) | md.comp.button.outlined.unselected.outline.color | #79747E |
| Button outlined outline color - toggle (selected) | md.comp.button.outlined.selected.outline.color | #6750A4 |
| Button outlined container color | md.comp.button.outlined.container.color | #CAC4D0 |
| Button outlined container color - toggle (unselected) | md.comp.button.outlined.unselected.container.color | Transparent |
| Button outlined container color - toggle (selected) | md.comp.button.outlined.selected.container.color | #6750A4 |
| Button outlined label color | md.comp.button.outlined.label-text.color | #6750A4 |
| Button outlined label color - toggle (unselected) | md.comp.button.outlined.unselected.label-text.color | #6750A4 |
| Button outlined label color - toggle (selected) | md.comp.button.outlined.selected.label-text.color | #FFFFFF |
| Button outlined icon color | md.comp.button.outlined.icon.color | #6750A4 |
| Button outlined icon color - toggle (unselected) | md.comp.button.outlined.unselected.icon.color | #6750A4 |
| Button outlined icon color - toggle (selected) | md.comp.button.outlined.selected.icon.color | #FFFFFF |
| Button outlined state layer color | md.comp.button.outlined.state-layer.color | #6750A4 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined outline color | md.comp.button.outlined.disabled.outline.color | #12131380 |
| Button outlined label color | md.comp.button.outlined.disabled.label-text.color | #12131380 |
| Button outlined icon color | md.comp.button.outlined.disabled.icon.color | #12131380 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined state layer opacity | md.comp.button.outlined.hovered.state-layer.opacity | 0.08 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined state layer opacity | md.comp.button.outlined.focused.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button outlined state layer opacity | md.comp.button.outlined.pressed.state-layer.opacity | 0.12 |

### Button - Color - Tonal


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal container color | md.comp.button.tonal.container.color | #EDE1F9 |
| Button tonal container color - toggle (unselected) | md.comp.button.tonal.unselected.container.color | #EDE1F9 |
| Button tonal container color - toggle (selected) | md.comp.button.tonal.selected.container.color | #6750A4 |
| Button tonal label color | md.comp.button.tonal.label-text.color | #6750A4 |
| Button tonal label color - toggle (unselected) | md.comp.button.tonal.unselected.label-text.color | #6750A4 |
| Button tonal label color - toggle (selected) | md.comp.button.tonal.selected.label-text.color | #FFFFFF |
| Button tonal icon color | md.comp.button.tonal.icon.color | #6750A4 |
| Button tonal icon color - toggle (unselected) | md.comp.button.tonal.unselected.icon.color | #6750A4 |
| Button tonal icon color - toggle (selected) | md.comp.button.tonal.selected.icon.color | #FFFFFF |
| Button tonal state layer color | md.comp.button.tonal.state-layer.color | #6750A4 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal container color | md.comp.button.tonal.disabled.container.color | #12131680 |
| Button tonal label color | md.comp.button.tonal.disabled.label-text.color | #12131380 |
| Button tonal icon color | md.comp.button.tonal.disabled.icon.color | #12131380 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal state layer opacity | md.comp.button.tonal.hovered.state-layer.opacity | 0.08 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal state layer opacity | md.comp.button.tonal.focused.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button tonal state layer opacity | md.comp.button.tonal.pressed.state-layer.opacity | 0.12 |

### Button - Color - Filled


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled container color | md.comp.button.filled.container.color | #6750A4 |
| Button filled container color - toggle (unselected) | md.comp.button.filled.unselected.container.color | #E8DEF8 |
| Button filled container color - toggle (selected) | md.comp.button.filled.selected.container.color | #6750A4 |
| Button filled label color | md.comp.button.filled.label-text.color | #FFFFFF |
| Button filled label color - toggle (unselected) | md.comp.button.filled.unselected.label-text.color | #6750A4 |
| Button filled label color - toggle (selected) | md.comp.button.filled.selected.label-text.color | #FFFFFF |
| Button filled icon color | md.comp.button.filled.icon.color | #FFFFFF |
| Button filled icon color - toggle (unselected) | md.comp.button.filled.unselected.icon.color | #6750A4 |
| Button filled icon color - toggle (selected) | md.comp.button.filled.selected.icon.color | #FFFFFF |
| Button filled state layer color | md.comp.button.filled.state-layer.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled container color | md.comp.button.filled.disabled.container.color | #12131680 |
| Button filled label color | md.comp.button.filled.disabled.label-text.color | #12131380 |
| Button filled icon color | md.comp.button.filled.disabled.icon.color | #12131380 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled state layer opacity | md.comp.button.filled.hovered.state-layer.opacity | 0.08 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled state layer opacity | md.comp.button.filled.focused.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button filled state layer opacity | md.comp.button.filled.pressed.state-layer.opacity | 0.12 |

### Button - Color - Elevated


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated container color | md.comp.button.elevated.container.color | #F7F2FA |
| Button elevated container color - toggle (unselected) | md.comp.button.elevated.unselected.container.color | #F7F2FA |
| Button elevated container color - toggle (selected) | md.comp.button.elevated.selected.container.color | #6750A4 |
| Button elevated shadow color | md.comp.button.elevated.container.shadow-color | #000000 |
| Button elevated elevation | md.comp.button.elevated.container.elevation |  |
| Button elevated label color | md.comp.button.elevated.label-text.color | #6750A4 |
| Button elevated label color - toggle (unselected) | md.comp.button.elevated.unselected.label-text.color | #6750A4 |
| Button elevated label color - toggle (selected) | md.comp.button.elevated.selected.label-text.color | #FFFFFF |
| Button elevated icon color | md.comp.button.elevated.icon.color | #6750A4 |
| Button elevated icon color - toggle (unselected) | md.comp.button.elevated.unselected.icon.color | #6750A4 |
| Button elevated icon color - toggle (selected) | md.comp.button.elevated.selected.icon.color | #FFFFFF |
| Button elevated state layer color | md.comp.button.elevated.state-layer.color | #6750A4 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated container color | md.comp.button.elevated.disabled.container.color | #12131680 |
| Button elevated label color | md.comp.button.elevated.disabled.label-text.color | #12131380 |
| Button elevated icon color | md.comp.button.elevated.disabled.icon.color | #12131380 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated state layer opacity | md.comp.button.elevated.hovered.state-layer.opacity | 0.08 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated state layer opacity | md.comp.button.elevated.focused.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button elevated state layer opacity | md.comp.button.elevated.pressed.state-layer.opacity | 0.12 |

### Split button - Size - Xlarge


| Token | Reference | Value |
|-------|-----------|-------|
| Split button xlarge container height | md.comp.split-button.xlarge.container.height | 56dp |
| Split button xlarge between space | md.comp.split-button.xlarge.between-space | 2dp |
| Split button xlarge container shape | md.comp.split-button.xlarge.container.shape |  |
| Split button xlarge inner corner size | md.comp.split-button.xlarge.inner-corner.corner-size | 12dp |
| Split button xlarge outer corner size | md.comp.split-button.xlarge.outer-corner.corner-size | 50% |
| Split button xlarge leading button leading space | md.comp.split-button.xlarge.leading-button.leading-space | 16dp |
| Split button xlarge leading button trailing space | md.comp.split-button.xlarge.leading-button.trailing-space | 12dp |
| Split button xlarge trailing button icon size | md.comp.split-button.xlarge.trailing-button.icon.size | 24dp |
| Split button xlarge trailing button leading space | md.comp.split-button.xlarge.trailing-button.leading-space | 16dp |
| Split button xlarge trailing button trailing space | md.comp.split-button.xlarge.trailing-button.trailing-space | 16dp |

### Split button - Size - Large


| Token | Reference | Value |
|-------|-----------|-------|
| Split button large container height | md.comp.split-button.large.container.height | 48dp |
| Split button large between space | md.comp.split-button.large.between-space | 2dp |
| Split button large container shape | md.comp.split-button.large.container.shape |  |
| Split button large inner corner size | md.comp.split-button.large.inner-corner.corner-size | 8dp |
| Split button large outer corner size | md.comp.split-button.large.outer-corner.corner-size | 50% |
| Split button large leading button leading space | md.comp.split-button.large.leading-button.leading-space | 16dp |
| Split button large leading button trailing space | md.comp.split-button.large.leading-button.trailing-space | 12dp |
| Split button large trailing button icon size | md.comp.split-button.large.trailing-button.icon.size | 24dp |
| Split button large trailing button leading space | md.comp.split-button.large.trailing-button.leading-space | 16dp |
| Split button large trailing button trailing space | md.comp.split-button.large.trailing-button.trailing-space | 16dp |

### Split button - Size - Medium


| Token | Reference | Value |
|-------|-----------|-------|
| Split button medium container height | md.comp.split-button.medium.container.height | 40dp |
| Split button medium between space | md.comp.split-button.medium.between-space | 2dp |
| Split button medium container shape | md.comp.split-button.medium.container.shape |  |
| Split button medium inner corner size | md.comp.split-button.medium.inner-corner.corner-size | 4dp |
| Split button medium outer corner size | md.comp.split-button.medium.outer-corner.corner-size | 50% |
| Split button medium leading button leading space | md.comp.split-button.medium.leading-button.leading-space | 12dp |
| Split button medium leading button trailing space | md.comp.split-button.medium.leading-button.trailing-space | 10dp |
| Split button medium trailing button icon size | md.comp.split-button.medium.trailing-button.icon.size | 24dp |
| Split button medium trailing button leading space | md.comp.split-button.medium.trailing-button.leading-space | 12dp |
| Split button medium trailing button trailing space | md.comp.split-button.medium.trailing-button.trailing-space | 12dp |

### Split button - Size - Small


| Token | Reference | Value |
|-------|-----------|-------|
| Split button small container height | md.comp.split-button.small.container.height | 36dp |
| Split button small between space | md.comp.split-button.small.between-space | 2dp |
| Split button small container shape | md.comp.split-button.small.container.shape |  |
| Split button small inner corner size | md.comp.split-button.small.inner-corner.corner-size | 4dp |
| Split button small outer corner size | md.comp.split-button.small.outer-corner.corner-size | 50% |
| Split button small leading button leading space | md.comp.split-button.small.leading-button.leading-space | 12dp |
| Split button small leading button trailing space | md.comp.split-button.small.leading-button.trailing-space | 10dp |
| Split button small trailing button icon size | md.comp.split-button.small.trailing-button.icon.size | 24dp |
| Split button small trailing button leading space | md.comp.split-button.small.trailing-button.leading-space | 11dp |
| Split button small trailing button trailing space | md.comp.split-button.small.trailing-button.trailing-space | 11dp |

### Split button - Size - Xsmall


| Token | Reference | Value |
|-------|-----------|-------|
| Split button xsmall container height | md.comp.split-button.xsmall.container.height | 32dp |
| Split button xsmall between space | md.comp.split-button.xsmall.between-space | 2dp |
| Split button xsmall container shape | md.comp.split-button.xsmall.container.shape |  |
| Split button xsmall inner corner size | md.comp.split-button.xsmall.inner-corner.corner-size | 4dp |
| Split button xsmall outer corner size | md.comp.split-button.xsmall.outer-corner.corner-size | 50% |
| Split button xsmall leading button leading space | md.comp.split-button.xsmall.leading-button.leading-space | 12dp |
| Split button xsmall leading button trailing space | md.comp.split-button.xsmall.leading-button.trailing-space | 10dp |
| Split button xsmall trailing button icon size | md.comp.split-button.xsmall.trailing-button.icon.size | 22dp |
| Split button xsmall trailing button leading space | md.comp.split-button.xsmall.trailing-button.leading-space | 13dp |
| Split button xsmall trailing button trailing space | md.comp.split-button.xsmall.trailing-button.trailing-space | 13dp |
