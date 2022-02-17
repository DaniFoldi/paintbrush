<template>
  <PrimaryButton @click="toggle">
    <Icon name="sun" size="20px" /> Switch
  </PrimaryButton>
</template>

<script lang="ts" setup>
defineEmits([ 'toggle' ])
</script>

<script lang="ts">
export default {
  inject: [ 'paintbrush' ],
  methods: {
    toggle() {
      this.paintbrush.updateTheme()
      this.$emit('toggle')
    }
  }
}
</script>
