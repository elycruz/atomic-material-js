# Dialogs: Guidelines

## When to Use Dialogs

Dialogs provide important prompts in a user flow and should be used to:

- Interrupt users with urgent information requiring immediate attention
- Ask for confirmation before performing important or destructive actions
- Present a focused task that requires completion
- Display brief information or choices

### Dialog Types

#### Basic Dialogs

Basic dialogs appear on top of the main content and require user action to dismiss. They are used for:
- Confirmation of actions
- Quick selection from options
- Displaying warnings or important messages
- Requesting user input

#### Full-Screen Dialogs

Full-screen dialogs cover the entire screen and are used for:
- Complex multi-step tasks
- Creating or editing entries (calendar, forms, etc.)
- Tasks requiring significant interaction

## Usage Guidelines

- Use dialogs sparingly - they interrupt user flow
- Dialogs should be dedicated to completing a single task
- Keep content focused and concise
- Provide clear action buttons (positive and dismissive)
- Always provide a way to cancel or dismiss

## Anatomy

### Basic Dialog

- Title (optional)
- Supporting text/body content
- Container
- Action buttons
- Scrim (overlay behind dialog)

### Full-Screen Dialog

- Title and toolbar
- Content area
- Action buttons (save, cancel)
- Scrim (overlay)

## Behavior

- Dialogs should be dismissible via cancel button, scrim click, or escape key
- Focus should be managed within the dialog
- Body scroll should be prevented while dialog is open
- Upon dismissal, focus should return to trigger element
