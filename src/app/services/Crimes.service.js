function CrimesService($http, API) {

  this.getCrimes = function() {
    return $http
      .get(API.CRIMES).then((res) => {
        return res.data;
      });
  };

  this.getIncidents = function() {
    return $http
      .get(API.CRIMES+'/topPlayers/DUI').then((res) => {
        return res.data;
      });
  }

}


angular
  .module('services')
  .service('CrimesService', CrimesService);