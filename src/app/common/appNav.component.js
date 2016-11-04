var appNav = {
  templateUrl: './app-nav.html',
  controller: function() {
    this.appTitle = 'illegalmotion.com';
  }
};

angular
  .module('app')
  .component('appNav', appNav)
  ;