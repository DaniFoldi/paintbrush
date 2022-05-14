<!--!
  @icon chart-pie
  @version 0.1.1
  @category Chart
  @note For the height property to work, set { maintainAspectRatio: false } in options
  @require vue-chartjs
-->

<template>
  <Pie :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Pie } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface PieChartProps {
    data: TChartData<'pie', number[], unknown> // chart data to render
    height?: string // height of chart
    options?: TChartOptions<'pie'> // options for chart
    width?: string // width of chart
  }

  withDefaults(defineProps<PieChartProps>(), {
    height: 'auto',
    options: () => ({}),
    width: 'auto'
  })


  Chart.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
</script>

<style lang="scss" scoped>
  div {
    height: v-bind(height);
    position: relative;
    width: v-bind(width);
  }
</style>
