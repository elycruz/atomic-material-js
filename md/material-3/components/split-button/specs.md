# Split buttons: Specs

## Variants

| Variant | M3 | M3 Expressive |
|---|---| --- |
| Split button | -- | Available |

## Configurations

Color configurations: Elevated, filled, tonal, outlined
Size configurations: XS, S, M, L, XL

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Size | XS, S, M, L, XL | -- | Available |
| Color | Elevated, filled, tonal, outlined | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. Split button token sets are organized by size.

### Split button - Size - Xsmall

| Token | Value |
|---| --- |
| Split button xsmall container height | 32dp |
| Split button xsmall between space | 2dp |
| Split button xsmall container shape | (shape details) |
| Split button xsmall inner corner size | 4dp |
| Split button xsmall outer corner size | 50% |
| Split button xsmall leading button leading space | 12dp |
| Split button xsmall leading button trailing space | 10dp |
| Split button xsmall trailing button icon size | 22dp |
| Split button xsmall trailing button leading space | 13dp |
| Split button xsmall trailing button trailing space | 13dp |
| Split button xsmall inner corner hovered size | 8dp |
| Split button xsmall inner corner pressed size | 8dp |
| Split button xsmall trailing button inner corner selected size | 50% |

## Anatomy

- Leading button (can have icon, label text, or both)
- Trailing button (should always have a menu icon)

### Layout Options

- Label + icon
- Label
- Icon

## Color

Color values are implemented through design tokens. Split buttons use the same color schemes as standard buttons. However, unlike toggle buttons, the split button color doesn't change when selected—only a state layer is applied.

Split buttons use the same colors and state layers as buttons.

### Color Schemes

#### Elevated
- A: Unselected
- B: Selected trailing icon

#### Filled
- A: Unselected
- B: Selected trailing icon

#### Tonal
- A: Unselected
- B: Selected trailing icon

#### Outlined
- A: Unselected
- B: Selected trailing icon

## States

States show the interaction status of a component or UI element. Split button states use the same colors and state layers as buttons.

### Leading button shape
The inner corners change shape for hovered, focused, and pressed states.

- Enabled
- Disabled
- Hovered
- Focused
- Pressed, pressed with focus

### Trailing button shape
The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.

- Enabled
- Disabled
- Hovered
- Focused
- Pressed, pressed with focus
- Selected, selected with focus

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They're centered normally when symmetrical.

### Menu icon offset when unselected
- XS: -1dp from center
- S: -1dp from center
- M: -2dp from center
- L: -3dp from center
- XL: -6dp from center

### Inner corner radius
The inner corner radius changes depending on button sizing. The space should always be 2dp.

- Extra small: 4dp
- Small: 4dp
- Medium: 4dp
- Large: 8dp
- Extra large: 12dp
