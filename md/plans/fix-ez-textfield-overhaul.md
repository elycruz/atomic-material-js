# Textfield Component — Comprehensive Fix Plan

## Context

The `ez-textfield` / `.ez-textfield` component has accumulated several interlocking defects that the user wants fixed together:

1. **Layout shift on focus** (outlined + filled). Outlined jumps from `border: 1px` → `border: 3px` on focus (`textfield.scss:129-132, 210-213, 413-419`). Filled does the same at the bottom via `--_tf-indicator-width: 1px → 3px` (`:122-126, :200-207, :402-406`). A `.ez-textfield-border-container` CSS fix exists (`:519-561`) but is **not wired into `ez-textfield.ts`** — the custom element renders only `<div class="ez-textfield">`, so the layout-shift fix is bypassed for every `<ez-textfield>` usage.

2. **Focus ring leaks onto slotted `input`/`select`/`textarea`.** `ez-textfield.ts` renders `.ez-textfield` inside **shadow DOM**, while the user's control is **slotted in from light DOM**. The shadow-DOM-scoped `outline: none` at `textfield.scss:348-350` cannot reach a slotted element. The global `focus-ring.scss:4-11` rule `:is(:not(.ez-textfield) > :is(select, textarea, input)):focus-visible` **matches** because, from the light-DOM perspective, the slotted input's parent is not `.ez-textfield` (that class lives in shadow DOM). Result: native focus ring on the inner control plus the container's ring — double outline.

3. **Floating label mispositioned for `:has(select)` and `:has(textarea)`.** The "populated" trigger uses `:not(:placeholder-shown)`, which **never fires** on `<select>` (no placeholder concept) and on `<textarea>` only when a `placeholder` attribute is present. Additionally, the label uses `top: 50% + translateY(-50%)` (`:222-225, :353-370`) which centers vertically against the container — wrong for a tall multi-line textarea where it should sit at the top.

4. **General jankiness.** Slotted inputs start at `opacity: 0` and fade in (`:334, :387-389`); label runs four simultaneous transitions (`:361-364`); the unused `.ez-textfield-border-container` CSS adds 43 lines of dead weight; redundant flat-DOM + structured-DOM rules duplicate intent.

### Specs & prior art consulted

- `md/specs/m3-textfield.specs.md` (tokens, focus 3dp outline, populated label 12pt)
- `md/material-3/components/text-fields/specs.md` + `overview.md` + `guidelines.md`
- `md/issues/ez-textfield-and-general-issues.md` (items 1 & 2 explicitly listed, author open to alternative for #2)
- Existing patterns: `ez-ripple`, `ez-field`, `packages/ui/scss/modules/button/outlined.scss` (padding-compensation pattern)

### Why this matters

Every `<ez-textfield>` in every form flashes/jumps on focus and double-outlines on focus-visible. Users of the library will hit this on first render — it is table-stakes correctness, not polish.

---

## Recommended Approach: Box-Shadow-Driven Borders

Replace width-changing borders with **box-shadow** for the outline and bottom indicator. `box-shadow` does not participate in layout, so a 1px → 3px change is purely visual — no layout shift, no wrapper element needed, no parallel "border container" class to maintain.

This supersedes the existing `.ez-textfield-border-container` approach (which works but requires every user to wrap outlined textfields in an extra `<div>`, and which the custom element fails to do for itself).

### Critical files to modify

| File | Scope |
|---|---|
| `packages/ui/scss/modules/input/textfield.scss` | Main refactor: box-shadow borders/indicators, label positioning for select/textarea, remove dead `.ez-textfield-border-container` block, simplify transitions |
| `packages/ui/scss/modules/focus-ring.scss` | Add `ez-textfield` (custom-element tag) to the suppressed-descendant selector so slotted controls don't pick up a light-DOM outline |
| `packages/ui/ez-textfield/ez-textfield.scss` | Add `::slotted(input:focus-visible), ::slotted(select:focus-visible), ::slotted(textarea:focus-visible) { outline: none }` to reach into light DOM from shadow DOM |
| `packages/ui/ez-textfield/ez-textfield.stories.ts` | Remove `ez-textfield-border-container` wrappers from `renderTextField`, `renderSelectField`, `renderTextareaField` helpers (lines ~92, ~180, ~251); update play-function selectors |
| `packages/ui/scss/modules/input/input-controls.stories.ts` (if present) | Same removal |

### Fix details

**Fix A — Outlined layout shift (textfield.scss)**
Replace the `.ez-outlined` rules (`:210-213, :413-419`) with:
```scss
:where(.ez-textfield).ez-outlined {
  border: none;
  box-shadow: inset 0 0 0 var(--_tf-border-width) var(--_tf-outline-color);
  transition: box-shadow var(--_tf-speed) var(--_tf-easing);
}
:where(.ez-textfield).ez-outlined:focus-within {
  box-shadow: inset 0 0 0 3px var(--_tf-outline-color);
}
```
Remove the `--_tf-border-width: 3px` reassignment on focus (`:129-132`) — only the color token should change on focus; width change is now in the box-shadow rule itself. Remove the entire `.ez-textfield-border-container` block (`:500-561`).

**Fix B — Filled indicator layout shift (textfield.scss)**
Replace `border-bottom: var(--_tf-indicator-width) ...` (`:204, :404`) with:
```scss
:where(.ez-textfield).ez-filled {
  border: none;
  box-shadow: inset 0 calc(-1 * var(--_tf-indicator-width)) 0 0 var(--_tf-indicator-color);
}
```
This preserves the existing `--_tf-indicator-width: 1px → 3px` state reassignment at `:122-126` but the change no longer affects layout.

**Fix C — Suppress focus ring on slotted controls (ez-textfield.scss)**
Add:
```scss
:host ::slotted(input:focus-visible),
:host ::slotted(select:focus-visible),
:host ::slotted(textarea:focus-visible) {
  outline: none;
}
```
And in `focus-ring.scss`, update the selector to exclude descendants of the `ez-textfield` custom element:
```scss
:is(:not(.ez-textfield, ez-textfield) > :is(select, textarea, input)):focus-visible { ... }
```
Keep the `.ez-textfield:has(:focus-visible)` host-ring rule — that's correct.

**Fix D — Floating label for `<select>` and `<textarea>` (textfield.scss)**
- For `<select>`: selects are always "populated" in the user's mental model (there's always a selected option). Float the label unconditionally when the textfield contains a select:
  ```scss
  :where(.ez-textfield):has(select) :where(.ez-textfield-label) {
    transform: var(--_tf-label-active-transform);
  }
  ```
- For `<textarea>`: align the label to the top (not vertical-center) and use `:placeholder-shown` as today (requires `placeholder=" "` trick, which is already the convention and documented):
  ```scss
  :where(.ez-textfield):has(textarea) :where(.ez-textfield-label) {
    top: var(--_tf-padding);
    transform: translateY(0);
  }
  :where(.ez-textfield):has(textarea):focus-within :where(.ez-textfield-label),
  :where(.ez-textfield):has(textarea:not(:placeholder-shown)) :where(.ez-textfield-label) {
    transform: var(--_tf-label-active-transform);
  }
  ```
- Apply the same adjustment to the flat-DOM `> label` path at `:220-248`.

**Fix E — Remove jank sources (textfield.scss)**
- Drop `opacity: 0 → 1` on slotted controls (`:334, :387-389, :464-466`). The populated-label animation already conveys the state change; fading the input text adds nothing and stutters on slow devices.
- Narrow the label's transition list to `transform, color` only — drop `background` and `border-color` (label has neither that changes meaningfully).
- Delete the entire `.ez-textfield-border-container` block and its disabled/error variants (no longer referenced).

**Fix F — Story / helper cleanup (ez-textfield.stories.ts)**
- Remove `ez-textfield-border-container` wrapper construction from the three helpers (`:92-101, :180-189, :251-260`).
- Leave play-function assertions unchanged where possible; update any selector that queried `.ez-textfield-border-container`.

### Reused existing utilities

- `--_tf-*` token system in `textfield.scss:46-100` — keep as-is.
- `@extend %md-typescale-body-large` / `%md-typescale-body-small` — keep for typography.
- `focus-ring.scss` global rule — reuse with the single selector tweak in Fix C.
- `EzBaseElement` base class — unchanged; this is all CSS + one shadow-DOM style block.

---

## Execution: Agent Swarm + Worktree Strategy

The user asked for agent-swarms and git worktrees. Because all three major SCSS fixes (A, B, D, E) touch the **same file** (`textfield.scss`), parallel worktrees there would conflict. The practical split is by **file ownership**:

**One GitHub issue, one feature branch, one worktree.** Within that worktree, run two swarm-phase agents **in parallel** on non-overlapping files, then a sequential verification phase:

- **Worktree**: `../atomic-material-js-textfield-fix/` on branch `fix/NNN-textfield-overhaul` (NNN = new issue number).
- **Swarm phase 1 (parallel)**:
  - Agent α — rewrites `packages/ui/scss/modules/input/textfield.scss` (Fixes A, B, D, E).
  - Agent β — patches `packages/ui/ez-textfield/ez-textfield.scss` + `packages/ui/scss/modules/focus-ring.scss` (Fix C).
  - Agent γ — updates `packages/ui/ez-textfield/ez-textfield.stories.ts` helpers and any affected play selectors (Fix F).
- **Swarm phase 2 (sequential)**:
  - Run `pnpm lintfix`, `pnpm build`, and the Storybook test runner in the worktree.
  - Visually verify in Storybook that focus no longer shifts layout and no double-outline appears.
- **Merge**: single PR off the branch, closes the new issue + references the two items in `md/issues/ez-textfield-and-general-issues.md`.

**Prerequisite**: create a GitHub issue ("fix(ez-textfield): layout shift, slotted focus ring, select/textarea label positioning") — per `CLAUDE.md`, work cannot start without it.

---

## Verification

End-to-end checks once the branch is built:

1. **Layout shift** — Open Storybook for `OutlinedTextField` and `FilledTextField`. Focus the input; use DevTools Layout Shift tool (or visually confirm). Repeat with `TextareaTextField` and `SelectTextField`. Before fix: visible 2px jump. After: zero shift.
2. **Slotted focus ring** — Tab into `<ez-textfield>` (custom-element story variants); only the container outline should render, never a second ring on the inner input. Verify via computed-style panel that the `<input>` has `outline: none`.
3. **Floating label positioning** —
   - `SelectTextField`: label should be pre-floated (top, small font) from initial render.
   - `TextareaTextField`: label should sit at the top (not vertically centered against a tall textarea), animate up on focus, and stay up while populated.
4. **Play functions pass** — `pnpm test` (or the storybook test-runner equivalent used in the repo). All existing assertions should still hold since we are not changing class names or structure, only border technique.
5. **Lint + build** — `pnpm lintfix && pnpm build` clean.
6. **Reduced motion** — with `prefers-reduced-motion: reduce` enabled, no transitions fire; state changes are instant but still visually correct.
7. **Error + disabled states** — `ErrorStates` and disabled variants should continue to render the error color and dimmed appearance (only the border *technique* changed, not the colors).

---

## Decisions confirmed

- `.ez-textfield-border-container` will be **removed entirely**. Box-shadow on `.ez-textfield` itself carries the border for both variants. No wrapper element; ~43 lines of CSS deleted; stories updated to drop the wrapper.
- Work lands as **one GitHub issue, one feature branch, one PR**. Agent swarm runs inside a single worktree, split by file ownership (α = `textfield.scss`, β = `ez-textfield.scss` + `focus-ring.scss`, γ = stories).
