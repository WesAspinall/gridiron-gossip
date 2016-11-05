var PieChartCtrl = function(CrimesService) {
  var ctrl = this;
  ctrl.data = '';
  ctrl.getData = getData;
  ctrl.activate = activate;
  activate();
  function activate () {
    getData();
  }


  function getData()  {
    CrimesService.getCrimes().then((res) => {
      ctrl.data = res;
      return ctrl.data;
    });
  }
  
  ctrl.options = {
    chart: {
      type: 'pieChart',
      height: 400,
      x: function(d) {
        return d.Category;
      },
      y: function(d) {
        return d.arrest_count;
      },
      showLabels: true,
      duration: 500,
      labelThreshold: 0.01,
      labelSunbeamLayout: true,
      showLegend: false,
      legend: {

        margin: {
          // top: 5,
          // right: 35,
          // bottom: 5,
          // left: 0
        },
      legendPosition: 'bottom'
      }
    }
  };

//   ctrl.data = [{
//     key: "One",
//     y: 5
//   }, {
//     key: "Two",
//     y: 2
//   }, {
//     key: "Three",
//     y: 9
//   }, {
//     key: "Four",
//     y: 7
//   }, {
//     key: "Five",
//     y: 4
//   }, {
//     key: "Six",
//     y: 3
//   }, {
//     key: "Seven",
//     y: .5
//   }];
};


angular
  .module('components.crimes')
  .controller('PieChartCtrl', PieChartCtrl );