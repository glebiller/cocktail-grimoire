const commonFractions = [
  { value: 1 / 8, label: '⅛' },
  { value: 1 / 6, label: '⅙' },
  { value: 1 / 4, label: '¼' },
  { value: 1 / 3, label: '⅓' },
  { value: 3 / 8, label: '⅜' },
  { value: 1 / 2, label: '½' },
  { value: 5 / 8, label: '⅝' },
  { value: 2 / 3, label: '⅔' },
  { value: 3 / 4, label: '¾' },
  { value: 7 / 8, label: '⅞' },
];

export function formatAmount(amount: number) {
  const whole = Math.floor(amount);
  const remainder = amount - whole;
  const fraction = commonFractions.find(({ value }) => Math.abs(value - remainder) < 0.01);

  if (!fraction) return String(amount);
  if (whole === 0) return fraction.label;

  return `${whole}${fraction.label}`;
}
