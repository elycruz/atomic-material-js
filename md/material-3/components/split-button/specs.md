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

## Tokens & Specs

Use the table's menu to select a token set. Split button token sets are organized by size.

**Note:** Learn about design tokens.

### Split Button Token Example (Extra Small)

| Token | Value |
|-------|-------|
| Split button xsmall container height | 32dp |
| Split button xsmall between space | 2dp |
| Split button xsmall container shape | -- |
| Split button xsmall inner corner size | 4dp |
| Split button xsmall outer corner size | 50% |
| Split button xsmall leading button leading space | 12dp |
| Split button xsmall leading button trailing space | 10dp |
| Split button xsmall trailing button icon size | 22dp |
| Split button xsmall trailing button leading space | 13dp |
| Split button xsmall trailing button trailing space | 13dp |

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

## Token Specifications

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
