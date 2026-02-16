export type Unit = "mm" | "cm";

const PI = Math.PI;
const SQRT3 = Math.sqrt(3);

export function formatNumber(value: number | null, digits = 2): string {
  if (value == null || Number.isNaN(value) || !Number.isFinite(value)) return "-";
  return value.toFixed(digits);
}

export function shapeAreaFromRectangle(
  width: number,
  height: number,
  unit: Unit
): number | null {
  const factor = unit === "cm" ? 10 : 1;
  const w = width * factor;
  const h = height * factor;
  if (w <= 0 || h <= 0) return null;
  return w * h;
}

export function shapeAreaFromHexagon({
  side,
  flatToFlat,
  unit,
}: {
  side: number;
  flatToFlat: number;
  unit: Unit;
}): number | null {
  const factor = unit === "cm" ? 10 : 1;
  let aMm: number | null = null;
  if (side > 0) {
    aMm = side * factor;
  } else if (flatToFlat > 0) {
    aMm = (flatToFlat * factor) / SQRT3;
  }
  if (!aMm || aMm <= 0) return null;
  return (3 * SQRT3 * aMm * aMm) / 2;
}

export function equivalentCircleDiameter(areaMm2: number | null): number | null {
  if (!areaMm2 || areaMm2 <= 0) return null;
  return Math.sqrt(areaMm2 / PI) * 2;
}
