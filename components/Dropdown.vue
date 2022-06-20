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
        <Text sectiontitle>
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
    title: string
  }

  interface DropdownEmits {
    (e: 'pb-item-clicked', value: Item): void
  }

  const emit = defineEmits<DropdownEmits>()
  const props = defineProps<DropdownProps>()
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
    gap: 1rem;
  }

  .dropdown-item-container {
    background: var(--background);
    padding: var(--double-unit);

    @include mixins.rounded;
  }

  .dropdown-item {
    background: var(--background-2);
    cursor: pointer;
    padding: var(--double-unit);


    @include mixins.rounded;
  }

  .dropdown-title {
    cursor: pointer;
    padding: var(--double-unit);

    @include mixins.rounded;
    @include mixins.with-fade;
  }

  .dropdown-title:hover {
    background: var(--background-2);
  }

  .tag {
    background: var(--primary);
    color: var(--background);
    font-size: .5rem;
    margin: .3rem;
    padding: .3rem;

    @include mixins.rounded;
  }

  hr {
    width: 100%;
  }
</style>
