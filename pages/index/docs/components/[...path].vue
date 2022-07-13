<template>
  <Container article padded>
    <Container split>
      <Text title>
        {{ component.name }}
      </Text>
      <Text>
        {{ component.version }}
      </Text>
    </Container>
    <Text v-if="component.description" italic>
      {{ component.description }}
    </Text>

    <Text v-if="Object.keys(component.property).length > 0" subtitle>
      Properties
    </Text>

    <TableContainer
      v-if="Object.keys(component.property).length > 0"
      column-gap="12px"
      :layout="[{ width: 'auto' }, { width: 'auto' }, { width: '1fr' }, { width: 'auto' }]"
      separator
    >
      <template #header>
        <TableRow>
          <Text bold>
            Name
          </Text>
          <Text bold>
            Type
          </Text>
          <Text bold>
            Description
          </Text>
          <Text bold>
            Default
          </Text>
        </TableRow>
      </template>
      <template #content>
        <TableRow v-for="property in component.property" :key="property.name">
          <InlineCode :code="property.name" language="none" />
          <InlineCode :code="property.type" language="typescript" />
          <Text italic>
            {{ property.description }}
          </Text>
          <InlineCode :code="fixString(property.default)" language="typescript" />
        </TableRow>
      </template>
    </TableContainer>

    <Text v-if="Object.keys(component.emit).length > 0" subtitle>
      Emits
    </Text>

    <TableContainer
      v-if="Object.keys(component.emit).length > 0"
      column-gap="12px"
      :layout="[{ width: 'auto' }, { width: '1fr' }, { width: 'auto' }]"
      separator
    >
      <template #header>
        <TableRow>
          <Text bold>
            Name
          </Text>
          <Text bold>
            Description
          </Text>
          <Text bold>
            Payload type
          </Text>
        </TableRow>
      </template>
      <template #content>
        <TableRow v-for="emit in component.emit" :key="emit.name">
          <InlineCode :code="emit.name" language="none" />
          <Text italic>
            {{ emit.description }}
          </Text>
          <InlineCode :code="emit.type" language="typescript" />
        </TableRow>
      </template>
    </TableContainer>

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
      <Card background="transparent" border="1px solid var(--secondary)" padded>
        <iframe
          v-if="example.render"
          :src="`/docs/examples/${component.name.toLocaleLowerCase()}-${id}`"
        />
        <MultilineCode
          :code="example.content.trimEnd()"
          language="html"
        />
      </Card>
    </template>

    <Text v-if="component.note" subtitle>
      Note
    </Text>

    <Highlight v-if="component.note">
      {{ component.note }}
    </Highlight>

    <Text v-if="component.require.length > 0" subtitle>
      Libraries required
    </Text>

    <ListContainer v-if="component.require.length > 0">
      <ListItem v-for="library in component.require" :key="library">
        <InlineCode :code="library" language="typescript" />
      </ListItem>
    </ListContainer>

    <Spacer />

    <AutoLink :href="`https://github.com/DaniFoldi/paintbrush/blob/main/components/${useFullParam('path')}.vue`">
      Source
    </AutoLink>
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function fixString(code: any): string {
    return typeof code === 'string' ? `'${code}'` : code.toString()
  }
</script>

<style lang="scss" scoped>
  iframe {
    background: var(--background);
    border: none;
    border-radius: var(--unit);
    padding: var(--double-unit);
    width: 100%;
  }
</style>
