# Progress indicators: Specs

## Variants

![2 variant of progress indicators.](https://lh3.googleusercontent.com/fLmSSW0vCAz72TSdfqeo9FQY5YlgLT7ktKAZkxs-FEetsANoory1UPDxRd3-jESQSkUeq6xuwEtp1NcR52Mih2QQQiprYecoJ-XI0SDBaL1T=w40)

| Variant | M3 | M3 Expressive |
|---|---| --- |
| Linear progress indicator | Available | Available |
| Circular progress indicator | Available | Available |

## Configurations

![4 configurations of the linear determinate progress indicator.](https://lh3.googleusercontent.com/Cf6AdPUEQffL-k5D1on9M3H1oyAGh20uJyfa7sbOwip6oRPvmqv7u2MSLKrH70PpyL0bCJdy2fGRNg_13JG9imoQdIMm8935YUMQXQxATKeocA=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Behavior | Determinate (default), Indeterminate | Available | Available |
| Track thickness | Fixed (4dp) | Available | Available |
| Configurable | -- | Available |
| Shape | Flat (default) | Available | Available |
| Wavy | -- | Available |

## Tokens & specs

### Progress Indicator - Common

#### Color

| Token | Reference | Value |
|-------|-----------| ------- |
| Progress indicator active indicator color | md.comp.progress-indicator.active-indicator.color | #6750A4 |
| Progress indicator track color | md.comp.progress-indicator.track.color | #E8DEF8 |
| Progress indicator stop indicator color | md.comp.progress-indicator.stop-indicator.color | #6750A4 |

#### Shape

| Token | Reference | Value |
|-------|-----------| ------- |
| Progress indicator active indicator shape | md.comp.progress-indicator.active-indicator.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Progress indicator track shape | md.comp.progress-indicator.track.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Progress indicator stop indicator shape | md.comp.progress-indicator.stop-indicator.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |

### Progress indicator - Linear

#### Linear - baseline

| Token | Reference | Value |
|-------|-----------| ------- |
| Progress indicator linear height | md.comp.progress-indicator.linear.height | 4dp |
| Progress indicator linear with wave height | md.comp.progress-indicator.linear.with-wave.height | 10dp |
| Progress indicator linear active indicator thickness | md.comp.progress-indicator.linear.active-indicator.thickness | 4dp |
| Progress indicator linear track thickness | md.comp.progress-indicator.linear.track.thickness | 4dp |
| Progress indicator linear stop indicator size | md.comp.progress-indicator.linear.stop-indicator.size | 4dp |
| Progress indicator linear track active indicator space | md.comp.progress-indicator.linear.track-active-indicator-space | 4dp |
| Progress indicator linear stop indicator trailing space | md.comp.progress-indicator.linear.stop-indicator.trailing-space | 0 |
| Progress indicator linear wave amplitude | md.comp.progress-indicator.linear.active-indicator.wave.amplitude | 3dp |
| Progress indicator linear wave wavelenght | md.comp.progress-indicator.linear.active-indicator.wave.wavelength | 40dp |
| Progress indicator linear indeterminate wave wavelenght | md.comp.progress-indicator.linear.indeterminate.active-indicator.wave.wavelength | 20dp |

### Progress indicator - Circular

#### Circular - baseline

| Token | Reference | Value |
|-------|-----------| ------- |
| Progress indicator circular size | md.comp.progress-indicator.circular.size | 40dp |
| Progress indicator circular size with wave | md.comp.progress-indicator.circular.with-wave.size | 48dp |
| Progress indicator circular active indicator thickness | md.comp.progress-indicator.circular.active-indicator.thickness | 4dp |
| Progress indicator circular track thickness | md.comp.progress-indicator.circular.track.thickness | 4dp |
| Progress indicator circular track active indicator space | md.comp.progress-indicator.circular.track-active-indicator-space | 4dp |
| Progress indicator circular active indicator wave amplitude | md.comp.progress-indicator.circular.active-indicator.wave.amplitude | 1.6dp |
| Progress indicator circular active indicator wave wavelength | md.comp.progress-indicator.circular.active-indicator.wave.wavelength | 15dp |

## Anatomy

![3 elements of a progress indicator.](https://lh3.googleusercontent.com/d1mWcS4gytQf_XcgwvUqsNTf47P5BT9PUo-Ivi-7Ld1_Vc_HAtLGPARxwbqUcN7gdc-JH4iXM0nRH1374g23CnABP7i8eP9CnGq6UNpAnJ4=w40)

## Color

![2 color roles of a linear progress indicator in light and dark themes: the active indicator and stop indicator are primary and the track is secondary container.](https://lh3.googleusercontent.com/CrzKce-9x2GrD2SOdyYCmDhdK37XcZoiMv9mT6N0NjUybL1GwXLN52_LbXb1AKfzmLUna1jMew5x0skKpMBEHrBJ82d-tJRr5DvoaUeR_J4=w40)

## Measurements

Wavy indicators use amplitude and wavelength to determine the shape of the wave. The height is the overall container height.

![Definitions of wave measurements for height and amplitude.](https://lh3.googleusercontent.com/Aii3LLGqfr5jLHSdMLKx4rMUceBixyyXu77IqvYcUoMGwV8MxqqZgcB0XU6nx7GpVeU7_sqdq6ScJE4eic6v4dP1Abaq4TtF3MSZNxB2HifI=w40)

![Linear progress indicator measurements.](https://lh3.googleusercontent.com/M-64WwKIqgmV6lWqTh7Ar7vJuUsvjqLTnOJcMLrFPbW4nxRmYITD4GbXXEGCjwK2eJLUBGlfD1rtb86saREi68enxN3Galq9ZUPa-pgFIm-QlA=w40)

![Circular progress indicator measurements.](https://lh3.googleusercontent.com/8oX70XRFeRqxFH1vBkx8z4hy6nKrvShQvQsQuR8emIWoXRKU8OWnK5pdFx-Q8ZwF0d4w8qDLi5NqPYAqxekWoHy9ytjz-lz7Leo9TFNlWU8s=w40)

![4dp padding on the left and right of the linear progress indicator.](https://lh3.googleusercontent.com/6_sdBcuvKe2j9XDUC70bzaxi8QsZW1507V6pQ9ZQstst3B_Y8w26_5Yuz504uIxL_GcrMfNhJFvNiQotKPPEPlRgCczoR5ys0e8wM7Lv6L19=w40)

The circular and linear progress indicator had separate token sets. These are no longer recommended.

### [Deprecated] Progress indicator - Circular

### [Deprecated] Progress indicator - Linear
