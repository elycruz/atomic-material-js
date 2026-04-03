# Extended FAB: Specs

## Variants

- Small extended FAB
- Medium extended FAB
- Large extended FAB

### Extended FAB Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Small extended FAB | -- | Available |
| Medium extended FAB | -- | Available |
| Large extended FAB | -- | Available |
| Extended FAB (baseline) | Available | Not recommended. Use small extended FAB. |

### Baseline Variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from label large to title medium, and the inner padding was reduced.

## Anatomy

- Container
- Label text
- Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Color Styles

Extended FABs can use several combinations of color and on color styles. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

**Extended FAB color roles used for light and dark schemes:**

- Primary container & on primary container (default)
- Secondary container & on secondary container
- Tertiary container & on tertiary container
- Primary & on primary
- Secondary & on secondary
- Tertiary & on tertiary

### Baseline Color Styles

Extended FABs should no longer use surface color styles. They're still available, but not recommended.

**Surface container FAB** (baseline, not recommended)

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

**Extended FAB states:**
- Enabled
- Hovered - elevation 4
- Focused
- Pressed

## Measurements

### Extended FAB Sizes

Size and padding measurements of the small, medium, and large extended FABs.

Extended FABs should have margins of 16dp.

### Extended FAB Height, Width, and Icon Size

| Attribute | Value |
|-----------|-------|
| Container height | 56dp |
| Container width | Dynamic, 80dp min |
| Container shape | 16dp corner radius |
| Icon size | 24dp |
| Padding | 16dp |

## Tokens & Specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

### Extended FAB - Color - Tonal tertiary


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal tertiary container color | md.comp.extended-fab.tertiary-container.container.color | #FFD8E4 |
| Extended FAB tonal tertiary container elevation | md.comp.extended-fab.tertiary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal tertiary container shadow color | md.comp.extended-fab.tertiary-container.container.shadow-color | #000000 |
| Extended FAB tonal tertiary label text color | md.comp.extended-fab.tertiary-container.label-text.color | #633B48 |
| Extended FAB tonal tertiary container icon color | md.comp.extended-fab.tertiary-container.icon.color | #633B48 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal tertiary hovered container elevation | md.comp.extended-fab.tertiary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| Extended FAB tonal tertiary hovered state layer color | md.comp.extended-fab.tertiary-container.hovered.state-layer.color | #633B48 |
| Extended FAB tonal tertiary hovered state layer opacity | md.comp.extended-fab.tertiary-container.hovered.state-layer.opacity | 0.08 |
| Extended FAB tonal tertiary hovered label text color | md.comp.extended-fab.tertiary-container.hovered.label-text.color | #633B48 |
| Extended FAB tonal tertiary hovered icon color | md.comp.extended-fab.tertiary-container.hovered.icon.color | #633B48 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal tertiary focused container elevation | md.comp.extended-fab.tertiary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal tertiary focused state layer color | md.comp.extended-fab.tertiary-container.focused.state-layer.color | #633B48 |
| Extended FAB tonal tertiary focused state layer opacity | md.comp.extended-fab.tertiary-container.focused.state-layer.opacity | 0.1 |
| Extended FAB tonal tertiary focused label text color | md.comp.extended-fab.tertiary-container.focused.label-text.color | #633B48 |
| Extended FAB tonal tertiary focused icon color | md.comp.extended-fab.tertiary-container.focused.icon.color | #633B48 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal tertiary pressed container elevation | md.comp.extended-fab.tertiary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal tertiary pressed state layer color | md.comp.extended-fab.tertiary-container.pressed.state-layer.color | #633B48 |
| Extended FAB tonal tertiary pressed state layer opacity | md.comp.extended-fab.tertiary-container.pressed.state-layer.opacity | 0.1 |
| Extended FAB tonal tertiary pressed label text color | md.comp.extended-fab.tertiary-container.pressed.label-text.color | #633B48 |
| Extended FAB tonal tertiary pressed icon color | md.comp.extended-fab.tertiary-container.pressed.icon.color | #633B48 |

### Extended FAB - Color - Tonal secondary


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal secondary container color | md.comp.extended-fab.secondary-container.container.color | #E8DEF8 |
| Extended FAB tonal secondary container elevation | md.comp.extended-fab.secondary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal secondary container shadow color | md.comp.extended-fab.secondary-container.container.shadow-color | #000000 |
| Extended FAB tonal secondary label text color | md.comp.extended-fab.secondary-container.label-text.color | #4A4458 |
| Extended FAB tonal secondary container icon color | md.comp.extended-fab.secondary-container.icon.color | #4A4458 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal secondary hovered container elevation | md.comp.extended-fab.secondary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| Extended FAB tonal secondary hovered state layer color | md.comp.extended-fab.secondary-container.hovered.state-layer.color | #4A4458 |
| Extended FAB tonal secondary hovered state layer opacity | md.comp.extended-fab.secondary-container.hovered.state-layer.opacity | 0.08 |
| Extended FAB tonal secondary hovered label text color | md.comp.extended-fab.secondary-container.hovered.label-text.color | #4A4458 |
| Extended FAB tonal secondary hovered icon color | md.comp.extended-fab.secondary-container.hovered.icon.color | #4A4458 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal secondary focused container elevation | md.comp.extended-fab.secondary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal secondary focused state layer color | md.comp.extended-fab.secondary-container.focused.state-layer.color | #4A4458 |
| Extended FAB tonal secondary focused state layer opacity | md.comp.extended-fab.secondary-container.focused.state-layer.opacity | 0.1 |
| Extended FAB tonal secondary focused label text color | md.comp.extended-fab.secondary-container.focused.label-text.color | #4A4458 |
| Extended FAB tonal secondary focused icon color | md.comp.extended-fab.secondary-container.focused.icon.color | #4A4458 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal secondary pressed container elevation | md.comp.extended-fab.secondary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal secondary pressed state layer color | md.comp.extended-fab.secondary-container.pressed.state-layer.color | #4A4458 |
| Extended FAB tonal secondary pressed state layer opacity | md.comp.extended-fab.secondary-container.pressed.state-layer.opacity | 0.1 |
| Extended FAB tonal secondary pressed label text color | md.comp.extended-fab.secondary-container.pressed.label-text.color | #4A4458 |
| Extended FAB tonal secondary pressed icon color | md.comp.extended-fab.secondary-container.pressed.icon.color | #4A4458 |

### Extended FAB - Color - Tonal primary


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary container color | md.comp.extended-fab.primary-container.container.color | #EADDFF |
| Extended FAB tonal primary container elevation | md.comp.extended-fab.primary-container.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal primary container shadow color | md.comp.extended-fab.primary-container.container.shadow-color | #000000 |
| Extended FAB tonal primary label text color | md.comp.extended-fab.primary-container.label-text.color | #4F378B |
| Extended FAB tonal primary container icon color | md.comp.extended-fab.primary-container.icon.color | #4F378B |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary hovered container elevation | md.comp.extended-fab.primary-container.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| Extended FAB tonal primary hovered state layer color | md.comp.extended-fab.primary-container.hovered.state-layer.color | #4F378B |
| Extended FAB tonal primary hovered state layer opacity | md.comp.extended-fab.primary-container.hovered.state-layer.opacity | 0.08 |
| Extended FAB tonal primary hovered label text color | md.comp.extended-fab.primary-container.hovered.label-text.color | #4F378B |
| Extended FAB tonal primary hovered icon color | md.comp.extended-fab.primary-container.hovered.icon.color | #4F378B |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary focused container elevation | md.comp.extended-fab.primary-container.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal primary focused state layer color | md.comp.extended-fab.primary-container.focused.state-layer.color | #4F378B |
| Extended FAB tonal primary focused state layer opacity | md.comp.extended-fab.primary-container.focused.state-layer.opacity | 0.1 |
| Extended FAB tonal primary focused label text color | md.comp.extended-fab.primary-container.focused.label-text.color | #4F378B |
| Extended FAB tonal primary focused icon color | md.comp.extended-fab.primary-container.focused.icon.color | #4F378B |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary pressed container elevation | md.comp.extended-fab.primary-container.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Extended FAB tonal primary pressed state layer color | md.comp.extended-fab.primary-container.pressed.state-layer.color | #4F378B |
| Extended FAB tonal primary pressed state layer opacity | md.comp.extended-fab.primary-container.pressed.state-layer.opacity | 0.1 |
| Extended FAB tonal primary pressed label text color | md.comp.extended-fab.primary-container.pressed.label-text.color | #4F378B |
| Extended FAB tonal primary pressed icon color | md.comp.extended-fab.primary-container.pressed.icon.color | #4F378B |

### Extended FAB - Size - Large


| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB large container height | md.comp.extended-fab.large.container.height | 96dp |
| Extended FAB large label text | md.comp.extended-fab.large.label-text | Font: md.comp.extended-fab.large.label-text (Extended FAB large label text, 400, 24pt/32pt, 0) |
| Extended FAB large icon size | md.comp.extended-fab.large.icon.size | 36dp |
| Extended FAB large container shape | md.comp.extended-fab.large.container.shape | Shape: md.sys.shape.corner.extra-large (Rounded, 28dp) |
| Extended FAB large leading space | md.comp.extended-fab.large.leading-space | 28dp |
| Extended FAB large icon label space | md.comp.extended-fab.large.icon-label-space | 16dp |
| Extended FAB large trailing space | md.comp.extended-fab.large.trailing-space | 28dp |

### Extended FAB - Size - Medium


| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB medium container height | md.comp.extended-fab.medium.container.height | 80dp |
| Extended FAB medium label text | md.comp.extended-fab.medium.label-text | Font: md.comp.extended-fab.medium.label-text (Extended FAB medium label text, 400, 22pt/28pt, 0) |
| Extended FAB medium icon size | md.comp.extended-fab.medium.icon.size | 28dp |
| Extended FAB medium container shape | md.comp.extended-fab.medium.container.shape | Shape: md.sys.shape.corner.large-increased (Rounded, 20dp) |
| Extended FAB medium leading space | md.comp.extended-fab.medium.leading-space | 26dp |
| Extended FAB medium icon label space | md.comp.extended-fab.medium.icon-label-space | 12dp |
| Extended FAB medium trailing space | md.comp.extended-fab.medium.trailing-space | 26dp |

### Extended FAB - Size - Small


| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB small container height | md.comp.extended-fab.small.container.height | 56dp |
| Extended FAB small label text | md.comp.extended-fab.small.label-text | Font: md.comp.extended-fab.small.label-text (Extended FAB small label text, 500, 16pt/24pt, 0.15pt) |
| Extended FAB small icon size | md.comp.extended-fab.small.icon.size | 24dp |
| Extended FAB small container shape | md.comp.extended-fab.small.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| Extended FAB small leading space | md.comp.extended-fab.small.leading-space | 16dp |
| Extended FAB small icon label space | md.comp.extended-fab.small.icon-label-space | 8dp |
| Extended FAB small trailing space | md.comp.extended-fab.small.trailing-space | 16dp |

## Baseline Extended FAB

### Baseline Anatomy

- Container
- Label text
- Icon

### Baseline Configurations

- With icon
- Without icon

### Baseline Measurements

Extended FABs have a padding of 16dp.

### Baseline Color Styles

**Extended FAB color roles used for light and dark schemes:**

- Primary container + shadow
- On primary container
- On primary container

### Baseline Additional Color Mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default.

### Baseline States

States are visual representations used to communicate the status of a component or interactive element.

**Baseline Extended FAB states:**
- Enabled
- Hovered
- Focused
- Pressed
