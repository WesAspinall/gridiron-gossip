function PositionsService($http, API) {

  this.getTopPositions = function() {
    return $http
      .get(API.POSITIONS).then((res) => {
        return res.data;
      });
  };

}


angular
  .module('components.positions')
  .service('PositionsService', PositionsService);