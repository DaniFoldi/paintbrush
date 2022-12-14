<template>
  <Breadcrumbs :path="path" />
</template>
<script lang="ts" setup>
  // @ts-expect-error - Icon names should have their type annotated
  const path = [{ iconName: 'folder', text: 'Home', link: '/' }, { iconName: 'file', text: 'File' }]
</script>
