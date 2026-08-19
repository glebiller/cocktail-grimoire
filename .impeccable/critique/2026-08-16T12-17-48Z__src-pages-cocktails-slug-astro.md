---
target: All recipes navigation on cocktail recipe page
total_score: 25
max_score: 36
na_heuristics: 9
p0_count: 0
p1_count: 2
timestamp: 2026-08-16T12-17-48Z
slug: src-pages-cocktails-slug-astro
---
## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2 | The number lacks a clear role or location cue. |
| 2 | Match System / Real World | 4 | Recipe vocabulary and ordered facts are natural. |
| 3 | User Control and Freedom | 3 | Both return links work, but their duplication confuses. |
| 4 | Consistency and Standards | 2 | Two visually different controls have the same destination. |
| 5 | Error Prevention | 3 | Read-only surface exposes little error risk. |
| 6 | Recognition Rather Than Recall | 3 | Return context is needlessly repeated. |
| 7 | Flexibility and Efficiency | 3 | Return is quick, but duplicate chrome adds no value. |
| 8 | Aesthetic and Minimalist Design | 2 | Redundant navigation and the pre-title void weaken restraint. |
| 9 | Error Recovery | n/a | Static read surface has no recoverable error state. |
| 10 | Help and Documentation | 3 | This narrowly scoped recipe needs no help. |
| **Total** | | **25/36** | Acceptable; hierarchy is the constraint. |

## Design Specificity Verdict

The detail view is specific to Cocktail Grimoire: the specimen stage, glassware register, recipe number, and accent-driven mark form a coherent editorial object. The issue is hierarchy, not generic styling. The masthead brand and recipe-sheet “All recipes” link both point to `/`; the latter also creates a `clamp(3rem, 7vw, 6rem)` void before the title.

The detector found 0 issues in `src/pages/cocktails/[slug].astro`; no findings were suppressed, and there were no false positives. Browser visualization was unavailable because this environment exposes no mutable browser tab or injection API.

## Overall Impression

Keep the persistent `Cocktail Grimoire` masthead link and remove `All recipes`. The cocktail name should be the first element of the reading sheet. This preserves a clear route back while restoring the intended editorial entry point.

## What's Working

- The stage/sheet split cleanly separates the cocktail artifact from the recipe reading task.
- Facts and ingredients are structured for quick mixing-time scanning.
- Accent color remains a restrained identity cue rather than functional noise.

## Priority Issues

- **[P1] Duplicated index navigation.** The brand and “All recipes” have identical destinations. This creates an unnecessary choice and redundant keyboard tab stop. **Fix:** remove “All recipes”; retain the linked masthead brand.
- **[P1] Title is pushed too low.** The secondary link’s 3–6rem lower margin, within a vertically centered sheet, delays the page’s key content. **Fix:** start the sheet with the title; if a local back link must remain, cap its lower margin at 1.5–2rem.
- **[P2] Ambiguous recipe number.** `01` is visually distinctive but has no role label. **Fix:** retain it only as a consistent specimen register, or move it into title metadata.

## Persona Red Flags

- **Jordan, first-timer:** cannot infer why “Cocktail Grimoire” and “All recipes” are different controls when both go home.
- **Alex, repeat visitor:** gains no value from the extra chrome and sees the title later than necessary.
- **Sam, keyboard/screen-reader user:** encounters two separate, valid links to the same location before the recipe content.

## Minor Observations

- On mobile, the specimen stage already comes first; the additional back-link gap compounds the delay before title and ingredients.

## Questions to Consider

- Should the recipe number remain an abstract cabinet register, or be explicitly identified as “Recipe 01”?
