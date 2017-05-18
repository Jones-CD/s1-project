//Define an angular module for our app

angular.module('myBBFApp', ['ngRoute']);
 
angular.module('myBBFApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/welcome', {
        templateUrl: 'templates/welcome.html'
    })
    .when('/whatsOn', {
    	templateUrl: 'templates/whatsOn.html'
    })
    .when('/bookFlight', {
        templateUrl: 'templates/bookFlight.html'
    });
});