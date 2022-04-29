<!--!
  @name PoweredBy
  @version 1.0.0
  @icon plug
-->
<template>
  <AutoLink href="https://paintbrush.danifoldi.com" reload>
    <Glue>
      <Text important>
        Powered by
      </Text>
      <Text gradient important>
        Paintbrush
      </Text>
    </Glue>
  </AutoLink>
</template>

<style lang="scss" scoped>
  :deep(p) {
    display: inline;
  }

  a {
    display: grid;
    place-items: center;
  }
</style>
