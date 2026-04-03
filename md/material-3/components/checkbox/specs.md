# Checkbox: Specs

## Checkbox Structure

### Components

- Container
- Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens.

### Color Roles

- **Checkbox:** State-layer, Icon

### Adjacent Text Label Color

Use the color role on surface for adjacent text labels. This remains the same even if interacting with the label or component.

The text color remains the same regardless if the checkbox is selected or not.

## States

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states.

Checkbox states:
- Enabled
- Disabled
- Hovered
- Focused
- Pressed (ripple)

## Measurements

| Attribute | Value |
|-----------|-------|
| Container size | 18dp |
| Container corner shape | 2dp |
| Icon size | 18dp |
| Icon alignment | Center-aligned |
| Target size | 48dp |
| State-layer size | 40dp |

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values.

### Checkbox


#### Enabled

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox container width | md.comp.checkbox.container.width | 18dp |
| Checkbox container height | md.comp.checkbox.container.height | 18dp |
| Checkbox container size | md.comp.checkbox.container.size | 18dp |
| Checkbox container shape | md.comp.checkbox.container.shape | Shape: md.sys.shape.corner.extra-small (Rounded, 2dp) |
| Checkbox unselected outline color | md.comp.checkbox.unselected.outline.color | #49454F |
| Checkbox unselected outline width | md.comp.checkbox.unselected.outline.width | 2dp |
| Checkbox selected container color | md.comp.checkbox.selected.container.color | #6750A4 |
| Checkbox selected outline width | md.comp.checkbox.selected.outline.width | 0 |
| Checkbox unselected error outline color | md.comp.checkbox.unselected.error.outline.color | #B3261E |
| Checkbox selected error container color | md.comp.checkbox.selected.error.container.color | #B3261E |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox icon size | md.comp.checkbox.icon.size | 18dp |
| Checkbox selected icon color | md.comp.checkbox.selected.icon.color | #FFFFFF |
| Checkbox selected error icon color | md.comp.checkbox.selected.error.icon.color | #FFFFFF |
| Checkbox unselected icon color | md.comp.checkbox.unselected.icon.color | #1D1B20 |

#### Enabled / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox state layer size | md.comp.checkbox.state-layer.size | 40dp |
| Checkbox state layer shape | md.comp.checkbox.state-layer.shape | Shape: md.sys.shape.corner.full (Fully round) |

#### Disabled

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox unselected disabled outline color | md.comp.checkbox.unselected.disabled.outline.color | #1D1B20 |
| Checkbox unselected disabled outline width | md.comp.checkbox.unselected.disabled.outline.width | 2dp |
| Checkbox unselected disabled container opacity | md.comp.checkbox.unselected.disabled.container.opacity | 0.38 |
| Checkbox selected disabled container color | md.comp.checkbox.selected.disabled.container.color | #1D1B20 |
| Checkbox selected disabled container opacity | md.comp.checkbox.selected.disabled.container.opacity | 0.38 |
| Checkbox selected disabled container outline width | md.comp.checkbox.selected.disabled.container.outline.width | 0 |

#### Disabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected disabled icon color | md.comp.checkbox.selected.disabled.icon.color | #FEF7FF |
| Checkbox disabled selected icon color | md.comp.checkbox.disabled.selected.icon.color | #6750A4 |
| Checkbox disabled selected icon opacity | md.comp.checkbox.disabled.selected.icon.opacity | 0.38 |
| Checkbox disabled unselected icon color | md.comp.checkbox.disabled.unselected.icon.color | #6750A4 |
| Checkbox disabled unselected icon opacity | md.comp.checkbox.disabled.unselected.icon.opacity | 0.38 |

#### Hovered

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox unselected hover outline color | md.comp.checkbox.unselected.hover.outline.color | #1D1B20 |
| Checkbox unselected hover outline width | md.comp.checkbox.unselected.hover.outline.width | 2dp |
| Checkbox selected hover container color | md.comp.checkbox.selected.hover.container.color | #6750A4 |
| Checkbox selected hover outline width | md.comp.checkbox.selected.hover.outline.width | 0 |
| Checkbox unselected error hover outline color | md.comp.checkbox.unselected.error.hover.outline.color | #B3261E |
| Checkbox unselected error hover outline width | md.comp.checkbox.unselected.error.hover.outline.width | 2dp |
| Checkbox selected error hover container color | md.comp.checkbox.selected.error.hover.container.color | #B3261E |
| Checkbox selected error hover outline width | md.comp.checkbox.selected.error.hover.outline.width | 0 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected hover state layer color | md.comp.checkbox.selected.hover.state-layer.color | #6750A4 |
| Checkbox selected hover state layer opacity | md.comp.checkbox.selected.hover.state-layer.opacity | 0.08 |
| Checkbox unselected hover state layer color | md.comp.checkbox.unselected.hover.state-layer.color | #1D1B20 |
| Checkbox unselected hover state layer opacity | md.comp.checkbox.unselected.hover.state-layer.opacity | 0.08 |
| Checkbox error hover state layer color | md.comp.checkbox.error.hover.state-layer.color | #B3261E |
| Checkbox error hover state layer opacity | md.comp.checkbox.error.hover.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected hover icon color | md.comp.checkbox.selected.hover.icon.color | #FFFFFF |
| Checkbox selected error hover icon color | md.comp.checkbox.selected.error.hover.icon.color | #FFFFFF |
| Checkbox unselected hover icon color | md.comp.checkbox.unselected.hover.icon.color | #1D1B20 |

#### Focused

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox focus indicator color | md.comp.checkbox.focus.indicator.color | #625B71 |
| Checkbox focus indicator thickness | md.comp.checkbox.focus.indicator.thickness | 3dp |
| Checkbox focus indicator offset | md.comp.checkbox.focus.indicator.outline.offset | 2dp |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox unselected focus outline color | md.comp.checkbox.unselected.focus.outline.color | #1D1B20 |
| Checkbox unselected focus outline width | md.comp.checkbox.unselected.focus.outline.width | 2dp |
| Checkbox selected focus container color | md.comp.checkbox.selected.focus.container.color | #6750A4 |
| Checkbox selected focus outline width | md.comp.checkbox.selected.focus.outline.width | 0 |
| Checkbox unselected error focus outline color | md.comp.checkbox.unselected.error.focus.outline.color | #B3261E |
| Checkbox unselected error focusd outline width | md.comp.checkbox.unselected.error.focus.outline.width | 2dp |
| Checkbox selected error focus container color | md.comp.checkbox.selected.error.focus.container.color | #B3261E |
| Checkbox selected error focus outline width | md.comp.checkbox.selected.error.focus.outline.width | 0 |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox error focus state layer opacity | md.comp.checkbox.error.focus.state-layer.opacity | 0.1 |
| Checkbox selected focus state layer color | md.comp.checkbox.selected.focus.state-layer.color | #6750A4 |
| Checkbox selected focus state layer opacity | md.comp.checkbox.selected.focus.state-layer.opacity | 0.1 |
| Checkbox unselected focus state layer color | md.comp.checkbox.unselected.focus.state-layer.color | #1D1B20 |
| Checkbox unselected focus state layer opacity | md.comp.checkbox.unselected.focus.state-layer.opacity | 0.1 |
| Checkbox error focus state layer color | md.comp.checkbox.error.focus.state-layer.color | #B3261E |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected focus icon color | md.comp.checkbox.selected.focus.icon.color | #FFFFFF |
| Checkbox selected error focus icon color | md.comp.checkbox.selected.error.focus.icon.color | #FFFFFF |
| Checkbox unselected focus icon color | md.comp.checkbox.unselected.focus.icon.color | #1D1B20 |

#### Pressed (ripple)

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox unselected pressed outline color | md.comp.checkbox.unselected.pressed.outline.color | #1D1B20 |
| Checkbox unselected pressed outline width | md.comp.checkbox.unselected.pressed.outline.width | 2dp |
| Checkbox selected pressed container color | md.comp.checkbox.selected.pressed.container.color | #6750A4 |
| Checkbox selected pressed outline width | md.comp.checkbox.selected.pressed.outline.width | 0 |
| Checkbox unselected error pressed outline color | md.comp.checkbox.unselected.error.pressed.outline.color | #B3261E |
| Checkbox unselected error pressed outline width | md.comp.checkbox.unselected.error.pressed.outline.width | 2dp |
| Checkbox selected error pressed container color | md.comp.checkbox.selected.error.pressed.container.color | #B3261E |
| Checkbox selected error pressed outline width | md.comp.checkbox.selected.error.pressed.outline.width | 0 |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox unselected pressed state layer color | md.comp.checkbox.unselected.pressed.state-layer.color | #6750A4 |
| Checkbox unselected pressed state layer opacity | md.comp.checkbox.unselected.pressed.state-layer.opacity | 0.1 |
| Checkbox selected pressed state layer color | md.comp.checkbox.selected.pressed.state-layer.color | #1D1B20 |
| Checkbox selected pressed state layer opacity | md.comp.checkbox.selected.pressed.state-layer.opacity | 0.1 |
| Checkbox error pressed state layer color | md.comp.checkbox.error.pressed.state-layer.color | #B3261E |
| Checkbox error pressed state layer opacity | md.comp.checkbox.error.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected pressed icon color | md.comp.checkbox.selected.pressed.icon.color | #FFFFFF |
| Checkbox selected error pressed icon color | md.comp.checkbox.selected.error.pressed.icon.color | #FFFFFF |
| Checkbox unselected pressed icon color | md.comp.checkbox.unselected.pressed.icon.color | #1D1B20 |
