;$(function(){ //scroll down button
    var btnDown = $('.btn__down a');
    btnDown.on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('html, body').position().top +750
        }, 800);
    });
});