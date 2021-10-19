const scheme = {
  red: '#ff3333',
  orange: '#ff6d1f',
  green: '#11e454',
  teal: '#22e0ff',
  blue: '#3e56f4',
  purple: '#7e09ec',
  pink: '#ec368d',
  black: '#111111',
  gray: '#aaaaaa',
  silver: '#dddddd',
  white: '#ffffff'
}

const hues = ['red', 'orange', 'green', 'teal', 'blue', 'purple', 'pink']
const grayscale = ['black', 'gray', 'silver', 'white']

const resolve = (color, primary, secondary) => {
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

module.exports = { resolve, scheme, hues, grayscale }
