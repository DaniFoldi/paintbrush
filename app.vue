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
    <NuxtPage />
  </Paintbrush>
</template>

<script lang="ts" setup>
  import { useNuxtApp } from '#app'


  useNuxtApp().vueApp.config.unwrapInjectedRef = true
</script>
