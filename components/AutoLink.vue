<!--!
@name AutoLink
@version 1.0.0
-->
<template>
  <a v-if="reload" :href="href"><slot /></a>
  <NuxtLink v-else :to="href">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface AutoLinkProps {
  href?: string
  reload?: boolean
}
withDefaults(defineProps<AutoLinkProps>(), {
  href: '',
  reload: false
})
</script>

<style lang="scss" scoped>
  a, a:visited {
    color: var(--primary);
    text-decoration: none;
  }
</style>
