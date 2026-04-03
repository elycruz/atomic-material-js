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

## Tokens & Specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item).

**Note:** Learn about design tokens.

### FAB Menu

#### Close button

| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu close button container height | md.comp.fab-menu.close-button.container.height | 56dp |
| FAB menu close width | md.comp.fab-menu.close-button.container.width | 56dp |
| FAB menu close button icon size | md.comp.fab-menu.close-button.icon.size | 20dp |
| FAB menu close button container elevation | md.comp.fab-menu.close-button.container.elevation | Elevation: level3 (3dp) |
| FAB menu close button container shape | md.comp.fab-menu.close-button.container.shape | Shape: corner.full (Fully round, Circular) |
| FAB menu close button between space | md.comp.fab-menu.close-button.between-space | 8dp |

#### List item

| Token | Reference | Value |
|-------|-----------|-------|
| FAB menu - menu item container height | md.comp.fab-menu.menu-item.container.height | 56dp |
| FAB menu - menu item label text | md.comp.fab-menu.menu-item.label-text | Font: Roboto 500 14pt/20pt tracking 0.1pt |
| FAB menu - menu item icon size | md.comp.fab-menu.menu-item.icon.size | 24dp |
| FAB menu - menu item container elevation | md.comp.fab-menu.menu-item.container.elevation | Elevation: level3 (3dp) |
| FAB menu - menu item between icon text space | md.comp.fab-menu.menu-item.between-icon-text-space | 12dp |
| FAB menu - menu item text trailing space | md.comp.fab-menu.menu-item.text-trailing-space | 12dp |
| FAB menu - menu item container shape | md.comp.fab-menu.menu-item.container.shape | Shape: corner.md (Medium, 12dp) |
| FAB menu - menu item spacing | md.comp.fab-menu.menu-item.spacing | 12dp |
| FAB menu - menu item container width | md.comp.fab-menu.menu-item.container.width | Dynamic |

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
