# Text fields: Guidelines

## Filled and outlined text fields

### Usage

Use a text field when someone needs to enter text into a UI, such as filling in contact or payment information.

![A side by side view of a filled and a outlined text field.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flyqb5o7k-1%20(1).png?alt=media)

### Contact form using outlined text fields

![Mobile UI of contact form with several text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31ssyn-1.png?alt=media)

There are two variants of text fields:
- Filled text fields
- Outlined text fields

Both variants of text fields use a container to provide a visual cue for interaction and provide the same functionality.

## Outlined text fields

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms (where many text fields are placed together), their reduced emphasis helps simplify the layout.

![Login screen with outlined text field](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31t4yp-2.png?alt=media)

## Choosing text fields

Both variants of text field provide the same functionality. The variant of text field used can depend on style alone.

Choose the variant that:
- Works best with an app's visual style
- Best accommodates the UI's goals
- Is most distinct from other components (like buttons) and surrounding content

### Using both text field variants on the same screen

If both variants of text field are used in a UI, they should be used consistently within different sections, and not intermixed within the same region. For example, use outlined text fields in one section and filled text fields in another.

**Do:** When using both variants of text fields in a UI, separate them by region

**Don't:** When using both variants of text fields, don't use both next to each other or within the same form

## Anatomy

### Filled text field

- Container
- Leading icon (optional)
- Label text in empty field
- Label text in populated field
- Trailing icon (optional)
- Focused active Indicator
- Caret
- Input text
- Supporting text (optional)
- Enabled active Indicator

### Outlined text field

- Enabled container outline
- Label text in empty field
- Leading icon (optional)
- Label text in populated field
- Trailing icon (optional)
- Focused container outline
- Caret
- Input text
- Supporting text (optional)

## Containers

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.

### Fill and stroke

A text field container has a fill and a stroke either around the entire container, or just the bottom edge. The color and thickness of a stroke can change to indicate when the text field is active.

### Rounded corners

The container of an outlined text field has rounded corners, while the container of a filled text field has rounded top corners and square bottom corners.

## Label text

Label text tells people what information is requested. Every text field should have a label.

Label text should be aligned with the input text, and always visible. It can be placed in the middle of a text field, or rest near the top of the container.

Label text shouldn't be truncated or take up multiple lines. Keep it short, clear, and fully visible.

Label text should always be visible. When the field is selected, the label text moves from the middle of the text field to the top.

**Don't:** Don't truncate label text. Keep it short, clear, and fully visible.

**Don't:** Label text shouldn't take up multiple lines

### Adjacent label

A text field doesn't require a label if the field's purpose is indicated by a separate, adjacent label. Adjacent labels should be aligned to the leading edge of the text field container.

## Required text indicator

To show a field is required, display an asterisk (*) next to the label text, and explain that asterisks indicate required fields in one of two ways:
- Supporting text
- A single note at the beginning of the form

Additional best practices include:
- Indicate all required fields
- If required text has a particular color, use the same color for the asterisk

## Input text

Input text is text a person has entered into a text field.

Text fields can display input text in the following ways:
- Single line text fields display only one line of text
- Multi-line text fields grow to accommodate multiple lines of text
- Text areas are fixed-height fields

### Single-line text fields

In single-line fields, as the cursor reaches the right field edge, text longer than the input line automatically scrolls left. Single-line fields are not suitable for collecting long responses; use a multi-line text field or text area instead.

### Multi-line text fields

In multi-line fields, overflow text causes the text field to expand, shifting screen elements downward and text wraps onto a new line. These fields initially appear as single-line fields, which is useful for compact layouts that need to accommodate large amounts of text.

### Text areas

Text areas are taller than text fields and wrap overflow text onto a new line. They are a fixed height and scroll vertically when the cursor reaches the bottom of the field. The large initial size indicates that longer responses are possible and encouraged. These should be used instead of multi-line fields on the web. Ensure the height of a text area fits within mobile screen sizes.

## Prefix text

Text fields can contain prefix text such as currency symbol.

## Suffix text

Text fields can contain suffix text such as unit of measurement or email domain.

## Supporting text & character counter

Supporting text conveys additional information about the input field, such as how it will be used. It should ideally be one line, though may wrap to multiple lines if required. It can be either persistently visible or visible only on focus.

If there is a character or word limit, include a character or word counter. They display the ratio of characters used and the total character limit.

## Error text

For text fields that validate their content such as passwords, replace supporting text with error text. Swapping supporting text with error text prevents new lines of text from bumping content and changing the layout.

- If only one error is possible, error text should describe how to avoid the error
- If multiple errors are possible, error text should describe how to avoid the most likely error

**Do:** Swap supporting text with error text

**Don't:** Don't add error text in addition to supporting text, as their appearance will shift content

Long errors can wrap to multiple lines if there isn't enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content.

## Error icon

It's strongly recommended to show an error icon when the text field is in the error state. This highlights the error for people with visual impairments, and provides an additional sensory indicator.

## Icons & images

Icons in text fields are optional. Text field icons can:
- Describe valid input methods such as a microphone icon
- Provide affordances to access additional functionality such as clearing the content of a field
- Express an error

Leading and trailing icons change their position based on LTR or RTL contexts.

Images that are 24dp in height can be placed inside of text fields. This image height allows for optimal top and bottom padding within the field and is consistent with icon size recommendations.

### Icon signifier

Icon signifiers can describe the type of input a text field requires, and be touch targets for nested components. For example, a calendar icon may be tapped to reveal a date picker.

Icon signifiers include:
- Valid or error icon
- Clear icon
- Voice input icon
- Dropdown icon
- Image

## Read-only fields

Read-only text fields display pre-filled text that people cannot edit. A read-only text field is styled the same as a regular text field and is clearly labeled as read-only.

## Adaptive design

As layouts adapt to larger screens and different window size classes, apply flexible container dimensions to text fields. Set minimum and maximum values for margins, padding, and container dimensions as layouts scale so that typography adjusts for better reading experiences.

For compact window sizes, text fields can span the full width of the display. For medium and expanded window sizes, text fields should be bound by flexible margins or other containers.

As text fields expand in fluid layouts, avoid maintaining fixed margins and typography properties. This can lead to extra long text fields. For example, text fields should not span the full width of a large screen.

**Don't:** Don't use fixed text field margins on large devices. Text fields shouldn't span the full width of a large screen.

## Density

Dense text fields enable people to scan and take action on large amounts of information.

Avoid applying density by default. Don't apply density to text fields by default. This lowers their targets below the recommended 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all the targets to change it at a minimum of 48x48 CSS pixels each.
