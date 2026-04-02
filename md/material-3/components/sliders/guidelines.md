# Sliders: Guidelines

Sliders can adjust values in real time, such as image attributes.

## Usage

Sliders are used to select values along a track. They're ideal for adjusting settings such as volume and brightness, or changing the intensity of image filters.

Sliders can use icons or labels to represent a numeric or relative scale. Use sliders to pick a value from a range, like volume loudness.

Changes made with sliders must take effect immediately, so people can understand the effects of their selection as they're moving the slider.

Selection changes are immediate.

## Variants

There are three different variants of sliders: standard, centered, and range:

- **Standard sliders**: Select one value from a range of values. Use this when the slider should start from zero or the beginning of a sequence.
- **Centered sliders**: Select a value from a positive and negative value range. Use this when zero, or the default value, is in the middle of the range.
- **Range sliders**: Select two values on one slider to create a range. Use this when defining a minimum and maximum value.

**Do**: Horizontal range slider

**Don't**: Because of the additional cognitive load of a range slider, avoid using it in vertical orientation.

## Anatomy

- Value indicator (optional)
- Stop indicators (optional)
- Active track
- Handle
- Inactive track
- Inset icon (optional)

### Track

The track shows the full range of values that can be selected on the slider. It has two sections: active and inactive.

The active section of the track is from the minimum value to the handle. For range sliders, the active track is between the two handles.

The inactive section of the track is from the handle to the maximum value, or outside the two handles of a range slider.

For left-to-right (LTR) languages, the values increase from left to right. For right-to-left (RTL) languages, this is reversed.

### Handle

The handle can be moved along the track to choose a value.

When sliders have two handles, the handles choose the minimum and maximum values in a range.

The handle changes shape to indicate when it's pressed.

## Configurations

### Value

The value displays the specific value that corresponds with the handle's placement. A value appears when interacting with the corresponding handle. For range sliders, only one value should be shown at a time.

If the value is shown elsewhere, the indicator is not required.

Instead of showing the built-in value label, a separate text input field can be added outside of the slider. If this is added, the slider and value in this text field should automatically update to match each other.

Make sure people can tab to the text field directly after the slider.

### Stop indicators

Stop indicators show which predetermined values can be chosen on the slider. The slider handle snaps to the closest stop. Avoid having too many stop indicators on a slider, because it can become visually crowded and difficult to adjust the value.

All sliders have stops at the end of the inactive track to ensure at least a 3:1 contrast with the background. If the inactive track has this level of contrast already, the end stops can be removed.

Icons or text can be added outside the slider to indicate the range of values and make the slider more accessible. This can be used instead of a stop indicator.

### Orientation

Sliders can be oriented either horizontally or vertically, depending on what is best for your use case.

### Inset icon

Standard sliders that are M, L, or XL can include an icon within the track. This icon should illustrate what the slider controls. Avoid adding inset icons to XS or S sliders.

When there's not enough space for the icon on the active track, like at a low value, the icon moves to the inactive track.

**Do**: Inset icons change placement based on the handle

**Don't**: Don't use an inset icon with sliders that have track thicknesses under 40dp

**Don't**: Don't use inset icons on centered or range sliders. It makes it unclear where the start of the slider is.

### Size

Sliders come in different sizes: XS, S, M, L, and XL. Use larger sizes to increase the targets and provide a larger visual emphasis.

The active and inactive tracks should always be the same size.

- XS: 16dp
- S: 24dp
- M: 40dp
- L: 56dp
- XL: 96dp

XL sliders should be reserved for hero moments, where the slider itself is the most important element on the page.

## Behaviors

### Select & drag

Select a value by dragging the handle.

Standard slider: The handle drags smoothly. Slider with stop indicators: The handle snaps to the closest stop indicator while dragged.

### Select jump

Select a value by selecting part of the track.

Standard slider: The handle moves to the selected location. Slider with stop indicators: The handle moves to the closest stop indicator.

### Select & arrow

Select a value using the keyboard.

- Tab: Focus lands on handle
- Arrows: Selected value increases or decreases by one value or stop indicator
- Space & arrows: Selected value increases or decreases by a larger interval or stop indicator

Standard slider: The handle moves one value. Slider with stop indicators: The handle moves to the next stop indicator.
