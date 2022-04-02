<template>
  <PageContainer>
    <Title>{{ component.name }}</Title>
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
      <!--<Text>{{ component.note }}</Text>-->
    </template>
  </PageContainer>
</template>

<script lang="ts" setup async>
import type { Docs, Component } from '../../build/component-docs'


const path = useRoute().params.path.toString().replace(/^\/doc/, 'components').replace(/.vue$/, '')
const { data } = useLazyFetch('/docs.json')
let components: Docs | null = null
let component: Component = {
  description: '',
  example: [],
  name: '',
  note: '',
  property: [],
  renderedExample: [],
  see: [],
  tags: [],
  usage: '',
  version: ''
}

watch(data, newData => {
  components = newData as Docs
  component = components[path]
})
</script>
