# FAB Menu: Specs

## Variants

There is one variant of FAB menu.

### Variant Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| FAB menu | -- | Available |

## Configurations

Three color sets:
- Primary
- Secondary
- Tertiary

### Category Configuration

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|-----|
| Color | Primary set, secondary set, tertiary set | -- | Available |

## Anatomy

- Close button
- Menu item

The FAB menu can have up to six items.

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Color Schemes

- On primary container / Primary container
- On primary / Primary
- On secondary container / Secondary container
- On secondary / Secondary
- On tertiary container / Tertiary container
- On tertiary / Tertiary

## States

States are visual representations used to communicate the status of a component or interactive element.

### Close Button States

Close button states in light and dark themes:
- Enabled
- Hovered
- Focused
- Pressed

### Menu Item States

Menu item states in light and dark themes:
- Enabled
- Hovered
- Focused
- Pressed

## Measurements

FAB menu items share the same measurements as the medium button specs. The close button should always be 56dp.

### FAB Menu Size Measurements

The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.

- The FAB should always have 16dp margins
- The close button and FAB share the top trailing corner as an anchor and appear in the same place

### Larger FABs

Larger FABs will place the FAB menu slightly higher, with larger margins underneath.

- The medium FAB placement has 16dp margins
- The close button is placed higher to align with the top of the medium FAB
- The large FAB placement has 16dp margins
- The close button is placed higher to align with the top of the large FAB

### Web Implementation

On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline menu component. The gap between the FAB and menu can vary, but 4dp is recommended.

Spacing and interaction on FAB menu for web:
- Enabled
- Hovered
- Selected

## Tokens & Specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item).

**Note:** Learn about design tokens.

### FAB menu list items - Color - Tertiary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu tertiary list item container color | md.comp.fab-menu.tertiary-container.list-item.container.color | #FFD8E4 |
| FAB menu tertiary list item container shadow color | md.comp.fab-menu.tertiary-container.list-item.container.shadow-color | #000000 |
| FAB menu tertiary list item icon color | md.comp.fab-menu.tertiary-container.list-item.icon.color | #633B48 |
| FAB menu tertiary list item label text color | md.comp.fab-menu.tertiary-container.list-item.label-text.color | #633B48 |
| FAB menu tertiary list item hovered container elevation | md.comp.fab-menu.tertiary-container.list-item.hovered.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |
| FAB menu tertiary list item hovered state layer color | md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.color | #633B48 |
| FAB menu tertiary list item hovered state layer opacity | md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.opacity | 0.08 |
| FAB menu tertiary list item hovered icon color | md.comp.fab-menu.tertiary-container.list-item.hovered.icon.color | #633B48 |
| FAB menu tertiary list item hovered label text color | md.comp.fab-menu.tertiary-container.list-item.hovered.label-text.color | #633B48 |
| FAB menu tertiary list item focused container elevation | md.comp.fab-menu.tertiary-container.list-item.focused.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu tertiary list item focused state layer color | md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.color | #633B48 |
| FAB menu tertiary list item focused state layer opacity | md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.opacity | 0.1 |
| FAB menu tertiary list item focused icon color | md.comp.fab-menu.tertiary-container.list-item.focused.icon.color | #633B48 |
| FAB menu tertiary list item focused label text color | md.comp.fab-menu.tertiary-container.list-item.focused.label-text.color | #633B48 |
| FAB menu tertiary list item pressed container elevation | md.comp.fab-menu.tertiary-container.list-item.pressed.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu tertiary list item pressed state layer color | md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.color | #633B48 |
| FAB menu tertiary list item pressed state layer opacity | md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.opacity | 0.1 |
| FAB menu tertiary list item pressed icon color | md.comp.fab-menu.tertiary-container.list-item.pressed.icon.color | #633B48 |
| FAB menu tertiary list item pressed label text color | md.comp.fab-menu.tertiary-container.list-item.pressed.label-text.color | #633B48 |

### FAB menu list items - Color - Secondary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu secondary list item container color | md.comp.fab-menu.secondary-container.list-item.container.color | #E8DEF8 |
| FAB menu secondary list item container shadow color | md.comp.fab-menu.secondary-container.list-item.container.shadow-color | #000000 |
| FAB menu secondary list item icon color | md.comp.fab-menu.secondary-container.list-item.icon.color | #4A4458 |
| FAB menu secondary list item label text color | md.comp.fab-menu.secondary-container.list-item.label-text.color | #4A4458 |
| FAB menu secondary list item hovered container elevation | md.comp.fab-menu.secondary-container.list-item.hovered.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |
| FAB menu secondary list item hovered state layer color | md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.color | #4A4458 |
| FAB menu secondary list item hovered state layer opacity | md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.opacity | 0.08 |
| FAB menu secondary list item hovered icon color | md.comp.fab-menu.secondary-container.list-item.hovered.icon.color | #4A4458 |
| FAB menu secondary list item hovered label text color | md.comp.fab-menu.secondary-container.list-item.hovered.label-text.color | #4A4458 |
| FAB menu secondary list item focused container elevation | md.comp.fab-menu.secondary-container.list-item.focused.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu secondary list item focused state layer color | md.comp.fab-menu.secondary-container.list-item.focused.state-layer.color | #4A4458 |
| FAB menu secondary list item focused state layer opacity | md.comp.fab-menu.secondary-container.list-item.focused.state-layer.opacity | 0.1 |
| FAB menu secondary list item focused icon color | md.comp.fab-menu.secondary-container.list-item.focused.icon.color | #4A4458 |
| FAB menu secondary list item focused label text color | md.comp.fab-menu.secondary-container.list-item.focused.label-text.color | #4A4458 |
| FAB menu secondary list item pressed container elevation | md.comp.fab-menu.secondary-container.list-item.pressed.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu secondary list item pressed state layer color | md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.color | #4A4458 |
| FAB menu secondary list item pressed state layer opacity | md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.opacity | 0.1 |
| FAB menu secondary list item pressed icon color | md.comp.fab-menu.secondary-container.list-item.pressed.icon.color | #4A4458 |
| FAB menu secondary list item pressed label text color | md.comp.fab-menu.secondary-container.list-item.pressed.label-text.color | #4A4458 |

### FAB menu list items - Color - Primary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu primary list item container color | md.comp.fab-menu.primary-container.list-item.container.color | #EADDFF |
| FAB menu primary list item container shadow color | md.comp.fab-menu.primary-container.list-item.container.shadow-color | #000000 |
| FAB menu primary list item icon color | md.comp.fab-menu.primary-container.list-item.icon.color | #4F378B |
| FAB menu primary list item label text color | md.comp.fab-menu.primary-container.list-item.label-text.color | #4F378B |
| FAB menu primary list item hovered container elevation | md.comp.fab-menu.primary-container.list-item.hovered.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |
| FAB menu primary list item hovered state layer color | md.comp.fab-menu.primary-container.list-item.hovered.state-layer.color | #4F378B |
| FAB menu primary list item hovered state layer opacity | md.comp.fab-menu.primary-container.list-item.hovered.state-layer.opacity | 0.08 |
| FAB menu primary list item hovered icon color | md.comp.fab-menu.primary-container.list-item.hovered.icon.color | #4F378B |
| FAB menu primary list item hovered label text color | md.comp.fab-menu.primary-container.list-item.hovered.label-text.color | #4F378B |
| FAB menu primary list item focused container elevation | md.comp.fab-menu.primary-container.list-item.focused.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu primary list item focused state layer color | md.comp.fab-menu.primary-container.list-item.focused.state-layer.color | #4F378B |
| FAB menu primary list item focused state layer opacity | md.comp.fab-menu.primary-container.list-item.focused.state-layer.opacity | 0.1 |
| FAB menu primary list item focused icon color | md.comp.fab-menu.primary-container.list-item.focused.icon.color | #4F378B |
| FAB menu primary list item focused label text color | md.comp.fab-menu.primary-container.list-item.focused.label-text.color | #4F378B |
| FAB menu primary list item pressed container elevation | md.comp.fab-menu.primary-container.list-item.pressed.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| FAB menu primary list item pressed state layer color | md.comp.fab-menu.primary-container.list-item.pressed.state-layer.color | #4F378B |
| FAB menu primary list item pressed state layer opacity | md.comp.fab-menu.primary-container.list-item.pressed.state-layer.opacity | 0.1 |
| FAB menu primary list item pressed icon color | md.comp.fab-menu.primary-container.list-item.pressed.icon.color | #4F378B |
| FAB menu primary list item pressed label text color | md.comp.fab-menu.primary-container.list-item.pressed.label-text.color | #4F378B |

### FAB menu close button - Color - Tertiary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu tertiary close button container color | md.comp.fab-menu.tertiary.close-button.container.color | #7D5260 |
| FAB menu tertiary close button container shadow color | md.comp.fab-menu.tertiary.close-button.container.shadow-color | #000000 |
| FAB menu tertiary close button icon color | md.comp.fab-menu.tertiary.close-button.icon.color | #FFFFFF |
| FAB menu tertiary close button hovered container elevation | md.comp.fab-menu.tertiary.close-button.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB menu tertiary close button hovered state layer color | md.comp.fab-menu.tertiary.close-button.hovered.state-layer.color | #FFFFFF |
| FAB menu tertiary close button hovered state layer opacity | md.comp.fab-menu.tertiary.close-button.hovered.state-layer.opacity | 0.08 |
| FAB menu tertiary close button hovered icon color | md.comp.fab-menu.tertiary.close-button.hovered.icon.color | #FFFFFF |
| FAB menu tertiary close button focused container elevation | md.comp.fab-menu.tertiary.close-button.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu tertiary close button focused state layer color | md.comp.fab-menu.tertiary.close-button.focused.state-layer.color | #FFFFFF |
| FAB menu tertiary close button focused state layer opacity | md.comp.fab-menu.tertiary.close-button.focused.state-layer.opacity | 0.1 |
| FAB menu tertiary close button focused icon color | md.comp.fab-menu.tertiary.close-button.focused.icon.color | #FFFFFF |
| FAB menu tertiary close button pressed container elevation | md.comp.fab-menu.tertiary.close-button.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu tertiary close button pressed state layer color | md.comp.fab-menu.tertiary.close-button.pressed.state-layer.color | #FFFFFF |
| FAB menu tertiary close button pressed state layer opacity | md.comp.fab-menu.tertiary.close-button.pressed.state-layer.opacity | 0.1 |
| FAB menu tertiary close button pressed icon color | md.comp.fab-menu.tertiary.close-button.pressed.icon.color | #FFFFFF |

### FAB menu close button - Color - Secondary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu secondary close button container color | md.comp.fab-menu.secondary.close-button.container.color | #625B71 |
| FAB menu secondary close button container shadow color | md.comp.fab-menu.secondary.close-button.container.shadow-color | #000000 |
| FAB menu secondary close button icon color | md.comp.fab-menu.secondary.close-button.icon.color | #FFFFFF |
| FAB menu secondary close button hovered container elevation | md.comp.fab-menu.secondary.close-button.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB menu secondary close button hovered state layer color | md.comp.fab-menu.secondary.close-button.hovered.state-layer.color | #FFFFFF |
| FAB menu secondary close button hovered state layer opacity | md.comp.fab-menu.secondary.close-button.hovered.state-layer.opacity | 0.08 |
| FAB menu secondary close button hovered icon color | md.comp.fab-menu.secondary.close-button.hovered.icon.color | #FFFFFF |
| FAB menu secondary close button focused container elevation | md.comp.fab-menu.secondary.close-button.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu secondary close button focused state layer color | md.comp.fab-menu.secondary.close-button.focused.state-layer.color | #FFFFFF |
| FAB menu secondary close button focused state layer opacity | md.comp.fab-menu.secondary.close-button.focused.state-layer.opacity | 0.1 |
| FAB menu secondary close button focused icon color | md.comp.fab-menu.secondary.close-button.focused.icon.color | #FFFFFF |
| FAB menu secondary close button pressed container elevation | md.comp.fab-menu.secondary.close-button.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu secondary close button pressed state layer color | md.comp.fab-menu.secondary.close-button.pressed.state-layer.color | #FFFFFF |
| FAB menu secondary close button pressed state layer opacity | md.comp.fab-menu.secondary.close-button.pressed.state-layer.opacity | 0.1 |
| FAB menu secondary close button pressed icon color | md.comp.fab-menu.secondary.close-button.pressed.icon.color | #FFFFFF |

### FAB menu close button - Color - Primary


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu primary close button container color | md.comp.fab-menu.primary.close-button.container.color | #6750A4 |
| FAB menu primary close button container shadow color | md.comp.fab-menu.primary.close-button.container.shadow-color | #000000 |
| FAB menu primary close button icon color | md.comp.fab-menu.primary.close-button.icon.color | #FFFFFF |
| FAB menu primary close button hovered container elevation | md.comp.fab-menu.primary.close-button.hovered.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| FAB menu primary close button hovered state layer color | md.comp.fab-menu.primary.close-button.hovered.state-layer.color | #FFFFFF |
| FAB menu primary close button hovered state layer opacity | md.comp.fab-menu.primary.close-button.hovered.state-layer.opacity | 0.08 |
| FAB menu primary close button hovered icon color | md.comp.fab-menu.primary.close-button.hovered.icon.color | #FFFFFF |
| FAB menu primary close button focused container elevation | md.comp.fab-menu.primary.close-button.focused.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu primary close button focused state layer color | md.comp.fab-menu.primary.close-button.focused.state-layer.color | #FFFFFF |
| FAB menu primary close button focused state layer opacity | md.comp.fab-menu.primary.close-button.focused.state-layer.opacity | 0.1 |
| FAB menu primary close button focused icon color | md.comp.fab-menu.primary.close-button.focused.icon.color | #FFFFFF |
| FAB menu primary close button pressed container elevation | md.comp.fab-menu.primary.close-button.pressed.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu primary close button pressed state layer color | md.comp.fab-menu.primary.close-button.pressed.state-layer.color | #FFFFFF |
| FAB menu primary close button pressed state layer opacity | md.comp.fab-menu.primary.close-button.pressed.state-layer.opacity | 0.1 |
| FAB menu primary close button pressed icon color | md.comp.fab-menu.primary.close-button.pressed.icon.color | #FFFFFF |

### FAB menu - Common


| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu close button container height | md.comp.fab-menu.close-button.container.height | 56dp |
| FAB menu close width | md.comp.fab-menu.close-button.container.width | 56dp |
| FAB menu close button icon size | md.comp.fab-menu.close-button.icon.size | 20dp |
| FAB menu close button container elevation | md.comp.fab-menu.close-button.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu close button container shape | md.comp.fab-menu.close-button.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| FAB menu close button between space | md.comp.fab-menu.close-button.between-space | 8dp |
| FAB menu - menu item container height | md.comp.fab-menu.menu-item.container.height | 56dp |
| FAB menu - menu item label text | md.comp.fab-menu.menu-item.label-text | Aa |
| FAB menu - menu item icon size | md.comp.fab-menu.menu-item.icon.size | 24dp |
| FAB menu - menu item container elevation | md.comp.fab-menu.menu-item.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| FAB menu - menu item container shape | md.comp.fab-menu.menu-item.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| FAB menu - menu item leading space | md.comp.fab-menu.menu-item.leading-space | 24dp |
| FAB menu - menu item icon label space | md.comp.fab-menu.menu-item.icon-label-space | 8dp |
| FAB menu - menu item trailing space | md.comp.fab-menu.menu-item.trailing-space | 24dp |
| FAB menu - menu item between space | md.comp.fab-menu.menu-item.between-space | 4dp |
