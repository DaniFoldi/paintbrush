import { useRoute } from '#imports'

export default function(param: string): string {
  const piece = useRoute().params[param]
  return typeof piece === 'string' ? piece : piece.join('/')
}
