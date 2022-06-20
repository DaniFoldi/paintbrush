const SHORTCUT_KEY = '__SHORTCUT__'

type KeyOptions = { alt?: boolean; ctrl?: boolean; key: string; shift?: boolean }
type Shortcut = { combo: KeyOptions; handler: () => void }
type DefineShortcutOptions = Shortcut & { replace?: boolean }

const shortcuts = () => useState<Shortcut[]>(SHORTCUT_KEY, () => [])
const stringifyCombo = (options: KeyOptions) => `${options.shift ? 'shift+' : ''}${options.ctrl ? 'ctrl+' : ''}${options.key}`
const comboEqual = (a: KeyOptions, b: KeyOptions) => a.key === b.key
  && Boolean(a.alt) === Boolean(b.alt)
  && Boolean(a.ctrl) === Boolean(b.ctrl)
  && Boolean(a.shift) === Boolean(b.shift)

export function defineShortcut(options: DefineShortcutOptions) {
  const existing = shortcuts().value.find(each => comboEqual(each.combo, options.combo))
  if (existing && !options.replace) {
    throw new Error(`A shortcut is already registered to key combo '${stringifyCombo(options.combo)}'`)
  }

  shortcuts().value.push({ combo: options.combo, handler: options.handler })
}

export function handleShortcut(event: KeyboardEvent) {
  const combo: KeyOptions = {
    alt: event.altKey,
    ctrl: event.ctrlKey,
    key: event.key,
    shift: event.shiftKey
  }


  const existing = shortcuts().value.find(each => comboEqual(each.combo, combo))
  if (existing) {
    existing.handler()
  }
}
