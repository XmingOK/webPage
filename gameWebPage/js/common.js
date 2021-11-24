$(function(){
    $(".iconHeadNav").click(function(){
        $(".headNav").show();
        $(".headNav").addClass("animated fadeInUpBig").removeClass("fadeOutDownBig");
    });
    $(".headNavClose .iconClose").click(function(){
        $(".headNav").addClass("animated fadeOutDownBig").removeClass("fadeInUpBig");
    });
});
$(window).scroll(function () {
    if ($(window).scrollTop() > $(".headWrap").height()) {
        $(".headWrap").addClass("headBg");
    } else {
        $(".headWrap").removeClass("headBg");
    }
});