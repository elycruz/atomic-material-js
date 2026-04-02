# Time Pickers: Accessibility

## Use Cases

People should be able to do the following using assistive technology:

- Navigate to a time picker
- Select hours, minutes, and period
- Switch between dial and input modes
- Get appropriate feedback when time is selected

## Keyboard Navigation

| Keys | Actions |
|------|---------|
| Tab | Move focus between time picker elements |
| Arrow keys | Adjust hours, minutes on dial or in input |
| Up/Down | Increment/decrement hours and minutes |
| Right/Left | Move between hour and minute fields |
| Enter or Space | Confirm selection |
| Escape | Close the time picker |

## Labeling Elements

- Time picker container should have a descriptive label
- Hour, minute, and period fields should be clearly labeled
- Selected time should be announced to screen readers
- Period (AM/PM) selection should be clearly indicated

## Focus Management

- Initial focus should be on the hour field or dial center
- Focus order should follow logical tab sequence
- Clear visual indicators of focus state should be maintained
- Focus should return to trigger element after closing

## Touch and Pointer Targets

- All interactive elements should be at least 48×48 CSS pixels
- Dial handle should have adequate touch target area
- Period buttons should be easily selectable
- Input fields should support both touch and keyboard input
