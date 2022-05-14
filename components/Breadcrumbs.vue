<!--!
  @version 0.1.0
  @icon path
  @category Display
  @description Show the path of the current path
  @usage <Breadcrumbs :path="[{ iconName: 'file', text: 'some.txt', underline: true }]" />
-->
<template>
  <Container>
    <Text
      v-for="(piece, i) of path"
      :key="piece.text + i"
      inline
      :underline="piece.underline"
    >
      <Text v-if="i !== 0" part>
        /
      </Text>
      <Icon
        v-if="piece.iconName"
        :color="piece.iconColor ?? 'inherit'"
        :name="piece.iconName"
        :variant="piece.iconVariant ?? 'regular'"
      />
      {{ piece.text }}
    </text>
  </Container>
</template>

<script lang="ts" setup>
  import { IconTypes } from '../modules/icon-types'
  import { IconVariants } from '../modules/icons'


  defineProps<BreadcrumbsProps>()


  interface Breadcrumb {
    iconColor?: string
    iconName: IconTypes
    iconVariant?: IconVariants
    text: string
    underline?: boolean
  }

  interface BreadcrumbsProps {
    path: Breadcrumb[] // array of breadcrumbs: { iconColor?: string, iconName: IconTypes, iconVariant?: IconVariants, text: string, underline?: boolean }
  }
</script>

<style lang="scss" scoped>
  div {
    grid-auto-flow: column;
  }
</style>
