# Segmented Buttons: Guidelines

**Note:** Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the connected button group instead, which has mostly the same functionality but with an updated visual design.

## Usage

Segmented buttons help people select options, switch views, or sort elements.

A segmented button can help switch between viewing restaurant and bar options.

### Variants

There are 2 variants of segmented buttons:
- Single-select
- Multi-select

Single-select segmented button can only have 1 segment selected.

Multi-select segmented button can have multiple segments selected.

## Anatomy

- Segment
- Container
- Icon (optional)
- Label text (optional)
- Selected icon

### Segments

Segmented buttons can have 2-5 segments. Each segment is clearly divided and contains label text, an icon, or both.

There can be anywhere from 2 to 5 segments in single-select and multi-select segmented buttons.

**Do:** Segmented buttons are best used for selecting between 2 and 5 choices

**Don't:** Don't use more than five segments in a single segmented button. Choices should be scoped. If you have more than five choices, consider using another component, such as chips.

### Container

Like common buttons, segmented buttons have fully rounded corners by default.

Segmented buttons have fully rounded corners.

### Icons

Icons may be used as labels by themselves or alongside text. If an icon is used without label text, it must clearly communicate the option it represents.

Segmented buttons can include icons.

### Label Text

Labels should be short and succinct. If a label is too long to fit within its segment, consider using an icon alone.

Use labels that are as clear and short as possible.

**Do:** Keep labels short and consistent in length

**Don't:** Don't allow segments to wrap onto a new line

**Do:** Use consistent label types

**Caution:** Icons can be used in place of labels, but they must clearly communicate their meaning

**Don't:** Avoid mixing icon-only labels with text labels. Choose one label type and use that type for all segments.

## Single-Select

Use a single-select segmented button to select one option from a set, switch between views, or sort elements from up to five options. For example, use a single-select segmented button to choose one of a set of sizes, such as a beverage size selector.

A single select segmented button for choosing beverage size.

## Multi-Select

Use a multi-select segmented button to select or sort from two to five options. Unlike single-select, selection is not required and a user may concurrently select anywhere from all to none of the options. For example, multi-select segmented buttons can be used to filter by price range when searching for a restaurant.

A multi-select segmented button for filtering restaurant search options.

## Placement

Segmented buttons should have adequate margins from the edge of the viewport or frame. On larger screens, set a maximum padding for all button segments so the set doesn't fill the screen.

**Do:** Allow adequate space for margins. The button container shouldn't reach the edge of the viewport.

**Do:** Set a maximum padding within the segments to ensure usability on larger screens

**Don't:** Don't allow segmented buttons to span the full width of larger screens or panes. This can leave too much padding on either side of the segment label, making the button less usable.

Segmented buttons can be placed on other components, such as bottom sheets or full-screen dialogs.

A segmented button can be placed on a bottom sheet.

## Behavior

When using both icons and label text in segmented buttons, the icon label is replaced by the checkmark icon when the segment is selected.

Icons become checkmarks when selected in buttons that also use label text.
