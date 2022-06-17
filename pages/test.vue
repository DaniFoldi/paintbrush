<template>
  <MenubarContainer ref="scrollAnchor" menu-element-spacing="8px" :wrap-content="false">
    <template #menubar-left>
      <MenubarLink active-background="orange" color="white" href="/test">
        Test
      </MenubarLink>
      <MenubarLink href="/test/charts">
        Charts
      </MenubarLink>
      <Searchbar
        v-model="searchResults"
        @pb-search="performSearch"
      />
    </template>
    <template #content>
      <NuxtChild />
    </template>
  </MenubarContainer>
</template>

<script lang="ts" setup>
  import { provide, ref } from '#imports'


  const scrollAnchor = ref<HTMLElement | null>()
  provide('scrollAnchor', scrollAnchor)

  const searchResults = ref<{ category: string; content: string }[]>([])

  function performSearch(input: string) {
    const categories = [ 'Some Category', 'Test', 'Another Category' ]
    searchResults.value = categories.map(each => ({
      category: each,
      content: input
    }))
  }
</script>
