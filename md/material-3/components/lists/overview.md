# Lists: Overview

Use lists to help people find a specific item and act on it. Order list items in logical ways, like alphabetical or numerical. Keep items short and easy to scan. Show icons, text, and actions in a consistent format. Choose between standard and segmented styles.

A list item's label text, supporting text, image, and trailing icon can be customized to create a variety of lists.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android Jetpack Compose: Expressive | Available |
| Implementation | android MDC-Android | Available |
| Implementation | android MDC-Android: Expressive | Available |
| Implementation | language Web | Available |
| Implementation | language Web: Expressive | Unavailable |

## M3 Expressive update

Lists have a new segmented visual style, improved selection treatment, and support for slots. More on M3 Expressive.

**December 2025**

**Variants:**
- Added expressive list (Recommended for new designs)
- List (baseline - Baseline variants are the original M3 component designs. They may not have the latest features introduced in M3 Expressive, like updated motion, shapes, type, and styles. More on M3 Expressive) is still available

**New visual styles:**
- Standard or segmented
- Highlighted selection states
- Flexible slots

**Supported platforms:**
- MDC-Android
- Jetpack Compose

Expressive lists feature improved selection states.

## Differences from M2 to M3 baseline

**Color:** New color mappings and compatibility with dynamic color. Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI. More on dynamic color

**Layout:** Padding and spacing rules are updated to be more consistent

**Height:** The tallest element within a list item determines the list item's height - either 56dp, 72dp, or 88dp

**Alignment:**
- In most cases, elements in a list item are middle-aligned
- If a list is 88dp or larger, or contains three or more lines of text, elements are top-aligned

M2: Non-standard heights and alignments
M3 (baseline): Standardized heights and alignments

![1 list contains 3 items, each with a label text, supporting text, and trailing text. A music app shows list items with leading images.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8nxjh0-01.png?alt=media)

![2 party planning lists with 2 completed list items each. In 1 list, the selected items are highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8pwbjv-02.png?alt=media)

![3 variants of lists in M2.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8q1tdh-03.png?alt=media)
