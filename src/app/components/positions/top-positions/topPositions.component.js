var topPositions = {
  templateUrl: './top-positions.html',
  controller: 'TopPositionsCtrl'
}

angular
  .module('components.positions')
  .component('topPositions', topPositions)
  .config(function($stateProvider) {

    $stateProvider
      .state('top-positions', {
        parent:'app',
        url: 'top-positions',
        component: 'topPositions'
      })
  })
  ;