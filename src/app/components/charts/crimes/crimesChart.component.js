var crimesChart = {
  templateUrl: './crimes-chart.html',
  controller: 'CrimesChartCtrl'
};

angular
  .module('components.charts')
  .component('crimesChart', crimesChart)
  ;