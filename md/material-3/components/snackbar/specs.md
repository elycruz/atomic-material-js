# Snackbar: Specs

## Anatomy

- Container
- Message text
- Action button (optional)
- Close icon (optional)

## Color

Snackbar uses:
- Inverse surface background
- Inverse on surface text
- Primary action button color

## Measurements

| Attribute | Value |
|-----------|-------|
| Height | 48dp |
| Min width | 344dp |
| Max width | 672dp |
| Padding (horizontal) | 16dp |
| Padding (vertical) | 12dp |
| Margin (bottom) | 16dp |
| Corner radius | 4dp |

## States

- Default
- With action button
- With close button

## Tokens & Specs

### Snackbars

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar container color | md.comp.snackbar.container.color | #322F35 |
| Snackbar container shadow color | md.comp.snackbar.container.shadow-color | #000000 |
| Snackbar container elevation | md.comp.snackbar.container.elevation | Elevation: level5 (5dp) |
| Snackbar container shape | md.comp.snackbar.container.shape | Shape: corner.extra.small (Extra small, Rounded) |
| Snackbar container with single line height | md.comp.snackbar.with-single-line.container.height | 48dp |
| Snackbar container with two lines height | md.comp.snackbar.with-two-lines.container.height | 68dp |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar label text | md.comp.snackbar.action.label-text.type | Font: Roboto 500 14pt/20pt tracking 0.1pt |
| Snackbar label text color | md.comp.snackbar.action.label-text.color | #D0BCFF |
| Snackbar label text font | md.comp.snackbar.action.label-text.font | Roboto |
| Snackbar label text line height | md.comp.snackbar.action.label-text.line-height | 20pt |
| Snackbar label text size | md.comp.snackbar.action.label-text.size | 14pt |
| Snackbar label text tracking | md.comp.snackbar.action.label-text.tracking | 0.1pt |
| Snackbar label text weight | md.comp.snackbar.action.label-text.weight | 500 |

#### Enabled / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar icon color | md.comp.snackbar.icon.color | #F5EFF7 |
| Snackbar icon size | md.comp.snackbar.icon.size | 24dp |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar supporting text | md.comp.snackbar.supporting-text.type | Font: Roboto 400 14pt/20pt tracking 0.25pt |
| Snackbar supporting text color | md.comp.snackbar.supporting-text.color | #F5EFF7 |
| Snackbar supporting text font | md.comp.snackbar.supporting-text.font | Roboto |
| Snackbar supporting text line height | md.comp.snackbar.supporting-text.line-height | 20pt |
| Snackbar supporting text size | md.comp.snackbar.supporting-text.size | 14pt |
| Snackbar supporting text tracking | md.comp.snackbar.supporting-text.tracking | 0.25pt |
| Snackbar supporting text weight | md.comp.snackbar.supporting-text.weight | 400 |

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar hover label text color | md.comp.snackbar.action.hover.label-text.color | #D0BCFF |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar hover state layer color | md.comp.snackbar.action.hover.state-layer.color | #D0BCFF |
| Snackbar hover state layer opacity | md.comp.snackbar.action.hover.state-layer.opacity | 0.08 |
| Snackbar icon hover state layer color | md.comp.snackbar.icon.hover.state-layer.color | #F5EFF7 |
| Snackbar icon hover state layer opacity | md.comp.snackbar.icon.hover.state-layer.opacity | 0.08 |

#### Hovered / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar icon hover icon color | md.comp.snackbar.icon.hover.icon.color | #F5EFF7 |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar focus label text color | md.comp.snackbar.action.focus.label-text.color | #D0BCFF |

#### Focused / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar focus state layer color | md.comp.snackbar.action.focus.state-layer.color | #D0BCFF |
| Snackbar focus state layer opacity | md.comp.snackbar.action.focus.state-layer.opacity | 0.1 |
| Snackbar icon focus state layer color | md.comp.snackbar.icon.focus.state-layer.color | #F5EFF7 |
| Snackbar icon focus state layer opacity | md.comp.snackbar.icon.focus.state-layer.opacity | 0.1 |

#### Focused / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar icon focus icon color | md.comp.snackbar.icon.focus.icon.color | #F5EFF7 |

#### Pressed (ripple) / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar pressed label text color | md.comp.snackbar.action.pressed.label-text.color | #D0BCFF |

#### Pressed (ripple) / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar pressed state layer color | md.comp.snackbar.action.pressed.state-layer.color | #D0BCFF |
| Snackbar pressed state layer opacity | md.comp.snackbar.action.pressed.state-layer.opacity | 0.1 |
| Snackbar icon pressed state layer color | md.comp.snackbar.icon.pressed.state-layer.color | #F5EFF7 |
| Snackbar icon pressed state layer opacity | md.comp.snackbar.icon.pressed.state-layer.opacity | 0.1 |

#### Pressed (ripple) / Icon

| Token | Reference | Value |
|-------|-----------|-------|
| Snackbar icon pressed icon color | md.comp.snackbar.icon.pressed.icon.color | #F5EFF7 |
