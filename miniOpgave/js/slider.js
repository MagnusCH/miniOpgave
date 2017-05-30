$(function () {
    $('.fadein img:gt(0)').hide();
    setInterval(function () {
        $('.fadein img:first-child').fadeOut(2000).next('img').fadeIn(2000).end().appendTo('.fadein');
    }, 3000);
});