function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function parseFractionOrNumber(val: string | number): [number, number] {
  if (typeof val === "number") return [val, 1];

  if (typeof val === "string") {
    if (val.includes("/")) {
      const [num, denom] = val.split("/").map(Number);
      return [num, denom];
    }

    const parsed = parseFloat(val);
    if (!isNaN(parsed)) return [parsed, 1];
  }

  throw new Error(`Vigane sisend: ${JSON.stringify(val)}`);
}

export function add(a: string | number, b: string | number): string | number {
  const [aNum, aDen] = parseFractionOrNumber(a);
  const [bNum, bDen] = parseFractionOrNumber(b);

  const commonDen = aDen * bDen;
  const newNumerator = aNum * bDen + bNum * aDen;

  const divisor = gcd(newNumerator, commonDen);
  const simplifiedNum = newNumerator / divisor;
  const simplifiedDen = commonDen / divisor;

  // Kui nimetaja on 1, tagasta number
  if (simplifiedDen === 1) return simplifiedNum;

  return `${simplifiedNum}/${simplifiedDen}`;
}


export function subtract(a: number, b: number): number {
  return a - b;
}

