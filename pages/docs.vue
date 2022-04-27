<template>
  <SidebarContainer>
    <template #sidebar-middle>
      <AutoLink
        v-for="(component, path) in components"
        :key="component.name"
        :href="path.replace(/^components/, '/docs/components').replace(/\.vue$/, '')"
      >
        {{ component.name }}
      </AutoLink>
    </template>
    <template #content>
      <Container article>
        <NuxtChild />
      </Container>
    </template>
  </SidebarContainer>
</template>

<script lang="ts" setup>
  import type { Docs } from '../scripts/docs'


  const { data } = await useFetch<Docs>('/api/docs')
  const components = data.value
</script>
