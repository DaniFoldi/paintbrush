<!--!
  @name SidebarContainer
  @version 1.0.0
-->
<template>
  <div class="sidebar-container">
    <aside>
      <div class="sidebar-top">
        <slot name="sidebar-top" />
      </div>
      <div class="sidebar-middle">
        <slot name="sidebar-middle" />
      </div>
      <div class="sidebar-bottom">
        <slot name="sidebar-bottom" />
      </div>
    </aside>
    <main>
      <div>
        <slot name="content" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '../assets/mixins';

.sidebar-container {
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: 100%;
  row-gap: calc(2 * var(--unit));
  @include mixins.full-size;
}

div.sidebar-top, div.sidebar-middle, div.sidebar-bottom {
  display: grid;
  row-gap: calc(2 * var(--unit));
}

.sidebar-bottom {
  align-self: end;
}

aside, main {
  display: grid;
  grid-template-columns: 100%;
  @include mixins.with-fade;
}

aside {
  grid-template-rows: 1fr auto 1fr;
}

main {
  background: var(--background-2);
  grid-template-rows: 1fr;
}

aside > div, main > div {
  @include mixins.double-unit-padding;
}

main > div {
  max-height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
