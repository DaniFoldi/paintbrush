<template>
  <div class="container">
    <Paintbrush
      app-name="Paintbrush UI Docs"
      canonical="https://paintbrush.danifoldi.com"
      description="View the documentation for the Paintbrush UI component library"
      favicon="paintbrush.png"
      large-image="paintbrush.png"
      large-image-alt="Paintbrush UI Logo"
      page-title="Paintbrush UI Docs"
      twitter-handle="danifoldi"
      url="https://paintbrush.danifoldi.com"
    >
      <Sidebar>
        <template #sidebar-middle>
          <SidebarEntry href="/" icon="rocket-launch">
            Welcome
          </SidebarEntry>
          <SidebarEntry color="green" href="/tutorial" icon="code">
            Basic Use
          </SidebarEntry>
          <SidebarEntry color="orange" href="/components" icon="flask">
            Components
          </SidebarEntry>
          <SidebarEntry
            color="purple"
            href="https://github.com/DaniFoldi/Paintbrush"
            icon="github-logo"
            :reload="true"
          >
            Source
          </SidebarEntry>
        </template>
        <template #sidebar-bottom>
          <PoweredBy />
        </template>
        <template #content>
          <NuxtPage />
        </template>
      </Sidebar>
    </Paintbrush>
  </div>
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#app'
useNuxtApp().vueApp.config.unwrapInjectedRef = true
</script>
