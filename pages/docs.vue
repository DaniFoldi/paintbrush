<template>
  <div>
    <div v-for="(component, path) in components" :key="component.name">
      <h3>{{ component.name }}</h3>
      <AutoLink :href="path.replace(/^components/,'docs').replace(/\.vue$/, '')">
        {{ component.name }}
      </AutoLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentDocs } from '../build/component-docs'


const { data: components } = await useFetch<Record<string, ComponentDocs>>('/docs.json')
</script>
