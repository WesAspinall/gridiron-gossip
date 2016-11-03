var appNav = {

  templateUrl: './app-nav.html',
  controller: function() {
    this.appTitle = 'hello';
  }
};

angular
  .module('app')
  .component('appNav', appNav)
  ;