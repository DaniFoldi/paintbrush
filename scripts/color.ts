const resolve = (scheme: Record<string, string>, colorMap: Record<string, string>, color: string): string => {
  return scheme[colorMap[color]] ?? colorMap[color] ?? color
}

const hexToRgb = (color: string): number[] => {
  let result = color.replace('#', '')
  if (result.length === 3) {
    result = result.charAt(0).repeat(2) + result.charAt(1).repeat(2) + result.charAt(2).repeat(2)
  }

  return [ 0, 1, 2 ].map(i => Number.parseInt(result.slice(i * 2, i * 2 + 2), 16))
}

const kebabCaseName = (name: string): string => {
  return [ ...name ].map(c => c === c.toUpperCase() ? `-${c.toLowerCase()}` : c).join('')
}

const textColor = (backgroundColor: string, dark: string, light: string): string => {
  const [ r, g, b ] = hexToRgb(backgroundColor)

  return (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) >= 128000 ? dark : light
}

export { kebabCaseName, resolve, textColor }
