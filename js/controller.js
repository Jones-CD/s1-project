angular.module('myBBFApp', [])
    
    .controller('bookingController', function($scope) 
 
        $scope.submitForm = function(){
            if ($scope.bookingForm.$valid) {
                alert("Thank you for booking your balloon flight. We'll contact you shortly with everything you'll need to know.")
            }
    });