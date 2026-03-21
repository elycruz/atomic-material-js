# ez-button-surface

A three-part surface element for buttons that allows the center section to scale
via `transform: scaleX(...)` while preserving the border-radius on the head and
tail end-caps.

## Usage

```html
<button class="ez-btn ez-filled ez-theme-primary _ez-with-button-surface">
  <ez-ripple></ez-ripple>
  <ez-button-surface></ez-button-surface>
  <span>Primary</span>
</button>
```

## CSS Parts

| Part     | Description                              |
|----------|------------------------------------------|
| `head`   | Leading end-cap preserving border-radius |
| `center` | Center section that can be scaled        |
| `tail`   | Trailing end-cap preserving border-radius|

## CSS Custom Properties

| Property                     | Default  | Description                    |
|------------------------------|----------|--------------------------------|
| `--ez-button-surface-end-size`  | `1.5rem` | Width of head/tail end-caps    |
