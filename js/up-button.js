/* up button */

$(document).ready(function() {
    var mybutton = document.getElementById("upButton");
    $(window).on('scroll', function(event){
        var of = $("html").scrollTop();
        if (of > 20){
            mybutton.style.bottom = "50px";
        } else{
            mybutton.style.bottom = "-50px";
        }
    });
    $('.up-button').on('click', function(event){
        $("html, body").animate({
            scrollTop: $("html").offset().top 
        }, 1000);
    });
});
  