<template>
  <div class="paintbrush-container">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'Paintbrush',
  provide() {
    return { primary: computed(() => this.primary), secondary: computed(() => this.secondary) }
  },
  props: { primary: { type: String, default: 'blue' }, secondary: { type: String, default: 'purple' } }
}
</script>

<style lang="sass">
  html,
  body
    margin: 0
    padding: 0
    height: 100%
    width: 100%

  body
    display: grid
    grid-template: 'app' 100% / 100%

</style>

<style lang="sass" scoped>
  div.paintbrush-container
    width: 100%
    height: 100%
    grid-area: app
</style>
