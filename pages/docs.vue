<template>
  <PageContainer>
    <div v-for="(component, path) in components" :key="component.name">
      <h3>{{ component.name }}</h3>
      <AutoLink :href="path.replace(/^components/,'/doc').replace(/\.vue$/, '')">
        {{ component.name }}
      </AutoLink>
    </div>
  </PageContainer>
</template>

<script lang="ts" setup>
import type { Docs } from '../server/api/docs'


const { data } =  await useFetch('/api/docs')
const components: Docs = data.value
</script>
