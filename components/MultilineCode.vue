<!--!
  @version 1.1.0
  @icon code
  @category Display
  @require highlight.js
  @description Highlight some source code
-->

<!--##
  <template>
  __<MultilineCode :code="code" />
  </template>

  <script lang="ts" setup>
  __const code = `
  __<div>
  __</div>
  __<script>
  ____const a = function(x) {
  ______return false ? x * 2 + 'hi' : new Object()
  ____}
  __</scirpt>
  __<style type="text/css">
  ____/* comment */
  ____.test {
  ________cursor: pointer;
  ________display: grid;
  ____}
  __</style>
  `
  </script>
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
