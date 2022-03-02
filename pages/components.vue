<template>
  <div>
    <div v-for="component in components" :key="component.name">
      <h3>{{ component.name }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { data: components } = await useFetch('/docs.json')
</script>
