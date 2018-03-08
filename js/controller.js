angular.module('RouteControllers', [])
    
    .controller('myCtrl', function($scope) {
  
		console.log('in controller'); // logs that connection to controller is active
  			
        
    // displays modal window if form is valid
      $scope.myFunc = function () {
				if ($scope.bookingForm.$valid){

					// $(".book-flight-btn").addClass(".book-flight-btn-valid");
					$(".modal-thing").addClass("look-at-me");
					console.log("in myFunc");
					
  			}
			  }	
      // hides modal window when clicked
 			$scope.myOtherFunc = function () {
				$(".modal-thing").removeClass("look-at-me");
				console.log("in myOtherFunc");
			}

      // enhances submit button, then reverts it to greyed out
        $scope.isFormValid = function(){
          console.log("something happened");

          if ($scope.bookingForm.$valid){
            console.log("more something happened");
            $(".book-flight-btn").css("opacity", "1");
          } else {
            $(".book-flight-btn").css("opacity", "0.4");
          }
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
});