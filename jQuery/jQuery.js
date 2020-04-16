jQuery(document).ready(function () { 
    const nav = $('.nav');
    const open = $('.open');
    const close = $('.nav__close');

    var $card1 = $('#card__one');
    var $card2 = $('#card__two');
    var $card3 = $('#card__tree');

    let scrolling = $(window).scrollTop(750);

    nav.hide(0);

    open.click(function(){
        nav.slideDown(1000);
    });
    close.click(function() {
        nav.slideUp(800);
    });

    






});