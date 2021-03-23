
var show_collapse = true;
function show_menu(){
  if (show_collapse){
    $('.collapse').addClass('show');
    show_collapse = false;
  }else{
    $('.collapse').removeClass('show');
    show_collapse = true;
  };
};

