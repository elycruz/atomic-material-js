# Tabs: Specs

## Anatomy

- Tab container
- Tab items
  - Label text
  - Icon (optional)
  - Indicator line (active)
  - Badge (optional)

## Color

Tabs use:
- Primary color for active indicator
- On surface variant for inactive labels
- Primary for active label
- Surface for background

## Measurements

### Primary tabs

| Attribute | Value |
|-----------|-------|
| Height | 56dp |
| Min width | 90dp |
| Max width | 360dp |
| Padding (horizontal) | 16dp |
| Indicator height | 3dp |
| Icon size | 24dp |
| Touch target | 56dp x 56dp |

### Secondary tabs

| Attribute | Value |
|-----------|-------|
| Height | 48dp |
| Min width | 90dp |
| Max width | 360dp |
| Padding (horizontal) | 16dp |
| Indicator height | 2dp |
| Icon size | 18dp |

## States

- Active
- Inactive
- Disabled
- Hovered
- Focused
- Pressed

## Tokens & Specs

### Tabs - Secondary Navigation


#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab container color | md.comp.secondary-navigation-tab.container.color | #FEF7FF |
| Secondary navigation tab container shape | md.comp.secondary-navigation-tab.container.shape | Shape: corner.none (No corner, Square) |
| Secondary navigation tab container height | md.comp.secondary-navigation-tab.container.height | 48dp |
| Secondary navigation tab container elevation | md.comp.secondary-navigation-tab.container.elevation | Elevation: level0 (0dp) |
| Secondary navigation tab container shadow color | md.comp.secondary-navigation-tab.container.shadow-color | #000000 |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab label text font | md.comp.secondary-navigation-tab.label-text.font | Roboto |
| Secondary navigation tab label text line height | md.comp.secondary-navigation-tab.label-text.line-height | 20pt |
| Secondary navigation tab label text size | md.comp.secondary-navigation-tab.label-text.size | 14pt |
| Secondary navigation tab label text weight | md.comp.secondary-navigation-tab.label-text.weight | 500 |
| Secondary navigation tab label text tracking | md.comp.secondary-navigation-tab.label-text.tracking | 0.1pt |
| Type style | md.comp.secondary-navigation-tab.label-text.type | Font: Roboto 500 14pt/20pt tracking 0.1pt |
| Secondary navigation tab active label text color | md.comp.secondary-navigation-tab.active.label-text.color | #1D1B20 |
| Secondary navigation tab inactive label text color | md.comp.secondary-navigation-tab.inactive.label-text.color | #49454F |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon icon size | md.comp.secondary-navigation-tab.with-icon.icon.size | 24dp |
| Secondary navigation tab with icon active icon color | md.comp.secondary-navigation-tab.with-icon.active.icon.color | #1D1B20 |
| Secondary navigation tab with icon inactive icon color | md.comp.secondary-navigation-tab.with-icon.inactive.icon.color | #49454F |

#### Enabled / Divider

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab divider color | md.comp.secondary-navigation-tab.divider.color | #E7E0EC |
| Secondary navigation tab divider height | md.comp.secondary-navigation-tab.divider.height | 1dp |

#### Enabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab active indicator color | md.comp.secondary-navigation-tab.active-indicator.color | #6750A4 |
| Secondary navigation tab active indicator height | md.comp.secondary-navigation-tab.active-indicator.height | 2dp |

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab hover label text color | md.comp.secondary-navigation-tab.hover.label-text.color | #1D1B20 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab hover state layer color | md.comp.secondary-navigation-tab.hover.state-layer.color | #1D1B20 |
| Secondary navigation tab hover state layer opacity | md.comp.secondary-navigation-tab.hover.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon hover icon color | md.comp.secondary-navigation-tab.with-icon.hover.icon.color | #1D1B20 |

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focus indicator color | md.comp.secondary-navigation-tab.focus.indicator.color | #625B71 |
| Secondary navigation tab focus indicator thickness | md.comp.secondary-navigation-tab.focus.indicator.thickness | 3dp |
| Secondary navigation tab focus indicator offset | md.comp.secondary-navigation-tab.focus.indicator.outline.offset | -3dp |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focus label text color | md.comp.secondary-navigation-tab.focus.label-text.color | #1D1B20 |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focus state layer color | md.comp.secondary-navigation-tab.focus.state-layer.color | #1D1B20 |
| Secondary navigation tab focus state layer opacity | md.comp.secondary-navigation-tab.focus.state-layer.opacity | 0.1 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon focus icon color | md.comp.secondary-navigation-tab.with-icon.focus.icon.color | #1D1B20 |

#### Pressed (ripple) / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab pressed label text color | md.comp.secondary-navigation-tab.pressed.label-text.color | #1D1B20 |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab pressed state layer color | md.comp.secondary-navigation-tab.pressed.state-layer.color | #1D1B20 |
| Secondary navigation tab pressed state layer opacity | md.comp.secondary-navigation-tab.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon pressed icon color | md.comp.secondary-navigation-tab.with-icon.pressed.icon.color | #1D1B20 |

### Tabs - Primary Navigation


#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab container color | md.comp.primary-navigation-tab.container.color | #FEF7FF |
| Primary navigation tab container shape | md.comp.primary-navigation-tab.container.shape | Shape: corner.none (No corner, Square) |
| Primary navigation tab container height | md.comp.primary-navigation-tab.container.height | 48dp |
| Primary navigation tab with icon and label text container height | md.comp.primary-navigation-tab.with-icon-and-label-text.container.height | 64dp |
| Primary navigation tab container elevation | md.comp.primary-navigation-tab.container.elevation | Elevation: level0 (0dp) |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with label text font | md.comp.primary-navigation-tab.with-label-text.label-text.font | Roboto |
| Primary navigation tab with label text line height | md.comp.primary-navigation-tab.with-label-text.label-text.line-height | 20pt |
| Primary navigation tab with label text size | md.comp.primary-navigation-tab.with-label-text.label-text.size | 14pt |
| Primary navigation tab with label text weight | md.comp.primary-navigation-tab.with-label-text.label-text.weight | 500 |
| Primary navigation tab with label text tracking | md.comp.primary-navigation-tab.with-label-text.label-text.tracking | 0.1pt |
| Label text type style | md.comp.primary-navigation-tab.with-label-text.label-text.type | Font: Roboto 500 14pt/20pt tracking 0.1pt |
| Primary navigation tab with label text active color | md.comp.primary-navigation-tab.with-label-text.active.label-text.color | #6750A4 |
| Primary navigation tab with label text inactive color | md.comp.primary-navigation-tab.with-label-text.inactive.label-text.color | #49454F |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon size | md.comp.primary-navigation-tab.with-icon.icon.size | 24dp |
| Primary navigation tab with icon active color | md.comp.primary-navigation-tab.with-icon.active.icon.color | #6750A4 |
| Primary navigation tab with icon inactive color | md.comp.primary-navigation-tab.with-icon.inactive.icon.color | #49454F |

#### Enabled / Divider

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab divider color | md.comp.primary-navigation-tab.divider.color | #E7E0EC |
| Primary navigation tab divider height | md.comp.primary-navigation-tab.divider.height | 1dp |

#### Enabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active indicator color | md.comp.primary-navigation-tab.active-indicator.color | #6750A4 |
| Primary navigation tab active indicator height | md.comp.primary-navigation-tab.active-indicator.height | 3dp |
| Primary navigation tab active indicator shape | md.comp.primary-navigation-tab.active-indicator.shape | Shape: corner.full (Fully round, Circular) |

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with label text active hover color | md.comp.primary-navigation-tab.with-label-text.active.hover.label-text.color | #6750A4 |
| Primary navigation tab with label text inactive hover color | md.comp.primary-navigation-tab.with-label-text.inactive.hover.label-text.color | #1D1B20 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active hover state layer color | md.comp.primary-navigation-tab.active.hover.state-layer.color | #6750A4 |
| Primary navigation tab active hover state layer opacity | md.comp.primary-navigation-tab.active.hover.state-layer.opacity | 0.08 |
| Primary navigation tab inactive hover state layer color | md.comp.primary-navigation-tab.inactive.hover.state-layer.color | #1D1B20 |
| Primary navigation tab inactive hover state layer opacity | md.comp.primary-navigation-tab.inactive.hover.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active hover icon color | md.comp.primary-navigation-tab.with-icon.active.hover.icon.color | #6750A4 |
| Primary navigation tab with icon inactive hover icon color | md.comp.primary-navigation-tab.with-icon.inactive.hover.icon.color | #1D1B20 |

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab focus indicator color | md.comp.primary-navigation-tab.focus.indicator.color | #625B71 |
| Primary navigation tab focus indicator thickness | md.comp.primary-navigation-tab.focus.indicator.thickness | 3dp |
| Primary navigation tab focus indicator offset | md.comp.primary-navigation-tab.focus.indicator.outline.offset | -3dp |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with label text active focus color | md.comp.primary-navigation-tab.with-label-text.active.focus.label-text.color | #6750A4 |
| Primary navigation tab with label text inactive focus color | md.comp.primary-navigation-tab.with-label-text.inactive.focus.label-text.color | #1D1B20 |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active focus state layer color | md.comp.primary-navigation-tab.active.focus.state-layer.color | #6750A4 |
| Primary navigation tab active focus state layer opacity | md.comp.primary-navigation-tab.active.focus.state-layer.opacity | 0.1 |
| Primary navigation tab inactive focus state layer color | md.comp.primary-navigation-tab.inactive.focus.state-layer.color | #1D1B20 |
| Primary navigation tab inactive focus state layer opacity | md.comp.primary-navigation-tab.inactive.focus.state-layer.opacity | 0.1 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active focus color | md.comp.primary-navigation-tab.with-icon.active.focus.icon.color | #6750A4 |
| Primary navigation tab with icon inactive focus color | md.comp.primary-navigation-tab.with-icon.inactive.focus.icon.color | #1D1B20 |

#### Pressed (ripple) / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with label text active pressed color | md.comp.primary-navigation-tab.with-label-text.active.pressed.label-text.color | #6750A4 |
| Primary navigation tab with label text inactive pressed color | md.comp.primary-navigation-tab.with-label-text.inactive.pressed.label-text.color | #1D1B20 |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active pressed state layer color | md.comp.primary-navigation-tab.active.pressed.state-layer.color | #6750A4 |
| Primary navigation tab active pressed state layer opacity | md.comp.primary-navigation-tab.active.pressed.state-layer.opacity | 0.1 |
| Primary navigation tab inactive pressed state layer color | md.comp.primary-navigation-tab.inactive.pressed.state-layer.color | #6750A4 |
| Primary navigation tab inactive pressed state layer opacity | md.comp.primary-navigation-tab.inactive.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active pressed color | md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color | #6750A4 |
| Primary navigation tab with icon inactive pressed color | md.comp.primary-navigation-tab.with-icon.inactive.pressed.icon.color | #1D1B20 |

### Tabs - Primary navigation


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab container color | md.comp.primary-navigation-tab.container.color | #FEF7FF |
| Primary navigation tab container shape | md.comp.primary-navigation-tab.container.shape |  |
| Primary navigation tab container height | md.comp.primary-navigation-tab.container.height | 48dp |
| Primary navigation tab with icon and label text container height | md.comp.primary-navigation-tab.with-icon-and-label-text.container.height | 64dp |
| Primary navigation tab container elevation | md.comp.primary-navigation-tab.container.elevation |  |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with label text label text font | md.comp.primary-navigation-tab.with-label-text.label-text.font | Roboto |
| Primary navigation tab with label text label text line height | md.comp.primary-navigation-tab.with-label-text.label-text.line-height | 20pt |
| Primary navigation tab with label text label text size | md.comp.primary-navigation-tab.with-label-text.label-text.size | 14pt |
| Primary navigation tab with label text label text weight | md.comp.primary-navigation-tab.with-label-text.label-text.weight | 500 |
| Primary navigation tab with label text label text tracking | md.comp.primary-navigation-tab.with-label-text.label-text.tracking | 0.1pt |
| Primary navigation tab active label text color | md.comp.primary-navigation-tab.active.label-text.color | #6750A4 |
| Primary navigation tab inactive label text color | md.comp.primary-navigation-tab.inactive.label-text.color | #1D1B20 |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab icon size | md.comp.primary-navigation-tab.icon.size | 24dp |
| Primary navigation tab with icon active icon color | md.comp.primary-navigation-tab.with-icon.active.icon.color | #6750A4 |
| Primary navigation tab with icon inactive icon color | md.comp.primary-navigation-tab.with-icon.inactive.icon.color | #1D1B20 |

#### Enabled / Divider

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab divider color | md.comp.primary-navigation-tab.divider.color | #E7E0EC |
| Primary navigation tab divider thickness | md.comp.primary-navigation-tab.divider.thickness | 1dp |

#### Enabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active indicator color | md.comp.primary-navigation-tab.active-indicator.color | #6750A4 |
| Primary navigation tab active indicator height | md.comp.primary-navigation-tab.active-indicator.height | 3dp |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active hovered label text color | md.comp.primary-navigation-tab.active.hovered.label-text.color | #6750A4 |
| Primary navigation tab inactive hovered label text color | md.comp.primary-navigation-tab.inactive.hovered.label-text.color | #1D1B20 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab hovered state layer color | md.comp.primary-navigation-tab.hovered.state-layer.color | #1D1B20 |
| Primary navigation tab hovered state layer opacity | md.comp.primary-navigation-tab.hovered.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active hovered icon color | md.comp.primary-navigation-tab.with-icon.active.hovered.icon.color | #6750A4 |
| Primary navigation tab with icon inactive hovered icon color | md.comp.primary-navigation-tab.with-icon.inactive.hovered.icon.color | #1D1B20 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab focused focus indicator color | md.comp.primary-navigation-tab.focused.focus-indicator.color | #1D1B20 |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active focused label text color | md.comp.primary-navigation-tab.active.focused.label-text.color | #6750A4 |
| Primary navigation tab inactive focused label text color | md.comp.primary-navigation-tab.inactive.focused.label-text.color | #1D1B20 |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab focused state layer color | md.comp.primary-navigation-tab.focused.state-layer.color | #1D1B20 |
| Primary navigation tab focused state layer opacity | md.comp.primary-navigation-tab.focused.state-layer.opacity | 0.12 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active focused icon color | md.comp.primary-navigation-tab.with-icon.active.focused.icon.color | #6750A4 |
| Primary navigation tab with icon inactive focused icon color | md.comp.primary-navigation-tab.with-icon.inactive.focused.icon.color | #1D1B20 |

#### Pressed (ripple)

| Token | Reference | Value |
|-------|-----------|-------|

#### Pressed (ripple) / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab active pressed label text color | md.comp.primary-navigation-tab.active.pressed.label-text.color | #6750A4 |
| Primary navigation tab inactive pressed label text color | md.comp.primary-navigation-tab.inactive.pressed.label-text.color | #1D1B20 |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab pressed state layer color | md.comp.primary-navigation-tab.pressed.state-layer.color | #1D1B20 |
| Primary navigation tab pressed state layer opacity | md.comp.primary-navigation-tab.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Primary navigation tab with icon active pressed icon color | md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color | #6750A4 |
| Primary navigation tab with icon inactive pressed icon color | md.comp.primary-navigation-tab.with-icon.inactive.pressed.icon.color | #1D1B20 |

### Tabs - Secondary navigation


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab container color | md.comp.secondary-navigation-tab.container.color | #FEF7FF |
| Secondary navigation tab container shape | md.comp.secondary-navigation-tab.container.shape |  |
| Secondary navigation tab container height | md.comp.secondary-navigation-tab.container.height | 48dp |
| Secondary navigation tab container elevation | md.comp.secondary-navigation-tab.container.elevation |  |
| Secondary navigation tab container shadow color | md.comp.secondary-navigation-tab.container.shadow-color | #000000 |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab label text font | md.comp.secondary-navigation-tab.label-text.font | Roboto |
| Secondary navigation tab label text line height | md.comp.secondary-navigation-tab.label-text.line-height | 20pt |
| Secondary navigation tab label text size | md.comp.secondary-navigation-tab.label-text.size | 14pt |
| Secondary navigation tab label text weight | md.comp.secondary-navigation-tab.label-text.weight | 500 |
| Secondary navigation tab label text tracking | md.comp.secondary-navigation-tab.label-text.tracking | 0.1pt |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab icon size | md.comp.secondary-navigation-tab.icon.size | 24dp |
| Secondary navigation tab with icon icon color | md.comp.secondary-navigation-tab.with-icon.icon.color | #1D1B20 |

#### Enabled / Divider

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab divider color | md.comp.secondary-navigation-tab.divider.color | #E7E0EC |
| Secondary navigation tab divider thickness | md.comp.secondary-navigation-tab.divider.thickness | 1dp |
| Secondary navigation tab divider height | md.comp.secondary-navigation-tab.divider.height | 32dp |

#### Enabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab active indicator color | md.comp.secondary-navigation-tab.active-indicator.color | #1D1B20 |
| Secondary navigation tab active indicator height | md.comp.secondary-navigation-tab.active-indicator.height | 3dp |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab hovered label text color | md.comp.secondary-navigation-tab.hovered.label-text.color | #1D1B20 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab hovered state layer color | md.comp.secondary-navigation-tab.hovered.state-layer.color | #1D1B20 |
| Secondary navigation tab hovered state layer opacity | md.comp.secondary-navigation-tab.hovered.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon hovered icon color | md.comp.secondary-navigation-tab.with-icon.hovered.icon.color | #1D1B20 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focused focus indicator color | md.comp.secondary-navigation-tab.focused.focus-indicator.color | #1D1B20 |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focused label text color | md.comp.secondary-navigation-tab.focused.label-text.color | #1D1B20 |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab focused state layer color | md.comp.secondary-navigation-tab.focused.state-layer.color | #1D1B20 |
| Secondary navigation tab focused state layer opacity | md.comp.secondary-navigation-tab.focused.state-layer.opacity | 0.12 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon focused icon color | md.comp.secondary-navigation-tab.with-icon.focused.icon.color | #1D1B20 |

#### Pressed (ripple)

| Token | Reference | Value |
|-------|-----------|-------|

#### Pressed (ripple) / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab pressed label text color | md.comp.secondary-navigation-tab.pressed.label-text.color | #1D1B20 |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab pressed state layer color | md.comp.secondary-navigation-tab.pressed.state-layer.color | #1D1B20 |
| Secondary navigation tab pressed state layer opacity | md.comp.secondary-navigation-tab.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Secondary navigation tab with icon pressed icon color | md.comp.secondary-navigation-tab.with-icon.pressed.icon.color | #1D1B20 |
