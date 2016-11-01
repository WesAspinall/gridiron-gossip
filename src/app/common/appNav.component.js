var appNav = {

  templateUrl: './app-nav.html',
  controller: function() {
    this.appTitle = 'GridironGossip';
  }
  

};

angular
  .module('app')
  .component('appNav', appNav)