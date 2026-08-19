# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- Astro with TypeScript, built with Bun and Vite.
- Vanilla CSS.
- One YAML file per cocktail, validated with Astro and Zod.
- A generated recipe index.
- Lean, static output.

## Users

The primary user is the collection's owner. They use Cocktail Grimoire to browse a personal, curated cocktail collection, quickly find a recipe, follow it while making a drink, and print favorite recipes as individual pages for a physical recipe book.

## Product Purpose

Cocktail Grimoire is a personal digital cocktail book. It makes a curated collection quick to browse, practical to use while mixing, and suitable for preserving as a printed recipe collection.

Success means the user can move quickly from browsing to a specific recipe, comfortably follow that recipe while making the drink, and produce a polished individual printout for a physical book.

## Positioning

Cocktail Grimoire behaves and feels like a modern cocktail book rather than a typical recipe app. Its distinguishing mechanism is a curated, file-based collection in which every cocktail has its own stylized SVG illustration or logo and cocktail-specific accent color within one consistent neutral system.

## Operating Context

- Browsing a personal collection to decide what to make.
- Consulting a recipe at the point of making a drink.
- Printing one recipe at a time for inclusion in a physical recipe book.
- Maintaining recipes as individual YAML files and generating the collection index from them.

## Capabilities and Constraints

- Each recipe includes a fixed cocktail name, flavor profile, ingredients with quantities and optional garnish items, glassware, family, technique, base spirit, recipe number, and accent color. A recipe may have zero or more garnishes.
- Each recipe has an accent color specified.
- Each cocktail is stored in its own YAML file in src/content/cocktails/.
- Recipe data is validated with Zod through Astro.
- The recipe schema permits zero or more garnishes.
- The recipe index is generated rather than maintained by hand.
- The site must build to lean static output.
- Individual recipes must have a dedicated print presentation suitable for a physical recipe book.

## Brand Commitments

- Product name: Cocktail Grimoire.
- The experience should resemble a modern cocktail book, not a conventional recipe app.
- Preserve a minimalist editorial approach with strong typography and generous whitespace.
- Use one consistent neutral visual system across the collection.
- Give each cocktail a distinct accent color (stored in the recipe yaml).
- Give each cocktail a unique stylized SVG illustration.

## Evidence on Hand

- Six recipe YAML files are present in `src/content/cocktails/`: Daiquiri, French 75, Last Word, Negroni, Old Fashioned, and Paper Plane.
- No cocktail illustrations or logos are currently present. Creating a distinct SVG illustration for each existing recipe is part of the first implementation.
- No testimonials, claims, or other proof assets are present; future work must not fabricate them.

## Product Principles

1. Make the path from browsing to mixing immediate.
2. Treat every recipe as an editorial artifact worth keeping, not merely a data record.
3. Keep ingredient-led recipe content structured, validated, and easy to extend one cocktail at a time.
4. Let cocktail-specific identity vary inside a disciplined, consistent system.
5. Treat screen use and individual-page printing as equally intentional reading contexts.
