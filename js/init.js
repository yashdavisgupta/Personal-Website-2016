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
    if (y > document.getElementById("nav").position.top && document.getElementById("nav").className != "center topmenu z-depth-5") {
        $("#navigation").appendTo("#nav-container-2");
        document.getElementById("nav").className += " topmenu z-depth-5";
    } else {
        $("#navigation").appendTo("#nav-container");
        document.getElementById("nav").className = "center";
    }
});

$(document).ready(function(){
  $('.materialboxed').materialbox();
});

// Initialize collapse button
$(".button-collapse").sideNav();
// Initialize collapsible (uncomment the line below if you use the dropdown variation)
//$('.collapsible').collapsible();

$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
  }
);

// Show sideNav
$('.button-collapse').sideNav('show');
// Hide sideNav
$('.button-collapse').sideNav('hide');
// Destroy sideNav
$('.button-collapse').sideNav('destroy');
