/**
 * Created by Nathan on 2016/4/30.
 */
$(function(){
    $("#dowebok").fullpage({
        anchors: ["page1","page2","page3","page4"],
        navigation: true,
        css3: true,
        resize: true,
        scrollingSpeed:400,
        afterRender:function(){
            $('.home_name').find('p').delay(500).fadeIn(2000);
        },
        afterLoad:function(anchorLink,index){
            if(index==2){
                $("#about_content").delay(200).animate({
                    bottom:"0",
                    opacity:"1"
                },1500,"easeOutExpo");
            }
            if(index==3){
                $('.skill_container').fadeIn(2000);
                $(".skill_container img").animate({
                    width:"175px",
                    height:"175px"
                },1000);
            }
        },
        onLeave:function(index,nextIndex,direction){
            if(index ==2 ){
                $("#about_content").delay(100).animate({
                    bottom:"-120%",
                    opacity:"0"
                });

            }
            if(index ==3){
                $('.skill_container').fadeOut();
                $(".skill_container img").animate({
                    width:"0",
                    height:"0"
                });
            }
        }
        
    });

});

$(".about_info img").mouseenter(function(){
    $(this).css({
        cursor:"pointer",
        boxShadow:"0 0 20px rgba(0,0,255,0.5)"
    })
})
$(".about_info img").mouseleave(function(){
    $(this).css({
        boxShadow:"none"
    })
})










$(".skill_container img").click(function(){
    $(".skill_detail").each(function(){
        if($(this).is(":visible")){
            $(this).slideUp(400);
        }
    })

    if($(this).siblings(".skill_detail").is(":hidden")){
        $(this).siblings(".skill_detail").slideDown(400);
    }else{
        $(this).siblings(".skill_detail").slideUp(400);
    }
})

$(".skill_container img").mouseenter(function(){
    $(this).animate({
        width:"165px",
        height:"165px"
    })
})
$(".skill_container img").mouseleave(function(){
    $(this).animate({
        width:"175px",
        height:"175px"
    })
})



$(".skill_container img").mousedown(function(){
    $(this).animate({
        width:"162px",
        height:"162px"
    })
})

$(".skill_container img").mouseup(function(){
    $(this).animate({
        width:"165px",
        height:"165px"
    })
})

$(".demo_brank").click(function(){
    alert("正在添加中。。。");
})
