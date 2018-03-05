angular.module('RouteControllers', [])
    
    .controller('myCtrl', function($scope) {
  
		console.log('in controller'); // logs that connection to controller is active
  			
        
      // $scope.bookingForm.date.$valid = False;

        $scope.myFunc = function () {
  				if ($scope.bookingForm.$valid){

  					$(".book-flight-btn").addClass(".book-flight-btn-valid");
  					$(".modal-thing").addClass("look-at-me");
  					console.log("in myFunc");
  					
    			}
 			  }	

 			$scope.myOtherFunc = function () {
				$(".modal-thing").removeClass("look-at-me");
				console.log("in myOtherFunc");
			}







      $scope.Days = [ { 'id':'Fri', 'date':'Friday 14th' },
                      { 'id':'Sat', 'date':'Saturday 15th' },
                      { 'id':'Sun', 'date':'Sunday 16th' }
                    ]

      $scope.FriTimes =  [ {'id':'frisix', 'time': '18:00'}, 
                           {'id':'friseven', 'time': '19:00'},
                           {'id':'frieight', 'time': '20:00'}, 
                           {'id':'frinine', 'time': '21:00'} 
                          ]


        $scope.submitForm = function() {
            if ($scope.bookingForm.$valid) {
             console.log("hooray!");
            }
          };




        // // If reset is clicked, all selects are shown
        // $("#reset").click(function() {
        //     // $("select-day").show();
        //     // $("select-time").show();
        //     // $(".flight-select-alert").hide();
        //     $("#reset").hide();
        //     console.log("reset clicked");
        // });

      
});
    	
   