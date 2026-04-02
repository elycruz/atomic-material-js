# Badge: Overview

Badges can contain labels or numbers.

## Variants

Two variants:

- **Small** - Small badges are a simple circle used to indicate an unread notification.
- **Large** - Large badges contain label text communicating item count information.

![3 icons with badges. 1 is a small dot. 2 is a larger circle with a 1 digit number. 3 is an oval with a 4 digit number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hopxl-01.png?alt=media)

## Best practices

- Anchor badges inside the icon bounding box, at the upper trailing edge of the icon
- Limit content to four characters, including a +
- Keep the default color mapping

![Navigation bar showing 4 icons with different badge variants in a bright red color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hz0r2-02.png?alt=media)

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android MDC-Android | Available |
| Implementation | Web | Unavailable |

## Differences from M2

**Color:** New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.

Badges have new color mappings.
