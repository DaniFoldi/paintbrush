<!--!
  @icon chart-bar
  @version 0.1.0
-->
<template>
  <Bar :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Bar } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface BarChartProps {
    data: TChartData<'bar', number[], unknown>
    height?: string
    options: TChartOptions<'bar'>
    width?: string
  }

  withDefaults(defineProps<BarChartProps>(), {
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
