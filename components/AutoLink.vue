<!--!
  @version 1.2.0
  @icon link
  @description SSR/SPA-friendly link component
  @category Basic
-->

<template>
  <a
    v-if="reload"
    :class="{ 'underline': underline === true, 'hover-underline': underline === 'hover' }"
    :href="href"
    :rel="newTab ? 'noopener noreferrer' : ''"
    :target="newTab ? '_blank' : ''"
  ><slot /></a>
  <NuxtLink
    v-else
    :rel="newTab ? 'noopener noreferrer' : ''"
    :target="newTab ? '_blank' : ''"
    :to="href"
  >
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
  import { computed } from '#imports'


  interface AutoLinkProps {
    href: string // URL to navigate to
    newTab?: boolean // Open link in new tab
    underline?: boolean | 'hover' // Underline text always or on hover
    weight?: number // Font weight
  }

  const props = withDefaults(defineProps<AutoLinkProps>(), {
    newTab: false,
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
