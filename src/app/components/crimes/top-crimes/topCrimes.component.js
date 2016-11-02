var topCrimes = {
  templateUrl: './top-crimes.html',
  controller: 'TopCrimesCtrl'
};

angular
  .module('components.crimes')
  .component('topCrimes', topCrimes)
  ;