# Menus – Specs

## Variants

### Vertical menus

Use vertical menus for a more expressive look and feel, including rounded corners, standard and vibrant color styles, more selection states, and submenu motion.

![2 vertical menus use shape and color to indicate selected state.](https://lh3.googleusercontent.com/ryW1crRfja9xt_7sPlT_XlF64XPHQjHmk6HkJ91EP23gfGW2Z1TNt8V1RsaAEt4bzOOow6wEtTrB4tk32rzhd4WL2dVMKVlbh3x6ZD3oqdK7=s0)

1. Vertical menu with gap
2. Vertical menu with divider

### Baseline variant

In M3 Expressive, **baseline** menu is still available to use, but doesn't have the latest shapes, color styles, selection states, and motion. See baseline menu specs

![A baseline menu variant with square corners and standard colors.](https://lh3.googleusercontent.com/I8AoQRDKlS29lSyVHYVs4-2PKXVQUXC_wlPJx5IT1hWiga7bEC7DZUlNH_OEoICZN5hCf8ii45dpApcg23TY6JhadwCluvznISW6HNfGKHUc=s0)

A baseline **menu** has square corners, as compared to a **vertical menu's** round corners and expressive styling

| Variant | M3 | M3 Expressive |
|---------|-----|---------------|
| Vertical menus | -- | Available |
| Menu (baseline) | Available | Available |

---

## Configurations

### Vertical menus layout

![2 menus: 1 standard, and 1 with a gap, creating groups.](https://lh3.googleusercontent.com/fJlPTJ2NqSiweyHvIr8M0iPk67mplnSmEnq_2SEOW1OvhT31iv4txdTlYrXWpNvmmBVVfJJzaE_lPSakS5hW51-I3oC8XuRu0l2lxGxm7zXi=s0)

1. Standard
2. Grouped

| Category | Configuration | M3 | M3 Expressive |
|----------|--------------|-----|---------------|
| Color | Standard | Available | Available |
| Color | Vibrant | -- | Available |
| Layout | Standard | Available | Available |
| Layout | Grouped | -- | Available |

---

## Anatomy

### Vertical menus

![A diagram of a vertical menu.](https://lh3.googleusercontent.com/AfTrO7v-T_4xnHi8Fa-xmOOn21wmjYQWZ9CqSCVGaG910Nd8K4lS3FqfcNgYQ0iF4FSY12e_AEjX1WNsFOOM02AuYBuTSGrwaTpCPKxUNBAQ=s0)

1. Menu item
2. Leading icon (optional)
3. Menu item text
4. Trailing icon (optional)
5. Badge (optional)
6. Trailing text (optional)
7. Container
8. Supporting text (optional)
9. Label text (optional)
10. Gap (optional)
11. Divider (optional)

---

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](https://m3.material.io/foundations/design-tokens/overview)

Menus have two color mappings:

- **Standard:** Surface-based
- **Vibrant:** Tertiary-based

These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.

![2 vertical menus: 1 with lower visual emphasis, and 1 vibrant menu with bold shades.](https://lh3.googleusercontent.com/UQTohIy6KP6b1-pM2Mvhf_SyQW6J3ibpKvf3Z5T8dI48XoYQ6DqhwG5ILCidkiXxCje50h4Tdx6VPzv1-2LVN2sSo_4JfItM9mhfrHEdHV8H=s0)

1. Standard color scheme
2. Vibrant color scheme

### Standard colors

Vertical menus color roles used for light and dark themes:

![2 vertical menus with standard color roles mapped to 11 elements.](https://lh3.googleusercontent.com/nA4wviKihXfkWje8PlNIZNpYajfpoudcjVm30OYpC8UdMEdquwj9QeSziFOs7KjJ3IR-fioXjTLMlZsyKMaUgi3Bfy70RpHTCCsGaJX5hWkc=s0)

- On surface variant
- On surface
- On surface (state layer)
- Surface container low
- On surface variant
- On surface variant
- Tertiary container (selected)
- On tertiary container (selected)
- On surface variant
- On surface variant
- On tertiary container (selected)

### Vibrant colors

Vertical menus color roles used for light and dark themes:

![2 vertical menus with vibrant color roles mapped to 11 elements.](https://lh3.googleusercontent.com/6B9lmZdfYRC5nkKI-x6hS9U37bZC1o0jRWDkYe90mc-TV-OjPicvEckz5sYKYsoyP2hRO_hR3An76jKHGR-b8qAYp_56q49AgW4kMo8Ez98=s0)

- On tertiary container
- On tertiary container
- On tertiary container (state layer)
- Tertiary container
- On tertiary container
- On tertiary container
- Tertiary (selected)
- On tertiary (selected)
- On tertiary container
- On tertiary container
- On tertiary (selected)

---

## States

States are visual representations used to communicate the status of a component or an interactive element. [More on interaction states](https://m3.material.io/foundations/interaction/states/overview)

Shape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. More on menu focus

![6 vertical menu states in light and dark themes.](https://lh3.googleusercontent.com/9y63FlzafeIP9Tth6PTh9NKO6wwrYUZqCs6PTUKqIQPfYd7apIWRsvYx91maUHu43E0GoIkm7nDVC_DZA6K-15ItBpV-1KJ550QZCGSHlzo8=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Active (main menu reveals submenu)

---

## Measurements

![Vertical menu marked with spacing and padding measurements.](https://lh3.googleusercontent.com/SyybBdmLyz7BXoGoAF1kjCwXx7BiZvB0e_I7bpFAIDO-W4YGSJ21CKgtu5PdH7J49aZfYEJbVPyjVFN2E9fWBLfUXDP44mP90E_Unc-g3c8=s0)

Vertical menu padding and size measurements

---

## Tokens & Specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

The token viewer provides an interactive way to explore menu tokens across variants (Menu - baseline) with states: Enabled, Disabled, Hover, Focus, Pressed, and Focus indicator. Tokens are shown for Default, Static, Android, Light theme.

---

### Menus - Color - Standard


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu container color | md.comp.menu.container.color | #FFFBFE |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu container shadow color | md.comp.menu.container.shadow-color | #000000 |
| Menu container elevation | md.comp.menu.container.elevation |  |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item selected label text color | md.comp.menu.list-item.selected.label-text.color | #1D192B |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color | #1D192B |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color | #1D192B |
| Menu container surface tint layer color | md.comp.menu.container.surface-tint-layer.color | #6750A4 |
| Menu list item container height | md.comp.menu.list-item.container.height | 56.0dp |
| Menu list item label text font | md.comp.menu.list-item.label-text.font |  |
| Menu list item label text size | md.comp.menu.list-item.label-text.size | 14.0dp |
| Menu list item label text line height | md.comp.menu.list-item.label-text.line-height | 20.0dp |
| Menu list item label text letter spacing | md.comp.menu.list-item.label-text.letter-spacing | 0.1dp |
| Menu list item label text weight | md.comp.menu.list-item.label-text.weight |  |
| Menu list item leading icon size | md.comp.menu.list-item.leading-icon.size | 24.0dp |
| Menu list item trailing icon size | md.comp.menu.list-item.trailing-icon.size | 24.0dp |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu list item leading icon color | md.comp.menu.list-item.leading-icon.color | #49454E |
| Menu list item trailing icon color | md.comp.menu.list-item.trailing-icon.color | #49454E |
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #1D192B |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #1D192B |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.with-leading-icon.leading-icon.color | #49454E |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.with-trailing-icon.trailing-icon.color | #49454E |

#### Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.08 |

#### Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item focus indicator color | md.comp.menu.list-item.focus-indicator.color | #6750A4 |
| Menu list item focus indicator width | md.comp.menu.list-item.focus-indicator.width | 3.0dp |

### Menus - Color - Vibrant


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu container color | md.comp.menu.container.color | #FFFBFE |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu container shadow color | md.comp.menu.container.shadow-color | #000000 |
| Menu container elevation | md.comp.menu.container.elevation |  |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item selected label text color | md.comp.menu.list-item.selected.label-text.color | #FFFFFF |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color | #FFFFFF |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color | #FFFFFF |
| Menu container surface tint layer color | md.comp.menu.container.surface-tint-layer.color | #6750A4 |
| Menu list item container height | md.comp.menu.list-item.container.height | 56.0dp |
| Menu list item label text font | md.comp.menu.list-item.label-text.font |  |
| Menu list item label text size | md.comp.menu.list-item.label-text.size | 14.0dp |
| Menu list item label text line height | md.comp.menu.list-item.label-text.line-height | 20.0dp |
| Menu list item label text letter spacing | md.comp.menu.list-item.label-text.letter-spacing | 0.1dp |
| Menu list item label text weight | md.comp.menu.list-item.label-text.weight |  |
| Menu list item leading icon size | md.comp.menu.list-item.leading-icon.size | 24.0dp |
| Menu list item trailing icon size | md.comp.menu.list-item.trailing-icon.size | 24.0dp |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu list item leading icon color | md.comp.menu.list-item.leading-icon.color | #7D5260 |
| Menu list item trailing icon color | md.comp.menu.list-item.trailing-icon.color | #7D5260 |
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #7D5260 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #7D5260 |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.with-leading-icon.leading-icon.color | #7D5260 |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.with-trailing-icon.trailing-icon.color | #7D5260 |

#### Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #7D5260 |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.08 |

#### Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #7D5260 |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #7D5260 |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item focus indicator color | md.comp.menu.list-item.focus-indicator.color | #7D5260 |
| Menu list item focus indicator width | md.comp.menu.list-item.focus-indicator.width | 3.0dp |

### Menus - Common


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu container color | md.comp.menu.container.color | #FFFBFE |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu container shadow color | md.comp.menu.container.shadow-color | #000000 |
| Menu container elevation | md.comp.menu.container.elevation |  |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item selected label text color | md.comp.menu.list-item.selected.label-text.color | #1D192B |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color | #1D192B |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color | #1D192B |
| Menu container surface tint layer color | md.comp.menu.container.surface-tint-layer.color | #6750A4 |
| Menu list item container height | md.comp.menu.list-item.container.height | 56.0dp |
| Menu list item label text font | md.comp.menu.list-item.label-text.font |  |
| Menu list item label text size | md.comp.menu.list-item.label-text.size | 14.0dp |
| Menu list item label text line height | md.comp.menu.list-item.label-text.line-height | 20.0dp |
| Menu list item label text letter spacing | md.comp.menu.list-item.label-text.letter-spacing | 0.1dp |
| Menu list item label text weight | md.comp.menu.list-item.label-text.weight |  |
| Menu list item leading icon size | md.comp.menu.list-item.leading-icon.size | 24.0dp |
| Menu list item trailing icon size | md.comp.menu.list-item.trailing-icon.size | 24.0dp |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu list item leading icon color | md.comp.menu.list-item.leading-icon.color | #49454E |
| Menu list item trailing icon color | md.comp.menu.list-item.trailing-icon.color | #49454E |
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #1D192B |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #1D192B |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.with-leading-icon.leading-icon.color | #49454E |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.with-trailing-icon.trailing-icon.color | #49454E |

#### Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.08 |

#### Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1D192B |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item focus indicator color | md.comp.menu.list-item.focus-indicator.color | #6750A4 |
| Menu list item focus indicator width | md.comp.menu.list-item.focus-indicator.width | 3.0dp |

### Menu (baseline)


#### Enabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu container color | md.comp.menu.container.color | #F3EDF7 |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu container shadow color | md.comp.menu.container.shadow-color | #000000 |
| Menu container elevation | md.comp.menu.container.elevation |  |

#### Enabled / Container

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item selected label text color | md.comp.menu.list-item.selected.label-text.color | #4A4458 |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color | #4A4458 |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color | #4A4458 |
| Menu container surface tint layer color | md.comp.menu.container.surface-tint-layer.color | #6750A4 |
| Menu list item container height | md.comp.menu.list-item.container.height | 48.0dp |
| Menu list item label text font | md.comp.menu.list-item.label-text.font |  |
| Menu list item label text size | md.comp.menu.list-item.label-text.size | 14.0dp |
| Menu list item label text line height | md.comp.menu.list-item.label-text.line-height | 20.0dp |
| Menu list item label text letter spacing | md.comp.menu.list-item.label-text.letter-spacing | 0.1dp |
| Menu list item label text weight | md.comp.menu.list-item.label-text.weight |  |
| Menu list item leading icon size | md.comp.menu.list-item.leading-icon.size | 24.0dp |
| Menu list item trailing icon size | md.comp.menu.list-item.trailing-icon.size | 24.0dp |
| Menu container shape | md.comp.menu.container.shape |  |
| Menu list item leading icon color | md.comp.menu.list-item.leading-icon.color | #704B72 |
| Menu list item trailing icon color | md.comp.menu.list-item.trailing-icon.color | #704B72 |

#### Disabled

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item label text color | md.comp.menu.list-item.label-text.color | #4A4458 |
| Menu list item with leading icon - icon color | md.comp.menu.list-item.with-leading-icon.leading-icon.color | #704B72 |
| Menu list item with trailing icon - icon color | md.comp.menu.list-item.with-trailing-icon.trailing-icon.color | #704B72 |

#### Hover

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1F1B1F |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.08 |

#### Focus

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1F1B1F |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Pressed

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item state layer color | md.comp.menu.list-item.state-layer.color | #1F1B1F |
| Menu list item state layer opacity | md.comp.menu.list-item.state-layer.opacity | 0.12 |

#### Focus indicator

| Token | Reference | Value |
|-------|-----------|-------|
| Menu list item focus indicator color | md.comp.menu.list-item.focus-indicator.color | #6750A4 |
| Menu list item focus indicator width | md.comp.menu.list-item.focus-indicator.width | 3.0dp |

## Menu (baseline)

The **baseline** menu variant is available and continues to work in existing products. However, M3 expressive vertical menus are recommended for new designs.

### Baseline tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](https://m3.material.io/foundations/design-tokens/overview)

The token viewer provides an interactive way to explore baseline menu tokens with states: Enabled, Disabled, Hover, Focus, Pressed, and Focus indicator. Tokens are shown for Default, Android, Light theme.

### Anatomy

![Diagram of 6 elements of a baseline menu.](https://lh3.googleusercontent.com/j5d1I8gfzjOWuHT_-hl99nkZRsYTe7HewZawtXqtHSrfZhzBSF92oFrF4O2icV5C3AUdsRZTxRIgSGBhA37l-s5SWozyvwe70RLG6OwzZUSoQw=s0)

1. List item
2. List item leading icon
3. List item trailing icon
4. Container
5. List item trailing text
6. Divider

### Color

Baseline menu color roles used for light and dark themes:

![9 color roles of a baseline menu in light and dark themes.](https://lh3.googleusercontent.com/1vrmeDpf2FtiP2c9fRq9p_aeqONtRV3zqmzYfkoIOaJesocpZ19K_ZUuMj99rTWJxwAW_r9WSMEHiVvKYKjwvUcpYtdJ5Vz60I5nTjnhGSR5=s0)

- On surface variant
- On surface
- On surface - opacity: 0.08
- Surface container
- On surface variant
- On surface variant
- On surface variant
- Surface container highest
- Outline variant

### States

#### Default menu items

![Diagram numbering the 5 default states of a baseline menu.](https://lh3.googleusercontent.com/9WZ8E98mBPsfeJqGE1w6ExWLXo1jACCCgppiykccySkhqcZCqFfrTs87Gp_XAlUNSqxRdv04cO62X2W3LQamj64dSRw2mEkG86v7cJaYZAI=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Selected menu items

![5 states of a selected baseline menu item.](https://lh3.googleusercontent.com/Eg2mSAl6lckNeGZn60i3N6b7ltjvGCbssGUhr-LWmLpa2HDbKhgxvA72PVKqTsT0ho7uQZWaK_buL-Y81PKV7_GpS90CXSbLfCU9JqkRq-Y=s0)

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

State specs are in the token module above

### Measurements

![Diagram of a baseline menu's padding, text alignment, height, and width.](https://lh3.googleusercontent.com/MRcY8zpznxkaZVmDq-MvnNSUQnLDJ3uftXolOX1MZ7ZczEmBCp4nro5uy3WDlxm8De9S3E9m7yoHTUtCD1IJmm-KOI975AQnrXOePAhR8TWM=s0)

Baseline menu padding and size measurements:

| Attribute | Value |
|-----------|-------|
| Container width | 112dp min, 280dp max |
| Corner radius | 4dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 12dp |
| Left/right padding with icon | 12dp |
| List item height | 48dp |
| Padding between elements within a list item | 12dp |
| Divider top/bottom padding | 8dp |
| Divider height | 1dp |
| Divider width | Dynamic |
| Leading/trailing icon size | 24dp |

### Configurations

A baseline menu appears when a person interacts with a button, action, or other control. A few examples: Button, Text field, Icon button, Selected text

![Examples of 4 baseline menu inputs.](https://lh3.googleusercontent.com/qaQR6Vom4qUYAtiLZOaGC34kpj4PCzx3--sowDis88NJ1VOQiwhipAIlwryE8_cYmOrso8ZXJ8O56o-PeU4ZC0SvopP5Ej5WB23rBIQmn9kL=s0)
