<template>
  <div>
    <div v-for="component in components" :key="component.name">
      <h3>{{ component.name }}</h3>
      <Text>{{ component.version }}</Text>
      <Text>{{ component.description }}</Text>
      <MultilineCode :code="component.usage" language="html" />
      <Text v-for="related in component.see" :key="related">
        <AutoLink :href="related">
          {{ related }}
        </AutoLink>
      </Text>
      <MultilineCode
        v-for="example in component.example"
        :key="example"
        :code="example"
        language="html"
      />
      <Text>{{ component.note }}</Text>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentDocs } from '../build/component-docs'


const { data: components } = useFetch<ComponentDocs[]>('/docs.json')
</script>
