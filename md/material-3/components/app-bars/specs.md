# App bars: Specs

## Variants

App bar variants include:
- Search app bar
- Small
- Medium flexible
- Large flexible

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

## Tokens & Specs

### App bar - Common

#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| App bar container color | md.comp.app-bar.container.color | #FEF7FF |
| Search container color | md.comp.app-bar.search.container.color | #F3EDF7 |
| Search label color | md.comp.app-bar.search.label.color | #49454F |
| App bar container color on scroll | md.comp.app-bar.on-scroll.container.color | #F3EDF7 |
| Search container color on scroll | md.comp.app-bar.search.on-scroll.container.color | #E6E0E9 |
| App bar container elevation | md.comp.app-bar.container.elevation | Elevation: level0 (0dp) |
| App bar container elevation on scroll | md.comp.app-bar.on-scroll.container.elevation | Elevation: level1 (1dp) |
| App bar title text | md.comp.app-bar.title.color | #1D1B20 |
| App bar subtitle text | md.comp.app-bar.subtitle.color | #49454F |
| App bar leading icon | md.comp.app-bar.leading-icon.color | #1D1B20 |
| App bar trailing icon | md.comp.app-bar.trailing-icon.color | #49454F |

#### Spacing

| Token | Reference | Value |
|-------|-----------|-------|
| App bar left padding | md.comp.app-bar.leading-space | 4dp |
| App bar right padding | md.comp.app-bar.trailing-space | 4dp |
| App bar icon spacing | md.comp.app-bar.icon-button-space | 0dp |
| Search left padding | md.comp.app-bar.search.leading-space | 8dp |
| Search right padding | md.comp.app-bar.search.trailing-space | 8dp |

#### Shape

| Token | Reference | Value |
|-------|-----------|-------|
| App bar container shape | md.comp.app-bar.container.shape | Shape: corner.none (No shape, Sharp) |

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar avatar size | md.comp.app-bar.avatar.size | 32dp |
| App bar icon size | md.comp.app-bar.icon.size | 24dp |

### App bar - Size - Small

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar small container height | md.comp.app-bar.small.container.height | 64dp |

### App bar - Size - Medium Flexible

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar medium flexible container height | md.comp.app-bar.medium-flexible.container.height | 80dp |
| App bar medium flexible title font | md.comp.app-bar.medium-flexible.title.font | Font: Roboto 500 28pt/34pt tracking 0pt |

### App bar - Size - Large Flexible

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar large flexible container height | md.comp.app-bar.large-flexible.container.height | 152dp |
| App bar large flexible title font | md.comp.app-bar.large-flexible.title.font | Font: Roboto 400 32pt/40pt tracking 0pt |

### Search - View

#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| Search view container surface tint layer color | md.comp.search-view.container.surface-tint-layer.color | #6750A4 |

### App bar - Size - Medium (baseline)

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| App bar medium container height | md.comp.app-bar.medium.container.height | 112dp |
| App bar medium title font | md.comp.app-bar.medium.title.font | Font: Roboto 500 24pt/28pt tracking 0pt |
| App bar medium icon button size | md.comp.app-bar.medium.icon.size | 24dp |
| App bar medium subtitle font | md.comp.app-bar.medium.subtitle.font | Font: Roboto 400 16pt/24pt tracking 0.5pt |
