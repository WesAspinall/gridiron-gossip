var crimes = {
  templateUrl: './crimes.html'
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