<template>
  <Breadcrumbs :path="path" />
</template>

<script lang="ts" setup>
  import type { Breadcrumb } from '~~/components/Breadcrumbs.vue'
  const path: Breadcrumb[] = [{ iconName: 'folder', text: 'Home', link: '/' }, { iconName: 'file', text: 'File' }]
</script>
