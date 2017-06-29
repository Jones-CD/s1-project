angular.module('myBBFApp', [])
    
    .controller('BookingController', function($scope) 
 
        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
                alert("Thank you for booking your balloon flight. We'll contact you shortly with everything you'll need to know.");
            }
    });