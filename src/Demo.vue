<template>
  <div id="app">
    <Button>test button</Button>
    <CallToAction>click here now</CallToAction>
    <DestructiveButton>Delete</DestructiveButton>
    <GhostButton>Cancel</GhostButton>
  </div>
</template>

<script>
import Button from './components/button/Button.vue'
import CallToAction from './components/button/CallToAction.vue'
import DestructiveButton from './components/button/DestructiveButton.vue'
import GhostButton from './components/button/GhostButton.vue'
export default {
  el: '#app',
  components: { Button, CallToAction, DestructiveButton, GhostButton }
}
</script>

<style lang="sass"></style>
