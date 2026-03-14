import { genSpacingCss } from './spacing.ts';

await (async () =>
  Promise.all([genSpacingCss()])
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('\ngen-css completed successfully\n');
    })
    .catch(console.error))();
