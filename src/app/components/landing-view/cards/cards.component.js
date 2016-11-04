var cards = {
  templateUrl: './cards.html',
  controller: 'CardsCtrl'
};

angular
  .module('components.landing')
  .component('cards', cards)
  ;