<!--!
  @version 1.0.0
  @icon brain
  @description Render any html at runtime
  @category Misc
  @note Nuxt/vue does not process the given html
-->

<template>
  <VNode />
</template>

<script setup lang="ts">
  import { h } from '#imports'


  interface RuntimeProps {
    class?: string // CSS classes to apply to the rendered elemnent
    element?: string // Top level HTML element
    rendered: string // innterHTML of element
  }

  const props = withDefaults(defineProps<RuntimeProps>(), {
    class: '',
    element: 'div'
  })

  const VNode = () => h(props.element, { class: props.class, innerHTML: props.rendered })
</script>
