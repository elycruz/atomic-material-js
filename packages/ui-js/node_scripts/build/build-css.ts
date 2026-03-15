import { promises as fs } from 'node:fs';
import url from 'node:url';
import path from 'node:path';
import * as sass from 'sass';
import postcss from 'postcss';
import cssnano from 'cssnano';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)),
  distPath = path.join(__dirname, '../../dist'),
  inFilePath = path.join(__dirname, '../../css/index.scss'),
  outFilePath = path.join(distPath, 'css/index.min.css'),
  compileCss = async () => {
    // Compile SCSS to CSS using Sass
    const result = sass.compile(inFilePath, {
      style: 'expanded',
      sourceMap: true,
      loadPaths: [path.join(__dirname, '../../css')],
    });

    // Minify the compiled CSS using cssnano
    return postcss([cssnano])
      .process(result.css, {
        from: inFilePath,
        to: outFilePath,
        map: { 
          inline: false, 
          prev: result.sourceMap ? JSON.stringify(result.sourceMap) : undefined 
        }
      })
      .then(postcssResult =>
        fs
          .writeFile(outFilePath, postcssResult.css)
          .then(() => postcssResult.map)
      )
      .then(map => {
        if (map) {
          return fs.writeFile(outFilePath + '.map', map.toString());
        }
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("'build-css' finished successfully.");
      });
  },
  buildCss = async () =>
    fs
      .mkdir(path.dirname(outFilePath), { recursive: true })
      .then(compileCss, compileCss),
  copyCssToDist = async () => {
    return fs
      .cp(path.join(__dirname, '../../css'), path.join(distPath, 'css'), {
        recursive: true,
      })
      .then(() => {
        // eslint-disable-next-line no-console
        console.log("'copy-css-to-dist' finished successfully.");
      })
      .catch((err: unknown) => {
        console.error("'copy-css-to-dist' failed:", err);
        throw err;
      });
  };

export { buildCss, copyCssToDist };
