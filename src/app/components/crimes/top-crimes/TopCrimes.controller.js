function TopCrimesCtrl (CrimesService, API) {

  var ctrl = this;
  ctrl.list = '';
  ctrl.getTopCrimes = getTopCrimes;
  ctrl.activate = activate;

  activate();

  function activate() {
    getTopCrimes();
  }

  function getTopCrimes() {

    CrimesService.getTopCrimes().then((res) => {
       ctrl.list = res;
       console.log(ctrl.list);
       return ctrl.list;
    });
        
 
  }
}

angular
  .module('components.crimes')
  .controller('TopCrimesCtrl', TopCrimesCtrl)
  ;