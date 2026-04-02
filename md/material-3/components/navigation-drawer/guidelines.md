# Navigation Drawer: Guidelines

**Note:** The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an expanded navigation rail, which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

## Usage

Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or opened and closed by a navigation menu icon. One navigation destination is always active.

Navigation drawers are recommended for:
- Apps with 5 or more top-level destinations
- Apps with 2 or more levels of navigation hierarchy
- Quick navigation between unrelated destinations
- Replacing the navigation rail or navigation bar on large screens

**Do:** Use a navigation drawer for 5 or more primary destinations, or more than 1 level of navigation hierarchy

**Caution:** Avoid using two navigation components on the same screen

## Variants

There are two variants of navigation drawers:
- Standard navigation drawer
- Modal navigation drawer

### Standard navigation drawer

Standard navigation drawers provide access to drawer destinations and app content for expanded, large, and extra-large window sizes. Standard drawers can be permanently visible (best for frequently switching destinations) or opened and closed by tapping a menu icon (best for focusing more on screen content).

In medium and compact window sizes, use modal drawers instead.

### Modal navigation drawer

Modal navigation drawers use a scrim to block interaction with the rest of an app's content, and don't affect the screen's layout grid.

Modal navigation drawers can be used in any window size, but are primarily used in compact and medium sizes where space is limited or prioritized for app content. They can be swapped with standard drawers on expanded, large, and extra-large window sizes.

Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation menu icon in a navigation rail.

Modal drawers can be dismissed by:
- Selecting a drawer item
- Tapping the scrim
- Swiping toward the drawer's anchoring edge

## Anatomy

Navigation drawers are essentially a list contained within a side sheet. They can also include headers, subheads, and dividers to organize longer lists.

Elements:
- Active indicator
- Icon
- Label
- Badge label
- Sheet
- Divider
- Section label (optional)
- Scrim

### Sheet

A sheet holds all navigation drawer elements. Side sheets are used as the container for standard and modal navigation drawers.

Navigation drawers that open from the side are always placed on the start edge of the screen, on the left for left-to-right (LTR) languages, and on the right for right-to-left (RTL) languages.

**Do:** A navigation drawer opens from the left side of the screen for left-to-right languages

### Divider (optional)

Dividers can be used to separate groups of destinations within the navigation drawer.

**Do:** Use full-width dividers to separate groups of destinations

**Don't:** Don't use dividers to separate individual destinations

### Active indicator

The active indicator is a background shape communicating which destination of the navigation drawer is currently being displayed.

### Label text and icons

Destinations in a navigation drawer take the form of actionable list items. Each item describes its destination using label text and an optional icon.

Label text should be clear and short enough that it isn't cut off by the sheet.

**Do:** Keep text labels concise, but truncate them if they extend beyond the container width

**Don't:** Don't wrap label text

**Don't:** Don't shrink text size in order to fit a text label on a single line

Icons can supplement labels as indicators of a destination. When used, they should always be placed before text.

**Do:** Use recognizable icons when conventions exist

**Don't:** Don't apply icons to some destinations and not others. Icons should be used for all destinations, or none.

### Section label (optional)

Short subhead section labels can help group related destinations in the navigation drawer.

### Scrim (modal only)

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly behind the drawer's sheet and can be tapped or clicked to dismiss the drawer.

## Responsive layout

A product's navigation component should change to suit the window size class and form factor of the screen.

Modal navigation drawers can be used at any window size but are most common in compact and medium window sizes.

Standard navigation drawers are best for expanded, large, and extra-large window sizes.

### Compact window size

Use modal navigation drawers in compact window sizes. Or swap the drawer for a navigation bar.

On web, when the screen size is smaller than 320 CSS pixels, swap the navigation drawer for a navigation bar to ensure accessibility.

### Medium & expanded window sizes

Use a modal navigation drawer alone or with a navigation rail on medium and expanded window sizes.

When a navigation rail and modal navigation drawer are used together, the drawer can repeat destinations in the navigation rail as long as the drawer offers enough visual separation between levels of the navigation hierarchy.

A standard navigation drawer can be used in single pane layouts in expanded window sizes.

### Large and extra-large window sizes

For web experiences on laptop and desktop devices, use either a standard navigation drawer, or a navigation rail that transitions into a modal navigation drawer.

## Behavior

### Scrolling

Navigation drawers can be vertically scrolled, independent of the rest of the screen's content and UI. If the list of navigation destinations is longer than the height of the drawer, the drawer's contents can be scrolled within the drawer.

When a navigation drawer is scrolled, the body content should remain stationary.

### Visibility

Dismissible standard drawers can be used for layouts that prioritize content (such as a photo gallery) or for apps where users are unlikely to switch destinations often. They should use a visible navigation menu icon to open and close the drawer.

Permanently visible standard drawers allow quick navigation between unrelated destinations. They can't be closed or dismissed by the user.

### Appearing

When a navigation drawer animates on screen, it uses an enter and exit transition pattern.
