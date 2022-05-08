<!--!
  @version 0.1.0
  @icon dots-six-vertical
  @category Chart
-->
<template>
  <Bubble :chart-data="data" :chart-options="options" />
</template>

<script lang="ts" setup>
  import { Bubble } from 'vue-chartjs'
  import { Chart, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  import type { BubbleDataPoint } from 'chart.js'
  import type { TChartData, TChartOptions } from 'vue-chartjs/dist/types'


  interface BubbleChartProps {
    data: TChartData<'bubble', BubbleDataPoint[], unknown>
    height?: string
    options: TChartOptions<'bubble'>
    width?: string
  }

  withDefaults(defineProps<BubbleChartProps>(), {
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
