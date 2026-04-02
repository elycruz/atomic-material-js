# Menus

Menus display a list of choices on a temporary surface. They appear when people interact with a button, action, or other control.

![Menus hero image](https://lh3.googleusercontent.com/ZVIJA7rtogj73vQTRwOTPD7KLNmn3vC5meGV-Efo1L3rN5fiILoMBDm597hVZ-zWQe3x7eEg2Mnvs_CLFceN2wPBAiyGAqj2Lx_x-EzKMf-VLHlXfg=s0)

## Overview

- Use a **menu** to show a temporary set of actions. To show actions on screen at all times, use a **toolbar** instead
- Menus can open from many components, including icon buttons, split buttons, and text fields
- **Context menus** provide actions for a specific element, like an image or highlighted text, and usually open with a secondary click

![1 vertical menu with vibrant colors opens from a split button, and 1 vertical menu with a submenu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkajj6i-01.png?alt=media)

Vertical menus can include vibrant colors, gaps, dividers, and submenus to organize a list of choices

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | [Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/ThemeData/useMaterial3.html) | Available |
| Implementation | [Jetpack Compose](https://developer.android.com/develop/ui/compose/components/menu) | Available |
| Implementation | [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary) | Available |
| Implementation | [MDC-Android](https://github.com/material-components/material-components-android/blob/master/docs/components/Menu.md) | Available |
| Implementation | MDC-Android: Expressive | Unavailable |
| Implementation | [Web](https://github.com/material-components/material-web/blob/main/docs/components/menu.md) | Available |
| Implementation | Web: Expressive | Unavailable |

## M3 Expressive update

### November 2025

Vertical menus were introduced with new shapes, color styles, selection states, and refined submenu motion. Gaps can be used for a more flexible layout on Android. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**Variants:**

- Added **vertical menus**, recommended for new designs
- **Baseline** menu is still available

**Color styles:**

- Standard
- Vibrant

![A vertical menu using shape and vibrant color to show a selected state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhk9jsmw-02.png?alt=media)

Vibrant colors help selected menu items stand out

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Variants:** Dropdown menu and exposed dropdown menu are now both referred to as menu, since they differ only in the element which opens the menu surface

| M2 | M3 |
|----|-----|
| ![Menu with gray color.](https://lh3.googleusercontent.com/lRkDtzZzv1cQwgvOMTY_hxx5v6LvsZjXrAo_zSvv-cqgB6vH92PvSw1XJMN925XPqGDdMB1OgVKZcud6-w4b9LZg709o_yEZGMjqyhsgs6Wz=s0) | ![Menu with purple background and outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlt7xid-04.png?alt=media) |
| M2: Former menu colors don't contrast with the background | M3: Menus feature new color mappings and dynamic color |
