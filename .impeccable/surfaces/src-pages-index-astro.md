---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/cocktails/[slug].astro"]
---

# Collection index and recipe details

- Scope: the collection index and `/cocktails/[slug]` detail routes. Visitor mode is Experience on the index and Read on the detail route.
- Audience and job: the collection owner browses six recipes today and twenty to thirty or more later, chooses one quickly, then reads its structured recipe while mixing.
- Content boundary: render only recipe YAML fields. No search, filtering, print layout, instructions, descriptions, or factual copy outside the supplied data. The only authored assets are six SVG cocktail marks.
- Direction: The Chromatic Glass Cabinet. Each recipe is a numbered glass specimen; its glassware determines the silhouette and its YAML accent behaves like light through the drink. The mark persists from cabinet bay to detail route.
- Constraints: static Astro output, dedicated URLs, full-cell links, keyboard-visible focus, reduced-motion fallback, scalable whole-bay responsive reflow, and SVG color supplied dynamically rather than baked into the asset.
