<!--!
  @version 0.1.0
  @icon dots-nine
-->

<template>
  <Scatter :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Scatter } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { ScatterDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface ScatterChartProps {
    data: TChartData<'scatter', (number | ScatterDataPoint | null)[], unknown>
    height?: string
    options: TChartOptions<'scatter'>
    width?: string
  }

  withDefaults(defineProps<ScatterChartProps>(), {
    height: 'auto',
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
