# Radio Button: Specs

## Anatomy

- Radio button icon

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

## Tokens & Specs

Learn more about design tokens.

See design tokens for detailed specifications.

### Radio Button


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button icon selected color | md.comp.radio-button.selected.icon.color | #6750A4 |
| Radio button icon unselected color | md.comp.radio-button.unselected.icon.color | #49454F |
| Radio button icon size | md.comp.radio-button.icon.size | 20dp |

#### Enabled / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button state layer size | md.comp.radio-button.state-layer.size | 40dp |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Disabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button disabled selected icon color | md.comp.radio-button.disabled.selected.icon.color | #1D1B20 |
| Radio button disabled selected icon opacity | md.comp.radio-button.disabled.selected.icon.opacity | 0.38 |
| Radio button disabled unselected icon color | md.comp.radio-button.disabled.unselected.icon.color | #1D1B20 |
| Radio button disabled unselected icon opacity | md.comp.radio-button.disabled.unselected.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected hover state layer color | md.comp.radio-button.selected.hover.state-layer.color | #6750A4 |
| Radio button selected hover state layer opacity | md.comp.radio-button.selected.hover.state-layer.opacity | 0.08 |
| Radio button unselected hover state layer color | md.comp.radio-button.unselected.hover.state-layer.color | #1D1B20 |
| Radio button unselected hover state layer opacity | md.comp.radio-button.unselected.hover.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected hover icon color | md.comp.radio-button.selected.hover.icon.color | #6750A4 |
| Radio button unselected hover icon color | md.comp.radio-button.unselected.hover.icon.color | #1D1B20 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected focus state layer color | md.comp.radio-button.selected.focus.state-layer.color | #6750A4 |
| Radio button selected focus state layer opacity | md.comp.radio-button.selected.focus.state-layer.opacity | 0.1 |
| Radio button unselected focus state layer color | md.comp.radio-button.unselected.focus.state-layer.color | #1D1B20 |
| Radio button unselected focus state layer opacity | md.comp.radio-button.unselected.focus.state-layer.opacity | 0.1 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected focus icon color | md.comp.radio-button.selected.focus.icon.color | #6750A4 |
| Radio button unselected focus icon color | md.comp.radio-button.unselected.focus.icon.color | #1D1B20 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|

#### Pressed / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected pressed state layer color | md.comp.radio-button.selected.pressed.state-layer.color | #6750A4 |
| Radio button selected pressed state layer opacity | md.comp.radio-button.selected.pressed.state-layer.opacity | 0.1 |
| Radio button unselected pressed state layer color | md.comp.radio-button.unselected.pressed.state-layer.color | #1D1B20 |
| Radio button unselected pressed state layer opacity | md.comp.radio-button.unselected.pressed.state-layer.opacity | 0.1 |

#### Pressed / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Radio button selected pressed icon color | md.comp.radio-button.selected.pressed.icon.color | #6750A4 |
| Radio button unselected pressed icon color | md.comp.radio-button.unselected.pressed.icon.color | #1D1B20 |
