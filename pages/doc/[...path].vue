<template>
  <PageContainer>
    <PageTitle>{{ component.name }}</PageTitle>
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
      <!--</template>
      <MultilineCode
        v-for="example in component.example"
        :key="example"
        :code="example"
        language="html"
      />-->
      <Text>{{ component.note }}</Text>
    </template>
  </PageContainer>
</template>

<script lang="ts" setup async>
import type { Docs } from '../../scripts/docs'


const path = useRoute().params.path.toString()
const { data } = await useFetch<Docs>('/api/docs')
const components = data.value
const component = components[`components/${path}.vue`]
</script>
