$( document ).ready(function() {
    var $menu = $('.menu')
    var $menuTrigger = $('.menu-trigger')
    var $menuClose = $('.action--menu-close')

    $menuClose.click(function() {
      $('.menu').removeClass('js-open');
      });
   $menuTrigger.mouseover(function() {
     $('.menu').addClass('js-open');
     });
});
    

