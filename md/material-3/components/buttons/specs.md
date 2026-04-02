# Buttons: Specs

## Variants

- Default button
- Toggle button

### Variant Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Default | Available | Available |
| Toggle (selection) | -- | Available |

## Configurations

- Size
- Shape
- Color
- Small button padding

### Category Configuration

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|-----|
| Size | Small (default) | Available | Available |
| | XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| | Square | -- | Available |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended |
| | 16dp | -- | Available |

## Anatomy

- Container
- Label text
- Icon (optional)

## Color

There are five built-in button color styles: elevated, filled, tonal, outlined, and text.

The default and toggle buttons use different colors. Toggle buttons don't use the text style.

### Color Roles

Note: These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

#### Default Button Color Mapping

| Style | Container | Icon & Label | Secondary State |
|-------|-----------|-------------|-----------------|
| Elevated | Elevated container | Primary | Surface container low |
| Filled | Primary | On primary | Surface container |
| Tonal | Secondary container | On secondary container | Secondary container |
| Outlined | (outline) | On surface variant | Outline variant |
| Text | -- | Primary | -- |

#### Toggle Button Color Mapping

| Style | Unselected Container | Unselected Icon & Label | Selected Container | Selected Icon & Label |
|-------|------|------|------|------|
| Elevated | Elevated container | Primary | Surface container low | Primary |
| Filled | Primary | On primary | Surface container | On surface variant |
| Tonal | Secondary container | On secondary container | Secondary container | On secondary container |
| Outlined | Outline variant | On surface variant | Outline variant | On surface variant |

## States

States are visual representations used to communicate the status of a component or interactive element.

### Elevated Button States

The elevated button style has an elevation of 1 by default and 0 when disabled.

**Default variant:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Filled Button States

**Default variant:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Tonal Button States

**Default variant:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Outlined Button States

The outlined button's container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

**Default variant:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

**Toggle variant:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

### Text Button States

The text button's container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

- Enabled
- Disabled
- Hovered
- Focused
- Pressed

## Shape Morph

### When Pressed

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape. The corner radius value differs for each button size.

- Round button: Enabled, Hovered, Pressed states
- Square button: Enabled, Hovered, Pressed states

### When Selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected). If the resting unselected shape is square, the selected shape should be round.

- Round button: Enabled, Hovered, Pressed, Selected states
- Square button: Enabled, Hovered, Pressed, Selected states

## Measurements

Padding and size measurements for each button size:

- Extra small
- Small
- Medium
- Large
- Extra large

## Target Areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

### Button Dimensions

- Extra small button: Available in round and square variants
- Small button: Available in round and square variants, with optional icon

## Corner Sizes

| Size | Round Button | Square Button | Pressed State |
|------|--------|--------|--------|
| XS | Full | 12dp | 8dp |
| S | Full | 12dp | 8dp |
| M | Full | 16dp | 12dp |
| L | Full | 28dp | 16dp |
| XL | Full | 28dp | 16dp |

## Baseline Tokens

The baseline button token sets are organized by color and include common tokens, color, and size specifications.
