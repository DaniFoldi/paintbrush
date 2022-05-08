<!--!
  @icon chart-pie
  @version 0.1.0
  @category Chart
-->

<template>
  <Pie :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Pie } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface PieChartProps {
    data: TChartData<'pie', number[], unknown>
    height?: string
    options: TChartOptions<'pie'>
    width?: string
  }

  withDefaults(defineProps<PieChartProps>(), {
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
