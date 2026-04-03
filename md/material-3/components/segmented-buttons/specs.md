# Segmented Buttons: Specs

**Note:** Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the connected button group instead, which has mostly the same functionality but with an updated visual design.

## Anatomy

- Container
- Icon (optional for unselected state)
- Label text

## Tokens and Specs

Browse the component elements, attributes, tokens, and their values.

**Note:** Learn more about design tokens.

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Segmented Button Color Roles

Used for light and dark schemes:
- On surface
- Outline
- Secondary container
- On secondary container

## States

States are visual representations used to communicate the status of a component or interactive element.

### Unselected

Unselected button states:
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

### Selected

Selected button states:
- Selected
- Hovered on selected
- Focused on selected
- Pressed on selected

## Measurements

### Padding and Container Size

| Attribute | Value |
|-----------|-------|
| Container width | Dynamic based on labels |
| Segment width | Container width / total segments (Example: 1/3) |
| Height | 40dp |
| Outline width | 1dp |
| Label alignment | Center |
| Left/right padding | Min 12dp |
| Padding between elements | 8dp |

### Target Size

Target size: 48dp

## Density

Density can be used in denser UIs where space is limited. Density is only applied to the height. Each step down in density removes 4dp from the height.

## Tokens & Specs

### Segmented button - Outlined

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button outline color | md.comp.outlined-segmented-button.outline.color | #79747E |
| Outlined segmented button outline width | md.comp.outlined-segmented-button.outline.width | 1dp |
| Outlined segmented button container height | md.comp.outlined-segmented-button.container.height | 40dp |
| Outlined segmented button selected container color | md.comp.outlined-segmented-button.selected.container.color | #E8DEF8 |
| Outlined segmented button shape | md.comp.outlined-segmented-button.shape |  |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button unselected label text color | md.comp.outlined-segmented-button.unselected.label-text.color | #1D1B20 |
| Outlined segmented button selected label text color | md.comp.outlined-segmented-button.selected.label-text.color | #4A4458 |
| Outlined segmented button label text font | md.comp.outlined-segmented-button.label-text.font |  |
| Outlined segmented button label text size | md.comp.outlined-segmented-button.label-text.size | 14.0dp |
| Outlined segmented button label text line height | md.comp.outlined-segmented-button.label-text.line-height | 20.0dp |
| Outlined segmented button label text letter spacing | md.comp.outlined-segmented-button.label-text.letter-spacing | 0.1dp |
| Outlined segmented button label text weight | md.comp.outlined-segmented-button.label-text.weight |  |

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button disabled outline color | md.comp.outlined-segmented-button.disabled.outline.color | #79747E |

#### Disabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button disabled unselected label text color | md.comp.outlined-segmented-button.disabled.unselected.label-text.color | #1D1B20 |
| Outlined segmented button disabled selected label text color | md.comp.outlined-segmented-button.disabled.selected.label-text.color | #4A4458 |

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button unselected state layer color | md.comp.outlined-segmented-button.unselected.state-layer.color | #1D1B20 |
| Outlined segmented button unselected state layer opacity | md.comp.outlined-segmented-button.unselected.state-layer.opacity | 0.12 |
| Outlined segmented button selected state layer color | md.comp.outlined-segmented-button.selected.state-layer.color | #4A4458 |
| Outlined segmented button selected state layer opacity | md.comp.outlined-segmented-button.selected.state-layer.opacity | 0.08 |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button focus indicator color | md.comp.outlined-segmented-button.focus-indicator.color | #4A4458 |
| Outlined segmented button focus indicator width | md.comp.outlined-segmented-button.focus-indicator.width | 3.0dp |

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined segmented button unselected state layer color | md.comp.outlined-segmented-button.unselected.state-layer.color | #1D1B20 |
| Outlined segmented button unselected state layer opacity | md.comp.outlined-segmented-button.unselected.state-layer.opacity | 0.12 |
| Outlined segmented button selected state layer color | md.comp.outlined-segmented-button.selected.state-layer.color | #4A4458 |
| Outlined segmented button selected state layer opacity | md.comp.outlined-segmented-button.selected.state-layer.opacity | 0.12 |
