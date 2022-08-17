export default function(scheme: Record<string, string>, colorMap: Record<string, string>, color: string): string {
  return scheme[colorMap[color]] ?? colorMap[color] ?? scheme[color] ?? color
}
