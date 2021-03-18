$(document).ready(function() {
  // detect scroll top or down
  $(window).on('scroll', function() {
      scroll_top = $(this).scrollTop();
      if(scroll_top < last_scroll_top) {
          $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
      }
      else {
          $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
      };
      last_scroll_top = scroll_top;
  });
  var show_collapse = true;
  $('.navbar-toggler').on('click', function(event){
    if (show_collapse){
      $('.collapse').addClass('show');
      $('.navbar').addClass('opaque_bg');
      show_collapse = false;
    }else{
      $('.collapse').removeClass('show');
      $('.navbar').removeClass('opaque_bg')
      show_collapse = true;
    };
  });
});
