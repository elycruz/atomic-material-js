# Tooltips: Guidelines

Plain and rich tooltips serve different purposes.

## Usage

A tooltip provides additional context for a UI element.

**Plain tooltips** briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips** provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks. Rich tooltips are best used for longer text like definitions or explanations.

![A plain tooltip labeling a button, and a rich tooltip announcing new settings available.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qnzgx-01.png?alt=media)

**Do:** Use plain tooltips to label icon-only buttons

**Don't:** Plain tooltips aren't needed when the UI element already has label text

**Do:** Use rich tooltips to provide extra information and actions about a UI element or new feature

**Don't:** Don't hide critical information within tooltips as it's easy to miss. Use an interruptive dialog instead.

## Anatomy

### Plain tooltip

Components:
- Container
- Supporting text

**Do:** Briefly describe a UI element

**Caution:** Avoid wrapping text to multiple lines or including many pieces of information

### Rich tooltip

Components:
- Subhead (optional)
- Container
- Supporting text
- Text button (optional)

### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

**Do:** Summarize the message in a few words

**Don't:** Avoid wrapping to more than one line

### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

**Caution:** Avoid stacking buttons

## Placement

### Plain tooltips

By default, plain tooltips are positioned directly above the parent element.

- If there's a visual boundary, like a button, the distance is 4dp
- If there's no visual boundary, like with text baselines, the distance is 8dp
- If the element is in an app bar, the plain tooltip appears below the element at the same distance.

### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen. Tooltips shouldn't cover the parent element.

### Dynamic positioning

The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

## Behavior

### Showing tooltips

To show a tooltip:
- Hover on the parent element on desktop
- Tap and hold the element on mobile
- Persistent rich tooltips only appear when clicked or tapped.

### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

**Don't:** Only display one tooltip at a time

### Persistent rich tooltips

Persistent rich tooltips appear when either:
- The parent element is clicked
- The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

**Don't:** Don't use a persistent rich tooltip on icon buttons
