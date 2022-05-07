<!--!
  @version 0.1.0
  @icon chart-pie
-->
<template>
  <Doughnut :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Doughnut } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface DoughnutChartProps {
    data: TChartData<'doughnut', number[], unknown>
    height?: string
    options: TChartOptions<'doughnut'>
    width?: string
  }

  withDefaults(defineProps<DoughnutChartProps>(), {
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
