function TopTeamsCtrl(TeamsService) {

  var ctrl = this;
  ctrl.list = '';
  ctrl.getTopTeams = getTopTeams;
  ctrl.activate = activate;

  activate();

  function activate() {
    getTopTeams();
  }

  function getTopTeams() {
    TeamsService.getTopTeams().then((res) => {
      ctrl.list = res;
      console.log(ctrl.list);
      return ctrl.list;
    });
  }

}

angular
  .module('components.teams')
  .controller('TopTeamsCtrl', TopTeamsCtrl);