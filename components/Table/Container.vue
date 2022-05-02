<template>
  <div :id="id">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
  </div>
  <!-- eslint-disable-next-line vue/html-self-closing -->
  <Style :children="gridPlaces"></Style>
</template>

<script lang="ts" setup>
  import { computed, onMounted, provide, ref } from 'vue'


  interface TableColumn {
    align?: string
    justify?: string
    place?: string
    width: string
  }

  interface TableContainerProps {
    columnGap?: string
    layout: TableColumn[]
    rowHeight?: string
    separator?: boolean
  }

  const props = withDefaults(defineProps<TableContainerProps>(), {
    columnGap: 'var(--double-unit)',
    rowHeight: '32px',
    separator: true
  })

  const id = ref('')

  onMounted(() => {
    id.value = `table${crypto.randomUUID().replaceAll('-', '')}`
  })

  const gridPlaces = computed(() => id.value ? props.layout.map((col, i) => col.align || col.justify || col.place ? `
  #${id.value} *:nth-child(${props.layout.length + (props.separator ? 1 : 0)}n + ${i + 1}) {
    ${col.align ? `align-self: ${col.align};` : ''}
    ${col.justify ? `justify-self: ${col.justify};` : ''}
    ${col.place ? `place-self: ${col.place};` : ''}
  }
` : '').filter(Boolean).join('\n') : '')

  provide('table-use-separator', props.separator)

  const rows = props.separator ? `${props.rowHeight} 2px` : props.rowHeight
</script>

<style lang="scss" scoped>
  div {
    align-items: center;
    background: var(--background);
    border: 1px solid var(--background-highlight);
    border-radius: var(--unit);
    column-gap: v-bind('props.columnGap');
    display: grid;
    grid-auto-rows: v-bind(rows);
    grid-template-columns: v-bind('props.layout.map(col => col.width).join(" ")');
    margin-block: var(--unit);
    padding-inline: var(--double-unit);
  }
</style>
