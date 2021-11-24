$(function () {
    //pc导航
    $(".navItem").mouseover(function () {
        $(this).children("ul").slideDown();
    });
    $(".navItem").mouseleave(function () {
        $(this).children("ul").stop().slideUp();
    });
    //手机导航
    $(".headNavIcon").click(function () {
        $(".headNavCont").addClass("active");
    });
    $(".headNavClose , .headNavMask").click(function () {
        $(".headNavCont").removeClass("active");
    });
    $(".headNavMenu ul li i").click(function(){
        if($(this).siblings(".headNavSub").is(':hidden')){
            $(this).addClass("active");
            $(this).siblings(".headNavSub").slideDown();
        }else{
            $(this).siblings(".headNavSub").slideUp();
            $(this).removeClass("active");
        }
        $(this).parent("li").siblings().children(".headNavSub").slideUp();
        $(this).parent("li").siblings().children("i.active").removeClass("active");
    });
    //手机搜索
    $(".phoneSearchIcon").click(function(){
        if($(".phoneSearch").is(":hidden")){
            $(this).addClass("active");
            $(".phoneSearch").slideDown();
            $(".phoneSearch .phoneSearchInner").focus();
        }else{
            $(this).removeClass("active");
            $(".phoneSearch").slideUp();
            $(".phoneSearch .phoneSearchInner").val("");
        }
    });
    //返回顶部
    $("#backTop").click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
        return false;
    });
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 450) {
        $("#backTop").fadeIn();
    }
    else {
        $("#backTop").fadeOut();
    }
});

//Tab选项卡
var tabBox = function (titleItems, contentItems) {
    var $ti = $(titleItems);
    var $ci = $(contentItems);
    var index = 0;
    var prev = $(".prev"),
        next = $(".next");
    var len = $ti.size();
    //初始化按钮索引
    prev.data("index", len - 1);
    next.data("index", 0);
    $ti.each(function (i) {
        $(this).click(function () {
            index = i;
            $(this).addClass("on").siblings().removeClass("on");
            prev.data("index", (i - 1) < 0 ? i - 1 : len - 1);
            next.data("index", (i + 1) < len ? i + 1 : 0);
            $ti.eq(i).addClass("on").siblings().removeClass("on");
            $ci.eq(i).show().siblings().hide();
            return false;
        });
    });
    $ti.eq(index).click();
};
