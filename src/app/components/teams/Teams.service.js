let TeamsService = function($http, API) {

  this.getTopTeams = function() {
    return $http
      .get(API.TEAMS).then((res) => {
        return res.data;
      });
  };

};

angular
  .module('components.teams')
  .service('TeamsService', TeamsService);