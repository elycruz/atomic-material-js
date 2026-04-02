# Snackbar: Guidelines

## Usage

Snackbars are used to inform users of app processes through brief messages at the bottom of the screen.

Use snackbars for:
- Confirmations of actions
- Simple undo operations
- Brief status messages
- Non-critical information

## Anatomy

- Container
- Message text
- Action button (optional)
- Close icon (optional)

## Behavior

- Appear at the bottom of the screen
- Display one snackbar at a time
- Auto-dismiss after 4 seconds (configurable)
- Can be dismissed by user action or close button
- Should not block primary content
- Can stack if multiple messages occur

## Best practices

- Keep messages brief and concise
- Use actionable language for buttons
- Provide undo options when possible
- Don't use for critical information (use dialogs instead)
- Ensure proper color contrast
