# M3 Button Group — Tokens & Specs

> Source: [m3.material.io/components/button-groups/specs](https://m3.material.io/components/button-groups/specs)

Two variants: standard and connected. Applies shape morph when pressed and selected. Connected button groups replace the segmented button. Works with all button sizes: XS, S, M, L, and XL.

Support for single-select (radio controls wrapped in `label`, etc.), multi-select (collection of checkboxes wrapped in `label`), and selection-required (combination of either/or of the aforementioned).

Button groups can contain buttons, icon buttons, radio controls (appropriately wrapped), and/or checkbox controls (appropriately wrapped). Button groups apply shape, motion, and width changes to buttons/button-representations and icon buttons to make them more interactive.

---

## Standard - Size - XSmall

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group xsmall container height | `md.comp.button-group.standard.xsmall.container.height` | 32dp |
| Button group xsmall between space | `md.comp.button-group.standard.xsmall.between-space` | 18dp |

### Pressed

| Description | Token | Value |
|---|---|---|
| Button group xsmall pressed spring dampening | `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening` | 0.9 |
| Button group xsmall pressed spring stiffness | `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness` | 1400 |
| Button group xsmall pressed width multiplier | `md.comp.button-group.standard.xsmall.pressed.item.width.multiplier` | 15% |

## Standard - Size - Small

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group small container height | `md.comp.button-group.standard.small.container.height` | 40dp |
| Button group small between space | `md.comp.button-group.standard.small.between-space` | 12dp |

### Pressed

| Description | Token | Value |
|---|---|---|
| Button group small pressed spring dampening | `md.comp.button-group.standard.small.pressed.item.width.motion.spring.dampening` | 0.9 |
| Button group small pressed spring stiffness | `md.comp.button-group.standard.small.pressed.item.width.motion.spring.stiffness` | 1400 |
| Button group small pressed width multiplier | `md.comp.button-group.standard.small.pressed.item.width.multiplier` | 15% |

## Standard - Size - Medium

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group medium container height | `md.comp.button-group.standard.medium.container.height` | 56dp |
| Button group medium between space | `md.comp.button-group.standard.medium.between-space` | 8dp |

### Pressed

| Description | Token | Value |
|---|---|---|
| Button group medium pressed spring dampening | `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.dampening` | 0.9 |
| Button group medium pressed spring stiffness | `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.stiffness` | 1400 |
| Button group medium pressed width multiplier | `md.comp.button-group.standard.medium.pressed.item.width.multiplier` | 15% |

## Standard - Size - Large

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group large container height | `md.comp.button-group.standard.large.container.height` | 96dp |
| Button group large between space | `md.comp.button-group.standard.large.between-space` | 8dp |

### Pressed

| Description | Token | Value |
|---|---|---|
| Button group large pressed spring dampening | `md.comp.button-group.standard.large.pressed.item.width.motion.spring.dampening` | 0.9 |
| Button group large pressed spring stiffness | `md.comp.button-group.standard.large.pressed.item.width.motion.spring.stiffness` | 1400 |
| Button group large pressed width multiplier | `md.comp.button-group.standard.large.pressed.item.width.multiplier` | 15% |

## Standard - Size - XLarge

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group xlarge container height | `md.comp.button-group.standard.xlarge.container.height` | 136dp |
| Button group xlarge between space | `md.comp.button-group.standard.xlarge.between-space` | 8dp |

### Pressed

| Description | Token | Value |
|---|---|---|
| Button group xlarge pressed spring dampening | `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.dampening` | 0.9 |
| Button group xlarge pressed spring stiffness | `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.stiffness` | 1400 |
| Button group xlarge pressed width multiplier | `md.comp.button-group.standard.xlarge.pressed.item.width.multiplier` | 15% |

---

## Connected - Size - XSmall

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group connected xsmall container height | `md.comp.button-group.connected.xsmall.container.height` | 32dp |
| Button group connected xsmall between space | `md.comp.button-group.connected.xsmall.between-space` | 2dp |
| Button group connected xsmall container shape | `md.comp.button-group.connected.xsmall.container.shape` | md.sys.shape.corner.full |
| Button group connected xsmall inner corner size | `md.comp.button-group.connected.xsmall.inner-corner.corner-size` | 8dp |
| Button group connected xsmall pressed inner corner size | `md.comp.button-group.connected.xsmall.pressed.inner-corner.corner-size` | 4dp |
| Button group connected xsmall selected inner corner size | `md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size` | 50% |

## Connected - Size - Small

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group connected small container height | `md.comp.button-group.connected.small.container.height` | 40dp |
| Button group connected small between space | `md.comp.button-group.connected.small.between-space` | 2dp |
| Button group connected small container shape | `md.comp.button-group.connected.small.container.shape` | md.sys.shape.corner.full |
| Button group connected small inner corner size | `md.comp.button-group.connected.small.inner-corner.corner-size` | 8dp |
| Button group connected small pressed inner corner size | `md.comp.button-group.connected.small.pressed.inner-corner.corner-size` | 4dp |
| Button group connected small selected inner corner size | `md.comp.button-group.connected.small.selected.inner-corner.corner-size` | 50% |

## Connected - Size - Medium

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group connected medium container height | `md.comp.button-group.connected.medium.container.height` | 56dp |
| Button group connected medium between space | `md.comp.button-group.connected.medium.between-space` | 2dp |
| Button group connected medium container shape | `md.comp.button-group.connected.medium.container.shape` | md.sys.shape.corner.full |
| Button group connected medium inner corner size | `md.comp.button-group.connected.medium.inner-corner.corner-size` | 8dp |
| Button group connected medium pressed inner corner size | `md.comp.button-group.connected.medium.pressed.inner-corner.corner-size` | 4dp |
| Button group connected medium selected inner corner size | `md.comp.button-group.connected.medium.selected.inner-corner.corner-size` | 50% |

## Connected - Size - Large

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group connected large container height | `md.comp.button-group.connected.large.container.height` | 96dp |
| Button group connected large between space | `md.comp.button-group.connected.large.between-space` | 2dp |
| Button group connected large container shape | `md.comp.button-group.connected.large.container.shape` | md.sys.shape.corner.full |
| Button group connected large inner corner size | `md.comp.button-group.connected.large.inner-corner.corner-size` | 16dp |
| Button group connected large pressed inner corner size | `md.comp.button-group.connected.large.pressed.inner-corner.corner-size` | 12dp |
| Button group connected large selected inner corner size | `md.comp.button-group.connected.large.selected.inner-corner.corner-size` | 50% |

## Connected - Size - XLarge

### Tokens

| Description | Token | Value |
|---|---|---|
| Button group connected xlarge container height | `md.comp.button-group.connected.xlarge.container.height` | 136dp |
| Button group connected xlarge between space | `md.comp.button-group.connected.xlarge.between-space` | 2dp |
| Button group connected xlarge container shape | `md.comp.button-group.connected.xlarge.container.shape` | md.sys.shape.corner.full |
| Button group connected xlarge inner corner size | `md.comp.button-group.connected.xlarge.inner-corner.corner-size` | 20dp |
| Button group connected xlarge pressed inner corner size | `md.comp.button-group.connected.xlarge.pressed.inner-corner.corner-size` | 16dp |
| Button group connected xlarge selected inner corner size | `md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size` | 50% |

---

*Extracted from the Material Design 3 website.*
