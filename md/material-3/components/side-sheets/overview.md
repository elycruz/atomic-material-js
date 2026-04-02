# Side sheets: Overview

Use side sheets to provide optional content and actions without interrupting the main content.

Two variants:

- **Standard**: Standard side sheets display content without blocking access to the screen's primary content, such as an audio player at the side of a music app. They're often used in medium and expanded window sizes like tablet or desktop.
- **Modal**: Modal side sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken. They're often used in compact window sizes, like mobile, due to limited screen size.

People can navigate to another region within the sheet. Side sheets can contain a back icon for navigation.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Unavailable |
| Implementation | android Jetpack Compose | Unavailable |
| Implementation | android MDC-Android | Available |
| Implementation | language Web | Unavailable |

## Differences from M2

- **Right-to-left (RTL) language support**: with left side sheet
- **Color**: New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
- **Shape**: Modal side sheets have a 16dp corner radius

Side sheets have new color mappings to support dynamic color.
