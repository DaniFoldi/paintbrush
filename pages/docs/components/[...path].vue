<template>
  <Container article>
    <Glue>
      <Text title>
        {{ component.name }}
      </Text>
      <Text>{{ component.version }}</Text>
    </Glue>
    <Text italic>
      {{ component.description }}
    </Text>
    <MultilineCode v-if="component.usage !== ''" :code="component.usage" language="html" />
    <!-- TODO render example -->

    <Text v-if="Object.keys(component.property).length > 0" subtitle>
      Properties
    </Text>

    <div v-for="property in component.property" :key="property.name" class="property">
      <Glue>
        <Text bold>
          {{ property.name }}
        </Text>
        <Text>: {{ property.type }}</Text>
        <Text light>
          {{ property.required ? ' (required)' : '' }}
        </Text>
      </Glue>
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
      Examples
    </Text>
    <Text>{{ component.note }}</Text>
  </Container>
</template>

<script lang="ts" setup async>
  import type { Docs } from '../../scripts/docs'


  const path = useRoute().params.path.toString()
  const { data } = await useFetch<Docs>('/api/docs')
  const components = data.value
  const component = components[`components/${path}.vue`]
</script>
