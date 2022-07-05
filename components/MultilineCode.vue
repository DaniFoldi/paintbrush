<!--!
  @version 1.1.0
  @icon code
  @category Display
  @require highlight.js
  @description Highlight some source code
-->

<template>
  <pre><InlineCode :code="code" :language="language" /></pre>
</template>

<script lang="ts" setup>
  interface MultilineCodeProps {
    code: string // Source code to highlight
    language?: string // Language to use
  }

  withDefaults(defineProps<MultilineCodeProps>(), {
    language: 'auto'
  })
</script>
