# Bottom sheets: Guidelines

## Usage

Bottom sheets display supplementary content and actions on a mobile screen. Bottom sheets are a versatile component that can contain a wide variety of information and layouts, including menu items (in list or grid layouts), actions, and supplemental content.

## Anatomy

A container is the only required element of a bottom sheet. Bottom sheet layouts can vary widely to support the kinds of content they contain.

### Components

- **Container**: The only required element
- **Drag handle** (optional)
- **Scrim** (modal only)

### Container

Bottom sheet containers hold all bottom sheet elements. Their size is determined by the space those elements occupy. The container is the only required element of a bottom sheet. All other elements are optional.

Bottom sheets are flexible containers that adapt to their content and available space.

### List items (optional)

Lists are a continuous group of text or images. List items can include label text, icons, and text buttons, among other elements.

### Dividers (optional)

Dividers can be used to separate related content in bottom sheets.

### Media (optional)

Bottom sheets can include:

- **Thumbnail**: For avatars or logos
- **Image**: Photos, illustrations, and other graphics, such as weather icons
- **Video**: Videos

## Standard bottom sheets

Standard bottom sheets co-exist with the screen's main UI region and allow for simultaneously viewing and interacting with both regions, especially when the main UI region is frequently scrolled or panned.

Use a standard bottom sheet to display content that complements the screen's primary content, such as an audio player in a music app.

At full-screen height, standard bottom sheets contain a collapse icon in an app bar to return to their initial position.

Standard bottom sheets can contain supplementary content that continues below the screen, such as location information over a map. A bottom sheet can have preset positions from full-screen height to preview.

## Modal bottom sheets

Like dialogs, modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken.

A modal bottom sheet must be interacted with or dismissed. Its blocking behavior makes it suitable for a menu to help people focus on their available choices.

Use a modal bottom sheet as an alternative to inline menus or simple dialogs on mobile, especially when offering a long list of action items, or when items require longer descriptions and icons.

Modal bottom sheets are used in mobile apps only. Modal bottom sheets can be used instead of menus to present additional actions.

### Visibility

To provide access to its top actions, the initial vertical position of modal bottom sheets is capped at 50% of the screen height.

Modal bottom sheets whose contents exceed 50% of the screen height can then be pulled across the full screen and scrolled internally to access their remaining items.

The initial vertical position of modal bottom sheets can't exceed 50% of the screen height.

### Dismissal

Modal bottom sheets appear when triggered by a user action, such as tapping a button or an overflow icon. They can be dismissed by:

- Tapping a menu item or action within the bottom sheet
- Tapping the scrim
- Swiping the sheet down
- Using a close affordance within the bottom sheet's app bar, if available

Display a close affordance in a full-screen modal bottom sheet. Tapping the scrim dismisses a modal bottom sheet. A modal bottom sheet can be dismissed by swiping the sheet down.

## Responsive layout

### Compact window sizes

In compact window sizes (like mobile devices), bottom sheets extend across the width of a screen and are elevated above the primary content.

Bottom sheets should extend to the width of the screen on mobile.

### Medium and expanded window sizes

For larger screens with medium and expanded window sizes, bottom sheets have a default max-width to prevent undesired layouts and awkward spacing. However, this can be overridden if needed.

For more complex tasks and flows, consider using a non-transient surface such as a floating sheet.

Bottom sheets on larger screens like tablet have a max width that can be overridden.

### Desktop considerations

On larger expanded window sizes like desktop, a bottom sheet can be swapped for a side sheet that shows similar content.

Side sheets can contain the same content as bottom sheets and may be more suitable for desktop.

## Behavior

### Expansion option

Bottom sheets can offer an expansion option where the sheet is fully raised and toggled between a collapsed and expanded state. This provides a more predictable footprint of the sheet, and can be set by the system or toggled by the user.

A bottom sheet for sharing can appear fully raised if needed. Alternately, a bottom sheet for sharing can appear collapsed for a more focused set of actions.

### Custom positioning

The drag handle can be dragged or selected to change the bottom sheet height. Sheets should be able to cycle through preset heights and close completely without dragging.

Selecting the drag handle should toggle through preset heights or close the sheet, while selecting the scrim should always close the bottom sheet.

If the bottom sheet has multiple preset heights but can't use a drag handle, Material requires the inclusion of a single-pointer alternative to change height.

Interacting with the drag handle can quickly move a bottom sheet through preset heights. A bottom sheet can automatically resize to another height after interacting with the drag handle.

### Scrolling

Bottom sheets can be horizontally scrolled, independent of the rest of the screen's content.

Bottom sheets should be scrollable when their content exceeds the initial viewable height.

### Back gesture

On Android, a gesture called predictive back allows a user to swipe left or right on the bottom sheet. Bottom sheet detaches from the left and right edges of the screen to signal it will close. Previous screen is revealed in a preview.

A list of compatible components is available in the gestures article.
