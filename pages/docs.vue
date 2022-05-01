<template>
  <SidebarContainer>
    <template #sidebar-middle>
      <template v-for="(category) in categories" :key="category">
        <SidebarCategory v-if="category">
          {{ category }}
        </SidebarCategory>
        <SidebarLink
          v-for="(component, path) in categorized[category]"
          :key="component.name"
          :auto-title="false"
          :href="path.replace(/^components/, '/docs/components').replace(/\.vue$/, '')"
          :icon="component.icon"
          :icon-color="`${$route.path}.vue` === `/docs/${path}` ? 'var(--secondary)' : 'var(--text)'"
          :icon-style="`${$route.path}.vue` === `/docs/${path}` ? 'bold' : 'regular'"
        >
          <Glue split>
            <Text>{{ component.name }}</Text>
            <Text light>
              {{ component.version }}
            </Text>
          </Glue>
        </SidebarLink>
      </template>
    </template>
    <template #content>
      <NuxtChild />
    </template>
  </SidebarContainer>
</template>

<script lang="ts" setup>
  import type { Component, Docs } from '../scripts/docs'


  const { data } = await useFetch<Docs>('/api/docs')
  const docs: Docs = typeof data.value === 'string' ? JSON.parse(data.value) : data.value
  const categorized: Record<string, Record<string, Component>> = {}
  for (const path in docs) {
    const component = docs[path]
    const category = component.category
    if (!categorized[category]) {
      categorized[category] = {}
    }
    categorized[category][path] = component
  }
  const categories = Object.keys(categorized).sort((a, b) => a.localeCompare(b))
</script>
