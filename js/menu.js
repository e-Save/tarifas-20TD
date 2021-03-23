$(window).ready(function() {
  var show_collapse = true;
  console.log(show_collapse)
  $('.navbar-toggler').on('click', function(){
    console.log(show_collapse)
    if (show_collapse){
      $('.collapse').addClass('show');
      show_collapse = false;
    }else{
      $('.collapse').removeClass('show');
      show_collapse = true;
    };
  });
});

