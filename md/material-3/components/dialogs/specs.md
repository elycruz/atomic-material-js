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

## Dialog Tokens

### Dialog - Basic

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog container color | md.comp.dialog.container.color | #FFFBFE |
| Dialog container elevation | md.comp.dialog.container.elevation |  |
| Dialog container shape | md.comp.dialog.container.shape |  |
| Dialog container shadow color | md.comp.dialog.container.shadow-color | #000000 |
| Dialog surface tint layer color | md.comp.dialog.surface-tint-layer.color | #6750A4 |

#### Enabled / Headline

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog headline color | md.comp.dialog.headline.color | #1C1B1F |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog supporting text color | md.comp.dialog.supporting-text.color | #49454E |

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog hover container elevation | md.comp.dialog.hover.container.elevation |  |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog focus container elevation | md.comp.dialog.focus.container.elevation |  |

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog pressed container elevation | md.comp.dialog.pressed.container.elevation |  |

### Dialog - Full Screen

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen container color | md.comp.dialog-fullscreen.container.color | #FFFBFE |
| Dialog fullscreen surface tint layer color | md.comp.dialog-fullscreen.surface-tint-layer.color | #6750A4 |

#### Enabled / Headline

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen headline color | md.comp.dialog-fullscreen.headline.color | #1C1B1F |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen supporting text color | md.comp.dialog-fullscreen.supporting-text.color | #49454E |

#### Hovered / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen hover container elevation | md.comp.dialog-fullscreen.hover.container.elevation |  |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen focus container elevation | md.comp.dialog-fullscreen.focus.container.elevation |  |

#### Pressed (ripple) / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Dialog fullscreen pressed container elevation | md.comp.dialog-fullscreen.pressed.container.elevation |  |
