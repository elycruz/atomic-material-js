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
