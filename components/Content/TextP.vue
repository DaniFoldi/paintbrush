<!--!
  @version 1.0.0
  @category Content
  @description This component is intended to be used with @nuxt/content.
  @icon article
-->

<template>
  <Text>
    <ContentSlot unwrap="p" :use="$slots.default" />
  </Text>
</template>
