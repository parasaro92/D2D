
myApp.controller('MainCtrl', ['$scope', function($scope) {
	
	// $scope.name = "Task";
	// var vm = this;


}]);

myApp.directive('tab', function() {
  return {
    restrict: 'E',
    transclude: true,
    template: '<h2>Hello world!</h2> <div role="tabpanel" ng-show="active" ng-transclude></div>',
    require: '^tabset',
    scope: { 
      heading: '@'
    },
    link: function(scope, elem, attr, tabsetCtrl) {
      scope.active = false;
      tabsetCtrl.addTab(scope);
    }
  }
});

myApp.directive('tabset', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: { },
    templateUrl: 'views/tabset.html',
    bindToController: true,
    controllerAs: 'tabset',
    controller: function() {
      var vm = this
      vm.tabs = []

      vm.addTab = function addTab(tab){

        vm.tabs.push(tab);

        if(vm.tabs.length === 1){
          tab.active = true
        }
      }
    }
  }
});