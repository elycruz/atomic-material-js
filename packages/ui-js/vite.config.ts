import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import storybookTest from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import * as sassCompiler from 'sass';

import type { TestProjectInlineConfiguration } from 'vitest/config';

const { NODE_ENV } = process.env,
  isDev = !NODE_ENV || NODE_ENV === 'development',
  dirname = path.dirname(fileURLToPath(import.meta.url)),
  COMPONENT_SCSS_PREFIX = '\0component-scss:';

/**
 * Vite plugin that compiles component SCSS files to CSS strings for use
 * with Lit's unsafeCSS(). Uses virtual modules to avoid conflicts with
 * Vite's built-in CSS pipeline.
 *
 * Only handles SCSS imports from *.style.ts files. Global SCSS imports
 * (e.g., in preview.ts or story files) are unaffected.
 */
function componentScssPlugin(): Plugin {
  return {
    name: 'component-scss',
    enforce: 'pre',

    resolveId(source, importer) {
      if (!source.endsWith('.scss') || !importer) return null;
      if (!source.startsWith('.') && !path.isAbsolute(source)) return null;

      // Only handle SCSS imported from *.style.ts files
      if (!importer.endsWith('.style.ts')) return null;

      const resolved = path.resolve(path.dirname(importer), source);

      // Strip .scss so Vite's CSS plugin doesn't match the virtual ID
      return COMPONENT_SCSS_PREFIX + resolved.slice(0, -5);
    },

    load(id) {
      if (!id.startsWith(COMPONENT_SCSS_PREFIX)) return null;

      const filePath = id.slice(COMPONENT_SCSS_PREFIX.length) + '.scss',
        result = sassCompiler.compile(filePath, {
          loadPaths: [path.resolve(dirname, 'css')],
        });

      return `export default ${JSON.stringify(result.css)};`;
    },
  };
}

export default defineConfig({
  plugins: [componentScssPlugin(), react()],
  resolve: {
    alias: {
      '@': dirname,
    },
  },
  build: {
    emptyOutDir: false,
    lib: {
      entry: {
        index: path.resolve(dirname, 'index.ts'),
        'ez-appbar/index': path.resolve(dirname, 'ez-appbar/index.ts'),
        'ez-base/index': path.resolve(dirname, 'ez-base/index.ts'),
        'ez-button-surface/index': path.resolve(
          dirname,
          'ez-button-surface/index.ts'
        ),
        'ez-button/index': path.resolve(dirname, 'ez-button/index.ts'),
        'ez-field/index': path.resolve(dirname, 'ez-field/index.ts'),
        'ez-ripple/index': path.resolve(dirname, 'ez-ripple/index.ts'),
        'ez-shape/index': path.resolve(dirname, 'ez-shape/index.ts'),
        'ez-surface/index': path.resolve(dirname, 'ez-surface/index.ts'),
        'ez-toggleonscroll/index': path.resolve(
          dirname,
          'ez-toggleonscroll/index.ts'
        ),
        'utils/index': path.resolve(dirname, 'utils/index.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['lit', /^lit\//, /^@lit\//, 'tailwindcss', /^@tailwindcss\//],
      output: {
        preserveModules: true,
        preserveModulesRoot: dirname,
      },
    },
  },
  // More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
  test: {
    globals: true,
    clearMocks: true,
    exclude: ['**/node_modules/**', '**/archived/**', '**/coverage/**'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      reporter: ['lcov', 'text', 'html'],
      include: ['src/**/*.{js,ts,jsx,tsx}'],
      exclude: [
        'src/**/*.{stories,test,spec,d}.{js,ts,jsx,tsx}',
        '__mocks__/**/*',
        'vitest.setup.ts',
      ],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          root: './',
          environment: 'happy-dom',
          setupFiles: ['./vitest.setup.ts'],
          alias: {
            '@': dirname,
          },
        },
      },
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
            // Command should match what we have in package.json
            storybookScript: `storybook ${isDev ? 'dev ' : ''}start -p 6006${isDev ? '' : ' --ci'}`,
          }),
        ],
        test: {
          name: 'e2e',
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            screenshotFailures: false,
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
          alias: {
            '@': dirname,
          },
        },
      },
    ] as TestProjectInlineConfiguration[],
  },
});
