import { defu } from 'defu'
import { inject } from '#imports'
import { defaultPaintbrushPage } from '../types/page'


export default function(defaultPage?: PaintbrushPage): PaintbrushPage {
  return defaultPage
    ? defu(useRoute().meta.paintbrush, defaultPage, defaultPaintbrushPage)
    : defu(useRoute().meta.paintbrush, inject('pb-page'), defaultPaintbrushPage)
}
