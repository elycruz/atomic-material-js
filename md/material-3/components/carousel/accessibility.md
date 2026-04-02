# Carousel: Accessibility

## Use Cases

Users should be able to do the following with assistive technology:

- Navigate to the carousel container
- Navigate between different carousel items
- Activate a carousel item
- Skip over the carousel items

## Requirements on Scrolling Pages

On vertically-scrolling pages, carousels require an accessible way to view all the items without horizontally scrolling. (This requirement doesn't apply to full-screen carousels.)

Material recommends adding a "Show all" button below the carousel, which opens a dedicated vertically-scrolling page of all carousel items.

![Measurements of a "show all" button added below a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut0q8v-2.png?alt=media)

Carousels without headers should use a "Show all" button to view all carousel items.

The "Show all" button should have a padding of 4dp.

### Alternative: Arrow Icon Button

If the carousel has a header, you can use an arrow icon button instead. Place the arrow icon directly next to the header or in the same row.

Make sure the header is also displayed on the page of all carousel items.

![Measurements of an arrow icon button added next to a carousel header.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut172a-4.png?alt=media)

Carousels with headers should use an arrow to view all carousel items.

Headers should align with the leading edge, and the arrow icon should have a size of 48dp.

### Alternative Solutions

Avoid customizing the accessibility solution when possible. However, if your product needs an alternative solution, consider adding a "Show all" button in nearby navigation, or add alternative control buttons close to the carousel.

Avoid adding UI elements, like arrows or other icons, within or beside the carousel.

#### Don'ts

- Don't avoid adding buttons into the carousel container or beside it. Place any buttons above or below the carousel
- Don't cover the carousel with buttons or other UI

## Interaction & Style

### Touch

Tapping on a carousel item changes the shape slightly, and creates a touch ripple for interaction feedback.

### Cursor

The hover state provides a visual cue that the carousel item is interactive.

When the carousel item is clicked (in both active and inactive states), a ripple appears for interaction feedback.

### Initial Focus

When navigating to a carousel using assistive technology, use Tab to place initial focus on the first carousel item. Then, use Tab or the arrow keys to navigate the carousel items.

Use the up and down arrow keys to leave the carousel and focus on the next element on the page, like the "Show all" button.

#### Do's and Don'ts

- **Do:** Set initial focus on the first carousel item, and use arrows to navigate items
- **Don't:** Avoid focusing on the carousel container

## Keyboard Navigation

| Keys | Actions |
|------|---------|
| Tab or Arrows | Moves to the previous or next carousel item |
| Space or Enter | Activates the focused carousel item |

## Labeling Elements

The carousel container has the container role. The carousel container is labelled appropriately and has the container role.

Each carousel may have a different number of items, so the label reads out the total amount of items and the current item in focus.

The carousel item label indicates the current item in focus and the total number of items.

## Reduced Motion

When reduced motion settings are turned on, the parallax effect should be removed and carousel items should no longer expand as they come into view. All items are the same size.

Make sure carousels with reduced motion reach the edges of the window to avoid clipping visuals.

For hero carousels with reduced motion, the small carousel item is only partially shown on screen.
