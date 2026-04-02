# Navigation Bar: Overview

Use navigation bars in compact (widths smaller than 600dp, such as a phone in portrait orientation) or medium (widths from 600dp to 839dp, such as a tablet or foldable in portrait orientation) window sizes.

Can contain 3-5 destinations of equal importance. Destinations don't change. They should be consistent across app screens.

Navigation bar for compact and medium window sizes.

## Availability & resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | android Jetpack Compose | Available |
| Implementation | android Jetpack Compose: Expressive | Available |
| Implementation | android MDC-Android | Available |
| Implementation | android MDC-Android: Expressive | Available |
| Implementation | language Web | Unavailable |
| Implementation | language Web: Expressive | Unavailable |

## M3 Expressive update

May 2025

A new flexible navigation bar was introduced to replace the baseline navigation bar. It's shorter and supports horizontal navigation items in medium windows. More on M3 Expressive.

**Variants and naming:**
- Baseline navigation bar is no longer recommended
- Added flexible navigation bar
- Shorter height
- Can be used in medium window sizes with horizontal navigation items

**Color:**
- Active label changed from on-surface-variant to secondary

The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items.

## Differences from M2

**Color:** New color mappings and compatibility with dynamic color

**Elevation:** No shadow

**Layout:** Container height is taller

**States:** The active destination can be indicated with a pill shape in a contrasting color

**Name:** Bottom navigation has been renamed navigation bar

M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.

M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.
