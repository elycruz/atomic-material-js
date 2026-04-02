# Dialogs: Accessibility

## Use Cases

People should be able to do the following using assistive technology:

- Navigate to the dialog
- Interact with all dialog elements
- Close the dialog
- Get appropriate feedback about dialog actions

## Keyboard Navigation

| Keys | Actions |
|------|---------|
| Tab | Move focus to next focusable element |
| Shift+Tab | Move focus to previous focusable element |
| Enter or Space | Activate buttons |
| Escape | Close the dialog (if applicable) |

## Focus Management

- Initial focus should be on the most relevant element (typically first input or primary button)
- Focus should be trapped within the dialog (not escape to background content)
- Focus order should follow logical sequence
- Upon dismissal, focus should return to the triggering element

## Labeling Elements

- Dialog should have a descriptive title or label
- All buttons should have clear, descriptive labels
- Important information should be clearly announced
- Error states should be clearly indicated

## Screen Reader Support

- Dialog role should be properly set
- Dialog header should be associated as a label
- All interactive elements should be properly labeled
- Status updates should be announced

## Visual Feedback

- Clear visual indication of focus state
- Button states (enabled/disabled) should be visually distinct
- Selected options should be clearly indicated
- Loading states should be announced and indicated

## Dismissal Options

- Provide clear dismiss button
- Allow escape key dismissal (where appropriate)
- Consider scrim click dismissal with clear indication
- Announce reason for dialog closure
