
import { Spoiler } from '../scripts/types'


const spoilers = new Map()
const current = ref<Spoiler>()

export default function(spoiler: Spoiler) {
  if (!spoilers.has(spoiler.id)) {
    spoilers.set(spoiler.id, spoiler)
  }

  if (current.value?.id === spoiler.id) {
    return
  }

  if (spoiler.group) {
    if (current.value?.group === spoiler.group) {
      current.value?.collapse()
    } else {
      for (const each of spoilers.values()) {
        if (each.group === spoiler.group && each.id !== spoiler.id) {
          each.collapse()
        }
      }
    }
  }

  current.value = spoiler
}
