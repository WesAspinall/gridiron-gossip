var topCrimes = {
  templateUrl: './top-crimes.html',
  controller: 'TopCrimesCtrl'
}

angular
  .module('components.crimes')
  .component('topCrimes', topCrimes)
  .config(function($stateProvider) {

    $stateProvider
      .state('top-crimes', {
        parent:'app',
        url: 'top-crimes',
        component: 'topCrimes'
      })
  })
  ;