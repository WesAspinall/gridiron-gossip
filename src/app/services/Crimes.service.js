function CrimesService($http, API) {

  this.getCrimes = function() {
    return $http
      .get(API.CRIMES+'?limit=1').then((res) => {
        return res.data;
      });
  };

  this.getPlayers = function() {
    return $http
      .get(API.CRIMES+'/topPlayers/DUI').then((res) => {
        return res.data;
      });
  }

}


angular
  .module('services')
  .service('CrimesService', CrimesService);