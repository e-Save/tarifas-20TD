$(window).ready(function() {
  var show_collapse = true;
  $('.navbar-toggler').on('click', function(event){
    if (show_collapse){
      $('.collapse').addClass('show');
      show_collapse = false;
    }else{
      $('.collapse').removeClass('show');
      show_collapse = true;
    };
  });
});

