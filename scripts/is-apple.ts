export function isApple() {
  return computed(() => {
    // eslint-disable-next-line no-undef -- process will be added to globals
    const platform = process.client ? navigator.platform : useRequestHeaders()['user-agent']
    return [ 'iPhone', 'iPod', 'iPad', 'Mac' ].some(p => platform.includes(p))
  }).value
}
