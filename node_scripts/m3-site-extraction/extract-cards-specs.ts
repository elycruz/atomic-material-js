/**
 * M3 Cards Component — Token & Specs Extraction Script
 *
 * Navigates to https://m3.material.io/components/cards/specs,
 * discovers all non-deprecated variants (Elevated, Filled, Outlined),
 * expands all token folders, clicks on elevation/shape interactive
 * elements to capture their popover content, extracts all specs content
 * below the token viewer, and writes a well-formatted markdown file.
 *
 * Usage (from repo root):
 *   node --experimental-strip-types node_scripts/m3-site-extraction/extract-cards-specs.ts
 */
import {
  type VariantData,
  type TokenSection,
  launchBrowser,
  discoverVariants,
  switchVariant,
  expandAllTokenFolders,
  clickInteractiveTokens,
  getTokenViewerText,
  getSpecsSectionsText,
  parseTokens,
  cleanSpecsText,
  escMd,
  writeOutput,
} from './utils.ts';

const URL = 'https://m3.material.io/components/cards/specs';

// ── Known System Token References ──────────────────────────────────────────
// The token viewer's popovers often echo the token key instead of resolving
// the underlying system reference.  This map provides the correct values,
// sourced from the raw token dump (m3.cards.specs-raw.md) and M3 system
// token definitions.

const SYSTEM_TOKEN_MAP: Record<string, string> = {
  // ── Elevated card ──
  'md.comp.elevated-card.container.elevation': 'md.sys.elevation.level1',
  'md.comp.elevated-card.container.shape': 'md.sys.shape.corner.medium',
  'md.comp.elevated-card.disabled.container.elevation': 'md.sys.elevation.level1',
  'md.comp.elevated-card.hover.container.elevation': 'md.sys.elevation.level2',
  'md.comp.elevated-card.focus.container.elevation': 'md.sys.elevation.level1',
  'md.comp.elevated-card.pressed.container.elevation': 'md.sys.elevation.level1',
  'md.comp.elevated-card.dragged.container.elevation': 'md.sys.elevation.level4',

  // ── Filled card ──
  'md.comp.filled-card.container.elevation': 'md.sys.elevation.level0',
  'md.comp.filled-card.container.shape': 'md.sys.shape.corner.medium',
  'md.comp.filled-card.disabled.container.elevation': 'md.sys.elevation.level0',
  'md.comp.filled-card.hover.container.elevation': 'md.sys.elevation.level1',
  'md.comp.filled-card.focus.container.elevation': 'md.sys.elevation.level0',
  'md.comp.filled-card.pressed.container.elevation': 'md.sys.elevation.level0',
  'md.comp.filled-card.dragged.container.elevation': 'md.sys.elevation.level3',

  // ── Outlined card ──
  'md.comp.outlined-card.container.elevation': 'md.sys.elevation.level0',
  'md.comp.outlined-card.container.shape': 'md.sys.shape.corner.medium',
  'md.comp.outlined-card.disabled.container.elevation': 'md.sys.elevation.level0',
  'md.comp.outlined-card.hover.container.elevation': 'md.sys.elevation.level1',
  'md.comp.outlined-card.focus.container.elevation': 'md.sys.elevation.level0',
  'md.comp.outlined-card.pressed.container.elevation': 'md.sys.elevation.level0',
  'md.comp.outlined-card.dragged.container.elevation': 'md.sys.elevation.level3',
};

// ── Token Rendering (with Deprecated column) ───────────────────────────────

function renderCardTokenSections(
  lines: string[],
  sections: TokenSection[],
  popoverData: Record<string, string>
): void {
  for (const section of sections) {
    if (section.tokens.length === 0) continue;

    const hasDeprecated = section.tokens.some(t => t.deprecated);

    lines.push(`### ${section.name}`);
    lines.push('');

    if (hasDeprecated) {
      lines.push('| Description | Token | Value | Deprecated |');
      lines.push('|---|---|---|---|');
    } else {
      lines.push('| Description | Token | Value |');
      lines.push('|---|---|---|');
    }

    for (const token of section.tokens) {
      let val =
        token.value ||
        SYSTEM_TOKEN_MAP[token.tokenKey] ||
        popoverData[token.tokenKey] ||
        '*(reference)*';

      if (val === token.tokenKey) {
        val = SYSTEM_TOKEN_MAP[token.tokenKey] ?? '*(reference)*';
      }

      const row = hasDeprecated
        ? `| ${escMd(token.humanName)} | \`${token.tokenKey}\` | ${escMd(val)} | ${token.deprecated ? '⚠️ Yes' : ''} |`
        : `| ${escMd(token.humanName)} | \`${token.tokenKey}\` | ${escMd(val)} |`;

      lines.push(row);
    }

    lines.push('');
  }
}

// ── Cards-Specific Specs Formatting ────────────────────────────────────────

function formatCardsSpecsAsMarkdown(rawSpecs: string): string {
  const cleaned = cleanSpecsText(rawSpecs, [
    /Cards: Overview\n?/g,
    /Cards: Guidelines\n?/g,
  ]);

  const lines = cleaned.split('\n'),
    output: string[] = [];

  // Skip duplicate token data that leaks into the specs section.
  // Find where the descriptive content starts (first variant heading).
  let specsStart = 0;

  for (let i = 0; i < lines.length; i++) {
    if (/^(Elevated|Filled|Outlined) card$/i.test(lines[i].trim())) {
      specsStart = i;
      break;
    }
  }

  let inTable = false,
    pendingAttr = '',
    inColorRolesList = false;

  const colorRoles = new Set([
    'Surface container low',
    'Surface container highest',
    'Surface',
    'Outline variant',
    'On surface',
    'On surface variant',
    'Primary',
    'Secondary',
  ]);

  // Also detect and skip pure measurement rows that appear before specsStart
  // (Attribute/Value lines that aren't in the measurements section)

  for (let i = specsStart; i < lines.length; i++) {
    const line = lines[i],
      trimmed = line.trim();

    // Skip noise
    if (trimmed === 'Aa') continue;
    if (trimmed.startsWith('md.comp.')) continue;
    if (trimmed === 'warning') continue;
    if (trimmed === 'content_copy') continue;
    if (trimmed === 'Link copied') continue;
    // Skip boilerplate descriptive text about tokens / states
    if (trimmed.startsWith('Color values are implemented through design tokens')) continue;
    if (trimmed.startsWith('For design, this means')) continue;
    if (trimmed.startsWith('For implementation, a color value')) continue;
    if (trimmed.startsWith('Learn more about design tokens')) continue;
    if (trimmed.startsWith('States are visual representations')) continue;
    if (trimmed.startsWith('Learn more about interaction states')) continue;

    if (trimmed === '' && !inTable) {
      if (inColorRolesList) {
        inColorRolesList = false;
      }
      // Avoid consecutive blank lines
      if (output.length > 0 && output[output.length - 1] === '') continue;
      output.push('');
      continue;
    }

    // Detect table header
    if (trimmed === 'Attribute\tValue' || trimmed === 'Attribute') {
      // Check if next non-empty line is "Value" (tab-separated or on next line)
      if (trimmed === 'Attribute') {
        const nextTrimmed = i + 1 < lines.length ? lines[i + 1].trim() : '';

        if (nextTrimmed === 'Value') {
          i++; // skip "Value" line
        }
      }
      inTable = true;
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

      // Remaining non-tab lines: try as Attribute / Value pairs on consecutive lines
      if (pendingAttr) {
        output.push(`| ${pendingAttr} | ${trimmed} |`);
        pendingAttr = '';
        continue;
      }

      // Check if current line is an attribute with a value on the next line
      if (
        nextTrimmed &&
        !nextTrimmed.startsWith('Attribute') &&
        !/^(Elevated|Filled|Outlined|Measurements|Card|Container|Outline)/i.test(nextTrimmed)
      ) {
        pendingAttr = trimmed;
        continue;
      }

      inTable = false;
      pendingAttr = '';
      output.push('');
    }

    // Color roles → bullet list
    if (inColorRolesList && colorRoles.has(trimmed)) {
      output.push(`- ${trimmed}`);
      continue;
    }
    if (!inColorRolesList && colorRoles.has(trimmed)) {
      inColorRolesList = true;
      output.push(`- ${trimmed}`);
      continue;
    }

    // Section headers for card variants
    if (
      /^(Elevated|Filled|Outlined) card$/i.exec(trimmed)
    ) {
      output.push(`### ${trimmed}`);
      output.push('');
      continue;
    }

    // Skip color/states sub-headings (info is captured in token tables)
    if (/^(Elevated|Filled|Outlined) card color$/i.test(trimmed)) continue;
    if (/color roles used for light and dark themes/i.test(trimmed)) continue;
    if (/^(Elevated|Filled|Outlined) card states:?\s*$/i.test(trimmed)) continue;

    // Sub-headers (only measurements-related ones are useful)
    if (
      /^(Elevated|Filled|Outlined) card measurements/i.exec(trimmed)
    ) {
      output.push(`#### ${trimmed}`);
      output.push('');
      continue;
    }

    // "Measurements" standalone header
    if (trimmed === 'Measurements' || trimmed === 'Card padding and size measurements') {
      output.push(`### ${trimmed}`);
      output.push('');
      continue;
    }

    // Skip standalone element names that are just sub-part labels
    if (/^(Container|Outline)$/.test(trimmed)) {
      continue;
    }

    // Skip repeated state names in the states list
    if (/^(Hovered|Focused|Pressed|Dragged|Disabled)$/.test(trimmed)) {
      continue;
    }

    output.push(trimmed);
  }

  return output.join('\n').trim();
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const { browser, page } = await launchBrowser();

  console.log('Navigating to', URL);
  await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(5000);

  // ── Discover available variants ──
  console.log('Discovering variants...');

  const variantNames = await discoverVariants(page, {
    skipDeprecated: true,
  });

  console.log(`  Found ${variantNames.length} non-deprecated variants:`);
  for (const v of variantNames) console.log(`    - ${v}`);

  // ── Extract tokens for each variant ──
  const variants: VariantData[] = [];

  for (let idx = 0; idx < variantNames.length; idx++) {
    const variantName = variantNames[idx];

    if (idx > 0) {
      console.log(`Switching to ${variantName}...`);
      await switchVariant(page, variantName);
    }

    console.log(`Extracting ${variantName} tokens...`);
    await expandAllTokenFolders(page);

    const rawText = await getTokenViewerText(page),
      popoverData = await clickInteractiveTokens(page);

    console.log(
      `  Popover data captured for ${Object.keys(popoverData).length} interactive tokens`
    );

    const sections = parseTokens(rawText);

    variants.push({ variantName, sections, popoverData });
  }

  // ── Extract specs content ──
  console.log('Extracting specs content...');

  const rawSpecs = await getSpecsSectionsText(page);

  await browser.close();

  // ── Format specs ──
  const formattedSpecs = formatCardsSpecsAsMarkdown(rawSpecs);

  // ── Generate markdown ──
  console.log('Generating markdown...');

  const lines: string[] = [];

  lines.push('# M3 Cards — Tokens & Specs');
  lines.push('');
  lines.push(`> Source: [m3.material.io/components/cards/specs](${URL})`);
  lines.push('');
  lines.push('---');
  lines.push('');

  for (const variant of variants) {
    const hasTokens = variant.sections.some(s => s.tokens.length > 0);

    if (!hasTokens) continue;

    lines.push(`## ${variant.variantName}`);
    lines.push('');
    renderCardTokenSections(lines, variant.sections, variant.popoverData);
  }

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
  const outputPath = writeOutput('m3-cards.specs.md', markdown);

  console.log(`\nDone! Output written to ${outputPath}`);
  for (const v of variants) {
    console.log(`  ${v.variantName}: ${v.sections.length} sections`);
  }
  if (formattedSpecs) {
    console.log(`  Specs content: ${formattedSpecs.length} chars`);
  }
}

main().catch((err: unknown) => {
  console.error('Extraction failed:', err);
  process.exit(1);
});
