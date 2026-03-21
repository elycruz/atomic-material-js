# AGENTS


## Git

- If on 'main' branch, or active branch doesn't match ticket/task description, create a feature branch for your task.
- Include github issue ticket number in commit messages (e.g., `feat(ez-button): #7-hello-world ....`).  If the issue is not known ask the user if they would like you to create an issue ticket for the changes.

## When creating Custom Elements

- Use repo root `new-element` script (see root `package.json`) to generate the element:  Generated element's name should be in the form `{lib-prefix=ez}-my-element` (e.g. `ez-button`).
- Review EzRipple and EzField for approaches and patterns to follow.
- Ensure element has storybook stories with `play` functions, testing their functionality, in them.

## After implementation

If not commit your changes:

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

- Use Size, Theme, and Style variant [control] classes in conjunction with others to acheive the desired results (see [css/modules/button/sizes.css](packages/ui/css/modules/button/sizes.css) for example).
- Only create css properties for properties that need to be dynamic due to javascript interaction, theme switching, style variant switching, and/or size variant switching.
- Favor direct styling over creating properties to apply styles (only use properties if it lessens the required work;  E.g., if the properties just create bloat with no real benefit, favor direct styling instead).

## Material Design related

- Anytime a specification is talking about a State Layer and it's different states just use the `<ez-ripple></ez-ripple>` component:  In our library this component is the state layer used in all components.

