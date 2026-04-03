# Side sheets: Specs

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

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values.

### Sheets - Side


#### Enabled

##### Container

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked container color | md.comp.sheet.side.docked.container.color | #FEF7FF |
| Sheet side docked modal container color | md.comp.sheet.side.docked.modal.container.color | #F7F2FA |
| Sheet side docked standard container color | md.comp.sheet.side.docked.standard.container.color | #FEF7FF |
| Sheet side docked container surface tint layer color | md.comp.sheet.side.docked.container.surface-tint-layer.color | #6750A4 |
| Sheet side docked modal container elevation | md.comp.sheet.side.docked.modal.container.elevation | Elevation: level1 (1dp) |
| Sheet side docked standard container elevation | md.comp.sheet.side.docked.standard.container.elevation | Elevation: level0 (0dp) |
| Sheet side docked container height | md.comp.sheet.side.docked.container.height | 100% |
| Sheet side docked container shape | md.comp.sheet.side.docked.container.shape | Shape: 0dp (No rounding) |
| Sheet side detached container shape | md.comp.sheet.side.detached.container.shape | Shape: corner.large (16dp) |
| Sheet side docked container width | md.comp.sheet.side.docked.container.width | 256dp |
| Sheet side docked modal container shape | md.comp.sheet.side.docked.modal.container.shape | Shape: corner.large (16dp) |

##### Headline

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked headline color | md.comp.sheet.side.docked.headline.color | #49454F |
| Sheet side docked headline font | md.comp.sheet.side.docked.headline.font | Roboto |
| Sheet side docked headline line height | md.comp.sheet.side.docked.headline.line-height | 28pt |
| Sheet side docked headline size | md.comp.sheet.side.docked.headline.size | 22pt |
| Sheet side docked headline tracking | md.comp.sheet.side.docked.headline.tracking | 0 |
| Sheet side docked headline weight | md.comp.sheet.side.docked.headline.weight | 400 |

##### Divider

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked divider color | md.comp.sheet.side.docked.divider.color | #79747E |

#### Hovered

##### Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action hover label text color | md.comp.sheet.side.docked.action.hover.label-text.color | #6750A4 |

##### State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action hover state layer color | md.comp.sheet.side.docked.action.hover.state-layer.color | #6750A4 |
| Sheet side docked action hover state layer opacity | md.comp.sheet.side.docked.action.hover.state-layer.opacity | 0.08 |

#### Focused

##### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked focus indicator color | md.comp.sheet.side.docked.focus.indicator.color | #625B71 |
| Sheet side docked focus indicator thickness | md.comp.sheet.side.docked.focus.indicator.thickness | 3dp |
| Sheet side docked focus indicator offset | md.comp.sheet.side.docked.focus.indicator.outline.offset | 2dp |

##### Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action focus label text color | md.comp.sheet.side.docked.action.focus.label-text.color | #6750A4 |

##### State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action focus state layer color | md.comp.sheet.side.docked.action.focus.state-layer.color | #6750A4 |
| Sheet side docked action focus state layer opacity | md.comp.sheet.side.docked.action.focus.state-layer.opacity | 0.1 |

#### Pressed (ripple)

##### Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action pressed label text color | md.comp.sheet.side.docked.action.pressed.label-text.color | #6750A4 |

##### State layer

| Token | Reference | Value |
|-------|-----------|-------|
| Sheet side docked action pressed state layer color | md.comp.sheet.side.docked.action.pressed.state-layer.color | #6750A4 |
| Sheet side docked action pressed state layer opacity | md.comp.sheet.side.docked.action.pressed.state-layer.opacity | 0.1 |
