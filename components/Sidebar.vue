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
  .sidebar-container {
    display: grid;
    grid-template-columns: 260px 1fr;
    grid-template-rows: 100%;
    height: 100%;
    row-gap: calc(2 * var(--unit));
    width: 100%;
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
  }

  aside {
    grid-template-rows: 1fr auto 1fr;
  }

  main {
    background: var(--background-2);
    grid-template-rows: 1fr;
  }

  aside > div, main > div {
    padding: 8px;
  }

  main > div {
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>
