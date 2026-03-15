/**
 * gen-spacing-scheme-css.ts
 *
 * Outputs the library's curated CSS spacing properties as `rem` units.
 */
import fs from 'fs';
import * as path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)),
  { log, error } = console,
  fileName = 'spacing.scss',
  spacingNums = [
    0, 1, 2, 3, 4, 5, 6, 8, 9, 12, 16, 18, 24, 32, 36, 48, 64, 72, 96, 144,
  ],
  genSpacingCss = () => {
    const outputFilePath = path.join(__dirname, '../../css/modules/', fileName),
      props = spacingNums.reduce(
        (agg, x) => `${agg}  --ez-${x}px: ${x / 16}rem;\n`,
        ''
      ),
      content = `/**
 * spacing.scss
 *
 * The library's curated spacing properties, represented as \`rem\` units.
 *
 * ====> DO NOT MANUALLY EDIT THIS FILE - This file is generated via a script ({repo-root}/node_scripts/gen-css/spacing.ts).
 */

:root {
${props.trimEnd()}
}
`;

    return fs.promises.writeFile(outputFilePath, content).then(() => {
      log(`file ${fileName} written successfully`);
    }, error);
  };

export { genSpacingCss, spacingNums };
