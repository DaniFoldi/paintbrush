export default function<T>(mode: string, header: [T, T, T, T, T, T] | T, p: T): T | string {
  if (mode.startsWith('h') && !Array.isArray(header)) {
    return header
  }

  switch (mode) {
    case 'h1': return header[0]
    case 'h2': return header[1]
    case 'h3': return header[2]
    case 'h4': return header[3]
    case 'h5': return header[4]
    case 'h6': return header[5]
    case 'p': return p
    case 'span': return 'inherit'
    default: return p
  }
}
