var card = {
  templateUrl: './card.html',
  require:  {
    cards: '^^cards'
  },
  controller: function() {
    this.cards = [{
    title: 'Top Crimes',
    link: 'crimes',
    data: []
  }, {
    title: 'Top Players',
    link: 'players',
    data: []
  }, {
    title: 'Top Teams',
    link: 'teams',
    data: []
  }, {
    title: 'Top Positions',
    link: 'positions',
    data: []
  }];



  }
};

angular
  .module('components.landing')
  .component('card', card)
  ;