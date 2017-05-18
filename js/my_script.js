$(document).ready(function(){

	//$("nav ul li").click(function(){  
	//	$("nav ul li").addClass( "highlight-nav");
 	//});
 	$("#menu-icons").bind("click touchstart", function() {  //reveals menu, hides menu-icons
 		$("nav").slideDown(1000);
 		$("#menu-icons").hide();
 	}); // closing tags menu reveal click


 	//$("nav ul li").bind("click touchstart", function() {
 		//$(this).addClass("highlight-nav");  //adds highlight to li
 		//$("nav ul li".("highlight-nav").removeClass("highlight-nav");
	//}); // closing tags menu item highlight click

 	$("nav li.drop").bind("click touchstart", function() {   //reveals sub-menu items
 		$(this).children().slideDown(1000);
 	
	});

 	$("nav ul li").click(function(){  // on navbar----------------------------------------
     	
    	$(this).addClass("highlight-nav");
    	$("nav ul li").removeClass("highlight-nav");
    	
    });

//-----------------WHAT'S ON PAGE --------------------------------//

 	$(".panel-heading").click(function() {   //trying to get 'down arrow' to disappear
 	      $(this.downArrow).hide();  
                        // and be replaced by 'up arrow'
	});




// --------CAROUSEL ------------------------------------------------------------

$('.carousel').carousel({
  interval: 5000
});








  });//closing tags for "document ready