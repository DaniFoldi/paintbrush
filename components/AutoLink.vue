<!--!
  @version 1.0.0
  @icon link
  @description SSR/SPA-friendly link component
  @usage <AutoLink href="/dashboard">Dashboard</AutoLink>
  @category Basic
-->

<template>
  <a v-if="reload" :href="href"><slot /></a>
  <NuxtLink v-else :to="href">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface AutoLinkProps {
    href: string // URL to navigate to
  }

  const props = defineProps<AutoLinkProps>()


  const reload = computed(() => {
    try {
      new URL(props.href)
      return true
    } catch {
      return false
    }
  })
</script>

<style lang="scss" scoped>
  a, a:visited {
    color: var(--primary);
    cursor: pointer;
    text-decoration: none;
  }
</style>
