<!--!
@name Text
@version 1.0.0
@description Text component to display text
@usage <Text>Lorem ipsum dolor sit amet</Text>
-->
<template>
  <p><slot /></p>
</template>

<style lang="sass" scoped>
  p
    margin: var(--unit) 0
</style>
