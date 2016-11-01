var topPlayers = {
  templateUrl: './top-players.html',
  controller: 'TopPlayersCtrl'
}

angular
  .module('components.players')
  .component('topPlayers', topPlayers)
  .config(function($stateProvider) {

    $stateProvider
      .state('top-players', {
        parent:'app',
        url: 'top-players',
        component: 'topPlayers'
      })
  })
  ;