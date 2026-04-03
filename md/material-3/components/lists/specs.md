# Lists: Specs

## Variants

### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

An expressive list has a segmented style and round corners.

### Baseline lists

In M3 Expressive, baseline lists are still available to use, but don't have the latest visual style, selection treatment, and slot functionality. See baseline list specs.

Baseline list items have square corners and standard color.

| Variant | M3 | M3 Expressive |
|---------|----|----|
| List (expressive) | -- | Available |
| List (baseline) | Available | Available |

## Configurations

### Styles

The standard and segmented styles are a visual choice, and don't affect a list's behavior.

- Standard
- Segmented

### List selection modes

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can't be both at once.

- In a single-action list, each item is a single tappable area
- Multi-action list items include a primary action and one or more secondary actions

### List interactions

Lists can expand and collapse on Android.

| Category | Configuration | M3 | M3 Expressive |
|----------|----------------|----|-------|
| Styles | Standard | Available | Available |
| | Segmented | -- | Available |
| Selection modes | Single-action, multi-action, single-select, multi-select | Available | Available |
| Interactions | Expand | Available | Available |

## Anatomy

Container and label text are required. All other elements are optional:
- Container
- Overline
- Label text
- Trailing text
- Supporting text
- Trailing icon
- Divider
- Leading avatar
- Leading icon
- Leading media (image or video)

## Flexibility & slots

The M3 Design Kit includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

### Slot accessibility

Slots are not accessible by default. Consider the following:
- Elements must follow the rules, structure, and interaction patterns for lists
- Use standard list item padding
- Target size must be at least 48x48dp
- Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers

**Caution:** Reserve the use of slots for use cases that maintain the list's accessibility and functionality

**Caution:** Slots require custom code implementation that you must create and maintain

### Slot positions

The leading and trailing slot positions must be a smaller width than the content section.

**Leading slots** can contain:
- Visual elements: Avatar, icon, image, or video thumbnail
- Selection: Checkbox, radio button, or switch
- Customizations: Badge or larger image

**Content slots** must be the largest-width slot and can contain:
- Default content: Label text, supporting text
- Optional add-ons: Badge, icon, in-line label, or more text elements

Avoid long lines of text to preserve readability.

**Trailing slots** can contain:
- Action elements or text: Icon, icon button, or trailing text
- Selection controls: Checkbox, radio button, or switch

The content slot must be the largest section, placed in the middle of the list item.

### Selection lists

For selection lists, use only one selection interaction per list item.

**Do:** Use only one selection interaction per list item

**Don't:** Don't use multiple selection interactions in one item

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens.

List color roles used for light and dark themes:
- Surface
- On surface variant
- On surface
- On surface variant
- Outline variant
- Primary container
- On primary container

## States

States are visual representations used to communicate the status of a component or an interactive element. Learn more about interaction states.

### Default list items

- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Selected list items

- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

## Measurements

List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height.

## Tokens & Specs

Use the table's menu to select a token set. The common set combines baseline tokens with new expressive shapes and sizes. The expand set has tokens for the expand interaction. Learn about design tokens.

See design tokens for detailed specifications.

### List - Expand


#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| List expand expanded list item container color | md.comp.list.expand.expanded.list-item.container.color | #FEF7FF |
| List expand expanded list item segmented container color | md.comp.list.expand.expanded.list-item.segmented.container.color | #FEF7FF |
| List expand collapsed list item trailing icon container color | md.comp.list.expand.collapsed.list-item.trailing-icon.container.color | #FEF7FF |
| List expand collapsed list item trailing icon icon color | md.comp.list.expand.collapsed.list-item.trailing-icon.icon.color | #1D1B20 |
| List expand expanded list item trailing icon container color | md.comp.list.expand.expanded.list-item.trailing-icon.container.color | #F3EDF7 |
| List expand expanded list item trailing icon icon color | md.comp.list.expand.expanded.list-item.trailing-icon.icon.color | #1D1B20 |

#### Shape

| Token | Reference | Value |
|-------|-----------|-------|
| List expand container shape | md.comp.list.expand.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List expand trailing icon shape | md.comp.list.expand.trailing-icon.shape | Shape: md.sys.shape.corner.full (Fully round, Circular) |

### List - Common


#### Color / Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| List list item container color | md.comp.list.list-item.container.color | #FEF7FF |
| List list item segmented container color | md.comp.list.list-item.segmented.container.color | #FEF7FF |
| List list item label text color | md.comp.list.list-item.label-text.color | #1D1B20 |
| List list item supporting text color | md.comp.list.list-item.supporting-text.color | #49454F |
| List list item overline color | md.comp.list.list-item.overline.color | #49454F |
| List list item divider color | md.comp.list.divider.color | #79747E |
| List list item divider height | md.comp.list.divider.height | 1dp |
| List list item container height | md.comp.list.list-item.container.height | 56dp |
| One line list item container height | md.comp.list.md.comp.list.list-item.one-line.container.height | 56dp |
| Three lines list item container height | md.comp.list.md.comp.list.list-item.three-line.container.height | 88dp |
| Two lines list item container height | md.comp.list.md.comp.list.list-item.two-line.container.height | 72dp |
| List list item leading icon color | md.comp.list.list-item.leading-icon.color | #49454F |
| List list item trailing icon color | md.comp.list.list-item.trailing-icon.color | #49454F |
| List list item unselected trailing icon color | md.comp.list.list-item.unselected.trailing-icon.color | #1D1B20 |
| List list item trailing supporting text color | md.comp.list.list-item.trailing-supporting-text.color | #49454F |
| List list item leading avatar color | md.comp.list.list-item.leading-avatar.color | #EADDFF |
| List list item leading avatar label color | md.comp.list.list-item.leading-avatar-label.color | #4F378B |
| List list item container elevation | md.comp.list.list-item.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Color / Enabled - Selected

| Token | Reference | Value |
|-------|-----------|-------|
| List list item selected container color | md.comp.list.list-item.selected.container.color | #E8DEF8 |
| List list item selected label text color | md.comp.list.list-item.selected.label-text.color | #4A4458 |
| List list item selected supporting text color | md.comp.list.list-item.selected.supporting-text.color | #4A4458 |
| List list item selected trailing supporting text color | md.comp.list.list-item.selected.trailing-supporting-text.color | #4A4458 |
| List list item selected leading icon color | md.comp.list.list-item.selected.leading-icon.color | #4A4458 |
| List list item selected trailing icon color | md.comp.list.list-item.selected.trailing-icon.color | #4A4458 |
| List list item selected overline color | md.comp.list.list-item.selected.overline.color | #4A4458 |

#### Color / Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| List list item disabled state layer color | md.comp.list.list-item.disabled.state-layer.color | #1D1B20 |
| List list item disabled state layer opacity | md.comp.list.list-item.disabled.state-layer.opacity | 0.1 |
| List list item disabled label text color | md.comp.list.list-item.disabled.label-text.color | #1D1B20 |
| List list item disabled label text opacity | md.comp.list.list-item.disabled.label-text.opacity | 0.38 |
| List list item disabled supporting text color | md.comp.list.list-item.disabled.supporting-text.color | #1D1B20 |
| List list item disabled supporting text opacity | md.comp.list.list-item.disabled.supporting-text.opacity | 0.38 |
| List list item disabled overline color | md.comp.list.list-item.disabled.overline.color | #1D1B20 |
| List list item disabled overline opacity | md.comp.list.list-item.disabled.overline.opacity | 0.38 |
| List list item disabled leading icon color | md.comp.list.list-item.disabled.leading-icon.color | #1D1B20 |
| List list item disabled leading icon opacity | md.comp.list.list-item.disabled.leading-icon.opacity | 0.38 |
| List list item disabled trailing icon color | md.comp.list.list-item.disabled.trailing-icon.color | #1D1B20 |
| List list item disabled trailing icon opacity | md.comp.list.list-item.disabled.trailing-icon.opacity | 0.38 |

#### Color / Disabled - Selected

| Token | Reference | Value |
|-------|-----------|-------|
| List list item selected disabled container color | md.comp.list.list-item.selected.disabled.container.color | #1D1B20 |
| List list item selected disabled container opacity | md.comp.list.list-item.selected.disabled.container.opacity | 0.38 |
| List list item selected disabled label text color | md.comp.list.list-item.selected.disabled.label-text.color | #1D1B20 |
| List list item selected disabled label text opacity | md.comp.list.list-item.selected.disabled.label-text.opacity | 0.38 |
| List list item selected disabled supporting text color | md.comp.list.list-item.selected.disabled.supporting-text.color | #1D1B20 |
| List list item selected disabled supporting text opacity | md.comp.list.list-item.selected.disabled.supporting-text.opacity | 0.38 |
| List list item selected disabled trailing supporting text color | md.comp.list.list-item.selected.disabled.trailing-supporting-text.color | #1D1B20 |
| List list item selected disabled trailing supporting text opacity | md.comp.list.list-item.selected.disabled.trailing-supporting-text.opacity | 0.38 |
| List list item selected disabled overline color | md.comp.list.list-item.selected.disabled.overline.color | #1D1B20 |
| List list item selected disabled overline opacity | md.comp.list.list-item.selected.disabled.overline.opacity | 0.38 |
| List list item selected disabled state layer color | md.comp.list.list-item.selected.disabled.state-layer.color | #1D1B20 |
| List list item selected disabled state layer opacity | md.comp.list.list-item.selected.disabled.state-layer.opacity | 0.1 |
| List list item selected disabled leading icon color | md.comp.list.list-item.selected.disabled.leading-icon.color | #1D1B20 |
| List list item selected disabled leading icon opacity | md.comp.list.list-item.selected.disabled.leading-icon.opacity | 0.38 |
| List list item selected disabled trailing icon color | md.comp.list.list-item.selected.disabled.trailing-icon.color | #1D1B20 |
| List list item selected disabled trailing icon opacity | md.comp.list.list-item.selected.disabled.trailing-icon.opacity | 0.38 |

#### Color / Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| List list item hover state layer color | md.comp.list.list-item.hover.state-layer.color | #1D1B20 |
| List list item hover state layer opacity | md.comp.list.list-item.hover.state-layer.opacity | 0.08 |
| List list item hover label text color | md.comp.list.list-item.hover.label-text.color | #1D1B20 |
| List list item hover leading icon color | md.comp.list.list-item.hover.leading-icon.icon.color | #49454F |
| List list item hover trailing icon color | md.comp.list.list-item.hover.trailing-icon.icon.color | #49454F |

#### Color / Hovered - Selected

| Token | Reference | Value |
|-------|-----------|-------|
| List list item selected hover state layer color | md.comp.list.list-item.selected.hover.state-layer.color | #1D1B20 |
| List list item selected hover state layer opacity | md.comp.list.list-item.selected.hover.state-layer.opacity | 0.08 |
| List list item selected hover label text color | md.comp.list.list-item.selected.hover.label-text.color | #4A4458 |
| List list item selected hover leading icon color | md.comp.list.list-item.selected.hover.leading-icon.color | #1D1B20 |
| List list item selected hover trailing icon color | md.comp.list.list-item.selected.hover.trailing-icon.color | #1D1B20 |

#### Color / Focused

| Token | Reference | Value |
|-------|-----------|-------|
| List list item focus state layer color | md.comp.list.list-item.focus.state-layer.color | #1D1B20 |
| List list item focus state layer opacity | md.comp.list.list-item.focus.state-layer.opacity | 0.1 |
| List list item focus label text color | md.comp.list.list-item.focus.label-text.color | #1D1B20 |
| List list item focus leading icon color | md.comp.list.list-item.focus.leading-icon.icon.color | #49454F |
| List list item focus trailing icon color | md.comp.list.list-item.focus.trailing-icon.icon.color | #49454F |

#### Color / Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| List list item focus indicator color | md.comp.list.focus.indicator.color | #625B71 |
| List list item focus indicator thickness | md.comp.list.focus.indicator.thickness | 3dp |
| List list item focus indicator offset | md.comp.list.focus.indicator.outline.offset | -3dp |

#### Color / Focused - Selected

| Token | Reference | Value |
|-------|-----------|-------|
| List list item selected focus state layer color | md.comp.list.list-item.selected.focus.state-layer.color | #1D1B20 |
| List list item selected focus state layer opacity | md.comp.list.list-item.selected.focus.state-layer.opacity | 0.1 |
| List list item selected focus label text color | md.comp.list.list-item.selected.focus.label-text.color | #4A4458 |
| List list item selected focus leading icon color | md.comp.list.list-item.selected.focus.leading-icon.color | #1D1B20 |
| List list item selected focus trailing icon color | md.comp.list.list-item.selected.focus.trailing-icon.color | #1D1B20 |

#### Color / Pressed (ripple)

| Token | Reference | Value |
|-------|-----------|-------|
| List list item pressed state layer color | md.comp.list.list-item.pressed.state-layer.color | #1D1B20 |
| List list item pressed state layer opacity | md.comp.list.list-item.pressed.state-layer.opacity | 0.1 |
| List list item pressed label text color | md.comp.list.list-item.pressed.label-text.color | #1D1B20 |
| List list item pressed leading icon color | md.comp.list.list-item.pressed.leading-icon.icon.color | #49454F |
| List list item pressed trailing icon color | md.comp.list.list-item.pressed.trailing-icon.icon.color | #49454F |

#### Color / Pressed - Selected

| Token | Reference | Value |
|-------|-----------|-------|
| List list item selected pressed state layer color | md.comp.list.list-item.selected.pressed.state-layer.color | #1D1B20 |
| List list item selected pressed state layer opacity | md.comp.list.list-item.selected.pressed.state-layer.opacity | 0.1 |
| List list item selected pressed label text color | md.comp.list.list-item.selected.pressed.label-text.color | #4A4458 |
| List list item selected pressed trailing icon color | md.comp.list.list-item.selected.pressed.trailing-icon.color | #1D1B20 |
| List list item selected pressed leading icon color | md.comp.list.list-item.selected.pressed.leading-icon.color | #1D1B20 |

#### Color / Dragged (baseline only)

| Token | Reference | Value |
|-------|-----------|-------|
| List list item dragged container color | md.comp.list.list-item.dragged.container.elevation | Elevation: md.sys.elevation.level4 (8dp) |
| List list item dragged label text color | md.comp.list.list-item.dragged.label-text.color | #1D1B20 |
| List list item selected dragged label text color | md.comp.list.list-item.selected.dragged.label-text.color | #4A4458 |
| List list item dragged state layer color | md.comp.list.list-item.dragged.state-layer.color | #1D1B20 |
| List list item dragged state layer opacity | md.comp.list.list-item.dragged.state-layer.opacity | 0.16 |
| List list item selected dragged state layer color | md.comp.list.list-item.selected.dragged.state-layer.color | #1D1B20 |
| List list item selected dragged state layer opacity | md.comp.list.list-item.selected.dragged.state-layer.opacity | 0.16 |
| List list item dragged leading icon color | md.comp.list.list-item.dragged.leading-icon.icon.color | #49454F |
| List list item selected dragged leading icon color | md.comp.list.list-item.selected.dragged.leading-icon.color | #1D1B20 |
| List list item dragged trailing icon color | md.comp.list.list-item.dragged.trailing-icon.icon.color | #49454F |
| List list item selected dragged trailing icon color | md.comp.list.list-item.selected.dragged.trailing-icon.color | #1D1B20 |

#### Spacing

| Token | Reference | Value |
|-------|-----------|-------|
| List list item leading space | md.comp.list.list-item.leading-space | 16dp |
| List list item trailing space | md.comp.list.list-item.trailing-space | 16dp |
| List list item top space | md.comp.list.list-item.top-space | 10dp |
| List list item bottom space | md.comp.list.list-item.bottom-space | 10dp |
| List list item between space | md.comp.list.list-item.between-space | 12dp |
| List list item divider leading space | md.comp.list.divider.leading-space | 16dp |
| List list item divider trailing space | md.comp.list.divider.trailing-space | 16dp |
| List list item divider top space | md.comp.list.divider.top-space | 0 |
| List list item divider bottom space | md.comp.list.divider.bottom-space | 0 |
| List segment gap | md.comp.list.segmented.gap | 2dp |

#### Shape

| Token | Reference | Value |
|-------|-----------|-------|
| List container shape | md.comp.list.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container shape | md.comp.list.list-item.container.shape | Shape: md.sys.shape.corner.none (Rounded, 0) |
| List list item container expressive shape | md.comp.list.list-item.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (Rounded, 4dp) |
| List list item container disabled expressive shape | md.comp.list.list-item.disabled.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (Rounded, 4dp) |
| List list item container hovered expressive shape | md.comp.list.list-item.hovered.container.expressive.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |
| List list item container focused expressive shape | md.comp.list.list-item.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container pressed expressive shape | md.comp.list.list-item.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container dragged expressive shape | md.comp.list.list-item.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected expressive shape | md.comp.list.list-item.selected.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected disabled expressive shape | md.comp.list.list-item.selected.disabled.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected hovered expressive shape | md.comp.list.list-item.selected.hovered.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected focsued expressive shape | md.comp.list.list-item.selected.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected pressed expressive shape | md.comp.list.list-item.selected.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item container selected dragged expressive shape | md.comp.list.list-item.selected.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |
| List list item leading avatar shape | md.comp.list.list-item.leading-avatar.shape | Shape: md.sys.shape.corner.full (Fully round, Circular) |
| List list item leading video shape | md.comp.list.list-item.leading-video.shape | Shape: md.sys.shape.corner.small (Rounded, 8dp) |
| List list item leading image shape | md.comp.list.list-item.leading-image.shape | Shape: md.sys.shape.corner.none (Rounded, 0) |
| List list item leading image expressive shape | md.comp.list.list-item.leading-image.expressive.shape | Shape: md.sys.shape.corner.small (Rounded, 8dp) |
| List list item selected container shape | md.comp.list.list-item.selected.container.shape | Shape: md.sys.shape.corner.large (Rounded, 16dp) |

#### Size and typography

| Token | Reference | Value |
|-------|-----------|-------|
| List list item leading avatar label type | md.comp.list.list-item.leading-avatar-label.type | Font: md.comp.list.list-item.leading-avatar-label.type (Roboto, 500, 16pt/24pt, 0.15pt) |
| List list item leading avatar size | md.comp.list.list-item.leading-avatar.size | 40dp |
| List list item leading avatar label font | md.comp.list.list-item.leading-avatar-label.font | Roboto |
| List list item leading avatar label line height | md.comp.list.list-item.leading-avatar-label.line-height | 24pt |
| List list item leading avatar label size | md.comp.list.list-item.leading-avatar-label.size | 16pt |
| List list item leading avatar label tracking | md.comp.list.list-item.leading-avatar-label.tracking | 0.15pt |
| List list item leading avatar label weight | md.comp.list.list-item.leading-avatar-label.weight | 500 |
| List list item leading icon size | md.comp.list.list-item.leading-icon.size | 24dp |
| List list item leading icon expressive size | md.comp.list.list-item.leading-icon.expressive.size | 20dp |
| List list item leading image width | md.comp.list.list-item.leading-image.width | 56dp |
| List list item leading image height | md.comp.list.list-item.leading-image.height | 56dp |
| List list item leading video width | md.comp.list.list-item.leading-video.width | 100dp |
| List list item small leading video width | md.comp.list.list-item.small.leading-video.width | 100dp |
| List list item small leading video height | md.comp.list.list-item.small.leading-video.height | 56dp |
| List list item large leading video width | md.comp.list.list-item.large.leading-video.width | 114dp |
| List list item large leading video height | md.comp.list.list-item.large.leading-video.height | 64dp |
| One line list item container height | md.comp.list.list-item.one-line.container.height | 56dp |
| Two lines list item container height | md.comp.list.list-item.two-line.container.height | 72dp |
| Three lines list item container height | md.comp.list.list-item.three-line.container.height | 88dp |
| List list item trailing icon size | md.comp.list.list-item.trailing-icon.size | 24dp |
| List list item trailing icon expressive size | md.comp.list.list-item.trailing-icon.expressive.size | 20dp |
| List list item label text type | md.comp.list.list-item.label-text.type | Font: md.comp.list.list-item.label-text.type (Roboto, 400, 16pt/24pt, 0.5pt) |
| List list item label text font | md.comp.list.list-item.label-text.font | Roboto |
| List list item label text line height | md.comp.list.list-item.label-text.line-height | 24pt |
| List list item label text size | md.comp.list.list-item.label-text.size | 16pt |
| List list item label text tracking | md.comp.list.list-item.label-text.tracking | 0.5pt |
| List list item label text weight | md.comp.list.list-item.label-text.weight | 400 |
| List list item trailing supporting text type | md.comp.list.list-item.trailing-supporting-text.type | Font: md.comp.list.list-item.trailing-supporting-text.type (Roboto, 500, 11pt/16pt, 0.5pt) |
| List list item trailing supporting text font | md.comp.list.list-item.trailing-supporting-text.font | Roboto |
| List list item trailing supporting text line height | md.comp.list.list-item.trailing-supporting-text.line-height | 16pt |
| List list item trailing supporting text size | md.comp.list.list-item.trailing-supporting-text.size | 11pt |
| List list item trailing supporting text tracking | md.comp.list.list-item.trailing-supporting-text.tracking | 0.5pt |
| List list item trailing supporting text weight | md.comp.list.list-item.trailing-supporting-text.weight | 500 |
| List list item supporting text type | md.comp.list.list-item.supporting-text.type | Font: md.comp.list.list-item.supporting-text.type (Roboto, 400, 14pt/20pt, 0.25pt) |
| List list item supporting text font | md.comp.list.list-item.supporting-text.font | Roboto |
| List list item supporting text line height | md.comp.list.list-item.supporting-text.line-height | 20pt |
| List list item supporting text size | md.comp.list.list-item.supporting-text.size | 14pt |
| List list item supporting text tracking | md.comp.list.list-item.supporting-text.tracking | 0.25pt |
| List list item supporting text weight | md.comp.list.list-item.supporting-text.weight | 400 |
| List list item overline type | md.comp.list.list-item.overline.type | Font: md.comp.list.list-item.overline.type (Roboto, 500, 11pt/16pt, 0.5pt) |
| List list item overline font | md.comp.list.list-item.overline.font | Roboto |
| List list item overline line height | md.comp.list.list-item.overline.line-height | 16pt |
| List list item overline size | md.comp.list.list-item.overline.size | 11pt |
| List list item overline tracking | md.comp.list.list-item.overline.tracking | 0.5pt |
| List list item overline weight | md.comp.list.list-item.overline.weight | 500 |
