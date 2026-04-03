# Lists: Specs

## Variants

### Expressive lists

![2 expressive lists: a photos list on a tablet, and a song list on mobile.](https://lh3.googleusercontent.com/za34_v9MVYFLgx4_LMophxugdmjrYW0gWSPfWtA_ntmDC74Lx_qID9YyOa7IEqJ73xCrYnCAXghjFmDugBK86DdvpEUUKbkfWTYCA2pV5iwt=w40)

![3 baseline list items with square corners.](https://lh3.googleusercontent.com/N4Dqm-y0qh8NW2KuKAqcRAmf_oyfUyeY2HgR3cHvoCwL-cM6j7fuAg97gGrX73Rs25WTv-POEG1ZSlXeyFPRkjhexmngaaSJMDJV0azeZXhV=w40)

| Variants | M3 | M3 Expressive |
|---|---| --- |
| List (expressive) | -- | Available |
| List (baseline) | Available | Available |

## Configurations

### Styles

![A standard list and segmented list in dark mode.](https://lh3.googleusercontent.com/AjWZ3hS3wVVBYsai8chTl-DhNYum8MkyLgX24Q1dLLV43O6P2gRIbTqcrvQMXwyFG9Jai3R-zExVwkBZ5A3QZGW4EryAzfylOS6N0FB1brD8=w40)

### List selection modes

![A single-action list with 4 items and no additional actions.](https://lh3.googleusercontent.com/b5GgNFwCct9zCo3T-5FIclsjz95tsQWzwwptHqyfIs9ooGmMg8C4FLlknKKmivn_ho5bbYRLRnaxophUvZLmKrLqm1bkGF4tEyHNR4_CObV0og=w40)

![A list with 1 item selected.](https://lh3.googleusercontent.com/N1XQO63f9X32oDtv-OfmhY2QXVt4JpIIbZVk7BmB_2FcLR7QDWORgKJOQkA81-R5pujkxNiZHTMRgjMuAcytlrMERtLFsohNDJDu888bY3g=w40)

### List interactions

link Copy link Link copied Expand On Android, lists can expand and collapse pause A list can expand to include multiple items

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Styles | Standard | Available | Available |
| Segmented | -- | Available |
| Selection modes | Single-action, multi-action,single-select, multi-select | Available | Available |
| Interactions | Expand | Available | Available |

## Tokens & specs

### List - Common

#### Color / Enabled

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item container color | md.comp.list.list-item.container.color | #FEF7FF |
| List list item segmented container color | md.comp.list.list-item.segmented.container.color | #FEF7FF |
| List list item label text color | md.comp.list.list-item.label-text.color | #1D1B20 |
| List list item supporting text color | md.comp.list.list-item.supporting-text.color | #49454F |
| List list item overline color | md.comp.list.list-item.overline.color | #49454F |
| List list item leading icon color | md.comp.list.list-item.leading-icon.color | #49454F |
| List list item trailing icon color | md.comp.list.list-item.trailing-icon.color | #49454F |
| List list item unselected trailing icon color | md.comp.list.list-item.unselected.trailing-icon.color | #1D1B20 |
| List list item trailing supporting text color | md.comp.list.list-item.trailing-supporting-text.color | #49454F |
| List list item leading avatar color | md.comp.list.list-item.leading-avatar.color | #EADDFF |
| List list item leading avatar label color | md.comp.list.list-item.leading-avatar-label.color | #4F378B |
| List list item container elevation | md.comp.list.list-item.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Color / Enabled - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected container color | md.comp.list.list-item.selected.container.color | #E8DEF8 |
| List list item selected label text color | md.comp.list.list-item.selected.label-text.color | #4A4458 |
| List list item selected supporting text color | md.comp.list.list-item.selected.supporting-text.color | #4A4458 |
| List list item selected trailing supporting text color | md.comp.list.list-item.selected.trailing-supporting-text.color | #4A4458 |
| List list item selected leading icon color | md.comp.list.list-item.selected.leading-icon.color | #4A4458 |
| List list item selected trailing icon color | md.comp.list.list-item.selected.trailing-icon.color | #4A4458 |
| List list item selected overline color | md.comp.list.list-item.selected.overline.color | #4A4458 |

#### Color / Disabled

| Token | Reference | Value |
|-------|-----------| ------- |
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
|-------|-----------| ------- |
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
|-------|-----------| ------- |
| List list item hover state layer color | md.comp.list.list-item.hover.state-layer.color | #1D1B20 |
| List list item hover state layer opacity | md.comp.list.list-item.hover.state-layer.opacity | 0.08 |
| List list item hover label text color | md.comp.list.list-item.hover.label-text.color | #1D1B20 |
| List list item hover leading icon color | md.comp.list.list-item.hover.leading-icon.icon.color | #49454F |
| List list item hover trailing icon color | md.comp.list.list-item.hover.trailing-icon.icon.color | #49454F |

#### Color / Hovered - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected hover state layer color | md.comp.list.list-item.selected.hover.state-layer.color | #1D1B20 |
| List list item selected hover state layer opacity | md.comp.list.list-item.selected.hover.state-layer.opacity | 0.08 |
| List list item selected hover label text color | md.comp.list.list-item.selected.hover.label-text.color | #4A4458 |
| List list item selected hover leading icon color | md.comp.list.list-item.selected.hover.leading-icon.color | #1D1B20 |
| List list item selected hover trailing icon color | md.comp.list.list-item.selected.hover.trailing-icon.color | #1D1B20 |

#### Color / Focused

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item focus state layer color | md.comp.list.list-item.focus.state-layer.color | #1D1B20 |
| List list item focus state layer opacity | md.comp.list.list-item.focus.state-layer.opacity | 0.1 |
| List list item focus label text color | md.comp.list.list-item.focus.label-text.color | #1D1B20 |
| List list item focus leading icon color | md.comp.list.list-item.focus.leading-icon.icon.color | #49454F |
| List list item focus trailing icon color | md.comp.list.list-item.focus.trailing-icon.icon.color | #49454F |

#### Color / Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item focus indicator color | md.comp.list.focus.indicator.color | #625B71 |
| List list item focus indicator thickness | md.comp.list.focus.indicator.thickness | 3dp |
| List list item focus indicator offset | md.comp.list.focus.indicator.outline.offset | -3dp |

#### Color / Focused - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected focus state layer color | md.comp.list.list-item.selected.focus.state-layer.color | #1D1B20 |
| List list item selected focus state layer opacity | md.comp.list.list-item.selected.focus.state-layer.opacity | 0.1 |
| List list item selected focus label text color | md.comp.list.list-item.selected.focus.label-text.color | #4A4458 |
| List list item selected focus leading icon color | md.comp.list.list-item.selected.focus.leading-icon.color | #1D1B20 |
| List list item selected focus trailing icon color | md.comp.list.list-item.selected.focus.trailing-icon.color | #1D1B20 |

#### Color / Pressed (ripple)

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item pressed state layer color | md.comp.list.list-item.pressed.state-layer.color | #1D1B20 |
| List list item pressed state layer opacity | md.comp.list.list-item.pressed.state-layer.opacity | 0.1 |
| List list item pressed label text color | md.comp.list.list-item.pressed.label-text.color | #1D1B20 |
| List list item pressed leading icon color | md.comp.list.list-item.pressed.leading-icon.icon.color | #49454F |
| List list item pressed trailing icon color | md.comp.list.list-item.pressed.trailing-icon.icon.color | #49454F |

#### Color / Pressed - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected pressed state layer color | md.comp.list.list-item.selected.pressed.state-layer.color | #1D1B20 |
| List list item selected pressed state layer opacity | md.comp.list.list-item.selected.pressed.state-layer.opacity | 0.1 |
| List list item selected pressed label text color | md.comp.list.list-item.selected.pressed.label-text.color | #4A4458 |
| List list item selected pressed trailing icon color | md.comp.list.list-item.selected.pressed.trailing-icon.color | #1D1B20 |
| List list item selected pressed leading icon color | md.comp.list.list-item.selected.pressed.leading-icon.color | #1D1B20 |

#### Color / Dragged (baseline only)

| Token | Reference | Value |
|-------|-----------| ------- |
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
|-------|-----------| ------- |
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
|-------|-----------| ------- |
| List container shape | md.comp.list.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container shape | md.comp.list.list-item.container.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |
| List list item container expressive shape | md.comp.list.list-item.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (rounded_corner, Rounded 4dp) |
| List list item container disabled expressive shape | md.comp.list.list-item.disabled.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (rounded_corner, Rounded 4dp) |
| List list item container hovered expressive shape | md.comp.list.list-item.hovered.container.expressive.shape | Shape: md.sys.shape.corner.medium (rounded_corner, Rounded 12dp) |
| List list item container focused expressive shape | md.comp.list.list-item.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container pressed expressive shape | md.comp.list.list-item.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container dragged expressive shape | md.comp.list.list-item.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected expressive shape | md.comp.list.list-item.selected.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected disabled expressive shape | md.comp.list.list-item.selected.disabled.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected hovered expressive shape | md.comp.list.list-item.selected.hovered.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected focsued expressive shape | md.comp.list.list-item.selected.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected pressed expressive shape | md.comp.list.list-item.selected.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected dragged expressive shape | md.comp.list.list-item.selected.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item leading avatar shape | md.comp.list.list-item.leading-avatar.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| List list item leading video shape | md.comp.list.list-item.leading-video.shape | Shape: md.sys.shape.corner.small (rounded_corner, Rounded 8dp) |
| List list item leading image shape | md.comp.list.list-item.leading-image.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |
| List list item leading image expressive shape | md.comp.list.list-item.leading-image.expressive.shape | Shape: md.sys.shape.corner.small (rounded_corner, Rounded 8dp) |
| List list item selected container shape | md.comp.list.list-item.selected.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |

#### Size and typography

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item leading avatar label type | md.comp.list.list-item.leading-avatar-label.type | Aa |
| List list item leading avatar size | md.comp.list.list-item.leading-avatar.size | 40dp |
| List list item leading avatar label font | md.comp.list.list-item.leading-avatar-label.font | List list item leading avatar label font md.comp.list.list-item.leading-avatar-label.font Roboto md.sys.typescale.title-medium.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
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
| List list item label text type | md.comp.list.list-item.label-text.type | Aa |
| List list item label text font | md.comp.list.list-item.label-text.font | List list item label text font md.comp.list.list-item.label-text.font Roboto md.sys.typescale.body-large.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item label text line height | md.comp.list.list-item.label-text.line-height | 24pt |
| List list item label text size | md.comp.list.list-item.label-text.size | 16pt |
| List list item label text tracking | md.comp.list.list-item.label-text.tracking | 0.5pt |
| List list item label text weight | md.comp.list.list-item.label-text.weight | 400 |
| List list item trailing supporting text type | md.comp.list.list-item.trailing-supporting-text.type | Aa |
| List list item trailing supporting text font | md.comp.list.list-item.trailing-supporting-text.font | List list item trailing supporting text font md.comp.list.list-item.trailing-supporting-text.font Roboto md.sys.typescale.label-small.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item trailing supporting text line height | md.comp.list.list-item.trailing-supporting-text.line-height | 16pt |
| List list item trailing supporting text size | md.comp.list.list-item.trailing-supporting-text.size | 11pt |
| List list item trailing supporting text tracking | md.comp.list.list-item.trailing-supporting-text.tracking | 0.5pt |
| List list item trailing supporting text weight | md.comp.list.list-item.trailing-supporting-text.weight | 500 |
| List list item supporting text type | md.comp.list.list-item.supporting-text.type | Aa |
| List list item supporting text font | md.comp.list.list-item.supporting-text.font | List list item supporting text font md.comp.list.list-item.supporting-text.font Roboto md.sys.typescale.body-medium.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item supporting text line height | md.comp.list.list-item.supporting-text.line-height | 20pt |
| List list item supporting text size | md.comp.list.list-item.supporting-text.size | 14pt |
| List list item supporting text tracking | md.comp.list.list-item.supporting-text.tracking | 0.25pt |
| List list item supporting text weight | md.comp.list.list-item.supporting-text.weight | 400 |
| List list item overline type | md.comp.list.list-item.overline.type | Aa |
| List list item overline font | md.comp.list.list-item.overline.font | List list item overline font md.comp.list.list-item.overline.font Roboto md.sys.typescale.label-small.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item overline line height | md.comp.list.list-item.overline.line-height | 16pt |
| List list item overline size | md.comp.list.list-item.overline.size | 11pt |
| List list item overline tracking | md.comp.list.list-item.overline.tracking | 0.5pt |
| List list item overline weight | md.comp.list.list-item.overline.weight | 500 |

### List - Expand

#### Color

| Token | Reference | Value |
|-------|-----------| ------- |
| List expand expanded list item container color | md.comp.list.expand.expanded.list-item.container.color | #FEF7FF |
| List expand expanded list item segmented container color | md.comp.list.expand.expanded.list-item.segmented.container.color | #FEF7FF |
| List expand collapsed list item trailing icon container color | md.comp.list.expand.collapsed.list-item.trailing-icon.container.color | #FEF7FF |
| List expand collapsed list item trailing icon icon color | md.comp.list.expand.collapsed.list-item.trailing-icon.icon.color | #1D1B20 |
| List expand expanded list item trailing icon container color | md.comp.list.expand.expanded.list-item.trailing-icon.container.color | #F3EDF7 |
| List expand expanded list item trailing icon icon color | md.comp.list.expand.expanded.list-item.trailing-icon.icon.color | #1D1B20 |

#### Shape

| Token | Reference | Value |
|-------|-----------| ------- |
| List expand container shape | md.comp.list.expand.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List expand trailing icon shape | md.comp.list.expand.trailing-icon.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |

## Anatomy

![Diagram with 10 elements that can be included in lists.](https://lh3.googleusercontent.com/Sa8xghsBnkEPnF8eS5BsRjuohsdTmqbkr_f1sENLSXj6Vvj60a-fAE32n9nUI8ErJeIbxkQPPl7wExD8qwxOM1aUbjPPV60s-E5vfR6EN6i7=w40)

### Flexibility & slots

![A diagram with leading, content, and trailing slots.](https://lh3.googleusercontent.com/xpDca9BbXlTiv20zpU4gfBwt6MkKXaY5ZNLRcxAljGC5QsVXgH3mKaHiaEI6okSs2gUhacnLEdM2zCIC5raKpqBZl476yJ8Qchx5bxvt6Kywwg=w40)

link Copy link Link copied warning Caution: Slots require custom code implementation that you must create and maintain

![Slot diagram showing slot placement in the middle of the list.](https://lh3.googleusercontent.com/jx4zxtSR4RN6N-1sCYapnbcg_EJOMuolnJBIPdx5aR9tEJ3PB1VtfNmemVGd-IKUMyPhpg1xj2FOUwBYzeekhv1rOIX4bE33jmMPNbV10RTL8w=w40)

![A selected list item with a checkmark in the leading slot.](https://lh3.googleusercontent.com/_cCLtqaTv3_VJ2Su5-NcT91PPqYvyAFZeK-5w0av-NbLChQrKPvD3HSBWsc6adlc9M1DQGkIVd_eisASsmoVyA_2nO23ObPXfcuLp6O9sMU=w40)

## Color

link Copy link Link copied Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens

![10 list element color roles in light mode and dark mode.](https://lh3.googleusercontent.com/ARd2jFHJp7QY8tjQqnTd9qITF5sD6WqWXpapVsC25_-ej0okbpB1kkGYkJ8V7jSl-iFv0cW18ZGseOUM3x1CqZflXxkdU7T4znEQ0bJ3qCvx=w40)

## States

link Copy link Link copied States are visual representations used to communicate the status of a component or an interactive element. Learn more about interaction states

### Default list items

![6 default list states in light and dark mode.](https://lh3.googleusercontent.com/WfsQdzz9ydTMtaG8lRdHEb8GmuDilZ3RVX7fNys6QemgIc3Euv0bnB2eKnFMZNxvApj-l2ZNNVTtCrgdS3CfuR6FmBFEv8ppLObmmykaM6yO=w40)

### Selected list items

![6 selected list states in light and dark mode.](https://lh3.googleusercontent.com/plktb9RXA8a9SyxyQIpnF8qX_hMwZP0_SIXh-vuSRreRX9e8DbpLs90qXW4rIrtZyNyTmEbJTYmenlpK0EjS_q6HyaoZmb4ERojsZU2trNc=w40)

## Measurements

![Size and padding measurements for list items.](https://lh3.googleusercontent.com/i93JWmCnwH8J71-rjNfpGP1SCy_v1gjfHOkLAph3y86kvhmpo9uT_x75vfDsKz_NxDbnt9C5GWA4xX0rba-hRzTmxtfWPw-zncFBcbmzKiLm=w40)

link Copy link Link copied The baseline Baseline variants are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles. More on M3 Expressive list variant is available and continues to work in existing products. However, the expressive list variant is recommended for new designs.

### Tokens & specs

### List - Common

#### Color / Enabled

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item container color | md.comp.list.list-item.container.color | #FEF7FF |
| List list item segmented container color | md.comp.list.list-item.segmented.container.color | #FEF7FF |
| List list item label text color | md.comp.list.list-item.label-text.color | #1D1B20 |
| List list item supporting text color | md.comp.list.list-item.supporting-text.color | #49454F |
| List list item overline color | md.comp.list.list-item.overline.color | #49454F |
| List list item leading icon color | md.comp.list.list-item.leading-icon.color | #49454F |
| List list item trailing icon color | md.comp.list.list-item.trailing-icon.color | #49454F |
| List list item unselected trailing icon color | md.comp.list.list-item.unselected.trailing-icon.color | #1D1B20 |
| List list item trailing supporting text color | md.comp.list.list-item.trailing-supporting-text.color | #49454F |
| List list item leading avatar color | md.comp.list.list-item.leading-avatar.color | #EADDFF |
| List list item leading avatar label color | md.comp.list.list-item.leading-avatar-label.color | #4F378B |
| List list item container elevation | md.comp.list.list-item.container.elevation | Elevation: md.sys.elevation.level0 (0) |

#### Color / Enabled - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected container color | md.comp.list.list-item.selected.container.color | #E8DEF8 |
| List list item selected label text color | md.comp.list.list-item.selected.label-text.color | #4A4458 |
| List list item selected supporting text color | md.comp.list.list-item.selected.supporting-text.color | #4A4458 |
| List list item selected trailing supporting text color | md.comp.list.list-item.selected.trailing-supporting-text.color | #4A4458 |
| List list item selected leading icon color | md.comp.list.list-item.selected.leading-icon.color | #4A4458 |
| List list item selected trailing icon color | md.comp.list.list-item.selected.trailing-icon.color | #4A4458 |
| List list item selected overline color | md.comp.list.list-item.selected.overline.color | #4A4458 |

#### Color / Disabled

| Token | Reference | Value |
|-------|-----------| ------- |
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
|-------|-----------| ------- |
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
|-------|-----------| ------- |
| List list item hover state layer color | md.comp.list.list-item.hover.state-layer.color | #1D1B20 |
| List list item hover state layer opacity | md.comp.list.list-item.hover.state-layer.opacity | 0.08 |
| List list item hover label text color | md.comp.list.list-item.hover.label-text.color | #1D1B20 |
| List list item hover leading icon color | md.comp.list.list-item.hover.leading-icon.icon.color | #49454F |
| List list item hover trailing icon color | md.comp.list.list-item.hover.trailing-icon.icon.color | #49454F |

#### Color / Hovered - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected hover state layer color | md.comp.list.list-item.selected.hover.state-layer.color | #1D1B20 |
| List list item selected hover state layer opacity | md.comp.list.list-item.selected.hover.state-layer.opacity | 0.08 |
| List list item selected hover label text color | md.comp.list.list-item.selected.hover.label-text.color | #4A4458 |
| List list item selected hover leading icon color | md.comp.list.list-item.selected.hover.leading-icon.color | #1D1B20 |
| List list item selected hover trailing icon color | md.comp.list.list-item.selected.hover.trailing-icon.color | #1D1B20 |

#### Color / Focused

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item focus state layer color | md.comp.list.list-item.focus.state-layer.color | #1D1B20 |
| List list item focus state layer opacity | md.comp.list.list-item.focus.state-layer.opacity | 0.1 |
| List list item focus label text color | md.comp.list.list-item.focus.label-text.color | #1D1B20 |
| List list item focus leading icon color | md.comp.list.list-item.focus.leading-icon.icon.color | #49454F |
| List list item focus trailing icon color | md.comp.list.list-item.focus.trailing-icon.icon.color | #49454F |

#### Color / Focused / Focus indicator

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item focus indicator color | md.comp.list.focus.indicator.color | #625B71 |
| List list item focus indicator thickness | md.comp.list.focus.indicator.thickness | 3dp |
| List list item focus indicator offset | md.comp.list.focus.indicator.outline.offset | -3dp |

#### Color / Focused - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected focus state layer color | md.comp.list.list-item.selected.focus.state-layer.color | #1D1B20 |
| List list item selected focus state layer opacity | md.comp.list.list-item.selected.focus.state-layer.opacity | 0.1 |
| List list item selected focus label text color | md.comp.list.list-item.selected.focus.label-text.color | #4A4458 |
| List list item selected focus leading icon color | md.comp.list.list-item.selected.focus.leading-icon.color | #1D1B20 |
| List list item selected focus trailing icon color | md.comp.list.list-item.selected.focus.trailing-icon.color | #1D1B20 |

#### Color / Pressed (ripple)

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item pressed state layer color | md.comp.list.list-item.pressed.state-layer.color | #1D1B20 |
| List list item pressed state layer opacity | md.comp.list.list-item.pressed.state-layer.opacity | 0.1 |
| List list item pressed label text color | md.comp.list.list-item.pressed.label-text.color | #1D1B20 |
| List list item pressed leading icon color | md.comp.list.list-item.pressed.leading-icon.icon.color | #49454F |
| List list item pressed trailing icon color | md.comp.list.list-item.pressed.trailing-icon.icon.color | #49454F |

#### Color / Pressed - Selected

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item selected pressed state layer color | md.comp.list.list-item.selected.pressed.state-layer.color | #1D1B20 |
| List list item selected pressed state layer opacity | md.comp.list.list-item.selected.pressed.state-layer.opacity | 0.1 |
| List list item selected pressed label text color | md.comp.list.list-item.selected.pressed.label-text.color | #4A4458 |
| List list item selected pressed trailing icon color | md.comp.list.list-item.selected.pressed.trailing-icon.color | #1D1B20 |
| List list item selected pressed leading icon color | md.comp.list.list-item.selected.pressed.leading-icon.color | #1D1B20 |

#### Color / Dragged (baseline only)

| Token | Reference | Value |
|-------|-----------| ------- |
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
|-------|-----------| ------- |
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
|-------|-----------| ------- |
| List container shape | md.comp.list.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container shape | md.comp.list.list-item.container.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |
| List list item container expressive shape | md.comp.list.list-item.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (rounded_corner, Rounded 4dp) |
| List list item container disabled expressive shape | md.comp.list.list-item.disabled.container.expressive.shape | Shape: md.sys.shape.corner.extra-small (rounded_corner, Rounded 4dp) |
| List list item container hovered expressive shape | md.comp.list.list-item.hovered.container.expressive.shape | Shape: md.sys.shape.corner.medium (rounded_corner, Rounded 12dp) |
| List list item container focused expressive shape | md.comp.list.list-item.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container pressed expressive shape | md.comp.list.list-item.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container dragged expressive shape | md.comp.list.list-item.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected expressive shape | md.comp.list.list-item.selected.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected disabled expressive shape | md.comp.list.list-item.selected.disabled.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected hovered expressive shape | md.comp.list.list-item.selected.hovered.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected focsued expressive shape | md.comp.list.list-item.selected.focused.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected pressed expressive shape | md.comp.list.list-item.selected.pressed.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item container selected dragged expressive shape | md.comp.list.list-item.selected.dragged.container.expressive.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |
| List list item leading avatar shape | md.comp.list.list-item.leading-avatar.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| List list item leading video shape | md.comp.list.list-item.leading-video.shape | Shape: md.sys.shape.corner.small (rounded_corner, Rounded 8dp) |
| List list item leading image shape | md.comp.list.list-item.leading-image.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |
| List list item leading image expressive shape | md.comp.list.list-item.leading-image.expressive.shape | Shape: md.sys.shape.corner.small (rounded_corner, Rounded 8dp) |
| List list item selected container shape | md.comp.list.list-item.selected.container.shape | Shape: md.sys.shape.corner.large (rounded_corner, Rounded 16dp) |

#### Size and typography

| Token | Reference | Value |
|-------|-----------| ------- |
| List list item leading avatar label type | md.comp.list.list-item.leading-avatar-label.type | Aa |
| List list item leading avatar size | md.comp.list.list-item.leading-avatar.size | 40dp |
| List list item leading avatar label font | md.comp.list.list-item.leading-avatar-label.font | List list item leading avatar label font md.comp.list.list-item.leading-avatar-label.font Roboto md.sys.typescale.title-medium.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
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
| List list item label text type | md.comp.list.list-item.label-text.type | Aa |
| List list item label text font | md.comp.list.list-item.label-text.font | List list item label text font md.comp.list.list-item.label-text.font Roboto md.sys.typescale.body-large.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item label text line height | md.comp.list.list-item.label-text.line-height | 24pt |
| List list item label text size | md.comp.list.list-item.label-text.size | 16pt |
| List list item label text tracking | md.comp.list.list-item.label-text.tracking | 0.5pt |
| List list item label text weight | md.comp.list.list-item.label-text.weight | 400 |
| List list item trailing supporting text type | md.comp.list.list-item.trailing-supporting-text.type | Aa |
| List list item trailing supporting text font | md.comp.list.list-item.trailing-supporting-text.font | List list item trailing supporting text font md.comp.list.list-item.trailing-supporting-text.font Roboto md.sys.typescale.label-small.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item trailing supporting text line height | md.comp.list.list-item.trailing-supporting-text.line-height | 16pt |
| List list item trailing supporting text size | md.comp.list.list-item.trailing-supporting-text.size | 11pt |
| List list item trailing supporting text tracking | md.comp.list.list-item.trailing-supporting-text.tracking | 0.5pt |
| List list item trailing supporting text weight | md.comp.list.list-item.trailing-supporting-text.weight | 500 |
| List list item supporting text type | md.comp.list.list-item.supporting-text.type | Aa |
| List list item supporting text font | md.comp.list.list-item.supporting-text.font | List list item supporting text font md.comp.list.list-item.supporting-text.font Roboto md.sys.typescale.body-medium.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item supporting text line height | md.comp.list.list-item.supporting-text.line-height | 20pt |
| List list item supporting text size | md.comp.list.list-item.supporting-text.size | 14pt |
| List list item supporting text tracking | md.comp.list.list-item.supporting-text.tracking | 0.25pt |
| List list item supporting text weight | md.comp.list.list-item.supporting-text.weight | 400 |
| List list item overline type | md.comp.list.list-item.overline.type | Aa |
| List list item overline font | md.comp.list.list-item.overline.font | List list item overline font md.comp.list.list-item.overline.font Roboto md.sys.typescale.label-small.font arrow_downward md.ref.typeface.plain arrow_downward font_download Typeface Roboto |
| List list item overline line height | md.comp.list.list-item.overline.line-height | 16pt |
| List list item overline size | md.comp.list.list-item.overline.size | 11pt |
| List list item overline tracking | md.comp.list.list-item.overline.tracking | 0.5pt |
| List list item overline weight | md.comp.list.list-item.overline.weight | 500 |

### Color

![9 baseline list element color roles in light and dark mode.](https://lh3.googleusercontent.com/c7bwcYNZe1HFiYuQW2r1uEEhDr_8PMPrgH911ney_P2AQnEZ64a34YKs47JbQnNjPbrtMfhw0FA7oQ3T1Euqx9HQ45ItoppUNl_7LUN5dX8=w40)

### States

![6 baseline list states in light and dark mode.](https://lh3.googleusercontent.com/5lf9R5VeSpT9MZ52tQ1Gr9G6LJSo3T61BAkwRTHYYL4e0_ymdXq3TFfAieV8fBpokbyEkAP1dql3Z23YsmOgHwTzZclYa1v5eLG9J7lTYcJu=w40)

### Layout

![Alignment, padding, and size specifications for baseline list items with 1 line of text.](https://lh3.googleusercontent.com/z9QvwXHZzQCURyxwHxCKWIzN9bFCueiLYqnmwebzTymL8CQV6SfHPmE39ptDMlyCdxfAYa3ymS7TFM3eWfJEHnzXOq7ndUBAoqGr211VXq-K=w40)

![Measurements for a 3-item list with 1 line each.](https://lh3.googleusercontent.com/khpu5JdGUDNFXqPEgOJ5ZWoXXvptYxD57jKRlck-ECQ1ge8a4pIcPdajOsbR3theeOCNLC8HoON7F71IWL5LsM5dFl_74zbveiiwPsZnriIqtQ=w40)

link Copy link Link copied Two-line lists

![Alignment, padding, and size specifications for baseline list items with 2 lines of text.](https://lh3.googleusercontent.com/LxLM2jQt0STwJFF6mM7jaAxeP09Gu8KXxM8a2gg_tCprAziEoUSMbqhONXIWU-yKoahTjXATtmhpqTaSxfe7x7UoAhhTD157g0YkJwJS-tse=w40)

![Measurements for a 3-item list with 2 lines each.](https://lh3.googleusercontent.com/UIM_5cKOrqy1Jgy2wF6ND6qMT0cXmrXlqkqpSr1hUtJoShVECpFJt1jn39e7aoczco9L3ABwR7O4gd366Fdwg7tfQnWGas_8LRAM0LWM7z0NRg=w40)

link Copy link Link copied Three-line lists

![Alignment, padding, and size specifications for baseline list items with 3 lines of text.](https://lh3.googleusercontent.com/eoubrmM-Nl9VlpagzZuJBlQ7Ze1c-LjzmdIfk2sIxw16gjTgSUXdPTTLa1P1o1klSZk9SP6JZjG3BrVkBCnvatvekRTyo1Qkq2SoN5eSHEWy=w40)

![Measurements for a 3-item list with 3 lines each.](https://lh3.googleusercontent.com/mX9bAsTDGyRcmgR60R9k2JBak4FqR4Iq5BHj_D9vHhsd3GwzcWjsnjvUzz4UDdrcd4KZE27gqKYtovW1ejGeDrnmqzdeoUULLnR8dLqTLZsf=w40)

| Attribute | Value |
|---| --- |
| Label alignment | Center |
| Label alignment when height is 88dp or taller | Top |
| Label left padding | 16dp |
| Leading element alignment (vertical) | Center |
| Leading element alignment (vertical) when height is 88dp or taller | Top |
| Leading element left padding | 16dp |
| Leading icon alignment (vertical) | Top |
| Leading icon top padding | 8dp |
| Leading icon top padding when height is 88dp or taller | 12dp |
| Trailing element alignment (vertical) | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top |
| Trailing element left padding | 16dp |
| Trailing element right padding | 24dp |
| Padding above/below divider | 0dp |
| Targets | 48dp |
| Divider full-width | 100% |
| Divider inset left padding | 16dp |
| Divider inset right padding | 24dp |

### Configurations

link Copy link Link copied Leading avatar

![1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/YtV6g40j9-XQCPCAVu67QZhyyBxdzXse8Aq4zgVnIWxg5eL0YP-62b5XRWhoQFLGZ77XDbPLnnLnc6cQrbdVy0vdd5Qop9rt2L0vbVMrGlw=w40)

link Copy link Link copied Leading image or thumbnail

![1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/7K4R5eQvQLtvBGZ8iDlPrwl6-HftUdcPx0S6MRj8QLMuQMLlHQXj0EYkvlawvcIQOlaTsf1CAq8GIXC-zPanjI8B5o0Wznt8P_Os0Bir_Fq92A=w40)

link Copy link Link copied Leading video

![1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/811g1L2vKGQ0BTtqAoZPO-jApLgGPEDiV-7oi308iwDk-GrwrWTuQmCkNSok5-5XqCp7iNaldpc6cnpOL2Xe1RfUSfURXuucBF8O5k5WUomf=w40)

link Copy link Link copied Leading icon

![1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/F_D2HGWtWYSMxDVgfkIRpfgvy8O26m5Gq1uzE8tvEuo9m9sMLfRhcnuVfZSE6hyxoICYNuSzjIfA1yRVpcXvaJG1b02lEpkYn-l0scGCQTmt=w40)

link Copy link Link copied Text-only

![1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/0D-xONvUbyoPV0EMlMrBItgWHQXbW1IV2dBVpIslSFeHc0mUoHbJsP3y9on5ym7Ch1ICbFcFH7026UzSdnQvTABrsRQhYe8yRiG2imFaK00=w40)

link Copy link Link copied Leading checkbox

![1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode.](https://lh3.googleusercontent.com/3pOgKx-2c1N3ewCJ-joHRZ0IFwf-GHaxzimTyF_4-SYx_80TL6UnaBywa7ogFoCCil_KQgEFXoNmwKuXP_6dGsFC0uMqCLGE5qQpUqHOGdrxZQ=w40)

link Copy link Link copied Leading radio button

![1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode.](https://lh3.googleusercontent.com/-Eph6i5PJ8k8D5ABIpITkh-WLe2a-gMsM-sq2qCDM1cFBVfQN3FGAYAwiryrXRkrF8-8Q3Exypco2Ir4iP0s0IRbZ_n-ZvFI2ZTuNUzz7bs=w40)

link Copy link Link copied Trailing switch

![1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode.](https://lh3.googleusercontent.com/6qcPlbTkPuUN2vByfw3QiZU3_haTWYgitgstbbYGI9ugO1r8LknZ2RPovveQ18B9EOKQNu5robyVqrQs0AvZchLuQXeckUeWZEn2meby2vkA=w40)
