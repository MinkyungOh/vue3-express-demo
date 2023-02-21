<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <BarChart />
      </div>
      <div class="col-6">
        <LineChart />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/chart/BarChart.vue';
import LineChart from '@/components/chart/LineChart.vue';

export default {
  components: {
    BarChart,
    LineChart
  }
}
</script>

<style>

</style>