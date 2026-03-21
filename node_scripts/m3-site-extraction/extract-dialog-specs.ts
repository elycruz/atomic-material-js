/**
 * M3 Dialog Component — Token & Specs Extraction Script
 *
 * Navigates to https://m3.material.io/components/dialogs/specs,
 * expands all token folders for both "Basic" and "Full screen" variants,
 * clicks on elevation/shape/font interactive elements to capture their
 * popover content, extracts all specs content below the token viewer,
 * and writes a well-formatted markdown file.
 *
 * Usage (from repo root):
 *   node --experimental-strip-types node_scripts/m3-site-extraction/extract-dialog-specs.ts
 */
import type { Page } from 'playwright';

import {
  launchBrowser,
  expandAllTokenFolders,
  clickInteractiveTokens,
  getTokenViewerText,
  cleanSpecsText,
  parseTokens,
  renderTokenSections,
  writeOutput,
} from './utils.ts';

const URL = 'https://m3.material.io/components/dialogs/specs';

// ── Dialog-Specific Helpers ────────────────────────────────────────────────

/** Read the specs content from the sections BELOW the token viewer (dialog-specific fallback). */
async function getDialogSpecsSectionsText(page: Page): Promise<string> {
  return page.evaluate(() => {
    const sections = document.querySelectorAll(
      'mio-component-specs-section, [class*="specs-section"]'
    );

    if (sections.length > 0) {
      return Array.from(sections)
        .map(s => (s as HTMLElement).innerText?.trim())
        .join('\n\n---\n\n');
    }

    // Fallback: parse from the page, skipping the token viewer
    const tokenViewer = document.querySelector('.main-token-viewer'),
      allContent =
        document.querySelector('#main_content') ??
        document.querySelector('[role="main"]') ??
        document.body,
      fullText = (allContent as HTMLElement)?.innerText ?? '',
      tokenText = (tokenViewer as HTMLElement)?.innerText ?? '',
      lastTokenLine =
        tokenText
          .split('\n')
          .filter(l => l.trim())
          .pop() ?? '',
      tokenViewerEnd = fullText.indexOf(lastTokenLine) + lastTokenLine.length,
      afterTokens = fullText.substring(tokenViewerEnd),
      basicIdx = afterTokens.indexOf('Basic dialogs');

    if (basicIdx === -1) return '';

    const endMarker = 'Material Design is an adaptable system',
      endIdx = afterTokens.indexOf(endMarker);

    return afterTokens
      .substring(basicIdx, endIdx !== -1 ? endIdx : undefined)
      .trim();
  });
}

// ── Specs Section Parsing (dialog-specific) ────────────────────────────────

function parseDialogSpecs(rawText: string): string {
  const cleaned = cleanSpecsText(rawText, [
    /Dialogs: Overview\n?/g,
    /Dialogs: Guidelines\n?/g,
  ]);

  return cleaned;
}

// ── Specs Formatting (dialog-specific) ─────────────────────────────────────

function formatSpecsAsMarkdown(rawSpecs: string): string {
  const lines = rawSpecs.split('\n'),
    output: string[] = [];

  let inTable = false,
    pendingAttr = '',
    inAnatomyList = false,
    inColorRolesList = false;

  // Known anatomy items and color roles for list detection
  const anatomyItems = new Set([
      'Container',
      'Container ',
      'Icon (optional)',
      'Icon (optional) ',
      'Headline (optional)',
      'Headline (optional) ',
      'Supporting text',
      'Supporting text ',
      'Divider (optional)',
      'Divider (optional) ',
      'Button label text',
      'Header',
      'Header ',
      'Icon (close affordance)',
      'Icon (close affordance) ',
      'Text button',
      'Text button ',
      'Scrim',
    ]),
    colorRoles = new Set([
      'Surface container high',
      'Surface container high ',
      'Secondary',
      'Secondary ',
      'On surface',
      'On surface ',
      'On surface variant',
      'Primary',
      'Primary ',
      'Scrim',
    ]);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i],
      trimmed = line.trim();

    // Skip noise
    if (trimmed === 'Aa') continue;
    if (trimmed.startsWith('md.comp.')) continue;
    if (trimmed === 'warning') continue;
    if (trimmed === 'content_copy') continue;

    // Empty line
    if (trimmed === '' && !inTable) {
      if (inAnatomyList || inColorRolesList) {
        inAnatomyList = false;
        inColorRolesList = false;
      }
      output.push('');
      continue;
    }

    // Detect table header
    if (trimmed === 'Attribute\tValue') {
      inTable = true;
      inAnatomyList = false;
      inColorRolesList = false;
      output.push('| Attribute | Value |');
      output.push('|---|---|');
      pendingAttr = '';
      continue;
    }

    if (inTable) {
      if (trimmed === '') continue;

      if (trimmed.includes('\t')) {
        const parts = trimmed.split('\t');

        output.push(
          `| ${parts[0].trim()} | ${parts.slice(1).join(' ').trim()} |`
        );
        pendingAttr = '';
        continue;
      }

      if (
        line.startsWith('\t') ||
        (line.startsWith('  ') && line !== line.trimStart())
      ) {
        if (pendingAttr) {
          output.push(`| ${pendingAttr} | ${trimmed} |`);
          pendingAttr = '';
        }
        continue;
      }

      const nextLine = i + 1 < lines.length ? lines[i + 1] : '',
        nextTrimmed = nextLine.trim();

      if (
        nextLine.startsWith('\t') ||
        (nextLine.startsWith('  ') &&
          nextLine !== nextLine.trimStart() &&
          nextTrimmed !== '')
      ) {
        pendingAttr = trimmed;
        continue;
      }

      inTable = false;
      pendingAttr = '';
      output.push('');
    }

    // Section headers
    if (/^(Basic|Full-screen) dialog/.exec(trimmed) && trimmed.length < 80) {
      output.push(`### ${trimmed}`);
      output.push('');
      inAnatomyList = false;
      inColorRolesList = false;
      continue;
    }

    // Color roles → bullet list (check before anatomy since some items overlap)
    if (inColorRolesList && colorRoles.has(trimmed)) {
      output.push(`- ${trimmed.trim()}`);
      continue;
    }
    if (!inColorRolesList && colorRoles.has(trimmed)) {
      const prevLines = output.slice(-5).join(' ');

      if (prevLines.includes('color roles')) {
        inColorRolesList = true;
        output.push('');
        output.push(`- ${trimmed.trim()}`);
        continue;
      }

      const nextTrimmed = i + 1 < lines.length ? lines[i + 1].trim() : '';

      if (colorRoles.has(nextTrimmed)) {
        inColorRolesList = true;
        output.push(`- ${trimmed.trim()}`);
        continue;
      }
    }

    // Anatomy items → bullet list
    if (anatomyItems.has(trimmed) && !inColorRolesList) {
      if (!inAnatomyList) {
        inAnatomyList = true;
        output.push('**Anatomy:**');
        output.push('');
      }
      output.push(`- ${trimmed.trim()}`);
      continue;
    }

    output.push(trimmed);
  }

  return output.join('\n');
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { browser, page } = await launchBrowser();

  console.log('Navigating to', URL);
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  // ── Extract Basic Dialog tokens ──
  console.log('Extracting Dialog - Basic tokens...');
  await expandAllTokenFolders(page);

  const basicRawText = await getTokenViewerText(page),
    basicPopoverData = await clickInteractiveTokens(page);

  console.log(
    `  Popover data captured for ${Object.keys(basicPopoverData).length} interactive tokens`
  );

  // ── Switch to Full Screen variant ──
  console.log('Switching to Dialog - Full screen...');
  await page.locator('.active-token-set-button').first().click();
  await page.waitForTimeout(1000);
  await page
    .locator('button.mat-mdc-menu-item:has-text("Dialog - Full screen")')
    .click();
  await page.waitForTimeout(2500);

  // ── Extract Full Screen Dialog tokens ──
  console.log('Extracting Dialog - Full screen tokens...');
  await expandAllTokenFolders(page);

  const fullScreenRawText = await getTokenViewerText(page),
    fullScreenPopoverData = await clickInteractiveTokens(page);

  console.log(
    `  Popover data captured for ${Object.keys(fullScreenPopoverData).length} interactive tokens`
  );

  // ── Extract specs content (anatomy, colors, measurements) ──
  console.log('Extracting specs content...');

  const rawSpecs = await getDialogSpecsSectionsText(page);

  await browser.close();

  // ── Parse ──
  console.log('Parsing tokens...');

  const basicSections = parseTokens(basicRawText),
    fullScreenSections = parseTokens(fullScreenRawText),
    cleanedSpecs = parseDialogSpecs(rawSpecs),
    formattedSpecs = formatSpecsAsMarkdown(cleanedSpecs);

  // ── Generate markdown ──
  console.log('Generating markdown...');

  const lines: string[] = [];

  lines.push('# M3 Dialog — Tokens & Specs');
  lines.push('');
  lines.push(`> Source: [m3.material.io/components/dialogs/specs](${URL})`);
  lines.push('');
  lines.push('---');
  lines.push('');

  lines.push('## Dialog — Basic');
  lines.push('');
  renderTokenSections(lines, basicSections, basicPopoverData);

  lines.push('## Dialog — Full Screen');
  lines.push('');
  renderTokenSections(lines, fullScreenSections, fullScreenPopoverData);

  if (formattedSpecs) {
    lines.push('---');
    lines.push('');
    lines.push('## Specs');
    lines.push('');
    lines.push(formattedSpecs);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push(
    `*Extracted from the Material Design 3 website on ${new Date().toISOString().slice(0, 10)}.*`
  );
  lines.push('');

  const markdown = lines.join('\n');

  // ── Write output ──
  const outputPath = writeOutput('m3-dialog.specs.md', markdown);

  console.log(`\nDone! Output written to ${outputPath}`);
  console.log(`  Basic sections: ${basicSections.length}`);
  console.log(`  Full screen sections: ${fullScreenSections.length}`);
  console.log(`  Specs content: ${formattedSpecs.length} chars`);
}

main().catch((err: unknown) => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
