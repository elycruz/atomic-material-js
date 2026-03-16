/**
 * M3 App Bar Component — Token & Specs Extraction Script
 *
 * Navigates to https://m3.material.io/components/app-bars/specs,
 * discovers all non-deprecated variants, expands all token folders,
 * clicks on elevation/shape/font interactive elements to capture their
 * popover content, extracts all specs content below the token viewer,
 * and writes a well-formatted markdown file.
 *
 * Usage (from repo root):
 *   node --experimental-strip-types node_scripts/m3-site-extraction/extract-appbar-specs.ts
 */
import {
  type VariantData,
  launchBrowser,
  discoverVariants,
  switchVariant,
  expandAllTokenFolders,
  clickInteractiveTokens,
  getTokenViewerText,
  getSpecsSectionsText,
  parseTokens,
  cleanSpecsText,
  generateMarkdown,
  writeOutput,
} from './utils.ts';

const URL = 'https://m3.material.io/components/app-bars/specs';

// ── App Bar–Specific Specs Formatting ──────────────────────────────────────

function formatAppBarSpecsAsMarkdown(rawSpecs: string): string {
  const cleaned = cleanSpecsText(rawSpecs, [
    /Top app bar: Overview\n?/g,
    /Top app bar: Guidelines\n?/g,
    /App bars: Overview\n?/g,
    /App bars: Guidelines\n?/g,
    /Bottom app bar: Overview\n?/g,
    /Bottom app bar: Guidelines\n?/g,
  ]);

  const lines = cleaned.split('\n'),
    output: string[] = [];

  let inTable = false,
    pendingAttr = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i],
      trimmed = line.trim();

    // Skip noise
    if (trimmed === 'Aa') continue;
    if (trimmed.startsWith('md.comp.')) continue;
    if (trimmed === 'warning') continue;
    if (trimmed === 'content_copy') continue;

    if (trimmed === '' && !inTable) {
      output.push('');
      continue;
    }

    // Detect table header
    if (trimmed === 'Attribute\tValue') {
      inTable = true;
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

    // Section headers for app bar variants
    if (
      /^(Center-aligned|Small|Medium|Large|Bottom) (top )?app bar/i.exec(
        trimmed
      ) &&
      trimmed.length < 80
    ) {
      output.push(`### ${trimmed}`);
      output.push('');
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

    // Switch to variant (first variant is already selected on page load)
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

    const sections = parseTokens(rawText, { skipDeprecated: true });

    variants.push({ variantName, sections, popoverData });
  }

  // ── Extract specs content ──
  console.log('Extracting specs content...');

  const rawSpecs = await getSpecsSectionsText(page);

  await browser.close();

  // ── Format specs ──
  const formattedSpecs = formatAppBarSpecsAsMarkdown(rawSpecs);

  // ── Generate markdown ──
  console.log('Generating markdown...');

  const markdown = generateMarkdown({
    title: 'M3 App Bar — Tokens & Specs',
    sourceUrl: URL,
    variants,
    specsContent: formattedSpecs || undefined,
  });

  // ── Write output ──
  const outputPath = writeOutput('m3-appbar-tokens-and-specs.md', markdown);

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
