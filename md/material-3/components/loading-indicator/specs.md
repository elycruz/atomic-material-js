# Loading Indicator: Specs

## Variants

### Loading indicator

| Variant | M3 | M3 Expressive |
|---------|----|----|
| Loading indicator | -- | Available |

## Configurations

- Default
- Contained

| Category | Configuration | M3 | M3 Expressive |
|----------|----------------|----|-------|
| Containment | Default | -- | Available |
| | Contained | -- | Available |

## Tokens & specs

Loading indicators have a single token set.

See design tokens for detailed specifications.

## Anatomy

- Active indicator
- Container

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. Learn more about design tokens.

### Default

Loading indicator color roles used for light and dark schemes:
- Primary

### Contained

Contained loading indicator color roles used for light and dark schemes:
- On primary container
- Primary container

## Measurements

To ensure sufficient margins, the size is 48dp while the shape container is 38dp.

## Loading Indicator Token Sets

### Loading indicator

#### Color

| Token | Reference | Value |
|-------|-----------|-------|
| Loading indicator active indicator color | md.comp.loading-indicator.active-indicator.color | #6750A4 |
| Loading indicator container color | md.comp.loading-indicator.container.color | #E8DEF8 |
| Loading indicator contained container color | md.comp.loading-indicator.contained.container.color | #EADDFF |
| Loading indicator contained active indicator color | md.comp.loading-indicator.contained.active-indicator.color | #4F378B |

#### Size

| Token | Reference | Value |
|-------|-----------|-------|
| Loading indicator container width | md.comp.loading-indicator.active-indicator.size | 38dp |
| Loading indicator container height | md.comp.loading-indicator.container.height | 48dp |

#### Shape

| Token | Reference | Value |
|-------|-----------|-------|
| Loading indicator container shape | md.comp.loading-indicator.container.shape | Shape: corner.full (Fully round, Circular) |
