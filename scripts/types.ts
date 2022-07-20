import { IconTypes } from '../modules/icon-types'
import { IconVariants } from '../modules/icons'


export interface Spoiler {
  collapse: () => void
  group?: string
  id: string
}

export interface Notification {
  content?: string
  contentClicked?: () => void
  iconColor?: string
  iconName: IconTypes
  iconVariant?: IconVariants
  lifetime?: number // seconds
  title: string
}

export type PaintbrushTheme = 'light' | 'dark' | 'system'
