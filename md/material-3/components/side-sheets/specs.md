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

## Design Tokens

### Standard Side Sheet

| Token | Reference | Value |
|-------|-----------|-------|
| Side sheet container color | md.comp.side-sheet.container.color | Surface |
| Side sheet container shape | md.comp.side-sheet.container.shape | Shape: 0dp (No rounding) |
| Side sheet divider color | md.comp.side-sheet.divider.color | Outline variant |
| Side sheet headline color | md.comp.side-sheet.headline.color | On surface variant |
| Side sheet text color | md.comp.side-sheet.text.color | On surface variant |

### Modal Side Sheet

| Token | Reference | Value |
|-------|-----------|-------|
| Modal side sheet container color | md.comp.side-sheet.modal.container.color | Surface container low |
| Modal side sheet scrim color | md.comp.side-sheet.modal.scrim.color | On surface variant |
| Modal side sheet scrim opacity | md.comp.side-sheet.modal.scrim.opacity | 0.32 |
| Modal side sheet container elevation | md.comp.side-sheet.modal.container.elevation | Elevation: level1 (1dp) |

### Interactions

| Token | Reference | Value |
|-------|-----------|-------|
| Side sheet hovered state layer opacity | md.comp.side-sheet.hovered.state-layer.opacity | 0.08 |
| Side sheet focused state layer opacity | md.comp.side-sheet.focused.state-layer.opacity | 0.12 |
| Side sheet pressed state layer opacity | md.comp.side-sheet.pressed.state-layer.opacity | 0.12 |
