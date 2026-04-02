# Navigation Bar: Specs

## Variants

### Flexible navigation bar

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows.

### Baseline variants

| Variant | M3 | M3 Expressive |
|---------|----|----|
| Flexible navigation bar | -- | Available |
| Navigation bar (not recommended) | Available | Not recommended - Use flexible navigation bar |

## Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

| Category | Configuration | M3 | M3 Expressive |
|----------|----------------|----|-------|
| Navigation item layout | Vertical (default) | Available | Available |
| | Horizontal | -- | Available |

## Tokens & specs

Use design tokens for navigation bar specifications.

## Anatomy

- Container
- Icon
- Label text
- Active indicator
- Small badge (optional)
- Large badge (optional)
- Large badge label

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

Navigation bar color roles used for light and dark schemes:
- Surface container
- On-secondary container
- Secondary
- Secondary container
- On-surface variant

For badge color roles, see badge specs.

## States

States are visual representations used to communicate the status of a component or an interactive element.

- Enabled
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

## Measurements

The navigation bar stretches the full window width.

Navigation bar padding and size measurements.

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

Navigation bar width and margins for compact and medium windows.

### Baseline navigation bar

| Component | M3 | M3 Expressive |
|-----------|----|----|
| Container | | |
| Icon | | |
| Label text | | |
| Active indicator | | |
| Small badge | | |
| Large badge | | |
| Large badge label | | |

### Configurations

- 3 destinations
- 4 destinations
- 5 destinations
