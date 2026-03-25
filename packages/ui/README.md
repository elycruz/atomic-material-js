# @atomic/ui

An atomic, CSS-first, user interface toolkit and library for building custom elements and user interfaces. Built on the web platform, [Material Design 3](https://m3.material.io/) specifications, and the [Lit](https://lit.dev/) library.

## Installation

```bash
pnpm add @atomic/ui
# or
npm install @atomic/ui
# or
yarn add @atomic/ui
```

## Overview

`@atomic/ui` provides a comprehensive Material Design 3 component library with two approaches:

1. **CSS-First Components** — Pure CSS/SCSS modules that can be used with any framework or vanilla HTML
2. **Custom Elements** — Web components built with Lit for enhanced functionality and encapsulation

## Custom Elements (Web Components)

The following custom elements are complete and ready to use:

| Component | Description | Status |
|-----------|-------------|--------|
| `ez-appbar` | Top application bar with Material Design 3 styling | ✅ MVP Complete |
| `ez-base` | Base class for building custom elements | ✅ MVP Complete |
| `ez-button-surface` | Interactive button surface with ripple effects | ✅ MVP Complete |
| `ez-field` | Form field wrapper component | ✅ MVP Complete |
| `ez-ripple` | Material Design 3 state layer / ripple effect | ✅ MVP Complete |
| `ez-shape` | Shape morphing and styling utilities | ✅ MVP Complete |

### Usage Example

```typescript
import '@atomic/ui/ez-button-surface';
import '@atomic/ui/ez-ripple';

// Use in HTML
<ez-button-surface>
  <button>
    <ez-ripple></ez-ripple>
    Click me
  </button>
</ez-button-surface>
```

### Available Exports

Each component can be imported individually:

```typescript
import { EzAppbarElement } from '@atomic/ui/ez-appbar';
import { EzBaseElement } from '@atomic/ui/ez-base';
import { EzButtonSurfaceElement } from '@atomic/ui/ez-button-surface';
import { EzFieldElement } from '@atomic/ui/ez-field';
import { EzRippleElement } from '@atomic/ui/ez-ripple';
import { EzShapeElement } from '@atomic/ui/ez-shape';
```

Or import everything:

```typescript
import * from '@atomic/ui';
```

## CSS/SCSS Modules

The library includes a comprehensive Material Design 3 design system built with SCSS. These components work without JavaScript and can be used with any framework.

### MVP Complete CSS Components

| Component | Description | Features |
|-----------|-------------|----------|
| **Button** | Material Design 3 buttons | Filled, Outlined, Tonal, Text, Elevated, FAB, Icon Button, Square |
| **Button Group** | Grouped button layouts | Horizontal and vertical grouping |
| **Badge** | Notification badges | Small/large, positioned, standalone |
| **Card** | Container cards | Filled, Outlined, Elevated variants |
| **Dialog** | Modal dialogs | Full-screen and standard dialogs |
| **Divider** | Visual separators | Horizontal and vertical dividers |
| **Field** | Form field containers | Material Design 3 field styling |
| **Fieldset** | Grouped form controls | Accessible fieldset styling |
| **Input** | Form inputs | Text, Checkbox, Radio, Switch, Range, Color |
| **List** | Lists and list items | Material Design 3 list patterns |
| **Shape** | Shape utilities | Shape morphing and styling |
| **Menu** | Menu components | Dropdown and context menus |
| **Form** | Form containers | Form layout utilities |
| **Table** | Data tables | Basic table styling |
| **Section** | Section containers | Content sections |
| **Focus Ring** | Focus indicators | Accessible focus styling |
| **Spacing** | Spacing utilities | Consistent spacing system |

### Using CSS Modules

Import the compiled CSS in your HTML:

```html
<link rel="stylesheet" href="node_modules/@atomic/ui/dist/css/index.min.css">
```

Or import SCSS modules in your build:

```scss
@import '@atomic/ui/scss/modules/button/index.scss';
@import '@atomic/ui/scss/modules/card.scss';
```

Or import the entire design system:

```scss
@import '@atomic/ui/scss/modules/index.scss';
```

### CSS-Only Button Example

```html
<button class="ez-button ez-filled ez-primary">
  Filled Button
</button>

<button class="ez-button ez-outlined ez-secondary">
  Outlined Button
</button>

<button class="ez-button ez-fab">
  <span class="material-icons">add</span>
</button>
```

### Material Design 3 Foundation

The SCSS system includes:

- **Base Styles** — Reset, typography, spacing, elevation, motion, shape, state layers
- **Theming** — Light, dark, and high-contrast themes
- **Design Tokens** — Material Design 3 color, typography, and spacing tokens
- **Typography** — Material Design 3 typescale system
- **Placeholders** — Reusable SCSS placeholders for common patterns

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/installation) (recommended package manager)
- [Playwright](https://playwright.dev/) (for testing)

### Installation

```bash
# Install dependencies
pnpm install

# Install Playwright browsers (required for tests)
pnpm exec playwright install --with-deps
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm build` | Build CSS, JavaScript, and type definitions |
| `pnpm build:css` | Build CSS from SCSS modules |
| `pnpm build:js` | Build JavaScript with Vite |
| `pnpm watch` | Watch mode for development |
| `pnpm test` | Run all tests with Vitest |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm build-storybook` | Build static Storybook |
| `pnpm eslint` | Run ESLint |
| `pnpm eslintfix` | Run ESLint with auto-fix |
| `pnpm stylelint` | Run Stylelint |
| `pnpm stylelintfix` | Run Stylelint with auto-fix |
| `pnpm typings` | Generate TypeScript declarations |
| `pnpm docs` | Generate TypeDoc documentation |

### Project Structure

```
packages/ui/
├── ez-appbar/          # Appbar custom element
├── ez-base/            # Base element class
├── ez-button-surface/  # Button surface element
├── ez-field/           # Field element
├── ez-ripple/          # Ripple/state layer element
├── ez-shape/           # Shape element
├── scss/               # SCSS design system
│   ├── base/          # Foundation styles
│   ├── material/      # Material Design 3 tokens
│   ├── modules/       # Component styles
│   └── placeholders/  # Reusable placeholders
├── utils/             # Utility functions
└── mixins/            # TypeScript mixins
```

### Testing

This package uses Vitest with Playwright for browser testing, and Storybook interaction tests.

```bash
# Run all tests
pnpm test

# Start Storybook (includes interactive tests)
pnpm storybook
```

Tests are written using:
- [`vitest`](https://vitest.dev/)
- [`@storybook/addon-vitest`](https://storybook.js.org/docs/writing-tests/integrations/vitest-addon)
- [`@vitest/browser-playwright`](https://vitest.dev/guide/browser/)

#### WSL Users

If you're using WSL, you may need to install Chrome:

https://learn.microsoft.com/en-us/windows/wsl/tutorials/gui-apps#install-google-chrome-for-linux

### Creating a New Component

From the repository root:

```bash
pnpm run new:element
```

This will scaffold a new component with the `ez-{name}` naming convention. See `ez-ripple` and `ez-field` for reference implementations.

**Post-scaffolding steps:**
1. Update imports to use `.js` extensions (not `.ts`)
2. Fix `@lit-labs/react` imports to `@lit/react` (if using React wrappers)
3. Manually add exports to `packages/ui/package.json`
4. Add exports to `packages/ui-react/package.json` and `packages/ui-next/package.json` if needed

### Code Conventions

#### TypeScript
- Use optional chaining and proper null checks instead of `!`
- Prefer `Promise.all` with array mapping over `await` in loops
- Follow ESLint rules; use `pnpm lintfix` to auto-fix

#### CSS/SCSS
- Import `../scss/component-prelude.scss` in component SCSS files
- Use `@extend %md-typescale-{role}-{size}` placeholders for typography
- Use control classes for size, theme, and style variants
- Only create CSS custom properties for dynamic values (theme/variant switching)
- Favor direct styling over unnecessary custom properties

#### Components
- Use `<ez-ripple>` component for Material Design 3 state layers
- Apply border styles via control classes; use `<hr>` for content-only dividers

## Framework Integration

### React

Use `@atomic/ui-react` for React-specific wrappers:

```bash
pnpm add @atomic/ui-react
```

```tsx
import { EzRipple, EzButtonSurface } from '@atomic/ui-react';

function App() {
  return (
    <EzButtonSurface>
      <button>
        <EzRipple />
        Click me
      </button>
    </EzButtonSurface>
  );
}
```

### Next.js

Use `@atomic/ui-next` for Next.js-optimized wrappers:

```bash
pnpm add @atomic/ui-next
```

See [`packages/ui-react`](../ui-react) and [`packages/ui-next`](../ui-next) for more details.

## Contributing

Contributions are welcome! Please see the [main repository README](../../README.md) for contribution guidelines.

## Resources

- [Material Design 3](https://m3.material.io/) - Design specifications
- [Lit](https://lit.dev/) - Web components library
- [Storybook](https://storybook.js.org/) - Component development and testing

## License

[LGPL-3.0](../../LICENSE)
