<!--!
  @version 1.0.0
  @icon plug
  @category Paintbrush
  @description Display that your awesome site is powered by none other than Paintbrush
  @usage <PoweredBy />
-->

<template>
  <AutoLink href="https://paintbrush.danifoldi.com" reload>
    <Text important>
      <Text part>
        Powered by
      </Text>
      <Text gradient part>
        Paintbrush
      </Text>
    </Text>
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
