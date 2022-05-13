<!--!
  @icon chart-pie
  @version 0.1.1
  @category Chart
-->

<template>
  <Pie :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Pie } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface PieChartProps {
    data: TChartData<'pie', number[], unknown>
    height?: string
    options?: TChartOptions<'pie'>
    width?: string
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
