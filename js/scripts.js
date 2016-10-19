$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var personnameInput = $("input#personname").val();


    $(".personname").text(personnameInput);


    $("#bookinginfo").show();


    event.preventDefault();
  });
});
