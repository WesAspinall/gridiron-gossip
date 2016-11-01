function TopPositionsCtrl (PositionsService, API) {

  var ctrl = this;
  ctrl.list = '';
  ctrl.getTopPositions = getTopPositions;
  ctrl.activate = activate;

  activate();

  function activate() {
    getTopPositions();
  }

  function getTopPositions() {
    PositionsService.getTopPositions().then((res) => {
       ctrl.list = res;
       console.log(ctrl.list);
       return ctrl.list;
    });
  }

}

angular
  .module('components.positions')
  .controller('TopPositionsCtrl', TopPositionsCtrl)
  ;