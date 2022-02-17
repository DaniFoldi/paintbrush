<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { useNuxtApp } from '#app'
useNuxtApp().vueApp.config.unwrapInjectedRef = true
</script>
