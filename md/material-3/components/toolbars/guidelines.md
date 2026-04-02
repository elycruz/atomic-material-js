# Toolbar: Guidelines

Toolbars can be used for a wide variety of use cases.

## Usage

Use a toolbar to provide actions related to the current page. Toolbars can contain many actions and can scale to show more actions in larger windows.

![A toolbar provides actions related to the current page](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xi1w6d-01.png?alt=media)

### Variants

There are two variants of toolbars:

- **Docked toolbar** - Spans the full width of the window. It's best used for global actions that remain the same across multiple pages.
- **Floating toolbar** - Floats above the body content. It's best used for contextual actions relevant to the body content or the specific page.

The baseline bottom app bar is no longer recommended, but is still supported.

![Docked toolbar shows global controls. Floating toolbar show controls relevant to the current page](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akotbi-02.png?alt=media)

### Actions that don't fit

When actions don't fit in a toolbar, add a menu.

### Color configurations

There are two color configurations:

- **Standard** - A low-emphasis color scheme best used for focusing attention on the body content.
- **Vibrant** - A high-emphasis color scheme that draws attention to the controls. It can also indicate a temporary change in the page behavior, such as entering edit mode.

Consider using alternative color roles to create greater or lesser emphasis depending on the needs of the app. Experiment with different color roles to achieve different effects.

**Do:** Use the standard color scheme to draw focus to content outside the toolbar

**Do:** Use the vibrant color scheme to emphasize controls or actions

## Toolbars & navigation bars

The toolbar and navigation bar are both placed at the bottom of the window, so should not be shown at the same time. Show the navigation bar on primary pages, and toolbars on subsequent pages with actions.

![Navigation bar on a primary page. Toolbar on a secondary page with contextual actions](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ak0bq-03.png?alt=media)

Floating toolbars can be used as tabs between related subsequent pages in the product hierarchy. This helps group similar pages together, and shows that the selection affects the body content underneath.

**Do:** Keep navigation distinct, and use a toolbar to display local navigation on a specific page

**Don't:** Consider the existing app hierarchy when using a toolbar for local navigation. Avoid redundant or confusing navigation combinations in the same view.

**Don't:** Don't show a navigation bar and a toolbar with navigation controls at the same time

## Anatomy

### Container

The docked toolbar's container spans the full width of the window. Avoid applying rounded corners to the container. This can imply the container expands or changes upon interaction.

**Do:** Use straight corners for docked toolbars

**Don't:** Avoid modifying the container shape

As long as there's a minimum of 16dp padding on the leading and trailing edge, arrange controls inside however you see fit. The 32dp padding between items is just the default. All elements need a minimum 48x48dp target area to be accessible. Be cautious of including too many controls as it can be overwhelming.

**Don't:** Don't overwhelm people with too many controls

The floating toolbar's container should be fully visible on screen. If more actions are needed, use an overflow menu.

**Do:** Choose the most essential actions to show on screen by default

**Don't:** Floating toolbars shouldn't exceed the edge of the window or panel

### Elevation

Floating toolbars have elevation by default. If the content beneath the toolbar is visually distinct, elevation can be removed.

## Flexibility & slots

When configuring a toolbar, think of it as a container with several slots. These slots can be populated by buttons, icon buttons, images, text fields, or any kind of custom component.

Icon buttons provide an even hierarchy of controls. Mixing in a filled icon button can help add emphasis to a single action.

### Emphasizing actions

Visually emphasizing a single action more than others is an effective way to create hierarchy and guide people to controls they use most often. Avoid emphasizing more than one action at a time.

Some common ways to add emphasis to toolbar actions include:
- Use different icon button color styles, such as filled, tonal, and standard
- Customize the color roles of a single action, such as a primary or secondary palette
- Use wide and narrow icon buttons
- Pair the toolbar with a FAB

**Don't:** Don't emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Emphasize one action at a time.

**Don't:** Avoid mixing too many different controls in the same toolbar. A consistent control design keeps things clear.

### Icon button shapes

Avoid using square icon buttons in floating toolbars. Their square shape conflicts with the fully-rounded shape of the floating toolbar container. Square buttons can be used in the docked toolbar.

**Don't:** Don't use square filled icon buttons in floating toolbars

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions.

Use a FAB for the highest-priority action in the view, or to complement the controls.

## Position & orientation

### Docked toolbar position

Only place docked toolbars at the bottom of the window. If using other bottom-aligned elements, such as a navigation bar, don't use a docked toolbar.

### Floating toolbar position

Floating toolbars can be horizontal or vertical. Horizontal toolbars should have a minimum 16dp margin from the edge of the window.

In larger window sizes, floating toolbars can be vertical and placed on either side of the screen. Vertical toolbars should have a minimum 24dp margin.

To keep vertical toolbars compact, don't use wide icon buttons. Use narrow or default icon buttons instead.

**Don't:** Using wide buttons with vertical toolbars can unnecessarily widen toolbar containers and hide other UI elements

Vertical toolbars should be positioned opposite the navigation rail to balance out the screen and keep actions easy to access. When showing a navigation rail and vertical floating toolbar at once, use the centered configuration of the navigation rail.

## Adaptive design

### Resizing

#### Docked

The docked toolbar should always span 100% of the screen width.

In compact window sizes, elements in the toolbar should be evenly spaced.

In medium window sizes and larger, adjust the padding between controls to create a comfortable layout. This can be achieved by:
- Centering all elements
- Customizing to center a key action, and aligning other elements to the edges

On web and large screens, the docked toolbar can be rounded. Dividers can be used to organize large amounts of items. Only shrink the height and use extra small buttons if vertical space is limited.

#### Floating

The container should only be as big as needed to hold the items inside before reaching the 16dp margin.

If there's not enough space for all items, put them in an overflow menu in the trailing slot. As the window size expands, more actions can be revealed. The floating toolbar width can also be capped to keep it smaller and hide more elements.

**Don't:** Don't add extra space to a toolbar beyond its necessary items

Vertical toolbars aren't recommended for compact windows. They take up a significant area of the screen and may feel visually overwhelming, especially on screens with complex layouts. Only use them when the screen is simple or when the toolbar has a few controls.

### Presentation

In larger window sizes, floating toolbars can be aligned to opposite edges of the screen so they're easy to reach and group similar actions. For example, consider placing the undo and redo actions in one toolbar, and editing controls like highlight, erase, and select in another. Stylistic differences can help emphasize each toolbar's purpose and clarify hierarchy.

**Don't:** Avoid using multiple toolbars in smaller windows. There typically isn't enough room on screen. Instead, use one toolbar for all actions.

Actions at the trailing edge of the toolbar can collapse into an overflow menu at smaller window sizes, and become visible again at larger sizes.

### Right-to-left languages

In right-to-left (RTL) languages, mirror individual items that need it, like icons and text direction. If the order of actions is important, flip the order of the actions as well.

## Behavior

### Scrolling

Docked toolbars can either remain on the screen during scroll, or animate offscreen.

Floating toolbars can remain on the screen, animate offscreen, or collapse into a single, high-emphasis action on scroll.

On Jetpack Compose, the floating toolbar can collapse to a FAB or key action on scroll.

**Don't:** Don't collapse actions and scroll at the same time. Toolbars shouldn't both collapse and transition off page.
