# Sliders: Specs

## Variants

![3 variants of sliders.](https://lh3.googleusercontent.com/-UgZpnEJ6uET5STSdzpCWEydsoa9cfqtNAbzpuKX9-4jQ3d8IdU0EjRtpfgizjIX8I7XM-ETfXPEnfKi7XNZSQWJTTyKrLHjS95bsb6ZQc7smQ=w40)

| Variant | M3 | M3 Expressive |
|---|---| --- |
| Standard | Available as "continuous" slider | Available |
| Centered | Available (web only) | Available |
| Range | Available | Available |
| Discrete | Available | Available as "stops" configuration |

## Configurations

![Orientation and size configurations of sliders.](https://lh3.googleusercontent.com/PUKZpvA88_wvpKTUHRmGx0XIOjDEUAFWbO14A9AMUDyX-mu0w9qTo7ywQTKCcm8ERhdQHoohHwHt3Z-Tqo29eVw4_KyVf3pn-Z-UIcsszrYc=w40)

![Optional anatomy configurations of sliders.](https://lh3.googleusercontent.com/QFc1hXc78XHCuqhH4no1fQLDRvSzLaW1K8El5jIW1v3K3sNXjMquxEGcaq22u48Mq5kCqGRoPSCD7m8H37sAwyP_XyI6xY4AJp2GGW3e7-hs=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Inset icon | No (default) | Available | Available |
| Yes | -- | Available |
| Orientation | Horizontal (default) | Available | Available |
| Vertical | -- | Available |
| Size | XS (default) | Available | Available |
| S, M, L, XL | -- | Available on MDC-Android.Available as tokens on other platforms.* |
| Stop indicators | No (default), Yes | Available as "discrete" slider | Available |
| Value Indicator | No (default), Yes | Available | Available |

link Copy link Link copied *Configurations only available using tokens don't have implemented presets in code. To change the size, swap the default size tokens md.comp.slider. xsmall .[...] with those of the desired size.

## Tokens & specs

### Slider

#### Enabled / Stop indicator

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider stop indicator size | md.comp.slider.stop-indicator.size | 4dp |
| Slider stop indicator shape | md.comp.slider.stop-indicator.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider stop indicator trailing space | md.comp.slider.stop-indicator.trailing-space | 4dp |
| Slider stop indicator color | md.comp.slider.stop-indicator.color | #4A4458 |
| Slider stop indicator color selected | md.comp.slider.stop-indicator.color-selected | #FFFFFF |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider active stop indicator container color | md.comp.slider.active.stop-indicator.container.color | #FFFFFF |
| Slider active stop indicator container opacity | md.comp.slider.active.stop-indicator.container.opacity | 1 |
| Slider inactive stop indicator container color | md.comp.slider.inactive.stop-indicator.container.color | #4A4458 |
| Slider inactive stop indicator container opacity | md.comp.slider.inactive.stop-indicator.container.opacity | 1 |

#### Enabled / Track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider active track height | md.comp.slider.active.track.height | 16dp |
| Slider inactive track height | md.comp.slider.inactive.track.height | 16dp |
| Slider active track shape | md.comp.slider.active.track.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider active track outer corner size | md.comp.slider.active.track.outer-corner.corner-size | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider active track inner corner size | md.comp.slider.active.track.inner-corner.corner-size | Shape: (rounded_corner, Rounded 2dp 2dp) |
| Slider inactive track shape | md.comp.slider.inactive.track.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider active track color | md.comp.slider.active.track.color | #6750A4 |
| Slider inactive track color | md.comp.slider.inactive.track.color | #E8DEF8 |

#### Enabled / Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider handle height | md.comp.slider.handle.height | 44dp |
| Slider handle width | md.comp.slider.handle.width | 4dp |
| Slider handle shape | md.comp.slider.handle.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider handle color | md.comp.slider.handle.color | #6750A4 |
| Slider active handle color | md.comp.slider.slider-active-handle-color | #6750A4 |
| Slider active handle height | md.comp.slider.active.handle.height | 44dp |
| Slider active handle width | md.comp.slider.active.handle.width | 4dp |
| Slider active handle shape | md.comp.slider.active.handle.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Slider active handle leading space | md.comp.slider.active.handle.leading-space | 6dp |
| Slider active handle trailing space | md.comp.slider.active.handle.trailing-space | 6dp |
| Slider active handle padding | md.comp.slider.active.handle.padding | 6dp |

#### Disabled / Stop

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider disabled active stop indicator container color | md.comp.slider.disabled.active.stop-indicator.container.color | #F5EFF7 |
| Slider disabled inactive stop indicator container color | md.comp.slider.disabled.inactive.stop-indicator.container.color | #1D1B20 |

#### Disabled / Track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider disabled active track color | md.comp.slider.disabled.active.track.color | #1D1B20 |
| Slider disabled active track opacity | md.comp.slider.disabled.active.track.opacity | 0.38 |
| Slider disabled inactive track color | md.comp.slider.disabled.inactive.track.color | #1D1B20 |
| Slider disabled inactive track opacity | md.comp.slider.disabled.inactive.track.opacity | 0.12 |

#### Disabled / Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider disabled handle color | md.comp.slider.disabled.handle.color | #1D1B20 |
| Slider disabled handle opacity | md.comp.slider.disabled.handle.opacity | 0.38 |
| Slider disabled handle width | md.comp.slider.disabled.handle.width | 4dp |

#### Hovered / Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider hover handle width | md.comp.slider.hover.handle.width | 4dp |

#### Focused / Track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider focus active track color | md.comp.slider.focus.active.track.color | #6750A4 |
| Slider focus inactive track color | md.comp.slider.focus.inactive.track.color | #E8DEF8 |

#### Focused / Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider focus handle width | md.comp.slider.focus.handle.width | 2dp |

#### Pressed (ripple) / Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider pressed handle color | md.comp.slider.pressed.handle.color | #6750A4 |
| Slider pressed handle width | md.comp.slider.pressed.handle.width | 2dp |

#### Pressed (ripple) / Track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider pressed active track color | md.comp.slider.pressed.active.track.color | #6750A4 |
| Slider pressed inactive track color | md.comp.slider.pressed.inactive.track.color | #E8DEF8 |

#### Pressed (ripple) / Value indicator

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider value indicator container color | md.comp.slider.value-indicator.container.color | #322F35 |
| Slider value indicator label font | md.comp.slider.value-indicator.label.label-text.font | Slider value indicator label font md.comp.slider.value-indicator.label.label-text.font Roboto md.sys.typescale.label-large.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| Slider value indicator label font color | md.comp.slider.value-indicator.label.label-text.color | #F5EFF7 |
| Slider value indicator label line height | md.comp.slider.value-indicator.label.label-text.line-height | 20pt |
| Slider value indicator label size | md.comp.slider.value-indicator.label.label-text.size | 14pt |
| Slider value indicator label tracking | md.comp.slider.value-indicator.label.label-text.tracking | 0.5pt |
| Slider value indicator label weight | md.comp.slider.value-indicator.label.label-text.weight | 400 |
| Slider value indicator active bottom space | md.comp.slider.value-indicator.active.bottom-space | 12dp |

### Slider - Size - Xsmall

#### Active track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xsmall active track height | md.comp.slider.xsmall.active.track.height | 16dp |
| Slider xsmall active track leading shape | md.comp.slider.xsmall.active.track.shape.leading | 8dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xsmall inactive track height | md.comp.slider.xsmall.inactive.track.height | 16dp |
| Slider xsmall inactive track trailing shape | md.comp.slider.xsmall.inactive.track.shape.trailing | 8dp |

#### Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xsmall active handle height | md.comp.slider.xsmall.active.handle.height | 44dp |

### Slider - Size - Small

#### Active track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider small active track height | md.comp.slider.small.active.track.height | 24dp |
| Slider small active track leading shape | md.comp.slider.small.active.track.shape.leading | 8dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider small inactive track height | md.comp.slider.small.inactive.track.height | 24dp |
| Slider small inactive track trailing shape | md.comp.slider.small.inactive.track.shape.trailing | 8dp |

#### Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider small active handle height | md.comp.slider.small.active.handle.height | 44dp |

### Slider - Size - Medium

#### Active track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider medium active track height | md.comp.slider.medium.active.track.height | 40dp |
| Slider medium active track leading shape | md.comp.slider.medium.active.track.shape.leading | 12dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider medium inactive track height | md.comp.slider.medium.inactive.track.height | 40dp |
| Slider medium inactive track trailing shape | md.comp.slider.medium.inactive.track.shape.trailing | 12dp |

#### Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider medium active handle height | md.comp.slider.medium.active.handle.height | 44dp |

#### Icon

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider medium icon padding | md.comp.slider.medium.icon.padding | 6dp |
| Slider medium icon size | md.comp.slider.medium.icon.size | 24dp |

### Slider - Size - Large

#### Active track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider large active track height | md.comp.slider.large.active.track.height | 56dp |
| Slider large active track leading shape | md.comp.slider.large.active.track.shape.leading | 16dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider large inactive track trailing shape | md.comp.slider.large.inactive.track.height | 56dp |
| Slider large inactive track trailing shape | md.comp.slider.large.inactive.track.shape.trailing | 16dp |

#### Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider large active handle height | md.comp.slider.large.active.handle.height | 68dp |

#### Icon

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider large icon padding | md.comp.slider.large.icon.padding | 6dp |
| Slider large icon size | md.comp.slider.large.icon.size | 24dp |

### Slider - Size - Xlarge

#### Active track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xlarge active track height | md.comp.slider.xlarge.active.track.height | 96dp |
| Slider xlarge active track leading shape | md.comp.slider.xlarge.active.track.shape.leading | 28dp |

#### Inactive track

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xlarge inactive track height | md.comp.slider.xlarge.inactive.track.height | 96dp |
| Slider xlarge inactive track trailing shape | md.comp.slider.xlarge.inactive.track.shape.trailing | 28dp |

#### Handle

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xlarge active handle height | md.comp.slider.xlarge.active.handle.height | 108dp |

#### Icon

| Token | Reference | Value |
|-------|-----------| ------- |
| Slider xlarge icon padding | md.comp.slider.xlarge.icon.padding | 8dp |
| Slider xlarge icon size | md.comp.slider.xlarge.icon.size | 32dp |

## Anatomy

![6 elements of a slider.](https://lh3.googleusercontent.com/Tj-xqiQbRv2zhsiRQmk6ZkdhFwQgK6qEZx40m4TMy8W7B8ulEiPsHemm1KcY6ejMeYjYFnJF2GHGnWzVq-v8yDHTRon1k-oZGg9VuIa2C4Q=w40)

## Color

![9 color roles of a slider.](https://lh3.googleusercontent.com/CV3PfOlQdK3A_3O8RLyu_r-GjqW7NK-qgzQmKuo5M5tWBmI6eDGdNfq7p8bTvQbP1jYCpk8WaRktgSsCrKD9Lp1vbaeCtE2einRTw6e1J7dbGA=w40)

## States

![5 states of sliders in light and dark schemes.](https://lh3.googleusercontent.com/PgYCQrkBSJUOlzQMXu0BmIe16Fho4X9NdvdYYSOtE1tIl0aucZejoImkNIfdTpbPity3lWJxxg2WSoilrjogEOWTcVhxyGN0aYZl0sRWQuMpJA=w40)

## Measurements

![Common slider padding and size measurements.](https://lh3.googleusercontent.com/WLMws1Xen6XFUKvbCJS2NM4jwTMVmQxFlh8QhTslZGI-TR2eoFPXUp-ck8i0FhO_U2cy0cW5qnNP6Qkrsu1kJ-eztl1sJ_o5lHzXSUtr4FAMPw=w40)

![Slider padding and size measurements at each size configuration, XS to XL.](https://lh3.googleusercontent.com/FH3TsHZ1NpVLh--XKKb2ygB9rd0bgZ6ig1vGxWhQu5HOFVbk_8CXIxMAVdJnPxKj3fojh8jFh6qDqm41tD0R3YRaK0luWcktoURO5RZfBsuO=w40)

| Attribute | XS | S | M | L | XL |
|---|---|---|---|---| --- |
| Track height | 16dp | 24dp | 40dp | 56dp | 96dp |
| Label container height | 44dp | | Label container width | 48dp | | Handle height | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width | 4dp | | Track shape | 8dp | 8dp | 12dp | 16dp | 28dp |
| Inset icon size | -- | -- | 24dp | 24dp | 32dp |
