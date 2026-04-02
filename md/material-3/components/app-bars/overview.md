# App bars: Overview

Displays labels and page navigation controls at the top of the page. (Use a toolbar to display page actions).

Focus on describing the current page and provide 1–2 essential actions.

## Variants

Four variants: Search app bar, small, medium flexible, large flexible.

![4 configurations of app bars stacked vertically to show differences.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2FmlktxqJf-01.png?alt=media)

## Features

- On scroll, apply a fill color to separate from body content
- Can animate on and off screen with another bar of controls, like a row of chips

![4 total app bar configurations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlku5356-05.png?alt=media)

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android Jetpack Compose: Expressive | Available |
| Implementation | android MDC-Android | Available |
| Implementation | android MDC-Android: Expressive | Available |
| Implementation | Web | Unavailable |
| Implementation | Web: Expressive | Unavailable |

## M3 Expressive update

The new search app bar supports icons inside and outside the search bar, and centered text. It opens the search view component when selected. The new medium flexible and large flexible app bars come with significant improvements, and should replace medium and large app bars, which are no longer recommended. The small app bar is updated with the same flexible improvements.

### Variants and naming

- Renamed component from top app bar to app bar
- Added search app bar
- Medium and large app bars are no longer recommended
- Added medium flexible and large flexible app bars with:
  - Reduced overall height
  - Larger title text
  - Subtitle
  - Left- and center-aligned text options
  - Text wrapping
  - More flexible elements for imagery and filled buttons
- Added features to small app bar:
  - Subtitle
  - Center-aligned text option
  - More flexible elements for imagery and filled buttons

## Differences from M2

**Color:** New color mappings and compatibility with dynamic color

**On scroll:** No drop shadow, instead a color fill creates separation from content

**Typography:** Larger default text

**Layout:** Smaller default height

M2: Elevation and a drop shadow raise the top app bar when content is present underneath

M3: On scroll, a color fill overlay separates the app bar from the content beneath

![M2 top app bar with elevation to separate it from main content.](https://lh3.googleusercontent.com/cBekWt7xDa8xEu5XXaem1OHo1sbSYkWtpPf8V_6QeBqGzxxia-Ba6WoZDfUkaUvywiflh3J89oatLV3ZpQqv4DupaDfVyy41vXxkxpDAnEqvaGtw=w40)

![M3 app bar with subtle color difference from main content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlku5cnn-06.png?alt=media)
