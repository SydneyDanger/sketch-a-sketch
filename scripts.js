$(document).ready(function(){
  $("#case").on("click", function(){
    $(this).animate({top: "30px"}, 50);
    $(this).animate({top: "50px"}, 50);
    $(this).animate({top: "30px"}, 50);
    $(this).animate({top: "50px"}, 50);
    $("#case .pixel").removeClass('black').addClass('white');
  });
  for(var x = 0; x < 9600; x++) {
    var unit = $("<div class='white pixel'></div>");
    unit.appendTo('#screen');
  }
  $(".pixel").on("mouseenter", function(){
    $(this).removeClass('white').addClass('black');
  });
});
