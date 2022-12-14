<template>
  <SidebarContainer :wrap-content="false">
    <template #sidebar-top>
      <Container center>
        <Image alt="Paintbrush UI Logo" max-width="50%" source="/paintbrush.svg" />
      </Container>
    </template>
    <template #sidebar-middle>
      <SidebarLink href="/" icon="rocket-launch" icon-color="primary">
        Welcome
      </SidebarLink>
      <SidebarLink
        href="/quickstart"
        icon="download"
        icon-color="primary"
      >
        Quickstart
      </SidebarLink>
      <SidebarLink
        href="/examples"
        icon="code"
        icon-color="primary"
      >
        Examples
      </SidebarLink>
      <SidebarLink
        href="/docs"
        icon="file-text"
        icon-color="primary"
        non-exact
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
        icon-color="shadowText"
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
        icon-color="shadowText"
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
        icon-color="shadowText"
        indent
        new-tab
      >
        Phosphor Icons
      </SidebarLink>
      <SidebarLink
        href="/roadmap"
        icon="signpost"
        icon-color="primary"
      >
        Roadmap
      </SidebarLink>
      <SidebarLink
        href="https://github.com/DaniFoldi/Paintbrush"
        icon="github-logo"
        icon-color="purple-5"
        new-tab
      >
        Source
      </SidebarLink>
      <SidebarLink
        href="/test"
        icon="gear"
        icon-color="backgroundText"
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
      <!-- <NotificationContainer position="top-right" /> -->
      <NuxtPage />
    </template>
  </SidebarContainer>
</template>
