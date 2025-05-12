function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

function parseFractionOrNumber(val: string | number): [number, number] {
  if (typeof val === "number") return [val, 1];

  if (typeof val === "string") {
    if (val.includes("/")) {
      const parts = val.split("/").map(Number);
      const num = parts[0] || 0;
      const denom = parts[1] || 1;
      return [num, denom];
    }

    const parsed = parseFloat(val);
    if (!isNaN(parsed)) return [parsed, 1];
  }

  throw new Error(`Vigane sisend: ${JSON.stringify(val)}`);
}

export function add(a: string | number, b: string | number): string | number {
  if (typeof a === 'object' || typeof b === 'object') {
    throw new Error("Vigane sisend");
  }

  const [aNum, aDen] = parseFractionOrNumber(a);
  const [bNum, bDen] = parseFractionOrNumber(b);

  const commonDen = aDen * bDen;
  const newNumerator = aNum * bDen + bNum * aDen;

  const divisor = gcd(Math.abs(newNumerator), commonDen);
  const simplifiedNum = newNumerator / divisor;
  const simplifiedDen = commonDen / divisor;

  // Kui nimetaja on 1, tagasta number
  if (simplifiedDen === 1) return simplifiedNum;

  return `${simplifiedNum}/${simplifiedDen}`;
}


export function subtract(a: string | number, b: string | number): string | number {
  if (typeof a === 'object' || typeof b === 'object') {
    throw new Error("Vigane sisend");
  }

  const [aNum, aDen] = parseFractionOrNumber(a);
  const [bNum, bDen] = parseFractionOrNumber(b);

  const commonDen = aDen * bDen;
  const newNumerator = aNum * bDen - bNum * aDen;

  const divisor = gcd(Math.abs(newNumerator), commonDen);
  const simplifiedNum = newNumerator / divisor;
  const simplifiedDen = commonDen / divisor;

  // Kui nimetaja on 1, tagasta number
  if (simplifiedDen === 1) return simplifiedNum;

  return `${simplifiedNum}/${simplifiedDen}`;
}

