# Side sheets: Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

### Sheets - Side

Token: Default, Light

Folder: Enabled, Hovered, Focused, Pressed (ripple)

## Standard side sheet

### Anatomy

- **Divider** (optional)
- **Headline**
- **Container**
- **Close icon button**

### Standard side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Side sheet color roles used for light and dark themes:

| Element | Color |
|---------|-------|
| Outline | Outline variant |
| Label | On surface variant |
| Surface | Surface |
| Text | On surface variant |

### Standard side sheet measurements

Side sheet padding and size measurements:

| Attribute | Value |
|-----------|-------|
| Start/end padding | 24dp |
| Padding between top elements | 12dp |
| Bottom actions height | 72dp |
| Bottom actions top padding | 16dp |
| Bottom actions bottom padding | 24dp |
| Bottom actions alignment (horizontal) | Left |
| Max-width | 400dp |
| Margins (when detached) | 16dp |

## Modal side sheet

### Anatomy

- **Back icon button** (optional)
- **Headline**
- **Container**
- **Close icon button**
- **Divider** (optional)
- **Action buttons** (optional)
- **Scrim**

### Modal side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Side sheet color roles used for light and dark themes:

| Element | Color |
|---------|-------|
| Label | On surface variant |
| Outline | On surface variant |
| Surface | Surface container low |
| Text | On surface variant |

### Modal side sheet measurements

Modal side sheet padding and size measurements:

| Attribute | Value |
|-----------|-------|
| Start/end padding | 24dp |
| Start padding with icon | 16dp |
| Padding between top elements | 12dp |
| Bottom actions height | 72dp |
| Bottom actions top padding | 16dp |
| Bottom actions bottom padding | 24dp |
| Bottom actions alignment (horizontal) | Left |
| Max-width | 400dp |
| Margins (when detached) | 16dp |
