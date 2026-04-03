# Radio Button: Specs

## Anatomy

- Radio button icon

## Tokens & specs

Learn more about design tokens.

See design tokens for detailed specifications.

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Radio button color roles used for light and dark themes:
- Primary
- On surface variant

### Adjacent text label color

Use the color role "on surface" for adjacent text labels. This remains the same even if interacting with the label or component.

The text color remains the same regardless if the button is selected or not.

## States

States are visual representations used to communicate the status of a component or interactive element.

- Enabled
- Hover
- Focus
- Pressed
- Disabled

## Measurements

| Attribute | Value |
|-----------|-------|
| Icon size | 20dp |
| State layer size | 40dp |
| Target size | 48dp |

## Design Tokens

### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button icon selected color | md.comp.radio-button.selected.icon.color | #6750A4 |
| Radio button icon unselected color | md.comp.radio-button.unselected.icon.color | #49454F |
| Radio button icon size | md.comp.radio-button.icon.size | 20dp |
| Radio button state layer color | md.comp.radio-button.state-layer.color | #6750A4 |
| Radio button state layer opacity | md.comp.radio-button.state-layer.opacity | 0.08 |

### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button icon disabled color | md.comp.radio-button.disabled.icon.color | #49454F |
| Radio button disabled opacity | md.comp.radio-button.disabled.opacity | 0.38 |

### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button hovered state layer opacity | md.comp.radio-button.hovered.state-layer.opacity | 0.08 |

### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button focused state layer opacity | md.comp.radio-button.focused.state-layer.opacity | 0.12 |

### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button pressed state layer opacity | md.comp.radio-button.pressed.state-layer.opacity | 0.12 |
