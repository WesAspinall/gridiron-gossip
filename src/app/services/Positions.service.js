function PositionsService($http, API) {

  this.getPositions = function() {
    return $http
      .get(API.POSITIONS).then((res) => {
        return res.data;
      });
  };

}


angular
  .module('services')
  .service('PositionsService', PositionsService);