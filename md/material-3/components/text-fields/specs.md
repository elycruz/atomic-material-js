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
