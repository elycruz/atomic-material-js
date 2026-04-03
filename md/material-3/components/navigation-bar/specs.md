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

## Tokens & Specs

Use design tokens for navigation bar specifications.

### Nav bar - Item - Horizontal


#### Typography

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar item horizontal label text font | md.comp.nav-bar.item.horizontal.label-text.font |  |
| Nav bar item horizontal active indicator size | md.comp.nav-bar.item.horizontal.active-indicator.size |  |

### Nav bar - Item - Vertical


#### Typography

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar item vertical label text font | md.comp.nav-bar.item.vertical.label-text.font |  |
| Nav bar item vertical active indicator size | md.comp.nav-bar.item.vertical.active-indicator.size |  |

### Nav bar - Common


#### Color

##### Color / Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar container elevation | md.comp.nav-bar.container.elevation |  |
| Nav bar container shadow color | md.comp.nav-bar.container.shadow-color | #000000 |
| Nav bar container color | md.comp.nav-bar.container.color | #F3EDF7 |
| Nav bar item indicator color | md.comp.nav-bar.item.active.indicator.color | #E8DEF8 |
| Nav bar item active label text color | md.comp.nav-bar.item.active.label-text.color | #625B71 |
| Nav bar item inactive label text color | md.comp.nav-bar.item.inactive.label-text.color | #49454F |
| Nav bar item active icon color | md.comp.nav-bar.item.active.icon.color | #4A4458 |
| Nav bar item inactive icon color | md.comp.nav-bar.item.inactive.icon.color | #49454F |

##### Color / Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar item active hovered state layer color | md.comp.nav-bar.item.active.hovered.state-layer.color | #4A4458 |
| Nav bar item active hovered state layer opacity | md.comp.nav-bar.item.active.hovered.state-layer.opacity | 0.08 |
| Nav bar item inactive hovered state layer color | md.comp.nav-bar.item.inactive.hovered.state-layer.color | #49454F |
| Nav bar item inactive hovered state layer opacity | md.comp.nav-bar.item.inactive.hovered.state-layer.opacity | 0.08 |

##### Color / Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar item active focused state layer color | md.comp.nav-bar.item.active.focused.state-layer.color | #4A4458 |
| Nav bar item active focused state layer opacity | md.comp.nav-bar.item.active.focused.state-layer.opacity | 0.1 |
| Nav bar item inactive focused state layer color | md.comp.nav-bar.item.inactive.focused.state-layer.color | #49454F |
| Nav bar item inactive focused state layer opacity | md.comp.nav-bar.item.inactive.focused.state-layer.opacity | 0.1 |

##### Color / Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar item active pressed state layer color | md.comp.nav-bar.item.active.pressed.state-layer.color | #4A4458 |
| Nav bar item active pressed state layer opacity | md.comp.nav-bar.item.active.pressed.state-layer.opacity | 0.1 |
| Nav bar item inactive pressed state layer color | md.comp.nav-bar.item.inactive.pressed.state-layer.color | #4A4458 |
| Nav bar item inactive pressed state layer opacity | md.comp.nav-bar.item.inactive.pressed.state-layer.opacity | 0.1 |

#### Nav item

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar space between items | md.comp.nav-bar.item.between-space | 0 |
| Nav bar item shape | md.comp.nav-bar.item.active-indicator.shape |  |
| Nav bar item space between icon label space | md.comp.nav-bar.item.active-indicator.icon-label-space | 4dp |
| Nav bar item icon size | md.comp.nav-bar.item.icon.size | 24dp |

#### Container

| Token | Reference | Value |
|-------|-----------|-------|
| Nav bar height | md.comp.nav-bar.container.height | 64dp |
| Nav bar shape | md.comp.nav-bar.container.shape |  |
