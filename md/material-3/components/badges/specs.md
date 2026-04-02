# Badge: Specs

## Navigation bar anatomy

Components:
- Small badge
- Large badge container
- Large badge label
- Large badge maximum character count container
- Large badge maximum character count label

![5 aspects of badge anatomy on a navigation bar.](https://lh3.googleusercontent.com/1c2wjkW2_C9l1HmNkRT8GpeQ7WqSDcJdMKdNym4xk_wPBfFSgVP3NhSXBwBV52vI3L-Z7CAmntY7c-1WM1I9xfyj4EfI_ucXRgOhWSRvfLy5E=w40)

## Navigation rail anatomy

Components:
- Small badge
- Large badge container
- Large badge label
- Large badge maximum character count container
- Large badge maximum character count label

![5 aspects of badge anatomy on a navigation rail.](https://lh3.googleusercontent.com/9yjKmecr7ZJh2Tm71DBDcwftLy2cMEpCW2yl73CCr7kUctUtmKaW78yFdO-0ZUSBXShjh9CDLZtQhcOyVt9CmdNhywVGvneguYneZMeui26j=w40)

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

### Navigation bar color

![5 applications of badge color on light and dark theme navigation bars.](https://lh3.googleusercontent.com/GXqQAaWohBPLwvJAZUGaxFwxI8CI_R4BLcAXPDq-e4P67CObbmEHL-GzwJboo6hBOmuqFuoV8QrPMXhmL2ZfcaY9_o5bTyMbxGhVxeM1FwfTKU=w40)

Badge color roles used for light and dark schemes in navigation bar:
- Error
- Error
- On error
- On error
- Error

### Navigation rail color

![5 applications of badge color on light and dark theme navigation rails.](https://lh3.googleusercontent.com/8-bcqHO-CggN9L5OTiWVxPDT-wPzcurO0xXI7dZn)

Badge color roles used for light and dark schemes in navigation rail:
- Error
- On error
- Error
- On error
- Error

## Measurements

| Attribute | Value |
|-----------|-------|
| Small badge shape | 3dp corner radius |
| Small badge size (HxW) | 6dp |
| Large badge shape | 8dp corner radius |
| Large badge one digit size (HxW) | 16dp |
| Large badge max character count size (HxW) | 16x34dp |
| Small badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 6x6dp |
| Large badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 14x12dp |
| Large badge padding between badge and text container | 4dp |

## Configuration

Different badges are shown on navigation destinations in various states.

### States

Configurations include:
- Inactive with label - small badge
- Inactive with label - large badge
- Inactive with label - large badge max character count
- Inactive - small badge
- Inactive - large badge
- Inactive - large badge max character count
- Active with label - small badge
- Active with label - large badge
- Active with label - large badge max character count
- Active nav bar no label - small badge
- Active nav bar no label - large badge
- Active nav bar no label - large badge max character count
- Active nav rail no label - small badge
- Active nav rail no label - large badge
- Active nav rail no label - large badge max character count
