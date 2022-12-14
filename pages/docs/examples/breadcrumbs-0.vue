<template>
<Breadcrumbs :path="path" />
</template>
<script lang="ts" setup>
  const path = [{iconName: 'folder', text: 'Home', link: '/'}, {iconName: 'file', text: 'File'}]
</script>
