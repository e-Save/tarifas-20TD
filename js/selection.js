// show sub-selection

$(document).ready(function(){
    var selected = false
    $('.seleccion-1').on('click', function(event){
        var subSelection = document.getElementById("sub-selection-row")
        if (selected){
            subSelection.style.visibility = "hidden"
            subSelection.style.height = "0"
            selected = false
        }else{
            subSelection.style.visibility = "visible"
            subSelection.style.height = "auto"
            selected = true
            var c = $(window).width();
            if (c < 756){
                $("html, body").animate({
                    scrollTop: $("#sub-selection-row").offset().top 
                }, 1000);
            }
            
        }
        
    });

    $('.logo').on('click', function(event){
        $("html, body").animate({
            scrollTop: $("html").offset().top 
        }, 1000);
    });

    $('.seleccion-11').on('click', function(event){
        $("html, body").animate({
            scrollTop: $("#seleccionable11").offset().top 
        }, 1000);
    });

    $('.seleccion-12').on('click', function(event){
        $("html, body").animate({
            scrollTop: $("#seleccionable12").offset().top 
        }, 1000);
    });

    $('.seleccion-2').on('click', function(event){
        $("html, body").animate({
            scrollTop: $("#seleccionable2").offset().top 
        }, 1000);
    });

});