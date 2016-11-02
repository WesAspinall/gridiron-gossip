var app = {

  templateUrl: './app.html',
  controller: 'AppCtrl'

};

angular
  .module('app')
  .component('app', app)
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        redirectTo: 'landing',
        url: '/app',
        component: 'app'
      });
  });