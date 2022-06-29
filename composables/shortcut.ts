import { isApple } from '../scripts/is-apple'


type KeyOptions = { alt?: boolean; ctrl?: boolean; key: string; meta?: boolean; mod?: boolean; shift?: boolean }
type Shortcut = { combo: KeyOptions; exact?: boolean; handler: () => void }
type DefineShortcutOptions = Shortcut & { replace?: boolean }

const shortcuts = () => useState<Shortcut[]>('pb-shortcut', () => [])

function testEquality(a: KeyOptions, b: KeyOptions, exact: boolean) {
  if (a.key !== b.key) return false
  if ((a.alt && !b.alt)
    || (a.ctrl && !b.ctrl)
    || (a.meta && !b.meta)
    || (a.shift && !b.shift)) return false
  return (Boolean(a.alt) === Boolean(b.alt)
    && Boolean(a.ctrl) === Boolean(b.ctrl)
    && Boolean(a.meta) === Boolean(b.meta)
    && Boolean(a.shift) === Boolean(b.shift))
    || !exact
}

export function defineShortcut(options: DefineShortcutOptions) {
  const ctrl = Boolean(options.combo.mod && !isApple() || options.combo.ctrl)
  const meta = Boolean(options.combo.mod && isApple() || options.combo.meta)
  const combo: KeyOptions = {
    ...options.combo,
    ctrl: ctrl,
    meta: meta,
    mod: undefined
  }
  const existing = shortcuts().value.find(each => testEquality(each.combo, combo, Boolean(options.exact)))
  if (existing && !options.replace) {
    throw new Error('A shortcut is already registered to this combo')
  }

  const exact = options.exact !== undefined
    ? options.exact
    : true

  shortcuts().value.push({ combo: combo, exact: exact, handler: options.handler })
}

export function handleShortcut(event: KeyboardEvent) {
  const combo: KeyOptions = {
    alt: event.altKey,
    ctrl: event.ctrlKey,
    key: event.key,
    meta: event.metaKey,
    shift: event.shiftKey
  }

  const existing = shortcuts().value.find(each => testEquality(each.combo, combo, Boolean(each.exact)))
  if (existing) {
    event.preventDefault()
    existing.handler()
  }
}