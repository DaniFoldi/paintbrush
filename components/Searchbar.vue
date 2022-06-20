<template>
  <Container>
    <Container class="dummy-input-container" @click="expanded = true">
      <Icon name="magnifying-glass" />
      <Text inline>
        Search...
      </Text>
    </Container>
    <Popup v-if="expanded">
      <Container class="search-container">
        <Container>
          <Form class="search-header" @pb-submit="search">
            <input v-model="input" placeholder="Search" @input="inputSearch">
            <Button class="search-button">
              Search
            </Button>
            <Icon
              class="close"
              color="red"
              name="x"
              @click="close"
            />
          </Form>
        </Container>
        <Container
          v-if="modelValue && modelValue.length > 0"
          class="search-result-container"
        >
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
    </Popup>
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
    modelValue: SearchEntry[]
    triggerOnInput?: boolean
    width?: string
  }

  interface SearchbarEmits {
    (e: 'pb-search', input: string): void
    (e: 'pb-entry-clicked', entry: SearchEntry): void
    (e: 'update:modelValue', value: SearchEntry[]): void
  }

  const emit = defineEmits<SearchbarEmits>()
  const props = withDefaults(defineProps<SearchbarProps>(), {
    triggerOnInput: true,
    width: '100%'
  })
  const expanded = ref<boolean>()
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

  function search() {
    const value = input.value
    if (value) {
      emit('pb-search', value)
    }
  }

  function inputSearch() {
    if (props.triggerOnInput) {
      search()
    }
  }

  function close() {
    expanded.value = false
    input.value = undefined
    emit('update:modelValue', [])
  }
</script>

<style lang="scss" scoped>
  @use '../assets/mixins.scss';

  input,
  .dummy-input-container {
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

  .close {
    cursor: pointer;
  }

  .dummy-input-container {
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  .search-container {
    background: var(--background-2);
    padding: 1rem;
    width: 45vw;

    @include mixins.rounded;
  }

  .search-content {
    border: 1px solid var(--background-highlight);
    cursor: pointer;
    padding: .5rem;
    transition: ease .3s background;

    @include mixins.rounded;
  }

  .search-content:hover {
    background: var(--background);
    transition: ease .3s background;
  }

  .search-result-container {
    display: grid;
    gap: 1.5rem;
    grid-column: 1;
    margin-top: 1.5rem;
  }

  .search-header {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 7fr 2fr 1fr;
    justify-items: center;
  }

  input,
  button {
    height: 100%;
    width: 100%;
  }
</style>
