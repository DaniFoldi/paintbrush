<template>
  <Container article padded>
    <Text title>
      {{ component.name }}
    </Text>
    <Text v-if="component.version">
      {{ component.version }}
    </Text>
    <Text v-if="component.description" italic>
      {{ component.description }}
    </Text>

    <Text v-if="Object.keys(component.property).length > 0" subtitle>
      Properties
    </Text>

    <div v-for="property in component.property" :key="property.name" class="property">
      <Text>
        <Text bold part>
          {{ property.name }}
        </Text>
        <Text part>
          {{ `: ${property.type}` }}
        </Text>
        <Text v-if="property.required" light part>
          (required)
        </Text>
      </Text>
      <Text v-if="property.description" italic>
        {{ property.description }}
      </Text>
      <Text v-if="property.default">
        default: {{ property.default }}
      </Text>
    </div>

    <Text v-if="Object.keys(component.emit).length > 0" subtitle>
      Emits
    </Text>

    <div v-for="event in component.emit" :key="event.name">
      <Text>
        {{ event.name }}
      </Text>
      <Text>{{ event.description }}</Text>
      <Text>{{ event.payload }}</Text>
    </div>

    <Text v-if="Object.keys(component.see).length > 0" subtitle>
      Related components
    </Text>

    <AutoLink v-for="related in component.see" :key="related" :href="related">
      {{ related }}
    </AutoLink>

    <Text v-if="Object.keys(component.example).length > 0" subtitle>
      Examples
    </Text>

    <template v-for="(example, id) in component.example" :key="example">
      <MultilineCode
        :code="example.content"
        language="html"
      />
      <iframe v-if="example.render" :src="`/docs/examples/${component.name.toLocaleLowerCase()}-${id}`" />
    </template>

    <Text v-if="component.note" subtitle>
      Note
    </Text>

    <Text v-if="component.note">
      {{ component.note }}
    </Text>
  </Container>
</template>

<script lang="ts" setup async>
  import type { Docs } from '../../../../scripts/docs'
  import { useFullParam } from '#imports'


  const { data } = await useFetch<Docs>('/api/docs')
  const component = data.value[`components/${useFullParam('path')}.vue`]
  if (!component) {
    await navigateTo('/docs')
  }
</script>

<style lang="scss" scoped>
  div.property {
    margin-block: var(--unit);
  }
</style>
