# Search: Specs

When a person executes a search, results appear in a list below the search bar.

## Variants

| Variant | M3 | M3 Expressive |
|---------|----|----|
| Search | Available | Available |

## Configurations

### Style

Search comes in two styles:

- **Contained**: Has an M3 Expressive look and feel. It uses a filled container to separate a search bar from a list of suggestions or results.
- **Divided (baseline)**: Doesn't have the latest visual style, motion, or flexibility.

The contained style has a persistent, filled container, expressive motion, and rounded shape. The divided (baseline) style uses a divider to separate the search bar from suggestions and results.

### Layout

Search suggestions and results appear in customizable lists, with two layout options: full-screen and docked.

Full-screen layout in the contained style. Docked layout in the contained style.

Full-screen layout in the divided style. Docked layout in the divided style.

## Category Configuration

| Category | Configuration | M3 | M3 Expressive |
|----------|----------|----|----|
| Style | Contained | - | Available |
| Style | Divided | Available | Not recommended. Use contained. |
| Layout | Docked, full-screen | Available | Available |

## Anatomy

Search includes a search bar and a container for suggestions and results. The container is empty by default. Use the list component to add content. In the divided (baseline) style, a divider separates the search bar and results.

### Components

- Search bar container
- Leading icon
- Supporting text
- Trailing icon and avatar (optional)
- Input text
- Container for search suggestions or results

### Examples

- With avatar
- With one trailing icon button
- With two trailing icon buttons
- With trailing icon button and avatar

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens.

### Full-screen layout

Full-screen search color roles used in light and dark themes:
- Surface container low
- On surface variant
- On surface variant
- Surface container high
- On surface variant
- On surface

### Docked layout

Docked search color roles used in light and dark themes:
- Surface container high
- On surface variant
- On surface variant
- Surface container high
- On surface variant
- On surface

## States

States are visual representations used to communicate the status of a component or an interactive element. In focused search, individual elements maintain their own interaction states.

### Search bar

- Enabled
- Hovered
- Focused
- Pressed (ripple)

### Search suggestions & results

Search includes a container for suggestions and results. The container is empty by default. Use the list component to add content.

- Enabled
- Hovered
- Focused
- Pressed (ripple)

## Measurements

### Search bar

Unfocused search bar with leading and trailing icon measurements. Unfocused search bar with avatar measurements.

In M3 Expressive, the search bar expands when focused. The margins change from 24dp to 12dp.

Unfocused search bar margin measurements. Focused search bar margin measurements.

| Element | Attribute | Value |
|---------|-----------|-------|
| Container | Width | Min: 360dp, max: 720dp |
| Container | Height | 56dp |
| Label | alignment | Start-aligned |
| Leading padding | | Unfocused: 24dp, focused: 12dp |
| Trailing padding | | Unfocused: 24dp, focused: 12dp |
| Leading icon and label padding (from tap target) | | 4dp |
| Label and trailing icon padding (from tap target) | | 4dp |
| Avatar | Size | 30dp |

### Focused search - Contained style

#### Full-screen container

| Element | Attribute | Value |
|---------|-----------|-------|
| Container | Width | Full width |
| Container | Height | Full height |

#### Docked container

| Element | Attribute | Value |
|---------|-----------|-------|
| Container | Width | Min: 360dp, max: 720dp |
| Container | Height | Min: 240dp, max: 2/3 of screen height |
| Search bar container | Height | 56dp |
| Label | alignment | Start-aligned |
| Leading padding | | 16dp |
| Trailing padding | | 16dp |
| Leading icon and label padding (from tap target) | | 4dp |
| Label and label padding (from tap target) | | 4dp |

### Divided style

Full-screen search padding and size measurements for divided style. Docked search padding and size measurements for divided style.

## Tokens & Specs

The search bar set only contains tokens for the unfocused search bar. The search view set contains all other tokens when interacting with search, including all styles and layouts.

### Search - Bar


#### Color / Contained

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar contained container color | md.comp.search-bar.contained.container.color | #F5EFF7 |
| Search bar contained container elevation | md.comp.search-bar.contained.container.elevation | Elevation: md.sys.elevation.level0 (0) |
| Search bar contained leading icon color | md.comp.search-bar.contained.leading-icon.color | #49454F |
| Search bar contained trailing icon color | md.comp.search-bar.contained.trailing-icon.color | #49454F |
| Search bar contained input text color | md.comp.search-bar.contained.input-text.color | #1D1B20 |
| Search bar contained supporting text color | md.comp.search-bar.contained.supporting-text.color | #49454F |

#### Layout and Text / Contained

| Token | Reference | Value |
|-------|-----------|-------|
| Search bar contained pane leading margin | md.comp.search-bar.contained.leading-margin | 24dp |
| Search bar contained pane trailing margin | md.comp.search-bar.contained.trailing-margin | 24dp |
| Search bar contained motion | md.comp.search-bar.contained.motion.spring | Spring: dampening 0.9, stiffness 1400 |
| Search bar contained leading space | md.comp.search-bar.contained.leading-space | 4dp |
| Search bar contained trailing space | md.comp.search-bar.contained.trailing-space | 4dp |
| Search bar contained no actions leading space | md.comp.search-bar.contained.no-actions.leading-space | 16dp |
| Search bar contained no actions trailing space | md.comp.search-bar.contained.no-actions.trailing-space | 16dp |
| Search bar contained icon label gap | md.comp.search-bar.contained.icon-label.gap | 4dp |
| Search bar contained avatar target size | md.comp.search-bar.contained.avatar.target-size | 48dp |
| Search bar contained trailing actions gap | md.comp.search-bar.contained.trailing-actions.gap | 8dp |

### Search - View


#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| Search view container color | md.comp.search-view.container.color | #ECE6F0 |
| Search view contained background color | md.comp.search-view.contained.background.color | #F7F2FA |
| Search view container background elevation | md.comp.search-view.container.elevation | Elevation: md.sys.elevation.level0 (0) |
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
| Search view contained pane leading margin | md.comp.search-view.contained.leading-margin | 12dp |
| Search view contained pane trailing margin | md.comp.search-view.contained.trailing-margin | 12dp |

#### Layout and Text / Header

| Token | Reference | Value |
|-------|-----------|-------|
| Search view header supporting text type | md.comp.search-view.header.supporting-text.type | Font: md.sys.typescale.body-medium (Body Medium, 500, 14/20, 0.25) |
| Search view header supporting text font | md.comp.search-view.header.supporting-text.font | Roboto |
| Search view header supporting text line height | md.comp.search-view.header.supporting-text.line-height | 24pt |
| Search view header supporting text size | md.comp.search-view.header.supporting-text.size | 16pt |
| Search view header supporting text weight | md.comp.search-view.header.supporting-text.weight | 400 |
| Search view header supporting text tracking | md.comp.search-view.header.supporting-text.tracking | 0.5pt |
| Search view header input text type | md.comp.search-view.header.input-text.type | Font: md.sys.typescale.body-large (Body Large, 400, 16/24, 0.5) |
| Search view header input text font | md.comp.search-view.header.input-text.font | Roboto |
| Search view header input text line height | md.comp.search-view.header.input-text.line-height | 24pt |
| Search view header input text size | md.comp.search-view.header.input-text.size | 16pt |
| Search view header input text weight | md.comp.search-view.header.input-text.weight | 400 |
| Search view header input text tracking | md.comp.search-view.header.input-text.tracking | 0.5pt |
| Search view header trailing space | md.comp.search-view.header.trailing-space | 4dp |
| Search view header heading supporting space | md.comp.search-view.header.heading-supporting-space | 8dp |
| Search view header input trailing space | md.comp.search-view.header.input-trailing-space | 16dp |
