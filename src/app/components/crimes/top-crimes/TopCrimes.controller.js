function TopCrimesCtrl(CrimesService) {

  var ctrl = this;
  ctrl.crimes = '';
  ctrl.list = [];

  ctrl.getTopCrimes = getTopCrimes;
  ctrl.activate = activate;

  activate();

  function activate() {
    getTopCrimes();
  }

  function getTopCrimes() {
    CrimesService.getTopCrimes().then((res) => {
    ctrl.crimes = res;
    return res;
    }).then((list) =>{
      var total = 0;
      for (var i = 0; i < list.length; i++) {
        if(i < 7) {
          ctrl.list.push({crime: list[i].Category, label: list[i].Category, value: list[i].arrest_count});
        } else {
          // total += list[i].arrest_count;
          // console.log(total);
          total += parseInt(list[i].arrest_count);
        }
      };

      ctrl.list.push({label: 'other', value: total});

    });
  }

  ctrl.options = {
    chart: {
      type: 'pieChart',
      height: 500,
      x: function(d) {
        return d.label;
      },
      y: function(d) {
        return d.value;
      },
      showLabels: true,
      duration: 500,
      radioButtonMode: true,
      labelType: 'percent',
      labelThreshold: 0.01,
      legend: {
        margin: {
          top: 5,
          right: 35,
          bottom: 5,
          left: 0
        }
      }
    }
  };

}

angular
  .module('components.crimes')
  .controller('TopCrimesCtrl', TopCrimesCtrl);