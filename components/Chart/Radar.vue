<!--!
  @version 0.1.0
  @icon globe-hemisphere-west
-->
<template>
  <Radar :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Radar } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface RadarChartProps {
    data: TChartData<'radar', (number | null)[], unknown>
    height?: string
    options: TChartOptions<'radar'>
    width?: string
  }

  withDefaults(defineProps<RadarChartProps>(), {
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
