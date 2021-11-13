<template>
  <Paintbrush>
    <Sidebar>
      <template #sidebar-top>
        <PaintbrushTitle />
      </template>
      <template #sidebar-middle>
        <SidebarEntry v-bind:reload="false" color="blue" href="/" icon="gear-six" label="Setup" />
        <SidebarEntry v-bind:reload="false" color="purple" href="/components" icon="cube" label="Components" />
        <SidebarEntry v-bind:reload="false" color="orange" href="/examples" icon="brackets-curly" label="Examples" />
      </template>
      <template #sidebar-bottom>
        <PoweredBy />
      </template>
      <template #content>
        <router-view />
      </template>
    </Sidebar>
  </Paintbrush>
</template>

<script>
  import Paintbrush from 'paintbrush/Paintbrush.vue'
  import PaintbrushTitle from 'paintbrush/PaintbrushTitle.vue'
  import PoweredBy from 'paintbrush/PoweredBy.vue'
  import Sidebar from 'skeleton/Sidebar.vue'
  import SidebarEntry from 'skeleton/SidebarEntry.vue'
  export default {
    components: {
      Paintbrush,
      PoweredBy,
      Sidebar,
      PoweredBy,
      PaintbrushTitle,
      SidebarEntry
    }
  }
</script>

<style lang="scss" scoped></style>
