<template>
  <div class="menubar-container">
    <nav>
      <div class="menubar-left">
        <slot name="menubar-left"></slot>
      </div>
      <div class="menubar-center">
        <slot name="menubar-center"></slot>
      </div>
      <div class="menubar-right">
        <slot name="menubar-right"></slot>
      </div>
    </nav>
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
  div.menubar-container {
    @include constants.reset;
    max-height: inherit;
    max-width: inherit;
    display: grid;
    grid-template-rows: 70px 1fr;
    grid-template-columns: 100%;
  }
  div.menubar-right {
    justify-self: end;
  }
  nav,
  main {
    background: constants.$background;
    display: grid;
    grid-template-rows: 100%;
  }
  nav {
    grid-template-columns: 1fr auto 1fr;
  }
  main {
    grid-template-columns: 1fr;
  }
  main > div {
    overflow-x: hidden;
    overflow-y: auto;
    max-height: 100vh;
  }
</style>
