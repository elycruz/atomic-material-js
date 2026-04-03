# Checkbox: Specs

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values.

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

## Checkbox Tokens

### Enabled / Unselected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox container color | md.comp.checkbox.unselected.container.color | #FFFBFE |
| Checkbox container outline color | md.comp.checkbox.unselected.outline.color | #79747E |
| Checkbox container outline width | md.comp.checkbox.unselected.outline.width |  |
| Checkbox container shape | md.comp.checkbox.unselected.container.shape |  |

### Enabled / Unselected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox state layer color | md.comp.checkbox.unselected.state-layer.color | #000000 |
| Checkbox state layer opacity | md.comp.checkbox.unselected.state-layer.opacity | 0 |

### Enabled / Selected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected container color | md.comp.checkbox.selected.container.color | #6750A4 |
| Checkbox selected container outline color | md.comp.checkbox.selected.outline.color | #6750A4 |
| Checkbox selected container outline width | md.comp.checkbox.selected.outline.width |  |
| Checkbox selected container shape | md.comp.checkbox.selected.container.shape |  |

### Enabled / Selected / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected icon color | md.comp.checkbox.selected.icon.color | #FFFBFE |

### Enabled / Selected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox selected state layer color | md.comp.checkbox.selected.state-layer.color | #000000 |
| Checkbox selected state layer opacity | md.comp.checkbox.selected.state-layer.opacity | 0 |

### Disabled / Unselected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox disabled unselected container color | md.comp.checkbox.disabled.unselected.container.color | #FFFBFE |
| Checkbox disabled unselected container opacity | md.comp.checkbox.disabled.unselected.container.opacity | 0.38 |
| Checkbox disabled unselected outline color | md.comp.checkbox.disabled.unselected.outline.color | #79747E |
| Checkbox disabled unselected outline opacity | md.comp.checkbox.disabled.unselected.outline.opacity | 0.38 |
| Checkbox disabled unselected outline width | md.comp.checkbox.disabled.unselected.outline.width |  |

### Disabled / Selected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox disabled selected container color | md.comp.checkbox.disabled.selected.container.color | #6750A4 |
| Checkbox disabled selected container opacity | md.comp.checkbox.disabled.selected.container.opacity | 0.38 |
| Checkbox disabled selected outline color | md.comp.checkbox.disabled.selected.outline.color | #6750A4 |
| Checkbox disabled selected outline width | md.comp.checkbox.disabled.selected.outline.width |  |

### Disabled / Selected / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox disabled selected icon color | md.comp.checkbox.disabled.selected.icon.color | #FFFBFE |

### Hovered / Unselected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox hover unselected container elevation | md.comp.checkbox.hover.unselected.container.elevation |  |

### Hovered / Unselected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox hover unselected state layer color | md.comp.checkbox.hover.unselected.state-layer.color | #000000 |
| Checkbox hover unselected state layer opacity | md.comp.checkbox.hover.unselected.state-layer.opacity | 0.08 |

### Hovered / Selected / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox hover selected container elevation | md.comp.checkbox.hover.selected.container.elevation |  |

### Hovered / Selected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox hover selected state layer color | md.comp.checkbox.hover.selected.state-layer.color | #000000 |
| Checkbox hover selected state layer opacity | md.comp.checkbox.hover.selected.state-layer.opacity | 0.08 |

### Focused / Unselected / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox focus unselected focus indicator color | md.comp.checkbox.focus.unselected.focus-indicator.color | #625B71 |
| Checkbox focus unselected focus indicator width | md.comp.checkbox.focus.unselected.focus-indicator.width |  |

### Focused / Unselected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox focus unselected state layer color | md.comp.checkbox.focus.unselected.state-layer.color | #000000 |
| Checkbox focus unselected state layer opacity | md.comp.checkbox.focus.unselected.state-layer.opacity | 0.1 |

### Focused / Selected / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox focus selected focus indicator color | md.comp.checkbox.focus.selected.focus-indicator.color | #625B71 |
| Checkbox focus selected focus indicator width | md.comp.checkbox.focus.selected.focus-indicator.width |  |

### Focused / Selected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox focus selected state layer color | md.comp.checkbox.focus.selected.state-layer.color | #000000 |
| Checkbox focus selected state layer opacity | md.comp.checkbox.focus.selected.state-layer.opacity | 0.1 |

### Pressed / Unselected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox pressed unselected state layer color | md.comp.checkbox.pressed.unselected.state-layer.color | #000000 |
| Checkbox pressed unselected state layer opacity | md.comp.checkbox.pressed.unselected.state-layer.opacity | 0.12 |

### Pressed / Selected / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Checkbox pressed selected state layer color | md.comp.checkbox.pressed.selected.state-layer.color | #000000 |
| Checkbox pressed selected state layer opacity | md.comp.checkbox.pressed.selected.state-layer.opacity | 0.12 |
