$(document).ready(() =>{

  // toggle a class to navbar on scrolling
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 80);
  });

  // Change main img depending on Screen size
  let hero_img = $(".hero-img img");
    if($(window).width() > 992){
      hero_img.attr("src", "./assets/images/image-web-3-desktop.jpg");
    } else {
      hero_img.attr("src", "./assets/images/image-web-3-mobile.jpg");
    }
  $(window).resize(() => {
    if($(window).width() > 992){
      hero_img.attr("src", "./assets/images/image-web-3-desktop.jpg");
    } else {
      hero_img.attr("src", "./assets/images/image-web-3-mobile.jpg");
    }
  })

  let menu_toggler = $(".fa-solid")
  menu_toggler.click(() => {
    if(menu_toggler.hasClass("fa-bars")){
      menu_toggler.toggleClass("fa-bars fa-x");
      if($(".fixed-top").hasClass("scrolled")){
        return
      } else {
        $(".fixed-top").addClass("scrolled")
      }
    } else {
      menu_toggler.toggleClass("fa-x fa-bars");
      if($(".fixed-top").hasClass("scrolled")){
        return
      }
    }
  });

  // WOW Animation
  wow = new WOW(
    {
    boxClass:     'animate__animated',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  });
  wow.init();
});