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
        <SidebarLink href="/tutorial" icon="code" icon-color="green">
          Basic Use
        </SidebarLink>
        <SidebarLink href="/docs" icon="flask" icon-color="orange">
          Docs
        </SidebarLink>
        <SidebarLink
          href="https://github.com/DaniFoldi/Paintbrush"
          icon="github-logo"
          icon-color="purple"
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
