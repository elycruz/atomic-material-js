# Navigation bar: Specs

## Variants

![The recommended flexible navigation bar.](https://lh3.googleusercontent.com/UvjUYsyF9gAgVOmfiC9h3zFaS-jU0wYws-HjqFyeiABhm3ubP8ZtHn__4wPEPmw3eR3D4C4O6sUeHVmdJ_IX9zTrzi1GmuiTUcQlauA2Fs-B=w40)

link Copy link Link copied The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. View baseline nav bar specs

![1 baseline navigation bar.](https://lh3.googleusercontent.com/PmEPtOw84s8SQu9KJJ0EX-gTgEL5PDGneaQfz9OVdFSXWjLd7P41B6qpIiWnAOuSfGl7JnCQOqa3Lfx8hZfXRG7HzJJNam-HCDFV1lfKvLlw=w40)

| Variant | M3 | M3 Expressive |
|---|---| --- |
| Flexible navigation bar | -- | Available |
| Navigation bar | Available | Not recommended.Use flexible navigation bar. |

## Configurations

link Copy link Link copied In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

![Two size configurations for navigation bar and items.](https://lh3.googleusercontent.com/p7YCl5pH99g_eM4-BCFHmEgxIdJxmb5UuE-CUwR8M9OjjPkNJpYAwQPZTAxamQBoiRr25F23T4mxDVNRUG3kESL--vZihbUkQWN04W9DAFiH=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---| --- |
| Navigation item layout | Vertical (default) | Available | Available |
| Horizontal | -- | Available |

## Tokens & specs

link Copy link Link copied Use the table's menu to switch between token sets for the navigation bar and the nav items. Learn about design tokens

### Nav bar - Common

#### Color / Enabled

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar container elevation | md.comp.nav-bar.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |
| Nav bar container shadow color | md.comp.nav-bar.container.shadow-color | #000000 |
| Nav bar container color | md.comp.nav-bar.container.color | #F3EDF7 |
| Nav bar item indicator color | md.comp.nav-bar.item.active.indicator.color | #E8DEF8 |
| Nav bar item active label text color | md.comp.nav-bar.item.active.label-text.color | #625B71 |
| Nav bar item inactive label text color | md.comp.nav-bar.item.inactive.label-text.color | #49454F |
| Nav bar item active icon color | md.comp.nav-bar.item.active.icon.color | #4A4458 |
| Nav bar item inactive icon color | md.comp.nav-bar.item.inactive.icon.color | #49454F |

#### Color / Hovered

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar item active hovered state layer color | md.comp.nav-bar.item.active.hovered.state-layer.color | #4A4458 |
| Nav bar item active hovered state layer opacity | md.comp.nav-bar.item.active.hovered.state-layer.opacity | 0.08 |
| Nav bar item inactive hovered state layer color | md.comp.nav-bar.item.inactive.hovered.state-layer.color | #4A4458 |

#### Color / Focused

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar item active focused state layer color | md.comp.nav-bar.item.active.focused.state-layer.color | #4A4458 |
| Nav bar item active focused state layer opacity | md.comp.nav-bar.item.active.focused.state-layer.opacity | 0.1 |
| Nav bar item inactive focused state layer color | md.comp.nav-bar.item.inactive.focused.state-layer.color | #4A4458 |

#### Color / Pressed

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar item active pressed state layer color | md.comp.nav-bar.item.active.pressed.state-layer.color | #4A4458 |
| Nav bar item active pressed state layer opacity | md.comp.nav-bar.item.active.pressed.state-layer.opacity | 0.1 |
| Nav bar item inactive pressed state layer color | md.comp.nav-bar.item.inactive.pressed.state-layer.color | #4A4458 |

#### Nav item

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar space between items | md.comp.nav-bar.item.between-space | 0 |
| Nav bar item shape | md.comp.nav-bar.item.active-indicator.shape | Shape: md.sys.shape.corner.full (rounded_corner, Fully round Circular) |
| Nav bar item space between icon label space | md.comp.nav-bar.item.active-indicator.icon-label-space | 4dp |
| Nav bar item icon size | md.comp.nav-bar.item.icon.size | 24dp |

#### Container

| Token | Reference | Value |
|-------|-----------| ------- |
| Nav bar height | md.comp.nav-bar.container.height | 64dp |
| Nav bar shape | md.comp.nav-bar.container.shape | Shape: md.sys.shape.corner.none (rounded_corner, Rounded 0) |

### Nav bar - Item - Vertical

### Nav bar - Item - Horizontal

## Anatomy

![Seven elements of the navigation bar.](https://lh3.googleusercontent.com/NkOIeqvJB7WxPg28DI-4uEHBrBfN38qDD2CWuX-NM2tTrxYwRknjdhOMzMCD1D9d65WN-Lzfo1Zg_B3G8Zk7pjT7Os-D2EfYGXQPDxawqpA=w40)

## Color

![Six color roles of the navigation bar.](https://lh3.googleusercontent.com/ec6ZkQGVtf5t0AOua9lhgucAZ31inD_mF4vm24sW2MeH8X2dK3xV1rpfoNuX6hlO5rU7wJVfCH0KMCt8Xqzl0qDIR668oCFEKb97YswmeuuC=w40)

link Copy link Link copied For badge color roles, go to badge specs

## States

![Four states of the navigation bar items.](https://lh3.googleusercontent.com/FTJk0MWbkT2YuqVJl3k8F57gmzTtSUKbQCovcet18WLLqbCMFFYds_DS65Sx8fzuFpEK6G_W5lmDc55s5ZUEpvBZIGM31aOI1psEFpn7GWnk=w40)

## Measurements

link Copy link Link copied The navigation bar stretches the full window width.

![Navigation bar padding and size measurements.](https://lh3.googleusercontent.com/zjuYI8XOBcjHmnNU2V9qHk9gbz3xJW9E2cEVE0Ov9Bh2fz8VI7RoISP5ykh9u5mqCXhF1nYKXT696Hfw-YIUMzX37jseGZdsA2bN_-YfErA=w40)

link Copy link Link copied Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

![Navigation bar and item widths.](https://lh3.googleusercontent.com/VMRrzRH_T07zMqRPwp1sLZPmkAVJVwQDqqrhuD-synkhADa-mjbbjtbh_tWZ4QZ9ael3lvNq52dhMRNCMOTZRh5aISTWk7bvSEt-vud2RGvW=w40)

link Copy link Link copied

![7 elements of baseline navigation bar.](https://lh3.googleusercontent.com/DBrM1eLC6HN2CNBg9Gr9UjPRuBgV0C7N3JLMzR2Y3nemUs8z0I71LTJM36azNtt45cWQiwISFwjAGc2G8coCUD9vfnIi-30wBlBw7OB1rSk=w40)

### Tokens & specs

link Copy link Link copied These tokens are for the baseline navigation bar.

### Color

![6 color roles of baseline navigation bar.](https://lh3.googleusercontent.com/iFtbyGfchUzulQmxsrcS-I7WwK9b3AywZsdXqs8Z1jIytViyh4uD1UC9qpNKi44ejAswfg-jDNjzVCkq8diuRU4130swhkqbtGDL508M2zU=w40)

link Copy link Link copied For badge color roles, go to badge specs

### States

![4 states of baseline navigation bar.](https://lh3.googleusercontent.com/Tz8X4rigXztIPIhpYB584wZpWuKYAEz4C4mIBNVQksaN4sRvl_eXy8dk9cwcWhM3iOfOJVLvlckzcDdPOScuGYJVhjvzuSAMRwpvZk2mdNOpTw=w40)

## Measurements

![Baseline navigation bar padding and size measurements.](https://lh3.googleusercontent.com/yZAR82Wh75nazTTTOrRenBXPtuOb1BG45198tsOGQMOTUk0QS_Ety_wa_9wsQRVXkBVii9TYrwCmSAiwxxlvHY95EetWd78rd4DPR-qTy3X-4Q=w40)

![Baseline navigation bar target size and margins.](https://lh3.googleusercontent.com/Cx_HLEfaqKx72AHNtDdP7raUEXmHCDKOWC40CCuYLkfYn6d93KRaJHBWdxVHOkoU22j4UAJJExrl3uQYnpFQ_wu895nHHKn8qNUXZVMtCwqT=w40)

## Configurations

![3 configurations of the baseline navigation bar.](https://lh3.googleusercontent.com/ALYNjmr0KKRFb33P4hKrUxeXha7V6L7eyz_izrbW4nGMgFfZtYjbLa7cHF3mxpWOr4TiAswFklndquusmv_dRJsruNjzu4ZSh7WgBrOCWDQ=w40)
