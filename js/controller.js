//Define an angular module for our app
var sampleApp = angular.module('sampleApp', ['RouteControllers']);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.

    when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	}).
      when('/AddNewOrder', {
		templateUrl: 'templates/add_order.html',
		controller: 'AddOrderController'
	}).
      when('/accounts/register', {
		templateUrl: 'templates/register.html',
		controller: 'RegisterController'
      }).
      otherwise({
		redirectTo: '/AddNewOrder'
      });
}]);


