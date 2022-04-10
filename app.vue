<template>
  <Paintbrush
    app-name="Paintbrush UI Docs"
    canonical="https://paintbrush.danifoldi.com"
    description="View the documentation for the Paintbrush UI component library"
    favicon="/favicon.png"
    favicon-svg="/paintbrush.svg"
    large-image="/paintbrush.png"
    large-image-alt="Paintbrush UI Logo"
    page-title="Paintbrush UI Docs"
    twitter-handle="danifoldi"
    url="https://paintbrush.danifoldi.com"
  >
    <SidebarContainer>
      <template #sidebar-middle>
        <SidebarLink href="/" icon="rocket-launch">
          Welcome
        </SidebarLink>
        <SidebarLink color="green" href="/tutorial" icon="code">
          Basic Use
        </SidebarLink>
        <SidebarLink color="orange" href="/docs" icon="flask">
          Components
        </SidebarLink>
        <SidebarLink
          color="purple"
          href="https://github.com/DaniFoldi/Paintbrush"
          icon="github-logo"
          reload
        >
          Source
        </SidebarLink>
      </template>
      <template #sidebar-bottom>
        <PoweredBy />
      </template>
      <template #content>
        <NuxtPage />
      </template>
    </SidebarContainer>
  </Paintbrush>
</template>

<script lang="ts" setup>
  import { useNuxtApp } from '#app'


  useNuxtApp().vueApp.config.unwrapInjectedRef = true
</script>
