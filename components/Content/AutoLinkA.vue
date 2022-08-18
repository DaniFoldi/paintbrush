<!--!
  @version 1.0.0
  @category Content
  @description This component is intended to be used with @nuxt/content.
  @icon link
-->

<template>
  <AutoLink :href="href">
    <ContentSlot unwrap="p" :use="$slots.default" />
  </AutoLink>
</template>

<script lang="ts" setup>
  interface AutoLinkAProps {
    href: string // URL to navigate to
  }

  defineProps<AutoLinkAProps>()
</script>
