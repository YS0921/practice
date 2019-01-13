
$(function(){
    var $win = $(window),
    $header = $('header'),
    animationClass = 'fixed',
    slider = $('.slider');

    $win.on('load scroll', function() {
        var value = $(this).scrollTop();
        if ( value > 100 ) {
          $header.addClass(animationClass);
        } else {
          $header.removeClass(animationClass);
        }
      });
    
    slider.slick({
        dots: true,
        autoplay: true,
        arrows: false
    });
});