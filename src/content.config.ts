import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { GLASSWARE } from './lib/glassware';
import {
  BASE_SPIRITS,
  FAMILIES,
  GARNISH_STYLES,
  ICE_STYLES,
  PROFILES,
  SIGNATURES,
  TECHNIQUES,
  VISUAL_EFFECTS,
} from './lib/cocktails';

const COCKTAIL_NAMES = [
  'Amalfarita',
  'Daiquiri',
  'French 75',
  'Honolulu High Tide',
  'Last Word',
  'London Smash',
  'Negroni',
  'Old Fashioned',
  'Oaxaca Glow',
  'Paper Plane',
  'Tulum Sunset',
] as const;

const quantity = z.discriminatedUnion('type', [
  z.object({ type: z.literal('measure'), amount: z.number(), unit: z.string() }),
  z.object({ type: z.enum(['dash', 'drop', 'piece', 'count']), amount: z.number() }),
  z.object({ type: z.enum(['top', 'rinse', 'spray', 'to-taste']) }),
  z.object({ type: z.literal('garnish') }),
]);

const ingredient = z.object({
  ingredient: z.string(),
  quantity,
});

const ingredients = z.array(ingredient).superRefine((items, ctx) => {
  if (!items.some((item) => item.quantity.type !== 'garnish')) {
    ctx.addIssue({
      code: 'custom',
      message: 'A cocktail must have at least one measured ingredient',
    });
  }
});

const cocktails = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/cocktails' }),
  schema: z.object({
    name: z.enum(COCKTAIL_NAMES),
    recipeNumber: z.number().int().positive(),
    profile: z.array(z.enum(PROFILES)).min(2).max(4),
    family: z.enum(FAMILIES),
    baseSpirit: z.enum(BASE_SPIRITS),
    technique: z.enum(TECHNIQUES),
    glassware: z.enum(GLASSWARE),
    visual: z.object({
      accent: z.string().regex(/^#[0-9a-fA-F]{6}$/),
      ice: z.enum(ICE_STYLES),
      garnish: z.enum(GARNISH_STYLES),
      effects: z.array(z.enum(VISUAL_EFFECTS)).default([]),
      signature: z.enum(SIGNATURES).optional(),
    }),
    ingredients,
  }),
});

export const collections = { cocktails };
