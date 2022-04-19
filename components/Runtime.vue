<!--!
  @name Runtime
  @version 1.0.0
  @description Render any html at runtime
  @usage <Runtime element="h1" html="Hello World" />
  @property
  class?: string [''] (CSS classes to apply to the rendered html)
  html: string (Html to render)
  @renderedExample
  <Runtime html="Hello World" />
  @renderedExample
  <Runtime element="p" html="Some <em>text</em>" class="important" />
  @note Nuxt does not process the given html
-->
<template>
  <VNode />
</template>

<script setup lang="ts">
  import { h } from 'vue'


  interface RuntimeProps {
    class: string
    rendered: string
  }

  const props = defineProps<RuntimeProps>()
  const VNode = () => h('div', { class: props.class, innerHTML: props.rendered })
</script>
