<!--!
  @category Form
  @version 0.1.0
  @icon brackets-curly
  @description Code Editor component
-->

<!--##
  <Editor />
-->

<template>
  <ClientOnly>
    <Codemirror />
  </ClientOnly>
</template>

<script lang="ts" setup>
  import { Codemirror } from 'vue-codemirror'
</script>
