<!--!
@name PoweredBy
@version 1.0.0
-->
<template>
  <AutoLink href="https://paintbrush.danifoldi.com" :reload="true">
    <Text important>
      Powered by
      <Text gradient>
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
