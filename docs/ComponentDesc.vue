<template>
  <Title>{{ neme }}</Title>
  <Text>{{ desc }}</Text>
  <TagGroup>
    <Tag v-for="tags" :key="tag" :tag="tag"></Tag>
  </TagGroup>
  <Text italic>Version: {{ version }}</Text>
  <CodeView :code="usage" />
  <Divider />
  <Subtitle>Properties</Subtitle>
  <Text v-for="properties" :key="property">{{ property }}</Text>
  <Divider />
  <Subtitle>Examples</Subtitle>
  <CodeView v-for="examples" :key="example" :code="example" />
</template>
<script>
  import Divider from 'basic/Divider.vue'
  import Subtitle from 'basic/Subtitle.vue'
  import Tag from 'basic/Tag.vue'
  import Text from 'basic/Text.vue'
  import Title from 'basic/Title.vue'
  import CodeView from 'decorate/CodeView.vue'
  import TagGroup from 'groups/TagGroup.vue'
  export default {
    name: 'ComponentDesc',
    components: {
      Title,
      Text,
      Tag,
      TagGroup,
      Divider,
      Subtitle,
      CodeView
    },
    props: {
      name: { type: String, default: 'Component' },
      desc: { type: String, default: 'Component description' },
      tags: { type: Array, default: ['tag1', 'tag2'] },
      version: { type: String, default: '1.0.0' },
      usage: { type: String, default: '<Component />' },
      properties: { type: Array, default: ['prop1', 'prop2'] },
      examples: { type: Array, default: ['<Component />', '<Component />'] }
    }
  }
</script>
<style lang="scss" scoped></style>
