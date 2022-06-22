import { Notification } from '../scripts/types'


function entries() {
  return useState<Notification[]>('pb-notifications', () => [])
}

function push(notification: Notification) {
  entries().value.push(notification)
  if (notification.lifetime) {
    setTimeout(() => destroy(notification), notification.lifetime * 1000)
  }
}

function destroy(notification: Notification) {
  const newEntries = entries().value.filter(each => each !== notification)
  entries().value = newEntries
}

export default function() {
  return {
    destroy,
    entries,
    push
  }
}
