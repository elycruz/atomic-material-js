# App bars: Accessibility

## Use cases

People should be able to do the following using assistive technology:
- Understand what page they're currently visiting
- Take actions or navigate to a new page destination
- Maintain access to app bar actions when the content is scrolled

## Interaction & style

### Touch

When tapping on an icon button, a touch ripple appears, indicating interaction feedback.

### Cursor

When hovered, the hover state provides a visual cue to the user that the element is interactive.

When clicked (in both active and inactive states), a ripple appears to indicate feedback.

### Keyboard or switch

When navigating to an interactive element, a focus indicator appears to show that action can be taken.

When the element is selected, an action is then performed.

## Initial focus

Focus should initially land on the leading button, since it's the first interactive element of the app bar.

Use Tabs to navigate through interactive items.

Use Space or Enter to activate actions.

## Color

On search app bars, use the default color roles when possible.

- Search container: surface container
- Search label: on surface variant

On darker backgrounds, search bar containers can use the surface bright role to maintain strong visual contrast. If mapping to other color roles, make sure the text and container have 3:1 contrast to ensure readability.

**Do:** Make sure search bars and their labels have at least 3:1 contrast. Use the default colors when possible.

**Don't:** Avoid using custom color roles for the search bar container and search label text. If custom roles are necessary, make sure they have contrast of at least 3:1.

![A search app bar with default dark text on a light container background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos5etv-06-do.png?alt=media)

## Keyboard navigation

| Keys | Actions |
|------|---------|
| Tab | Move focus to the next interactive element |
| Space or Enter | Activate the focused element |

![The tab button is used to navigate from the first button to the second button in the app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos7r6g-04.png?alt=media)

![The space or enter button activates the second action.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos8gq8-05.png?alt=media)

## Labeling elements

The accessibility label for a title should be the same as the content within the title. If needed, add additional context to the accessibility label to ensure users understand what page they're on or what content is being shown.

Screen readers will read the UI text followed by the component's role.

An app bar's accessibility label can incorporate its UI text as well as additional context.

Label icon buttons according to their accessibility guidelines.

An icon button should be clearly labeled on the action it takes, like "View on map".
