# Buttons: Overview

Buttons prompt most actions in a UI.

## Key Characteristics

Two variants: default and toggle

Can contain an optional leading icon

Five color options: elevated, filled, tonal, outlined, and text

Five size recommendations: extra small, small, medium, large, and extra large

Two shape options: round and square

Keep labels concise and use sentence case

## Button Variants

- Elevated button
- Filled button
- Filled tonal button
- Outlined button
- Text button

## Availability & Resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | Jetpack Compose | Available |
| Implementation | Jetpack Compose: Expressive | Available |
| Implementation | MDC-Android | Available |
| Implementation | MDC-Android: Expressive | Available |
| Implementation | Web | Available |
| Implementation | Web: Expressive | Unavailable |

## M3 Expressive Update

**May 2025**

Buttons now have a wider variety of shapes and sizes, toggle functionality, and can change shape when selected.

### Variants and Naming

- Default and toggle (selection)
- Color styles are now configurations (elevated, filled, tonal, outlined, text)

### Shapes

- Round and square
- Shape morphs when pressed
- Shape morphs when selected

### Sizes

- Extra small
- Small (existing, default)
- Medium
- Large
- Extra large

### New Padding for Small Buttons

- 16dp (recommended to match padding of new sizes)
- 24dp (no longer recommended)

### Visual Changes

- Five sizes
- Toggle (selection)
- Two shapes
- Two small padding widths

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color. Icons and labels now share the same color. Neutral text button is no longer recommended.
- **Icons**: Standard size for leading and trailing icons is now 20dp
- **Shape**: Fully-rounded corner radius and additional height options

### M2 vs M3 Comparison

M2: Buttons have a height of 36dp and slightly rounded corner radius

M3: Default buttons are taller at 40dp and have fully rounded corners
