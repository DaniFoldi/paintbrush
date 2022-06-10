import { NotificationLike, Notification } from '../scripts/types'


type Notifications = Notification[]

const KEY = '__notifications'

function entries() {
  return useState<Notifications>(KEY, () => [])
}

function push(notification: Notification) {
  entries().value.push(notification)
  if (notification.lifetime) {
    setTimeout(() => destroy(notification), notification.lifetime * 1000)
  }
}

function destroy(notification: Notification) {
  const newEntries = entries().value.filter(each => each.id !== notification.id)
  entries().value = newEntries
}

function wrap(notification: NotificationLike): Notification {
  const id = (Math.random() * 1000).toString()
  return {
    ...notification,
    id: id
  }
}

export default function() {
  return {
    destroy,
    entries,
    push,
    wrap
  }
}
