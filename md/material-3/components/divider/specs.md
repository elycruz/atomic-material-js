# Divider: Specs

## Tokens & Specs

Divider specifications include color tokens, state information, and sizing measurements for implementation.

### Color Roles

Dividers use the following color role:
- Outline variant

This color provides a subtle separation while maintaining visual hierarchy.

### Orientation

- Horizontal (default)
- Vertical

### Measurements

#### Horizontal Divider

- Height: 1dp
- Width: Full width (or constrained by container)
- Vertical padding: 8-16dp (above and below)
- Horizontal padding: 0dp (unless inset)

#### Vertical Divider

- Width: 1dp
- Height: Full height (or constrained by container)
- Horizontal padding: 8-16dp (left and right)
- Vertical padding: 0dp (unless inset)

### Inset Divider

- Left/right padding: 16dp (for inset from edges)
- Used to align with list item text rather than full width

### Typography

- No text content (divider is a visual element only)
- Opacity: Usually 100% with outlined color token

### States

- Default: Visible state
- No interactive states (dividers are non-interactive elements)
