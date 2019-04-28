var currentSlide = 1;
var $slider = $(".slides");
var slideCount = $slider.children().length;
var slideTime = 2000;
var animationTime = 800;


setInterval(funcion() {
    $slider.animate({
        marginLeft : '-=900px'
    } , animationTime , funcion() {
        currentslide++;
        if(currentSlide === slideCount) {
            currentSlide = 1;
            $(this).css("margin-left" , "0px")
        }
    });
} , slideTime);


$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
