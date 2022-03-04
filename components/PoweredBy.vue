<template>
  <AutoLink href="https://paintbrush.danifoldi.com" :reload="true">
    <KeyText>
      Powered by
      <GradientText>
        Paintbrush
      </GradientText>
    </KeyText>
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
