/**
 * gen-material.ts
 *
 * Generates Material Design 3 color scheme CSS files using Google's
 * @material/material-color-utilities for accurate HCT-based color generation.
 *
 * Outputs 6 theme files to css/material/:
 *   light.scss, dark.scss, light-mc.scss, dark-mc.scss, light-hc.scss, dark-hc.scss
 *
 * Seed hues derived from colors.ts:
 *   primary=240, success=120, info=180, warning=60
 *
 * ====> DO NOT MANUALLY EDIT generated CSS files — regenerate with:
 *   node node_scripts/gen-css/index.ts
 */
import fs from 'fs';
import path from 'path';
import url from 'url';
import {
  SchemeTonalSpot,
  Hct,
  redFromArgb,
  greenFromArgb,
  blueFromArgb,
} from '@material/material-color-utilities';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url)),
  { log } = console,
  /* ── Seed colours ───────────────────────────────────────────────────
   * Hues taken from colors.ts (primary=240, success=120, info=180,
   * warning=60).  Chroma 48 / tone 40 give a vivid, mid-range seed
   * that the library's HCT algorithm can work from.
   * ─────────────────────────────────────────────────────────────────── */
  PRIMARY_SOURCE = Hct.from(240, 48, 40).toInt(),
  SUCCESS_SOURCE = Hct.from(120, 48, 40).toInt(),
  INFO_SOURCE = Hct.from(180, 48, 40).toInt(),
  WARNING_SOURCE = Hct.from(60, 48, 40).toInt();

/* ── ARGB → OKLCH conversion ──────────────────────────────────────── */

function srgbToLinear(c: number): number {
  const s = c / 255;

  return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
}

function argbToOklch(argb: number): string {
  const r = srgbToLinear(redFromArgb(argb)),
    g = srgbToLinear(greenFromArgb(argb)),
    b = srgbToLinear(blueFromArgb(argb)),
    // Linear sRGB → LMS (Oklab)
    l = 0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b,
    m = 0.2119034982 * r + 0.7736016756 * g + 0.0144948262 * b,
    s = 0.0883024619 * r + 0.2289692882 * g + 0.68272825 * b,
    l_ = Math.cbrt(l),
    m_ = Math.cbrt(m),
    s_ = Math.cbrt(s),
    // LMS → Oklab
    L = 0.2104542553 * l_ + 0.793617785 * m_ - 0.0040720468 * s_,
    a = 1.9779984951 * l_ - 2.428592205 * m_ + 0.4505937099 * s_,
    bOk = 0.0259040371 * l_ + 0.7827717662 * m_ - 0.808675766 * s_,
    C = Math.sqrt(a * a + bOk * bOk);

  let H = (Math.atan2(bOk, a) * 180) / Math.PI;

  if (H < 0) H += 360;

  const Lpct = +(L * 100).toFixed(2),
    Cfixed = C.toFixed(5),
    Hfixed = H.toFixed(2);

  if (C < 0.0001) return `oklch(${Lpct}% 0 0deg)`;
  return `oklch(${Lpct}% ${Cfixed} ${Hfixed}deg)`;
}

/* ── CSS helpers ──────────────────────────────────────────────────── */

function decl(prop: string, argb: number): string {
  return `  ${prop}: ${argbToOklch(argb)};`;
}

/* ── Theme variant descriptors ────────────────────────────────────── */

interface ThemeVariant {
  fileName: string;
  selector: string;
  isDark: boolean;
  contrast: number;
}

const VARIANTS: ThemeVariant[] = [
  { fileName: 'light.scss', selector: '.light', isDark: false, contrast: 0 },
  { fileName: 'dark.scss', selector: '.dark', isDark: true, contrast: 0 },
  {
    fileName: 'light-mc.scss',
    selector: '.light-medium-contrast',
    isDark: false,
    contrast: 0.5,
  },
  {
    fileName: 'dark-mc.scss',
    selector: '.dark-medium-contrast',
    isDark: true,
    contrast: 0.5,
  },
  {
    fileName: 'light-hc.scss',
    selector: '.light-high-contrast',
    isDark: false,
    contrast: 1.0,
  },
  {
    fileName: 'dark-hc.scss',
    selector: '.dark-high-contrast',
    isDark: true,
    contrast: 1.0,
  },
];

/* ── Generate CSS for one variant ─────────────────────────────────── */

function generateVariantCss(variant: ThemeVariant): string {
  const s = new SchemeTonalSpot(
      Hct.fromInt(PRIMARY_SOURCE),
      variant.isDark,
      variant.contrast
    ),
    // Extended colours — use primary role from a per-colour scheme
    suc = new SchemeTonalSpot(
      Hct.fromInt(SUCCESS_SOURCE),
      variant.isDark,
      variant.contrast
    ),
    inf = new SchemeTonalSpot(
      Hct.fromInt(INFO_SOURCE),
      variant.isDark,
      variant.contrast
    ),
    war = new SchemeTonalSpot(
      Hct.fromInt(WARNING_SOURCE),
      variant.isDark,
      variant.contrast
    ),
    lines = [
      `${variant.selector} {`,

      // Core roles (ordered to match Material Theme Builder on Figma)
      decl('--md-sys-color-primary', s.primary),
      decl('--md-sys-color-surface-tint', s.surfaceTint),
      decl('--md-sys-color-on-primary', s.onPrimary),
      decl('--md-sys-color-primary-container', s.primaryContainer),
      decl('--md-sys-color-on-primary-container', s.onPrimaryContainer),

      decl('--md-sys-color-secondary', s.secondary),
      decl('--md-sys-color-on-secondary', s.onSecondary),
      decl('--md-sys-color-secondary-container', s.secondaryContainer),
      decl('--md-sys-color-on-secondary-container', s.onSecondaryContainer),

      decl('--md-sys-color-tertiary', s.tertiary),
      decl('--md-sys-color-on-tertiary', s.onTertiary),
      decl('--md-sys-color-tertiary-container', s.tertiaryContainer),
      decl('--md-sys-color-on-tertiary-container', s.onTertiaryContainer),

      decl('--md-sys-color-error', s.error),
      decl('--md-sys-color-on-error', s.onError),
      decl('--md-sys-color-error-container', s.errorContainer),
      decl('--md-sys-color-on-error-container', s.onErrorContainer),

      decl('--md-sys-color-background', s.background),
      decl('--md-sys-color-on-background', s.onBackground),

      decl('--md-sys-color-surface', s.surface),
      decl('--md-sys-color-on-surface', s.onSurface),
      decl('--md-sys-color-surface-variant', s.surfaceVariant),
      decl('--md-sys-color-on-surface-variant', s.onSurfaceVariant),

      decl('--md-sys-color-outline', s.outline),
      decl('--md-sys-color-outline-variant', s.outlineVariant),

      decl('--md-sys-color-shadow', s.shadow),
      decl('--md-sys-color-scrim', s.scrim),

      decl('--md-sys-color-inverse-surface', s.inverseSurface),
      decl('--md-sys-color-inverse-on-surface', s.inverseOnSurface),
      decl('--md-sys-color-inverse-primary', s.inversePrimary),

      // Fixed colours
      decl('--md-sys-color-primary-fixed', s.primaryFixed),
      decl('--md-sys-color-on-primary-fixed', s.onPrimaryFixed),
      decl('--md-sys-color-primary-fixed-dim', s.primaryFixedDim),
      decl('--md-sys-color-on-primary-fixed-variant', s.onPrimaryFixedVariant),

      decl('--md-sys-color-secondary-fixed', s.secondaryFixed),
      decl('--md-sys-color-on-secondary-fixed', s.onSecondaryFixed),
      decl('--md-sys-color-secondary-fixed-dim', s.secondaryFixedDim),
      decl(
        '--md-sys-color-on-secondary-fixed-variant',
        s.onSecondaryFixedVariant
      ),

      decl('--md-sys-color-tertiary-fixed', s.tertiaryFixed),
      decl('--md-sys-color-on-tertiary-fixed', s.onTertiaryFixed),
      decl('--md-sys-color-tertiary-fixed-dim', s.tertiaryFixedDim),
      decl(
        '--md-sys-color-on-tertiary-fixed-variant',
        s.onTertiaryFixedVariant
      ),

      // Surface hierarchy
      decl('--md-sys-color-surface-dim', s.surfaceDim),
      decl('--md-sys-color-surface-bright', s.surfaceBright),
      decl('--md-sys-color-surface-container-lowest', s.surfaceContainerLowest),
      decl('--md-sys-color-surface-container-low', s.surfaceContainerLow),
      decl('--md-sys-color-surface-container', s.surfaceContainer),
      decl('--md-sys-color-surface-container-high', s.surfaceContainerHigh),
      decl(
        '--md-sys-color-surface-container-highest',
        s.surfaceContainerHighest
      ),

      // Extended colour roles
      decl('--md-extended-color-success-color', suc.primary),
      decl('--md-extended-color-success-on-color', suc.onPrimary),
      decl('--md-extended-color-success-color-container', suc.primaryContainer),
      decl(
        '--md-extended-color-success-on-color-container',
        suc.onPrimaryContainer
      ),

      decl('--md-extended-color-info-color', inf.primary),
      decl('--md-extended-color-info-on-color', inf.onPrimary),
      decl('--md-extended-color-info-color-container', inf.primaryContainer),
      decl(
        '--md-extended-color-info-on-color-container',
        inf.onPrimaryContainer
      ),

      decl('--md-extended-color-warning-color', war.primary),
      decl('--md-extended-color-warning-on-color', war.onPrimary),
      decl('--md-extended-color-warning-color-container', war.primaryContainer),
      decl(
        '--md-extended-color-warning-on-color-container',
        war.onPrimaryContainer
      ),

      '}',
      '',
    ];

  return lines.join('\n');
}

/* ── Orchestrator ─────────────────────────────────────────────────── */

async function genMaterialThemes(
  outputDir = path.join(__dirname, '../../scss/material')
): Promise<void> {
  await fs.promises.mkdir(outputDir, { recursive: true });

  await Promise.all(
    VARIANTS.map(async variant => {
      const css = generateVariantCss(variant),
        filePath = path.join(outputDir, variant.fileName);

      await fs.promises.writeFile(filePath, css);
      log(`material-themes/${variant.fileName} written successfully`);
    })
  );
}

export { genMaterialThemes };
