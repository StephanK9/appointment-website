$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();
    var dateInput = $("input#date").val();
    var starttimeInput = $("input#starttime").val();
    var endtimeInput = $("input#endtime").val();


    $(".personname").text(personnameInput);
    $(".date").text(dateInput);
    $(".starttime").text(starttimeInput);
    $(".endtime").text(endtimeInput);


    $("#bookinginfo").show();
    alert("Thank you for scheduling your appointment with us, your requested time has been saved. Have a great day!");


    event.preventDefault();
  });
});
