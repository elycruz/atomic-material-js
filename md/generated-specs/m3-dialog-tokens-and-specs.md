# M3 Dialog — Tokens & Specs

> Source: [m3.material.io/components/dialogs/specs](https://m3.material.io/components/dialogs/specs)

---

## Dialog — Basic

### Enabled / Container

| Description                               | Token                                               | Value         | Deprecated |
|-------------------------------------------|-----------------------------------------------------|---------------|------------|
| Dialog container color                    | `md.comp.dialog.container.color`                    | #ECE6F0       |            |
| Dialog container elevation                | `md.comp.dialog.container.elevation`                | *(reference)* |            |
| Dialog container surface tint layer color | `md.comp.dialog.container.surface-tint-layer.color` | #6750A4       | ⚠️ Yes     |
| Dialog container shape                    | `md.comp.dialog.container.shape`                    | *(reference)* |            |

### Enabled / Label text

| Description                          | Token                                          | Value         | Deprecated |
|--------------------------------------|------------------------------------------------|---------------|------------|
| Dialog action label text font        | `md.comp.dialog.action.label-text.font`        | Roboto        |            |
| Dialog action label text line height | `md.comp.dialog.action.label-text.line-height` | 20pt          |            |
| Dialog action label text size        | `md.comp.dialog.action.label-text.size`        | 14pt          |            |
| Dialog action label text weight      | `md.comp.dialog.action.label-text.weight`      | 500           |            |
| Dialog action label text tracking    | `md.comp.dialog.action.label-text.tracking`    | 0.1pt         |            |
| Label text type style                | `md.comp.dialog.action.label-text.type`        | *(reference)* |            |
| Dialog action label text color       | `md.comp.dialog.action.label-text.color`       | #6750A4       |            |

### Enabled / Icon

| Description       | Token                                 | Value   | Deprecated |
|-------------------|---------------------------------------|---------|------------|
| Dialog icon size  | `md.comp.dialog.with-icon.icon.size`  | 24dp    |            |
| Dialog icon color | `md.comp.dialog.with-icon.icon.color` | #625B71 |            |

### Enabled / Subhead

| Description                | Token                                | Value         | Deprecated |
|----------------------------|--------------------------------------|---------------|------------|
| Dialog subhead font        | `md.comp.dialog.subhead.font`        | Roboto        | ⚠️ Yes     |
| Dialog subhead line height | `md.comp.dialog.subhead.line-height` | 32pt          | ⚠️ Yes     |
| Dialog subhead size        | `md.comp.dialog.subhead.size`        | 24pt          | ⚠️ Yes     |
| Dialog subhead weight      | `md.comp.dialog.subhead.weight`      | 400           | ⚠️ Yes     |
| Dialog subhead tracking    | `md.comp.dialog.subhead.tracking`    | 0             | ⚠️ Yes     |
| Subhead type style         | `md.comp.dialog.subhead.type`        | *(reference)* | ⚠️ Yes     |
| Dialog subhead color       | `md.comp.dialog.subhead.color`       | #1D1B20       | ⚠️ Yes     |

### Enabled / Headline

| Description                 | Token                                 | Value         | Deprecated |
|-----------------------------|---------------------------------------|---------------|------------|
| Dialog headline font        | `md.comp.dialog.headline.font`        | Roboto        |            |
| Dialog headline line height | `md.comp.dialog.headline.line-height` | 32pt          |            |
| Dialog headline size        | `md.comp.dialog.headline.size`        | 24pt          |            |
| Dialog headline weight      | `md.comp.dialog.headline.weight`      | 400           |            |
| Dialog headline tracking    | `md.comp.dialog.headline.tracking`    | 0             |            |
| headline type style         | `md.comp.dialog.headline.type`        | *(reference)* |            |
| Dialog headline color       | `md.comp.dialog.headline.color`       | #1D1B20       |            |

### Enabled / Divider

| Description          | Token                                        | Value   | Deprecated |
|----------------------|----------------------------------------------|---------|------------|
| Dialog divider color | `md.comp.dialog.with-divider.divider.color`  | #79747E | ⚠️ Yes     |
| Dialog divider color | `md.comp.dialog.with-divider.divider.height` | 1dp     | ⚠️ Yes     |

### Enabled / Supporting text

| Description                        | Token                                        | Value         | Deprecated |
|------------------------------------|----------------------------------------------|---------------|------------|
| Dialog supporting text font        | `md.comp.dialog.supporting-text.font`        | Roboto        |            |
| Dialog supporting text line height | `md.comp.dialog.supporting-text.line-height` | 20pt          |            |
| Dialog supporting text size        | `md.comp.dialog.supporting-text.size`        | 14pt          |            |
| Dialog supporting text weight      | `md.comp.dialog.supporting-text.weight`      | 400           |            |
| Dialog supporting text tracking    | `md.comp.dialog.supporting-text.tracking`    | 0.25pt        |            |
| Supporting text type style         | `md.comp.dialog.supporting-text.type`        | *(reference)* |            |
| Dialog supporting text color       | `md.comp.dialog.supporting-text.color`       | #49454F       |            |

### Hovered / Label text

| Description                          | Token                                          | Value   | Deprecated |
|--------------------------------------|------------------------------------------------|---------|------------|
| Dialog action hover label text color | `md.comp.dialog.action.hover.label-text.color` | #6750A4 |            |

### Hovered / State layer

| Description                             | Token                                             | Value   | Deprecated |
|-----------------------------------------|---------------------------------------------------|---------|------------|
| Dialog action hover state layer color   | `md.comp.dialog.action.hover.state-layer.color`   | #6750A4 |            |
| Dialog action hover state layer opacity | `md.comp.dialog.action.hover.state-layer.opacity` | 0.08    |            |

### Focused / Label text

| Description                          | Token                                          | Value   | Deprecated |
|--------------------------------------|------------------------------------------------|---------|------------|
| Dialog action focus label text color | `md.comp.dialog.action.focus.label-text.color` | #6750A4 |            |

### Focused / State layer

| Description                             | Token                                             | Value   | Deprecated |
|-----------------------------------------|---------------------------------------------------|---------|------------|
| Dialog action focus state layer color   | `md.comp.dialog.action.focus.state-layer.color`   | #6750A4 |            |
| Dialog action focus state layer opacity | `md.comp.dialog.action.focus.state-layer.opacity` | 0.1     |            |

### Pressed (ripple) / Label text

| Description                            | Token                                            | Value   | Deprecated |
|----------------------------------------|--------------------------------------------------|---------|------------|
| Dialog action pressed label text color | `md.comp.dialog.action.pressed.label-text.color` | #6750A4 |            |

### Pressed (ripple) / State layer

| Description                               | Token                                               | Value   | Deprecated |
|-------------------------------------------|-----------------------------------------------------|---------|------------|
| Dialog action pressed state layer color   | `md.comp.dialog.action.pressed.state-layer.color`   | #6750A4 |            |
| Dialog action pressed state layer opacity | `md.comp.dialog.action.pressed.state-layer.opacity` | 0.1     |            |

## Dialog — Full Screen

### Enabled / Container

| Description                                                  | Token                                                                  | Value         | Deprecated |
|--------------------------------------------------------------|------------------------------------------------------------------------|---------------|------------|
| Full screen dialog on-scroll container color                 | `md.comp.full-screen-dialog.header.on-scroll.container.color`          | #F3EDF7       |            |
| Full screen dialog container color                           | `md.comp.full-screen-dialog.container.color`                           | #FEF7FF       |            |
| Full screen dialog container elevation                       | `md.comp.full-screen-dialog.container.elevation`                       | *(reference)* |            |
| Full screen dialog container shape                           | `md.comp.full-screen-dialog.container.shape`                           | *(reference)* |            |
| Full screen dialog header container height                   | `md.comp.full-screen-dialog.header.container.height`                   | 56dp          |            |
| Full screen dialog header container color                    | `md.comp.full-screen-dialog.header.container.color`                    | #FEF7FF       |            |
| Full screen dialog header container elevation                | `md.comp.full-screen-dialog.header.container.elevation`                | *(reference)* |            |
| Full screen dialog header container surface tint layer color | `md.comp.full-screen-dialog.header.container.surface-tint-layer.color` | #6750A4       | ⚠️ Yes     |
| Full screen dialog header on scroll container elevation      | `md.comp.full-screen-dialog.header.on-scroll.container.elevation`      | *(reference)* |            |
| Full screen dialog action bar container height               | `md.comp.full-screen-dialog.action-bar.container.height`               | 56dp          | ⚠️ Yes     |
| Full screen dialog action bar container color                | `md.comp.full-screen-dialog.action-bar.container.color`                | #FEF7FF       | ⚠️ Yes     |
| Full screen dialog action bar container elevation            | `md.comp.full-screen-dialog.action-bar.container.elevation`            | *(reference)* | ⚠️ Yes     |
| Full screen dialog action bar on scroll container elevation  | `md.comp.full-screen-dialog.action-bar.on-scroll.container.elevation`  | *(reference)* | ⚠️ Yes     |

### Enabled / Label text

| Description                                             | Token                                                             | Value         | Deprecated |
|---------------------------------------------------------|-------------------------------------------------------------------|---------------|------------|
| Full screen dialog header action label text font        | `md.comp.full-screen-dialog.header.action.label-text.font`        | Roboto        |            |
| Full screen dialog header action label text line height | `md.comp.full-screen-dialog.header.action.label-text.line-height` | 20pt          |            |
| Full screen dialog header action label text size        | `md.comp.full-screen-dialog.header.action.label-text.size`        | 14pt          |            |
| Full screen dialog header action label text weight      | `md.comp.full-screen-dialog.header.action.label-text.weight`      | 500           |            |
| Full screen dialog header action label text tracking    | `md.comp.full-screen-dialog.header.action.label-text.tracking`    | 0.1pt         |            |
| Full screen dialog header action label text type        | `md.comp.full-screen-dialog.header.action.label-text.type`        | *(reference)* |            |
| Full screen dialog header action label text color       | `md.comp.full-screen-dialog.header.action.label-text.color`       | #6750A4       |            |
| Full screen dialog action bar label text font           | `md.comp.full-screen-dialog.action-bar.label-text.font`           | Roboto        | ⚠️ Yes     |
| Full screen dialog action bar label text line height    | `md.comp.full-screen-dialog.action-bar.label-text.line-height`    | 20pt          | ⚠️ Yes     |
| Full screen dialog action bar label text size           | `md.comp.full-screen-dialog.action-bar.label-text.size`           | 14pt          | ⚠️ Yes     |
| Full screen dialog action bar label text weight         | `md.comp.full-screen-dialog.action-bar.label-text.weight`         | 500           | ⚠️ Yes     |
| Full screen dialog action bar label text tracking       | `md.comp.full-screen-dialog.action-bar.label-text.tracking`       | 0.1pt         | ⚠️ Yes     |
| Full screen dialog action bar label text type           | `md.comp.full-screen-dialog.action-bar.label-text.type`           | *(reference)* | ⚠️ Yes     |
| Full screen dialog action bar label text color          | `md.comp.full-screen-dialog.action-bar.label-text.color`          | #6750A4       | ⚠️ Yes     |

### Enabled / Icon

| Description                          | Token                                          | Value   | Deprecated |
|--------------------------------------|------------------------------------------------|---------|------------|
| Full screen dialog header icon color | `md.comp.full-screen-dialog.header.icon.color` | #1D1B20 |            |
| Full screen dialog header icon size  | `md.comp.full-screen-dialog.header.icon.size`  | 24dp    |            |

### Enabled / Headline

| Description                                    | Token                                                    | Value         | Deprecated |
|------------------------------------------------|----------------------------------------------------------|---------------|------------|
| Full screen dialog header headline color       | `md.comp.full-screen-dialog.header.headline.color`       | #1D1B20       |            |
| Full screen dialog header headline font        | `md.comp.full-screen-dialog.header.headline.font`        | Roboto        |            |
| Full screen dialog header headline line height | `md.comp.full-screen-dialog.header.headline.line-height` | 28pt          |            |
| Full screen dialog header headline size        | `md.comp.full-screen-dialog.header.headline.size`        | 22pt          |            |
| Full screen dialog header headline weight      | `md.comp.full-screen-dialog.header.headline.weight`      | 400           |            |
| Full screen dialog header headline tracking    | `md.comp.full-screen-dialog.header.headline.tracking`    | 0             |            |
| Header type style                              | `md.comp.full-screen-dialog.header.headline.type`        | *(reference)* |            |

### Enabled / Divider

| Description                       | Token                                                    | Value   | Deprecated |
|-----------------------------------|----------------------------------------------------------|---------|------------|
| Full screen dialog divider color  | `md.comp.full-screen-dialog.with-divider.divider.color`  | #E7E0EC | ⚠️ Yes     |
| Full screen dialog divider height | `md.comp.full-screen-dialog.with-divider.divider.height` | 1dp     | ⚠️ Yes     |

### Hovered / Label text

| Description                                             | Token                                                             | Value   | Deprecated |
|---------------------------------------------------------|-------------------------------------------------------------------|---------|------------|
| Full screen dialog header action hover label text color | `md.comp.full-screen-dialog.header.action.hover.label-text.color` | #6750A4 |            |
| Full screen dialog action bar hover label text color    | `md.comp.full-screen-dialog.action-bar.hover.label-text.color`    | #6750A4 | ⚠️ Yes     |

### Hovered / State layer

| Description                                                | Token                                                                | Value   | Deprecated |
|------------------------------------------------------------|----------------------------------------------------------------------|---------|------------|
| Full screen dialog header action hover state layer color   | `md.comp.full-screen-dialog.header.action.hover.state-layer.color`   | #6750A4 |            |
| Full screen dialog header action hover state layer opacity | `md.comp.full-screen-dialog.header.action.hover.state-layer.opacity` | 0.08    |            |
| Full screen dialog action bar hover state layer color      | `md.comp.full-screen-dialog.action-bar.hover.state-layer.color`      | #6750A4 | ⚠️ Yes     |
| Full screen dialog action bar hover state layer opacity    | `md.comp.full-screen-dialog.action-bar.hover.state-layer.opacity`    | 0.08    | ⚠️ Yes     |

### Focused / Label text

| Description                                             | Token                                                             | Value   | Deprecated |
|---------------------------------------------------------|-------------------------------------------------------------------|---------|------------|
| Full screen dialog header action focus label text color | `md.comp.full-screen-dialog.header.action.focus.label-text.color` | #6750A4 |            |
| Full screen dialog action bar focus label text color    | `md.comp.full-screen-dialog.action-bar.focus.label-text.color`    | #6750A4 | ⚠️ Yes     |

### Focused / State layer

| Description                                                | Token                                                                | Value   | Deprecated |
|------------------------------------------------------------|----------------------------------------------------------------------|---------|------------|
| Full screen dialog header action focus state layer color   | `md.comp.full-screen-dialog.header.action.focus.state-layer.color`   | #6750A4 |            |
| Full screen dialog header action focus state layer opacity | `md.comp.full-screen-dialog.header.action.focus.state-layer.opacity` | 0.1     |            |
| Full screen dialog action bar focus state layer color      | `md.comp.full-screen-dialog.action-bar.focus.state-layer.color`      | #6750A4 | ⚠️ Yes     |
| Full screen dialog action bar focus state layer opacity    | `md.comp.full-screen-dialog.action-bar.focus.state-layer.opacity`    | 0.1     | ⚠️ Yes     |

### Pressed (ripple) / Label text

| Description                                               | Token                                                               | Value   | Deprecated |
|-----------------------------------------------------------|---------------------------------------------------------------------|---------|------------|
| Full screen dialog header action pressed label text color | `md.comp.full-screen-dialog.header.action.pressed.label-text.color` | #6750A4 |            |
| Full screen dialog action bar pressed label text color    | `md.comp.full-screen-dialog.action-bar.pressed.label-text.color`    | #6750A4 | ⚠️ Yes     |

### Pressed (ripple) / State layer

| Description                                                  | Token                                                                  | Value   | Deprecated |
|--------------------------------------------------------------|------------------------------------------------------------------------|---------|------------|
| Full screen dialog header action pressed state layer color   | `md.comp.full-screen-dialog.header.action.pressed.state-layer.color`   | #6750A4 |            |
| Full screen dialog header action pressed state layer opacity | `md.comp.full-screen-dialog.header.action.pressed.state-layer.opacity` | 0.1     |            |
| Full screen dialog action bar pressed state layer color      | `md.comp.full-screen-dialog.action-bar.pressed.state-layer.color`      | #6750A4 | ⚠️ Yes     |
| Full screen dialog action bar pressed state layer opacity    | `md.comp.full-screen-dialog.action-bar.pressed.state-layer.opacity`    | 0.1     | ⚠️ Yes     |

---

## Specs

### Basic dialogs

**Anatomy:**

- Container
- Icon (optional)
- Headline (optional)
- Supporting text
- Divider (optional)
- Button label text
- Scrim

### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens

### Basic dialog color roles used for light and dark themes:

- Surface container high
- Secondary
- On surface
- On surface variant
- Primary
- Scrim

### Basic dialog measurements

### Basic dialog padding and size measurements

| Attribute                        | Value                |
|----------------------------------|----------------------|
| Container shape                  | 28dp corner radius   |
| Container height                 | Dynamic              |
| Container width                  | Min 280dp; Max 560dp |
| Divider height                   | 1dp                  |
| Icon size                        | 24dp                 |
| Minimum width                    | 280dp                |
| Maximum width                    | 560dp                |
| Alignment with icon              | Center-aligned       |
| Alignment without icon           | Start-aligned        |
| Top/Left/right/bottom padding    | 24dp                 |
| Padding between buttons          | 8dp                  |
| Padding between title and body   | 16dp                 |
| Padding between icon and title   | 16dp                 |
| Padding between body and actions | 24dp                 |

### Full-screen dialogs

**Anatomy:**

- Container
- Header
- Icon (close affordance)
- Headline (optional)
- Text button
- Divider (optional)

### Full-screen dialog color

- Surface container high
- On surface
- On surface
- Primary
- On surface variant

### Full-screen dialog measurements

### Full-screen dialog padding and size measurements

| Attribute                    | Value                      |
|------------------------------|----------------------------|
| Container shape              | 0dp corner radius          |
| Container height             | Dynamic                    |
| Container width              | Container width; Max 560dp |
| Header height                | 56dp                       |
| Header width                 | Container width            |
| Headline text alignment      | Start-aligned              |
| Divider height               | 1dp                        |
| Icon (close affordance) size | 24dp                       |
| Bottom action bar height     | 56dp                       |
| Bottom action bar width      | Container width            |
| Top/left/right padding       | 24dp                       |
| Padding between elements     | 8dp                        |

---

*Extracted from the Material Design 3 website on 2026-03-15.*
