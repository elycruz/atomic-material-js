# Bottom sheets: Specs

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

## Anatomy

- **Container**
- **Drag handle** (optional)
- **Scrim**

## Tokens and specs

Browse the component elements, attributes, tokens, and their values.

### Sheets - Bottom

Token: Default, Light

Folder: Enabled

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Bottom sheet color roles

Used for both light and dark schemes:

| Element | Color |
|---------|-------|
| Scrim | On surface variant |
| Surface | Surface container low |
| On surface | On surface variant |

* On Android platforms, the scrim color and opacity is automatically handled by the system UI.

## Measurements

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, bottom sheets adjust to have a top margin of 56dp and side margins of 56dp.

| Attribute | Value |
|-----------|-------|
| Drag handle alignment (horizontal) | Center |
| Drag handle padding top/bottom | 22dp |
| Top margin | 72dp |
| Top margin (window width > 640dp) | 56dp |
| Start/end margin (window width > 640dp) | 56dp |
| Width | Full width, up to max-width 640dp |
| Height | Variable |

## Design Tokens

### Bottom Sheet Container

| Token | Reference | Value |
|-------|-----------|-------|
| Bottom sheet container color | md.comp.bottom-sheet.container.color | Surface container low |
| Bottom sheet container shape | md.comp.bottom-sheet.container.shape | Shape: corner.large (16dp rounded corners) |
| Bottom sheet container elevation | md.comp.bottom-sheet.container.elevation | Elevation: level1 (1dp) |
| Bottom sheet scrim color | md.comp.bottom-sheet.scrim.color | On surface variant |
| Bottom sheet scrim opacity | md.comp.bottom-sheet.scrim.opacity | 0.32 |

### Drag Handle

| Token | Reference | Value |
|-------|-----------|-------|
| Bottom sheet drag handle color | md.comp.bottom-sheet.drag-handle.color | On surface variant |
| Bottom sheet drag handle size | md.comp.bottom-sheet.drag-handle.size | 4dp x 32dp |
| Bottom sheet drag handle opacity | md.comp.bottom-sheet.drag-handle.opacity | 0.4 |

### Standard (Non-Modal)

| Token | Reference | Value |
|-------|-----------|-------|
| Standard bottom sheet scrim display | md.comp.bottom-sheet.standard.scrim.display | None |
