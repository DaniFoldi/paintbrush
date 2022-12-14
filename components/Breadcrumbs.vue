<!--!
  @version 0.1.0
  @icon path
  @category Display
  @description Show the path of the current path
-->

<!--##
  <template>
  __<Breadcrumbs :path="path" />
  </template>

  <script lang="ts" setup>
  __import type { Breadcrumb } from '~~/components/Breadcrumbs.vue'
  __const path: Breadcrumb[] = [{ iconName: 'folder', text: 'Home', link: '/' }, { iconName: 'file', text: 'File' }]
  </script>
-->

<template>
  <Container>
    <template v-for="(piece, i) of path" :key="piece.text + i">
      <Text v-if="i !== 0" part>
        /
      </Text>
      <AutoLink
        v-if="piece.link"
        :href="piece.link"
        inline
        :underline="piece.underline"
      >
        <Icon
          v-if="piece.iconName"
          :color="piece.iconColor ?? 'inherit'"
          :name="piece.iconName"
          :variant="piece.iconVariant ?? 'regular'"
        />
        {{ piece.text }}
      </AutoLink>
      <Text
        v-else
        inline
        :underline="piece.underline"
      >
        <Icon
          v-if="piece.iconName"
          :color="piece.iconColor ?? 'inherit'"
          :name="piece.iconName"
          :variant="piece.iconVariant ?? 'regular'"
        />
        {{ piece.text }}
      </Text>
    </template>
  </Container>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'


  // eslint-disable-next-line import/exports-last
  export interface Breadcrumb {
    iconColor?: string
    iconName: IconTypes
    iconVariant?: IconVariants
    link?: string
    text: string
    underline?: boolean
  }

  interface BreadcrumbsProps {
    path: Breadcrumb[] // array of breadcrumbs
  }

  defineProps<BreadcrumbsProps>()
</script>

<style lang="scss" scoped>
  div {
    grid-auto-flow: column;
  }
</style>
