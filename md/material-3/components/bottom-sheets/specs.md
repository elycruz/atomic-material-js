# Bottom sheets: Specs

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

## Anatomy

- **Container**
- **Drag handle** (optional)
- **Scrim**

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

## Tokens & Specs

### Sheets - Bottom


#### Enabled

##### Container

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom docked container color | md.comp.sheet.bottom.docked.container.color | #F7F2FA |
| Sheet bottom docked container surface tint layer color | md.comp.sheet.bottom.docked.container.surface-tint-layer.color | #6750A4 |
| Sheet bottom docked modal container elevation | md.comp.sheet.bottom.docked.modal.container.elevation | Elevation: level1 (1dp) |
| Sheet bottom docked standard container elevation | md.comp.sheet.bottom.docked.standard.container.elevation | Elevation: level0 (0dp) |
| Sheet bottom docked container shape | md.comp.sheet.bottom.docked.container.shape | Shape: corner.extraLarge (28dp) |
| Sheet bottom docked minimized container shape | md.comp.sheet.bottom.docked.minimized.container.shape | Shape: corner.large (16dp) |

##### Drag handle

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom docked drag handle color | md.comp.sheet.bottom.docked.drag-handle.color | #49454F |
| Sheet bottom docked drag handle opacity | md.comp.sheet.bottom.docked.drag-handle.opacity | 0.4 |
| Sheet bottom docked drag handle width | md.comp.sheet.bottom.docked.drag-handle.width | 32dp |
| Sheet bottom docked drag handle height | md.comp.sheet.bottom.docked.drag-handle.height | 4dp |

##### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom focus indicator color | md.comp.sheet.bottom.focus.indicator.color | #625B71 |
| Sheet bottom focus indicator thickness | md.comp.sheet.bottom.focus.indicator.thickness | 3dp |
| Sheet bottom focus indicator offset | md.comp.sheet.bottom.focus.indicator.outline.offset | 2dp |
