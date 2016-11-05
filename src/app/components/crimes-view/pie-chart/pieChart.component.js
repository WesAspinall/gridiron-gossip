var pieChart = {

  templateUrl: './pie-chart.html',
  controller: 'PieChartCtrl'
};

angular
  .module('components.crimes')
  .component('pieChart', pieChart)
  ;
