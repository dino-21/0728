$(function(){

        $(".slide li:first").css("opacity",1);

     $(".dot li:first").css("background", "#fff");



     $(".dot li").click(function(){

      var $index = $(this).index();

      slide($index);

      /*$(".slide li").css("opacity", 0);

      $(".slide li").eq($index).css("opacity", 1);

      $(".dot li").css("background", "#93071c");

      $(this).css("background", "#fff"); */

     });



     setInterval("show()", 2000);

     var cnt = 0;



     function show(){ 

          cnt++; 



          if( cnt < $(".slide li").length ) { 

                slide(cnt);

       } else {

             cnt=0; 

             slide(cnt);

       }

     }



        function slide(cnt){

            $(".slide li").css("opacity", 0);

            $(".slide li").eq(cnt).css("opacity", 1);

            $(".dot li").css("background", "gold");

            $(".dot li").eq(cnt).css("background", "#111");

        }

});