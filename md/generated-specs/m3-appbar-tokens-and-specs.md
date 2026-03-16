# M3 App Bar — Tokens & Specs

> Source: [m3.material.io/components/app-bars/specs](https://m3.material.io/components/app-bars/specs)

---

## App bar - Size - Small

### Tokens

| Description | Token | Value |
|---|---|---|
| App bar small container height | `md.comp.app-bar.small.container.height` | 64dp |
| App bar small title font | `md.comp.app-bar.small.title.font` | *(reference)* |
| App bar small subtitle font | `md.comp.app-bar.small.subtitle.font` | *(reference)* |
| Search container height | `md.comp.app-bar.small.search.container.height` | 56dp |
| Search container shape | `md.comp.app-bar.small.search.container.shape` | *(reference)* |
| Search title font | `md.comp.app-bar.small.search.label-text.font` | *(reference)* |

## App bar - Size - Medium Flexible

### Tokens

| Description | Token | Value |
|---|---|---|
| App bar medium flexible container height | `md.comp.app-bar.medium-flexible.container.height` | 112dp |
| App bar medium flexible container height with subtitle | `md.comp.app-bar.medium-flexible.with-subtitle.container.height` | 136dp |
| App bar medium Title font | `md.comp.app-bar.medium-flexible.title.font` | *(reference)* |
| App bar medium Subtitle font | `md.comp.app-bar.medium-flexible.subtitle.font` | *(reference)* |

## App bar - Size - Large Flexible

### Tokens

| Description | Token | Value |
|---|---|---|
| App bar large flexible container height | `md.comp.app-bar.large-flexible.container.height` | 120dp |
| App bar large flexible container height with subtitle | `md.comp.app-bar.large-flexible.with-subtitle.container.height` | 152dp |
| App bar large Title font | `md.comp.app-bar.large-flexible.title.font` | *(reference)* |
| App bar large Subtitle font | `md.comp.app-bar.large-flexible.subtitle.font` | *(reference)* |

---

## Specs

App bar large Subtitle font


Search component tokens & specs

The default search component tokens are used in the search app bar.

Search - View
Token
Default, Light
Search view container surface tint layer color
#6750A4
Color
Search view container color
#ECE6F0
Search view contained background color
#F7F2FA
Search view container background elevation
Search view header supporting text color
#49454F
Search view header input text color
#1D1B20
Search view header leading icon color
#1D1B20
Search view header trailing icon color
#49454F
Search view divider color
#79747E
Layout and Text
Layout and Text / Contained (expressive)
Search view contained leading margin
12dp
Search view contained trailing margin
12dp
Search view contained docked bar results gap
2dp
Search view contained docked results shape
Search view contained docked bar shape
Search view contained full screen bar container height
56dp
Search view contained icon label gap
4dp
Layout and Text / Divided (baseline)
Search view docked container shape
Search view full screen header container height
72dp
Search view docked header container height
56dp
Search view leading space
16dp
Search view trailing space
16dp
Search view leading icon leading icon label space
16dp
Search view trailing icon label trailing icon space
16dp
Layout and Text / Common tokens
Search view full screen container shape
Search view header supporting text type


Search view header supporting text font
Roboto
Search view header supporting text line height
24pt
Search view header supporting text size
16pt
Search view header supporting text weight
400
Search view header supporting text tracking
0.5pt
Search view header input text type


Search view header input text font
Roboto
Search view header input text line height
24pt
Search view header input text size
16pt
Search view header input text weight
400
Search view header input text tracking
0.5pt
Anatomy
Container
Leading button
Trailing elements
Headline
Subtitle

App bars can be customized to include:

An image or logo
A subtitle
A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

The app bar can have different layouts depending on which elements are shown

Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view component.

Container
Leading icon button
Hinted search text
Trailing icon or avatar
Search container
A leading element and a trailing element outside search
A leading element, a trailing element inside search, and a trailing element outside search
A leading element and two trailing elements outside search
Image

An image can be placed in the app bar. In small app bars, this can replace the label text.


Images can be added to app bars and can replace label text on small app bars

Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.


The trailing icons can be configured to be a single filled icon button

Subtitle

The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible

Small
Small with subtitle
Medium flexible
Medium flexible with subtitle
Large flexible
Large flexible with subtitle
Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. Learn more about design tokens

All app bars share the same color roles. On scroll, the container changes color to surface container.


App bar color roles used for light and dark themes:

Surface
On surface
On surface variant
On surface
On surface variant
Surface container (on scroll)

Search app bar color roles used for light and dark themes:

Surface

On surface variant

On surface variant

On surface variant

Surface container

Surface container

Surface container highest

Scroll states

The app bar changes color when flat or on scroll. The search bar can also change color on scroll.

Flat
On scroll
Measurements
Search app bar

Search app bar padding and size measurements

### Small app bar


### Small app bar padding and size measurements


Medium flexible app bar

Medium flexible app bar padding and size measurements

Large flexible app bar

Large flexible app bar padding and size measurements

Baseline app bars

The medium and large app bars are no longer recommended in M3 Expressive. Use the medium flexible and large flexible app bars in their place.


Medium and large app bars have the same elements:

Container
Leading button
Trailing icons
Headline
Tokens & specs

Select a token set to view in the table's menu. Baseline app bar token sets are organized into medium, large, and older baseline token sets. Learn about design tokens

App bar - Size - Medium (baseline)
Token
Value
App bar medium container height
112dp
App bar medium title font


App bar medium icon button size
24dp
App bar medium subtitle font


Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. Learn more about design tokens


### Medium top app bar color roles used for light and dark schemes:


Surface
On surface
On surface
On surface variant
Measurements
### Medium app bar


### Medium app bar padding and size measurements


### Large app bar


### Large app bar padding and size measurements


---

*Extracted from the Material Design 3 website on 2026-03-16.*
