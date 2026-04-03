# Tooltips: Specs

## Tokens & specs

Select a component variant below to see its attributes, tokens, and values.

## Plain tooltip

### Anatomy

Components:
- Supporting text
- Container

![2 elements of a plain tooltip.](https://lh3.googleusercontent.com/zHG-py73NpfFfT9V5YL21rpv8EdODG2H97qgSjjGF4IaiQlAmma5D475553mD-KCljwP7WL8j8lbyEr2zOU4jNeT5uIu4ySeoOvopallEVZxQ1=w40)

### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![2 color roles of a plain tooltip.](https://lh3.googleusercontent.com/Vf161JCMtFZVXhyzhmfRoDmGW_vYVmOm5QdZOy8djJu0aEPo-gyrlReVY1ooQuFsAy-VFBqzRHbt1Qp6eF6znt5fJM98s4F43QbuZlmm_NHqR=w40)

Plain tooltip color roles used for light and dark themes:
- Inverse on surface
- Inverse surface

### Plain tooltip measurements

![Measurements of a plain tooltip.](https://lh3.googleusercontent.com/abK2uBeEApgbWbQQrMibCEslnADu90AFpFRPbT9RVSeKZfO8baP5s6myVNJKPIUtmc_S-X99Pt046jQuk_MyMPv4IvvtWrRWieaqNLxR0SQ=w40)

| Attribute | Value |
|-----------|-------|
| Container height | 24dp |
| Padding | 8dp |

## Rich tooltip

### Anatomy

Components:
- Subhead
- Container
- Supporting text
- Text button

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/IP6aFfF9CPT86pHLyDQsPLpgpwRfiWWm4SrvpDszC_Muu_Y6iKdMcOlLuBrITk7y8afU-PxXvO26X0iRNTyF4uqvJjw6qmmyI2t7zUCsKbCUbEA=w40)

### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Rich tooltip color roles used for light and dark themes:
- On surface variant
- Surface container
- On surface variant
- Primary

### Rich tooltip measurements

| Attribute | Value |
|-----------|-------|
| Top padding | 12dp |
| Bottom padding | 8dp |
| Left and right padding | 16dp |

## Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

Configurations:
- Subhead, supporting text, and two buttons
- Subhead, supporting text, and one button
- Subhead and supporting text
- Supporting text and one button
- Supporting text and two buttons

## Token Tables

### Tooltip - Plain

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Plain tooltip container color | md.comp.plain-tooltip.container.color | #322F35 |
| Plain tooltip container shape | md.comp.plain-tooltip.container.shape | Shape: corner.extra.small (Extra small, Rounded) |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Plain tooltip supporting text font | md.comp.plain-tooltip.supporting-text.font | Roboto |
| Plain tooltip supporting text line height | md.comp.plain-tooltip.supporting-text.line-height | 16pt |
| Plain tooltip supporting text size | md.comp.plain-tooltip.supporting-text.size | 12pt |
| Plain tooltip supporting text weight | md.comp.plain-tooltip.supporting-text.weight | 400 |
| Plain tooltip supporting text tracking | md.comp.plain-tooltip.supporting-text.tracking | 0.4pt |
| Supporting text type style | md.comp.plain-tooltip.supporting-text.type | Font: Roboto 400 12pt/16pt tracking 0.4pt |
| Plain tooltip supporting text color | md.comp.plain-tooltip.supporting-text.color | #F5EFF7 |
