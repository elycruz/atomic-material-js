# CSS Component Updates Plan

## Ez-Textfield updates

### General Todos

- Add "outlined", "underlined", and "filled" variants of the component.
- This class should also be affected by the code in `focus-ring.scss`.
- Update/rewrite the "M3 Input" stories to depict the new implementation and list them under "CSS Components/Textfield" and "Custom Element/Textfield" for the custom element version.

### Class rename map

All `.ez-tf-*` classes are superseded by the new `.ez-textfield-*` convention:

| Old class          | New class / status                                         |
|--------------------|------------------------------------------------------------|
| `.ez-tf-wrapper`   | *(eliminated — structure flattened)*                       |
| `.ez-tf-field`     | *(eliminated — structure flattened)*                       |
| `.ez-tf-center`    | `.ez-textfield-center`                                     |
| `.ez-tf-leading`   | `.ez-textfield-leading` (optional)                         |
| `.ez-tf-trailing`  | `.ez-textfield-trailing` (optional)                        |
| `.ez-tf-input`     | `:where(input:not([type="hidden"]), select, textarea)` — bare element selector |
| `.ez-tf-label`     | `.ez-textfield-label` (optional)                           |
| `.ez-tf-help`      | *(moved to ez-field — see below)*                          |
| `.ez-tf-messages`  | *(moved to ez-field — see below)*                          |

### New structure

```pseudo-css
.ez-textfield[.ez-filled|.ez-outlined|.ez-underlined]...
  .ez-textfield-leading (optional)
  .ez-textfield-center
    :where(input:not([type="hidden"]), select, textarea)
    .ez-textfield-label (optional)
  .ez-textfield-trailing (optional)
```

**Note:** `.ez-textfield-center` should apply CSS gap between its children and handle positioning of the `.ez-textfield-label` element. It is expected to contain at most one input-like element and one label.

### Custom Element

**Extends:** `EzBaseElement` (provides `variety`, `theme`, reactive updates, box-sizing base).

**Location:** New `packages/ui/ez-textfield/` directory (separate from `ez-input/`).

The implementation mirrors the CSS-only structure inside its shadow DOM so that `.ez-outlined`, `.ez-filled`, `.ez-underlined` classes are rendered internally based on the `variety` property inherited from `EzBaseElement`.

`.*(leading|trailing)` should be exposed via `part="(leading|trailing)"` and should expose `slot` with matching name where the following will hold `.*(leading|trailing) > slot[name="..."]`.

```html
<ez-textfield variety="outlined">
  <div slot="leading" class="md-icon">dollar</div>
  <label for="...">...</label>  <!-- Placed in unnamed slot -->
  <input id="..." /> <!-- Placed in unnamed slot -->
  <div slot="trailing" class="md-icon">error</div>
</ez-textfield>

<!-- etc. -->
```

`.ez-textfield-center` in this case will hold the unnamed slot.

#### Shadow DOM template

```html
<div class="ez-textfield ${varietyClass}">
  <div class="ez-textfield-leading" part="leading">
    <slot name="leading"></slot>
  </div>
  <div class="ez-textfield-center" part="center">
    <slot></slot>
  </div>
  <div class="ez-textfield-trailing" part="trailing">
    <slot name="trailing"></slot>
  </div>
</div>
```

Where `varietyClass` is derived from `this.variety` (e.g., `"outlined"` → `"ez-outlined"`).

This implementation should import the 'input' and 'textfield' \*.scss files (via `?inline`) for its styling and should additionally have its own `ez-textfield.scss` file for targeting its contained `part`s and itself (`:host`, etc.).

Help, messages, supported text, etc., will be handled by `.ez-field`/`ez-field` from now on. This allows decoupling of different functionality and enables `ez-field` to work with third-party custom elements.

### Known issue: Outlined notch effect

The outlined variant's floating label notch (gap in the border where the label sits) needs rethinking with the new structure. The current technique (label `background: var(--_tf-surface-color)`) is tied to old selectors. **Deferred to a separate issue.**

---

## Ez-Field updates

### New CSS structure

```pseudo-css
.ez-field
  .ez-field-leading   (optional)
  .ez-field-center
    .ez-input, .ez-textfield, etc.
    .ez-field-help    (optional)
    .ez-field-error   (optional)
    .ez-field-content (optional)
  .ez-field-trailing  (optional)
```

### BEM class names removed

Old BEM-style names are removed entirely (not deprecated). New names only:

| Removed class                | Replacement            |
|------------------------------|------------------------|
| `.ez-field__help`            | `.ez-field-help`       |
| `.ez-field__error-message`   | `.ez-field-error`      |
| `.ez-field__custom`          | `.ez-field-content`    |
| `.ez-field__flex-row`        | *(eliminated)*         |
| `.ez-field__leading`         | `.ez-field-leading`    |
| `.ez-field__trailing`        | `.ez-field-trailing`   |

### Custom Element updates

This element should import the `field.scss` file as well for its stylesheets (its own internal stylesheet `ez-field.scss` should still also be imported — it serves as its base for targeting `:host`, elements with `part` attributes, and its own contained slots, etc.).

#### Updated shadow DOM template

```html
<div class="ez-field">
  <slot name="leading" part="leading"></slot>
  <div class="ez-field-center" part="center">
    <slot></slot>
    <slot name="help" part="help"></slot>
    <slot name="error" part="error">${this.validationMessage}</slot>
    <slot name="content" part="content"></slot>
  </div>
  <slot name="trailing" part="trailing"></slot>
</div>
```

**Changes from current:**
- `<div class="center">` → `<div class="ez-field-center">`
- Error rendering: `<div class="error" part="error">${msg}</div>` → `<slot name="error" part="error">${msg}</slot>` (slot with text fallback)
- `<slot name="custom" part="custom">` → `<slot name="content" part="content">`

---

## Associated Changes

### New files to create

| File | Purpose |
|------|---------|
| `packages/ui/ez-textfield/ez-textfield.ts` | Custom element class extending `EzBaseElement` |
| `packages/ui/ez-textfield/ez-textfield.scss` | Shadow DOM styles (`:host`, `part` targeting) |
| `packages/ui/ez-textfield/index.ts` | Barrel exports |
| `packages/ui/ez-textfield/register.ts` | `registerCustomElement()` call |
| `packages/ui/ez-textfield/ez-textfield.stories.ts` | Storybook stories with `play` functions |
| `packages/ui-react/ez-textfield/index.ts` | React wrapper via `@lit/react` `createComponent()` |
| `packages/ui-next/ez-textfield/index.ts` | Next.js dynamic wrapper (SSR disabled) |

### Files to modify

| File | Change |
|------|--------|
| `packages/ui/package.json` | Add `"./ez-textfield"` export entry |
| `packages/ui/index.ts` | Add `export * from './ez-textfield/index.js'` |
| `packages/ui-react/package.json` | Add `"./ez-textfield"` export entry |
| `packages/ui-react/index.ts` | Add textfield re-export |
| `packages/ui-next/package.json` | Add `"./ez-textfield"` export entry |
| `packages/ui-next/index.ts` | Add textfield re-export |
| `scss/modules/input/textfield.scss` | **Major rewrite** — see class rename map above |
| `scss/modules/input/input.scss` | Update selectors referencing old `.ez-tf-*` names |
| `scss/modules/fieldset/field.scss` | Remove BEM names; add `.ez-field-error`, `.ez-field-content` |
| `scss/modules/focus-ring.scss` | Verify `.ez-textfield` still works with new internal structure |
| `packages/ui/ez-field/ez-field.scss` | Update shadow DOM styles for new template |
| `packages/ui/ez-field/ez-field.ts` | Update `render()` with new shadow DOM template |

### Stories to update

| File | Change |
|------|--------|
| `ez-input/m3-textfield.stories.ts` | **Move** to `ez-textfield/`; rewrite with new class names |
| `ez-input/index.stories.ts` | Update HTML structures to new class names |
| `ez-field/ez-field.stories.ts` | Update for new shadow DOM template |
| `scss/modules/fieldset/index.stories.ts` | Update for removed BEM class names |
| `ez-dialog/index.stories.ts` | Update textfield references |

---

## Other

Ensure all affected stories, along with their tests, are updated to use the new structures and to take them into account.
