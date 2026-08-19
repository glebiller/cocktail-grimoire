const commonFractions = [
  { value: 1 / 8, label: '1/8' },
  { value: 1 / 6, label: '1/6' },
  { value: 1 / 4, label: '1/4' },
  { value: 1 / 3, label: '1/3' },
  { value: 3 / 8, label: '3/8' },
  { value: 1 / 2, label: '1/2' },
  { value: 5 / 8, label: '5/8' },
  { value: 2 / 3, label: '2/3' },
  { value: 3 / 4, label: '3/4' },
  { value: 7 / 8, label: '7/8' },
];

export function formatAmount(amount: number) {
  const whole = Math.floor(amount);
  const remainder = amount - whole;
  const fraction = commonFractions.find(({ value }) => Math.abs(value - remainder) < 0.01);

  if (!fraction) return String(amount);
  if (whole === 0) return fraction.label;

  return `${whole} ${fraction.label}`;
}
