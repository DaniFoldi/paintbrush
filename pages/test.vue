<template>
  <MenubarContainer ref="scrollAnchor" menu-element-spacing="8px" :wrap-content="false">
    <template #menubar-left>
      <MenubarLink href="/test">
        Test
      </MenubarLink>
      <MenubarLink href="/test/charts">
        Charts
      </MenubarLink>
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
</script>
