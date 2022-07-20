export default function(backgroundColor: string, darkColor: string, lightColor: string): string {
  let result = backgroundColor.replace('#', '')
  if (result.length === 3) {
    result = result.charAt(0).repeat(2) + result.charAt(1).repeat(2) + result.charAt(2).repeat(2)
  }

  const [ r, g, b ] = [ 0, 1, 2 ].map(i => Number.parseInt(result.slice(i * 2, i * 2 + 2), 16))

  return (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) >= 128000 ? darkColor : lightColor
}
