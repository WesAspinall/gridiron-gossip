var topTeams = {
  templateUrl: './top-teams.html',
  controller: 'TopTeamsCtrl'
};

angular
  .module('components.teams')
  .component('topTeams', topTeams)
  .config(function($stateProvider) {

    $stateProvider
      .state('top-teams', {
        parent:'app',
        url: 'top-teams',
        component: 'topTeams'
      });
  })
  ;