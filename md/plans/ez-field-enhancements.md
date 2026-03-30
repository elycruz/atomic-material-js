# Plan: Enhance `ez-field` Component — Error Handling, Help Text, Nested Fields

## Context

The `ez-field` web component wraps form inputs and captures native `invalid` events to display `validationMessage`. It needs enhancements for:
- **Programmatic error setting** via an `error` property that propagates to the first child input (via `setCustomValidity` + `checkValidity`)
- **Help text** via a `helpText` property (currently only slot-based `<div slot="help">`)
- **Nested `ez-field` support** where the parent field handles error display, child fields are layout wrappers
- Fixing the broken `:empty` CSS selector in the shadow DOM styles

---

## Changes

### 1. New/Modified Properties on `EzFieldElement`

| Property | Type | Attribute | Default | Purpose |
|---|---|---|---|---|
| `error` | `string` | `error` | `''` | When set, calls `setCustomValidity(error)` on the first input found via `selectors`, then `checkValidity()` to trigger the validation flow. When cleared (`''`), calls `setCustomValidity('')` to remove the custom error. |
| `helpText` | `string` | `help-text` | `undefined` | Programmatic help text rendered below the input |

The existing `validationMessage` property continues to hold the displayed error text (set by `#_onInvalid` handler or directly). The new `error` property is the *input* mechanism — it pushes a custom validity constraint onto the native input, which then flows through the existing `invalid` event pipeline.

### 2. Behavior Changes in `ez-field.ts`

**`error` property setter flow:**
```
User sets field.error = "Bad input"
  → finds first input via this.selectors
  → calls input.setCustomValidity("Bad input")
  → calls input.checkValidity()
  → fires 'invalid' event on input
  → existing #_onInvalid handler catches it
  → sets this.validationMessage = input.validationMessage
  → error renders in the template
```

When `error` is cleared:
```
User sets field.error = ""
  → calls input.setCustomValidity("")
  → clears the custom validity constraint
  → existing #_onInputOrChange will clear validationMessage on next input/change
  → OR we explicitly clear this.validationMessage
```

**Implementation in `updated()`:**
```ts
if (_changedProperties.has('error')) {
  const input = this.#_inputs?.[0];  // requires #_inputs to be array
  if (input) {
    input.setCustomValidity(this.error || '');
    if (this.error) {
      input.checkValidity(); // triggers invalid → #_onInvalid sets validationMessage
    } else {
      this.validationMessage = '';
    }
  }
}
```

**Change `#_inputs` type** from `NodeListOf<...>` to `Array<...>` (use `Array.from()`) so we can index with `[0]` reliably and filter if needed.

**Nested field handling** — Keep it simple: child `ez-field` elements without `selectors` are layout-only wrappers. The parent `ez-field` with `selectors` owns all validation and error display. Child `ez-field` elements don't interfere because they have no event listeners attached (no `selectors` = no listeners). This is the existing pattern from `index.html` and works correctly today.

**Render updates:**
- Error div: use `?hidden=${!this.validationMessage}` instead of broken `:empty` CSS
- Add `<div part="help-text" ?hidden=${!this.helpText}>${this.helpText}</div>` for programmatic help
- Keep existing `<slot name="help">` for slotted HTML help content

### 3. CSS Changes

**`ez-field.scss`** (shadow DOM):
- Remove broken `:host [part~='leading trailing...']:empty` rule (the `~=` selector with space-separated values doesn't work as intended)
- Add `[hidden] { display: none !important; }` for `?hidden` bindings
- Add `[part='help-text']` styling matching existing help slot style

### 4. Demo Updates (`index.html`)

Add examples for:
- Setting `error` attribute/property programmatically
- `help-text` property usage
- Nested `ez-field` for radio group (parent handles error, children are layout wrappers)

---

## Files to Modify

- `packages/ui/ez-field/ez-field.ts` — add `error` + `helpText` properties, update `#_inputs` to array, update `render()` and `updated()`
- `packages/ui/ez-field/ez-field.scss` — fix `:empty` bug, add hidden rule, add help-text style
- `packages/ui/ez-field/index.html` — new demo examples

---

## Usage Examples

**Inline auto-validation (existing behavior, unchanged):**
```html
<ez-field selectors="input" validateOnInput>
  <input type="email" required class="ez-input" />
</ez-field>
```

**Programmatic error via `error` property (e.g., server-side):**
```html
<ez-field selectors="input" id="email-field">
  <input type="email" name="email" class="ez-input" />
</ez-field>
<script>
  // After server response:
  document.getElementById('email-field').error = 'Email already registered';
  // To clear:
  document.getElementById('email-field').error = '';
</script>
```

**Programmatic help text:**
```html
<ez-field selectors="input" help-text="Enter a 5-digit ZIP code">
  <input type="text" pattern="^\d{5}$" required class="ez-input" />
</ez-field>
```

**Radio group — parent handles error, children are layout wrappers:**
```html
<ez-field selectors="input" validateOnChange>
  <div class="ez-flex ez-flex-row-wrap gap-16px">
    <ez-field>
      <input type="radio" name="color" value="red" required />
      <label>Red</label>
    </ez-field>
    <ez-field>
      <input type="radio" name="color" value="blue" required />
      <label>Blue</label>
    </ez-field>
  </div>
</ez-field>
```
Inner `ez-field` elements have no `selectors` — they are pure layout wrappers with no validation listeners. The outer `ez-field` owns the `selectors="input"` and shows the group-level error.

**Nested fields where each manages its own input:**
```html
<ez-field>
  <ez-field selectors="input" validateOnInput>
    <input type="text" name="first" required class="ez-input" />
  </ez-field>
  <ez-field selectors="input" validateOnInput>
    <input type="text" name="last" required class="ez-input" />
  </ez-field>
</ez-field>
```
Outer field (no `selectors`) is a layout container. Each inner field manages its own validation independently.

**Programmatic error on a radio group:**
```html
<ez-field selectors="input" id="color-group">
  <div class="ez-flex ez-flex-row-wrap gap-16px">
    <ez-field>
      <input type="radio" name="color" value="red" required />
      <label>Red</label>
    </ez-field>
    <ez-field>
      <input type="radio" name="color" value="blue" required />
      <label>Blue</label>
    </ez-field>
  </div>
</ez-field>
<script>
  // Set group-level error from server:
  document.getElementById('color-group').error = 'Please select a valid color';
</script>
```

---

## Verification

1. `pnpm build:lib` — build succeeds
2. `pnpm test` — all existing tests pass
3. Open `packages/ui/ez-field/index.html` in browser and verify:
   - Auto-validation: submit form without filling required fields → errors appear inline
   - `error` property: set via JS → error appears; clear → error disappears
   - `error` attribute: set in HTML → error appears on load
   - `help-text` attribute: renders help text below input
   - Slotted `<div slot="help">` still works
   - Radio group: parent field shows single error for the group
   - Form reset clears all errors
   - `error` on radio group: sets custom validity on first radio, error displays on parent
