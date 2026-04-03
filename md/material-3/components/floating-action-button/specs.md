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

## Tokens & Specs

Use the table's menu to select a token set. FAB tokens are organized by size and color.

### FAB Token Example (Medium)

| Token | Value |
|-------|-------|
| FAB medium container height | 80dp |
| FAB medium container width | 80dp |
| FAB medium icon size | 28dp |
| FAB medium container shape | -- |

### FAB - Color - Tonal Primary

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal primary container color | md.comp.fab.primary-container.container.color | #EADDFF |
| FAB tonal primary container shadow color | md.comp.fab.primary-container.container.shadow-color | #000000 |
| FAB tonal primary container elevation | md.comp.fab.primary-container.container.elevation | Elevation: level3 (3dp) |
| FAB tonal primary icon color | md.comp.fab.primary-container.icon.color | #4F378B |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal primary hovered container elevation | md.comp.fab.primary-container.hovered.container.elevation | Elevation: level4 (4dp) |
| FAB tonal primary hovered state layer color | md.comp.fab.primary-container.hovered.state-layer.color | #4F378B |
| FAB tonal primary hovered state layer opacity | md.comp.fab.primary-container.hovered.state-layer.opacity | 0.08 |
| FAB tonal primary hovered icon color | md.comp.fab.primary-container.hovered.icon.color | #4F378B |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal primary focused container elevation | md.comp.fab.primary-container.focus.container.elevation | Elevation: level3 (3dp) |
| FAB tonal primary focused state layer color | md.comp.fab.primary-container.focus.state-layer.color | #4F378B |
| FAB tonal primary focused state layer opacity | md.comp.fab.primary-container.focus.state-layer.opacity | 0.1 |
| FAB tonal primary focused icon color | md.comp.fab.primary-container.focus.icon.color | #4F378B |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| FAB tonal primary pressed container elevation | md.comp.fab.primary-container.pressed.container.elevation | Elevation: level3 (3dp) |
| FAB tonal primary pressed state layer color | md.comp.fab.primary-container.pressed.state-layer.color | #4F378B |
| FAB tonal primary pressed state layer opacity | md.comp.fab.primary-container.pressed.state-layer.opacity | 0.1 |
| FAB tonal primary pressed icon color | md.comp.fab.primary-container.pressed.icon.color | #4F378B |

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

## Baseline Tokens & Specs

Use the table's menu to select a token set. This only includes baseline tokens, including small and surface FABs. It doesn't include large or regular FABs, since those are still currently used.
