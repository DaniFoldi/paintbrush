<template>
  <SidebarContainer :wrap-content="false">
    <template #sidebar-top>
      <Container center>
        <Image alt="Paintbrush UI Logo" max-width="50%" source="/paintbrush.svg" />
      </Container>
    </template>
    <template #sidebar-middle>
      <SidebarLink href="/" icon="rocket-launch" :icon-color="useRoute().path === '/' ? 'red' : 'lightergray'">
        Welcome
      </SidebarLink>
      <SidebarLink
        href="/quickstart"
        icon="download"
        :icon-color="useRoute().path === '/quickstart' ? 'orange' : 'lightergray'"
      >
        Quickstart
      </SidebarLink>
      <SidebarLink
        href="/examples"
        icon="code"
        :icon-color="useRoute().path === '/examples' ? 'yellow' : 'lightergray'"
      >
        Examples
      </SidebarLink>
      <SidebarLink
        href="/docs"
        icon="file-text"
        :icon-color="useRoute().path.startsWith('/docs') ? 'green' : 'lightergray'"
      >
        Docs
      </SidebarLink>
      <SidebarLink
        v-if="useRoute().path.startsWith('/docs')"
        v-auto-animate
        href="/docs/components"
        icon="folders"
        icon-color="textShade"
        indent
        non-exact
      >
        Components
      </SidebarLink>
      <Spacer v-if="useRoute().path.startsWith('/docs')" height="4px" />
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
      <SidebarLink
        href="/roadmap"
        icon="signpost"
        :icon-color="useRoute().path === '/roadmap' ? 'blue' : 'lightergray'"
      >
        Roadmap
      </SidebarLink>
      <SidebarLink
        href="https://github.com/DaniFoldi/Paintbrush"
        icon="github-logo"
        icon-color="lightergray"
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
      <NotificationContainer position="top-right" />
      <NuxtPage />
    </template>
  </SidebarContainer>
</template>
