# `scss/modules/input/` — Current State

_Snapshot of `packages/ui/scss/modules/input/` and how its styles relate, plus the
changes needed so that the **only** text-field-like styles defined are those of the
M3 `.ez-textfield` implementation._

Scope: `packages/ui/scss/modules/input/` — `index.scss`, `form-control.scss`,
`checkbox.scss`, `radio.scss`, `switch.scss`, `textfield.scss`, `range.scss`,
`color.scss`. Cross-module touch-points (`fieldset/`, `focus-ring.scss`,
`base/bridge.scss`, `modules/properties.scss`) are noted because they participate in
the same cascade.

---

## 1. Files & import order

`index.scss` is the barrel; import order determines source-order precedence between
equal-specificity rules (most selectors here are `:where(...)`, i.e. specificity 0, so
**source order is the tie-breaker**):

```
@import "form-control.scss";   // 1. base reset for native controls
@import "checkbox.scss";       // 2. checkbox + shared radio/checkbox box-model
@import "radio.scss";          // 3. radio overrides (shape/size/indicator)
@import "switch.scss";         // 4. switch (a checkbox with role="switch")
@import "textfield.scss";      // 5. M3 .ez-textfield (text/select/textarea)
@import "range.scss";          // 6. range slider
@import "color.scss";          // 7. color swatch
```

`index.scss` is pulled in once by `modules/index.scss:18` (`@import "input/index.scss"`).

---

## 2. How the styles inherit / relate to each other

### 2a. Two token generations (the dominant relationship)

Every file sits somewhere on a **legacy `--ez-*` → Material 3 `--md-sys-*`** migration
gradient. The two token families are bridged externally:

- **Legacy `--ez-input-*`** are defined in `modules/properties.scss:7-12` (with
  system-color fallbacks like `Field`, `FieldText`, `ButtonBorder`) and **re-mapped to
  M3** in `base/bridge.scss:22-26,41` (e.g. `--ez-input-border-color: var(--md-sys-color-outline)`).
- **M3 `--md-sys-*`** are consumed directly.

Where each file sits on that gradient:

| File | Tokens used | Migration state |
|------|-------------|-----------------|
| `textfield.scss` | Self-contained private `--_tf-*` set, priority `--md-color-* > --md-sys-color-* > --ez-* > system` (`textfield.scss:42-97`) | **Fully M3**, self-isolating |
| `switch.scss` | `--md-sys-*` with hard-coded hex fallbacks | Mostly M3 |
| `checkbox.scss` / `radio.scss` | Hybrid: `--md-sys-color-*` for color **with `--ez-input-*` fallbacks**, plus `--ez-input-speed`, `--ez-input-bg-color`, `--ez-input-border-width`, `--ez-*px` spacing | **Hybrid** |
| `range.scss` / `color.scss` | `--ez-input-*`, `--ez-*px`, `--ez-border-*` only — **no M3 tokens** | **Legacy only** |

> Implication: `range` and `color` only become MD3-aligned indirectly, via the
> `bridge.scss` re-mapping of `--ez-input-*`. `textfield` is the only file that owns its
> own private, fully-tokenized property layer.

### 2b. Selector-level inheritance (intra-folder)

Only **one** real inheritance chain exists inside the folder:

- `checkbox.scss:1` defines the shared base for **both** controls:
  `:where(.ez-radio, .ez-checkbox, [type="radio"], [type="checkbox"])` — `appearance:none`,
  the `inline-grid` box model, border, transition, `::after` indicator scaffold.
- `radio.scss` then **overrides** shape/size on top of that base (circle radius,
  `1.25rem` box, `circle()` clip-path indicator). So **radio inherits checkbox's
  box-model** and re-skins it.
- `switch.scss` is the second-order case: a switch is `[type="checkbox"][role="switch"]`,
  so the **checkbox base also matches it**, then `switch.scss` (imported later → wins on
  equal specificity) overrides width/height/track/handle and re-defines `::after` as the
  handle. ⚠️ This cross-match is load-bearing on source order; see caveat 4b.

`form-control.scss`, `textfield.scss`, `range.scss`, and `color.scss` share **no
selectors** with each other — they are independent.

### 2c. The dual-selector convention

Every component except the textfield matches **both a class and the bare element type**:

```
:where(.ez-range,  [type="range"])           // range.scss
:where(.ez-color,  [type="color"])           // color.scss
:where(.ez-switch, [type="checkbox"][role="switch"])  // switch.scss
:where(.ez-radio, .ez-checkbox, [type="radio"], [type="checkbox"])  // checkbox/radio
```

→ These style native controls **globally, by input type, with no class required**.

**The text field is deliberately different.** `textfield.scss` is gated entirely behind
the **`.ez-textfield` wrapper class** and never matches a bare `[type="text"]`. Inside
that wrapper it targets the slotted control with
`:where(.ez-textfield) :where(input:not([type="hidden"]), select, textarea)`
(`textfield.scss:243`). A bare `<input type="text">` with no `.ez-textfield` ancestor
receives **no** field decoration. This is the result of the #86 refactor
(`7b32604 make .ez-textfield the sole class for textfield-like inputs`).

### 2d. Cross-module relationships (outside `input/` but in the same cascade)

- `form-control.scss` — base disabled reset for **all** native controls; overlaps with
  `fieldset/index.scss` `:disabled` and with `textfield`'s own disabled block.
- `fieldset/index.scss:4-9` — global `input, textarea, select, button { font-size: 1rem }`
  and `:disabled { pointer-events:none; opacity:.55 }`. Applies to bare text controls.
- `fieldset/field.scss` — the `ez-field` / `.ez-field` wrapper that hosts a `.ez-textfield`
  plus help / error / supporting text (the textfield header explicitly delegates these to
  `ez-field`, `textfield.scss:33`).
- `focus-ring.scss` — owns focus-visible outlines; **special-cases** `.ez-textfield`
  (container renders the ring) vs. bare `:not(.ez-textfield) > :is(select, textarea, input)`
  (control renders its own ring).
- `base/bridge.scss` + `modules/properties.scss` — supply the `--ez-input-*` values that
  checkbox/radio/range/color depend on.

### 2e. Relationship map

```
 properties.scss ──┐ (default --ez-input-* w/ system fallbacks)
 bridge.scss ──────┴─► --ez-input-* ─► checkbox/radio (hybrid), range/color (legacy)
                                          │
 --md-sys-* tokens ─► switch, checkbox/radio colors, textfield (--_tf-*)
                                          │
 checkbox.scss (base box-model) ─► radio.scss (reskin), also matched by switch.scss
                                          │
 form-control.scss ─► all native :disabled ─┐ overlaps
 fieldset/index.scss :disabled / font-size ─┘
                                          │
 textfield.scss (.ez-textfield only) ─► ez-field wrapper (fieldset/field.scss)
                                       └► focus-ring.scss (container-vs-bare split)
```

---

## 3. The text-field-like inventory — what styles a text-entry control today

"Text-field-like" = anything that styles `input[type=text|email|password|search|url|tel|
number|date|datetime-local|month|week|time]`, `select`, or `textarea`. Auditing every
rule that can reach those elements:

| Source | Rule | Text-field-like? | Owner is M3 textfield? |
|--------|------|------------------|------------------------|
| `textfield.scss` | Everything, gated behind `.ez-textfield` | ✅ Yes | ✅ **Yes — intended** |
| `form-control.scss:8-13` | `:where(input:not([type=hidden]), select, textarea):disabled { cursor }` | ✅ generic disabled | ❌ unscoped, global |
| `fieldset/index.scss:4-9` | `input, textarea, select, button { font-size:1rem }` + `:disabled{opacity}` | ✅ font sizing on bare text controls | ❌ unscoped, global |
| `focus-ring.scss:4-11` | focus-visible outline on bare `:not(.ez-textfield) > input/select/textarea` | ✅ (a11y) | ❌ intentional bare-input rule |
| `checkbox/radio/switch/range/color` | match `[type=checkbox/radio/range/color]` only | ❌ not text-entry | n/a (out of scope) |

**Good news:** there is **no** border / background / padding / typography decoration
applied to a bare unwrapped text input anywhere. The #86 refactor already moved the bulk
of field styling behind `.ez-textfield`. What remains are three generic base rules
(disabled behavior, font normalization, focus ring) that incidentally reach bare text
controls.

---

## 4. Changes needed — make `.ez-textfield` the sole owner of text-field styles

Goal: a text-entry control should be styled **only** when wrapped in `.ez-textfield`; no
text-field-like styling should be defined outside `textfield.scss`. Concrete edits, in
priority order:

### A. Remove the redundant generic disabled reset — `form-control.scss`
`form-control.scss` defines only `:disabled { pointer-events:none; cursor:not-allowed }`
for all native controls. This is **fully duplicated**:
- `pointer-events:none` already in `fieldset/index.scss:11-14`'s `:disabled` rule;
- textfield's own disabled block (`textfield.scss:428-452`) handles `.ez-textfield`.

It is also not text-field-specific (it also hits checkbox/radio/range/color), yet it is
the only thing in the folder reaching a bare text input's disabled state.

→ **Recommended:** delete `form-control.scss` and its `@import` in `index.scss:1`; let
`fieldset/index.scss :disabled` cover the cursor/pointer reset.
(Alternative if kept: rename to make explicit it is a *global control reset*, not field
styling, so it is not mistaken for text-field ownership.)

### B. Stop normalizing font-size on bare text controls — `fieldset/index.scss:4-9`
`input, textarea, select, button { font-size: 1rem }` sets text-field-like typography on
bare controls. `textfield.scss` already governs typography for wrapped controls via the
`%md-typescale-body-large` placeholder (`textfield.scss:202,248`), so this global rule is
the one genuine **leak of text-field-like sizing** outside the M3 component.

→ **Recommended:** drop `input, textarea, select` from that rule (keep `button` if it
relies on it), or relocate it to an explicit reset layer that is clearly not "field"
styling. After this, an unwrapped text input inherits page font size and carries **zero**
field-like styling.

### C. Leave the focus ring, but document it as the one intentional exception
`focus-ring.scss` deliberately gives a bare `:not(.ez-textfield) > input/select/textarea`
a focus-visible outline. This is an accessibility baseline for any focusable control, not
field decoration — **keep it**, but note it as the single sanctioned bare-text-input rule
so it is not "cleaned up" by mistake.

### D. Confirm the invariant after A + B
After A and B, the **only** rules that style a text-entry control are inside
`textfield.scss` behind `.ez-textfield` (plus the focus-ring a11y exception in C). That
satisfies the goal. No changes to `checkbox/radio/switch/range/color` are needed for this
objective — they are selection / range / color controls, not text fields.

### E. (Related, optional — not required for the goal) token unification
`range.scss` and `color.scss` are still legacy-token-only (`--ez-input-*`, `--ez-*px`).
They are not text-field-like, so they're out of strict scope, but migrating them to
`--md-sys-*` (as `textfield`/`switch` already are) would finish the token story described
in §2a. Track separately.

---

## 5. Summary

- The folder is organized as a barrel (`index.scss`) over 7 partials; **source order**
  is the precedence mechanism because nearly everything is `:where()` (specificity 0).
- The defining relationship is the **legacy `--ez-input-*` → M3 `--md-sys-*` gradient**:
  `textfield` (full M3, self-isolated) → `switch` → `checkbox`/`radio` (hybrid) →
  `range`/`color` (legacy), bridged by `bridge.scss`/`properties.scss`.
- The only intra-folder selector inheritance is **checkbox → radio** (shared box-model)
  and **checkbox base → switch** (matched-then-overridden).
- Every control except the text field uses a **class-or-bare-element** selector; the text
  field is intentionally **`.ez-textfield`-gated** and never styles a bare input — most of
  the "sole owner" goal is already met (#86).
- Remaining work is small: **(A)** delete the redundant `form-control.scss` disabled
  reset, **(B)** stop font-normalizing bare text controls in `fieldset/index.scss`, **(C)**
  keep the focus-ring a11y rule as the one documented exception. Then `.ez-textfield` is
  the sole definer of text-field-like styles.
