# Tabs: Accessibility

## Use cases

Users should be able to:
- Identify available tabs
- Determine active tab
- Switch between tabs
- Understand tab content

## Interaction

- Tabs should announce current selection
- Active tab clearly indicated
- All tabs keyboard accessible
- Icon should have descriptive alternative text

## Keyboard navigation

| Keys | Actions |
|------|---------|
| Tab | Focus first tab |
| Arrow keys | Move between tabs |
| Enter/Space | Activate focused tab |
| Home/End | Jump to first/last tab |

## Labeling

- Each tab should have descriptive label
- Use appropriate ARIA roles (tablist, tab, tabpanel)
- Indicate active state with aria-selected
- Associate tab with panel using aria-controls
- If icon present, provide alternative text
