# Bottom sheets: Specs

Modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken. are above a scrim while standard bottom sheets display supplementary content without blocking access to the screen's primary content, such as an audio player at the bottom of a music app. don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

![Diagram of container, drag handle, scrim](https://lh3.googleusercontent.com/zukI3AJrMtdfLMWQT4wlAlMvIUfkIHpc5QmTQNqYJpxh-cV8QEJcVsy9Yc198HJsK1Od4d-cEiCfOKkcY5nhzjVVmtfGd9e3Wy75vUnWqSE=w40)

## Tokens and specs

### Sheets - Bottom

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom docked container color | md.comp.sheet.bottom.docked.container.color | #F7F2FA |
| Sheet bottom docked modal container elevation | md.comp.sheet.bottom.docked.modal.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Sheet bottom docked standard container elevation | md.comp.sheet.bottom.docked.standard.container.elevation | Elevation: md.sys.elevation.level1 (1dp) |
| Sheet bottom docked container shape | md.comp.sheet.bottom.docked.container.shape | Shape: md.sys.shape.corner.extra-large.top (rounded_corner) |
| Sheet bottom docked minimized container shape | md.comp.sheet.bottom.docked.minimized.container.shape | Shape: md.sys.shape.corner.none (rounded_corner) |

#### Enabled / Drag handle

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom docked drag handle color | md.comp.sheet.bottom.docked.drag-handle.color | #49454F |
| Sheet bottom docked drag handle width | md.comp.sheet.bottom.docked.drag-handle.width | 32dp |
| Sheet bottom docked drag handle height | md.comp.sheet.bottom.docked.drag-handle.height | 4dp |

#### Enabled / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet bottom focus indicator color | md.comp.sheet.bottom.focus.indicator.color | #625B71 |
| Sheet bottom focus indicator thickness | md.comp.sheet.bottom.focus.indicator.thickness | 3dp |
| Sheet bottom focus indicator offset | md.comp.sheet.bottom.focus.indicator.outline.offset | 2dp |

## Color

![Two diagrams featuring color opposites of scrim, container, drag handle](https://lh3.googleusercontent.com/DRToa14TKB2-AlRHwUn1aPr1fykKEPGlGiKLDxHYv9B9e5CeupNBR-mM7uQOfp_OK-ZHdqjgboBeyE7GhlNtsThqGvX87OLsiAoci2zkTRBo=w40)

## Measurements

![Bottom sheet on larger device with 56dp top and 56dp side margins](https://lh3.googleusercontent.com/gVNIjqiBu0DjSUv-lwnH3xIvACuZ6S4LWuUrUHe_KA0V_GlU3w-iwKPM-ka_6KfmjFuQJ1k6qrmm2b0y_6ZJcLd4alet31vP-0-nUdrpj_k=w40)

| Attribute | Value |
|---|---|
| Drag handle alignment (horizontal) | Center |
| Drag handle padding top/bottom | 22dp |
| Top margin | 72dp |
| Top margin (window width > 640dp) | 56dp |
| Start/end margin (window width > 640dp) | 56dp |
| Width | Full width, up to max-width 640dp |
| Height | Variable |
