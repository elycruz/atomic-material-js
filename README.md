# @atomic/ui (work-in-progress)

An atomic, CSS-first, user interface toolkit and library for building custom elements and user interfaces. Built on the web platform, [Material Design 3](https://m3.material.io/) specifications, and the [Lit](https://lit.dev/) library.

## Monorepo Structure

This project is a monorepo managed with [pnpm workspaces](https://pnpm.io/workspaces) and [Turborepo](https://turbo.build/).

| Package | Description |
|---------|-------------|
| [`packages/ui`](packages/ui) | Core UI library — web components and CSS/SCSS design system |
| [`packages/ui-react`](packages/ui-react) | React wrappers for `@atomic/ui` components (via `@lit/react`) |
| [`packages/ui-next`](packages/ui-next) | Next.js wrappers for `@atomic/ui` components |
| [`apps/ui-site`](apps/ui-site) | Next.js demo and documentation site |

## Web Components

| Component | Status |
|-----------|--------|
| `ez-appbar` | ✅ Active |
| `ez-base` | ✅ Active (base class) |
| `ez-button-surface` | ✅ Active |
| `ez-field` | ✅ Active |
| `ez-ripple` | ✅ Active |
| `ez-shape` | ✅ Active |
| `ez-badge` | 🚧 Planned |
| `ez-button` | 🚧 Planned |
| `ez-button-group` | 🚧 Planned |
| `ez-card` | 🚧 Planned |
| `ez-dialog` | 🚧 Planned |
| `ez-divider` | 🚧 Planned |
| `ez-input` | 🚧 Planned |
| `ez-list` | 🚧 Planned |
| `ez-typography` | 🚧 Planned |

## CSS / SCSS Modules

The library includes a Material Design 3 design system built with SCSS, covering:

- **Base** — reset, typography, spacing, elevation, motion, shape, state layers
- **Theming** — light, dark, and high-contrast Material Design 3 themes
- **Components** — button (filled, outlined, tonal, text, FAB, icon), card, badge, dialog, divider, field, fieldset, input (checkbox, radio, switch, range, color), list, table, form, shape, focus ring, and more

The compiled CSS is output to `dist/css/index.min.css` as part of the build.

## React / Next.js Wrappers

Both `@atomic/ui-react` and `@atomic/ui-next` provide framework-specific wrappers for the following components:

- `ez-appbar`
- `ez-button-surface`
- `ez-field`
- `ez-ripple`

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) v24+
- [pnpm](https://pnpm.io/installation#on-posix-systems) (package manager)
- [Playwright](https://playwright.dev/) (for Storybook interaction tests)

```sh
# Install dependencies
pnpm install

# Install Playwright browsers (required for tests)
pnpm exec playwright install --with-deps
```

### Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development (Storybook + site) |
| `pnpm build` | Build all packages |
| `pnpm build:lib` | Build `packages/ui` only |
| `pnpm test` | Run tests |
| `pnpm lint` | Run ESLint and Stylelint |
| `pnpm lintfix` | Run ESLint and Stylelint with auto-fix |
| `pnpm storybook` | Start Storybook dev server |
| `pnpm docs` | Generate TypeDoc documentation |
| `pnpm run new:element` | Scaffold a new component |

See root [`package.json`](package.json) and individual package `package.json` files for all available scripts.

### Creating a New Component

```sh
pnpm run new:element
```

Generated components follow the `ez-{name}` naming convention. See `ez-ripple` and `ez-field` for reference patterns.

## License

[LGPL-3.0](LICENSE)
