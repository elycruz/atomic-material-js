# Date Pickers: Overview

## Date pickers can display past, present, or future dates

### Three Variants

1. **Docked** - Docked date pickers open from an onscreen input similar to a text field. They're often used within forms
2. **Modal** - Modal date pickers extend full-screen. They're often used for selecting a date range
3. **Modal input** - Modal date inputs allow the manual entry of dates using the numbers on a keyboard. They're often used in compact layouts

### Key Features

- Clearly indicate important dates, such as current and selected days
- Follow common patterns, like a calendar view

![3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5mxu7o-01.png?alt=media)

## Availability & Resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | Jetpack Compose | Available |
| Implementation | MDC-Android | Available |
| Implementation | Web | Unavailable |

## Differences from M2

### Typography and Spacing

Titles and labels are larger and have increased spacing to accommodate 48dp target size.

### Color

New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI.

![Old version of a date picker with a white background and shadows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fle4qmou9-1P-datepicker_whatsnew_1.png?alt=media)

Date pickers had a drop shadow and different color mappings in M2.

![New version of date picker with a colorful background, rounded corners, and no shadows.](https://lh3.googleusercontent.com/HWA4owUgCVU0oIuTW-9x1wy)

Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color in M3.

### Variants

The three variants of date pickers have been renamed to not be device-dependent.
- The former desktop date picker is now known as the **docked date picker**
- The former mobile date picker is now known as the **modal date picker**
- The date input is now known as the **modal date input**

These names reinforce that the user must take an action.
