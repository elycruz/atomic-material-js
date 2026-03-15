## Plan: M3 Button Group — CSS-Only Layout + Native Input Support

### Current State

- **Custom element** (`ez-btn-group` in `ez-btn-group/ez-btn-group.ts`): Handles spring-animated expand/contract via Web Animations API (pointer events, focus, mutation observer for `aria-pressed`/`.ez-selected`).
- **CSS** (`css/modules/button/button-group.css`): Handles layout (flex, gap), connected variant border-radius, size variants, selected-state colors, and shape-morph animation triggers. Contains significant duplication in the connected variant's `:active` and selected state rules (repeated per-size and per-child-position).
- **Prototype** (`assets/html/btn-group-test-no-reflow.html`): Demonstrates a "zero-reflow" technique using CSS variables + `:has()` for compositor-thread-only animations. Hard-coded for exactly 3 buttons.
- **Base button** (`button.css`): Already uses `display: inline-flex`. No `.ez-btn-content` or `.ez-btn-bg` classes exist yet.

### Goal

1. Enable native `<input type="radio">` and `<input type="checkbox">` inside `.ez-btn` labels for CSS-only single/multi-select.
2. Introduce `.ez-btn-bg` (selected-state background) and `.ez-btn-content` (content wrapper with counter-scaling) inner elements.
3. Consolidate duplicated CSS in `button-group.css` (connected variant rules).
4. Remove `<ez-btn-group>` custom element — replace with CSS-only `.ez-btn-group` container + `:has()` selectors.
5. Update all call sites, stories, and tests.

---

## Use Cases

### Standard button group
```html
<div class="ez-btn-group">
  <button class="ez-btn" type="button">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Button 1</div>
  </button>
  <button class="ez-btn" type="button">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Button 2</div>
  </button>
</div>
```

### Radio button group (single-select)
```html
<div class="ez-btn-group">
  <label class="ez-btn">
    <input type="radio" name="group" id="r1">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Option 1</div>
  </label>
  <label class="ez-btn">
    <input type="radio" name="group" id="r2">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Option 2</div>
  </label>
</div>
```

### Checkbox button group (multi-select)
```html
<div class="ez-btn-group">
  <label class="ez-btn">
    <input type="checkbox" name="multi" id="c1">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Toggle A</div>
  </label>
  <label class="ez-btn">
    <input type="checkbox" name="multi" id="c2">
    <ez-ripple></ez-ripple>
    <div class="ez-btn-bg"></div>
    <div class="ez-btn-content">Toggle B</div>
  </label>
</div>
```

---

## Implementation Phases

### Phase 1: CSS Foundation — New Inner Elements & Input Support

**Files:** `button.css`, `button-group.css`

1. **`.ez-btn-bg`** — Add styles for the selected-state background element:
   - `position: absolute; inset: 0; z-index: 0`
   - `opacity: 0; transform: scale(0.9)` (resting)
   - Transition to `opacity: 1; transform: scale(1)` when parent has `:checked` input
   - Uses spring easing from `--md-sys-motion-easing-expressive-default-spatial`

2. **`.ez-btn-content`** — Add styles for the content wrapper:
   - `display: flex; align-items: center; gap: 8px; z-index: 2; position: relative`
   - `white-space: nowrap; pointer-events: none`
   - Inverse counter-scaling: `transform: scale(var(--_btn-inv-x, 1), var(--_btn-inv-y, 1))`

3. **Hidden native inputs** — Hide `<input>` inside `.ez-btn`:
   - `.ez-btn > input[type="radio"], .ez-btn > input[type="checkbox"] { display: none }`

4. **`:has(input:checked)` detection** — CSS selection state via native input:
   - `.ez-btn:has(input:checked)` triggers selected colors, background, shape morph (same as current `[aria-pressed="true"]`/`.ez-selected` rules)
   - Add `:has(input:checked)` alongside existing `[aria-pressed="true"], .ez-selected` selectors

### Phase 2: CSS-Only Spring Animations (Expand/Contract)

**File:** `button-group.css`

Using `+` (next sibling) and `:has(+)` (previous sibling) combinators to drive expand/contract reactions entirely in CSS. Only the **immediate** previous and next siblings are affected.

1. **Base transform setup** — All buttons in a group get `transform: scaleX(var(--_btn-scale, 1))` with spring transition
2. **Active/selected button** — Sets `--_btn-scale: 1.08` (expand factor)
3. **Immediate next sibling** — `BTN:is(ACTIVE) + BTN:not(ACTIVE)` sets `--_btn-scale: 0.94` (contract)
4. **Immediate previous sibling** — `BTN:not(ACTIVE):has(+ BTN:is(ACTIVE))` sets `--_btn-scale: 0.94` (contract)
5. **Content counter-scaling** — `.ez-btn-content` gets inverse `scaleX(var(--_btn-inv-x, 1))` to prevent text distortion
6. Skip contraction on already-selected neighbors (use `:not(ACTIVE)` guard)

### Phase 3: Consolidate Duplicated CSS in Connected Variant

**File:** `button-group.css` (lines 70–126)

The connected variant currently repeats the same structural pattern (middle/first/last child border-radius) 4 times: default `:active`, `.ez-large:active`, `.ez-xlarge:active`, and selected. Each repeats the same first/last/middle logic with different radius values.

**Approach:** Consolidate using a single `--_connected-state-corner` variable set per state/size, then apply structural rules once:

```css
/* State-specific corner values */
:where(GROUP):is(.ez-connected, [connected]) > :where(BTN):not(:disabled):active {
  --_connected-state-corner: 4px;
}
:where(GROUP):is(.ez-connected, [connected]).ez-large > :where(BTN):not(:disabled):active {
  --_connected-state-corner: 12px;
}
:where(GROUP):is(.ez-connected, [connected]).ez-xlarge > :where(BTN):not(:disabled):active {
  --_connected-state-corner: 16px;
}
:where(GROUP):is(.ez-connected, [connected]) > :where(BTN):is([aria-pressed="true"], .ez-selected, :has(input:checked)) {
  --_connected-state-corner: 50%;
}

/* Structural rules — applied once using the variable */
/* Middle children */
:where(GROUP):is(.ez-connected, [connected]) > :where(BTN):is(:active, [aria-pressed="true"], .ez-selected, :has(input:checked)):not(:first-child, :last-child) {
  border-radius: var(--_connected-state-corner);
}

/* First child — preserve outer-start corners */
:where(GROUP):is(.ez-connected, [connected]) > :where(BTN):is(:active, [aria-pressed="true"], .ez-selected, :has(input:checked)):first-child {
  border-start-end-radius: var(--_connected-state-corner);
  border-end-end-radius: var(--_connected-state-corner);
}

/* Last child — preserve outer-end corners */
:where(GROUP):is(.ez-connected, [connected]) > :where(BTN):is(:active, [aria-pressed="true"], .ez-selected, :has(input:checked)):last-child {
  border-start-start-radius: var(--_connected-state-corner);
  border-end-start-radius: var(--_connected-state-corner);
}
```

This reduces ~60 lines → ~25 lines and eliminates all structural duplication.

### Phase 4: Remove Custom Element

**Files to delete/modify:**
- `ez-btn-group/ez-btn-group.ts` — Remove the `EzBtnGroupElement` class
- `ez-btn-group/register.ts` — Remove registration
- `ez-btn-group/index.ts` — Convert to re-export of CSS only (or remove entirely)
- `ez-btn-group/ez-btn-group.test.ts` — Remove unit tests for custom element
- `package.json` exports — Remove `./ez-btn-group` subpath export

**CSS tag selector cleanup:**
- In `button-group.css`: remove `ez-btn-group` tag selectors (keep `.ez-btn-group` class only)
- In `.storybook/index.storybook.css`: remove `ez-btn-group` from the selector list

### Phase 5: Update Call Sites

- `ez-btn-group/index.stories.ts` — Replace `<ez-btn-group>` with `<div class="ez-btn-group">`, add radio/checkbox examples
- `ez-button/index.stories.ts` — Replace `<ez-btn-group>` usages with `.ez-btn-group` class
- `ez-button/fab.stories.ts` — Already uses `.ez-btn-group` class (no change needed)
- `apps/atomic-ui-js-site/src/app/css-components/button/page.tsx` — Already uses `.ez-btn-group` class (no change needed)
- `ez-button/README.md` — Update documentation to remove `<ez-btn-group>` references

### Phase 6: Selected-State Icon Support

- Add CSS for displaying a checkmark icon when selected:
  - `.ez-btn-content > .ez-btn-check-icon { display: none }`
  - `.ez-btn:has(input:checked) .ez-btn-check-icon { display: inline-flex }`
- Storybook examples showing checkmark icons in radio/checkbox groups

---

## Requirements Checklist

- [x] Button default CSS display is already `inline-flex` (`button.css` line 17) — **no change needed**
- [ ] `*flex` layout moves to `.ez-btn-content` class (Phase 1)
- [ ] CSS-only spring expand/contract animations via sibling combinators (Phase 2)
- [ ] Consolidate duplicated CSS (Phase 3)
- [ ] Custom element removed in favor of CSS-only (Phase 4)
- [ ] Radio/checkbox support via `:has(input:checked)` (Phase 1)
- [ ] Checkmark/icon for selected state (Phase 6)
- [ ] All call sites updated (Phase 5)

## Notes

- The `:has()` selector is supported in all modern browsers (Chrome 105+, Firefox 121+, Safari 15.4+).
- The `aria-pressed`/`.ez-selected` selectors should be retained alongside `:has(input:checked)` for standard button toggle use cases (no native input).
- The prototype's "zero-reflow physics matrix" used hard-coded per-button classes (`.btn-1`, `.btn-2`, `.btn-3`), but the same effect generalizes to N buttons using **adjacent sibling combinators**:

### CSS-Only Sibling Reactions via `+` and `:has(+)`

The expand/contract spring animation can be done entirely in CSS using only the immediate adjacent siblings:

- **Next sibling** (`+`): `BTN:is(ACTIVE_STATE) + BTN` — targets the button immediately after the active one
- **Previous sibling** (`:has(+)`): `BTN:has(+ BTN:is(ACTIVE_STATE))` — targets the button immediately before the active one

```css
/* Shorthand: GROUP = :where(.ez-btn-group), BTN = :where(.ez-btn, .ez-button) */
/* ACTIVE = :is(:active, :has(input:checked), [aria-pressed="true"], .ez-selected) */

/* === Active/selected button expands === */
GROUP > BTN:is(ACTIVE) {
  --_btn-scale: 1.08;
  --_btn-inv-x: 0.926;  /* 1 / 1.08 */
}

/* === Immediate next sibling contracts === */
GROUP > BTN:is(ACTIVE) + BTN:not(ACTIVE) {
  --_btn-scale: 0.94;
  --_btn-inv-x: 1.064;  /* 1 / 0.94 */
}

/* === Immediate previous sibling contracts === */
GROUP > BTN:not(ACTIVE):has(+ BTN:is(ACTIVE)) {
  --_btn-scale: 0.94;
  --_btn-inv-x: 1.064;
}
```

All buttons use:
```css
GROUP > BTN {
  transform: scaleX(var(--_btn-scale, 1));
  transition: transform 300ms cubic-bezier(0.38, 1.21, 0.22, 1.00);
}

GROUP > BTN > .ez-btn-content {
  transform: scaleX(var(--_btn-inv-x, 1));
  transition: transform 300ms cubic-bezier(0.38, 1.21, 0.22, 1.00);
}
```

This eliminates the need for any JavaScript, works for any number of buttons, and runs entirely on the compositor thread (transform-only).
