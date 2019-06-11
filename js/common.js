$(document).ready(function () {
  $(".tariffs-wrapper").hide().eq($(".tab-wrapper .tab").index()).fadeIn()
	$('.header-mmenu').on('click', function() {
		let menu = $('.menu')[0]
  		$(menu).toggleClass('menu-active')
  		if(menu.classList.contains('menu-active')){
  			$('.dark-window')[0].style.opacity = '0.6'
  			$('.dark-window')[0].style.zIndex = '9999'
  			$('.menu-panel')[0].style.transform = 'translateX(0px)';
  		}
  		else{
  			$('.dark-window')[0].style.opacity = '0'
  			$('.dark-window')[0].style.zIndex = '-9999'
  			$('.menu-panel')[0].style.transform = 'translateX(-999px)';
  		}
	});
  $('.price-btn').on('click', function() {
    $('.car-form')[0].style.opacity = '1'
    $('.car-form')[0].style.zIndex = '9999999'
    return false;
  })
  $('.form-exit').on('click', function() {
    $('.car-form')[0].style.opacity = '0'
    $('.car-form')[0].style.zIndex = '-9999999'
    return false;
  })
  $('.exit-form').on('click', function(){
    $('.car-form')[0].style.opacity = '0'
    $('.car-form')[0].style.zIndex = '-9999999'
    return false;
  })
  $(".tab-wrapper .tab").click(function() {
      $(".tab-wrapper .tab").removeClass("tab-active").eq($(this).index()).addClass("tab-active");
      $(".tariffs-wrapper").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("tab-active");
  $('.car-navbar').slick({
    vertical: true,
    slidesToShow: 3,
    asNavFor: '.car-slider',
    focusOnSelect: true
  })
 $('.input-phone').mask('+7 (999) 99-99-999')
  $('.car-slider').slick({
    slidesToShow: 1,
    swipe: false,
    responsive: [{
       breakpoint: 767.98,
       settings: {
          dots: true,
          swipe: true
       }
    }],
  })
  
});
