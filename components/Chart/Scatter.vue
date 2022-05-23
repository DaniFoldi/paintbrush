<!--!
  @version 0.1.1
  @icon dots-nine
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
-->

<template>
  <Scatter :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Scatter } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface ScatterChartProps {
    data: TChartData<'scatter', (number | ScatterDataPoint | null)[], unknown> // chart data to render
    height?: string // height of chart
    options?: TChartOptions<'scatter'> // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<ScatterChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
