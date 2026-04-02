# Checkbox: Accessibility

## Use Cases

People should be able to use assistive technology to:

- Navigate to a checkbox
- Toggle the checkbox on and off
- Get appropriate feedback based on input type documented under Interaction & style

## Interaction & Style

### Text Label Selection

Users should be able to select either the text label or the checkbox to select an option.

A checkbox selected via the text label.

### Checkbox States

The parent checkbox has three states: selected, unselected, and indeterminate. Checkboxes can be selected or unselected regardless of the state of the other checkboxes in a group. If some, but not all, child checkboxes are checked, the parent checkbox becomes indeterminate. Selecting an indeterminate parent checkbox will check all of its child checkboxes.

An indeterminate selection indicating that at least one checkbox is selected within a group.

### Density

Avoid applying density by default. Don't apply density to checkboxes by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard Navigation

| Keys | Actions |
|------|---------|
| Tab | Moves focus to enabled checkbox or checkbox group |
| Space or Enter | Activates, selects, or deselects the focused checkbox |
| Backspace or Delete | Removes currently focused input checkbox |
| Arrows | Moves focus between checkboxes |

## Labeling Elements

If the UI text is correctly linked to the checkbox, assistive tech (such as a screen reader) will read the UI text followed by the component's role.

The accessibility label for an individual checkbox is typically the same as its adjacent text label.

The accessibility label clearly states the text label of the checkbox.
