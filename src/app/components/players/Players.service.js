function PlayersService($http, API) {

  this.getTopPlayers = function() {
    return $http
      .get(API.PLAYERS).then((res) => {
        return res.data;
      });
  };

}


angular
  .module('components.crimes')
  .service('PlayersService', PlayersService);