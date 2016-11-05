var crimes = {
  templateUrl: './crimes.html',
  controller: 'CrimesCtrl'
};

angular
  .module('components.crimes')
  .component('crimes', crimes)
  .config(function($stateProvider) {

    $stateProvider
      .state('crimes', {
        parent:'app',
        url: '^/crimes',
        component: 'crimes'
      });
  });