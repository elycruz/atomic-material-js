# Tooltips: Specs

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

## Tokens & Specs

Select a component variant below to see its attributes, tokens, and values.

### Tooltip - Rich


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Rich tooltip container color | md.comp.rich-tooltip.container.color | #49454E |
| Rich tooltip container elevation | md.comp.rich-tooltip.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Rich tooltip container shape | md.comp.rich-tooltip.container.shape | Shape: md.sys.shape.corner.medium (Rounded, 12dp) |

#### Enabled / Subhead

| Token | Reference | Value |
|-------|-----------|-------|
| Rich tooltip subhead color | md.comp.rich-tooltip.subhead.color | #F5EFF7 |
| Rich tooltip subhead font | md.comp.rich-tooltip.subhead.font | Font: md.sys.typescale.title-small (Title Small, 500, 14sp/20sp, 0.1sp) |
| Rich tooltip subhead line height | md.comp.rich-tooltip.subhead.line-height | 20sp |
| Rich tooltip subhead size | md.comp.rich-tooltip.subhead.size | 14sp |
| Rich tooltip subhead tracking | md.comp.rich-tooltip.subhead.tracking | 0.1sp |
| Rich tooltip subhead weight | md.comp.rich-tooltip.subhead.weight | 500 |

#### Enabled / Supporting text

| Token | Reference | Value |
|-------|-----------|-------|
| Rich tooltip supporting text color | md.comp.rich-tooltip.supporting-text.color | #F5EFF7 |
| Rich tooltip supporting text font | md.comp.rich-tooltip.supporting-text.font | Font: md.sys.typescale.body-small (Body Small, 500, 12sp/16sp, 0.4sp) |
| Rich tooltip supporting text line height | md.comp.rich-tooltip.supporting-text.line-height | 16sp |
| Rich tooltip supporting text size | md.comp.rich-tooltip.supporting-text.size | 12sp |
| Rich tooltip supporting text tracking | md.comp.rich-tooltip.supporting-text.tracking | 0.4sp |
| Rich tooltip supporting text weight | md.comp.rich-tooltip.supporting-text.weight | 500 |

#### Enabled / Action button

| Token | Reference | Value |
|-------|-----------|-------|
| Rich tooltip action button label text color | md.comp.rich-tooltip.action-button.label-text.color | #D0BCFF |

### Tooltip - Plain


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Plain tooltip container color | md.comp.plain-tooltip.container.color | #616161 |
| Plain tooltip container elevation | md.comp.plain-tooltip.container.elevation | Elevation: md.sys.elevation.level3 (6dp) |
| Plain tooltip container shape | md.comp.plain-tooltip.container.shape | Shape: md.sys.shape.corner.extra-small (Rounded, 4dp) |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Plain tooltip label text color | md.comp.plain-tooltip.label-text.color | #F5EFF7 |
| Plain tooltip label text font | md.comp.plain-tooltip.label-text.font | Font: md.sys.typescale.body-small (Body Small, 500, 12sp/16sp, 0.4sp) |
| Plain tooltip label text line height | md.comp.plain-tooltip.label-text.line-height | 16sp |
| Plain tooltip label text size | md.comp.plain-tooltip.label-text.size | 12sp |
| Plain tooltip label text tracking | md.comp.plain-tooltip.label-text.tracking | 0.4sp |
| Plain tooltip label text weight | md.comp.plain-tooltip.label-text.weight | 500 |
