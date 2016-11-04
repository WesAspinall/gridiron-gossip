var landing = {
  templateUrl: './landing.html'
};

angular
  .module('components.landing')
  .component('landing', landing)
  .config(function($stateProvider) {

    $stateProvider
      .state('landing', {
        parent:'app',
        url: '^/',
        component: 'landing'
      });
  })
  ;