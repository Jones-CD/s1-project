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

      $scope.FriTimes =  [ {'id':'six', 'time': '18:00'},  
                          {'id':'seven', 'time': '19:00'} ]
                        
  			
      // $scope.FriTimes = ["06.30", "07.30", "08.30"]
 
      // $scope.SatTimes = ["06.30", "07.30", "08.30", "19.30", "20.00", "20.30", "21.00"]
      
      // $scope.SunTimes = ["06.30", "07.00", "07.30", "08.00", "08.30"]

      // If Friday is clicked, hide all days, show reset, show 'alert'
        $(".FriTime").click(function() {
            // $("#Fri").hide();
            $("#Sat").hide();
            $("#Sun").hide();
            $("#reset").show();
            $("#Fri-alert").show();
            console.log("Fri clicked");
        });

      //   // If Saturday is clicked, hide all days, show reset, show 'alert'
      //   $(".SatTime").click(function() {
      //       $("#Fri").hide();
      //       $("#Sun").hide();
      //       $("#Sat").hide();
      //       $("#reset").show();
      //       $("#Sat-alert").show();
      //       console.log("Sat clicked");
      //   });

      //   // If Sunday is clicked, hide all days, show reset, show 'alert'
      //   $(".SunTime").click(function() {
      //       $("#Fri").hide();
      //       $("#Sat").hide();
      //       $("#Sun").hide();
      //       $("#reset").show();
      //       $("#Sun-alert").show();
      //       console.log("Sun clicked");
      //   });

        // If reset is clicked, all days are shown
        $("#reset").click(function() {
            $("#Fri").show();
            $("#Sat").show();
            $("#Sun").show();
            $(".flight-select-alert").hide();
            $("#reset").hide();
            console.log("reset clicked");
        });

      
});
    	
   