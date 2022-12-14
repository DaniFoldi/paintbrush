export type Font = 'gantari' | 'manrope' | 'phosphor-icons' | 'playfair-display' | 'source-code-pro'

export const fontMap: Record<Font | 'inherit', string> = {
  gantari: 'GantariVariable',
  inherit: 'inherit',
  manrope: 'ManropeVariable',
  'phosphor-icons': 'phosphor-icons',
  'playfair-display': 'Playfair DisplayVariable',
  'source-code-pro': 'Source Code ProVariable'
}

export interface PaintbrushPage {
  container: {
    articleWidth: string
  }
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
    color: string
    underline: boolean | 'hover'
    fontWeight: number
  }
  menubar: {
    height: string
  }
  monospace: {
    fontFamily: Font
  }
}

export const defaultPaintbrushPage: PaintbrushPage = {
  container: {
    articleWidth: 'minmax(min-content, 850px)'
  },
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
    color: 'backgroundText',
    underline: false,
    fontWeight: 500
  },
  menubar: {
    height: '54px'
  },
  monospace: {
    fontFamily: 'source-code-pro'
  }
}
