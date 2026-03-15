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
 *   node node_scripts/m3-site-extraction/extract-dialog-specs.mjs
 */
import {chromium} from 'playwright';
import {writeFileSync, mkdirSync} from 'fs';
import {resolve, dirname} from 'path';
import {fileURLToPath} from 'url';

const URL = 'https://m3.material.io/components/dialogs/specs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '../..');
const OUTPUT_DIR = resolve(REPO_ROOT, 'md/generated-specs');
const OUTPUT_FILE = resolve(OUTPUT_DIR, 'm3-dialog-tokens-and-specs.md');

// ── Helpers ────────────────────────────────────────────────────────────────

/** Click `expand_all` inside the token viewer to open every folder. */
async function expandAllTokenFolders(page) {
  const expandBtn = page.locator('.main-token-viewer').getByText('expand_all');
  if (await expandBtn.isVisible({timeout: 3000}).catch(() => false)) {
    await expandBtn.click();
    await page.waitForTimeout(2500);
  }
}

/** Click every elevation/shape/font/type interactive token to capture popover content. */
async function clickInteractiveTokens(page) {
  const interactiveSpans = await page
    .locator('.main-token-viewer span.mat-mdc-tooltip-trigger.text-value')
    .all();

  const popoverTexts = {};

  for (const span of interactiveSpans) {
    const tokenName = (await span.textContent())?.trim() ?? '';
    if (!tokenName.includes('elevation') && !tokenName.includes('shape') &&
        !tokenName.includes('.font') && !tokenName.includes('.type')) {
      continue;
    }

    try {
      await span.click({timeout: 1500});
      await page.waitForTimeout(800);

      // Look for a popover / overlay that appeared
      const popoverText = await page.evaluate(() => {
        const overlay = document.querySelector('.cdk-overlay-container');
        const popover = overlay?.querySelector('.token-popover, .mat-mdc-tooltip, [class*="popover"], [class*="detail"], [class*="panel"]');
        return popover?.innerText?.trim() || '';
      });

      if (popoverText) {
        popoverTexts[tokenName] = popoverText;
      }

      // Close by clicking elsewhere
      await page.locator('.main-token-viewer').click({position: {x: 5, y: 5}});
      await page.waitForTimeout(300);
    } catch {
      // Ignore click failures
    }
  }

  return popoverTexts;
}

/** Read the full innerText of the `.main-token-viewer`. */
async function getTokenViewerText(page) {
  return page.evaluate(() =>
    document.querySelector('.main-token-viewer')?.innerText ?? '',
  );
}

/** Read the specs content from the sections BELOW the token viewer. */
async function getSpecsSectionsText(page) {
  return page.evaluate(() => {
    // The specs sections live in elements AFTER the .main-token-viewer
    // They are sibling sections within the page content area.
    // We want everything from "Basic dialogs" heading through the measurements,
    // but NOT the token viewer content.
    const sections = document.querySelectorAll('mio-component-specs-section, [class*="specs-section"]');
    if (sections.length > 0) {
      return Array.from(sections).map(s => s.innerText?.trim()).join('\n\n---\n\n');
    }

    // Fallback: parse from the page, skipping the token viewer
    const tokenViewer = document.querySelector('.main-token-viewer');
    const allContent = document.querySelector('#main_content') || document.querySelector('[role="main"]') || document.body;
    const fullText = allContent?.innerText ?? '';

    // Find content after the token viewer ends
    const tokenText = tokenViewer?.innerText ?? '';
    const lastTokenLine = tokenText.split('\n').filter(l => l.trim()).pop() || '';

    // Find where specs content starts (after the token viewer)
    // Look for the "Basic dialogs" heading that appears in the specs section
    // The token viewer might also contain text, so find the SECOND occurrence
    const tokenViewerEnd = fullText.indexOf(lastTokenLine) + lastTokenLine.length;
    const afterTokens = fullText.substring(tokenViewerEnd);

    const basicIdx = afterTokens.indexOf('Basic dialogs');
    if (basicIdx === -1) return '';

    const endMarker = 'Material Design is an adaptable system';
    const endIdx = afterTokens.indexOf(endMarker);

    return afterTokens.substring(basicIdx, endIdx !== -1 ? endIdx : undefined).trim();
  });
}

// ── Token Parsing ──────────────────────────────────────────────────────────

/**
 * Parse the raw token viewer text into structured data.
 *
 * The text follows a repeating pattern:
 *   <human-readable name>
 *   [warning]?                      ← optional deprecated marker
 *   md.comp.dialog.<token>
 *   [content_copy]?                 ← skip
 *   <value>                         ← e.g. #ECE6F0, 24dp, Roboto, 0.08
 *
 * Folder headers look like:
 *   folder_open
 *   <Section Name>
 *   keyboard_arrow_down
 */
function parseTokens(rawText) {
  const lines = rawText
    .split('\n')
    .map(l => l.trim())
    .filter(l => l.length > 0);

  const sections = [];
  let currentSection = null;
  let i = 0;

  // Skip the header lines (variant name, nav icons, column header)
  while (i < lines.length && !lines[i].startsWith('folder')) {
    i++;
  }

  while (i < lines.length) {
    const line = lines[i];

    // Folder header
    if (line === 'folder_open' || line === 'folder') {
      i++;
      const sectionName = lines[i] ?? '';
      i++; // skip keyboard_arrow_down
      if (lines[i] === 'keyboard_arrow_down') i++;
      currentSection = {name: sectionName, tokens: []};
      sections.push(currentSection);
      continue;
    }

    // Skip UI chrome
    if (['keyboard_arrow_down', 'content_copy', 'collapse_all', 'expand_all',
      'search', 'visibility', 'grid_view', 'arrow_drop_down', 'Aa',
    ].includes(line)) {
      i++;
      continue;
    }

    // Token entry: human name, optional warning, token key, optional value
    const humanName = line;
    i++;

    let deprecated = false;
    if (i < lines.length && lines[i] === 'warning') {
      deprecated = true;
      i++;
    }

    // Token key (starts with md.comp.)
    let tokenKey = '';
    if (i < lines.length && lines[i]?.startsWith('md.comp.')) {
      tokenKey = lines[i];
      i++;
    } else {
      // Not a token entry — may be noise; skip
      continue;
    }

    // Skip content_copy
    if (i < lines.length && lines[i] === 'content_copy') i++;

    // Value — could be a color (#hex), dimension (Ndp), number, font name, etc.
    // Or could be empty (for elevation/shape/type references)
    let value = '';
    if (i < lines.length &&
        !lines[i]?.startsWith('folder') &&
        !lines[i]?.startsWith('md.comp.') &&
        !['warning', 'keyboard_arrow_down', 'Aa'].includes(lines[i])) {
      // Check if the next line looks like another human-readable token name
      // by checking if two lines ahead is md.comp.* or warning
      const nextIsTokenName = (i + 1 < lines.length &&
        (lines[i + 1]?.startsWith('md.comp.') || lines[i + 1] === 'warning')) ||
        (i + 2 < lines.length && lines[i + 1] === 'warning' && lines[i + 2]?.startsWith('md.comp.'));

      if (!nextIsTokenName) {
        value = lines[i];
        i++;
      }
    }

    if (currentSection) {
      currentSection.tokens.push({humanName, tokenKey, value, deprecated});
    }
  }

  return sections;
}

// ── Specs Section Parsing ──────────────────────────────────────────────────

function parseSpecsSections(rawText) {
  // Clean up noise lines
  const cleaned = rawText
    .replace(/^link\n?/gm, '')
    .replace(/^Copy link\n?/gm, '')
    .replace(/^arrow_left_alt\n?/gm, '')
    .replace(/^arrow_right_alt\n?/gm, '')
    .replace(/^Previous\n?/gm, '')
    .replace(/^Up next\n?/gm, '')
    .replace(/Dialogs: Overview\n?/g, '')
    .replace(/Dialogs: Guidelines\n?/g, '')
    .replace(/Collapse all\n?/g, '')
    .replace(/folder_open\n?/g, '')
    .replace(/folder\n?/g, '')
    .replace(/keyboard_arrow_down\n?/g, '')
    .replace(/expand_all\n?/g, '')
    .replace(/collapse_all\n?/g, '')
    .replace(/grid_view\n?/g, '')
    .replace(/visibility\n?/g, '')
    .replace(/search\n?/g, '')
    .replace(/arrow_drop_down\n?/g, '');

  return cleaned.trim();
}

// ── Markdown Generation ────────────────────────────────────────────────────

function generateMarkdown(basicSections, fullScreenSections, popoverDataBasic, popoverDataFull, specsContent) {
  const lines = [];

  lines.push('# M3 Dialog — Tokens & Specs');
  lines.push('');
  lines.push(`> Source: [m3.material.io/components/dialogs/specs](${URL})`);
  lines.push('');
  lines.push('---');
  lines.push('');

  // ── Basic Dialog Tokens ──
  lines.push('## Dialog — Basic');
  lines.push('');
  renderTokenSections(lines, basicSections, popoverDataBasic);

  // ── Full Screen Dialog Tokens ──
  lines.push('## Dialog — Full Screen');
  lines.push('');
  renderTokenSections(lines, fullScreenSections, popoverDataFull);

  // ── Specs Content ──
  if (specsContent) {
    lines.push('---');
    lines.push('');
    lines.push('## Specs');
    lines.push('');
    lines.push(specsContent);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push(`*Extracted from the Material Design 3 website on ${new Date().toISOString().slice(0, 10)}.*`);
  lines.push('');

  return lines.join('\n');
}

function renderTokenSections(lines, sections, popoverData) {
  for (const section of sections) {
    // Skip empty parent sections (e.g. "Enabled", "Hovered" with no direct tokens)
    if (section.tokens.length === 0) continue;

    lines.push(`### ${section.name}`);
    lines.push('');
    lines.push('| Description | Token | Value | Deprecated |');
    lines.push('|---|---|---|---|');

    for (const token of section.tokens) {
      const dep = token.deprecated ? '⚠️ Yes' : '';
      let val = token.value || popoverData[token.tokenKey] || '*(reference)*';
      // Don't repeat the token key as the value
      if (val === token.tokenKey) val = '*(reference)*';
      lines.push(`| ${escMd(token.humanName)} | \`${token.tokenKey}\` | ${escMd(val)} | ${dep} |`);
    }

    lines.push('');
  }
}

function escMd(str) {
  return str.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

// ── Specs Formatting ───────────────────────────────────────────────────────

function formatSpecsAsMarkdown(rawSpecs) {
  const lines = rawSpecs.split('\n');
  const output = [];
  let inTable = false;
  let pendingAttr = '';
  let inAnatomyList = false;
  let inColorRolesList = false;

  // Known anatomy items and color roles for list detection
  const anatomyItems = new Set([
    'Container', 'Container ', 'Icon (optional)', 'Icon (optional) ',
    'Headline (optional)', 'Headline (optional) ', 'Supporting text',
    'Supporting text ', 'Divider (optional)', 'Divider (optional) ',
    'Button label text', 'Header', 'Header ',
    'Icon (close affordance)', 'Icon (close affordance) ',
    'Text button', 'Text button ', 'Scrim',
  ]);

  const colorRoles = new Set([
    'Surface container high', 'Surface container high ',
    'Secondary', 'Secondary ', 'On surface', 'On surface ',
    'On surface variant', 'Primary', 'Primary ', 'Scrim',
  ]);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

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
        output.push(`| ${parts[0].trim()} | ${parts.slice(1).join(' ').trim()} |`);
        pendingAttr = '';
        continue;
      }

      if (line.startsWith('\t') || (line.startsWith('  ') && line !== line.trimStart())) {
        if (pendingAttr) {
          output.push(`| ${pendingAttr} | ${trimmed} |`);
          pendingAttr = '';
        }
        continue;
      }

      const nextLine = i + 1 < lines.length ? lines[i + 1] : '';
      const nextTrimmed = nextLine.trim();
      if (nextLine.startsWith('\t') || (nextLine.startsWith('  ') && nextLine !== nextLine.trimStart() && nextTrimmed !== '')) {
        pendingAttr = trimmed;
        continue;
      }

      inTable = false;
      pendingAttr = '';
      output.push('');
    }

    // Section headers
    if (trimmed.match(/^(Basic|Full-screen) dialog/) && trimmed.length < 80) {
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
      // Check if this starts a color roles section (previous output mentions "color roles")
      const prevLines = output.slice(-5).join(' ');
      if (prevLines.includes('color roles')) {
        inColorRolesList = true;
        output.push('');
        output.push(`- ${trimmed.trim()}`);
        continue;
      }
      // Check if next line is also a color role
      const nextTrimmed = (i + 1 < lines.length ? lines[i + 1].trim() : '');
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

async function main() {
  const browser = await chromium.launch({headless: true});
  const page = await browser.newPage({viewport: {width: 1440, height: 900}});

  console.log('Navigating to', URL);
  await page.goto(URL, {waitUntil: 'networkidle', timeout: 60000});
  await page.waitForTimeout(5000);

  // ── Extract Basic Dialog tokens ──
  console.log('Extracting Dialog - Basic tokens...');
  await expandAllTokenFolders(page);
  const basicRawText = await getTokenViewerText(page);
  const basicPopoverData = await clickInteractiveTokens(page);
  console.log(`  Popover data captured for ${Object.keys(basicPopoverData).length} interactive tokens`);

  // ── Switch to Full Screen variant ──
  console.log('Switching to Dialog - Full screen...');
  await page.locator('.active-token-set-button').first().click();
  await page.waitForTimeout(1000);
  await page.locator('button.mat-mdc-menu-item:has-text("Dialog - Full screen")').click();
  await page.waitForTimeout(2500);

  // ── Extract Full Screen Dialog tokens ──
  console.log('Extracting Dialog - Full screen tokens...');
  await expandAllTokenFolders(page);
  const fullScreenRawText = await getTokenViewerText(page);
  const fullScreenPopoverData = await clickInteractiveTokens(page);
  console.log(`  Popover data captured for ${Object.keys(fullScreenPopoverData).length} interactive tokens`);

  // ── Extract specs content (anatomy, colors, measurements) ──
  console.log('Extracting specs content...');
  const rawSpecs = await getSpecsSectionsText(page);

  await browser.close();

  // ── Parse ──
  console.log('Parsing tokens...');
  const basicSections = parseTokens(basicRawText);
  const fullScreenSections = parseTokens(fullScreenRawText);
  const cleanedSpecs = parseSpecsSections(rawSpecs);
  const formattedSpecs = formatSpecsAsMarkdown(cleanedSpecs);

  // ── Generate markdown ──
  console.log('Generating markdown...');
  const markdown = generateMarkdown(
    basicSections,
    fullScreenSections,
    basicPopoverData,
    fullScreenPopoverData,
    formattedSpecs,
  );

  // ── Write output ──
  mkdirSync(OUTPUT_DIR, {recursive: true});
  writeFileSync(OUTPUT_FILE, markdown, 'utf-8');
  console.log(`\nDone! Output written to ${OUTPUT_FILE}`);
  console.log(`  Basic sections: ${basicSections.length}`);
  console.log(`  Full screen sections: ${fullScreenSections.length}`);
  console.log(`  Specs content: ${formattedSpecs.length} chars`);
}

main().catch(err => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
