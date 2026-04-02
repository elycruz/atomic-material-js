# Segmented Buttons: Accessibility

**Note:** Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the connected button group instead, which has mostly the same functionality but with an updated visual design.

## Use Cases

Users should be able to:

- Navigate to and activate segmented buttons with assistive tech
- Understand what each segment selection will do

## Interaction & Style

For keyboard navigation, Tab focuses on an individual segment.

For single-select segments, Space or Enter will select or unselect the focused segment.

For multi-select segments, Space or Enter will:
- select an un-selected segment
- select all of the segments
- un-select a selected segment

Use Tab to navigate through segments and Space/Enter to select/unselect.

### Color Contrast

Segmented buttons are clusters of similar components, so the outline should have at least a 3:1 contrast ratio with the background or surface. This helps distinguish each button.

Both a checkmark icon and a color change are used to distinguish selection. Make sure color isn't the only way to show selection.

**Do:** Use an outline with a surface contrast of at least 3:1

**Don't:** The segmented button shouldn't have a contrast outline less than 3:1

## Initial Focus

Focus will start in the first segment. Depending on the direction of the language, it is either the most left or the most right segment.

For single select and multi-select, the first segment will be focused regardless of selection state.

Focus begins on the left for left-to-right languages and on the right for right-to-left languages.

## Keyboard Navigation

| Key | Single Select Action | Multi Select Action |
|-----|-----|-----|
| Tab | Focus lands on next enabled segment | Focus lands on next enabled segment |
| Space or Enter | Select focused segment | Select and unselect focused segment |

## Labeling Elements

The accessibility label for a segmented button comes from the visible label text such as Relevance and Distance. If the segmented button displays icons without label text, the accessibility label describes the action that the button is expressing, such as Inexpensive for one currency symbol.

The label for segmented button matches the text label.

### Segment Roles

Single-select segmented buttons behave like radio buttons: only one option can be selected at a time. The label is Radiogroup.

Multi-select buttons behave like checkboxes: more than one option can be selected. The label is Checkbox.

The role for the multi-select segmented button is Checkbox.

Accessible design makes products usable for people with all kinds of abilities.
