# Carousel: Specs

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values.

## Color

![2 color roles of a carousel.](https://lh3.googleusercontent.com/Mzrpy7os0Evw3KGIkxaFfkon8IgFJgpyqGgYD2DIMMybywyuPHpomDXt8yaG9F6u0lJAhlpuoYHtJE1Sv2KYym2NJiXYSBSqOT6pMFsQMCdXZF77w=w640)

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens.

Carousel color roles used for light and dark schemes:
- **Container**
- **Surface**

## States

![5 states of a carousel in light and dark schemes.](https://lh3.googleusercontent.com/D7QutV1hQsVv50Nbn-UkT_BAJ4JRYAHLcohN50l4y2t5BDjn0pSq5jHk29phmxHU4H-UZszf7UaQoCPDkjWvVki1t4vlhxzziHfBL9vabMqo=w640)

States are visual representations used to communicate the status of a component or interactive element. Learn more about interaction states.

Carousel item states:
- Enabled
- Hovered
- Focused
- Pressed (ripple)
- Disabled

## Carousel Item Dynamic Widths

![Measurements for a small carousel item.](https://lh3.googleusercontent.com/l_O_4sY-OWT2K7Ot5jY_yHxXSErGV6Cu33URxwXPnt8D6oTDXh3oWlg5utAL2Iw0afdYNvkjpYZzLlsXjeONHtFJIqbO4dCEZO2xTzUvChjW)

All kinds of carousel items dynamically adapt to the width of the container.

Large items have a customizable maximum width that's used to optimally fit carousel items into the available space.

Small carousel items have a minimum width of 40dp and a maximum width of 56dp.

Items change size as they move through the carousel layout.

## Multi-Browse

The multi-browse layout shows at least one large, medium, and small carousel item.

### Measurements

Multi-browse carousels have padding on both sides of the container.

| Attribute | Value |
|-----------|-------|
| Alignment | Vertically centered |
| Leading/trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic, or user-set |
| Medium item width | Dynamic |
| Small item width | 40–56dp, dynamic |
| Item corner radius | 28dp |

## Uncontained

The uncontained layout shows items that scroll to the edge of the container.

### Measurements

Uncontained carousel items bleed over the padding on each side when scrolling.

| Attribute | Value |
|-----------|-------|
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Uncontained Multi-Aspect Ratio

The uncontained multi-aspect ratio layout shows carousel items of various widths.

### Measurements

Uncontained multi-aspect ratio carousels only have leading padding, with 8dp of padding between items.

| Attribute | Value |
|-----------|-------|
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Hero

The hero layout shows at least one large item and one small item.

### Measurements

Hero carousels have padding on both sides of the container.

| Attribute | Value |
|-----------|-------|
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Center-Aligned Hero

The center-aligned hero layout shows at least one large item and two small items.

### Measurements

Center-aligned hero carousels have padding on both sides of the container.

| Attribute | Value |
|-----------|-------|
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Full-Screen

The full-screen layout shows one edge-to-edge large item.

### Measurements

Full-screen carousels fill the window edge-to-edge.

| Attribute | Value |
|-----------|-------|
| Alignment | Centered |
| Leading/Trailing padding | 0dp |
| Top/bottom padding | 0dp |
| Padding between elements | 16dp |
