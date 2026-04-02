# Tooltips: Overview

Use tooltips to add additional context to a button or other UI element.

## Variants

Two variants:

- **Plain** - Plain tooltips briefly describe a UI element. They're often used for labelling UI elements with no text, like icon-only buttons and fields.
- **Rich** - Rich tooltips provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

![2 variants of tooltips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6q4295-01.png?alt=media)

### Use cases

Use plain tooltips to describe elements or actions of icon buttons.

Use rich tooltips to provide more details, like describing the value of a feature.

Rich tooltips can include an optional title, link, and buttons.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Unavailable |
| Implementation | android Jetpack Compose | Available |
| Implementation | android MDC-Android | Unavailable |
| Implementation | Web | Unavailable |

## Differences from M2

**Color:** New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.

**Shape:** Rich tooltips have more rounded corners.

M2: Rich tooltips have slightly rounded corners

M3: Rich tooltips have more rounded corners and support dynamic color

![GM2 rich tooltip.](https://lh3.googleusercontent.com/eJToL16cXcvuWuH7Ajb0sRtM7yFr6qMf_tbIdsR5hAfRIRinT4UfyLsr2Me5goaDHO1RAXuagPp28FvTXNeqY6hZ64NOupwt14CTLHZZjsKk=w40)

![GM3 rich tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6q4dmm-03.png?alt=media)
