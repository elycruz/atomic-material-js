# Date Pickers: Guidelines

## Docked date picker on desktop

## Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:
- Dialogs on compact window sizes like mobile
- Text field drop-downs on medium and expanded window sizes like tablet and desktop

### Three Variants

1. **Docked date picker** - Displays a date input field by default with a dropdown calendar
2. **Modal date picker** - Full-screen date picker for selecting dates
3. **Modal date input** - Allows manual entry of dates using the keyboard

## Anatomy

### Docked Date Picker

- Text field
- Menu button
- Icon button
- Label text
- Menu
- Text buttons
- Container

### Modal Date Picker

- Headline
- Supporting text
- Container
- Icon button
- Previous/next month buttons
- Day of week labels
- Today's date
- Unselected date
- Text buttons
- Selected date
- Menu button
- Divider
- Selected year

### Modal Date Input

1. Headline
2. Supporting text
3. Container
4. Icon button
5. Date input
6. Text buttons
7. Divider

### Full-Screen Date Picker

1. Headline
2. Supporting text
3. Icon button
4. Container
5. Text button
6. Icon button
7. Divider
8. Day of week labels
9. Today's date
10. Selected date range
11. Unselected date
12. Text buttons
13. Selected date range start date
14. Month label

## Docked Date Picker

### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with.

Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

Docked date pickers adjust size dynamically. The year selection menu replaces the calendar view.

#### Month Selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

#### Year Selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

## Modal Date Picker

### Behavior

Modal date pickers navigate across dates in several ways:
- To navigate across months, swipe horizontally
- To navigate across years, scroll vertically
- To access the year picker, tap the year

Don't use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

### Date Range Selection

Date range selection provides a start and end date. Common use cases include:
- Booking a flight
- Reserving a hotel

Modal date pickers navigate across date ranges in several ways:
- To select a range of dates, tap the start and end dates on the calendar
- To navigate across months, scroll vertically

## Modal Date Input

### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

For dates that don't require a calendar view, the modal date input can be the default view. Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form.

### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

## Window Size Considerations

### Compact Window Size

On compact window sizes, such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

### Medium and Expanded Window Sizes

The docked date picker works best for medium and expanded window sizes. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry.

Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

## Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

## Appearing and Disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen.

To exit a date picker, the input can either be confirmed (OK) or dismissed (Cancel). Interacting outside of the dialog will also dismiss the date picker. Unless one of these actions is taken, a date picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and Save confirmation.

Docked date pickers appear just below the input field.

Modal date pickers can be dismissed through interacting with content outside the dialog, or with the action buttons in the lower right.

Interacting with the input for a docked date picker makes the calendar view appear below.

## Responsive Layout

The sizing of the docked and modal date picker components don't scale responsively to different window sizes. Don't scale the date picker responsively to a larger size.
