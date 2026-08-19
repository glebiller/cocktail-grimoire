export const FAMILIES = [
  'Ancestral',
  'Aperitivo',
  'Equal Parts',
  'Margarita',
  'Modern Classic',
  'Sour',
  'Sparkling',
] as const;

export const TECHNIQUES = ['Shaken', 'Shaken & topped', 'Stirred'] as const;

export const PROFILES = [
  'aromatic',
  'bitter',
  'bittersweet',
  'bright',
  'citrus',
  'complex',
  'creamy',
  'crisp',
  'dry',
  'fruity',
  'herbal',
  'modern',
  'rich',
  'sparkling',
  'spicy',
  'spirit-forward',
  'tart',
  'tropical',
] as const;

export const BASE_SPIRITS = ['Bourbon', 'Gin', 'Rum', 'Tequila', 'White rum'] as const;

export const ICE_STYLES = ['none', 'cubes', 'large-cube', 'crushed'] as const;
export const GARNISH_STYLES = [
  'none',
  'cherry',
  'citrus-wheel',
  'citrus-twist',
] as const;
export const VISUAL_EFFECTS = ['creamy', 'smoky', 'sparkling', 'spicy'] as const;
export const SIGNATURES = ['last-word', 'london-smash', 'paper-plane', 'tulum-sunset'] as const;

export type Profile = (typeof PROFILES)[number];
export type IceStyle = (typeof ICE_STYLES)[number];
export type GarnishStyle = (typeof GARNISH_STYLES)[number];
export type VisualEffect = (typeof VISUAL_EFFECTS)[number];
export type Signature = (typeof SIGNATURES)[number];

const PROFILE_EFFECTS: Partial<Record<Profile, VisualEffect>> = {
  creamy: 'creamy',
  sparkling: 'sparkling',
  spicy: 'spicy',
};

export function resolveVisualEffects(
  profiles: readonly Profile[],
  overrides: readonly VisualEffect[] = [],
) {
  return [...new Set([
    ...profiles.flatMap((profile) => PROFILE_EFFECTS[profile] ?? []),
    ...overrides,
  ])];
}
