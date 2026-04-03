# Text fields: Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

## Filled text field

### Anatomy

![Diagram of a filled text field indicating the 10 parts of its anatomy.](https://lh3.googleusercontent.com/X9POJ7yw_vGiALE8gBKfttJ_56zdy0ncjv5fYNyJVl1Y8SzDDbDA2VCVqWZDA0BYUzjgjn3o1jfQ__)

Components:
- Container
- Leading icon (optional)
- Label text in empty field
- Label text in populated field
- Trailing icon (optional)
- Focused active Indicator
- Caret
- Input text
- Supporting text (optional)
- Enabled active indicator

### Filled text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![Diagram of a filled text field indicating its color mappings.](https://lh3.googleusercontent.com/3QvK6g9HSsTheSVwbJnhS3xny_okcH05M7S-VzIzT8Y2 0T1azDNw3ab6oTjCFDJDqfz8rgA9If_Ra96-wTC9GoAVkjS1XvSfbPyAgiT3LHQcdw=w40)

Filled text field color roles used for light and dark schemes:
- Surface container highest
- On surface variant
- On surface variant
- Primary
- On surface variant
- Primary
- Primary
- On surface
- On surface variant
- On surface

### Filled text field states

States are visual representations used to communicate the status of a component or interactive element.

![Side by side view of empty and populated filled text fields across different states.](https://lh3.googleusercontent.com/oKmfNMCJ_ViUQMDGqTLkxCQj9pqlu69kIuzt96fo0YC7mb_vceZF4LQUwYQViUk_oDf38-KSOFZVsM8Car1RCvjy6JPXVv92WCZIJzbEwNuJ_g=w40)

States:
- Enabled (empty)
- Focused (empty)
- Hovered (empty)
- Disabled (empty)
- Enabled (populated)
- Focused (populated)
- Hovered (populated)
- Disabled (populated)

### Filled text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

States:
- Enabled (empty)
- Focused (empty)
- Hovered (empty)
- Enabled (populated)
- Focused (populated)
- Hovered (populated)

### Filled text field measurements

#### Measurements without icon

#### Measurements with icon

#### Measurements with supporting text and character count

| Attribute | Value |
|-----------|-------|
| Default container height | 56dp |
| Label alignment (unpopulated) | Vertically centered |
| Top/bottom padding | 8dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Icon alignment | Vertically centered |
| Padding between icons and text | 16dp |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Target size | 56dp |

### Filled text field configurations

Configurations include:
- Empty and populated filled text fields with:
  - Supporting text
  - Trailing icon
  - Leading icon
  - Leading and trailing icons
  - Prefix
  - Suffix
  - Multi-line text field

## Outlined text field

### Anatomy

Components:
- Enabled container outline
- Leading icon (optional)
- Label text in empty field
- Label text in populated field
- Trailing icon (optional)
- Focused container outline
- Caret
- Input text
- Supporting text (optional)

### Outlined text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Outlined text field color roles used for light and dark schemes:
- Outline
- On surface variant
- On surface variant
- Primary
- On surface variant
- Primary
- Primary
- On surface
- On surface variant

### Outlined text field states

States are visual representations used to communicate the status of a component or interactive element.

States:
- Enabled (empty)
- Focused (empty)
- Hovered (empty)
- Disabled (empty)
- Enabled (populated)
- Focused (populated)
- Hovered (populated)
- Disabled (populated)

### Outlined text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

States:
- Enabled (empty)
- Focused (empty)
- Hovered (empty)
- Enabled (populated)
- Focused (populated)
- Hovered (populated)

### Outlined text field measurements

| Attribute | Value |
|-----------|-------|
| Container height | 56dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Padding between icons and text | 16dp |
| Icon alignment | Vertically centered |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Label alignment | Vertically centered |
| Left/right padding populated label text | 4dp |
| Target size | 56dp |

### Outlined text field configurations

Configurations include:
- Empty and populated outlined text fields with:
  - Supporting text
  - Trailing icon
  - Leading icon
  - Leading and trailing icons
  - Prefix
  - Suffix
  - Multi-line text field

## Token Tables

### Text field - Filled

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field container color | md.comp.filled-text-field.container.color | #E6E0E9 |
| Filled text field container height | md.comp.filled-text-field.container.height | 56dp |
| Filled text field container shape | md.comp.filled-text-field.container.shape | Shape: corner.extra.small (Extra small, Rounded) |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field label text color | md.comp.filled-text-field.label-text.color | #49454F |
| Filled text field label text font | md.comp.filled-text-field.label-text.font | Roboto |
| Filled text field label text line height | md.comp.filled-text-field.label-text.line-height | 24pt |
| Filled text field label text size | md.comp.filled-text-field.label-text.size | 16pt |
| Filled text field label text weight | md.comp.filled-text-field.label-text.weight | 400 |
| Filled text field label text tracking | md.comp.filled-text-field.label-text.tracking | 0.5pt |
| Filled text field label text type | md.comp.filled-text-field.label-text.type | Font: Roboto 400 16pt/24pt tracking 0.5pt |
| Filled text field label text populated line height | md.comp.filled-text-field.label-text.populated.line-height | 16pt |
| Filled text field label text populated size | md.comp.filled-text-field.label-text.populated.size | 12pt |

#### Enabled / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field leading icon color | md.comp.filled-text-field.leading-icon.color | #49454F |
| Filled text field leading icon size | md.comp.filled-text-field.leading-icon.size | 24dp |

#### Enabled / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field trailing icon color | md.comp.filled-text-field.trailing-icon.color | #49454F |
| Filled text field trailing icon size | md.comp.filled-text-field.trailing-icon.size | 24dp |

#### Enabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field active indicator height | md.comp.filled-text-field.active-indicator.height | 1dp |
| Filled text field active indicator color | md.comp.filled-text-field.active-indicator.color | #49454F |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field supporting text type | md.comp.filled-text-field.supporting-text.type | Font: Roboto 400 12pt/16pt tracking 0.4pt |
| Filled text field supporting text color | md.comp.filled-text-field.supporting-text.color | #49454F |
| Filled text field supporting text font | md.comp.filled-text-field.supporting-text.font | Roboto |
| Filled text field supporting text line height | md.comp.filled-text-field.supporting-text.line-height | 16pt |
| Filled text field supporting text size | md.comp.filled-text-field.supporting-text.size | 12pt |
| Filled text field supporting text weight | md.comp.filled-text-field.supporting-text.weight | 400 |
| Filled text field supporting text tracking | md.comp.filled-text-field.supporting-text.tracking | 0.4pt |

#### Enabled / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field input text color | md.comp.filled-text-field.input-text.color | #1D1B20 |
| Filled text field input text font | md.comp.filled-text-field.input-text.font | Roboto |
| Filled text field input text line height | md.comp.filled-text-field.input-text.line-height | 24pt |
| Filled text field input text size | md.comp.filled-text-field.input-text.size | 16pt |
| Filled text field input text weight | md.comp.filled-text-field.input-text.weight | 400 |
| Filled text field input text tracking | md.comp.filled-text-field.input-text.tracking | 0.5pt |
| Filled text field input text type | md.comp.filled-text-field.input-text.type | Font: Roboto 400 16pt/24pt tracking 0.5pt |
| Filled text field input text prefix color | md.comp.filled-text-field.input-text.prefix.color | #49454F |
| Filled text field input text suffix color | md.comp.filled-text-field.input-text.suffix.color | #49454F |
| Filled text field input text placeholder color | md.comp.filled-text-field.input-text.placeholder.color | #49454F |

#### Enabled / Caret

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field caret color | md.comp.filled-text-field.caret.color | #6750A4 |

#### Disabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled container color | md.comp.filled-text-field.disabled.container.color | #1D1B20 |
| Filled text field disabled container opacity | md.comp.filled-text-field.disabled.container.opacity | 0.04 |

#### Disabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled label text color | md.comp.filled-text-field.disabled.label-text.color | #1D1B20 |
| Filled text field disabled label text opacity | md.comp.filled-text-field.disabled.label-text.opacity | 0.38 |

#### Disabled / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled leading icon color | md.comp.filled-text-field.disabled.leading-icon.color | #1D1B20 |
| Filled text field disabled leading icon opacity | md.comp.filled-text-field.disabled.leading-icon.opacity | 0.38 |

#### Disabled / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled trailing icon color | md.comp.filled-text-field.disabled.trailing-icon.color | #1D1B20 |
| Filled text field disabled trailing icon opacity | md.comp.filled-text-field.disabled.trailing-icon.opacity | 0.38 |

#### Disabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled supporting text color | md.comp.filled-text-field.disabled.supporting-text.color | #1D1B20 |
| Filled text field disabled supporting text opacity | md.comp.filled-text-field.disabled.supporting-text.opacity | 0.38 |

#### Disabled / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled input text color | md.comp.filled-text-field.disabled.input-text.color | #1D1B20 |
| Filled text field disabled input text opacity | md.comp.filled-text-field.disabled.input-text.opacity | 0.38 |

#### Disabled / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field disabled active indicator height | md.comp.filled-text-field.disabled.active-indicator.height | 1dp |
| Filled text field disabled active indicator color | md.comp.filled-text-field.disabled.active-indicator.color | #1D1B20 |
| Filled text field disabled active indicator opacity | md.comp.filled-text-field.disabled.active-indicator.opacity | 0.38 |

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover label text color | md.comp.filled-text-field.hover.label-text.color | #49454F |

#### Hovered / State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover state layer color | md.comp.filled-text-field.hover.state-layer.color | #1D1B20 |
| Filled text field hover state layer opacity | md.comp.filled-text-field.hover.state-layer.opacity | 0.08 |

#### Hovered / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover leading icon color | md.comp.filled-text-field.hover.leading-icon.color | #49454F |

#### Hovered / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover trailing icon color | md.comp.filled-text-field.hover.trailing-icon.color | #49454F |

#### Hovered / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover input text color | md.comp.filled-text-field.hover.input-text.color | #1D1B20 |

#### Hovered / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover supporting text color | md.comp.filled-text-field.hover.supporting-text.color | #49454F |

#### Hovered / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field hover active indicator height | md.comp.filled-text-field.hover.active-indicator.height | 1dp |
| Filled text field hover active indicator color | md.comp.filled-text-field.hover.active-indicator.color | #1D1B20 |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus label text color | md.comp.filled-text-field.focus.label-text.color | #6750A4 |

#### Focused / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus leading icon color | md.comp.filled-text-field.focus.leading-icon.color | #49454F |

#### Focused / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus trailing icon color | md.comp.filled-text-field.focus.trailing-icon.color | #49454F |

#### Focused / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus input text color | md.comp.filled-text-field.focus.input-text.color | #1D1B20 |

#### Focused / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus supporting text color | md.comp.filled-text-field.focus.supporting-text.color | #49454F |

#### Focused / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field focus active indicator height | md.comp.filled-text-field.focus.active-indicator.height | 2dp |
| Filled text field focus active indicator color | md.comp.filled-text-field.focus.active-indicator.color | #6750A4 |
| Filled text field focus active indicator thickness | md.comp.filled-text-field.focus.active-indicator.thickness | 3dp |

#### Error / Active indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field error active indicator color | md.comp.filled-text-field.error.active-indicator.color | #B3261E |
| Filled text field error label text color | md.comp.filled-text-field.error.label-text.color | #B3261E |
| Filled text field error input text color | md.comp.filled-text-field.error.input-text.color | #1D1B20 |
| Filled text field error supporting text color | md.comp.filled-text-field.error.supporting-text.color | #B3261E |
| Filled text field error leading icon color | md.comp.filled-text-field.error.leading-icon.color | #49454F |
| Filled text field error trailing icon color | md.comp.filled-text-field.error.trailing-icon.color | #B3261E |

#### Error / Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field error focus active indicator color | md.comp.filled-text-field.error.focus.active-indicator.color | #B3261E |
| Filled text field error focus label text color | md.comp.filled-text-field.error.focus.label-text.color | #B3261E |
| Filled text field error focus input text color | md.comp.filled-text-field.error.focus.input-text.color | #1D1B20 |
| Filled text field error focus supporting text color | md.comp.filled-text-field.error.focus.supporting-text.color | #B3261E |
| Filled text field error focus leading icon color | md.comp.filled-text-field.error.focus.leading-icon.color | #49454F |
| Filled text field error focus trailing icon color | md.comp.filled-text-field.error.focus.trailing-icon.color | #B3261E |
| Filled text field error focus caret color | md.comp.filled-text-field.error.focus.caret.color | #B3261E |

#### Error / Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Filled text field error hover active indicator color | md.comp.filled-text-field.error.hover.active-indicator.color | #8C1D18 |
| Filled text field error hover label text color | md.comp.filled-text-field.error.hover.label-text.color | #8C1D18 |
| Filled text field error hover input text color | md.comp.filled-text-field.error.hover.input-text.color | #1D1B20 |
| Filled text field error hover supporting text color | md.comp.filled-text-field.error.hover.supporting-text.color | #B3261E |
| Filled text field error hover leading icon color | md.comp.filled-text-field.error.hover.leading-icon.color | #49454F |
| Filled text field error hover trailing icon color | md.comp.filled-text-field.error.hover.trailing-icon.color | #8C1D18 |
| Filled text field error hover state layer color | md.comp.filled-text-field.error.hover.state-layer.color | #1D1B20 |
| Filled text field error hover state layer opacity | md.comp.filled-text-field.error.hover.state-layer.opacity | 0.08 |

### Text field - Outlined

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field container height | md.comp.outlined-text-field.container.height | 56dp |
| Outlined text field container shape | md.comp.outlined-text-field.container.shape | Shape: corner.extra.small (Extra small, Rounded) |

#### Enabled / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field outline width | md.comp.outlined-text-field.outline.width | 1dp |
| Outlined text field outline color | md.comp.outlined-text-field.outline.color | #79747E |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field label text color | md.comp.outlined-text-field.label-text.color | #49454F |
| Outlined text field label text font | md.comp.outlined-text-field.label-text.font | Roboto |
| Outlined text field label text line height | md.comp.outlined-text-field.label-text.line-height | 24pt |
| Outlined text field label text size | md.comp.outlined-text-field.label-text.size | 16pt |
| Outlined text field label text weight | md.comp.outlined-text-field.label-text.weight | 400 |
| Outlined text field label text tracking | md.comp.outlined-text-field.label-text.tracking | 0.5pt |
| Outlined text field label text type | md.comp.outlined-text-field.label-text.type | Font: Roboto 400 16pt/24pt tracking 0.5pt |
| Outlined text field label text populated line height | md.comp.outlined-text-field.label-text.populated.line-height | 16pt |
| Outlined text field label text populated size | md.comp.outlined-text-field.label-text.populated.size | 12pt |

#### Enabled / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field leading icon color | md.comp.outlined-text-field.leading-icon.color | #49454F |
| Outlined text field leading icon size | md.comp.outlined-text-field.leading-icon.size | 24dp |

#### Enabled / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field trailing icon color | md.comp.outlined-text-field.trailing-icon.color | #49454F |
| Outlined text field trailing icon size | md.comp.outlined-text-field.trailing-icon.size | 24dp |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field supporting text color | md.comp.outlined-text-field.supporting-text.color | #49454F |
| Outlined text field supporting text font | md.comp.outlined-text-field.supporting-text.font | Roboto |
| Outlined text field supporting text line height | md.comp.outlined-text-field.supporting-text.line-height | 16pt |
| Outlined text field supporting text size | md.comp.outlined-text-field.supporting-text.size | 12pt |
| Outlined text field supporting text weight | md.comp.outlined-text-field.supporting-text.weight | 400 |
| Outlined text field supporting text tracking | md.comp.outlined-text-field.supporting-text.tracking | 0.4pt |
| Outlined text field supporting text type | md.comp.outlined-text-field.supporting-text.type | Font: Roboto 400 12pt/16pt tracking 0.4pt |

#### Enabled / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field input text color | md.comp.outlined-text-field.input-text.color | #1D1B20 |
| Outlined text field input text font | md.comp.outlined-text-field.input-text.font | Roboto |
| Outlined text field input text line height | md.comp.outlined-text-field.input-text.line-height | 24pt |
| Outlined text field input text size | md.comp.outlined-text-field.input-text.size | 16pt |
| Outlined text field input text weight | md.comp.outlined-text-field.input-text.weight | 400 |
| Outlined text field input text tracking | md.comp.outlined-text-field.input-text.tracking | 0.5pt |
| Outlined text field input text type | md.comp.outlined-text-field.input-text.type | Font: Roboto 400 16pt/24pt tracking 0.5pt |
| Outlined text field input text suffix color | md.comp.outlined-text-field.input-text.suffix.color | #49454F |
| Outlined text field input text prefix color | md.comp.outlined-text-field.input-text.prefix.color | #49454F |
| Outlined text field input text placeholder color | md.comp.outlined-text-field.input-text.placeholder.color | #49454F |

#### Enabled / Caret

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field caret color | md.comp.outlined-text-field.caret.color | #6750A4 |
| Outlined text field error focus caret color | md.comp.outlined-text-field.error.focus.caret.color | #B3261E |

#### Disabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled label text color | md.comp.outlined-text-field.disabled.label-text.color | #1D1B20 |
| Outlined text field disabled label text opacity | md.comp.outlined-text-field.disabled.label-text.opacity | 0.38 |

#### Disabled / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled leading icon color | md.comp.outlined-text-field.disabled.leading-icon.color | #1D1B20 |
| Outlined text field disabled leading icon opacity | md.comp.outlined-text-field.disabled.leading-icon.opacity | 0.38 |

#### Disabled / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled trailing-icon color | md.comp.outlined-text-field.disabled.trailing-icon.color | #1D1B20 |
| Outlined text field disabled trailing-icon opacity | md.comp.outlined-text-field.disabled.trailing-icon.opacity | 0.38 |

#### Disabled / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled outline width | md.comp.outlined-text-field.disabled.outline.width | 1dp |
| Outlined text field disabled outline color | md.comp.outlined-text-field.disabled.outline.color | #1D1B20 |
| Outlined text field disabled outline opacity | md.comp.outlined-text-field.disabled.outline.opacity | 0.12 |

#### Disabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled supporting text color | md.comp.outlined-text-field.disabled.supporting-text.color | #1D1B20 |
| Outlined text field disabled supporting text opacity | md.comp.outlined-text-field.disabled.supporting-text.opacity | 0.38 |

#### Disabled / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field disabled input text color | md.comp.outlined-text-field.disabled.input-text.color | #1D1B20 |
| Outlined text field disabled input text opacity | md.comp.outlined-text-field.disabled.input-text.opacity | 0.38 |

#### Hovered / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover label text color | md.comp.outlined-text-field.hover.label-text.color | #1D1B20 |

#### Hovered / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover leading icon color | md.comp.outlined-text-field.hover.leading-icon.color | #49454F |

#### Hovered / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover trailing icon color | md.comp.outlined-text-field.hover.trailing-icon.color | #49454F |

#### Hovered / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover outline width | md.comp.outlined-text-field.hover.outline.width | 1dp |
| Outlined text field hover outline color | md.comp.outlined-text-field.hover.outline.color | #1D1B20 |

#### Hovered / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover input text color | md.comp.outlined-text-field.hover.input-text.color | #1D1B20 |

#### Hovered / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field hover supporting text color | md.comp.outlined-text-field.hover.supporting-text.color | #49454F |

#### Focused / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus label text color | md.comp.outlined-text-field.focus.label-text.color | #6750A4 |

#### Focused / Leading icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus leading icon color | md.comp.outlined-text-field.focus.leading-icon.color | #49454F |

#### Focused / Trailing icon

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus trailing icon color | md.comp.outlined-text-field.focus.trailing-icon.color | #49454F |

#### Focused / Outline

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus outline width | md.comp.outlined-text-field.focus.outline.width | 3dp |
| Outlined text field focus outline color | md.comp.outlined-text-field.focus.outline.color | #6750A4 |

#### Focused / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus input text color | md.comp.outlined-text-field.focus.input-text.color | #1D1B20 |

#### Focused / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus supporting text color | md.comp.outlined-text-field.focus.supporting-text.color | #49454F |

#### Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field focus indicator color | md.comp.outlined-text-field.focus.indicator.outline.color | #625B71 |
| Outlined text field focus indicator color - error | md.comp.outlined-text-field.error.focus.indicator.outline.color | #B3261E |
| Outlined text field focus indicator thickness | md.comp.outlined-text-field.focus.indicator.outline.thickness | 3dp |

#### Error

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field error outline color | md.comp.outlined-text-field.error.outline.color | #B3261E |
| Outlined text field error label text color | md.comp.outlined-text-field.error.label-text.color | #B3261E |
| Outlined text field error input text color | md.comp.outlined-text-field.error.input-text.color | #1D1B20 |
| Outlined text field error supporting text color | md.comp.outlined-text-field.error.supporting-text.color | #B3261E |
| Outlined text field error leading icon color | md.comp.outlined-text-field.error.leading-icon.color | #49454F |
| Outlined text field error trailing icon color | md.comp.outlined-text-field.error.trailing-icon.color | #B3261E |

#### Error / Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field error focus outline color | md.comp.outlined-text-field.error.focus.outline.color | #B3261E |
| Outlined text field error focus label text color | md.comp.outlined-text-field.error.focus.label-text.color | #B3261E |
| Outlined text field error focus input text color | md.comp.outlined-text-field.error.focus.input-text.color | #1D1B20 |
| Outlined text field error focus supporting text color | md.comp.outlined-text-field.error.focus.supporting-text.color | #B3261E |
| Outlined text field error focus leading icon color | md.comp.outlined-text-field.error.focus.leading-icon.color | #49454F |
| Outlined text field error focus trailing icon color | md.comp.outlined-text-field.error.focus.trailing-icon.color | #B3261E |

#### Error / Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Outlined text field error hover outline color | md.comp.outlined-text-field.error.hover.outline.color | #8C1D18 |
| Outlined text field error hover label text color | md.comp.outlined-text-field.error.hover.label-text.color | #8C1D18 |
| Outlined text field error hover input text color | md.comp.outlined-text-field.error.hover.input-text.color | #1D1B20 |
| Outlined text field error hover supporting text color | md.comp.outlined-text-field.error.hover.supporting-text.color | #B3261E |
| Outlined text field error hover leading icon color | md.comp.outlined-text-field.error.hover.leading-icon.color | #49454F |
| Outlined text field error hover trailing icon color | md.comp.outlined-text-field.error.hover.trailing-icon.color | #8C1D18 |
