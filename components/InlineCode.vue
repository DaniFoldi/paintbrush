<template>
  <pre>
    <Runtime :class="classes" element="code" :rendered="highlight.value" />
  </pre>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import hljs from 'highlight.js/lib/common'


  interface InlineCodeProps {
    code: string // Source code to highlight
    language?: string // Language to use
  }

  const props = withDefaults(defineProps<InlineCodeProps>(), {
    language: 'auto'
  })

  const highlight = computed(() => {
    return props.language === 'auto' ? hljs.highlightAuto(props.code) : hljs.highlight(props.code, { language: props.language })
  })
  const classes = computed(() => [ 'hljs', highlight.value.language ].filter(Boolean).join(' '))
</script>

<style lang="scss" scoped>
  pre {
    display: inline;
    margin: 0;
    padding: 0;
    white-space: nowrap;
  }

  pre code.hljs {
    display: inline;
  }
</style>
