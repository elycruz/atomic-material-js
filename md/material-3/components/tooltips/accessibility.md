# Tooltips: Accessibility

## Use cases

People should be able to do the following using assistive technology:
- Receive a tooltip message
- Activate a tooltip with a keyboard or switch input

## Interaction & style

Plain and rich tooltips without required actions should remain on screen long enough for people to receive the information without disrupting their existing flow or task.

**Do:** Plain tooltips should remain on the screen temporarily after the cursor moves away

Tooltips can appear when an actionable element, like a button or navigation rail, is hovered or focused. However, this tooltip shouldn't hide crucial information.

Rich tooltips can also appear by selecting an element instead of hovering or focusing on it.

![A cursor hovers over a favorite button producing text about finding this item later in favorites.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rtu5uh-02.png?alt=media)

![An information button in a selected state produces text about finding this item later in favorites.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ruf33-03.png?alt=media)

## Focus order

Tooltip containers should not block important information or prevent a person from completing an action. Focus order within the rich tooltip moves top to bottom between interactive elements. Avoid trapping screen reader and keyboard focus on rich tooltips.

People should be able to move linearly through the rest of the page.

Elements in focus order:
- Parent element
- Inline link
- Text button

![Different elements of a rich tooltip are given a focus order, moving from parent element to inline link to text button.](https://lh3.googleusercontent.com/KCWqivAVbjIzMGBp1AVQbceVT02tQdKQSN JOd-FA_ARUYwMLQX2GUYZi55K0wxG_c2dYdGFnsB nB-_1n-m8thxhCgVavyU0W9_Dz)

## Keyboard navigation

| Keys | Actions |
|------|---------|
| Tab | Focus lands on button, if available |
| Space or Enter | Activates the focused element |

## Labeling elements

Tooltips should have the Tooltip role, or similar. Label all elements in the tooltip according to their own accessibility guidance.

The tooltip container should have the Tooltip role.
