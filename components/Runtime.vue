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
