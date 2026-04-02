# Segmented Buttons: Specs

**Note:** Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the connected button group instead, which has mostly the same functionality but with an updated visual design.

## Anatomy

- Container
- Icon (optional for unselected state)
- Label text

## Tokens and Specs

Browse the component elements, attributes, tokens, and their values.

**Note:** Learn more about design tokens.

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Segmented Button Color Roles

Used for light and dark schemes:
- On surface
- Outline
- Secondary container
- On secondary container

## States

States are visual representations used to communicate the status of a component or interactive element.

### Unselected

Unselected button states:
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

### Selected

Selected button states:
- Selected
- Hovered on selected
- Focused on selected
- Pressed on selected

## Measurements

### Padding and Container Size

| Attribute | Value |
|-----------|-------|
| Container width | Dynamic based on labels |
| Segment width | Container width / total segments (Example: 1/3) |
| Height | 40dp |
| Outline width | 1dp |
| Label alignment | Center |
| Left/right padding | Min 12dp |
| Padding between elements | 8dp |

### Target Size

Target size: 48dp

## Density

Density can be used in denser UIs where space is limited. Density is only applied to the height. Each step down in density removes 4dp from the height.
