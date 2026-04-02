# Dialogs: Specs

## Tokens & Specs

Dialog specifications include color tokens, state information, and sizing measurements for implementation.

### Color Roles

Dialogs use the following color roles:
- Surface dim
- Surface container high
- Outline
- Primary
- Secondary

### States

- Enabled
- Disabled
- Focused
- Pressed (ripple)

### Measurements

#### Basic Dialog

- Minimum width: 280dp
- Preferred width: 540dp
- Maximum width: Constrained by screen size
- Corner radius: 28dp
- Padding: 24dp (top), 16dp (sides), 16dp (bottom)
- Button height: 40dp minimum
- Icon size: 24dp (optional title icon)

#### Full-Screen Dialog

- Width: Full screen
- Height: Full screen
- Top app bar height: 64dp
- Button height: 40dp minimum

### Typography

- Title: 28sp, bold
- Supporting text: 16sp
- Button text: 14sp
- Body text: 14sp
