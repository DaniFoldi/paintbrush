<!--!
  @version 1.3.0
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
  import { computed, useThemeColor, usePaintbrushMeta } from '#imports'


  interface AutoLinkProps {
    color?: string // Link color
    href: string // URL to navigate to
    newTab?: boolean // Open link in new tab
    underline?: boolean | 'hover' | null // Underline text always or on hover
    weight?: number // Font weight
  }

  const props = withDefaults(defineProps<AutoLinkProps>(), {
    color: 'backgroundText',
    newTab: false,
    underline: null,
    weight: 0
  })


  const reload = computed(() => {
    try {
      new URL(props.href)
      return true
    } catch {
      return false
    }
  })

  const color = computed(() => useThemeColor(props.color).value)
  const paintbrushMeta = usePaintbrushMeta()
  const weight = computed(() => props.weight === 0 ? paintbrushMeta.link.fontWeight : props.weight)
  const underline = computed(() => props.underline === null ? paintbrushMeta.link.underline : props.underline)
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/text.scss' as text;

  a, a:visited {
    @include text.no-underline;
    color: v-bind(color);
    cursor: pointer;
    font-weight: v-bind(weight);

    &.underline, &.underline:hover {
      @include text.underline;
    }

    &.hover-underline:hover {
      @include text.underline;
    }
  }
</style>
