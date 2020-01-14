$("document").ready(function(){
    var $indi = $(".indicator ul li");
    $indi.eq(0).addClass("active");
    $(window).scroll(function(){
        var pos = $(window).scrollTop();
        console.log(pos)
        if(pos >= 300){$(".indicator").fadeIn();}else{$(".indicator").fadeOut();}
        if(pos >= 2050){$indi.removeClass("active").eq(3).addClass("active");}
        else if(pos >= 2000){$indi.removeClass("active").eq(2).addClass("active");}
        else if(pos >= 1000){$indi.removeClass("active").eq(1).addClass("active");}
        else{$indi.removeClass("active").eq(0).addClass("active");}
    })
})