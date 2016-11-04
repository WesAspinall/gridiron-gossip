let TeamsService = function($http, API) {

  this.getTeams = function() {
    return $http
      .get(API.TEAMS).then((res) => {
        return res.data;
      });
  };

};

angular
  .module('services')
  .service('TeamsService', TeamsService);