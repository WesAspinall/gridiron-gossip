var crimesChart = {

  bindings: {
    data: '<',
    options: '<'
  },

  templateUrl: './crimes-chart.html'
};

angular
  .module('components.charts')
  .component('crimesChart', crimesChart)
  ;