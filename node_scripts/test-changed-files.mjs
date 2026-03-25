#!/usr/bin/env node

/**
 * Script to run tests only on changed files
 * This is used in pre-push hook to optimize testing
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const WORKSPACE_ROOT = process.cwd();

// Get list of changed files (staged + unstaged + untracked)
function getChangedFiles() {
  try {
    // Get all modified, added, and staged files
    const staged = execSync(
        'git diff --cached --name-only --diff-filter=ACMR',
        { encoding: 'utf8' }
      ).trim(),
      unstaged = execSync('git diff --name-only --diff-filter=ACMR', {
        encoding: 'utf8',
      }).trim(),
      untracked = execSync('git ls-files --others --exclude-standard', {
        encoding: 'utf8',
      }).trim(),
      allFiles = new Set([
        ...staged.split('\n').filter(Boolean),
        ...unstaged.split('\n').filter(Boolean),
        ...untracked.split('\n').filter(Boolean),
      ]);

    return Array.from(allFiles);
  } catch (error) {
    console.warn(
      'Warning: Could not get changed files, falling back to all tests'
    );
    console.warn(error.message);
    return [];
  }
}

// Determine which packages need testing based on changed files
function getAffectedPackages(changedFiles) {
  const packages = new Set();

  for (const file of changedFiles) {
    // Check if file is in packages/ or apps/
    if (file.startsWith('packages/')) {
      const packageMatch = file.match(/^packages\/([^/]+)/);

      if (packageMatch) {
        packages.add(`packages/${packageMatch[1]}`);
      }
    } else if (file.startsWith('apps/')) {
      const appMatch = file.match(/^apps\/([^/]+)/);

      if (appMatch) {
        packages.add(`apps/${appMatch[1]}`);
      }
    }
  }

  return Array.from(packages);
}

// Check if any source files were changed that would require tests
function shouldRunTests(changedFiles) {
  return changedFiles.some(file => {
    // Run tests if any .ts, .tsx, .js, .jsx files changed (excluding config files)
    return (
      /\.(ts|tsx|js|jsx)$/.test(file) &&
      !file.includes('node_modules') &&
      !file.includes('dist/') &&
      !file.includes('.config.') &&
      !file.includes('.stories.')
    );
  });
}

// Main execution
function main() {
  console.log('🔍 Checking for changed files...\n');

  const changedFiles = getChangedFiles();

  if (changedFiles.length === 0) {
    console.log('✅ No changed files detected. Skipping tests.');
    process.exit(0);
  }

  console.log(`Found ${changedFiles.length} changed file(s):\n`);
  changedFiles.slice(0, 10).forEach(file => console.log(`  - ${file}`));
  if (changedFiles.length > 10) {
    console.log(`  ... and ${changedFiles.length - 10} more`);
  }
  console.log();

  if (!shouldRunTests(changedFiles)) {
    console.log('✅ No source code changes detected. Skipping tests.');
    process.exit(0);
  }

  const affectedPackages = getAffectedPackages(changedFiles);

  if (affectedPackages.length === 0) {
    console.log('✅ No package changes detected. Skipping tests.');
    process.exit(0);
  }

  console.log(`📦 Affected package(s): ${affectedPackages.join(', ')}\n`);

  // Run tests for each affected package
  let hasFailures = false;

  for (const pkg of affectedPackages) {
    const packagePath = path.join(WORKSPACE_ROOT, pkg),
      packageJsonPath = path.join(packagePath, 'package.json');

    if (!existsSync(packageJsonPath)) {
      console.log(`⚠️  Skipping ${pkg}: package.json not found`);
      continue;
    }

    // Check if package has a test script
    try {
      const packageJson = JSON.parse(
        execSync(`cat "${packageJsonPath}"`, { encoding: 'utf8' })
      );

      if (!packageJson.scripts?.test) {
        console.log(`⏭️  Skipping ${pkg}: no test script found`);
        continue;
      }

      console.log(`\n🧪 Running tests for ${pkg}...\n`);

      try {
        execSync(`cd "${packagePath}" && pnpm test`, {
          stdio: 'inherit',
          encoding: 'utf8',
        });
        console.log(`\n✅ Tests passed for ${pkg}\n`);
      } catch (error) {
        console.error(`\n❌ Tests failed for ${pkg}\n`);
        hasFailures = true;
      }
    } catch (error) {
      console.error(`⚠️  Error processing ${pkg}:`, error.message);
      hasFailures = true;
    }
  }

  if (hasFailures) {
    console.error(
      '\n❌ Some tests failed. Please fix the issues before pushing.\n'
    );
    process.exit(1);
  }

  console.log('\n✅ All tests passed!\n');
  process.exit(0);
}

main();
