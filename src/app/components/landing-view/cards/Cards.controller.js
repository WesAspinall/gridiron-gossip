var CardsCtrl = function(CrimesService, PlayersService, PositionsService, TeamsService) {
  var ctrl = this;
  ctrl.activate = activate;
  ctrl.getPlayers = getPlayers;
  ctrl.getCrimes = getCrimes;
  ctrl.getTeams = getTeams;
  ctrl.getPositions = getPositions;

  activate();

  function activate() {
    getCrimes();
    getPlayers();
    getTeams();
    getPositions();
  }

  function getCrimes() {
    CrimesService.getCrimes().then((res) => {

      ctrl.cards[0].data = res;
      return ctrl.cards[0].data;
    });
  }

  function getPlayers() {
    PlayersService.getPlayers().then((res) => {

      ctrl.cards[1].data = res;
      return ctrl.cards[1].data
    });
  }
  
  function getPositions() {
    PositionsService.getPositions().then((res) => {

      ctrl.cards[2].data = res;
      return ctrl.cards[3].data;
    });
  }

  function getTeams() {
    TeamsService.getTeams().then((res) => {

      ctrl.cards[3].data = res;
      return ctrl.cards[2].data;
    });
  }


  ctrl.cards = [{
    title: 'Top Crimes',
    link: 'crimes',
    data: []
  }, {
    title: 'Top Players',
    link: 'players',
    data: []
  }, {
    title: 'Top Positions',
    link: 'positions',
    data: []
  }, {
    title: 'Top Teams',
    link: 'teams',
    data: []
  }];



};

angular
  .module('components.landing')
  .controller('CardsCtrl', CardsCtrl);