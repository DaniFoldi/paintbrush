export type Font = 'gantari' | 'inter' | 'manrope' | 'phosphor-icons' | 'playfair-display' | 'raleway' | 'source-code-pro'

export const fontMap: Record<Font, string> = {
  gantari: 'GantariVariable',
  inter: 'InterVariable',
  manrope: 'ManropeVariable',
  'phosphor-icons': 'phosphor-icons',
  'playfair-display': 'Playfair DisplayVariable',
  raleway: 'RalewayVariable',
  'source-code-pro': 'Source Code ProVariable'
}

export interface PaintbrushPage {
  content: {
    fontFamily: Font
    fontSize: string
    fontWeight: number
  }
  header: {
    align: [string, string, string, string, string, string]
    fontFamily: Font
    fontSize: [string, string, string, string, string, string]
    fontWeight: [number, number, number, number, number, number]
  }
  link: {
    underline: boolean | 'hover'
    fontWeight: number
  }
  monospace: {
    fontFamily: Font
  }
}

export const defaultPaintbrushPage: PaintbrushPage = {
  content: {
    fontFamily: 'manrope',
    fontSize: '16px',
    fontWeight: 400
  },
  header: {
    align: [ 'left', 'left', 'left', 'left', 'left', 'left' ],
    fontFamily: 'gantari',
    fontSize: [ '36px', '32px', '28px', '24px', '18px', '16px' ],
    fontWeight: [ 700, 700, 700, 600, 600, 600 ]
  },
  link: {
    underline: false,
    fontWeight: 500
  },
  monospace: {
    fontFamily: 'source-code-pro'
  }
}
