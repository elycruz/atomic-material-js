# Sliders: Specs

## Variants

- Standard
- Centered
- Range

| Variant | M3 | M3 Expressive |
|---------|-----|-----------|
| Standard | Available as "continuous" slider | Available |
| Centered | Available (web only) | Available |
| Range | Available | Available |
| Discrete | Available | Available as "stops" configuration |

## Configurations

- **Orientation**: Horizontal, vertical
- **Size**: XS, S, M, L, XL
- **Inset icon**: No (default), Yes
- **Stops**: No (default), Yes
- **Value indicator**: No (default), Yes

## Category Configuration

| Category | Configuration | M3 | M3 Expressive |
|----------|----------|-----|-----------|
| Inset icon | No (default) | Available | Available |
| Inset icon | Yes | - | Available |
| Orientation | Horizontal (default) | Available | Available |
| Orientation | Vertical | - | Available |
| Size | XS (default) | Available | Available |
| Size | S, M, L, XL | - | Available on MDC-Android* |
| Stop indicators | No (default), Yes | Available as "discrete" slider | Available |
| Value Indicator | No (default), Yes | Available | Available |

*Configurations only available using tokens don't have implemented presets in code. To change the size, swap the default size tokens with those of the desired size.

## Anatomy

- Value indicator (optional)
- Stop indicators (optional)
- Active track
- Handle
- Inactive track
- Inset icon (optional)

## Color

Slider color roles used for light and dark schemes:

| Element | Role |
|---------|------|
| Cursor | Inverse surface |
| Cursor text | Inverse on surface |
| Slider track active | Primary |
| Slider track inactive | On primary (40%) |
| Focus ring | Primary |
| Disabled state | Secondary container |
| Disabled text | On secondary container |
| Handles | On secondary container |
| Focus state | On primary |

## States

- Enabled
- Disabled
- Hovered
- Focused
- Pressed

## Measurements

### Common sliders

Padding and size measurements for common sliders:

| Attribute | Value |
|-----------|-------|
| Padding | 16dp |

### Size variants

Padding and size measurements for XS, S, M, L, and XL sliders:

| Attribute | XS | S | M | L | XL |
|-----------|----|----|----|----|-----|
| Track height | 16dp | 24dp | 40dp | 56dp | 96dp |
| Label container height | 44dp | 44dp | 44dp | 44dp | 44dp |
| Label container width | 48dp | 48dp | 48dp | 48dp | 48dp |
| Handle height | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width | 4dp | 4dp | 4dp | 4dp | 4dp |
| Track shape | 8dp | 8dp | 12dp | 16dp | 28dp |
| Inset icon size | - | - | 24dp | 24dp | 32dp |

## Tokens & Specs

Slider tokens are organized into a common token set, and token sets for each size.

### Slider - Size - Xlarge


#### Active track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xlarge active track height | md.comp.slider.xlarge.active.track.height | 96dp |
| Slider xlarge active track leading shape | md.comp.slider.xlarge.active.track.shape.leading | 20dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xlarge inactive track height | md.comp.slider.xlarge.inactive.track.height | 96dp |
| Slider xlarge inactive track trailing shape | md.comp.slider.xlarge.inactive.track.shape.trailing | 20dp |

#### Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xlarge active handle height | md.comp.slider.xlarge.active.handle.height | 64dp |

### Slider - Size - Large


#### Active track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider large active track height | md.comp.slider.large.active.track.height | 56dp |
| Slider large active track leading shape | md.comp.slider.large.active.track.shape.leading | 16dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider large inactive track height | md.comp.slider.large.inactive.track.height | 56dp |
| Slider large inactive track trailing shape | md.comp.slider.large.inactive.track.shape.trailing | 16dp |

#### Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider large active handle height | md.comp.slider.large.active.handle.height | 56dp |

### Slider - Size - Medium


#### Active track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider medium active track height | md.comp.slider.medium.active.track.height | 40dp |
| Slider medium active track leading shape | md.comp.slider.medium.active.track.shape.leading | 12dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider medium inactive track height | md.comp.slider.medium.inactive.track.height | 40dp |
| Slider medium inactive track trailing shape | md.comp.slider.medium.inactive.track.shape.trailing | 12dp |

#### Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider medium active handle height | md.comp.slider.medium.active.handle.height | 48dp |

### Slider - Size - Small


#### Active track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider small active track height | md.comp.slider.small.active.track.height | 24dp |
| Slider small active track leading shape | md.comp.slider.small.active.track.shape.leading | 8dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider small inactive track height | md.comp.slider.small.inactive.track.height | 24dp |
| Slider small inactive track trailing shape | md.comp.slider.small.inactive.track.shape.trailing | 8dp |

#### Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider small active handle height | md.comp.slider.small.active.handle.height | 44dp |

### Slider - Size - Xsmall


#### Active track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xsmall active track height | md.comp.slider.xsmall.active.track.height | 8dp |
| Slider xsmall active track leading shape | md.comp.slider.xsmall.active.track.shape.leading | 4dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xsmall inactive track height | md.comp.slider.xsmall.inactive.track.height | 4dp |
| Slider xsmall inactive track trailing shape | md.comp.slider.xsmall.inactive.track.shape.trailing | 2dp |

#### Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider xsmall active handle height | md.comp.slider.xsmall.active.handle.height | 44dp |

### Slider


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Stop indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Slider stop indicator size | md.comp.slider.stop-indicator.size | 4dp |
| Slider stop indicator shape | md.comp.slider.stop-indicator.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider stop indicator trailing space | md.comp.slider.stop-indicator.trailing-space | 4dp |
| Slider stop indicator color | md.comp.slider.stop-indicator.color | #4A4458 |
| Slider stop indicator color selected | md.comp.slider.stop-indicator.color-selected | #FFFFFF |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Slider with tick marks container size | md.comp.slider.with-tick-marks.container.size | 2dp |
| Slider with tick marks container shape | md.comp.slider.with-tick-marks.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider with tick marks active container color | md.comp.slider.with-tick-marks.active.container.color | #6750A4 |
| Slider with tick marks inactive container color | md.comp.slider.with-tick-marks.inactive.container.color | #E8DEF8 |

#### Enabled / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider active track height | md.comp.slider.active.track.height | 8dp |
| Slider active track shape | md.comp.slider.active.track.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider active track color | md.comp.slider.active.track.color | #6750A4 |
| Slider inactive track height | md.comp.slider.inactive.track.height | 4dp |
| Slider inactive track shape | md.comp.slider.inactive.track.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider inactive track color | md.comp.slider.inactive.track.color | #E8DEF8 |

#### Enabled / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider handle height | md.comp.slider.handle.height | 4dp |
| Slider handle width | md.comp.slider.handle.width | 4dp |
| Slider handle shape | md.comp.slider.handle.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider handle elevation | md.comp.slider.handle.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Slider handle shadow color | md.comp.slider.handle.shadow-color | #000000 |
| Slider handle color | md.comp.slider.handle.color | #6750A4 |
| Slider active handle color | md.comp.slider.slider-active-handle-color | #6750A4 |
| Slider active handle height | md.comp.slider.active.handle.height | 44dp |
| Slider active handle width | md.comp.slider.active.handle.width | 4dp |
| Slider with overlap handle outline color | md.comp.slider.with-overlap.handle.outline.color | #FFFFFF |
| Slider with overlap handle outline width | md.comp.slider.with-overlap.handle.outline.width | 1dp |
| Slider active handle shape | md.comp.slider.active.handle.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Slider active handle leading space | md.comp.slider.active.handle.leading-space | 6dp |
| Slider active handle trailing space | md.comp.slider.active.handle.trailing-space | 6dp |
| Slider inactive handle color | md.comp.slider.inactive.handle.color | #4A4458 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Disabled / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider disabled active track color | md.comp.slider.disabled.active.track.color | #E8DEF8 |
| Slider disabled inactive track color | md.comp.slider.disabled.inactive.track.color | #E8DEF8 |

#### Disabled / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider disabled handle color | md.comp.slider.disabled.handle.color | #E8DEF8 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|

#### Hovered / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider hover active track color | md.comp.slider.hover.active.track.color | #6750A4 |
| Slider hover inactive track color | md.comp.slider.hover.inactive.track.color | #E8DEF8 |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Slider hover state layer color | md.comp.slider.hover.state-layer.color | #6750A4 |
| Slider hover state layer opacity | md.comp.slider.hover.state-layer.opacity | 0.08 |

#### Hovered / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider hover handle color | md.comp.slider.hover.handle.color | #6750A4 |
| Slider hover handle width | md.comp.slider.hover.handle.width | 4dp |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|

#### Focused / [Deprecated] Stop

| Token | Reference | Value |
|-------|-----------|-------|
| Slider focus stop color | md.comp.slider.focus.stop.color | #6750A4 |

#### Focused / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider focus active track color | md.comp.slider.focus.active.track.color | #6750A4 |
| Slider focus inactive track color | md.comp.slider.focus.inactive.track.color | #E8DEF8 |

#### Focused / [Deprecated] State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Slider focus state layer color | md.comp.slider.focus.state-layer.color | #6750A4 |
| Slider focus state layer opacity | md.comp.slider.focus.state-layer.opacity | 0.1 |

#### Focused / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider focus handle color | md.comp.slider.focus.handle.color | #6750A4 |
| Slider focus handle width | md.comp.slider.focus.handle.width | 4dp |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|

#### Pressed / Track

| Token | Reference | Value |
|-------|-----------|-------|
| Slider pressed active track color | md.comp.slider.pressed.active.track.color | #6750A4 |
| Slider pressed inactive track color | md.comp.slider.pressed.inactive.track.color | #E8DEF8 |

#### Pressed / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Slider pressed state layer color | md.comp.slider.pressed.state-layer.color | #6750A4 |
| Slider pressed state layer opacity | md.comp.slider.pressed.state-layer.opacity | 0.1 |

#### Pressed / Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider pressed handle color | md.comp.slider.pressed.handle.color | #6750A4 |
| Slider pressed handle width | md.comp.slider.pressed.handle.width | 4dp |
