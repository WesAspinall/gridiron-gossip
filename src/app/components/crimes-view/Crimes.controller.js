var CrimesCtrl = function() {
  var ctrl = this;

  ctrl.activate = activate;
  activate();


  function activate() {

  }

};


angular
  .module('components.crimes')
  .controller('CrimesCtrl', CrimesCtrl);