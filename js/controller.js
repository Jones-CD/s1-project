angular.module('RouteControllers', [])
    
    .controller('myCtrl', function($scope) {
  
		console.log('in controller'); // logs that connection to controller is active
  			$scope.myFunc = function () {
  				if ($scope.bookingForm.$valid){

  					$(".book-flight-btn").addClass(".book-flight-btn-valid");
  					$(".modal-thing").addClass("look-at-me");
  					console.log(" in myFunc");
  					
    			}
 			}	
 			$scope.myOtherFunc = function () {
				$(".modal-thing").removeClass("look-at-me");
				console.log(" in myOtherFunc");
			}
  			
	});
    	
   