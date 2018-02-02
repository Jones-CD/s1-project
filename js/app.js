//Define an angular module for our app

angular.module('myBBFApp', ['ngRoute', 'RouteControllers']);
 
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
        templateUrl: 'templates/bookFlight.html', 
        controller: 'myCtrl'
    })
    .when('/accessibility', {
        templateUrl: 'templates/accessibility.html', 
    })
    .when('/reserve', {
        templateUrl: 'templates/reserve.html', 
    })
    .when('/purchase', {
        templateUrl: 'templates/purchase.html', 
    })
    .when('/parking', {
        templateUrl: 'templates/parking.html', 
    })
    .when('/directions', {
        templateUrl: 'templates/directions.html', 
    })
    .when('/master', {
        templateUrl: 'templates/newMaster.html', 
    })
   
    // .when('/test', {
    //     templateUrl: 'templates/submit_test_test.html',
    //     controller: 'myCtrl' 
    // })

});