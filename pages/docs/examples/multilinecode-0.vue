<template>
  <MultilineCode :code="code" />
</template>

<script lang="ts" setup>
  const code = `
  <div>
  </div>
  <script>
    const a = function(x) {
      return false ? x * 2 + 'hi' : new Object()
    }
  </scirpt>
  <style type="text/css">
    /* comment */
    .test {
        cursor: pointer;
        display: grid;
    }
  </style>
  `
</script>
