<!--!
  @version 1.1.1
  @icon link
  @description SSR/SPA-friendly link component
  @usage <AutoLink href="/dashboard">Dashboard</AutoLink>
  @category Basic
-->

<template>
  <a
    v-if="reload"
    :class="{ 'underline': underline === true, 'hover-underline': underline === 'hover' }"
    :href="href"
  ><slot /></a>
  <NuxtLink v-else :to="href">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface AutoLinkProps {
    href: string // URL to navigate to
    underline?: boolean | 'hover'
    weight?: number
  }

  const props = withDefaults(defineProps<AutoLinkProps>(), {
    underline: false,
    weight: 400
  })


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
    font-weight: v-bind(weight);
    text-decoration: none;

    &.underline {
      text-decoration: underline;
    }

    &.hover-underline:hover {
      text-decoration: underline;
    }
  }
</style>
