# Switch: Specs

## Anatomy

- Track (background container)
- Thumb (toggle indicator)
- Icon (optional, inside thumb)

## Color

Switch uses:
- Primary color for on state
- Surface variant for off state
- On primary for on-state icon
- On surface variant for off-state icon

## Measurements

| Attribute | Value |
|-----------|-------|
| Track width | 52dp |
| Track height | 32dp |
| Thumb diameter | 24dp |
| Corner radius | 16dp |
| Icon size | 16dp |
| Touch target | 48dp x 48dp |

## States

- Off (unselected)
- On (selected)
- Off disabled
- On disabled
- Off hovered
- On hovered
- Off focused
- On focused
- Off pressed
- On pressed

## Tokens & Specs

### Switch


#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected icon color | md.comp.switch.selected.icon.color | #6750A4 |
| Switch selected icon size | md.comp.switch.selected.icon.size | 16dp |
| Switch unselected icon color | md.comp.switch.unselected.icon.color | #E6E0E9 |
| Switch unselected icon size | md.comp.switch.unselected.icon.size | 16dp |

#### Enabled / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Switch track height | md.comp.switch.track.height | 32dp |
| Switch track width | md.comp.switch.track.width | 52dp |
| Switch track outline color | md.comp.switch.unselected.track.outline.color | #79747E |
| Switch track outline width | md.comp.switch.track.outline.width | 2dp |
| Switch track shape | md.comp.switch.track.shape | Shape: corner.full (Fully round, Circular) |
| Switch selected track color | md.comp.switch.selected.track.color | #6750A4 |
| Switch unselected track color | md.comp.switch.unselected.track.color | #E6E0E9 |

#### Enabled / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Switch unselected handle height | md.comp.switch.unselected.handle.height | 16dp |
| Switch with icon handle height | md.comp.switch.with-icon.handle.height | 24dp |
| Switch selected handle height | md.comp.switch.selected.handle.height | 24dp |
| Switch pressed handle height | md.comp.switch.pressed.handle.height | 28dp |
| Switch unselected handle width | md.comp.switch.unselected.handle.width | 16dp |
| Switch with icon handle width | md.comp.switch.with-icon.handle.width | 24dp |
| Switch selected handle width | md.comp.switch.selected.handle.width | 24dp |
| Switch pressed handle width | md.comp.switch.pressed.handle.width | 28dp |
| Switch handle shape | md.comp.switch.handle.shape | Shape: corner.full (Fully round, Circular) |
| Switch selected handle color | md.comp.switch.selected.handle.color | #FFFFFF |
| Switch unselected handle color | md.comp.switch.unselected.handle.color | #79747E |
| Switch handle shadow color | md.comp.switch.handle.shadow-color | #000000 |
| Switch handle elevation | md.comp.switch.handle.elevation | Elevation: level5 (5dp) |
| Switch handle height | md.comp.switch.handle.height | 20dp |
| Switch handle width | md.comp.switch.handle.width | 20dp |

#### Enabled / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Switch state layer size | md.comp.switch.state-layer.size | 40dp |
| Switch state layer shape | md.comp.switch.state-layer.shape | Shape: corner.full (Fully round, Circular) |

#### Disabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Switch disabled selected icon color | md.comp.switch.disabled.selected.icon.color | #1D1B20 |
| Switch disabled selected icon opacity | md.comp.switch.disabled.selected.icon.opacity | 0.38 |
| Switch disabled unselected icon color | md.comp.switch.disabled.unselected.icon.color | #E6E0E9 |
| Switch disabled unselected icon opacity | md.comp.switch.disabled.unselected.icon.opacity | 0.38 |

#### Disabled / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Switch disabled track opacity | md.comp.switch.disabled.track.opacity | 0.12 |
| Switch disabled selected track color | md.comp.switch.disabled.selected.track.color | #1D1B20 |
| Switch disabled unselected track color | md.comp.switch.disabled.unselected.track.color | #E6E0E9 |
| Switch disabled unselected track outline color | md.comp.switch.disabled.unselected.track.outline.color | #1D1B20 |

#### Disabled / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Switch disabled unselected handle opacity | md.comp.switch.disabled.unselected.handle.opacity | 0.38 |
| Switch disabled selected handle opacity | md.comp.switch.disabled.selected.handle.opacity | 1 |
| Switch disabled selected handle color | md.comp.switch.disabled.selected.handle.color | #FEF7FF |
| Switch disabled unselected handle color | md.comp.switch.disabled.unselected.handle.color | #1D1B20 |
| Switch disabled handle opacity | md.comp.switch.disabled.handle.opacity | 0.38 |
| Switch disabled handle elevation | md.comp.switch.disabled.handle.elevation | Elevation: level5 (5dp) |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected hover icon color | md.comp.switch.selected.hover.icon.color | #6750A4 |
| Switch unselected hover icon color | md.comp.switch.unselected.hover.icon.color | #E6E0E9 |

#### Hovered / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected hover track color | md.comp.switch.selected.hover.track.color | #6750A4 |
| Switch selected hover state layer color | md.comp.switch.selected.hover.state-layer.color | #6750A4 |
| Switch selected hover state layer opacity | md.comp.switch.selected.hover.state-layer.opacity | 0.08 |
| Switch unselected hover track color | md.comp.switch.unselected.hover.track.color | #E6E0E9 |
| Switch unselected hover track outline color | md.comp.switch.unselected.hover.track.outline.color | #79747E |
| Switch unselected hover state layer color | md.comp.switch.unselected.hover.state-layer.color | #1D1B20 |
| Switch unselected hover state layer opacity | md.comp.switch.unselected.hover.state-layer.opacity | 0.08 |

#### Hovered / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected hover handle color | md.comp.switch.selected.hover.handle.color | #EADDFF |
| Switch unselected hover handle color | md.comp.switch.unselected.hover.handle.color | #49454F |

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Switch focus indicator color | md.comp.switch.focus.indicator.color | #625B71 |
| Switch focus indicator thickness | md.comp.switch.focus.indicator.thickness | 3dp |
| Switch focus indicator offset | md.comp.switch.focus.indicator.offset | 2dp |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected focus icon color | md.comp.switch.selected.focus.icon.color | #6750A4 |
| Switch unselected focus icon color | md.comp.switch.unselected.focus.icon.color | #E6E0E9 |

#### Focused / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected focus track color | md.comp.switch.selected.focus.track.color | #6750A4 |
| Switch selected focus state layer color | md.comp.switch.selected.focus.state-layer.color | #6750A4 |
| Switch selected focus state layer opacity | md.comp.switch.selected.focus.state-layer.opacity | 0.1 |
| Switch unselected focus track color | md.comp.switch.unselected.focus.track.color | #E6E0E9 |
| Switch unselected focus track outline color | md.comp.switch.unselected.focus.track.outline.color | #79747E |
| Switch unselected focus state layer color | md.comp.switch.unselected.focus.state-layer.color | #1D1B20 |
| Switch unselected focus state layer opacity | md.comp.switch.unselected.focus.state-layer.opacity | 0.1 |

#### Focused / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected focus handle color | md.comp.switch.selected.focus.handle.color | #EADDFF |
| Switch unselected focus handle color | md.comp.switch.unselected.focus.handle.color | #49454F |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected pressed icon color | md.comp.switch.selected.pressed.icon.color | #6750A4 |
| Switch unselected pressed icon color | md.comp.switch.unselected.pressed.icon.color | #E6E0E9 |

#### Pressed (ripple) / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected pressed track color | md.comp.switch.selected.pressed.track.color | #6750A4 |
| Switch selected pressed state layer color | md.comp.switch.selected.pressed.state-layer.color | #6750A4 |
| Switch selected pressed state layer opacity | md.comp.switch.selected.pressed.state-layer.opacity | 0.1 |
| Switch unselected pressed track color | md.comp.switch.unselected.pressed.track.color | #E6E0E9 |
| Switch unselected pressed track outline color | md.comp.switch.unselected.pressed.track.outline.color | #79747E |
| Switch unselected pressed state layer color | md.comp.switch.unselected.pressed.state-layer.color | #1D1B20 |
| Switch unselected pressed state layer opacity | md.comp.switch.unselected.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Switch selected pressed handle color | md.comp.switch.selected.pressed.handle.color | #EADDFF |
| Switch unselected pressed handle color | md.comp.switch.unselected.pressed.handle.color | #49454F |
