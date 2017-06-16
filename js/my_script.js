$(document).ready(function(){






// --------CAROUSEL ------------------------------------------------------------

$('.carousel').carousel({
  interval: 5000
});

// --------- FLIGHT BOOKING DATE/TIME SELECTION -------------------------------------------

$(".dateSelect").click(function(e) {

      var selectedDate = $(this).html();
      $("#dropdownMenu1").html(selectedDate);

      if (selectedDate === "Friday 12 Aug") {
        $("#time6").html("17:00");
        $("#time8").html("18:00");
        $("#time10").html("19:00");
        $("#time4").html("20:00");
      }

      if (selectedDate === "Saturday 13 Aug") {
        $("#time1").html("06:00");
        $("#time2").html("06.30");
        $("#time3").html("07:00");
        $("#time4").html("07:30");
      }

      if (selectedDate === "Sunday 14 Aug") {
        $("#time1").html("06:00");
        $("#time2").html("06.30");
        $("#time3").html("07:00");
        $("#time4").html("07:30");
      }

  });
$(".timeSelect").click(function(e) {
      var selectedTime = $(this).html();
      $("#dropdownMenu2").html(selectedTime);
});




  });//closing tags for "document ready