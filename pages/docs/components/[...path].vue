<template>
  <Container article>
    <Text title>
      {{ component.name }}
    </Text>
    <Text>{{ component.version }}</Text>
    <Text italic>
      {{ component.description }}
    </Text>
    <MultilineCode v-if="component.usage !== ''" :code="component.usage" language="html" />
    <!-- TODO render example -->

    <Text v-if="Object.keys(component.property).length > 0" subtitle>
      Properties
    </Text>

    <div v-for="property in component.property" :key="property.name" class="property">
      <Text>
        <Text bold part>
          {{ property.name }}
        </Text>
        <Text>: {{ property.type }}</Text>
        <Text v-if="property.required" light part>
          (required)
        </Text>
      </Text>
      <Text italic>
        {{ property.description }}
      </Text>
      <Text v-if="property.default && property.default !== ''">
        default: {{ property.default }}
      </Text>
    </div>

    <Text v-if="Object.keys(component.see).length > 0" subtitle>
      Related components
    </Text>

    <AutoLink v-for="related in component.see" :key="related" :href="related">
      {{ related }}
    </AutoLink>

    <Text v-if="Object.keys(component.renderedExample).length + Object.keys(component.example).length > 0" subtitle>
      Examples
    </Text>

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

    <Text v-if="component.note && component.note !== ''" subtitle>
      Note
    </Text>
    <Text>{{ component.note }}</Text>
  </Container>
</template>

<script lang="ts" setup async>
  import type { Docs } from '../../../scripts/docs'


  function useFullParam(param: string): string {
    const piece = useRoute().params[param]
    return typeof piece === 'string' ? piece : piece.join('/')
  }

  const { data } = await useFetch<Docs>('/api/docs')
  const components = data.value
  const component = components[`components/${useFullParam('path')}.vue`]
</script>
