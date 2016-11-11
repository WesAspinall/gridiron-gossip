function timelineParser() {
  return {
    restrict: 'EA',
    scope: {},
    require: 'ngModel',
    link: function($scope, $element, $attrs, $ctrl) {
      var ngModelCtrl = $ctrl;

      $element.on('change', (event) => {
        ngModelCtrl.$setViewValue(event.target.innerHTML);
      });

      ngModelCtrl.$render = function() {
        $element.html(ngModelCtrl.$modelValue);
      }

      ngModelCtrl.$setViewValue($element[0].innerHTML);
    }
  }
};

angular
  .module('components.landing')
  .directive('timelineParser', timelineParser);