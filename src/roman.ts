export default function roman(arabic: number): string {
  // Safeguards
  if (arabic < 1) throw Error("Roman numerals can't be zero or negative");
  if (arabic > 3999) throw Error("Roman numerals can't be higher than 3999");

  // Properties
  const result: string[] = [];
  const reversedArabic: number[] = Array.from(String(arabic), Number).reverse();
  const romanMatrix: Array<string[]> = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
    ["M", ".", "."],
  ];

  reversedArabic.forEach((digit, index) => {
    const [a, b, c] = romanMatrix[index];

    if (digit === 1) result.unshift(a);
    if (digit === 2) result.unshift(a + a);
    if (digit === 3) result.unshift(a + a + a);
    if (digit === 4) result.unshift(a + b);
    if (digit === 5) result.unshift(b);
    if (digit === 6) result.unshift(b + a);
    if (digit === 7) result.unshift(b + a + a);
    if (digit === 8) result.unshift(b + a + a + a);
    if (digit === 9) result.unshift(a + c);
  });

  return result.join("");
}
