<!--!
  @version 0.1.0
  @category Layout
  @icon table
  @description A container for tables
-->

<template>
  <div :id="id">
    <slot name="header" />
    <slot name="content" />
    <slot name="footer" />
  </div>
</template>

<script lang="ts" setup>
  import { computed, onBeforeMount, provide, ref, useStyleTag } from '#imports'


  interface TableColumn {
    align?: string
    justify?: string
    place?: string
    width: string
  }

  interface TableContainerProps {
    columnGap?: string // Space between columns
    layout: TableColumn[] // Column layout: {align?: string, justify?: string, place?: string, width: string}
    rowHeight?: string // Height of rows
    separator?: boolean // Display separator between rows
  }

  const props = withDefaults(defineProps<TableContainerProps>(), {
    columnGap: 'doubleUnit',
    rowHeight: '32px',
    separator: true
  })

  const id = ref('')

  onBeforeMount(() => {
    id.value = `pb-table-${crypto.randomUUID().replaceAll('-', '')}`
  })

  const gridPlaces = computed(() => id.value ? props.layout.map((col, i) => col.align || col.justify || col.place ? `
  #${id.value} *:nth-child(${props.layout.length + (props.separator ? 1 : 0)}n + ${i + 1}) {
    ${col.align ? `align-self: ${col.align};` : ''}
    ${col.justify ? `justify-self: ${col.justify};` : ''}
    ${col.place ? `place-self: ${col.place};` : ''}
  }
` : '').filter(Boolean).join('\n') : '')

  useStyleTag(gridPlaces)
  provide('pb-table-use-separator', props.separator)

  const rows = computed(() => props.separator ? `${props.rowHeight} 2px` : props.rowHeight)
</script>

<style lang="scss" scoped>
  @use '~/assets/mixins';
  @use '~/assets/grid';
  @use '~/assets/sizes';
  @use '~/assets/colors';
  @use '~/assets/common';

  div {
    @include mixins.fade('background', 'color', 'border-color');
    @include grid.center-items-block;
    @include colors.standard-background;
    @include common.rounded;
    @include grid.grid;
    @include sizes.unit-margin-block;
    @include sizes.double-unit-padding-inline;
    @include common.border;

    column-gap: v-bind('columnGap');
    grid-auto-rows: v-bind(rows);
    grid-template-columns: v-bind('layout.map(col => col.width).join(" ")');
  }
</style>
