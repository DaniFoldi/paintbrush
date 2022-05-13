<!--!
  @version 0.1.1
  @icon chart-pie-slice
  @category Chart
-->

<template>
  <PolarArea :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { PolarArea } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface PolarChartProps {
    data: TChartData<'polarArea', number[], unknown>
    height?: string
    options?: TChartOptions<'polarArea'>
    width?: string
  }

  withDefaults(defineProps<PolarChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
