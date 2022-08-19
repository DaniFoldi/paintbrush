export default function<T>(mode: string, header: [T, T, T, T, T, T] | T, p: T): T {
  if (mode === 'span') {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return 'inherit'
  }

  if (Array.isArray(header)) {
    switch (mode) {
      case 'h1': return header[0]
      case 'h2': return header[1]
      case 'h3': return header[2]
      case 'h4': return header[3]
      case 'h5': return header[4]
      case 'h6': return header[5]
      case 'p': return p
      default: return p
    }
  }

  if (mode.startsWith('h')) {
    return header
  }
  return p
}
