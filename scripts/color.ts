const resolve = (scheme: Record<string, string>, color: string, primary?: string, secondary?: string): string => {
  switch (color) {
    case 'primary':
      color = primary ? primary : scheme.primary
      break
    case 'secondary':
      color = secondary ? secondary : scheme.secondary
      break
  }

  return Object.keys(scheme).indexOf(color) !== -1 ? scheme[color] : color
}

const hexToRgb = (color: string): number[] => {
  let result = color.replace('#', '')
  if (result.length === 3) {
    result = result.charAt(0).repeat(2) + result.charAt(1).repeat(2) + result.charAt(2).repeat(2)
  }

  return [ 0, 1, 2 ].map(i => parseInt(result.substring(i * 2, i * 2 + 2), 16))
}

const textColor = (backgroundColor: string, dark: string, light: string): string => {
  const [ r, g, b ] = hexToRgb(backgroundColor)

  return (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) >= 128000 ? dark : light
}

export { resolve, textColor }
