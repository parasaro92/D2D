var myApp = angular.module('myApp', ['ngResource','ngRoute']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    // .otherwise({
    //   redirectTo: '/'
    // });
});
