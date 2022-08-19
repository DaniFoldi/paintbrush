import { defu } from 'defu'
import { inject, useRoute } from '#imports'
import { defaultPaintbrushPage, PaintbrushPage } from '../types/page'


export default function(defaultPage?: Partial<PaintbrushPage>): PaintbrushPage {
  return defaultPage
    ? defu(useRoute().meta.paintbrush as PaintbrushPage, defaultPage, defaultPaintbrushPage)
    : defu(useRoute().meta.paintbrush as PaintbrushPage, inject<PaintbrushPage>('pb-page'), defaultPaintbrushPage)
}
