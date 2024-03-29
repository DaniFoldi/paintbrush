<!--!
  @version 0.1.0
  @category Form
  @icon list
  @description Select from a list of items
-->

<template>
  <Container class="dropdown-container">
    <Text
      class="dropdown-title"
      @click="expanded = !expanded"
    >
      {{ title }}
    </Text>
    <Container v-if="expanded" class="dropdown-item-container">
      <Container
        v-for="item in parseItems()"
        :key="item.category"
        class="dropdown-category"
      >
        <Text bold>
          {{ item.category }}
        </Text>
        <Container
          v-for="entry in item.items"
          :key="entry.name"
          class="dropdown-item"
          @click="itemClicked(item.category, entry.name, entry.tags)"
        >
          <Text>
            {{ entry.name }}
          </Text>
          <Text
            v-for="tag in entry.tags"
            :key="tag"
            class="tag"
            inline
          >
            {{ tag }}
          </Text>
        </Container>
        <Separator />
      </Container>
    </Container>
  </Container>
</template>

<script lang="ts" setup>
  import { computed, ref } from '#imports'


  interface Item {
    category: string
    name: string
    tags?: string[]
  }

  interface CategorizedItem {
    category: string
    items: { name: string; tags: string[] }[]
  }

  interface DropdownProps {
    float?: boolean // Make dropdown float above other elements
    items: Item[] // Dropdown items
    maxHeight?: string // Max height of dropdown
    title: string // Dropdown title
  }

  interface DropdownEmits {
    (e: 'pb-item-clicked', value: Item): void // Emitted when an item is clicked
  }

  const emit = defineEmits<DropdownEmits>()
  const props = withDefaults(defineProps<DropdownProps>(), {
    float: false,
    maxHeight: '250px'
  })


  const expanded = ref<boolean>()

  const container = computed(() => props.float ? 'relative' : 'static')
  const content = computed(() => props.float ? 'absolute' : 'static')

  const itemClicked = (category: string, name: string, tags?: string[]) => emit(
    'pb-item-clicked',
    {
      category: category,
      name: name,
      tags: tags
    }
  )

  function parseItems(): CategorizedItem[] {
    const items: CategorizedItem[] = []
    for (const item of props.items) {
      const existing = items.find(each => each.category === item.category)
      if (existing) {
        existing.items.push({
          name: item.name,
          tags: item.tags || []
        })
      } else {
        items.push({
          category: item.category,
          items: [{ name: item.name, tags: item.tags || [] }]
        })
      }
    }

    return items
  }
</script>

<style lang="scss" scoped>
  @use '#paintbrush/assets/common.scss' as common;
  @use '#paintbrush/assets/mixins.scss' as mixins;

  .dropdown-container {
    position: v-bind(container);
    user-select: none;
    z-index: 10;
  }

  .dropdown-item-container {
    @include common.rounded;

    background: var(--background-2);
    border: 1px solid var(--background-highlight);
    font-size: .9rem;
    margin-top: var(--double-unit);
    max-height: v-bind('props.maxHeight');
    overflow-y: auto;
    padding: var(--unit);
    position: v-bind(content);
    width: 100%;
  }

  .dropdown-item {
    @include common.rounded;

    cursor: pointer;
    padding: var(--unit) var(--double-unit);
  }

  .dropdown-item:hover {
    background: var(--background-highlight);
  }

  .dropdown-category {
    display: grid;
  }

  .dropdown-title {
    @include common.rounded;
    @include mixins.fade('color');

    background: var(--background-highlight);
    cursor: pointer;
    padding: var(--double-unit);
  }

  .tag {
    @include common.rounded;

    background: var(--primary);
    color: var(--background);
    font-size: .5rem;
    margin: .1rem;
    padding: .2rem;
  }

  hr {
    padding: 0;
    width: 100%;
  }

  h3 {
    margin-block: 0;
  }
</style>
