function AppSidebarCtrl() {
  var ctrl = this;

  ctrl.contactTags = [{
    label: 'Top Players',
    icon: 'star',
    state: 'top-players'
  }, {
    label: 'Top Crimes',
    icon: 'people',
    state: 'top-crimes'
  }, {
    label: 'Top Positions',
    icon: 'child_care',
    state: 'family'
  }, {
    label: 'Teams',
    icon: 'accessibility',
    state: 'acquaintances'
  }, {
    label: 'Following',
    icon: 'remove_red_eye',
    state: 'following'
  }];
  
}

angular
  .module('app')
  .controller('AppSidebarCtrl', AppSidebarCtrl);