var TeamsListCtrl = function($state, TeamsService) {
  var ctrl = this;
  ctrl.teams = '';

  this.teamsPage = teamsPage;
  this.getTeams = getTeams;
  this.activate = activate;
  activate();

  function activate() {
    getTeams();
  }

  function getTeams() {
    TeamsService.getTeams().then((res) => {
      ctrl.teams = res;
      return ctrl.teams;
    });
  }


  function teamsPage(params) {
    $state.go('team', {
      teamID: params
    });

  }
  
};


angular
  .module('components.landing')
  .controller('TeamsListCtrl', TeamsListCtrl);