<template>
  <div class="sidebar-container">
    <aside>
      <div class="sidebar-top">
        <slot name="sidebar-top"></slot>
      </div>
      <div class="sidebar-middle">
        <slot name="sidebar-middle"></slot>
      </div>
      <div class="sidebar-bottom">
        <slot name="sidebar-bottom"></slot>
      </div>
    </aside>
    <main>
      <div>
        <slot name="content"></slot>
      </div>
    </main>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  @use '../../scss/constants';
  div.sidebar-container {
    @include constants.reset;
    max-height: inherit;
    max-width: inherit;
    display: grid;
    grid-template-columns: 280px 1fr;
    grid-template-rows: 100%;
  }
  div.sidebar-bottom {
    align-self: end;
  }
  aside,
  main {
    background: constants.$background;
    display: grid;
    grid-template-columns: 100%;
  }
  aside {
    background: constants.$background-second;
    grid-template-rows: 1fr auto 1fr;
  }
  main {
    grid-template-rows: 1fr;
  }
  main > div {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
  }
</style>
