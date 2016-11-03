var cards = {
  templateUrl: './cards.html',
  controller: 'CardsCtrl',
  transclude: true
};

angular
  .module('components.landing')
  .component('cards', cards)
  ;