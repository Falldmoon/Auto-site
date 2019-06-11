
jQuery(window).scroll(function() {
    let scroll_picca =jQuery('.tariffs-wrapper').offset().top;
    if (jQuery(this).scrollTop() > scroll_picca) {
      $('.tops-wrapper')[0].style.display = 'block'
    }
    else{

    } 
});
jQuery(window).scroll(function() {
    let scroll_picca =jQuery('.top-check').offset().top;
    if (jQuery(this).scrollTop() >= 0 && jQuery(this).scrollTop() <= 240) {
      $('.tops-wrapper')[0].style.display = 'none'
    }
    else{

    } 
});  