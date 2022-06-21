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
    items: Item[]
    maxHeight?: string
    title: string
  }

  interface DropdownEmits {
    (e: 'pb-item-clicked', value: Item): void
  }

  const emit = defineEmits<DropdownEmits>()
  const props = withDefaults(defineProps<DropdownProps>(), {
    maxHeight: '250px'
  })
  const expanded = ref<boolean>()

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
  @use '../assets/mixins.scss';

  .dropdown-container {
    user-select: none;
  }

  .dropdown-category {
    display: grid;
  }

  .dropdown-item-container {
    border: 1px solid var(--background-highlight);
    font-size: 0.9rem;
    margin-top: var(--double-unit);
    max-height: v-bind('props.maxHeight');
    overflow-y: auto;
    padding: var(--unit);

    @include mixins.rounded;
  }

  .dropdown-item {
    cursor: pointer;
    padding: var(--unit) var(--double-unit);


    @include mixins.rounded;
  }

  .dropdown-item:hover {
    background: var(--background-highlight);
  }

  .dropdown-title {
    background: var(--background-highlight);
    cursor: pointer;
    padding: var(--double-unit);

    @include mixins.rounded;
    @include mixins.with-fade;
  }

  .tag {
    background: var(--primary);
    color: var(--background);
    font-size: .5rem;
    margin: .1rem;
    padding: .2rem;

    @include mixins.rounded;
  }

  hr {
    padding: 0;
    width: 100%;
  }

  h3 {
    margin-block: 0;
  }
</style>
