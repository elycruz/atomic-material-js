/**
 * Shared utilities for M3 site token & specs extraction scripts.
 *
 * Provides reusable types, Playwright helpers, token parsing,
 * markdown generation, and file I/O helpers.
 */
import { chromium } from 'playwright';
import type { Browser, Page } from 'playwright';
import { writeFileSync, mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

// ── Types ──────────────────────────────────────────────────────────────────

export interface TokenEntry {
  humanName: string;
  tokenKey: string;
  value: string;
  deprecated: boolean;
}

export interface TokenSection {
  name: string;
  tokens: TokenEntry[];
}

export interface VariantData {
  variantName: string;
  sections: TokenSection[];
  popoverData: Record<string, string>;
}

// ── Paths ──────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url));

export const REPO_ROOT = resolve(__dirname, '../..');
export const OUTPUT_DIR = resolve(REPO_ROOT, 'md/generated-specs');

// ── File I/O ───────────────────────────────────────────────────────────────

export function writeOutput(filename: string, content: string): string {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  const filepath = resolve(OUTPUT_DIR, filename);
  writeFileSync(filepath, content, 'utf-8');
  return filepath;
}

// ── Browser Helpers ────────────────────────────────────────────────────────

export async function launchBrowser(): Promise<{
  browser: Browser;
  page: Page;
}> {
  const browser = await chromium.launch({ headless: true }),
    page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  return { browser, page };
}

/** Click `expand_all` inside the token viewer to open every folder. */
export async function expandAllTokenFolders(page: Page): Promise<void> {
  const expandBtn = page.locator('.main-token-viewer').getByText('expand_all');

  if (await expandBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await expandBtn.click();
    await page.waitForTimeout(2500);
  }
}

/** Click every elevation/shape/font/type interactive token to capture popover content. */
export async function clickInteractiveTokens(
  page: Page
): Promise<Record<string, string>> {
  const interactiveSpans = await page
      .locator('.main-token-viewer span.mat-mdc-tooltip-trigger.text-value')
      .all(),
    popoverTexts: Record<string, string> = {};

  for (const span of interactiveSpans) {
    const tokenName = (await span.textContent())?.trim() ?? '';

    if (
      !tokenName.includes('elevation') &&
      !tokenName.includes('shape') &&
      !tokenName.includes('.font') &&
      !tokenName.includes('.type')
    ) {
      continue;
    }

    try {
      await span.click({ timeout: 1500 });
      await page.waitForTimeout(800);

      const popoverText = await page.evaluate(() => {
        const overlay = document.querySelector('.cdk-overlay-container'),
          popover = overlay?.querySelector(
            '.token-popover, .mat-mdc-tooltip, [class*="popover"], [class*="detail"], [class*="panel"]'
          );

        return (popover as HTMLElement)?.innerText?.trim() || '';
      });

      if (popoverText) {
        popoverTexts[tokenName] = popoverText;
      }

      // Close by clicking elsewhere
      await page
        .locator('.main-token-viewer')
        .click({ position: { x: 5, y: 5 } });
      await page.waitForTimeout(300);
    } catch {
      // Ignore click failures
    }
  }

  return popoverTexts;
}

/** Read the full innerText of the `.main-token-viewer`. */
export async function getTokenViewerText(page: Page): Promise<string> {
  return page.evaluate(
    () =>
      document.querySelector<HTMLElement>('.main-token-viewer')?.innerText ?? ''
  );
}

/** Read the specs content from the sections BELOW the token viewer. */
export async function getSpecsSectionsText(page: Page): Promise<string> {
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
      endMarker = 'Material Design is an adaptable system',
      endIdx = afterTokens.indexOf(endMarker);

    return afterTokens
      .substring(0, endIdx !== -1 ? endIdx : undefined)
      .trim();
  });
}

/**
 * Discover all variant names from the token-set dropdown.
 * Opens the dropdown, reads all menu items, closes it, and returns the list.
 * When `skipDeprecated` is true (default), variants containing "[Deprecated]" are excluded.
 */
export async function discoverVariants(
  page: Page,
  opts: { skipDeprecated?: boolean } = {}
): Promise<string[]> {
  const { skipDeprecated = true } = opts;

  // Click the variant dropdown button
  await page.locator('.active-token-set-button').first().click();
  await page.waitForTimeout(1000);

  // Read all menu items
  const items = await page
    .locator('button.mat-mdc-menu-item')
    .allTextContents();

  // Close the dropdown by pressing Escape
  await page.keyboard.press('Escape');
  await page.waitForTimeout(300);

  const variants = items
    .map(t => t.trim())
    // Strip leading "check" icon text from the currently active variant
    .map(t => (t.startsWith('check') ? t.slice(5).trimStart() : t))
    .filter(t => t.length > 0);

  if (skipDeprecated) {
    return variants.filter(
      v => !v.toLowerCase().includes('[deprecated]') && !v.toLowerCase().includes('deprecated')
    );
  }

  return variants;
}

/**
 * Switch the token viewer to a specific variant by name.
 */
export async function switchVariant(
  page: Page,
  variantName: string
): Promise<void> {
  await page.locator('.active-token-set-button').first().click();
  await page.waitForTimeout(1000);
  await page
    .locator(`button.mat-mdc-menu-item:has-text("${variantName}")`)
    .click();
  await page.waitForTimeout(2500);
}

// ── Token Parsing ──────────────────────────────────────────────────────────

/**
 * Parse the raw token viewer text into structured data.
 *
 * The text follows a repeating pattern:
 *   <human-readable name>
 *   [warning]?                      ← optional deprecated marker
 *   md.comp.<component>.<token>
 *   [content_copy]?                 ← skip
 *   <value>                         ← e.g. #ECE6F0, 24dp, Roboto, 0.08
 *
 * Folder headers look like:
 *   folder_open
 *   <Section Name>
 *   keyboard_arrow_down
 *
 * When `skipDeprecated` is true, deprecated token entries are omitted.
 */
export function parseTokens(
  rawText: string,
  opts: { tokenPrefix?: string; skipDeprecated?: boolean } = {}
): TokenSection[] {
  const { tokenPrefix = 'md.comp.', skipDeprecated = false } = opts;

  const lines = rawText
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0),
    sections: TokenSection[] = [];

  let currentSection: TokenSection | null = null,
    i = 0;

  // Skip the header lines (variant name, nav icons, column header)
  while (i < lines.length && !lines[i].startsWith('folder') && !lines[i].startsWith(tokenPrefix)) {
    // Check if the next line looks like a token key (flat list without folders)
    if (
      i + 1 < lines.length &&
      (lines[i + 1]?.startsWith(tokenPrefix) || lines[i + 1] === 'warning')
    ) {
      break;
    }
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
      currentSection = { name: sectionName, tokens: [] };
      sections.push(currentSection);
      continue;
    }

    // Skip UI chrome
    if (
      [
        'keyboard_arrow_down',
        'content_copy',
        'collapse_all',
        'expand_all',
        'search',
        'visibility',
        'grid_view',
        'arrow_drop_down',
        'Aa',
      ].includes(line)
    ) {
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

    // Token key (starts with prefix)
    let tokenKey = '';

    if (i < lines.length && lines[i]?.startsWith(tokenPrefix)) {
      tokenKey = lines[i];
      i++;
    } else {
      // Not a token entry — may be noise; skip
      continue;
    }

    // Skip content_copy
    if (i < lines.length && lines[i] === 'content_copy') i++;

    // Value — could be a color (#hex), dimension (Ndp), number, font name, etc.
    let value = '';

    if (
      i < lines.length &&
      !lines[i]?.startsWith('folder') &&
      !lines[i]?.startsWith(tokenPrefix) &&
      !['warning', 'keyboard_arrow_down', 'Aa'].includes(lines[i])
    ) {
      const nextIsTokenName =
        (i + 1 < lines.length &&
          (lines[i + 1]?.startsWith(tokenPrefix) ||
            lines[i + 1] === 'warning')) ||
        (i + 2 < lines.length &&
          lines[i + 1] === 'warning' &&
          lines[i + 2]?.startsWith(tokenPrefix));

      if (!nextIsTokenName) {
        value = lines[i];
        i++;
      }
    }

    if (currentSection) {
      if (skipDeprecated && deprecated) continue;
      currentSection.tokens.push({ humanName, tokenKey, value, deprecated });
    } else {
      // Flat token list (no folder headers) — create a default section
      if (skipDeprecated && deprecated) continue;
      currentSection = { name: 'Tokens', tokens: [] };
      sections.push(currentSection);
      currentSection.tokens.push({ humanName, tokenKey, value, deprecated });
    }
  }

  return sections;
}

// ── Specs Section Cleaning ─────────────────────────────────────────────────

/**
 * Clean noise from raw specs text.
 * `extraPatterns` allows component-specific patterns to be removed.
 */
export function cleanSpecsText(
  rawText: string,
  extraPatterns: (string | RegExp)[] = []
): string {
  // Common UI chrome patterns to remove
  const basePatterns: RegExp[] = [
    /^link\n?/gm,
    /^Copy link\n?/gm,
    /^arrow_left_alt\n?/gm,
    /^arrow_right_alt\n?/gm,
    /^Previous\n?/gm,
    /^Up next\n?/gm,
    /^Collapse all\n?/gm,
    /^folder_open\n?/gm,
    /^folder\n?/gm,
    /^keyboard_arrow_down\n?/gm,
    /^expand_all\n?/gm,
    /^collapse_all\n?/gm,
    /^grid_view\n?/gm,
    /^visibility\n?/gm,
    /^search\n?/gm,
    /^arrow_drop_down\n?/gm,
  ];

  let cleaned = rawText;

  for (const pattern of basePatterns) {
    cleaned = cleaned.replace(pattern, '');
  }

  for (const pattern of extraPatterns) {
    if (typeof pattern === 'string') {
      cleaned = cleaned.replace(new RegExp(pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), '');
    } else {
      cleaned = cleaned.replace(pattern, '');
    }
  }

  return cleaned.trim();
}

// ── Markdown Generation ────────────────────────────────────────────────────

/** Escape markdown special characters in table cells. */
export function escMd(str: string): string {
  return str.replace(/\|/g, '\\|').replace(/\n/g, ' ');
}

/** Render token sections as markdown tables. */
export function renderTokenSections(
  lines: string[],
  sections: TokenSection[],
  popoverData: Record<string, string>
): void {
  for (const section of sections) {
    if (section.tokens.length === 0) continue;

    lines.push(`### ${section.name}`);
    lines.push('');
    lines.push('| Description | Token | Value |');
    lines.push('|---|---|---|');

    for (const token of section.tokens) {
      let val = token.value || popoverData[token.tokenKey] || '*(reference)*';

      if (val === token.tokenKey) val = '*(reference)*';
      lines.push(
        `| ${escMd(token.humanName)} | \`${token.tokenKey}\` | ${escMd(val)} |`
      );
    }

    lines.push('');
  }
}

/**
 * Generate a complete markdown document from variant data.
 */
export function generateMarkdown(opts: {
  title: string;
  sourceUrl: string;
  variants: VariantData[];
  specsContent?: string;
}): string {
  const { title, sourceUrl, variants, specsContent } = opts,
    lines: string[] = [];

  lines.push(`# ${title}`);
  lines.push('');
  lines.push(`> Source: [${sourceUrl.replace('https://', '')}](${sourceUrl})`);
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const variant of variants) {
    // Skip variants with no token content
    const hasTokens = variant.sections.some(s => s.tokens.length > 0);
    if (!hasTokens) continue;

    lines.push(`## ${variant.variantName}`);
    lines.push('');
    renderTokenSections(lines, variant.sections, variant.popoverData);
  }

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
  lines.push(
    `*Extracted from the Material Design 3 website on ${new Date().toISOString().slice(0, 10)}.*`
  );
  lines.push('');

  return lines.join('\n');
}
