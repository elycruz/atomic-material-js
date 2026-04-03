# Badge: Specs

![5 aspects of badge anatomy on a navigation bar.](https://lh3.googleusercontent.com/1c2wjkW2_C9l1HmNkRT8GpeQ7WqSDcJdMKdNym4xk_wPBfFSgVP3NhSXBwBV52vI3L-Z7CAmnY7c-1WM1I9xfyj4EfI_ucXRgOhWSRvfLy5E=w40)

## Tokens & specs

### Badges

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Badge color | md.comp.badge.color | #B3261E |
| Badge shape | md.comp.badge.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Badge size | md.comp.badge.size | 6dp |
| Badge large color | md.comp.badge.large.color | #B3261E |
| Badge large shape | md.comp.badge.large.shape | Shape: md.sys.shape.corner.full (rounded_corner) |
| Badge large size | md.comp.badge.large.size | 16dp |

#### Enabled / Label text

| Token | Reference | Value |
|-------|-----------|-------|
| Badge large label text color | md.comp.badge.large.label-text.color | #FFFFFF |
| Badge large label text font | md.comp.badge.large.label-text.font | Roboto |
| Badge large label text line height | md.comp.badge.large.label-text.line-height | 16pt |
| Badge large label text size | md.comp.badge.large.label-text.size | 11pt |
| Badge large label text tracking | md.comp.badge.large.label-text.tracking | 0.5pt |
| Badge large label text weight | md.comp.badge.large.label-text.weight | 500 |
| Badge large label text type | md.comp.badge.large.label-text.type | Font: ? (Roboto, 500, 11pt/16pt, 0.5pt) |

## Color

Color values are implemented through design tokens Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code. More on tokens . For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens

![5 applications of badge color on light and dark theme navigation bars.](https://lh3.googleusercontent.com/GXqQAaWohBPLwvJAZUGaxFwy8CI_R4BLcAXPDq-e4P67CObmbEHL-GzwJbo6hBOmuqFuoV8QrPMXhmL2Zfca9_o5bTyMbxGhVxeM1Fwf7KU=w40)

## Measurements

![Annotation of badge sizes, padding, and measurements from the corner of the icon to the badge opposite corner.](https://lh3.googleusercontent.com/_9tsQOYHX4YH6bQJJwi1ylkI-nu2RJBNb84ivjXE8ksTqqpuE4w-riSO17Sh2gclSOMxjzlDHS_B2zKmb7uBo3Y1ZBPiLWi6UoHlHOAK9Zw=w40)

| Attribute | Value |
|---|---|
| Small badge shape | 3dp corner radius |
| Small badge size (HxW) | 6dp |
| Large badge shape | 8dp corner radius |
| Large badge one digit size (HxW) | 16dp |
| Large badge max character count size (HxW) | 16x34dp |
| Small badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 6x6dp |
| Large badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 14x12dp |
| Large badge padding between badge and text container | 4dp |

## Configuration

Different badges are shown on navigation destinations in various states. States show the interaction status of a component or UI element. More on states

![Diagram of 3 badge variations shown on navigation destinations in various states.](https://lh3.googleusercontent.com/dmnjAmE1Ol38Ijd8REgLVSvLNv733cEX_WngU88yFKfiKjSdwanYmhHnCGueyMQAzJRxRMrvdgtC2KPaNzyG_B4Rn3ptMP-22440icqyFFKmFA=w40)
