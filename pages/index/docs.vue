<template>
  <SidebarContainer exclude-middle>
    <template #sidebar-top>
      <Search ref="searchbar" :model-value="[]" @pb-search="updateFilter" />
      <template v-for="(category) in filteredCategories" :key="category">
        <SidebarCategory v-if="category">
          {{ category }}
        </SidebarCategory>
        <template
          v-for="(component, path) in categorized[category]"
          :key="component.name"
        >
          <SidebarLink
            v-if="!filter || component.name.toLocaleLowerCase().includes(filter)"
            :auto-wrap="false"
            :href="path.replace(/^components/, '/docs/components').replace(/\.vue$/, '')"
            :icon="component.icon"
            :icon-color="`${$route.path}.vue` === `/docs/${path}` ? 'var(--secondary)' : 'var(--background-text)'"
            :icon-variant="`${$route.path}.vue` === `/docs/${path}` ? 'bold' : 'regular'"
          >
            <Container center-vertical split>
              <Text>{{ component.name }}</Text>
              <Text light>
                {{ component.version }}
              </Text>
            </Container>
          </SidebarLink>
        </template>
      </template>
    </template>
    <template #content>
      <NuxtPage />
    </template>
  </SidebarContainer>
</template>

<script lang="ts" setup>
  import type { Component, Docs } from '../../scripts/docs'


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

  const filter = ref<string>()
  const filteredCategories = ref<string[]>(categories)
  const searchbar = ref()

  function updateFilter(input: string) {
    filter.value = input.toLocaleLowerCase()
    filteredCategories.value = categories.filter(category => Object.keys(categorized[category]).some(path => categorized[category][path].name.toLocaleLowerCase().includes(filter.value ?? '')))
  }
</script>
