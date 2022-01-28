const scheme: Record<string, string> = {
  red: '#ff3333',
  orange: '#ff6d1f',
  green: '#11e454',
  teal: '#22e0ff',
  blue: '#3e56f4',
  purple: '#7e09ec',
  pink: '#ec368d',
  black: '#111111',
  darkgray: '#555555',
  gray: '#aaaaaa',
  silver: '#dddddd',
  white: '#ffffff'
}
const hues = ['red', 'orange', 'green', 'teal', 'blue', 'purple', 'pink']
const grayscale = ['black', 'darkgray', 'gray', 'silver', 'white']

const resolve = (color: string, primary: string, secondary: string): string => {
  if (color === 'primary') {
    color = primary
  } else if (color === 'secondary') {
    color = secondary
  }

  if (Object.keys(scheme).indexOf(color) !== -1) {
    return scheme[color]
  }
  return color
}

const hexToRgb = (color: string): number[] => {
  let result = color.replace('#', '')
  if (result.length === 3) {
    result = result.charAt(0).repeat(2) + result.charAt(1).repeat(2) + result.charAt(3).repeat(2)
  } else if (result.length !== 6) {
    console.log(`Invalid hex color: ${color}`)
  }

  const rgb = []
  for (let i = 0; i <= 2; i++) {
    rgb[i] = parseInt(result.substr(i * 2, 2), 16)
  }

  return rgb
}

const textColor = (backgroundColor: string): string => {
  const rgb = hexToRgb(backgroundColor)
  const [r, g, b] = rgb

  const contrast = (Math.round(r * 299) + Math.round(g * 587) + Math.round(b * 114)) / 1000
  return contrast >= 128 ? scheme.black : scheme.white
}

export { resolve, textColor, scheme, hues, grayscale }