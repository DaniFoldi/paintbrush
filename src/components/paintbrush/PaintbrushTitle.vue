<template>
  <div>
    <PaintbrushLogo />
    <!-- TODO find more rounded font -->
    <Title>Paintbrush</Title>
  </div>
</template>

<script>
  import Title from '../basic/Title.vue'
  import PaintbrushLogo from './PaintbrushLogo.vue'
  export default {
    name: 'PaintbrushTitle',
    components: {
      PaintbrushLogo,
      Title
    }
  }
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';

  div {
    @include constants.reset;
    display: grid;
    grid-template: '. logo title .' auto / 1fr auto auto 1fr;
    column-gap: constants.$base-size;
    align-items: center;

    & > img {
      grid-area: logo;
    }

    & > h1 {
      grid-area: title;
    }
  }
</style>
