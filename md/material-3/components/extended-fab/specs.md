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

## Tokens & Specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

### Extended FAB Token Example (Small)

| Token | Value |
|-------|-------|
| Extended FAB small container height | 56dp |
| Extended FAB small label text | Aa |
| Extended FAB small icon size | 24dp |
| Extended FAB small container shape | -- |
| Extended FAB small leading space | 16dp |
| Extended FAB small icon label space | 8dp |
| Extended FAB small trailing space | 16dp |

### Extended FAB - Color - Tonal Primary

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary container color | md.comp.extended-fab.primary-container.container.color | #EADDFF |
| Extended FAB tonal primary container elevation | md.comp.extended-fab.primary-container.container.elevation | Elevation: level3 (3dp) |
| Extended FAB tonal primary container shadow color | md.comp.extended-fab.primary-container.container.shadow-color | #000000 |
| Extended FAB tonal primary label text color | md.comp.extended-fab.primary-container.label-text.color | #4F378B |
| Extended FAB tonal primary container icon color | md.comp.extended-fab.primary-container.icon.color | #4F378B |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary hovered container elevation | md.comp.extended-fab.primary-container.hovered.container.elevation | Elevation: level4 (4dp) |
| Extended FAB tonal primary hovered state layer color | md.comp.extended-fab.primary-container.hovered.state-layer.color | #4F378B |
| Extended FAB tonal primary hovered state layer opacity | md.comp.extended-fab.primary-container.hovered.state-layer.opacity | 0.08 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary focused container elevation | md.comp.extended-fab.primary-container.focus.container.elevation | Elevation: level3 (3dp) |
| Extended FAB tonal primary focused state layer color | md.comp.extended-fab.primary-container.focus.state-layer.color | #4F378B |
| Extended FAB tonal primary focused state layer opacity | md.comp.extended-fab.primary-container.focus.state-layer.opacity | 0.1 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Extended FAB tonal primary pressed container elevation | md.comp.extended-fab.primary-container.pressed.container.elevation | Elevation: level3 (3dp) |
| Extended FAB tonal primary pressed state layer color | md.comp.extended-fab.primary-container.pressed.state-layer.color | #4F378B |
| Extended FAB tonal primary pressed state layer opacity | md.comp.extended-fab.primary-container.pressed.state-layer.opacity | 0.1 |

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
