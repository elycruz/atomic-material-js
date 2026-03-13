# AGENTS

## When creating Custom Elements

- Use repo root `new-element` script (see root `package.json`) to generate the element:  Generated element's name should be in the form `{lib-prefix=ez}-my-element` (e.g. `ez-button`).
- Review EzRipple and EzField for approaches and patterns to follow.
- Ensure element has storybook stories with `play` functions, testing their functionality, in them.

## After implementation

- Run `pnpm lintfix`.
- All tests must pass.
- Build must pass.

## Code scanning / File scanning

Ignore the following directories:

- `**/dist`
- `**/.next`
- `**/.turbo`
- `**/coverage`
- `**/.slingshot`
- `**/.idea`
- `./assets/`

## Typescript conventions

1. Use optional chaining and proper null checks instead of `!`.
2. Don't use await-in-loops prefer `Promise.all` with array mapping.
3. Adhere to eslint rules and use `pnpm lintfix` to automatically fix issues when possible.

## CSS Related:

- Use Size, Theme, and Style variant [control] classes in conjunction with others to acheive the desired results (see [css/modules/button/sizes.css](packages/atomic-ui-js/css/modules/button/sizes.css) for example). 
- Only create css properties for properties that need to be dynamic due to javascript interaction, theme switching, style variant switching, and/or size variant switching.
- Favor direct styling of creating properties to apply styles (only use properties if it lessens the required work;  E.g., if the properties just create bloat with no real benefit, favor direct styling instead).
