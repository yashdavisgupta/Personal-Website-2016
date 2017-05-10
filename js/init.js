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
  $('.materialboxed').materialbox();
  $('.button-collapse').sideNav('hide');
  $('.scrollspy').scrollSpy();
  var scrollOffset = 1;
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
$(window).scroll(function() {
    var top_of_element = $("#skills").offset().top;
    var bottom_of_element = $("#skills").offset().top + $("#skills").outerHeight();
    var bottom_of_screen = $(window).scrollTop() + $(window).height();
    var top_of_screen = $(window).scrollTop();

    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
      jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
          width:jQuery(this).attr('data-percent')
        },6000);
      });
    }
    else {
        // The element is not visible, do something else
    }
});

$(document).ready(function(){
  $('.slider').slider();
});

$('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'masonry',
});
