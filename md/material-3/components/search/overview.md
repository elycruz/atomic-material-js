# Search: Overview

Use search for navigating a product with queries. A search bar can include a leading search icon, hinted search text, and optional trailing icons. Search can display suggested keywords or phrases as a person types. A search bar displays search suggestions or results in a list. Lists are continuous, vertical indexes of text and images. Use a search app bar to provide an emphasized, global entry-point. App bars contain page navigation and information at the top of a screen.

![M2 open search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1gn7s-04.png?alt=media)

![M3 search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1hcrs-05.png?alt=media)

## When inputting text

When inputting text, search suggestions or results appear below the search bar.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | android MDC-Android | Available |
| Implementation | android MDC-Android Expressive | Unavailable |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android Jetpack Compose: Expressive | Available |
| Implementation | language Web | Unavailable |
| Implementation | language Web: Expressive | Unavailable |

## M3 Expressive update

Search has a new visual style, motion, and more flexibility for trailing icons.

## Configurations

- **Styles**: Search can be contained (recommended) or divided
- **Gaps**: can separate results into groups

## Motion

The search bar grows wider when focused.

Supported platforms: Jetpack Compose

The contained search style features a persistent, filled search container.

## Differences from M2 to M3 baseline

- **Color**: New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
- **Elevation**: Lower elevation and no shadow by default
- **Name**: Search was formerly known as open search bar
- **Variants**: Two official variants of search components: search bar and search view

M2 open search bars were square and elevated. M3 search bars are rounded, use tonal surface, and support dynamic color.
