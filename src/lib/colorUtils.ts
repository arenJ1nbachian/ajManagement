type PositionColor = { bg: string; text: string };

const palette: PositionColor[] = [
  { bg: "#164E63", text: "#67E8F9" }, // cyan
  { bg: "#5F1D2D", text: "#FDA4AF" }, // red
  { bg: "#4C1D5F", text: "#E9A8FF" }, // purple
  { bg: "#1E3A5F", text: "#93C5FD" }, // blue
  { bg: "#14532D", text: "#86EFAC" }, // green
  { bg: "#5A4A13", text: "#FDE68A" }, // yellow
  { bg: "#713F12", text: "#FDBA74" }, // orange
  { bg: "#134E4A", text: "#5EEAD4" }, // teal
];

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = hash * 13 + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getPositionColor(positionName: string): PositionColor {
  return palette[hashString(positionName) % palette.length];
}

export function buildColorMap(
  positions: { id: string; name: string }[],
): Record<string, PositionColor> {
  return Object.fromEntries(
    positions.map((p) => [p.id, getPositionColor(p.name)]),
  );
}
