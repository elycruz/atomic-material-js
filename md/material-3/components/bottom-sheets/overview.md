# Bottom sheets: Overview

Use bottom sheets in compact and medium window sizes. Two variants:

- **Standard**: Standard bottom sheets display supplementary content without blocking access to the screen's primary content, such as an audio player at the bottom of a music app.
- **Modal**: Modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken.

Content should be additional or secondary (not the app's main content). Bottom sheets can be dismissed in order to interact with the main content.

![Side by side view of standard bottom sheet modal bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3m82k-1.png?alt=media)

![Diagram of floating sheet set on screen background](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3mrmp-2.png?alt=media)

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android MDC-Android | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | language Web | Unavailable |

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.
- **Shape**: Bottom sheets have a 28dp top corner radius
- **Layout**: New max-width of 640dp and an optional drag handle with an accessible 48dp hit target
