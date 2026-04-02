# Navigation Drawer: Overview

**Note:** The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an expanded navigation rail, which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

Use standard navigation drawers in expanded (widths 840dp to 1199dp, such as a tablet or foldable in landscape orientation, or desktop) and large (widths 1200dp to 1599dp, such as desktop) and extra-large window sizes (widths 1600dp and larger, such as ultra-wide monitors).

Use modal navigation drawers in compact (widths smaller than 600dp, such as a phone in portrait orientation) and medium (widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation) window sizes.

Can be open or closed by default. Two variants: standard and modal. Put the most frequent destinations at the top and group related destinations together.

Standard navigation drawer and Modal navigation drawer.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android MDC-Android | Available |
| Implementation | language Web | Unavailable |

## M3 Expressive update

May 2025

The navigation drawer is no longer recommended. Use the expanded navigation rail instead. More on M3 Expressive.

## Differences from M2

**Color:** New color mappings and compatibility with dynamic color

**Variants:** Distinguishes two separate variants of navigation drawer: Standard and modal

**Shape:** Rounded corners at the ending edge of the drawer

**States:** Updated color and shape for indicating selected state

M2: Navigation drawer had square corners and a rectangular shape indicating the active destination.

M3: Navigation drawer has rounded corners, new color mappings, and an updated style for indicating the active destination.
