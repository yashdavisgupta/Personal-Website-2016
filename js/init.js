(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(window).scroll(function(){
    $(".bottom-banner").css("opacity", 1 - $(window).scrollTop() / 1000);
  });

$('.side-nav-inner').on('click', 'a', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('.side-nav__content .tab').removeClass('active').hide();
    $('.side-nav__content ' + target).fadeIn('fast').addClass('active');
})

$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  var scrollOffset = 1; 
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 700 && document.getElementById("nav").className != "center topmenu z-depth-5") {
        $("#navigation").appendTo("#nav-container-2");
        document.getElementById("nav").className += " topmenu z-depth-5";
    } else if (y <= 700) {
        $("#navigation").appendTo("#nav-container");
        document.getElementById("nav").className = "center";
    }
});
