# Icon Buttons: Specs

## Variants

- Default icon button
- Toggle icon button

### Variant Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Default | Available | Available |
| Toggle (selection) | Available | Available |

## Configurations

- Five sizes
- Two shapes
- Four color styles
- Three widths

### Category Configuration

| Category | Options | M3 | M3 Expressive |
|----------|---------|-----|-----|
| Size | Small (default) | Available | Available |
| | XS, M, L, XL | -- | Available |
| Shape | Round (default) | Available | Available |
| | Square | -- | Available |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| | Narrow, wide | -- | Available |

## Anatomy

- Icon
- Container

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

### Color Role Note

These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and icon have a 3:1 contrast ratio. For example, tertiary and on tertiary.

### Default Icon Button Color Mapping

| Style | Container | Icon | Secondary State |
|-------|-----------|------|-----------------|
| Filled | Primary | On primary | Surface container |
| Tonal | Secondary container | On secondary container | Secondary container |
| Outlined | Outline variant | On surface variant | Outline variant |
| Standard | -- | On surface variant | Primary |

### Toggle Icon Button Color Mapping

| Style | Unselected Container | Unselected Icon | Selected Container | Selected Icon |
|-------|------|------|------|------|
| Filled | Primary | On primary | Surface container | On surface variant |
| Tonal | Secondary container | On secondary container | Secondary container | On secondary container |
| Outlined | Outline variant | On surface variant | Outline variant | On surface variant |
| Standard | -- | On surface variant | -- | Inverse surface |

## States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors.

### Filled Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Tonal Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Outlined Button States

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

### Standard Icon Button States

The standard icon button's container is invisible at rest, but visible when the state layer is applied.

**Default variant:**
- Enabled
- Disabled (10% state layer)
- Hovered (8% state layer)
- Focused (10% state layer)
- Pressed (10% state layer)

**Toggle variant:**
- Unselected (Enabled, Disabled, Hovered, Focused, Pressed)
- Selected (Enabled, Disabled, Hovered, Focused, Pressed)

## Shape Morph

### Pressed State

While pressed, icon buttons can morph to become more square. Both round and square icon buttons should have the same pressed shape radius. The corner radius value differs for each button size.

### When Selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.

If the resting shape is square, the selected shape should be round.

## Measurements

Icon buttons come in five sizes with multiple width options for each size.

### Target Sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

## Button Corner Radius

| Size | Round Button | Square Button | Pressed State |
|------|--------|--------|--------|
| XS | Full | 12dp | 8dp |
| S | Full | 12dp | 8dp |
| M | Full | 16dp | 12dp |
| L | Full | 28dp | 16dp |
| XL | Full | 28dp | 16dp |

## Tokens & Specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table's menu.

**Note:** Learn about design tokens.

### Icon button - Size - Xlarge


| Token | Reference | Value |
|-------|-----------|-------|
| Icon button xlarge container height | md.comp.icon-button.xlarge.container.height | 136dp |
| Icon button xlarge icon size | md.comp.icon-button.xlarge.icon.size | 40dp |
| Icon button xlarge narrow leading space | md.comp.icon-button.xlarge.narrow.leading-space | 32dp |
| Icon button xlarge narrow trailing space | md.comp.icon-button.xlarge.narrow.trailing-space | 32dp |
| Icon button xlarge default leading space | md.comp.icon-button.xlarge.default.leading-space | 48dp |
| Icon button xlarge default trailing space | md.comp.icon-button.xlarge.default.trailing-space | 48dp |
| Icon button xlarge wide leading space | md.comp.icon-button.xlarge.wide.leading-space | 72dp |
| Icon button xlarge wide trailing space | md.comp.icon-button.xlarge.wide.trailing-space | 72dp |
| Icon button xlarge container shape round | md.comp.icon-button.xlarge.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xlarge container shape square | md.comp.icon-button.xlarge.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |
| Icon button xlarge outline width | md.comp.icon-button.xlarge.outlined.outline.width | 3dp |
| Icon button xlarge shape pressed morph | md.comp.icon-button.xlarge.pressed.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xlarge shape spring animation damping | md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Icon button xlarge shape spring animation stiffness | md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Icon button xlarge selected container shape round | md.comp.icon-button.xlarge.selected.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xlarge selected container shape square | md.comp.icon-button.xlarge.selected.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |

### Icon button - Size - Large


| Token | Reference | Value |
|-------|-----------|-------|
| Icon button large container height | md.comp.icon-button.large.container.height | 96dp |
| Icon button large icon size | md.comp.icon-button.large.icon.size | 32dp |
| Icon button large narrow leading space | md.comp.icon-button.large.narrow.leading-space | 16dp |
| Icon button large narrow trailing space | md.comp.icon-button.large.narrow.trailing-space | 16dp |
| Icon button large default leading space | md.comp.icon-button.large.default.leading-space | 32dp |
| Icon button large default trailing space | md.comp.icon-button.large.default.trailing-space | 32dp |
| Icon button large wide leading space | md.comp.icon-button.large.wide.leading-space | 48dp |
| Icon button large wide trailing space | md.comp.icon-button.large.wide.trailing-space | 48dp |
| Icon button large container shape round | md.comp.icon-button.large.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button large container shape square | md.comp.icon-button.large.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |
| Icon button large outline width | md.comp.icon-button.large.outlined.outline.width | 2dp |
| Icon button large shape pressed morph | md.comp.icon-button.large.pressed.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button large shape spring animation damping | md.comp.icon-button.large.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Icon button large shape spring animation stiffness | md.comp.icon-button.large.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Icon button large selected container shape round | md.comp.icon-button.large.selected.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button large selected container shape square | md.comp.icon-button.large.selected.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |

### Icon button - Size - Medium


| Token | Reference | Value |
|-------|-----------|-------|
| Icon button medium container height | md.comp.icon-button.medium.container.height | 56dp |
| Icon button medium icon size | md.comp.icon-button.medium.icon.size | 24dp |
| Icon button medium narrow leading space | md.comp.icon-button.medium.narrow.leading-space | 12dp |
| Icon button medium narrow trailing space | md.comp.icon-button.medium.narrow.trailing-space | 12dp |
| Icon button medium default leading space | md.comp.icon-button.medium.default.leading-space | 16dp |
| Icon button medium default trailing space | md.comp.icon-button.medium.default.trailing-space | 16dp |
| Icon button medium wide leading space | md.comp.icon-button.medium.wide.leading-space | 24dp |
| Icon button medium wide trailing space | md.comp.icon-button.medium.wide.trailing-space | 24dp |
| Icon button medium container shape round | md.comp.icon-button.medium.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button medium container shape square | md.comp.icon-button.medium.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |
| Icon button medium outline width | md.comp.icon-button.medium.outlined.outline.width | 1dp |
| Icon button medium shape pressed morph | md.comp.icon-button.medium.pressed.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button medium shape spring animation damping | md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Icon button medium shape spring animation stiffness | md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Icon button medium selected container shape round | md.comp.icon-button.medium.selected.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button medium selected container shape square | md.comp.icon-button.medium.selected.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |

### Icon button - Size - Small


| Token | Reference | Value |
|-------|-----------|-------|
| Icon button small container height | md.comp.icon-button.small.container.height | 40dp |
| Icon button small icon size | md.comp.icon-button.small.icon.size | 24dp |
| Icon button small narrow leading space | md.comp.icon-button.small.narrow.leading-space | 4dp |
| Icon button small narrow trailing space | md.comp.icon-button.small.narrow.trailing-space | 4dp |
| Icon button small default leading space | md.comp.icon-button.small.default.leading-space | 8dp |
| Icon button small default trailing space | md.comp.icon-button.small.default.trailing-space | 8dp |
| Icon button small wide leading space | md.comp.icon-button.small.wide.leading-space | 14dp |
| Icon button small wide trailing space | md.comp.icon-button.small.wide.trailing-space | 14dp |
| Icon button small container shape round | md.comp.icon-button.small.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button small container shape square | md.comp.icon-button.small.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |
| Icon button small outline width | md.comp.icon-button.small.outlined.outline.width | 1dp |
| Icon button small shape pressed morph | md.comp.icon-button.small.pressed.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button small shape spring animation damping | md.comp.icon-button.small.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Icon button small shape spring animation stiffness | md.comp.icon-button.small.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Icon button small selected container shape round | md.comp.icon-button.small.selected.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button small selected container shape square | md.comp.icon-button.small.selected.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |

### Icon button - Size - Xsmall


| Token | Reference | Value |
|-------|-----------|-------|
| Icon button xsmall container height | md.comp.icon-button.xsmall.container.height | 32dp |
| Icon button xsmall icon size | md.comp.icon-button.xsmall.icon.size | 20dp |
| Icon button xsmall narrow leading space | md.comp.icon-button.xsmall.narrow.leading-space | 4dp |
| Icon button xsmall narrow trailing space | md.comp.icon-button.xsmall.narrow.trailing-space | 4dp |
| Icon button xsmall default leading space | md.comp.icon-button.xsmall.default.leading-space | 6dp |
| Icon button xsmall default trailing space | md.comp.icon-button.xsmall.default.trailing-space | 6dp |
| Icon button xsmall wide leading space | md.comp.icon-button.xsmall.wide.leading-space | 10dp |
| Icon button xsmall wide trailing space | md.comp.icon-button.xsmall.wide.trailing-space | 10dp |
| Icon button xsmall container shape round | md.comp.icon-button.xsmall.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xsmall container shape square | md.comp.icon-button.xsmall.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |
| Icon button xsmall outline width | md.comp.icon-button.xsmall.outlined.outline.width | 1dp |
| Icon button xsmall shape pressed morph | md.comp.icon-button.xsmall.pressed.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xsmall shape spring animation damping | md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.damping | 0.9 |
| Icon button xsmall shape spring animation stiffness | md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.stiffness | 1400 |
| Icon button xsmall selected container shape round | md.comp.icon-button.xsmall.selected.container.shape.round | Shape: md.sys.shape.corner.full (Fully round) |
| Icon button xsmall selected container shape square | md.comp.icon-button.xsmall.selected.container.shape.square | Shape: md.sys.shape.corner.none (Cut, 0dp) |

### Icon button - Color - Standard


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button icon color | md.comp.icon-button.standard.icon.color | #49454F |
| Icon button icon color - toggle (unselected) | md.comp.icon-button.standard.unselected.icon.color | #49454F |
| Icon button icon color - toggle (selected) | md.comp.icon-button.standard.selected.icon.color | #6750A4 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button disabled icon color | md.comp.icon-button.standard.disabled.icon.color | #1D1B20 |
| Icon button disabled opacity | md.comp.icon-button.standard.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button hovered state layer color | md.comp.icon-button.standard.hovered.state-layer.color | #49454F |
| Icon button hovered state layer color - toggle (unselected) | md.comp.icon-button.standard.unselected.hovered.state-layer.color | #49454F |
| Icon button hovered state layer color - toggle (selected) | md.comp.icon-button.standard.selected.hovered.state-layer.color | #6750A4 |
| Icon button hovered state layer opacity | md.comp.icon-button.standard.hovered.state-layer.opacity | 0.08 |
| Icon button hovered icon color | md.comp.icon-button.standard.hovered.icon.color | #49454F |
| Icon button hovered icon color - toggle (unselected) | md.comp.icon-button.standard.unselected.hovered.icon.color | #49454F |
| Icon button hovered icon color - toggle (selected) | md.comp.icon-button.standard.selected.hovered.icon.color | #6750A4 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button focused state layer color | md.comp.icon-button.standard.focused.state-layer.color | #49454F |
| Icon button focused state layer color - toggle (unselected) | md.comp.icon-button.standard.unselected.focused.state-layer.color | #49454F |
| Icon button focused state layer color - toggle (selected) | md.comp.icon-button.standard.selected.focused.state-layer.color | #6750A4 |
| Icon button focused state layer opacity | md.comp.icon-button.standard.focused.state-layer.opacity | 0.1 |
| Icon button focused icon color | md.comp.icon-button.standard.focused.icon.color | #49454F |
| Icon button focused icon color - toggle (unselected) | md.comp.icon-button.standard.unselected.focused.icon.color | #49454F |
| Icon button focused icon color - toggle (selected) | md.comp.icon-button.standard.selected.focused.icon.color | #6750A4 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button pressed state layer color | md.comp.icon-button.standard.pressed.state-layer.color | #49454F |
| Icon button pressed state layer color - toggle (unselected) | md.comp.icon-button.standard.unselected.pressed.state-layer.color | #49454F |
| Icon button pressed state layer color - toggle (selected) | md.comp.icon-button.standard.selected.pressed.state-layer.color | #6750A4 |
| Icon button pressed state layer opacity | md.comp.icon-button.standard.pressed.state-layer.opacity | 0.1 |
| Icon button pressed icon color | md.comp.icon-button.standard.pressed.icon.color | #49454F |
| Icon button pressed icon color - toggle (unselected) | md.comp.icon-button.standard.unselected.pressed.icon.color | #49454F |
| Icon button pressed icon color - toggle (selected) | md.comp.icon-button.standard.selected.pressed.icon.color | #6750A4 |

### Icon button - Color - Outlined


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button outlined color | md.comp.icon-button.outlined.outline.color | #CAC4D0 |
| Icon button outlined color - toggle (unselected) | md.comp.icon-button.outlined.unselected.outline.color | #CAC4D0 |
| Icon button outlined container color - toggle (selected) | md.comp.icon-button.outlined.selected.container.color | #322F35 |
| Icon button outlined icon color | md.comp.icon-button.outlined.icon.color | #49454F |
| Icon button outlined icon color - toggle (unselected) | md.comp.icon-button.outlined.unselected.icon.color | #49454F |
| Icon button outlined icon color - toggle (selected) | md.comp.icon-button.outlined.selected.icon.color | #F5EFF7 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button outlined disabled outline color | md.comp.icon-button.outlined.disabled.outline.color | #CAC4D0 |
| Icon button outlined disabled outline color (unselected) | md.comp.icon-button.outlined.unselected.disabled.outline.color | #CAC4D0 |
| Icon button outlined disabled container color (selected) | md.comp.icon-button.outlined.selected.disabled.container.color | #1D1B20 |
| Icon button outlined disabled container opacity (selected) | md.comp.icon-button.outlined.selected.disabled.container.opacity | 0.1 |
| Icon button outlined disabled icon color | md.comp.icon-button.outlined.disabled.icon.color | #1D1B20 |
| Icon button outlined disabled icon opacity | md.comp.icon-button.outlined.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button outlined hovered state layer color | md.comp.icon-button.outlined.hovered.state-layer.color | #49454F |
| Icon button outlined hovered state layer color - toggle (unselected) | md.comp.icon-button.outlined.unselected.hovered.state-layer.color | #49454F |
| Icon button outlined hovered state layer color - toggle (selected) | md.comp.icon-button.outlined.selected.hovered.state-layer.color | #F5EFF7 |
| Icon button outlined hovered state layer opacity | md.comp.icon-button.outlined.hovered.state-layer.opacity | 0.08 |
| Icon button outlined hovered icon color | md.comp.icon-button.outlined.hovered.icon.color | #49454F |
| Icon button outlined hovered icon color - toggle (unselected) | md.comp.icon-button.outlined.unselected.hovered.icon.color | #49454F |
| Icon button outlined hovered icon color - toggle (selected) | md.comp.icon-button.outlined.selected.hovered.icon.color | #F5EFF7 |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button outlined focused state layer color | md.comp.icon-button.outlined.focused.state-layer.color | #49454F |
| Icon button outlined focused state layer color - toggle (unselected) | md.comp.icon-button.outlined.unselected.focused.state-layer.color | #49454F |
| Icon button outlined focused state layer color - toggle (selected) | md.comp.icon-button.outlined.selected.focused.state-layer.color | #F5EFF7 |
| Icon button outlined focused state layer opacity | md.comp.icon-button.outlined.focused.state-layer.opacity | 0.1 |
| Icon button outlined focused icon color | md.comp.icon-button.outlined.focused.icon.color | #49454F |
| Icon button outlined focused icon color - toggle (unselected) | md.comp.icon-button.outlined.unselected.focused.icon.color | #49454F |
| Icon button outlined focused icon color - toggle (selected) | md.comp.icon-button.outlined.selected.focused.icon.color | #F5EFF7 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button outlined pressed state layer color | md.comp.icon-button.outlined.pressed.state-layer.color | #49454F |
| Icon button outlined pressed state layer color - toggle (unselected) | md.comp.icon-button.outlined.unselected.pressed.state-layer.color | #49454F |
| Icon button outlined pressed state layer color - toggle (selected) | md.comp.icon-button.outlined.selected.pressed.state-layer.color | #F5EFF7 |
| Icon button outlined pressed state layer opacity | md.comp.icon-button.outlined.pressed.state-layer.opacity | 0.1 |
| Icon button outlined pressed icon color | md.comp.icon-button.outlined.pressed.icon.color | #49454F |
| Icon button outlined pressed icon color - toggle (unselected) | md.comp.icon-button.outlined.unselected.pressed.icon.color | #49454F |
| Icon button outlined pressed icon color - toggle (selected) | md.comp.icon-button.outlined.selected.pressed.icon.color | #F5EFF7 |

### Icon button - Color - Tonal


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button tonal container color | md.comp.icon-button.tonal.container.color | #E8DEF8 |
| Icon button tonal container color - toggle (unselected) | md.comp.icon-button.tonal.unselected.container.color | #E8DEF8 |
| Icon button tonal container color - toggle (selected) | md.comp.icon-button.tonal.selected.container.color | #625B71 |
| Icon button tonal icon color | md.comp.icon-button.tonal.icon.color | #4A4458 |
| Icon button tonal icon color - toggle (unselected) | md.comp.icon-button.tonal.unselected.icon.color | #4A4458 |
| Icon button tonal icon color - toggle (selected) | md.comp.icon-button.tonal.selected.icon.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button tonal disabled container color | md.comp.icon-button.tonal.disabled.container.color | #1D1B20 |
| Icon button tonal disabled container opacity | md.comp.icon-button.tonal.disabled.container.opacity | 0.1 |
| Icon button tonal disabled icon color | md.comp.icon-button.tonal.disabled.icon.color | #1D1B20 |
| Icon button tonal disabled icon opacity | md.comp.icon-button.tonal.disabled.icon.opacity | 0.38 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button tonal hovered state layer color | md.comp.icon-button.tonal.hovered.state-layer.color | #4A4458 |
| Icon button tonal hovered state layer color - toggle (unselected) | md.comp.icon-button.tonal.unselected.hovered.state-layer.color | #4A4458 |
| Icon button tonal hovered state layer color - toggle (selected) | md.comp.icon-button.tonal.selected.hovered.state-layer.color | #FFFFFF |
| Icon button tonal hovered state layer opacity | md.comp.icon-button.tonal.hovered.state-layer.opacity | 0.08 |
| Icon button tonal hovered icon color | md.comp.icon-button.tonal.hovered.icon.color | #4A4458 |
| Icon button tonal hovered icon color - toggle (unselected) | md.comp.icon-button.tonal.unselected.hovered.icon.color | #4A4458 |
| Icon button tonal hovered icon color - toggle (selected) | md.comp.icon-button.tonal.selected.hovered.icon.color | #FFFFFF |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button tonal focused state layer color | md.comp.icon-button.tonal.focused.state-layer.color | #4A4458 |
| Icon button tonal focused state layer color - toggle (unselected) | md.comp.icon-button.tonal.unselected.focused.state-layer.color | #4A4458 |
| Icon button tonal focused state layer color - toggle (selected) | md.comp.icon-button.tonal.selected.focused.state-layer.color | #FFFFFF |
| Icon button tonal focused state layer opacity | md.comp.icon-button.tonal.focused.state-layer.opacity | 0.1 |
| Icon button tonal focused icon color | md.comp.icon-button.tonal.focused.icon.color | #4A4458 |
| Icon button tonal focused icon color - toggle (unselected) | md.comp.icon-button.tonal.unselected.focused.icon.color | #4A4458 |
| Icon button tonal focused icon color - toggle (selected) | md.comp.icon-button.tonal.selected.focused.icon.color | #FFFFFF |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button tonal pressed state layer color | md.comp.icon-button.tonal.pressed.state-layer.color | #4A4458 |
| Icon button tonal pressed state layer color - toggle (unselected) | md.comp.icon-button.tonal.unselected.pressed.state-layer.color | #4A4458 |
| Icon button tonal pressed state layer color - toggle (selected) | md.comp.icon-button.tonal.selected.pressed.state-layer.color | #FFFFFF |
| Icon button tonal pressed state layer opacity | md.comp.icon-button.tonal.pressed.state-layer.opacity | 0.1 |
| Icon button tonal pressed icon color | md.comp.icon-button.tonal.pressed.icon.color | #4A4458 |
| Icon button tonal pressed icon color - toggle (unselected) | md.comp.icon-button.tonal.unselected.pressed.icon.color | #4A4458 |
| Icon button tonal pressed icon color - toggle (selected) | md.comp.icon-button.tonal.selected.pressed.icon.color | #FFFFFF |

### Icon button - Color - Filled


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button filled container color | md.comp.icon-button.filled.container.color | #6750A4 |
| Icon button filled container color - toggle (unselected) | md.comp.icon-button.filled.unselected.container.color | #F3EDF7 |
| Icon button filled container color - toggle (selected) | md.comp.icon-button.filled.selected.container.color | #6750A4 |
| Icon button filled icon color | md.comp.icon-button.filled.icon.color | #FFFFFF |
| Icon button filled icon color - toggle (unselected) | md.comp.icon-button.filled.unselected.icon.color | #49454F |
| Icon button filled icon color - toggle (selected) | md.comp.icon-button.filled.selected.icon.color | #FFFFFF |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button filled disabled container color | md.comp.icon-button.filled.disabled.container.color | #1D1B20 |
| Icon button filled disabled container color - toggle (unselected) | md.comp.icon-button.filled.disabled.unselected.container.color | #1D1B20 |
| Icon button filled disabled container color - toggle (selected) | md.comp.icon-button.filled.disabled.selected.container.color | #1D1B20 |
| Icon button filled disabled icon color | md.comp.icon-button.filled.disabled.icon.color | #49454F |
| Icon button filled disabled icon color - toggle (unselected) | md.comp.icon-button.filled.disabled.unselected.icon.color | #49454F |
| Icon button filled disabled icon color - toggle (selected) | md.comp.icon-button.filled.disabled.selected.icon.color | #49454F |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button filled container color | md.comp.icon-button.filled.hover.container.color | #6750A4 |
| Icon button filled container color - toggle (unselected) | md.comp.icon-button.filled.hover.unselected.container.color | #F3EDF7 |
| Icon button filled container color - toggle (selected) | md.comp.icon-button.filled.hover.selected.container.color | #6750A4 |
| Icon button filled icon color | md.comp.icon-button.filled.hover.icon.color | #FFFFFF |
| Icon button filled icon color - toggle (unselected) | md.comp.icon-button.filled.hover.unselected.icon.color | #49454F |
| Icon button filled icon color - toggle (selected) | md.comp.icon-button.filled.hover.selected.icon.color | #FFFFFF |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button filled container color | md.comp.icon-button.filled.focus.container.color | #6750A4 |
| Icon button filled container color - toggle (unselected) | md.comp.icon-button.filled.focus.unselected.container.color | #F3EDF7 |
| Icon button filled container color - toggle (selected) | md.comp.icon-button.filled.focus.selected.container.color | #6750A4 |
| Icon button filled icon color | md.comp.icon-button.filled.focus.icon.color | #FFFFFF |
| Icon button filled icon color - toggle (unselected) | md.comp.icon-button.filled.focus.unselected.icon.color | #49454F |
| Icon button filled icon color - toggle (selected) | md.comp.icon-button.filled.focus.selected.icon.color | #FFFFFF |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Icon button filled container color | md.comp.icon-button.filled.pressed.container.color | #6750A4 |
| Icon button filled container color - toggle (unselected) | md.comp.icon-button.filled.pressed.unselected.container.color | #F3EDF7 |
| Icon button filled container color - toggle (selected) | md.comp.icon-button.filled.pressed.selected.container.color | #6750A4 |
| Icon button filled icon color | md.comp.icon-button.filled.pressed.icon.color | #FFFFFF |
| Icon button filled icon color - toggle (unselected) | md.comp.icon-button.filled.pressed.unselected.icon.color | #49454F |
| Icon button filled icon color - toggle (selected) | md.comp.icon-button.filled.pressed.selected.icon.color | #FFFFFF |

## Baseline Tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are no longer recommended. Standard tokens are still available in the module at the top of the page.
