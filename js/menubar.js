$(function (){
  let oldScrollTop = 0

  $(window).scroll(function () {

    let scrollTop = $(window).scrollTop();
    let delta = scrollTop - oldScrollTop;

    if (delta < 0) {
      $('.menu-outer').removeClass("menu-hidden");
      $('.content-aside').css('top', '60px')
      if (scrollTop <= 0) {
        $('.menu-outer').removeClass("color");
      }
    } else if (delta > 0) {
      $('.menu-outer').addClass("menu-hidden color");
      $('.content-aside').css('top', '0')
    }

    oldScrollTop = scrollTop;
  })
})
