import { computed, useRequestHeaders } from '#imports'


export default function() {
  return computed(() => {
    const platform = process.client ? navigator.platform : useRequestHeaders()['user-agent']
    return [ 'iPhone', 'iPod', 'iPad', 'Mac' ].some(p => platform?.includes(p))
  }).value
}
