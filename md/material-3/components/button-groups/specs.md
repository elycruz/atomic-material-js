# Button Groups: Specs

## Variants

- Standard button group
- Connected button group

### Variant Availability

| Variant | M3 | M3 Expressive |
|---------|-----|-----|
| Standard button group | -- | Available |
| Connected button group | Available as segmented button | Available |

## Configurations

Configurations for both variants of button groups:

- Sizes: Extra small, Small, Medium, Large, Extra large
- Selection: Single-select and multi-select
- Shape: Round and square

### Category Configuration

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|-----|
| Size | XS, S, M, L, XL | -- | Available |
| Default shape | Round, square | -- | Available |
| Selection | Single-select, multi-select, selection-required | Available as segmented button | Available |

## Tokens & Specs

Standard and connected button group tokens are organized by size. Select the variant and size from the token set menu.

**Note:** Go to the button and icon button pages to view their tokens. Learn about design tokens.

### Button group standard - Size - Xsmall

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Button group xsmall pressed motion spring dampening | md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening | 0.9 |
| Button group xsmall pressed motion spring stiffness | md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness | 1400 |
| Button group xsmall pressed width multiplier | md.comp.button-group.standard.xsmall.pressed.item.width.multiplier | 15% |

## Anatomy

Button groups are invisible containers that add padding between buttons and modify button shape. They don't contain any buttons by default.

### Container

Button groups are containers that hold buttons of various types for different scenarios.

#### Common Layouts

- Label buttons
- Label buttons and icon buttons
- Extra small icon buttons
- Large icon buttons

### Color

Button groups have no color properties. They can use the default button or toggle button color styles, like filled, tonal, and outlined. Avoid using standard icon buttons or text buttons, as they have no container treatment.

Examples: Filled, Tonal, Outlined, Elevated

## Selection & Activation

### Standard Button Groups

Standard button groups add interaction between adjacent buttons when a button is selected or activated.

This interaction changes the width, shape, and padding of the selected or activated button, which adjusts the width of buttons directly next to it.

A selected button changes shape, and briefly changes the width of itself and adjacent buttons.

### Connected Button Groups

Connected button groups don't add any interaction between buttons when selected or activated. They only affect the shape of the button being selected or activated.

A selected button changes shape without affecting adjacent buttons.

## States

### Standard Button Group

When a button is pressed, standard button groups modify the width and shape of that button and adjacent buttons.

**Default button states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

When a toggle button is selected in a standard button group, its shape should change between square and round. The color should change according to the button specs.

**Toggle button states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

### Connected Button Group

Connected button groups have different shape changes than standard button groups. Selecting a button does not affect adjacent buttons.

**Unselected states:**
- Enabled
- Disabled
- Hovered
- Focused
- Pressed

**Selected states:**
- Enabled
- Hovered
- Focused
- Pressed

## Measurements

### Standard Button Group

Standard groups apply padding between all buttons. The amount of padding changes based on button size to ensure a minimum accessible target size of 48dp.

**Standard button group inner padding:**
- XS: 18dp
- S: 12dp
- M: 8dp
- L: 8dp
- XL: 8dp

### Connected Button Group

For all connected button groups, use 2dp padding. This provides visual consistency at scale.

**Round connected button group inner padding:** 2dp at every size
- Outer shape: fully round
- Inner shape: square with corner sizes:
  - XS: 4dp
  - S: 8dp
  - M: 8dp
  - L: 16dp
  - XL: 20dp

**Square connected button group inner padding:** 2dp at every size
- Corner sizes:
  - XS: 4dp
  - S: 8dp
  - M: 8dp
  - L: 16dp
  - XL: 20dp

### Minimum Widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

## Density

Button groups adapt to the density of the buttons inside. Button groups adapt to the height of the buttons inside, including when density is applied.
