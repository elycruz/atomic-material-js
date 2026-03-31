# M3 Tabs Component — Implementation Plan

> Reference spec: `md/specs/m3-tabs.specs.md`
> GitHub issue: feat(packages/ui): Implement M3 Tabs CSS component (ez-tabs)

---

## Overview

Implement the Material Design 3 Tabs component for `packages/ui` as a CSS-only component
(`.ez-tabs`) with two variants — **Primary** and **Secondary** — matching the tokens and
measurements defined in the M3 spec.

---

## Components

### 1. Tab bar — `.ez-tabs`

The outer container. Holds `.ez-tab` buttons and the `.ez-tabs__indicator` element.

| Class modifier | Description |
|---|---|
| `.ez-tabs.ez-primary` | Primary tabs variant (3dp indicator, inset 2dp) |
| `.ez-tabs.ez-secondary` | Secondary tabs variant (2dp indicator, full-width) |

### 2. Tab button — `.ez-tab`

An individual tab, typically a `<button>` element.

| Class modifier | Description |
|---|---|
| `.ez-tab.ez-active` | Marks the currently active tab |
| `.ez-tab__icon` | Optional leading icon (`24dp`) |
| `.ez-tab__label` | Tab label text |

### 3. Active indicator — `.ez-tabs__indicator`

A positioned element that slides to the active tab's position. Driven by the
`syncIndicator()` / `initTabs()` JS helpers provided in the stories.

When the indicator element is absent (CSS-only fallback), the active tab's
`::after` pseudo-element renders the indicator inline instead.

---

## Measurements

| Attribute | Value |
|---|---|
| Container height (label only) | 48dp |
| Container height (icon + label) | 64dp |
| Icon size | 24dp |
| Divider height | 1dp |
| Primary active indicator height | 3dp |
| Secondary active indicator height | 2dp |
| Active indicator shape (primary) | 3px 3px 0 0 |
| Active indicator minimum length | 24dp |

---

## Files Created / Modified

| Path | Change |
|---|---|
| `md/specs/m3-tabs.specs.md` | Reformatted raw spec into standard Markdown table format |
| `packages/ui/scss/modules/tabs.scss` | New CSS module — Primary & Secondary tab styles |
| `packages/ui/scss/modules/index.scss` | Added `@import "tabs.scss"` |
| `packages/ui/ez-tabs/index.stories.ts` | New Storybook stories — 4 stories with `play` functions |
| `md/plans/completed/m3-tabs.plan.md` | This plan document |

---

## Stories

| Story name | Description |
|---|---|
| `PrimaryLabelOnly` | Primary tabs, text-only tabs |
| `PrimaryIconAndLabel` | Primary tabs, icon + label tabs (64dp height) |
| `SecondaryLabelOnly` | Secondary tabs, text-only tabs |
| `SecondaryIconAndLabel` | Secondary tabs, icon + label tabs |

Each story includes a `play` function that asserts:
- The `.ez-tabs` container is present in the document
- The correct number of `.ez-tab` items exists
- The `.ez-active` tab has the expected content

---

## Implementation Notes

- State layers (hover / focus / pressed) are handled by `<ez-ripple>`, matching
  the pattern used throughout the codebase.
- The `--ez-ripple-color` CSS custom property controls ripple colour per state
  (active vs inactive, primary vs secondary).
- A CSS-only fallback (via `::after` pseudo-element) renders the active indicator
  when `.ez-tabs__indicator` is not present in the DOM.
- The animated indicator requires a small JS helper (`initTabs`) provided in the
  stories. A future `ez-tabs` custom element may encapsulate this behaviour.
- Selectors use `:where(.ez-tabs, ez-tabs)` to support both CSS-class usage and a
  potential future custom element, consistent with codebase conventions.

---

## Completed

- [x] Format `md/specs/m3-tabs.specs.md`
- [x] Create GitHub issue
- [x] Implement `packages/ui/scss/modules/tabs.scss`
- [x] Register tabs in `packages/ui/scss/modules/index.scss`
- [x] Create `packages/ui/ez-tabs/index.stories.ts`
- [x] Create this plan document in `md/plans/completed/`
