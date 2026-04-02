# Carousel: Overview

## Contain visual items like images or video

Carousels contain visual items like images or video, along with optional label text.

### Six Layouts

1. **Multi-browse** - The multi-browse carousel layout shows at least one large, medium, and small carousel item at a time
2. **Uncontained** - The uncontained carousel layout show items that scroll to the edge of the container
3. **Uncontained multi-aspect ratio** - The uncontained multi-aspect ratio layout shows carousel items of various widths
4. **Hero** - The hero carousel layout shows at least one large and one small item at a time
5. **Center-aligned hero** - The center-aligned hero carousel layout shows at least one large and two small items at a time. The large item is centered
6. **Full-screen** - The full-screen carousel layout shows one edge-to-edge large item at a time and scrolls vertically

Layouts can be start-aligned or center-aligned.

### Features

- Item visuals have a parallax effect when scrolled
- Items change size as they move through the carousel

![Items of different widths in an uncontained multi-aspect ratio layout.](https://lh3.googleusercontent.com/fVj4DyPx6HxKN7gxkVrxReCeNwpE22Favi2407XaDtWc5AiUxr-xvwqelWFXfRaQ2AayTCiBEwL06duEvTEptd1dEt1FWREyAV1d_2kMAf-MHQ=w640)

![Carousel in a contained layout with a large item and a small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwur4ddz-3.png?alt=media)

Carousels can show items of various sizes.

## Availability & Resources

| Type | Resource | Status |
|------|----------|--------|
| Design | Design Kit (Figma) | Available |
| Implementation | Flutter | Available |
| Implementation | Jetpack Compose | Available |
| Implementation | MDC-Android | Available |
| Implementation | Web | Unavailable |

## Updates

### November 2025

New carousel layout: Uncontained multi-aspect ratio - The uncontained multi-aspect ratio layout shows carousel items of various widths.

### 2023

Additional layouts and configurations:
- Uncontained - The uncontained carousel layout show items that scroll to the edge of the container
- Full-screen - The full-screen carousel layout shows one edge-to-edge large item at a time and scrolls vertically
- Centered carousels - The center-aligned hero carousel layout shows at least one large and two small items at a time. The large item is centered
- Hero carousel layout - The hero carousel layout shows at least one large and one small item at a time
- Multi-browse layout - The multi-browse carousel layout shows at least one large, medium, and small carousel item at a time

## Differences from M2

This component is new in Material 3.

**Shape:** Dynamic carousel items change shape when scrolled

**Motion:** Carousel items move at a different speed than their content, creating a parallax effect

**Interaction:** When scrolled, carousel items snap into place to maintain the same layout.
- Hero carousels swipe through one item at a time
- Multi-browse carousels scroll through many items at once

Hero carousels scroll through one large item at a time.

## Research

The Material Research Team conducted two studies (quantitative and qualitative) with over 200 participants to understand their perspectives of five different carousel designs. The studies measured their understanding of how to interact with each carousel, their expectations of the number of items in each design, and how they expected carousels to be used.

### Summary of Findings

- Participants thought carousels were a good way to explore many different kinds of content
- A previewed or squished item strongly indicated that there was more content to swipe through
- Participants expected around 10 items in a carousel that scrolled multiple items at once
- While some contexts were considered better for some carousel designs, all designs were considered similarly usable
