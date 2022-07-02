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
    <SidebarContainer :wrap-content="false">
      <template #sidebar-top>
        <Container center>
          <Image alt="Paintbrush UI Logo" max-width="50%" source="/paintbrush.svg" />
        </Container>
      </template>
      <template #sidebar-middle>
        <SidebarLink href="/" icon="rocket-launch" icon-color="red">
          Welcome
        </SidebarLink>
        <SidebarLink href="/quickstart" icon="download" icon-color="orange">
          Quickstart
        </SidebarLink>
        <SidebarLink href="/examples" icon="code" icon-color="yellow">
          Examples
        </SidebarLink>
        <SidebarLink href="/docs" icon="file-text" icon-color="green">
          Docs
        </SidebarLink>
        <SidebarLink href="/roadmap" icon="signpost" icon-color="blue">
          Roadmap
        </SidebarLink>
        <SidebarLink
          href="https://github.com/DaniFoldi/Paintbrush"
          icon="github-logo"
          icon-color="purple"
        >
          Source
        </SidebarLink>
        <SidebarLink
          href="/test"
          icon="gear"
          icon-color="lightergray"
        >
          Test
        </SidebarLink>
      </template>
      <template #sidebar-bottom>
        <Container center>
          <ThemeToggle />
        </Container>
        <PoweredBy />
      </template>
      <template #content>
        <NuxtPage />
      </template>
    </SidebarContainer>
    <NotificationContainer position="top-right" />
  </Paintbrush>
</template>

<script lang="ts" setup>
  import { useNuxtApp } from '#app'


  useNuxtApp().vueApp.config.unwrapInjectedRef = true
</script>
