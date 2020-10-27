export default function scrollNavigation() {

  $("#sec-services").click(()=> {
    $('html, body').animate({
      scrollTop: $('#services').offset().top-112
    }, 1000);
    return false;
  });

  $("#sec-portfolio").click(()=> {
    $('html, body').animate({
      scrollTop: $('#portfolio').offset().top-70
    }, 1000);
    return false;
  });

  $("#sec-contact").click(()=> {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top-50
    }, 1000);
    return false;
  });

  $('#services').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-services").addClass("active");
  }, { offset: 101 });
  
  
  $('#portfolio').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-portfolio").addClass("active");
  }, { offset: 101 });
  
  $('#contact').waypoint(function() {
    $(".container ul li").children().removeClass("active");
    $("#sec-contact").addClass("active");
  }, { offset: 101 });
  
}
