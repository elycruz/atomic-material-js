# Cards: Specs

## Elevated Card

### Container

![Diagram indicating elevated card container.](https://lh3.googleusercontent.com/E3Vi9qZnejfvkANGxN7TTmb5Utn3gzxXo8tbngvR9A83WXhpvV-mK_p9erAn4wBXMFmFRXpw2SmD7N-mIEq_5nOkXuKc8LOzoFXj6Oa8G1lv=w640)

### Color

![Color diagram indicating elevated card surface color.](https://lh3.googleusercontent.com/gOvzxWalOCyRSRq6I8AqYgS6Y-XJlhBZ7VW82pxtb3dFUccU5LHnNcaccQ4BVnHcQflh6KOXqswxajojBj-v_9S6huJlw4kvNscb4UZN6Zb0=w640)

Elevated card color roles used for light and dark themes:
- **Surface container low**

### States

![Diagram of 5 elevated card states.](https://lh3.googleusercontent.com/8OD9zWeF6hOtcHP-XQEqSVrCYSmtOFcwnb19h4zkqIDtpszCMXho0opgebc5B_ukqbsOiK-Q_iMQoDf1Iz94KTS5kg3zH3qXyF8Ki9kZAo0_=w640)

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states.

Elevated card states: Hovered, Focused, Pressed, Dragged, Disabled

## Filled Card

### Container

![Diagram indicating filled card container.](https://lh3.googleusercontent.com/RbaHdHqyYyeHjx_eq4Kbjc4E3WWtYoHRrwqEg2mnQUhLVLjtwyp3KtjjaHrV6kdyFRPu5O26lbeXiQwSA3kQSGei)

### Color

![Color diagram indicating filled card surface color.](https://lh3.googleusercontent.com/cOmC4QpvbjKpn86ZkVqq_Y4mE9RJqHLjVQ3u6xVHAOz1qOHAcCXn0QkT5YJiZhGQUNK0nVhCR3ScKJ7zNvVCALmh3KCkZ9RMBM5U6pVV=w640)

Filled card color roles used for light and dark themes:
- **Surface container highest**

### States

![Diagram showing 5 filled card states.](https://lh3.googleusercontent.com/b_eeHb5p1L8kMx2dZvW6zNQcI-G4hZQ2qVRJlx8C8VK5hqVZzJkK1VNQnfYfqKMfY8rF_Q3Wvb8g2VrCd0mPNd5RlNpVUPqOXWFxOQ=w640)

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states.

Filled card states: Hovered, Focused, Pressed, Dragged, Disabled

## Outlined Card

### Container and Outline

![Diagram indicating outlined card container and outline.](https://lh3.googleusercontent.com/VQj3rXFGH2Lkx5pY8zW9kM6NLqJ8qV5FrM2OhPyDjE4XyZbT3NVXsKwL2cO4H5m=w640)

### Color

![Color diagram indicating outlined card surface color.](https://lh3.googleusercontent.com/SzFpK4QvMbXsZdYqTcWkL6JoRxSxYvZ3LnN9P5hUq2JjVwMpR1XlNaB8U9fC0D7=w640)

Outlined card color roles used for light and dark themes:
- **Surface**
- **Outline variant**

### States

![Diagram showing 5 outlined card states.](https://lh3.googleusercontent.com/TqWlZ6XvOsYzR3Ky7jFnN8mQpVsUw4XbR2hW5PqCrJvExN8KxYzU0lmJ1S9GhT=w640)

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states.

Outlined card states: Hovered, Focused, Pressed, Dragged, Disabled

## Measurements

### Card Padding and Size

| Attribute | Value |
|-----------|-------|
| Shape | 12dp corner radius |
| Left/right padding | 16dp |
| Padding between cards | 8dp max |
| Label text alignment | Start-aligned |

## Tokens & Specs

Select a component variant below to see its elements, attributes, tokens, and their values.

### Card - Outlined


#### Enabled

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card container color | md.comp.outlined-card.container.color | #FEF7FF |
| Outlined card container elevation | md.comp.outlined-card.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Outlined card container surface tint layer color | md.comp.outlined-card.container.surface-tint-layer.color | #6750A4 |
| Outlined card container shape | md.comp.outlined-card.container.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |

#### Enabled / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card container shadow color | md.comp.outlined-card.container.shadow-color | #000000 |
| Outlined card outline width | md.comp.outlined-card.outline.width | 1dp |
| Outlined card outline color | md.comp.outlined-card.outline.color | #CAC4D0 |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card icon color | md.comp.outlined-card.icon.color | #6750A4 |
| Outlined card icon size | md.comp.outlined-card.icon.size | 24dp |

#### Disabled

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card disabled container elevation | md.comp.outlined-card.disabled.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Disabled / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card disabled outline color | md.comp.outlined-card.disabled.outline.color | #79747E |
| Outlined card disabled outline opacity | md.comp.outlined-card.disabled.outline.opacity | 0.12 |

#### Hovered

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card hover container elevation | md.comp.outlined-card.hover.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card hover state layer color | md.comp.outlined-card.hover.state-layer.color | #1D1B20 |
| Outlined card hover state layer opacity | md.comp.outlined-card.hover.state-layer.opacity | 0.08 |

#### Hovered / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card hover outline color | md.comp.outlined-card.hover.outline.color | #CAC4D0 |

#### Focused

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card focus indicator thickness | md.comp.outlined-card.focus.indicator.thickness | 3dp |
| Outlined card focus indicator offset | md.comp.outlined-card.focus.indicator.outline.offset | 2dp |
| Outlined card focus indicator color | md.comp.outlined-card.focus.indicator.color | #625B71 |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card focus container elevation | md.comp.outlined-card.focus.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card focus state layer color | md.comp.outlined-card.focus.state-layer.color | #1D1B20 |
| Outlined card focus state layer opacity | md.comp.outlined-card.focus.state-layer.opacity | 0.1 |

#### Focused / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card focus outline color | md.comp.outlined-card.focus.outline.color | #1D1B20 |

#### Pressed (ripple)

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card pressed container elevation | md.comp.outlined-card.pressed.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card pressed state layer color | md.comp.outlined-card.pressed.state-layer.color | #1D1B20 |
| Outlined card pressed state layer opacity | md.comp.outlined-card.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card pressed outline color | md.comp.outlined-card.pressed.outline.color | #CAC4D0 |

#### Dragged

#### Dragged / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card dragged container elevation | md.comp.outlined-card.dragged.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Dragged / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card dragged state layer color | md.comp.outlined-card.dragged.state-layer.color | #1D1B20 |
| Outlined card dragged state layer opacity | md.comp.outlined-card.dragged.state-layer.opacity | 0.16 |

#### Dragged / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined card dragged outline color | md.comp.outlined-card.dragged.outline.color | #CAC4D0 |

### Card - Filled


#### Enabled

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card container color | md.comp.filled-card.container.color | #E6E0E9 |
| Filled card container elevation | md.comp.filled-card.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Filled card container shape | md.comp.filled-card.container.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |
| Filled card container shadow color | md.comp.filled-card.container.shadow-color | #000000 |
| Filled card container surface tint layer color | md.comp.filled-card.container.surface-tint-layer.color | #6750A4 |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card icon color | md.comp.filled-card.icon.color | #6750A4 |
| Filled card icon size | md.comp.filled-card.icon.size | 24dp |

#### Disabled

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card disabled container elevation | md.comp.filled-card.disabled.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Filled card disabled container opacity | md.comp.filled-card.disabled.container.opacity | 0.38 |
| Filled card disabled container color | md.comp.filled-card.disabled.container.color | #E7E0EC |

#### Hovered

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card hover container elevation | md.comp.filled-card.hover.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card hover state layer color | md.comp.filled-card.hover.state-layer.color | #1D1B20 |
| Filled card hover state layer opacity | md.comp.filled-card.hover.state-layer.opacity | 0.08 |

#### Focused

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card focus indicator color | md.comp.filled-card.focus.indicator.color | #625B71 |
| Filled card focus indicator thickness | md.comp.filled-card.focus.indicator.thickness | 3dp |
| Filled card focus indicator offset | md.comp.filled-card.focus.indicator.outline.offset | 2dp |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card focus container elevation | md.comp.filled-card.focus.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card focus state layer color | md.comp.filled-card.focus.state-layer.color | #1D1B20 |
| Filled card focus state layer opacity | md.comp.filled-card.focus.state-layer.opacity | 0.1 |

#### Pressed (ripple)

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card pressed container elevation | md.comp.filled-card.pressed.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card pressed state layer color | md.comp.filled-card.pressed.state-layer.color | #1D1B20 |
| Filled card pressed state layer opacity | md.comp.filled-card.pressed.state-layer.opacity | 0.1 |

#### Dragged

#### Dragged / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card dragged container elevation | md.comp.filled-card.dragged.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Dragged / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Filled card dragged state layer color | md.comp.filled-card.dragged.state-layer.color | #1D1B20 |
| Filled card dragged state layer opacity | md.comp.filled-card.dragged.state-layer.opacity | 0.16 |

### Card - Elevated


#### Enabled

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card container color | md.comp.elevated-card.container.color | #F7F2FA |
| Elevated card container elevation | md.comp.elevated-card.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Elevated card container surface tint layer color | md.comp.elevated-card.container.surface-tint-layer.color | #6750A4 |
| Elevated card container shape | md.comp.elevated-card.container.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |
| Elevated card container shadow color | md.comp.elevated-card.container.shadow-color | #000000 |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card icon color | md.comp.elevated-card.icon.color | #6750A4 |
| Elevated card icon size | md.comp.elevated-card.icon.size | 24dp |

#### Disabled

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card disabled container elevation | md.comp.elevated-card.disabled.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Elevated card disabled container opacity | md.comp.elevated-card.disabled.container.opacity | 0.38 |
| Elevated card disabled container color | md.comp.elevated-card.disabled.container.color | #FEF7FF |

#### Hovered

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card hover container elevation | md.comp.elevated-card.hover.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card hover state layer color | md.comp.elevated-card.hover.state-layer.color | #1D1B20 |
| Elevated card hover state layer opacity | md.comp.elevated-card.hover.state-layer.opacity | 0.08 |

#### Focused

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card focus indicator color | md.comp.elevated-card.focus.indicator.color | #625B71 |
| Elevated card focus indicator thickness | md.comp.elevated-card.focus.indicator.thickness | 3dp |
| Elevated card focus indicator offset | md.comp.elevated-card.focus.indicator.outline.offset | 2dp |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card focus container elevation | md.comp.elevated-card.focus.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card focus state layer color | md.comp.elevated-card.focus.state-layer.color | #1D1B20 |
| Elevated card focus state layer opacity | md.comp.elevated-card.focus.state-layer.opacity | 0.1 |

#### Pressed (ripple)

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card pressed container elevation | md.comp.elevated-card.pressed.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card pressed state layer color | md.comp.elevated-card.pressed.state-layer.color | #1D1B20 |
| Elevated card pressed state layer opacity | md.comp.elevated-card.pressed.state-layer.opacity | 0.1 |

#### Dragged

#### Dragged / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card dragged container elevation | md.comp.elevated-card.dragged.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |

#### Dragged / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Elevated card dragged state layer color | md.comp.elevated-card.dragged.state-layer.color | #1D1B20 |
| Elevated card dragged state layer opacity | md.comp.elevated-card.dragged.state-layer.opacity | 0.16 |
