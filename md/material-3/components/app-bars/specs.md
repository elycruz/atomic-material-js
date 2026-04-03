# Top app bar: Specs

## Variants

![4 variants of app bars.](https://lh3.googleusercontent.com/MgtUMHWDy00vUnks39ztFGEG28QfDRkbQeSEcmqqCBT0K5FWc4uP_-7g3LLkrMJC-g76aUQW1xsZQ9AyyGhpc5G3-_Cs_d-CCP7HTCk6LlVi=w40)

### Baseline variants

![2 baseline app bar variants, medium and large.](https://lh3.googleusercontent.com/4jbnUGWxs16YDyExE7HfAtikzuBERI0C_O6PT00TGtEezDt5SyYIv-V3mUOU_fOoUYk9hJ4uowBcG1c5bR86ChJqq1RQIhbX8Yp4YTMNnBP7CA=w40)

| Variant | M3 | M3 Expressive |
|---|---|---|
| Search app bar | -- | Available |
| Small | Available | Available |
| Center-aligned | Available | Merged into small. Use centered-text configuration. |
| Medium (baseline) | Available | Not recommended.Use medium flexible |
| Medium flexible | -- | Available |
| Large (baseline) | Available | Not recommended.Use large flexible |
| Large flexible | -- | Available |

## Configurations

### Text alignment

![4 variants of app bars with different left and center aligned text headlines.](https://lh3.googleusercontent.com/BOvvsqx3bdHcU0IHwgEXTkgiwJuhU9DOQ6kiQLIdTQ8qiU9YfauXCNFb6HxOTs-PbX7r-OTeqQBlOav0aNXzUSe6JfDHP8zw2jDorA65wQo=w40)

| Category | Configuration | M3 | M3 Expressive |
|---|---|---|---|
| Text alignment | Leading edge (default) | Available | Available |
| Centered | -- | Available |

## Tokens & specs

### App bar - Common

#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| App bar container color | md.comp.app-bar.container.color | #FEF7FF |
| Search container color | md.comp.app-bar.search.container.color | #F3EDF7 |
| Search label color | md.comp.app-bar.search.label.color | #49454F |
| App bar container color on scroll | md.comp.app-bar.on-scroll.container.color | #F3EDF7 |
| Search container color on scroll | md.comp.app-bar.search.on-scroll.container.color | #E6E0E9 |
| App bar container elevation | md.comp.app-bar.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| App bar container elevation on scroll | md.comp.app-bar.on-scroll.container.elevation | Elevation: md.sys.elevation.level2 (3dp) |
| App bar title text | md.comp.app-bar.title.color | #1D1B20 |
| App bar subtitle text | md.comp.app-bar.subtitle.color | #49454F |
| App bar leading icon | md.comp.app-bar.leading-icon.color | #1D1B20 |
| App bar trailing icon | md.comp.app-bar.trailing-icon.color | #49454F |

#### Spacing

| Token | Reference | Value |
|-------|-----------|-------|
| App bar left padding | md.comp.app-bar.leading-space | 4dp |
| App bar right padding | md.comp.app-bar.trailing-space | 4dp |
| App bar icon spacing | md.comp.app-bar.icon-button-space | 0 |
| Search left padding | md.comp.app-bar.search.leading-space | 8dp |
| Search right padding | md.comp.app-bar.search.trailing-space | 8dp |

#### Shape

| Token | Reference | Value |
|-------|-----------|-------|
| App bar container shape | md.comp.app-bar.container.shape | Shape: md.sys.shape.corner.none (rounded_corner) |

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar avatar size | md.comp.app-bar.avatar.size | 32dp |
| App bar icon size | md.comp.app-bar.icon.size | 24dp |

### App bar - Size - Small

| Token | Reference | Value |
|-------|-----------|-------|
| App bar small container height | md.comp.app-bar.small.container.height | 64dp |
| App bar small title font | md.comp.app-bar.small.title.font | Font: ? (Roboto, 400, 22pt/28pt, 0) |
| App bar small subtitle font | md.comp.app-bar.small.subtitle.font | Font: ? (Roboto, 500, 12pt/16pt, 0.5pt) |
| Search container height | md.comp.app-bar.small.search.container.height | 56dp |
| Search container shape | md.comp.app-bar.small.search.container.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Search title font | md.comp.app-bar.small.search.label-text.font | Font: ? (Roboto, 400, 16pt/24pt, 0.5pt) |

### App bar - Size - Medium Flexible

| Token | Reference | Value |
|-------|-----------|-------|
| App bar medium flexible container height | md.comp.app-bar.medium-flexible.container.height | 112dp |
| App bar medium flexible container height with subtitle | md.comp.app-bar.medium-flexible.with-subtitle.container.height | 136dp |
| App bar medium Title font | md.comp.app-bar.medium-flexible.title.font | Font: ? (Roboto, 400, 28pt/36pt, 0) |
| App bar medium Subtitle font | md.comp.app-bar.medium-flexible.subtitle.font | Font: ? (Roboto, 500, 14pt/20pt, 0.1pt) |

### App bar - Size - Large Flexible

| Token | Reference | Value |
|-------|-----------|-------|
| App bar large flexible container height | md.comp.app-bar.large-flexible.container.height | 120dp |
| App bar large flexible container height with subtitle | md.comp.app-bar.large-flexible.with-subtitle.container.height | 152dp |
| App bar large Title font | md.comp.app-bar.large-flexible.title.font | Font: ? (Roboto, 400, 36pt/44pt, 0) |
| App bar large Subtitle font | md.comp.app-bar.large-flexible.subtitle.font | Font: ? (Roboto, 500, 16pt/24pt, 0.15pt) |

### Search component tokens & specs

### Search - View

#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| Search view container color | md.comp.search-view.container.color | #ECE6F0 |
| Search view contained background color | md.comp.search-view.contained.background.color | #F7F2FA |
| Search view container background elevation | md.comp.search-view.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Search view header supporting text color | md.comp.search-view.header.supporting-text.color | #49454F |
| Search view header input text color | md.comp.search-view.header.input-text.color | #1D1B20 |
| Search view header leading icon color | md.comp.search-view.header.leading-icon.color | #1D1B20 |
| Search view header trailing icon color | md.comp.search-view.header.trailing-icon.color | #49454F |
| Search view divider color | md.comp.search-view.divider.color | #79747E |

#### Layout and Text / Contained (expressive)

| Token | Reference | Value |
|-------|-----------|-------|
| Search view contained leading margin | md.comp.search-view.contained.leading-margin | 12dp |
| Search view contained trailing margin | md.comp.search-view.contained.trailing-margin | 12dp |
| Search view contained docked bar results gap | md.comp.search-view.contained.docked.bar-results.gap | 2dp |
| Search view contained docked results shape | md.comp.search-view.contained.docked.results.shape | Shape: md.sys.shape.corner.medium (rounded_corner, 12dp) |
| Search view contained docked bar shape | md.comp.search-view.contained.docked.bar.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Search view contained full screen bar container height | md.comp.search-view.contained.full-screen.bar.container.height | 56dp |
| Search view contained icon label gap | md.comp.search-view.contained.icon-label.gap | 4dp |

#### Layout and Text / Divided (baseline)

| Token | Reference | Value |
|-------|-----------|-------|
| Search view docked container shape | md.comp.search-view.docked.container.shape | Shape: md.sys.shape.corner.extra-large (rounded_corner, 28dp) |
| Search view full screen header container height | md.comp.search-view.full-screen.header.container.height | 72dp |
| Search view docked header container height | md.comp.search-view.docked.header.container.height | 56dp |
| Search view leading space | md.comp.search-view.leading-space | 16dp |
| Search view trailing space | md.comp.search-view.trailing-space | 16dp |
| Search view leading icon leading icon label space | md.comp.search-view.leading-icon.leading-icon-label-space | 16dp |
| Search view trailing icon label trailing icon space | md.comp.search-view.trailing-icon.label-trailing-icon-space | 16dp |

#### Layout and Text / Common tokens

| Token | Reference | Value |
|-------|-----------|-------|
| Search view full screen container shape | md.comp.search-view.full-screen.container.shape | Shape: md.sys.shape.corner.none (rounded_corner) |
| Search view header supporting text type | md.comp.search-view.header.supporting-text.type | Font: ? (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search view header supporting text font | md.comp.search-view.header.supporting-text.font | Roboto |
| Search view header supporting text line height | md.comp.search-view.header.supporting-text.line-height | 24pt |
| Search view header supporting text size | md.comp.search-view.header.supporting-text.size | 16pt |
| Search view header supporting text weight | md.comp.search-view.header.supporting-text.weight | 400 |
| Search view header supporting text tracking | md.comp.search-view.header.supporting-text.tracking | 0.5pt |
| Search view header input text type | md.comp.search-view.header.input-text.type | Font: ? (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search view header input text font | md.comp.search-view.header.input-text.font | Roboto |
| Search view header input text line height | md.comp.search-view.header.input-text.line-height | 24pt |
| Search view header input text size | md.comp.search-view.header.input-text.size | 16pt |
| Search view header input text weight | md.comp.search-view.header.input-text.weight | 400 |
| Search view header input text tracking | md.comp.search-view.header.input-text.tracking | 0.5pt |

### Search - Bar

#### Color / Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar container color | md.comp.search-bar.container.color | #ECE6F0 |
| Search bar container elevation | md.comp.search-bar.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Search bar leading icon color | md.comp.search-bar.leading-icon.color | #1D1B20 |
| Search bar trailing icon color | md.comp.search-bar.trailing-icon.color | #49454F |
| Search bar supporting text color | md.comp.search-bar.supporting-text.color | #49454F |
| Search bar input text color | md.comp.search-bar.input-text.color | #1D1B20 |

#### Color / Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar hover state layer color | md.comp.search-bar.hover.state-layer.color | #1D1B20 |
| Search bar hover state layer opacity | md.comp.search-bar.hover.state-layer.opacity | 0.08 |
| Search bar hover supporting text color | md.comp.search-bar.hover.supporting-text.color | #49454F |

#### Color / Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar pressed state layer color | md.comp.search-bar.pressed.state-layer.color | #1D1B20 |
| Search bar pressed state layer opacity | md.comp.search-bar.pressed.state-layer.opacity | 0.1 |
| Search bar pressed supporting text color | md.comp.search-bar.pressed.supporting-text.color | #49454F |

#### Color / Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar focus indicator color | md.comp.search-bar.focus.indicator.color | #625B71 |
| Search bar focus indicator thickness | md.comp.search-bar.focus.indicator.thickness | 3dp |
| Search bar focus indicator offset | md.comp.search-bar.focus.indicator.outline.offset | 2dp |

#### Layout and Text / Contained (expressive)

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar contained pane leading margin | md.comp.search-bar.contained.leading-margin | 24dp |
| Search bar contained pane trailing margin | md.comp.search-bar.contained.trailing-margin | 24dp |
| Search bar contained motion | md.comp.search-bar.contained.motion.spring | md.comp.search-bar.contained.motion.spring |
| Search bar contained leading space | md.comp.search-bar.contained.leading-space | 4dp |
| Search bar contained trailing space | md.comp.search-bar.contained.trailing-space | 4dp |
| Search bar contained no actions leading space | md.comp.search-bar.contained.no-actions.leading-space | 16dp |
| Search bar contained no actions trailing space | md.comp.search-bar.contained.no-actions.trailing-space | 16dp |
| Search bar contained icon label gap | md.comp.search-bar.contained.icon-label.gap | 4dp |
| Search bar contained avatar target size | md.comp.search-bar.contained.avatar.target-size | 48dp |
| Search bar contained trailing actions gap | md.comp.search-bar.contained.trailing-actions.gap | 0 |
| Search bar contained trailing actions leading space | md.comp.search-bar.contained.trailing-actions.leading-space | 4dp |
| Search bar contained trailing actions trailing space | md.comp.search-bar.contained.trailing-actions.trailing-space | 4dp |

#### Layout and Text / Baseline

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar leading space | md.comp.search-bar.leading-space | 16dp |
| Search bar trailing space | md.comp.search-bar.trailing-space | 16dp |
| Search bar leading icon leading icon label space | md.comp.search-bar.leading-icon.leading-icon-label-space | 16dp |
| Search bar trailing icon label trailing icon space | md.comp.search-bar.trailing-icon.label-trailing-icon-space | 16dp |

#### Layout and Text / Common tokens

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar container height | md.comp.search-bar.container.height | 56dp |
| Search bar container shape | md.comp.search-bar.container.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Search bar avatar size | md.comp.search-bar.avatar.size | 30dp |
| Search bar avatar shape | md.comp.search-bar.avatar.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Search bar icon size | md.comp.search-bar.icon.size | 24dp |
| Search bar supporting text type | md.comp.search-bar.supporting-text.type | Font: ? (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search bar supporting text font | md.comp.search-bar.supporting-text.font | Roboto |
| Search bar supporting text line height | md.comp.search-bar.supporting-text.line-height | 24pt |
| Search bar supporting text size | md.comp.search-bar.supporting-text.size | 16pt |
| Search bar supporting text weight | md.comp.search-bar.supporting-text.weight | 400 |
| Search bar supporting text tracking | md.comp.search-bar.supporting-text.tracking | 0.5pt |
| Search bar input text type | md.comp.search-bar.input-text.type | Font: ? (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search bar input text font | md.comp.search-bar.input-text.font | Roboto |
| Search bar input text line height | md.comp.search-bar.input-text.line-height | 24pt |
| Search bar input text size | md.comp.search-bar.input-text.size | 16pt |
| Search bar input text weight | md.comp.search-bar.input-text.weight | 400 |
| Search bar input text tracking | md.comp.search-bar.input-text.tracking | 0.5pt |

## Anatomy

![5 elements of the component.](https://lh3.googleusercontent.com/UCS56fBRH7I7KiKUuK_vBKPDUCV85-8G25OIOM9PxyVN3dgUEozWDPgj2liGjw8OI7X5PTD6n2Icr1V7sZOS-nxTjMPTIth4wlj9KfX7kUth=w40)

![3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button.](https://lh3.googleusercontent.com/Fwsip8AL-32WvFsouymOxtfDAK9nsgZu6JggbrZsEe1uIQ8Tm8E48NLKY4SPX1C687pcmu65V9xyHu3pme-1kwEyl5YsC1OFfJAKZlLlAGmI=w40)

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view The search view is a full-screen modal often used to display a list of search results. It can also be opened by selecting a search icon. More on search view component.

![5 elements of the search app bar.](https://lh3.googleusercontent.com/OCgIkeJ9Mk6ibxz6tz0uSYOLL4zgYINQJdBhE0uqKG_KivTrv_i-4wbgiz0sNLxmAymZPsvXyPnH2i49hWvgI39jvCv0yra8PF-vnxPR3xFt=w40)

![3 layouts of icons in the search app bar.](https://lh3.googleusercontent.com/T7dF8lnMsgF-ctH-bJxhvlTFNYfNCtaKFJ3_kWhNeWOT70jVcz5e2K6dcCMdvyTEMMwCh0VusP7U_cQT5PbY5eBTpwClU8jQPYWIUhRPfLImPA=w40)

### Image

![Graphic replacing text headline content.](https://lh3.googleusercontent.com/rM0ncqi1MU1B-iUCqpNvS1r6GIsPwybXwHKtPEB0hAo1k3NMLM3dqUpH_NK-k9vOlihsEFSneMWwVTYCaF5nWJOEPpRUupcrtmDHCB0C3d8a=w40)

### Filled trailing icon button

![App bars configured with filled trailing icons.](https://lh3.googleusercontent.com/-4xgb9ld5H8Q6HnmK-ld1O5qM0mfNJy_2WtE_WggmW1lbxjvzZp6GwimCbCZ92GiXuzdak-pBH-hlzbZ-oyphKRiho2Myrlsaal8-7UtKjqa=w40)

### Subtitle

![App bars configured with subtitles below their headlines.](https://lh3.googleusercontent.com/v37338PXuQO2QKzvv6eDPG3ATToEprV5f1RbgAP6J85Kkk5uUpqPb3M3U7L3YgKxNTDd_UlhkKMBrpc3PYRL8WgyTS5aax6L2gOQWYwxfsRo=w40)

## Color

![4 color roles of the leading edge app bar in light and dark scheme.](https://lh3.googleusercontent.com/xpRALH4p7nwRTCrQbJRWXJjjKyr6SI9Lcz7DShFjgvTK8Zsvl45I69Y-m1OfJcWkp9Cc3cOV4UyCqZzo60kRaRSgGeatz80PbrGnGv1DQpXO=w40)

![4 color roles of the center-aligned app bar in light and dark scheme.](https://lh3.googleusercontent.com/VsxxC6080HgD_QsQ6TLzafi0UFXVHAU3R4k2NDE144aZQBU9CYNjEOCd7tPTV3ur_gcYzZJO3LezRLYaNLoPcQnYpyuyQyH-C8KLRv1eIC2C=w40)

### Scroll states

![Color roles for app bars when flat and on scroll.](https://lh3.googleusercontent.com/tRaHBa-YYJoR3wAF4m6Sr9plFPu3juGtThHBYYsKPfs-6nHxwPrhg7vEpJfwSA6hfyjHrl6k4Tzh4Z6WC95kDllNp9Q5nYiRXO_KpYBKsrIqiQ=w40)

## Measurements

### Search app bar

![Search app bar size and padding measurements.](https://lh3.googleusercontent.com/GLzA-Bs2FesMv8_iNKDnGK-rmtF4_QBlkamCvjO3g0PR4Ohvu51Whqg_8UDbMF2Be0V0fNt2yy_YIYhbkBa3RaH32GCEcE7CYs7Qk7aJDWg=w40)

### Small app bar

![Small app bar size and padding measurements.](https://lh3.googleusercontent.com/ZwtGrnk6IwZVeEjENYgXaaBm1o78pMZeWbKEvSKrXMaC4EsY1x5d6AyMOmeP5xBxsEtomfWPfRQeyjo9aj5TUCZfqTZ6DExOrrf4lPD6skGwOQ=w40)

### Medium flexible app bar

![Medium flexible app bar padding and size measurements.](https://lh3.googleusercontent.com/tO6HUsX_WzDWijRcUovy7YHYqXB9nFkpIdJ1rb9xRF1f53fb5lfigX2U4DhrYnf54WpJxf_VMpqs2fVNtnQwzv1gxreCwgyge4K5p9WC71BK=w40)

### Large flexible app bar

![Large flexible app bar padding and size measurements](https://lh3.googleusercontent.com/LZMvu4Uh6hlTMMN4lXncpG5Pl1yEm5A90QCK9BFFHrKogTsNr1PAWKpJ0su8E4BmXMOdKMzH3jk2BGZJcqrSGZ1AFOK40R6D9QHkBuhtEqgI=w40)
