<template>
  <IconButton :icon="icon" @click="toggle">
    Switch
  </IconButton>
</template>

<script lang="ts" setup>
defineEmits([ 'toggle' ])
</script>

<script lang="ts">
export default {
  inject: [ 'paintbrush' ],
  data() {
    return {
      icon: 'sun'
    }
  },
  methods: {
    toggle() {
      this.icon = this.paintbrush.updateTheme() ? 'moon' : 'sun'
      this.$emit('toggle')
    }
  }
}
</script>
