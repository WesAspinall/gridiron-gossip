function PlayersService($http, API) {

  var URL = 'http://nflarrest.com/api/v1/player/arrests/'
  this.getPlayers = function() {
    return $http
      .get(API.PLAYERS).then((res) => {
        return res.data;
      });
  };

  this.getDetails = function(params) {
    return $http
      .get(URL+params)
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
  };
}


angular
  .module('services')
  .service('PlayersService', PlayersService);