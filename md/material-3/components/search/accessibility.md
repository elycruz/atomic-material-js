# Search: Accessibility

## Use cases

People should be able to use assistive technology to:

- Navigate to and focus on a search bar
- View the hinted search text or persistent label
- Input text and complete a search
- Interact with a list of search suggestions and results
- Clear the input text

## Interaction & style

### Autosuggest

When search suggestions and results appear, the screen reader must announce the change. This lets people know list items are available for selection.

Autocomplete results should be announced by the screen reader.

![Hinted search text and autocomplete results on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrjdxa-01.png?alt=media)

### Initial focus

Initial focus lands on the first interactive element. This is often a leading icon button or text field. A leading icon button usually activates search directly or opens a navigation component.

Initial focus can land on a leading icon. If there's no leading icon, focus lands on the text field.

![Search bar with a focused leading icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrkpb6-02.png?alt=media)

![Search bar with no leading icon. The text field is focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrl9ca-03.png?alt=media)

### Keyboard navigation

| Keys | Actions |
|------|---------|
| Tab or Shift + Tab | Navigate between interactive elements |
| Space or Enter | Activate the search text field for input |
| Arrows | Navigate between search result items |

## Labeling elements

The hinted search text should be used as the accessibility label describing the search bar. The role for the input field should be:

- Android: Text field
- iOS: Search field

The accessibility label should match the hinted search text.

![Search bar with "Label: Search messages" and "Role: Text field".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgso76j-04.png?alt=media)

Leading and trailing icon buttons should be labeled according to their accessibility guidance. Use icon labels for icon buttons.

Search suggestions and results use the list component. Screen readers automatically announce the results as a list. For accessibility labels, follow the list accessibility guidelines. Search suggestions and results are created using lists.
