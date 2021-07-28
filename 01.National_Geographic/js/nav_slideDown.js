$(function(){
    function slide(){
        $(".main li").mouseover(function(){
            $(".sub li").stop().slideDown("slow");
        }).mouseout(function(){
            $(".sub li").stop().slideUp();
        });
    }
});