<template>
  <NuxtPage />
</template>

<script lang="ts" setup>
  onMounted(() => {
    const id = useRoute().path.match(/\d+$/)
    if (id) {
      window.parent.postMessage(
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          example: Number.parseInt(id),
          height: document.body.scrollHeight
        },
        '*'
      )
    }
  })
</script>

<style lang="scss">
  body {
    overflow: hidden;
  }
</style>
