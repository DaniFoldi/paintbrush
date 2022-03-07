<template>
  <div>
    <div v-for="component in components" :key="component.name">
      <h3>{{ component.name }}</h3>
      <Text>{{ component.version }}</Text>
      <Text>{{ component.description }}</Text>
      <MultilineCode :code="component.usage" language="html" />
      <div v-for="property in component.property" :key="property.name">
        <Text>{{ property.name }}</Text>
        <Text>{{ property.type }}</Text>
        <Text>{{ property.description }}</Text>
        <Text>{{ property.required ? '*' : '' }}</Text>
        <Text>{{ property.default }}</Text>
      </div>
      <AutoLink v-for="related in component.see" :key="related" :href="related">
        {{ related }}
      </AutoLink>
      <template v-for="example in component.renderedExample" :key="example">
        <MultilineCode
          :code="example"
          language="html"
        />
        <!-- TODO find a way to render components -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <!-- <div v-html="example" /> -->
      </template>
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
