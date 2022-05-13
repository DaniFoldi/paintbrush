<template>
  <MenubarContainer :wrap-content="false">
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
