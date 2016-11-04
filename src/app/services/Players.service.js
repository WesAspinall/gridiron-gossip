function PlayersService($http, API) {

  this.getPlayers = function() {
    return $http
      .get(API.PLAYERS).then((res) => {
        return res.data;
      });
  };

}


angular
  .module('services')
  .service('PlayersService', PlayersService);