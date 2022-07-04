export default function(mode: string): string {
  switch (mode) {
    case 'h1': return '36px'
    case 'h2': return '32px'
    case 'h3': return '28px'
    case 'h4': return '24px'
    case 'h5': return '18px'
    case 'h6': return '16px'
    case 'p': return '16px'
    case 'span': return '16px'
    default: return '16px'
  }
}
