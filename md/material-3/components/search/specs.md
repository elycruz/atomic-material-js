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

## Tokens & specs

The search bar set only contains tokens for the unfocused search bar. The search view set contains all other tokens when interacting with search, including all styles and layouts.

### Search view container

- Surface tint layer color: #6750A4

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
