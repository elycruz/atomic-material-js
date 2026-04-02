# App bars: Guidelines

App bars show information about the page, key actions, and navigation actions like Back or Menu.

## Usage

Use an app bar to provide content and actions related to the current page, such as page navigation actions, headlines, images, and 1–2 essential actions.

The information and actions in the app bar should be contextual and specific to a page, but can also include global product controls, such as search or notifications.

App bars should only have one action, two if necessary. The primary action should alter or exit the entire page, like Send, Save, or Edit.

If the product has many actions, place those in a toolbar. Avoid placing an overflow menu in the app bar when possible.

### Boosting visibility of important actions

To boost visibility of a primary action, change the style of the icon button to filled or tonal, and consider using a wide icon button. Avoid using multiple filled or tonal buttons.

**Do:** Use a filled or tonal button for important actions

**Don't:** Don't put multiple filled or tonal buttons in the app bar

## Variants

The four variants of app bars are:

- **Search app bar** - Use on home pages when search is key to the product.
- **Small** - Use in dense layouts or when a page is scrolled.
- **Medium flexible** - Use to display a larger headline. It can collapse into a small app bar on scroll.
- **Large flexible** - Use to emphasize the headline of the page.

### Baseline app bars (not recommended)

There are two baseline app bars that are no longer recommended:
- **Medium** - Replace with medium flexible.
- **Large** - Replace with large flexible.

## Search app bar

Use a search app bar to provide an emphasized entry-point to open the search view.

Search app bars have a search field instead of heading text. Search bars should always include the word "Search". They can use various capitalization styles depending on the product:
- Search
- Searching a specific area (Example: Search inbox)
- Search [Product] (Example: Search Photos)

Use proper capitalization depending on what's being searched.

### Buttons in search app bar

In addition to a trailing avatar, search app bars can have up to two trailing icons on mobile. Trailing icons can be placed inside or outside the search bar. Put the most used actions on the left and least used on the right.

The leading element of a search app bar can be used for a product's logo to brand the app's overall experience. This logo can be purely cosmetic, or can trigger an action like returning to the home screen or refreshing it. Avoid using a logo to open an expanded navigation rail.

**Don't:** Don't use three icons and an avatar in a search app bar

On larger screens, there should be up to four trailing icons.

### Alternate color options

By default, search containers in app bars use the surface container color to distinguish it from the app background. If the background is darker, use a lighter container color on the search bar, like surface bright.

When choosing alternate colors, make sure the search text and container have at least 3:1 contrast for readability.

## Anatomy

Components:
- Container
- Headline
- Trailing icons
- Subtitle
- Leading button

### Container

The app bar container holds all information and actions at the top of a screen, including navigation icons, headlines, and buttons. Avoid changing the position or shape of the container.

**Do:** Use straight corners for app bars

**Don't:** Don't use curved shapes. This implies that the container can expand upon interaction.

Always use the default height of the app bar, and make it span the full width of the window.

**Do:** Default heights were chosen to ensure readability of on-screen elements

**Don't:** Don't make an app bar shorter than its default height

#### Adding logos

Image logos can be used in app bars to bolster brand identity or visual appeal. The image should be high quality and pertinent, and shouldn't disrupt the app bar's functionality.

Image logos can replace all text in small app bars, and appear above the text in other app bars.

### Leading button

The leading button should be used for navigating the product. It typically is one of the following:
- A menu icon, which opens a modal expanded navigation rail
- A back arrow, which returns to the previous screen

### Headline

The headline can describe:
- The current page
- The current section
- The product

Headline text should be brief enough to easily fit in the app bar. In medium flexible and large flexible app bars, the headline can wrap to a second line. Don't truncate the headline text.

**Do:** If headline text is long, use a medium flexible or large flexible app bar and wrap the headline to two lines maximum

**Don't:** Don't wrap text in a small app bar

Headlines can be aligned to the leading edge or centered.

The headline's typography size and style change depending on the app bar variant:
- Search: Body large
- Small: Title large
- Medium flexible: Headline medium
- Large flexible: Display small

### Subtitle

Subtitles can add additional context to a page. These can be leading-aligned or center-aligned with the headline text.

Subtitle typography style for each app bar:
- Small: Label medium
- Medium flexible: Label large
- Large flexible: Title medium

### Trailing icon buttons

Up to two icon buttons can be placed after the headline, aligned to the trailing edge of the app bar. Place most-used actions closest to the leading edge.

Avoid using these buttons to open a menu with more actions. If more actions are needed, place them in a toolbar instead.

If changing the icon button color style to filled or tonal, only use one icon button.

Put the most used actions on the left and least used on the right.

Use filled icons when possible for the best visibility. Outlined icons can also be used, particularly for unselected toggle buttons.

**Do:** Use filled icons for clear, visible actions

**Caution:** Outlined icons can be used as needed, or when using toggle buttons

## Adaptive design

### Resizing

The width of the app bar container responds to the view or device width. It should always span 100% of the window width.

Resizing may cause actions at the trailing edge of the app bar to collapse into an overflow menu at smaller window sizes. These actions become visible again at larger sizes.

The search container of the search app bar should fill 100% of the space between leading and trailing app bar elements until it reaches 312dp. Then, it should only grow further to fill 50% of that space.

### Presentation

The app bar automatically supports right-to-left (RTL) languages by aligning the layout of elements to the leading and trailing edges of the container. This means that in RTL languages, the layout of the app bar is mirrored.

## Behavior

### Scrolling

App bars should initially be the same color as the background, then fill with a contrasting color on scroll to provide visual separation from the background.

The app bar can remain on a page at all times, or can hide and reappear when scrolling.

To focus more on body content, consider setting the app bar container to be transparent on scroll. This allows the buttons to float above the content. Make sure icon buttons have a container fill. Consider using narrow-width icon buttons for actions, like Back, to reduce the amount of space they take up.

Selecting the search bar should open the search view.

When scrolled, medium flexible and large flexible app bars can transform into small app bars. They should remain small until the page is scrolled back to the top. Don't transform app bars into a search app bar.
