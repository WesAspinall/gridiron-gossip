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
    state: 'top-positions'
  }, {
    label: 'Teams',
    icon: 'accessibility',
    state: 'top-teams'
  }];
  
}

angular
  .module('app')
  .controller('AppSidebarCtrl', AppSidebarCtrl);