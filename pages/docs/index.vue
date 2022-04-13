<template>
  <Container article>
    <div v-for="(component, path) in components" :key="component.name">
      <h3>{{ component.name }}</h3>
      <AutoLink :href="path.replace(/^components/, '/docs/components').replace(/\.vue$/, '')">
        {{ component.name }}
      </AutoLink>
    </div>
  </Container>
</template>

<script lang="ts" setup>
  import type { Docs } from '../../scripts/docs'


  const { data } = await useFetch<Docs>('/api/docs')
  const components = data.value
</script>
