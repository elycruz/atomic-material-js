# App bars: Specs

## Variants

App bar variants include:
- Search app bar
- Small
- Medium flexible
- Large flexible

## Configurations

### Text alignment

Text labels, including supporting text, can be aligned to the leading edge or centered.

| Configuration | M3 | M3 Expressive |
|---------------|----|---------------|
| Text alignment - Leading edge (default) | Available | Available |
| Text alignment - Centered | -- | Available |

## Anatomy

Components:
- Container
- Leading button
- Trailing elements
- Headline
- Subtitle

App bars can be customized to include:
- An image or logo
- A subtitle
- A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions. The app bar can have different layouts depending on which elements are shown.

## Search app bar anatomy

Components:
- Leading icon button
- Hinted search text
- Trailing icon or avatar
- Search container
- Container

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view.

Configurations include:
- A leading element and a trailing element outside search
- A leading element, a trailing element inside search, and a trailing element outside search
- A leading element and two trailing elements outside search

## Images

Images can be placed in the app bar. In small app bars, this can replace the label text.

## Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

## Subtitle

The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible.

Configurations include:
- Small
- Small with subtitle
- Medium flexible
- Medium flexible with subtitle
- Large flexible
- Large flexible with subtitle

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

All app bars share the same color roles. On scroll, the container changes color to surface container.

### App bar color roles

Used for light and dark themes:
- Surface
- On surface
- On surface variant
- On surface
- On surface variant
- Surface container (on scroll)

### Search app bar color roles

Used for light and dark themes:
- Surface
- On surface variant
- On surface variant
- On surface variant
- Surface container
- Surface container
- Surface container highest

## Scroll states

The app bar changes color when flat or on scroll. The search bar can also change color on scroll.

States:
- Flat
- On scroll

## Measurements

### Search app bar

Search app bar padding and size measurements as specified in the design specifications.

### Small app bar

Small app bar padding and size measurements as specified in the design specifications.

### Medium flexible app bar

Medium flexible app bar padding and size measurements as specified in the design specifications.

### Large flexible app bar

Large flexible app bar padding and size measurements as specified in the design specifications.

## Tokens & Specs

### Search - Bar


#### Color

| Token | Reference | Value |
|-------|-----------|-------|

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

#### Layout and Text

| Token | Reference | Value |
|-------|-----------|-------|

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
| Search bar container shape | md.comp.search-bar.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Search bar avatar size | md.comp.search-bar.avatar.size | 30dp |
| Search bar avatar shape | md.comp.search-bar.avatar.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Search bar icon size | md.comp.search-bar.icon.size | 24dp |
| Search bar supporting text type | md.comp.search-bar.supporting-text.type | Font: md.comp.search-bar.supporting-text.type (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search bar supporting text font | md.comp.search-bar.supporting-text.font | Roboto |
| Search bar supporting text line height | md.comp.search-bar.supporting-text.line-height | 24pt |
| Search bar supporting text size | md.comp.search-bar.supporting-text.size | 16pt |
| Search bar supporting text weight | md.comp.search-bar.supporting-text.weight | 400 |
| Search bar supporting text tracking | md.comp.search-bar.supporting-text.tracking | 0.5pt |
| Search bar input text type | md.comp.search-bar.input-text.type | Font: md.comp.search-bar.input-text.type (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search bar input text font | md.comp.search-bar.input-text.font | Roboto |
| Search bar input text line height | md.comp.search-bar.input-text.line-height | 24pt |
| Search bar input text size | md.comp.search-bar.input-text.size | 16pt |
| Search bar input text weight | md.comp.search-bar.input-text.weight | 400 |
| Search bar input text tracking | md.comp.search-bar.input-text.tracking | 0.5pt |
| Search bar container surface tint layer color | md.comp.search-bar.container.surface-tint-layer.color | #6750A4 |

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

#### Layout and Text

| Token | Reference | Value |
|-------|-----------|-------|

#### Layout and Text / Contained (expressive)

| Token | Reference | Value |
|-------|-----------|-------|
| Search view contained leading margin | md.comp.search-view.contained.leading-margin | 12dp |
| Search view contained trailing margin | md.comp.search-view.contained.trailing-margin | 12dp |
| Search view contained docked bar results gap | md.comp.search-view.contained.docked.bar-results.gap | 2dp |
| Search view contained docked results shape | md.comp.search-view.contained.docked.results.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |
| Search view contained docked bar shape | md.comp.search-view.contained.docked.bar.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Search view contained full screen bar container height | md.comp.search-view.contained.full-screen.bar.container.height | 56dp |
| Search view contained icon label gap | md.comp.search-view.contained.icon-label.gap | 4dp |

#### Layout and Text / Divided (baseline)

| Token | Reference | Value |
|-------|-----------|-------|
| Search view docked container shape | md.comp.search-view.docked.container.shape | Shape: md.sys.shape.corner.extra-large (Rounded, 28dp) |
| Search view full screen header container height | md.comp.search-view.full-screen.header.container.height | 72dp |
| Search view docked header container height | md.comp.search-view.docked.header.container.height | 56dp |
| Search view leading space | md.comp.search-view.leading-space | 16dp |
| Search view trailing space | md.comp.search-view.trailing-space | 16dp |
| Search view leading icon leading icon label space | md.comp.search-view.leading-icon.leading-icon-label-space | 16dp |
| Search view trailing icon label trailing icon space | md.comp.search-view.trailing-icon.label-trailing-icon-space | 16dp |

#### Layout and Text / Common tokens

| Token | Reference | Value |
|-------|-----------|-------|
| Search view full screen container shape | md.comp.search-view.full-screen.container.shape | Shape: md.sys.shape.corner.none (Rounded) |
| Search view header supporting text type | md.comp.search-view.header.supporting-text.type | Font: md.comp.search-view.header.supporting-text.type (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search view header supporting text font | md.comp.search-view.header.supporting-text.font | Roboto |
| Search view header supporting text line height | md.comp.search-view.header.supporting-text.line-height | 24pt |
| Search view header supporting text size | md.comp.search-view.header.supporting-text.size | 16pt |
| Search view header supporting text weight | md.comp.search-view.header.supporting-text.weight | 400 |
| Search view header supporting text tracking | md.comp.search-view.header.supporting-text.tracking | 0.5pt |
| Search view header input text type | md.comp.search-view.header.input-text.type | Font: md.comp.search-view.header.input-text.type (Roboto, 400, 16pt/24pt, 0.5pt) |
| Search view header input text font | md.comp.search-view.header.input-text.font | Roboto |
| Search view header input text line height | md.comp.search-view.header.input-text.line-height | 24pt |
| Search view header input text size | md.comp.search-view.header.input-text.size | 16pt |
| Search view header input text weight | md.comp.search-view.header.input-text.weight | 400 |
| Search view header input text tracking | md.comp.search-view.header.input-text.tracking | 0.5pt |

### App bar - Size - Large Flexible


| Token | Reference | Value |
|-------|-----------|-------|
| App bar large flexible container height | md.comp.app-bar.large-flexible.container.height | 120dp |
| App bar large flexible container height with subtitle | md.comp.app-bar.large-flexible.with-subtitle.container.height | 152dp |
| App bar large Title font | md.comp.app-bar.large-flexible.title.font | Font: md.comp.app-bar.large-flexible.title.font (App bar large Title font, 400, 36pt/44pt, 0) |
| App bar large Subtitle font | md.comp.app-bar.large-flexible.subtitle.font | Font: md.comp.app-bar.large-flexible.subtitle.font (App bar large Subtitle font, 500, 16pt/24pt, 0.15pt) |

### App bar - Size - Medium Flexible


| Token | Reference | Value |
|-------|-----------|-------|
| App bar medium flexible container height | md.comp.app-bar.medium-flexible.container.height | 112dp |
| App bar medium flexible container height with subtitle | md.comp.app-bar.medium-flexible.with-subtitle.container.height | 136dp |
| App bar medium Title font | md.comp.app-bar.medium-flexible.title.font | Font: md.comp.app-bar.medium-flexible.title.font (App bar medium Title font, 400, 28pt/36pt, 0) |
| App bar medium Subtitle font | md.comp.app-bar.medium-flexible.subtitle.font | Font: md.comp.app-bar.medium-flexible.subtitle.font (App bar medium Subtitle font, 500, 14pt/20pt, 0.1pt) |

### App bar - Size - Small


| Token | Reference | Value |
|-------|-----------|-------|
| App bar small container height | md.comp.app-bar.small.container.height | 64dp |
| App bar small title font | md.comp.app-bar.small.title.font | Font: md.comp.app-bar.small.title.font (App bar small title font, 400, 22pt/28pt, 0) |
| App bar small subtitle font | md.comp.app-bar.small.subtitle.font | Font: md.comp.app-bar.small.subtitle.font (App bar small subtitle font, 500, 12pt/16pt, 0.5pt) |
| App bar small icon button size | md.comp.app-bar.small.icon.size | 24dp |
| Search container height | md.comp.app-bar.small.search.container.height | 56dp |
| Search container shape | md.comp.app-bar.small.search.container.shape | Shape: md.sys.shape.corner.full (Fully round) |
| Search title font | md.comp.app-bar.small.search.label-text.font | Font: md.comp.app-bar.small.search.label-text.font (Search title font, 400, 16pt/24pt, 0.5pt) |

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
| App bar container shape | md.comp.app-bar.container.shape | Shape: md.sys.shape.corner.none (Rounded) |

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar avatar size | md.comp.app-bar.avatar.size | 32dp |
| App bar icon size | md.comp.app-bar.icon.size | 24dp |

## Baseline variants

The baseline M3 medium and large app bars are no longer recommended in M3 Expressive, and should be replaced with medium flexible and large flexible app bars.

Baseline variants:
- Medium
- Large

### Variant availability

| Variant | M3 | M3 Expressive |
|---------|-----|---------------|
| Search app bar | -- | Available |
| Small | Available | Available |
| Small (Center-aligned) | Available | Available |
| Medium (baseline) | Available | Not recommended. Use medium flexible |
| Medium flexible | -- | Available |
| Large (baseline) | Available | Not recommended. Use large flexible |
| Large flexible | -- | Available |

## Baseline app bars (not recommended)

The medium and large app bars are no longer recommended in M3 Expressive. Use the medium flexible and large flexible app bars in their place.

### Anatomy

Components:
- Container
- Leading button
- Trailing icons
- Headline

### Measurements

#### Medium app bar

Medium app bar padding and size measurements as specified in the design specifications.

#### Large app bar

Large app bar padding and size measurements as specified in the design specifications.

### Color

Medium top app bar color roles used for light and dark schemes:
- Surface
- On surface
- On surface
- On surface variant
