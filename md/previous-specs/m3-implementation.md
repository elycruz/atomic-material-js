# Material Design 3 Implementation Requirements for @atomic/ui

## Problem Statement

Update the `@atomic/ui` package (`./packages/atomic-ui-js`) to be a full implementation of the **Material Design 3 (Material You)** design system. The library currently has partial MD3 token support (color, typography, shape, elevation, motion, spacing) and a handful of CSS components and web components. This plan enumerates all requirements to reach parity with the MD3 component specification.

## Current State Summary

### ✅ What Already Exists

#### Design Tokens (mostly complete)
- **Color scheme** — 52 tokens per scheme (light + dark), OKLCH-based seed derivation, `--md-sys-color-*`
- **Typography** — 75 typescale tokens, 15 utility classes, `--md-sys-typescale-*`
- **Shape** — 7 corner radius tokens (`none` → `full`), `--md-sys-shape-*`
- **Elevation** — 6 shadow levels (0–5), utility classes, `--md-sys-elevation-*`
- **Motion** — 7 easing curves + 12 duration scales, `--md-sys-motion-*`
- **Spacing** — 13 spacing + 4 density tokens, `--md-sys-spacing-*`
- **Bridge** — Partial mapping from `--md-sys-*` → `--ez-*` (primary colors, shape, motion only)

#### CSS Components (partial)
- `.ez-btn` / `.ez-button` — sizes (small/normal/large), elevated, button groups
- `.ez-input` / `.ez-textfield` — outlined/underlined variants, sizes, RTL
- `.ez-checkbox` — custom SVG checkmark, animation
- `.ez-radio` — clip-path animation
- `.ez-range` — cross-browser slider
- `.ez-color` — color swatch
- `.ez-card` — outlined, horizontal layout (filled/elevated commented out)
- `.ez-menu` — horizontal variant, nested dropdown
- `.ez-appbar` — filled/outlined/elevated/small
- `.ez-table`, `.ez-form`, `.ez-section`, `.ez-field`, `.ez-fieldset` — minimal/stub

#### Web Components
- `<ez-appbar>` — scroll-aware show/hide decorator (ReactiveElement)
- `<ez-field>` — form field wrapper with validation (LitElement)
- `<ez-ripple>` — MD3 ripple effect (HTMLElement)
- `<ez-toggleonscroll>` — IntersectionObserver class toggler (ReactiveElement)

#### Build Pipeline
- `pnpm gen:css` generates color-scheme, colors, spacing CSS from TypeScript
- `pnpm build:css` compiles via PostCSS (import + cssnano) → `dist/css/`
- Storybook (web-components-vite) for component stories
- Vitest for unit + e2e (Playwright browser) tests

---

## Requirements

### 1. Design Token Gaps

#### 1.1 State Layer Tokens
- **Requirement:** Add `--md-sys-state-*` tokens for interactive state opacities
- **Tokens needed:**
  - `--md-sys-state-hover-state-layer-opacity` (0.08)
  - `--md-sys-state-focus-state-layer-opacity` (0.10)  
  - `--md-sys-state-pressed-state-layer-opacity` (0.10)
  - `--md-sys-state-dragged-state-layer-opacity` (0.16)
- **File:** New `css/modules/material-design-3/state.css`

#### 1.2 Disabled State Tokens
- **Requirement:** Add disabled opacity tokens
- **Tokens needed:**
  - `--md-sys-state-disabled-container-opacity` (0.12)
  - `--md-sys-state-disabled-content-opacity` (0.38)
- **File:** Same `state.css` or new `opacity.css`

#### 1.3 Bridge Expansion
- **Requirement:** Expand `bridge.css` to map all remaining MD3 tokens to `--ez-*` properties
- **Missing mappings:** secondary/tertiary colors, typography, elevation levels, spacing, state layers, density

#### 1.4 Component-Level Tokens
- **Requirement:** Define `--md-comp-*` tokens per component (per MD3 spec)
- Each component should have its own token set mapping `--md-sys-*` → `--md-comp-*`
- Example: `--md-comp-filled-button-container-color: var(--md-sys-color-primary)`

---

### 2. CSS Component Requirements (by MD3 Category)

#### 2.1 Actions

##### 2.1.1 Common Buttons (update existing `.ez-btn`)
- **Variants needed:** Elevated, Filled, Filled Tonal, Outlined, Text
- **States:** Enabled, Disabled, Hovered, Focused, Pressed
- **Features:** Icon support (leading/trailing), state layer overlay
- **Gap:** Current `.ez-btn` has the full MD3 variant set (elevated/filled/tonal/outlined/text)

##### 2.1.2 Icon Buttons (new)
- **Class:** `.ez-icon-btn`
- **Variants:** Standard, Filled, Filled Tonal, Outlined
- **States:** Default, Selected (toggle), Disabled

##### 2.1.3 FABs (new)
- **Class:** `.ez-fab`
- **Variants:** Standard, Small, Large, Extended
- **Features:** Elevation on hover, icon + label (extended), shape (large corner radius)

##### 2.1.4 Segmented Buttons (new)
- **Class:** `.ez-segmented-btn`
- **Variants:** Single-select, Multi-select
- **Features:** Connected button group with shared outline, selection indicator

#### 2.2 Communication

##### 2.2.1 Badges (new)
- **Class:** `.ez-badge`
- **Variants:** Small (dot), Large (with number)
- **Features:** Positioned relative to icon/button

##### 2.2.2 Progress Indicators (new)
- **Class:** `.ez-progress`
- **Variants:** Linear (determinate/indeterminate), Circular (determinate/indeterminate)
- **Features:** Track + indicator colors, animation

##### 2.2.3 Snackbar (new)
- **Class:** `.ez-snackbar`
- **Features:** Single-line, two-line, with action, with close button
- **Positioning:** Bottom of viewport, fixed

##### 2.2.4 Loading Indicators (new)
- **Class:** `.ez-loading`
- **Features:** Indeterminate animation patterns

#### 2.3 Containment

##### 2.3.1 Cards (update existing `.ez-card`)
- **Variants needed:** Elevated, Filled, Outlined (currently only outlined partially works)
- **States:** Draggable, Disabled
- **Features:** Media area, header, content, actions slots

##### 2.3.2 Dialogs (new)
- **Class:** `.ez-dialog` (or web component `<ez-dialog>`)
- **Variants:** Basic, Full-screen
- **Features:** Title, content, actions, scrim overlay, focus trap
- **Consideration:** Could leverage native `<dialog>` element

##### 2.3.3 Bottom Sheets (new)
- **Class:** `.ez-bottom-sheet`
- **Variants:** Modal, Standard (persistent)
- **Features:** Drag handle, partial/full expansion

##### 2.3.4 Side Sheets (new)
- **Class:** `.ez-side-sheet`
- **Variants:** Modal, Dismissible

##### 2.3.5 Dividers (new)
- **Class:** `.ez-divider`
- **Variants:** Full-width, Inset, Middle-inset
- **Features:** Horizontal, Vertical

##### 2.3.6 Carousel (new)
- **Class:** `.ez-carousel`
- **Variants:** Multi-browse, Uncontained, Hero
- **Features:** Pagination dots, navigation arrows

#### 2.4 Navigation

##### 2.4.1 Top App Bar (update existing `.ez-appbar`)
- **Variants needed:** Center-aligned, Small, Medium, Large
- **Features:** Scroll behavior (flat → elevated), collapse on scroll for Medium/Large
- **Gap:** Current implementation handles show/hide but not MD3 visual variants

##### 2.4.2 Bottom App Bar (new)
- **Class:** `.ez-bottom-appbar`
- **Features:** Action icons, embedded FAB cutout

##### 2.4.3 Navigation Bar (new)
- **Class:** `.ez-nav-bar`
- **Features:** 3–5 destinations, icons + labels, active indicator, badge support

##### 2.4.4 Navigation Drawer (new)
- **Class:** `.ez-nav-drawer`
- **Variants:** Standard, Modal, Dismissible
- **Features:** Header, sections, dividers, active state, scrim for modal

##### 2.4.5 Navigation Rail (new)
- **Class:** `.ez-nav-rail`
- **Features:** Vertical icon + label, FAB slot, menu button slot

##### 2.4.6 Tabs (new)
- **Class:** `.ez-tabs`
- **Variants:** Primary, Secondary
- **Features:** Active indicator animation, icon + label, scrollable

#### 2.5 Selection

##### 2.5.1 Checkbox (update existing `.ez-checkbox`)
- **Gap:** Add indeterminate state, error state, MD3 shape & color tokens
- **Features:** State layers, proper error color

##### 2.5.2 Radio Button (update existing `.ez-radio`)
- **Gap:** Add error state, MD3 color tokens, state layers

##### 2.5.3 Switch (new)
- **Class:** `.ez-switch`
- **Features:** Track + handle, selected/unselected, icon in handle, disabled

##### 2.5.4 Slider (update existing `.ez-range`)
- **Gap:** Add discrete steps, tick marks, value label tooltip, range (two-handle) variant

##### 2.5.5 Chips (new)
- **Class:** `.ez-chip`
- **Variants:** Assist, Filter, Input, Suggestion
- **Features:** Leading icon, trailing icon (remove for input), selected state, elevated/flat

#### 2.6 Text Input

##### 2.6.1 Text Fields (update existing `.ez-input` / `.ez-textfield`)
- **Variants needed:** Filled, Outlined (current has outlined/underlined but not filled per MD3 spec)
- **Features:** Label animation (resting → floating), supporting text, error text, character count, leading/trailing icons, prefix/suffix text, clear button
- **Gap:** No floating label animation, no filled variant with container shape

##### 2.6.2 Search Bars (new)
- **Class:** `.ez-search-bar`
- **Variants:** Bar, View (expanded)
- **Features:** Leading icon, trailing avatar, suggestions overlay

##### 2.6.3 Date Pickers (new — tentative/future)
- **Components:** `<ez-date-picker>` or CSS classes
- **Variants:** Docked, Modal, Input
- **Features:** Calendar grid, year selection, range selection
- **Note:** Already listed as tentative in ATOMIC-UI-JS.md

##### 2.6.4 Time Pickers (new — tentative/future)
- **Components:** `<ez-time-picker>` or CSS classes
- **Variants:** Docked, Modal, Input

#### 2.7 Menus & Popups

##### 2.7.1 Menus (update existing `.ez-menu`)
- **Gap:** Add MD3 visual styling, cascading submenu, keyboard navigation
- **Features:** Menu items with leading icon/trailing text, dividers, disabled items, dense variant

##### 2.7.2 Tooltips (new)
- **Class:** `.ez-tooltip`
- **Variants:** Plain (text only), Rich (with title/actions)
- **Features:** Positioned via CSS anchoring or JS, arrow/caret

#### 2.8 Data Display

##### 2.8.1 Lists (new)
- **Class:** `.ez-list`
- **Features:** One-line, two-line, three-line items; leading/trailing elements; dividers; avatar/icon/image support

##### 2.8.2 Data Tables (update existing `.ez-table`)
- **Gap:** Almost no styling currently
- **Features:** Header row, sortable columns, row selection, pagination, fixed header

---

### 3. Web Component Requirements

#### 3.1 Update Existing Components

##### 3.1.1 `<ez-ripple>` — Already MD3 compliant ✅
- Minor: Ensure state layer opacity tokens are used

##### 3.1.2 `<ez-field>` — Update for MD3
- Add floating label animation
- Add support for filled + outlined variants
- Map internal styles to `--md-comp-text-field-*` tokens
- Ensure proper slot layout (leading icon, trailing icon, supporting text, error text)

##### 3.1.3 `<ez-appbar>` — Update for MD3
- Add visual variants (center-aligned, small, medium, large)
- Add scroll-to-elevate behavior
- Add collapsing behavior for medium/large variants

#### 3.2 New Web Components (candidates for interactive behavior)

| Component | Rationale |
|-----------|-----------|
| `<ez-dialog>` | Focus trap, scrim, open/close state, accessibility (role="dialog") |
| `<ez-switch>` | Toggle state management, accessibility (role="switch") |
| `<ez-tabs>` | Active tab state, keyboard navigation, indicator animation |
| `<ez-chip>` | Removable (input chip), selectable (filter chip) state |
| `<ez-nav-drawer>` | Open/close state, modal scrim, responsive behavior |
| `<ez-bottom-sheet>` | Drag gestures, expansion states |
| `<ez-snackbar>` | Auto-dismiss timer, queue management |
| `<ez-tooltip>` | Show/hide on hover/focus, positioning |
| `<ez-carousel>` | Scroll snapping, pagination state, navigation |
| `<ez-slider>` | Two-thumb range, discrete steps, value label |
| `<ez-date-picker>` | Calendar state, date math, localization |
| `<ez-time-picker>` | Clock face interaction, AM/PM toggle |
| `<ez-progress>` | Determinate/indeterminate animation |
| `<ez-badge>` | Content projection, positioning relative to parent |
| `<ez-search-bar>` | Expandable view, suggestion overlay |

---

### 4. Accessibility Requirements

- All interactive components must meet **WCAG 2.1 AA**
- Proper ARIA roles, states, and properties for every component
- Keyboard navigation (Tab, Arrow keys, Enter, Escape, Space) per WAI-ARIA patterns
- Focus management (focus trap for dialogs/modals, roving tabindex for tabs/menus)
- High-contrast mode support via `forced-colors` media query
- `prefers-reduced-motion` support for all animations
- Screen reader announcements for dynamic content (snackbars, progress)
- Color contrast ratios meeting 4.5:1 (normal text) and 3:1 (large text/UI elements)

---

### 5. Theming & Customization Requirements

- **Custom seed color:** Already supported via `gen-css/md3-color-scheme.ts`
- **Runtime theming:** Ability to change `--md-sys-color-*` at runtime for dynamic color
- **Component-level overrides:** `--md-comp-*` tokens per component for granular customization
- **Dark mode:** Already supported via `@media (prefers-color-scheme: dark)` + `.ez-dark` class
- **Custom typography:** Allow overriding font family, weight, size tokens
- **Density support:** Already partially implemented via spacing tokens; needs per-component density application
- **Theme builder integration:** Ensure token output format is compatible with Material Theme Builder JSON export

---

### 6. Documentation & Storybook Requirements

- Storybook story for **every** component showing all variants and states
- Accessibility testing via `@storybook/addon-a11y` (already installed)
- Component API documentation via TypeDoc (already configured)
- Usage examples for both CSS-only and web component approaches
- Theming/customization guide showing how to override tokens
- Migration guide from current `.ez-*` classes to MD3 variants

---

### 7. Testing Requirements

- Unit tests (Vitest + happy-dom) for all web component logic
- Storybook interaction tests (Vitest + Playwright browser) for all visual components
- Accessibility audit tests via axe-core or similar
- Visual regression tests (optional, via Storybook + Chromatic or similar)
- Cross-browser testing: Chrome, Firefox, Safari (via Playwright)

---

### 8. Build & Packaging Requirements

- Update `package.json` exports map for new component subpath entries
- Ensure CSS modules are individually importable (tree-shakeable)
- Maintain backward compatibility with existing `.ez-*` classes via bridge
- Update CSS build pipeline to handle new component CSS files
- Ensure all generated CSS is minimized in production builds

---

### 9. React Wrapper Requirements (@atomic/ui-react)

- React wrapper components for all new web components
- Proper event forwarding (custom events → React synthetic events)
- TypeScript types for all component props
- Server-side rendering compatibility notes

---

## Implementation Priority Tiers

### Tier 1 — Foundation (tokens + core components)
1. State layer + disabled tokens
2. Bridge expansion
3. Buttons (full MD3 variant set)
4. Text Fields (filled + outlined with floating label)
5. Checkbox / Radio / Switch updates
6. Cards (all 3 variants)
7. Dividers
8. Lists

### Tier 2 — Navigation & Feedback
9. Top App Bar (MD3 variants)
10. Tabs
11. Navigation Bar / Rail / Drawer
12. Dialogs
13. Snackbar
14. Progress Indicators
15. Badges
16. Menus (MD3 update)

### Tier 3 — Rich Components
17. Chips
18. FABs
19. Segmented Buttons
20. Sliders (discrete + range)
21. Search Bars
22. Bottom/Side Sheets
23. Tooltips
24. Carousel
25. Data Tables

### Tier 4 — Complex / Future
26. Date Pickers
27. Time Pickers
28. Loading Indicators
29. Bottom App Bar

---

## Notes & Considerations

- **CSS-first philosophy:** The library prioritizes CSS classes over web components. Components should work with plain HTML + CSS classes first, with web components adding interactivity where needed.
- **Backward compatibility:** Existing `.ez-*` classes should continue to work. The bridge CSS maps MD3 tokens to existing custom properties. Breaking changes should be documented.
- **`ez-` prefix convention:** All class names use the `ez-` prefix. Web component tag names use the `ez-` prefix.
- **Lit dependency:** Web components use Lit's `ReactiveElement` or `LitElement`. This remains the approach for new components.
- **No shadow DOM preference:** Most existing components avoid shadow DOM for styling flexibility. New components should follow this pattern unless encapsulation is essential (e.g., ripple).
- **MD3 reference:** https://m3.material.io/components — the canonical specification for all component behavior, visual design, and token mapping.
- **Material Web reference:** https://material-web.dev — Google's official MD3 web component library (now in maintenance mode but useful for token and behavior reference).
