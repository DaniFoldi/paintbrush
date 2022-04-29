<template>
  <Container article padded>
    <Text gradient important title>
      How To Install Paintbrush
    </Text>
    <MultilineCode :code="install" language="bash" />
    <MultilineCode :code="basic1" language="html" />
  </Container>
</template>

<script lang="ts" setup>
  const install = 'npm install paintbrush-ui'
  const basic1 = '<Paintbrush [...]>\n  <div>My awesome site</div>\n</Paintbrush>'
</script>
