<!--!
  @version 1.0.0
  @category Content
  @description This component is intended to be used with @nuxt/content.
  @icon article
-->

<template>
  <ListItem>
    <ContentSlot unwrap="p" :use="$slots.default" />
  </ListItem>
</template>
