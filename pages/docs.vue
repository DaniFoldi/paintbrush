<template>
  <SidebarContainer>
    <template #sidebar-middle>
      <SidebarLink
        v-for="(component, path) in components"
        :key="component.name"
        :href="path.replace(/^components/, '/docs/components').replace(/\.vue$/, '')"
        :icon="component.icon"
        :icon-color="$route.path.endsWith(`/${component.name}`) ? 'var(--secondary)' : 'var(--text)'"
      >
        <Glue split>
          <Text>{{ component.name }}</Text>
          <Text light>
            {{ component.version }}
          </Text>
        </Glue>
      </SidebarLink>
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

<style lang="scss" scoped>
/*a {
  color: var(--text-2);

  &.router-link-active {
    color: var(--secondary);
  }
}*/
</style>
