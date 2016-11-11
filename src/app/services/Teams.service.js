let TeamsService = function($http, API) {

  this.getTeams = function() {
    return $http
      .get(API.TEAMS).then((res) => {
        return res.data;
      });
  };

  this.getCrimes = function(params) {
    return $http
      .get('//NflArrest.com/api/v1/team/topCrimes/' + params).then((res) => {
        return res.data;
      });
  }

  this.getPlayers = function(params) {
    return $http
      .get('//NflArrest.com/api/v1/team/topPlayers/' + params).then((res) => {
        return res.data;
      });
  }

  this.getDetails = function(params) {
    return $http
      .get('//NflArrest.com/api/v1/team/arrests/'+ params).then((res) => {
        return res.data;
      });
  };
};

angular
  .module('services')
  .service('TeamsService', TeamsService);