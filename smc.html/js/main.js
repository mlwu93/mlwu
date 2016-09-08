$(document).ready(function(){
    var minHeight = $(window).height()-120;
    $('.content').css('min-height',minHeight);
    $('.banner_center').click(function (){
        window.location = 'business.html';
    });
    $('.banner_right').click(function (){
        window.location = 'SSaaS.html';
    });
});
