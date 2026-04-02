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
