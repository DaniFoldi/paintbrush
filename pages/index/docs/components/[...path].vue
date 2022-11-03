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
      :layout="[{ width: 'auto' }, { width: 'auto' }, { width: 'max-content' }, { width: 'auto' }]"
      row-height="minmax(32px, auto)"
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
          <Text v-if="property.default === 'pb-no-default'" color="shadowText">
            -
          </Text>
          <InlineCode
            v-else-if="component.collapsed.indexOf(property.name) === -1"
            :code="fixString(property.default)"
            language="typescript"
          />
          <Button v-else ghost @click="showCodePopup(`Default for ${property.name}`, fixString(property.default))">
            Click to view
          </Button>
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
      row-height="minmax(32px, auto)"
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
        <!-- TODO calculate height correctly -->
        <iframe
          v-if="example.render"
          :height="height[id] + 24 ?? 'auto'"
          :src="`/docs/examples/${component.name.toLocaleLowerCase()}-${id}`"
        />
        <MultilineCode
          :code="example.content.trimEnd()"
          language="html"
        />
      </Card>
    </template>

    <Highlight v-if="component.note">
      {{ component.note }}
    </Highlight>

    <Text v-if="component.require.length > 0" sectiontitle>
      Libraries required
    </Text>

    <ListContainer v-if="component.require.length > 0">
      <ListItem v-for="library in component.require" :key="library">
        <InlineCode :code="library" language="typescript" />
      </ListItem>
    </ListContainer>

    <Spacer />

    <AutoLink :href="`https://github.com/DaniFoldi/paintbrush/blob/main/components/${useFullParam('path')}.vue`" new-tab>
      Source
    </AutoLink>
    <Popup v-if="code !== ''" @pb-click-outside="code = ''">
      <Text subtitle>
        {{ title }}
      </Text>
      <MultilineCode :code="code" language="typescript" />
    </Popup>
  </Container>
</template>

<script lang="ts" setup async>
  import { ref, useFullParam } from '#imports'
  import type { Docs } from '../../../../scripts/docs'


  const { data } = await useFetch<Docs>('/api/docs')
  if (data.value === null) {
    await navigateTo('/')
  }
  const component = data.value[`components/${useFullParam('path')}.vue`]
  if (!component) {
    await navigateTo('/docs')
  }

  const height = ref<Record<number, number>>({})

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function fixString(code: any): string {
    return typeof code === 'string' ? `'${code}'` : JSON.stringify(code, null, 2)
  }

  const code = ref('')
  const title = ref('')

  function showCodePopup(newtitle: string, newcode: string) {
    code.value = newcode
    title.value = newtitle
  }

  onMounted(() => {
    window.addEventListener('message', event => {
      if (event.origin !== window.location.origin) {
        return
      }
      if (!Object.hasOwn(event.data, 'example') || !Object.hasOwn(event.data, 'height')) {
        return
      }

      height.value[event.data.example] = event.data.height
    })
  })
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/colors.scss' as colors;
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/mixins.scss' as mixins;
  @use '#paintbrush/assets/sizes.scss' as sizes;

  iframe {
    @include colors.standard-background;
    @include common.rounded;
    @include sizes.double-unit-padding;
    @include mixins.set-100-percent('width');
    border: none;
  }
</style>
