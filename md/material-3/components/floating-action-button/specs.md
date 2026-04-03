# FAB: Specs

## Variants

- FAB
- Medium FAB
- Large FAB

### FAB Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| FAB | Available | Available |
| Medium FAB | -- | Available |
| Large FAB | Available | Available |
| Small FAB | Available | Not recommended. Use a larger size. |

### Baseline Variants

The small FAB is still available, but no longer recommended.

## Configurations

In the expressive update, the primary, secondary, and tertiary set colors were renamed to primary container, secondary container, and tertiary container to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles.

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|-----|
| Color | Primary container, secondary container, tertiary container | Available as primary, secondary, tertiary | Available |
| | Primary, secondary, tertiary | -- | Available |

## Anatomy

1. Container
2. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Color Styles

FABs can use several combinations of color and on-color styles. The following color mappings provide the same legibility and functionality:

- Primary container & On primary container (default)
- Secondary container & On secondary container
- Tertiary container & On tertiary container
- Primary & On primary
- Secondary & On secondary
- Tertiary & On tertiary

### Baseline Color Styles

Surface FAB color styles are still available, but no longer recommended.

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the primary color style should be md.sys.color.primary.

**FAB states:**
- Enabled
- Hovered (8% state layer) - elevation 4
- Focused (10% state layer)
- Pressed (10% state layer)

## Measurements

### FAB

FAB size and padding measurements.

### Medium FAB

Medium FAB size and padding measurements.

### Large FAB

Large FAB size and padding measurements.

## Tokens & Specs

Use the table's menu to select a token set. FAB tokens are organized by size and color.

### FAB - Color - Tonal tertiary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal tertiary container color | md.comp.fab.tertiary-container.container.color | #FFD8E4 |
| FAB tonal tertiary container shadow color | md.comp.fab.tertiary-container.container.shadow-color | #000000 |
| FAB tonal tertiary container elevation | md.comp.fab.tertiary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal tertiary icon color | md.comp.fab.tertiary-container.icon.color | #633B48 |
| FAB tonal tertiary hovered container elevation | md.comp.fab.tertiary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB tonal tertiary hovered state layer color | md.comp.fab.tertiary-container.hovered.state-layer.color | #633B48 |
| FAB tonal tertiary hovered state layer opacity | md.comp.fab.tertiary-container.hovered.state-layer.opacity | 0.08 |
| FAB tonal tertiary hovered icon color | md.comp.fab.tertiary-container.hovered.icon.color | #633B48 |
| FAB tonal tertiary focused container elevation | md.comp.fab.tertiary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal tertiary focused state layer color | md.comp.fab.tertiary-container.focused.state-layer.color | #633B48 |
| FAB tonal tertiary focused state layer opacity | md.comp.fab.tertiary-container.focused.state-layer.opacity | 0.1 |
| FAB tonal tertiary focused icon color | md.comp.fab.tertiary-container.focused.icon.color | #633B48 |
| FAB tonal tertiary pressed container elevation | md.comp.fab.tertiary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal tertiary pressed state layer color | md.comp.fab.tertiary-container.pressed.state-layer.color | #633B48 |
| FAB tonal tertiary pressed state layer opacity | md.comp.fab.tertiary-container.pressed.state-layer.opacity | 0.1 |
| FAB tonal tertiary pressed icon color | md.comp.fab.tertiary-container.pressed.icon.color | #633B48 |

### FAB - Color - Tonal secondary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal secondary container color | md.comp.fab.secondary-container.container.color | #E8DEF8 |
| FAB tonal secondary container shadow color | md.comp.fab.secondary-container.container.shadow-color | #000000 |
| FAB tonal secondary container elevation | md.comp.fab.secondary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal secondary icon color | md.comp.fab.secondary-container.icon.color | #4A4458 |
| FAB tonal secondary hovered container elevation | md.comp.fab.secondary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB tonal secondary hovered state layer color | md.comp.fab.secondary-container.hovered.state-layer.color | #4A4458 |
| FAB tonal secondary hovered state layer opacity | md.comp.fab.secondary-container.hovered.state-layer.opacity | 0.08 |
| FAB tonal secondary hovered icon color | md.comp.fab.secondary-container.hovered.icon.color | #4A4458 |
| FAB tonal secondary focused container elevation | md.comp.fab.secondary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal secondary focused state layer color | md.comp.fab.secondary-container.focused.state-layer.color | #4A4458 |
| FAB tonal secondary focused state layer opacity | md.comp.fab.secondary-container.focused.state-layer.opacity | 0.1 |
| FAB tonal secondary focused icon color | md.comp.fab.secondary-container.focused.icon.color | #4A4458 |
| FAB tonal secondary pressed container elevation | md.comp.fab.secondary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal secondary pressed state layer color | md.comp.fab.secondary-container.pressed.state-layer.color | #4A4458 |
| FAB tonal secondary pressed state layer opacity | md.comp.fab.secondary-container.pressed.state-layer.opacity | 0.1 |
| FAB tonal secondary pressed icon color | md.comp.fab.secondary-container.pressed.icon.color | #4A4458 |

### FAB - Color - Tonal primary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal primary container color | md.comp.fab.primary-container.container.color | #EADDFF |
| FAB tonal primary container shadow color | md.comp.fab.primary-container.container.shadow-color | #000000 |
| FAB tonal primary container elevation | md.comp.fab.primary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal primary icon color | md.comp.fab.primary-container.icon.color | #4F378B |
| FAB tonal primary hovered container elevation | md.comp.fab.primary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB tonal primary hovered state layer color | md.comp.fab.primary-container.hovered.state-layer.color | #4F378B |
| FAB tonal primary hovered state layer opacity | md.comp.fab.primary-container.hovered.state-layer.opacity | 0.08 |
| FAB tonal primary hovered icon color | md.comp.fab.primary-container.hovered.icon.color | #4F378B |
| FAB tonal primary focused container elevation | md.comp.fab.primary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal primary focused state layer color | md.comp.fab.primary-container.focused.state-layer.color | #4F378B |
| FAB tonal primary focused state layer opacity | md.comp.fab.primary-container.focused.state-layer.opacity | 0.1 |
| FAB tonal primary focused icon color | md.comp.fab.primary-container.focused.icon.color | #4F378B |
| FAB tonal primary pressed container elevation | md.comp.fab.primary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB tonal primary pressed state layer color | md.comp.fab.primary-container.pressed.state-layer.color | #4F378B |
| FAB tonal primary pressed state layer opacity | md.comp.fab.primary-container.pressed.state-layer.opacity | 0.1 |
| FAB tonal primary pressed icon color | md.comp.fab.primary-container.pressed.icon.color | #4F378B |

### FAB - Size - Large


| Token | Reference | Value |
|-------|-----------|-------|
| FAB large container height | md.comp.fab.large.container.height | 96dp |
| FAB large container width | md.comp.fab.large.container.width | 96dp |
| FAB large icon size | md.comp.fab.large.icon.size | 36dp |
| FAB large container shape | md.comp.fab.large.container.shape | Shape: md.sys.shape.corner.extra-large (Rounded, 28dp) |

### FAB - Size - Medium


| Token | Reference | Value |
|-------|-----------|-------|
| FAB medium container height | md.comp.fab.medium.container.height | 80dp |
| FAB medium container width | md.comp.fab.medium.container.width | 80dp |
| FAB medium icon size | md.comp.fab.medium.icon.size | 28dp |
| FAB medium container shape | md.comp.fab.medium.container.shape | Shape: md.sys.shape.corner.large-increased (Rounded, 20dp) |

## Baseline Tokens & Specs

Use the table's menu to select a token set. This only includes baseline tokens, including small and surface FABs. It doesn't include large or regular FABs, since those are still currently used.
