# Chips

Chips help people enter information, make selections, filter content, or trigger actions.

![Chips hero image](https://lh3.googleusercontent.com/2QvL9BG6dybkEq8-MxokwRvnU_5-Yxey0SZtSxa9o6KlczyP2t5hAtUxTyZRJbGF9i7m6oOrZCWKJT4CQikVZP3D0cxsKj0yYaMJT4QjnE5q=s0)

## Overview

- Use chips to show options for a specific context
- Four variants: assist, filter, input, and suggestion
- Chip elevation defaults to 0 but can be elevated if they need more visual separation

### Variants

![4 chip variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzthj7vk-1.png?alt=media)

1. **Assist chip** – Assist chips represent smart or automated actions that can span multiple apps, such as opening a calendar event from the home screen.
2. **Filter chip** – Filter chips use tags or descriptive words to filter content. They can be a good alternative to toggle buttons or checkboxes.
3. **Input chip** – Input chips represent discrete pieces of information entered by a user, such as Gmail contacts or filter options within a search field.
4. **Suggestion chip** – Suggestion chips help narrow a user's intent by presenting dynamically generated suggestions, such as suggested responses or search filters.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/FilterChip-class.html) | Available |
| Implementation | [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary) | Available |
| Implementation | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/Chip.md) | Available |
| Implementation | [Web](https://github.com/nicolo-ribaudo/nicolo-ribaudo.github.io) | Available |

## Updates

### Aug 2024

Updated stroke color from **outline** to **outline variant**.

![A chip with a clear outline is now a chip with a subtle outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sdpshu-02.png?alt=media)

The stroke color was softened to improve visual hierarchy between chips and buttons.

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Shape:** Rounded rectangle
- **Variants:** Action chips have been separated into assist chips and suggestion chips. Choice chips are now a subset of filter chips.

| M2 | M3 |
|----|-----|
| ![M2 chip variants.](https://lh3.googleusercontent.com/2QvL9BG6dybkEq8-MxokwRvnU_5-Yxey0SZtSxa9o6KlczyP2t5hAtUxTyZRJbGF9i7m6oOrZCWKJT4CQikVZP3D0cxsKj0yYaMJT4QjnE5q=s0) | ![M3 chip variants.](https://lh3.googleusercontent.com/3W0HJhJSBgfi_3TWYvZlXCPDg42elT_0VwxJmTTK5l61ZFdC9l9mPQPqPcUOBXNIce2r3aDWGNECHLcoe41RXvv2rr1bjDL6BsCCvjkxUto=s0) |
| M2: Variants of chips are input, choice, filter, and action chips | M3: Variants of chips updated to assist, filter, input, and suggestion chips |
