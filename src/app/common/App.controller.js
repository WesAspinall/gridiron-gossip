let AppCtrl = function() {
  var ctrl = this;
  ctrl.appTitle = 'illegalmotion.com';
};

angular
  .module('app')
  .controller('AppCtrl', AppCtrl);