export const GLASSWARE = [
  'Lowball',
  'Highball',
  'Nick & Nora',
  'Coupe',
  'Flute',
  'Wine',
  'Mule Mug',
  'Julep Cup',
  'Martini',
  'Margarita',
  'Hurricane',
  'Mug',
] as const;

export type Glassware = (typeof GLASSWARE)[number];
