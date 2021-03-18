// show sub-selection

$(document).ready(function(){
    if (jQuery(window).width() > 768) {
        $('.opr1').hover(function(event){
            $('.desc-opr1').css("bottom", "50px");
            $('.desc-opr1').css("color", "black");
        }, function(){
            $('.desc-opr1').css("bottom", "0");
            $('.desc-opr1').css("color", "transparent");
        });

        $('.opr2').hover(function(event){
            $('.desc-opr2').css("bottom", "50px");
            $('.desc-opr2').css("color", "black");
        }, function(){
            $('.desc-opr2').css("bottom", "0");
            $('.desc-opr2').css("color", "transparent");
        });

        $('.opr3').hover(function(event){
            $('.desc-opr3').css("bottom", "50px");
            $('.desc-opr3').css("color", "black");
        }, function(){
            $('.desc-opr3').css("bottom", "0");
            $('.desc-opr3').css("color", "transparent");
        });

        $('.opr4').hover(function(event){
            $('.desc-opr4').css("bottom", "50px");
            $('.desc-opr4').css("color", "black");
        }, function(){
            $('.desc-opr4').css("bottom", "0");
            $('.desc-opr4').css("color", "transparent");
        });
    }
});