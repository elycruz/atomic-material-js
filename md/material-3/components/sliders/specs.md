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

## Tokens & specs

Slider tokens are organized into a common token set, and token sets for each size.

### Slider

Token: Default, Light

Folder: Enabled, Disabled, Hovered, Focused, Pressed (ripple)

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

## Design Tokens

### Slider Track - Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Slider active track color | md.comp.slider.active.track.color | Primary |
| Slider inactive track color | md.comp.slider.inactive.track.color | On primary |
| Slider track height | md.comp.slider.track.height | 4dp |
| Slider track shape | md.comp.slider.track.shape | Shape: corner.full (Fully round) |

### Slider Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Slider handle color | md.comp.slider.handle.color | Primary |
| Slider handle height | md.comp.slider.handle.height | 4dp |
| Slider handle width | md.comp.slider.handle.width | 4dp |

### Slider States

| Token | Reference | Value |
|-------|-----------|-------|
| Slider hovered state layer opacity | md.comp.slider.hovered.state-layer.opacity | 0.08 |
| Slider focused state layer opacity | md.comp.slider.focused.state-layer.opacity | 0.12 |
| Slider pressed state layer opacity | md.comp.slider.pressed.state-layer.opacity | 0.12 |
| Slider disabled track color | md.comp.slider.disabled.track.color | On surface |
| Slider disabled track opacity | md.comp.slider.disabled.track.opacity | 0.38 |

### Value Indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Slider value indicator background color | md.comp.slider.value-indicator.background.color | Inverse surface |
| Slider value indicator text color | md.comp.slider.value-indicator.text.color | Inverse on surface |
| Slider value indicator shape | md.comp.slider.value-indicator.shape | Shape: corner.full (Fully round) |
