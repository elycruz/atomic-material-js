# Navigation Drawer: Specs

**Note:** The navigation drawer is no longer recommended in the Material 3 expressive update. For those who have updated, use an expanded navigation rail, which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

## Anatomy

- Container
- Headline
- Label text
- Icon
- Active indicator
- Badge label text
- Scrim

## Tokens & specs

The navigation drawer has one token set. Learn about design tokens.

See design tokens for detailed specifications.

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

Navigation drawer color roles used for light and dark schemes:
- Surface container low
- On surface variant
- On secondary container
- Secondary container
- Scrim

For divider color roles, see divider specs.

## States

States are visual representations used to communicate the status of a component or interactive element.

Navigation drawer states:
- Enabled
- Hovered
- Focused
- Pressed

## Measurements

### Standard navigation drawer

| Attribute | Value |
|-----------|-------|
| Container height | 100% |
| Container width | 360dp |
| Container shape | 0, 16, 16, 0dp corner radii |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |

### Modal navigation drawer

| Attribute | Value |
|-----------|-------|
| Container height | 100% |
| Container width | 360dp |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |

## Navigation Drawer Token Sets

### Navigation drawers (baseline)

#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Navigation drawer container color | md.comp.navigation-drawer.container.color | #FFFBFE |
| Navigation drawer icon color | md.comp.navigation-drawer.icon.color | #49454F |
| Navigation drawer label text color | md.comp.navigation-drawer.label-text.color | #1D1B20 |

#### Hovered

| Token | Reference | Value |
|-------|-----------|-------|
| Navigation drawer hover state layer opacity | md.comp.navigation-drawer.hover.state-layer.opacity | 8% |

#### Focused

| Token | Reference | Value |
|-------|-----------|-------|
| Navigation drawer focused state layer opacity | md.comp.navigation-drawer.focused.state-layer.opacity | 10% |

#### Pressed (ripple)

| Token | Reference | Value |
|-------|-----------|-------|
| Navigation drawer ripple color | md.comp.navigation-drawer.ripple.color | #6750A4 |
