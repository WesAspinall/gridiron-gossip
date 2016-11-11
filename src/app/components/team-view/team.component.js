var team = {

  bindings: {
    topPlayers: '<',
    topCrimes: '<',
    crimeDetails: '<',
    team: '<'
  },

  templateUrl: './team.html'

};

angular
  .module('components.team')
  .component('team', team)
  .config(function($stateProvider) {

    $stateProvider
      .state('team', {
        parent: 'app',
        url: '^/team/:teamID',
        component: 'team',
        params: {
          teamID: null
        },
        resolve: {

          team: function($transition$) {
            var team = $transition$.params().teamID;
            return team;
          },

          topPlayers: function(TeamsService, $transition$) {
            var params = $transition$.params().teamID;
            return TeamsService.getPlayers(params);
          },

          topCrimes: function(TeamsService, $transition$) {
            var params = $transition$.params().teamID;
            return TeamsService.getCrimes(params);
          },

          crimeDetails: function(TeamsService, $transition$) {
            var params = $transition$.params().teamID;
            return TeamsService.getDetails(params);
          }

        }
      });
  });