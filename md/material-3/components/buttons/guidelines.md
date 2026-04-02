# Buttons: Guidelines

Buttons and icon buttons come in many shapes, styles, and sizes.

## Usage

Buttons communicate actions that people can take. They are typically placed throughout the UI, in places like:

- Dialogs: Provide important prompts in a user flow
- Modal windows
- Forms
- Cards: Display content and actions about a single subject
- Toolbars: Display frequently used actions relevant to the current page

They can also be placed within button groups that add interactions between adjacent buttons when they're pressed.

### Best Practices

Use visually-prominent filled buttons for the most important actions.

Buttons are just one option for representing actions in a product and shouldn't be overused. Too many buttons on a screen can disrupt the visual hierarchy.

Consider placing additional actions in:
- Navigation rail: Let people switch between UI views on mid-sized devices
- Set of chips: Help people enter information, make selections, filter content, or trigger actions
- Text links
- Icon buttons: Help people take minor actions with one tap

**Do:** Use buttons for discrete actions

**Don't:** Don't clutter your UI with too many buttons. Consider presenting low-priority actions in overflow menus or as icon buttons.

### Button Width

**Do:** A button container's width is dynamically set to fit its label text. Button container width can be responsive, which allows it to stretch horizontally.

**Don't:** A button container's width shouldn't be narrower than its label text.

## Button Styles

For five button styles, in order of emphasis:

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

Default buttons and toggle buttons are available for all styles. Toggle buttons have different colors when unselected and selected.

## Button Groups

A button group is a collection of buttons that relate to each other and can respond to one another. Both buttons and icon buttons can be used inside a button group.

In some cases, there are primary and secondary actions within a button group. Buttons with primary actions should have a higher visual emphasis through size, color, or shape.

Different sized buttons in a button group help emphasize the main action from secondary actions.

## Toggle Buttons

Toggle buttons should be used for binary selections, such as Save or Favorite. When toggle buttons are pressed, they can change color, shape, and labels.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected. If a filled version doesn't exist, increase the weight instead.

By default, toggle buttons change from round to square when selected.

**Use toggle buttons for binary actions**

### Label Considerations

If the label changes on selected or unselected states, be mindful of the character count. Changing the label significantly is disruptive to the user and the page layout.

**Do:** When using toggleable buttons, keep the label character count a similar length for both states

**Don't:** The label length shouldn't change dramatically to be longer or shorter

## Anatomy

- Label text
- Container
- Icon (optional)

### Label Text

Label text is the most important element of a button. It describes the action that will occur if someone taps a button. It should be very brief, ideally 1–3 words.

Use sentence case, which only capitalizes the first word and proper nouns. This allows the text to distinguish proper nouns, for example: Book with Flights, not BOOK WITH FLIGHTS.

Don't truncate or wrap label text. It should always be fully visible on a single line.

**Do:** Use sentence case for button label text, capitalizing the first word and proper nouns

**Don't:** Don't wrap text. For maximum legibility, label text should remain on a single line.

### Container

Button containers hold the label text and optional icon. Buttons with the text color style have a visible container only when hovered, focused, or pressed.

Buttons with a round shape have containers with fully rounded corners.

Buttons with a square shape have containers with more subtle rounding that changes based on button size.

**Do:** A button's width dynamically adjusts to the label text

**Don't:** Avoid setting a fixed width smaller than the label text

### Icon (Optional)

Icons visually communicate the button's action and help draw attention. They should be placed on the leading side of the button, before the label text.

**Do:** Place the icon to the left of the label in buttons with text in left-to-right languages

**Do:** Place the icon to the right of the label in buttons with text in right-to-left languages

**Do:** Use icons that clearly communicate their meaning

**Don't:** Don't vertically align an icon and text in the center of a button

**Don't:** Don't use two icons in the same button

## Color Styles

### Elevated Style

The elevated button style is the same as the tonal button, but with a shadow. To avoid overusing shadows, use the elevated style only when absolutely necessary, such as when the button requires visual separation from a visually prominent background.

Elevated buttons provide separation from a visually prominent background.

**Caution:** Higher elevation increases the emphasis of a button. Buttons at higher elevations typically have more emphasis in a design, and should be used sparingly. For high emphasis, consider the filled style instead.

### Filled Style

The filled button style has the most visual impact after the FAB (Floating action button), and should be used for important, final actions that complete a flow, like Save, Join now, or Confirm.

Filled buttons have high visual impact when used for important actions.

Since they have such strong emphasis, the filled style should be used sparingly, ideally for only one action on a page.

In some cases, filled buttons can use tertiary colors.

Filled buttons can be responsive to the layout grid and help emphasize main actions.

### Tonal Style

The tonal button style is useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as Next in an onboarding flow. Tonal buttons use the secondary color mapping.

The tonal style has less emphasis than filled or elevated.

### Outlined Style

The outlined style is ideal for medium-emphasis buttons which contain actions that are important, but aren't the primary action in a product.

Outlined buttons pair well with filled buttons to indicate alternative, secondary actions.

Outlined buttons contain less important supporting actions.

Outlined buttons display a stroke around the button container, and have no fill by default. They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos.

**Do:** Outlined buttons can be used on backgrounds with a color gradient

**Caution:** Use caution when placing outlined buttons on top of images. Customizing the button to have a contrasting container fill can help ensure legibility of label text. Or, use a filled button instead.

**Caution:** The outlined button style is very similar to chips. Consider using a filled or tonal button instead.

### Text Style

The text button style should be used for the lowest priority actions, especially when presenting multiple options.

They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos. The container isn't visible until someone interacts with the button.

Don't underline the text button. Use hyperlinked body text instead to emphasize links.

Use text buttons for the lowest priority actions.

Text buttons are often placed within components such as:
- Cards: Display content and actions about a single subject
- Dialogs: Provide important prompts in a user flow
- Snackbars: Show short updates about app processes at the bottom of the screen

Since text buttons don't have a visible container in their default state, they don't distract from nearby content. However, since there's no container, the label text color must always be recognizable from non-button text and elements.

#### Text Button Placement

**In Snackbars:** Text buttons can be placed in snackbars to minimize visual clutter.

**In Cards:** In cards, text buttons help maintain an emphasis on card content.

**In Dialogs:** Dialogs use text buttons because the absence of a container helps unify the action with the dialog text. Align text buttons to the trailing edge of dialogs, on the right for left-to-right languages and on the left for right-to-left languages.

## Adaptive Design

### Resizing

When scaling layouts for large screen devices, buttons can adapt their visual presentation, size, alignment, and arrangement to fit different contexts and user needs.

Choose the best button position based on screen size.

**Example:** Filled buttons are end-aligned below flight information in a compact window, but start-aligned beside flight information in a large window.

The icon and label text in a button stay centered and grouped as the button's width changes.

**Do:** Keep the icon and label text grouped and centered

**Don't:** Don't ungroup the icon and label text or let them anchor to opposite sides of the button

Buttons can be customized to change size and scaling behavior across different window sizes. To avoid creating very long buttons in large windows, constrain button width or place buttons beside other elements.

**Don't:** Don't allow the button to stretch in a way that creates long, flat buttons with very little content inside

### Presentation

The size and placement of buttons can change as parent containers, such as cards, adapt for larger screens. Keep items, including buttons, in the same order between large and small screens to provide a consistent experience for screen readers and keyboard navigation.

Buttons can move in the layout, but elements should remain in the same order.
