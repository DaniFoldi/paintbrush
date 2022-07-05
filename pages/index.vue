<template>
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
      <SidebarLink href="/docs/components" icon="file-text" icon-color="green">
        Docs
      </SidebarLink>
      <SidebarLink
        v-if="useRoute().path.startsWith('/docs')"
        v-auto-animate
        href="/docs/components"
        icon="folders"
        icon-color="textShade"
        indent
      >
        Components
      </SidebarLink>
      <Spacer />
      <SidebarLink
        v-if="useRoute().path.startsWith('/docs')"
        v-auto-animate
        href="https://vueuse.org"
        icon="plugs-connected"
        icon-color="textShade"
        indent
        new-tab
      >
        Vueuse
      </SidebarLink>
      <SidebarLink
        v-if="useRoute().path.startsWith('/docs')"
        v-auto-animate
        href="https://lodash.com/docs/4.17.15"
        icon="minus"
        icon-color="textShade"
        indent
        new-tab
      >
        Lodash
      </SidebarLink>
      <SidebarLink
        v-if="useRoute().path.startsWith('/docs')"
        v-auto-animate
        href="https://phosphoricons.com"
        icon="phosphor-logo"
        icon-color="textShade"
        indent
        new-tab
      >
        Phosphor Icons
      </SidebarLink>
      <SidebarLink href="/roadmap" icon="signpost" icon-color="blue">
        Roadmap
      </SidebarLink>
      <SidebarLink
        href="https://github.com/DaniFoldi/Paintbrush"
        icon="github-logo"
        icon-color="purple"
        new-tab
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
</template>
