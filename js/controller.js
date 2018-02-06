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
  			
      $scope.FriTimes = ["06.30", "07.30", "08.30"]
 
      $scope.SatTimes = ["06.30", "07.30", "08.30", "19.30", "20.00", "20.30", "21.00"]
      
      $scope.SunTimes = ["06.30", "07.00", "07.30", "08.00", "08.30"]

      

      // This is my attempt to hide the (one to start with) alternate select fields once one has been chosen
      $scope.pickFlightFunc = function () {
        if ($scope.selectedTime.$valid) {
            $(".sT1").addClass(".sT2-hide");

        }
      }

	});
    	
   