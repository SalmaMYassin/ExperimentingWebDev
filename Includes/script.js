$( "li" ).hover(
  function() {
      $(this).find("#hover").stop().animate({
      width:"100%",
      opacity:"1",
    }, 350, function () {
    })
  }, function() {
      $(this).find("#hover").stop().animate({
      width:"0%",
      opacity:"0",
    }, 350, function () {
    })
  }
);