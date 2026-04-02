# Icon Buttons: Specs

## Variants

- Default icon button
- Toggle icon button

### Variant Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Default | Available | Available |
| Toggle (selection) | Available | Available |

## Configurations

- Five sizes
- Two shapes
- Four color styles
- Three widths

### Category Configuration

| Category | Options | M3 | M3 Expressive |
|----------|---------|-----|-----|
| Size | Small (default) | Available | Available |
| | XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| | Square | -- | Available |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| | Narrow, wide | -- | Available |

## Tokens & Specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table's menu.

**Note:** Learn about design tokens.

## Anatomy

- Icon
- Container

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

### Color Role Note

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and icon have a 3:1 contrast ratio. For example, tertiary and on tertiary.

### Default Icon Button Color Mapping

| Style | Container | Icon | Secondary State |
|-------|-----------|------|-----------------|
| Filled | Primary | On primary | Surface container |
| Tonal | Secondary container | On secondary container | Secondary container |
| Outlined | Outline variant | On surface variant | Outline variant |
| Standard | -- | On surface variant | Primary |

### Toggle Icon Button Color Mapping

| Style | Unselected Container | Unselected Icon | Selected Container | Selected Icon |
|-------|------|------|------|------|
| Filled | Primary | On primary | Surface container | On surface variant |
| Tonal | Secondary container | On secondary container | Secondary container | On secondary container |
| Outlined | Outline variant | On surface variant | Outline variant | On surface variant |
| Standard | -- | On surface variant | -- | Inverse surface |

## States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors.

### Filled Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Tonal Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Outlined Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Standard Icon Button States

The standard icon button's container is invisible at rest, but visible when the state layer is applied.

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

## Shape Morph

### Pressed State

While pressed, icon buttons can morph to become more square. Both round and square icon buttons should have the same pressed shape radius. The corner radius value differs for each button size.

### When Selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.

If the resting shape is square, the selected shape should be round.

## Measurements

Icon buttons come in five sizes with multiple width options for each size.

### Target Sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

## Button Corner Radius

| Size | Round Button | Square Button | Pressed State |
|------|--------|--------|--------|
| XS | Full | 12dp | 8dp |
| S | Full | 12dp | 8dp |
| M | Full | 16dp | 12dp |
| L | Full | 28dp | 16dp |
| XL | Full | 28dp | 16dp |

## Baseline Tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.
