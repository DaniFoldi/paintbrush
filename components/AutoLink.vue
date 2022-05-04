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
  interface AutoLinkProps {
    href: string // URL to navigate to
  }

  const props = defineProps<AutoLinkProps>()
  let reload = true
  try {
    new URL(props.href)
  } catch {
    reload = false
  }
</script>

<style lang="scss" scoped>
  a, a:visited {
    color: var(--primary);
    text-decoration: none;
  }
</style>
