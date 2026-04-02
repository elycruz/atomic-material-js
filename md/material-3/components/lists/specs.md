# Lists: Specs

## Variants

### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

An expressive list has a segmented style and round corners.

### Baseline lists

In M3 Expressive, baseline lists are still available to use, but don't have the latest visual style, selection treatment, and slot functionality. See baseline list specs.

Baseline list items have square corners and standard color.

| Variant | M3 | M3 Expressive |
|---------|----|----|
| List (expressive) | -- | Available |
| List (baseline) | Available | Available |

## Configurations

### Styles

The standard and segmented styles are a visual choice, and don't affect a list's behavior.

- Standard
- Segmented

### List selection modes

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can't be both at once.

- In a single-action list, each item is a single tappable area
- Multi-action list items include a primary action and one or more secondary actions

### List interactions

Lists can expand and collapse on Android.

| Category | Configuration | M3 | M3 Expressive |
|----------|----------------|----|-------|
| Styles | Standard | Available | Available |
| | Segmented | -- | Available |
| Selection modes | Single-action, multi-action, single-select, multi-select | Available | Available |
| Interactions | Expand | Available | Available |

## Tokens & specs

Use the table's menu to select a token set. The common set combines baseline tokens with new expressive shapes and sizes. The expand set has tokens for the expand interaction. Learn about design tokens.

See design tokens for detailed specifications.

## Anatomy

Container and label text are required. All other elements are optional:
- Container
- Overline
- Label text
- Trailing text
- Supporting text
- Trailing icon
- Divider
- Leading avatar
- Leading icon
- Leading media (image or video)

## Flexibility & slots

The M3 Design Kit includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

### Slot accessibility

Slots are not accessible by default. Consider the following:
- Elements must follow the rules, structure, and interaction patterns for lists
- Use standard list item padding
- Target size must be at least 48x48dp
- Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers

**Caution:** Reserve the use of slots for use cases that maintain the list's accessibility and functionality

**Caution:** Slots require custom code implementation that you must create and maintain

### Slot positions

The leading and trailing slot positions must be a smaller width than the content section.

**Leading slots** can contain:
- Visual elements: Avatar, icon, image, or video thumbnail
- Selection: Checkbox, radio button, or switch
- Customizations: Badge or larger image

**Content slots** must be the largest-width slot and can contain:
- Default content: Label text, supporting text
- Optional add-ons: Badge, icon, in-line label, or more text elements

Avoid long lines of text to preserve readability.

**Trailing slots** can contain:
- Action elements or text: Icon, icon button, or trailing text
- Selection controls: Checkbox, radio button, or switch

The content slot must be the largest section, placed in the middle of the list item.

### Selection lists

For selection lists, use only one selection interaction per list item.

**Do:** Use only one selection interaction per list item

**Don't:** Don't use multiple selection interactions in one item

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens.

List color roles used for light and dark themes:
- Surface
- On surface variant
- On surface
- On surface variant
- Outline variant
- Primary container
- On primary container

## States

States are visual representations used to communicate the status of a component or an interactive element. Learn more about interaction states.

### Default list items

- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

### Selected list items

- Enabled
- Disabled
- Hovered
- Focused
- Pressed
- Dragged

## Measurements

List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height.

### List (baseline)

The baseline list variant is available and continues to work in existing products. However, the expressive list variant is recommended for new designs.

#### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens.

List color roles used for light and dark themes:
- Surface
- On surface
- On surface variant
- Outline variant
- Primary container
- On primary container

#### States

States are visual representations used to communicate the status of a component or interactive element.

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

#### Layout

**One-line lists**

Baseline one-line list alignment, padding, and size measurements.

**Two-line lists**

Baseline two-line list alignment, padding, and size measurements.

**Three-line lists**

Baseline three-line list alignment, padding, and size measurements.

##### Baseline measurements

| Attribute | Value |
|-----------|-------|
| Label alignment | Center |
| Label alignment when height is 88dp or taller | Top |
| Label left padding | 16dp |
| Leading element alignment (vertical) | Center |
| Leading element alignment (vertical) when height is 88dp or taller | Top |
| Leading element left padding | 16dp |
| Leading icon alignment (vertical) | Top |
| Leading icon top padding | 8dp |
| Leading icon top padding when height is 88dp or taller | 12dp |
| Trailing element alignment (vertical) | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top |
| Trailing element left padding | 16dp |
| Trailing element right padding | 24dp |
| Padding above/below divider | 0dp |
| Targets | 48dp |
| Divider full-width | 100% |
| Divider inset left padding | 16dp |
| Divider inset right padding | 24dp |

#### Configurations

**Leading avatar**
- With leading avatar
- With leading avatar and trailing checkbox

**Leading image or thumbnail**
- With leading image
- With leading image and trailing checkbox

**Leading video**
- With leading video
- With leading video and trailing checkbox

**Leading icon**
- With leading icon
- With leading icon and trailing checkbox

**Text-only**
- With text only
- With text and trailing checkbox

**Leading checkbox**
- With leading checkbox
- With leading checkbox and trailing text

**Leading radio button**
- With leading radio button
- With leading radio button and trailing text

**Trailing switch**
- With trailing switch
- With leading icon and trailing switch
