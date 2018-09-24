$(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var foodInput = $("input#food").val();
    var musicInput = $("input#music").val();
    var ageInput = $("input#age").val();
    var birthdayInput = $("#birthday").val();//from here down, it isn't working when trying to make it appear.
    var favColorInput = $("#favColor").val();
    var beverageInput = $("#beverage").val();
    var snackInput = $("input:radio[name=snack]:checked").val();

    $(".name").text(nameInput);
    $(".age").text(ageInput);
    $(".music").text(musicInput);
    $(".food").text(foodInput);
    $(".birthday").text(birthdayInput);//same as top. has to do with either/or
    $(".favColor").text(favColorInput);
    $(".beverage").text(beverageInput);
    $(".snack").text(snackInput);

    $("#reply").show();
  });
});
