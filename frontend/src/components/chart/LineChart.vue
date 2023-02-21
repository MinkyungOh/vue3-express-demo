<template>
  <div>가나다</div>
</template>

<script>

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {

  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March' ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [40, 20, 12]
          },
          {
            label: 'Data Two',
            backgroundColor: '#e2e3e1',
            data: [78, 10, 36]
          },
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  },
}
</script>

<style>

</style>