<!--!
  @category Display
  @version 1.4.0
  @icon code-simple
  @require highlight.js
  @description Display code in a simple way, inline
-->

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <code v-html="highlight" />
</template>

<script lang="ts" setup>
  interface InlineCodeProps {
    code: string // Source code to highlight
    language?: string // Language to use
  }

  const props = withDefaults(defineProps<InlineCodeProps>(), {
    code: '',
    language: 'none'
  })

  const highlight = await useHighlighter(props.code, props.language, { theme: 'github-dark', langs: ['html', 'vue', 'vue-html', 'js', 'ts', 'css', 'scss'] })
</script>
