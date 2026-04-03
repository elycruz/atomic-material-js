# Time Pickers: Specs

## Tokens & Specs

Time picker specifications include color tokens, state information, and sizing measurements for implementation.

### Color Roles

Time pickers use the following color roles:
- Surface container high
- Surface
- Primary
- Tertiary
- Secondary

### States

- Enabled
- Disabled
- Hovered
- Focused
- Pressed (ripple)

### Measurements

#### Dial Time Picker

- Dial size: 256×256dp
- Hour/minute hand width: 4dp
- Center dot size: 8dp
- Period buttons: 48×48dp minimum

#### Input Time Picker

- Input field height: 56dp
- Input field width: varies by content
- Text size: 16sp for display, 14sp for labels
- Button size: 48×48dp minimum

### Typography

- Headline: 28sp
- Time display: 64sp
- Labels: 12sp

## Time Picker Tokens

### Time Picker - Dial

#### Enabled / Time display

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker time display color | md.comp.time-picker.time-display.color | #000000 |

#### Enabled / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker period selector button color | md.comp.time-picker.period-selector.button.color | #FEF7FF |
| Time picker period selector button outline color | md.comp.time-picker.period-selector.button.outline.color | #79747E |
| Time picker period selector selected button color | md.comp.time-picker.period-selector.selected-button.color | #6750A4 |
| Time picker period selector selected button label color | md.comp.time-picker.period-selector.selected-button.label.color | #FFFBFE |

#### Enabled / Selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker selector color | md.comp.time-picker.selector.color | #E7E0EC |

#### Hovered / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker hover period selector state layer color | md.comp.time-picker.hover.period-selector.state-layer.color | #000000 |
| Time picker hover period selector state layer opacity | md.comp.time-picker.hover.period-selector.state-layer.opacity | 0.08 |

#### Focused / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker focus period selector state layer color | md.comp.time-picker.focus.period-selector.state-layer.color | #000000 |
| Time picker focus period selector state layer opacity | md.comp.time-picker.focus.period-selector.state-layer.opacity | 0.1 |

#### Pressed / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker pressed period selector state layer color | md.comp.time-picker.pressed.period-selector.state-layer.color | #000000 |
| Time picker pressed period selector state layer opacity | md.comp.time-picker.pressed.period-selector.state-layer.opacity | 0.1 |

### Time Picker - Input

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input container color | md.comp.time-picker-input.container.color | #FEF7FF |
| Time picker input container shape | md.comp.time-picker-input.container.shape |  |

#### Enabled / Input text

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input text color | md.comp.time-picker-input.input-text.color | #000000 |

#### Enabled / Hour-minute separator

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker hour minute separator color | md.comp.time-picker-input.hour-minute-separator.color | #000000 |

#### Enabled / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input period selector button color | md.comp.time-picker-input.period-selector.button.color | #FEF7FF |
| Time picker input period selector button outline color | md.comp.time-picker-input.period-selector.button.outline.color | #79747E |
| Time picker input period selector selected button color | md.comp.time-picker-input.period-selector.selected-button.color | #6750A4 |
| Time picker input period selector selected button label color | md.comp.time-picker-input.period-selector.selected-button.label.color | #FFFBFE |

#### Hovered / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input hover period selector state layer color | md.comp.time-picker-input.hover.period-selector.state-layer.color | #000000 |
| Time picker input hover period selector state layer opacity | md.comp.time-picker-input.hover.period-selector.state-layer.opacity | 0.08 |

#### Focused / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input focus container elevation | md.comp.time-picker-input.focus.container.elevation |  |

#### Focused / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input focus period selector state layer color | md.comp.time-picker-input.focus.period-selector.state-layer.color | #000000 |
| Time picker input focus period selector state layer opacity | md.comp.time-picker-input.focus.period-selector.state-layer.opacity | 0.1 |

#### Pressed / Period selector

| Token | Reference | Value |
|-------|-----------|-------|
| Time picker input pressed period selector state layer color | md.comp.time-picker-input.pressed.period-selector.state-layer.color | #000000 |
| Time picker input pressed period selector state layer opacity | md.comp.time-picker-input.pressed.period-selector.state-layer.opacity | 0.1 |
