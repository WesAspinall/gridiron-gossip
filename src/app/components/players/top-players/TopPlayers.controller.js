function TopPlayersCtrl (PlayersService, API) {

  var ctrl = this;
  ctrl.list = '';
  ctrl.getTopPlayers = getTopPlayers;
  ctrl.activate = activate;

  activate();

  function activate() {
    getTopPlayers();
  }

  function getTopPlayers() {
    PlayersService.getTopPlayers().then((res) => {
       ctrl.list = res;
       console.log(ctrl.list);
       return ctrl.list;
    });
  }

}

angular
  .module('components.players')
  .controller('TopPlayersCtrl', TopPlayersCtrl)
  ;