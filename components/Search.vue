
<!--!
  @category Form
  @icon magnifying-glass
  @version 0.2.0
  @description Input box to search for items
-->

<template>
  <Container class="search-main-container">
    <Form @pb-submit="search(true)">
      <input
        v-model="input"
        placeholder="Search..."
        @blur="close"
        @focusin="search(false)"
        @keyup="search(true)"
      >
    </Form>
    <Container v-if="modelValue && modelValue.length > 0" class="search-container">
      <Container v-for="entry in parseSearchResult()" :key="entry.category">
        <Text bold>
          {{ entry.category }}
        </Text>
        <Container
          v-for="content in entry.matches"
          :key="content"
          class="search-content"
          @click="emit('pb-entry-clicked', { category: entry.category, content: content })"
        >
          <Text>
            {{ content }}
          </Text>
        </Container>
      </Container>
    </Container>
  </Container>
</template>

<script lang="ts" setup>
  interface CategorizedSearchResult {
    category: string
    matches: string[]
  }

  interface SearchEntry {
    category: string
    content: string
  }

  interface SearchbarProps {
    maxHeight?: string // Maximum height of results container
    modelValue: SearchEntry[] // Current search result
    width?: string // Width of searchbar
  }

  interface SearchbarEmits {
    (e: 'pb-search', input: string): void // emitted when search text is changed
    (e: 'pb-entry-clicked', entry: SearchEntry): void // emitted when an entry is clicked
    (e: 'update:modelValue', value: SearchEntry[]): void // v-model update
  }

  const emit = defineEmits<SearchbarEmits>()
  const props = withDefaults(defineProps<SearchbarProps>(), {
    maxHeight: '250px',
    width: '100%'
  })
  const input = ref<string>()

  function parseSearchResult(): CategorizedSearchResult[] {
    const result: CategorizedSearchResult[] = []
    for (const entry of props.modelValue) {
      const existing = result.find(each => each.category === entry.category)
      if (existing) {
        existing.matches.push(entry.content)
      } else {
        result.push({
          category: entry.category,
          matches: [ entry.content ]
        })
      }
    }

    return result
  }

  function search(closeModal: boolean) {
    const value = input.value
    emit('pb-search', value ?? '')

    if (!value && closeModal) {
      close()
    }
  }

  function close() {
    emit('update:modelValue', [])
  }
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  .search-main-container {
    position: relative;
  }

  .search-container {
    background: var(--background-2);
    box-shadow: #3636364f 1px 1px 10px 3px;
    margin-top: var(--double-unit);
    max-height: v-bind('props.maxHeight');
    overflow-y: auto;
    padding: .5rem;
    position: absolute;
    width: v-bind('props.width');

    @include mixins.rounded;
  }

  .search-content {
    cursor: pointer;
    margin-bottom: .5rem;
    padding: .2rem;
    transition: ease .3s background;

    @include mixins.rounded;
  }

  .search-content:hover {
    background: var(--background);
    transition: ease .3s background;
  }

  input {
    border: 2px solid var(--background-highlight);
    height: 32px;
    margin-inline: 0;
    padding-inline: 4px;
    width: v-bind('props.width');

    @include mixins.rounded;
    @include mixins.with-fade;
    @include mixins.standard-background;
    @include mixins.standard-text;
  }
</style>
