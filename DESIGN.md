---
name: "Cocktail Grimoire"
description: "A chromatic glass cabinet for browsing and reading a curated cocktail collection."
colors:
  mineral-ground: "#f2f0eb"
  raised-mineral: "#f7f6f2"
  cabinet-ink: "#171714"
  muted-graphite: "#615f58"
  mineral-rule: "#c9c5bb"
  soft-rule: "#dedbd3"
  negroni-vermilion: "#d94a2b"
  daiquiri-chartreuse: "#8aa83e"
  old-fashioned-umber: "#a75c2a"
  last-word-herbal: "#5c8b55"
  french-75-gold: "#d5a72b"
  paper-plane-coral: "#db713f"
  amalfarita-amber: "#c98f3d"
  tulum-sunset-red: "#C44A3D"
typography:
  collection-display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(3rem, 8vw, 6rem)"
    fontWeight: 460
    lineHeight: 0.88
    letterSpacing: "-0.035em"
  recipe-display:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(3.3rem, 7vw, 6rem)"
    fontWeight: 450
    lineHeight: 0.9
    letterSpacing: "-0.04em"
  bay-title:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 2.15rem)"
    fontWeight: 520
    lineHeight: 1
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope Variable, sans-serif"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Manrope Variable, sans-serif"
    fontSize: "0.68rem"
    fontWeight: 520
    lineHeight: 1.45
    letterSpacing: "0.08em"
  reading-quantity:
    fontFamily: "Source Serif 4 Variable, serif"
    fontSize: "1.1rem"
    fontWeight: 560
    lineHeight: 1.45
components:
  cabinet-bay:
    backgroundColor: "{colors.mineral-ground}"
    textColor: "{colors.cabinet-ink}"
    padding: "1rem"
  specimen-stage:
    textColor: "{colors.cabinet-ink}"
    padding: "clamp(1rem, 3vw, 3rem)"
  recipe-sheet:
    backgroundColor: "{colors.mineral-ground}"
    textColor: "{colors.cabinet-ink}"
    padding: "clamp(2rem, 6vw, 6rem)"
  ingredient-row:
    textColor: "{colors.cabinet-ink}"
    padding: "1rem 0"
---

# Design System: Cocktail Grimoire

## Overview

**Creative North Star: "The Chromatic Glass Cabinet"**

Cocktail Grimoire presents recipes as chromatic glass specimens, not conventional image cards. A pale mineral ground, black ink rules, numbered cabinet bays, and translucent cocktail-specific color make the collection feel like a modern archive assembled for looking, choosing, and keeping.

The system is restrained but not anonymous. Manrope supplies crisp editorial structure; Source Serif 4 appears only where measured quantities benefit from a reading voice. Each YAML accent is allowed to behave like light through glass while the neutral framework keeps every recipe part of one cabinet.

**Key Characteristics:**

- Pale mineral surfaces held together by one-pixel ink and stone rules.
- Large, two-layer SVG specimens colored at runtime from raw YAML accents.
- Dense numbered bays that reflow only as whole cabinet units.
- Flat depth, tabular registers, and tightly tracked editorial labels.
- A persistent specimen mark that carries identity from browse view to recipe detail.

## Colors

The neutral cabinet is permanent; recipe accents are variable illumination inside it.

### Primary

- **Cabinet Ink** (`#171714`): Primary text, cabinet boundaries, section rules, selection backgrounds, and all keyboard focus outlines.

### Secondary

- **Recipe Accents:** Negroni Vermilion (`#d94a2b`), Daiquiri Chartreuse (`#8aa83e`), Old Fashioned Umber (`#a75c2a`), Last Word Herbal (`#5c8b55`), French 75 Gold (`#d5a72b`), Paper Plane Coral (`#db713f`), Amalfarita Amber (`#c98f3d`), and Tulum Sunset Red (`#C44A3D`). Each value comes directly from recipe YAML and is passed unchanged to `--accent` and the SVG mark's `currentColor`.

### Neutral

- **Mineral Ground** (`#f2f0eb`): The continuous page background.
- **Raised Mineral** (`#f7f6f2`): The light base mixed into specimen-stage fields.
- **Muted Graphite** (`#615f58`): Secondary registers, flavor profiles, facts labels, and collection metadata.
- **Mineral Rule** (`#c9c5bb`): Secondary dividers and the neutral half of accent-mixed rules.
- **Soft Rule** (`#dedbd3`): The palest available rule token; reserve it for quiet separation.

### Named Rules

**The Raw Accent Rule.** Do not bake cocktail colors into SVG files or remap them to a generic palette. Supply the YAML value as `--accent`; marks inherit it through `currentColor`.

**The Legible Tint Rule.** Accent may remain raw for illustration and atmosphere. For small functional text, mix it 42% with Cabinet Ink; for rules, mix it with Mineral Rule. The accent never replaces the ink focus ring.

## Typography

**Display Font:** Manrope Variable (with `sans-serif` fallback)  
**Body Font:** Manrope Variable (with `sans-serif` fallback)  
**Reading Accent Font:** Source Serif 4 Variable (with `serif` fallback)

**Character:** Manrope makes the cabinet precise, contemporary, and quietly technical. Source Serif 4 is deliberately scarce: its measured texture distinguishes ingredient quantities without turning the interface into a nostalgic recipe book.

### Hierarchy

- **Collection Display** (460, `clamp(3rem, 8vw, 6rem)`, 0.88): The collection title; set to an eight-character line length with `-0.035em` tracking.
- **Recipe Display** (450, `clamp(3.3rem, 7vw, 6rem)`, 0.9): Cocktail names on detail pages; limited to `9ch` and tracked at `-0.04em`.
- **Bay Title** (520, `clamp(1.45rem, 2.2vw, 2.15rem)`, 1): Cocktail names inside cabinet bays.
- **Body / Ingredient** (400, `clamp(1.1rem, 1.6vw, 1.35rem)`, inherited 1.45): Recipe content and ingredient names.
- **Label / Register** (520 or 400, `0.68rem`–`0.75rem`, `0.045em`–`0.08em`): Uppercase metadata, navigation, facts labels, and specimen registration. Use tabular numerals for collection counts and recipe numbers.
- **Reading Quantity** (560, `1.1rem`, inherited 1.45): Source Serif 4 with tabular numerals and the accessible accent/ink mix.

### Named Rules

**The Two-Voice Rule.** Manrope owns display, navigation, labels, facts, and ingredient names. Source Serif 4 appears only on quantities; do not broaden it into a general decorative serif layer.

## Layout

The index begins with a narrow `4.5rem` masthead, then a fluid shell whose horizontal inset grows from `1rem` to `3rem` and whose vertical breathing room grows to `7rem`. A two-column heading pairs the compact title with an oversized pale collection count before the cabinet begins.

The cabinet is a continuous ruled grid, not a collection of detached cards. It uses four equal columns above `1100px`, three at `1100px`, two at `760px`, and one at `580px`. Every breakpoint moves complete bays; content within a bay never independently rearranges into a card variant. Bays remain tall (`clamp(29rem, 37vw, 36rem)` on wide screens) so the mark, not metadata, dominates.

Recipe details use a `1.08fr / 0.92fr` split between specimen stage and reading sheet. At `900px` the entire stage moves above the sheet; it does not squeeze beside it. The stage and recipe together occupy at least the viewport below the masthead. On small screens, the masthead contracts to `3.75rem`, the cabinet becomes one column, and the sheet uses `1rem` side padding.

Spacing is fluid at the page and section level through `clamp()`, while internal rows and bay padding stay on a disciplined `0.75rem`, `1rem`, `1.25rem`, and `1.5rem` rhythm. Keep borders aligned so adjacent bays share a single visual grid.

## Elevation & Depth

The system is flat: there are no shadows, gradients, floating panels, or simulated card elevation. Depth comes from tonal color mixing, translucent SVG fills, overlapping one-pixel registration lines, and the physical scale of the specimen. Hover introduces a 9% accent wash that rises through the bay, but the bay itself remains in the cabinet plane.

### Named Rules

**The Flat Cabinet Rule.** Use rules, translucent color, scale, and motion to establish layers. Do not add box shadows to bays, stages, navigation, or recipe sheets.

## Shapes

Interface geometry is square and ruled: cabinet bays, sheets, stage frames, and ingredient rows use zero corner radius and one-pixel borders. The only softened geometry belongs inside the specimen drawings, where glass rims, stems, citrus, ice, and garnishes use authored curves and occasional `3px`–`5px` SVG radii. Never round the containing bay to imitate a conventional card.

The eight marks share a `240 × 240` viewBox, transparent canvas, current-color strokes, and low-opacity current-color fills. Each rendered mark layers a cocktail-specific drink illustration over reusable glassware geometry, keeping the vessel accurate to recipe data while preserving a consistent optical footprint.

## Components

### Masthead Navigation

- **Style:** A full-width flex row with a bottom Mineral Rule, fluid horizontal padding, uppercase `0.75rem` metadata, and tabular counts.
- **Brand:** Weight 720 with no underline; it returns to the collection from detail routes.
- **Focus:** Every link receives a `3px` Cabinet Ink outline offset inward by `-3px`.
- **Mobile:** Height contracts as a whole from `4.5rem` to `3.75rem` at `580px`.

### Cabinet Bay

- **Structure:** A full-cell link laid out as register, flexible mark stage, and caption. The link owns the complete hit target and keeps a minimum specimen height.
- **Border:** The cabinet owns top and left rules; every bay adds bottom and right Cabinet Ink rules so the grid remains continuous.
- **Hover / Focus:** A raw-accent layer rises from below over 700ms with the expressive easing `cubic-bezier(0.16, 1, 0.3, 1)` and settles at 9% opacity. Simultaneously, the mark rises `0.5rem` and scales to `1.035`.
- **Caption:** An accent/Mineral Rule mix forms the top divider; profile terms wrap beneath the title as small uppercase labels.

### Cocktail Mark

- **Role:** The signature specimen component, reused unchanged between collection and recipe routes.
- **Composition:** Layer a cocktail-specific drink illustration and the reusable SVG selected by the recipe's glassware field in the same `240 × 240` grid cell.
- **Color:** The component writes the unaltered YAML accent to `--accent`; the inline raw SVG inherits it through `currentColor` for strokes and translucent fills.
- **Accessibility:** The wrapper exposes a descriptive image label. The embedded decorative SVG is hidden from assistive technology and cannot receive focus.
- **Transition:** When enabled, each slug receives a stable `view-transition-name` so the same specimen can persist between routes.

### Specimen Stage

- **Background:** An 8% raw-accent mix over Raised Mineral.
- **Registration:** An inset frame uses a 52% accent/rule mix; a horizontal raw-accent axis crosses the stage at 34% opacity; four one-pixel scale ticks increase from `0.8rem` to `3rem`.
- **Layout:** The mark is centered at up to `34rem` wide. Family and glassware sit as opposing uppercase registers above it.
- **Responsive Behavior:** At `900px`, the complete stage moves above the recipe sheet, trades its right border for a bottom border, and caps its height; it is never reduced to a thumbnail.

### Recipe Sheet

- **Structure:** A centered reading column capped at `50rem`, expanding to `62rem` after the stage stacks.
- **Facts:** A two-column definition grid with a Cabinet Ink top edge and Mineral Rule internal dividers.
- **Ingredients:** Baseline-aligned name/quantity rows with `1rem` vertical padding and horizontal rules. Quantities use Source Serif 4 and `color-mix(in srgb, var(--accent) 42%, var(--ink))` for contrast.
- **Navigation:** The persistent “Cocktail Grimoire” masthead brand returns to the collection. The recipe title leads the reading sheet; there are no duplicate in-sheet return links or ornamental buttons.

### Motion & Focus

- **Navigation Transition:** Same-specimen view transitions run for 650ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Reduced Motion:** Disable automatic view transitions and reduce CSS transition durations to `0.01ms`; restore non-smooth scrolling.
- **Keyboard State:** Focus uses the same accent wash and mark movement as hover, plus the persistent `3px` Cabinet Ink outline. Accent alone never communicates focus.

## Do's and Don'ts

### Do:

- **Do** treat every recipe as a numbered glass specimen inside one continuous cabinet.
- **Do** preserve raw YAML accents for SVG marks and low-opacity atmosphere.
- **Do** mix accent with Cabinet Ink for small quantity text and retain ink-only focus outlines.
- **Do** reflow the cabinet at `1100px`, `760px`, and `580px` by moving whole bays.
- **Do** keep the detail stage intact when it stacks above the recipe sheet at `900px`.
- **Do** provide the reduced-motion fallback whenever adding or changing transitions.

### Don't:

- **Don't** turn bays into conventional image cards with gaps, rounded corners, badges, or shadows.
- **Don't** hard-code accent fills or strokes inside cocktail SVGs; use `currentColor` from the component's dynamic `--accent`.
- **Don't** use raw cocktail accent for small functional text when the established accent/ink mix is available.
- **Don't** replace the cabinet's precise rules with floating surfaces or ornamental depth.
- **Don't** introduce extra typefaces or spread Source Serif 4 beyond ingredient quantities.
- **Don't** break the specimen, register, and caption into separate responsive units.
