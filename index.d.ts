declare module '#app' {
  interface RouteMeta {
    paintbrush: PaintbrushPage
  }
}

interface PaintbrushPage {
  fontSizes: [string, string, string, string, string, string, string]
  fontWeights: [string, string, string, string, string, string, string]
  link: {
    underline: boolean | 'hover'
    weight: string
  }
}

export {}
