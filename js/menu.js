$(document).ready(function() {
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

