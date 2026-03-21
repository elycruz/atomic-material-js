# ez-surface

An expressive, animatable surface container with MD3 elevation support.

## Usage

```html
<!-- Basic elevated surface -->
<ez-surface elevation="2">
  <p>Content goes here</p>
</ez-surface>

<!-- Hover elevation change -->
<ez-surface elevation="1" hover-elevation="3">
  <p>Lifts on hover</p>
</ez-surface>

<!-- Animated entrance -->
<ez-surface elevation="2" animate="fade-in" animate-on="enter">
  <p>Fades in on mount</p>
</ez-surface>

<!-- Continuous animation -->
<ez-surface elevation="1" animate="pulse" animate-on="hover">
  <p>Pulses on hover</p>
</ez-surface>
```

## Attributes

| Attribute | Type | Default | Description |
|---|---|---|---|
| `elevation` | `0-5` | `0` | MD3 elevation level (box-shadow) |
| `hover-elevation` | `0-5` | — | Elevation when hovered |
| `animate` | `string` | — | Animation preset name |
| `animate-on` | `string` | — | Trigger: `enter`, `hover`, `press`, `visible` |
| `animate-speed` | `string` | — | MD3 duration token name |

## Animation Presets

- `fade-in`, `fade-out`
- `scale-up`, `scale-down`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`
- `pulse`, `float`, `breathe`
