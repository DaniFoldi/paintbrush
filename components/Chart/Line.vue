<!--!
  @icon chart-line
  @version 0.1.1
  @category Chart
-->

<template>
  <Line :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Line } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface LineChartProps {
    data: TChartData<'line', (number | ScatterDataPoint | null)[], unknown>
    height?: string
    options: TChartOptions<'line'>
    width?: string
  }

  withDefaults(defineProps<LineChartProps>(), {
    height: 'auto',
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
