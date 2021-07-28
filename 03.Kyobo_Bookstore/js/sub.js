
       // 메인 책 이미지 스크립트


$(function(){
    $(".menu1").mouseover(function(){
        
        $(".sub").stop().slideDown();
    }).mouseout(function(){
        $(".sub").stop().slideUp();
    });
});




      $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query:"코미디" },
        headers:{Authorization: "KakaoAK 8588617ee9bafa6574e5f3e4b7a3c8c8"}
      })
        .done(function( msg ) {

            console.log( msg.documents[1].title );
            console.log( msg.documents[1].thumbnail );
  



             // sub1


            $(".namebox").append("<h3>"+'<a href="sub.html">'+msg.documents[0].title+'</a>'+"</h3>");


            $(".sub_box").append("<img src='"+msg.documents[0].thumbnail+"'/>");
            
            $(".aa").append("<h6>"+msg.documents[0].authors[0]+"</h6>");

            $(".b").append(msg.documents[0].price+"원");

            var str=msg.documents[0].contents;
            var str2=str.substring(0,240);

            $(".textbox").append("<p>"+str2+"</p>");

            $(".textbox").append("<span>"+"자세히보기"+"</span>");  





        });



       
      //메모장으로 sub 텍스트 가져오기, 서버에 올려야 보임

      $(function(){

        $.get("./sub_txt/txt1.txt", function(data) {

          $("#tmpBox").html(data);

        })     



     });










// 슬라이드 책 이미지 스크립트

       $.ajax({
                method: "GET",
                url: "https://dapi.kakao.com/v3/search/book?target=title",
                data: {
                    query: "열정"
                },
                headers: {
                    Authorization: "KakaoAK 8588617ee9bafa6574e5f3e4b7a3c8c8"
                }
            })
            .done(function(msg) {
                console.log(msg.documents[1].title);
                console.log(msg.documents[1].thumbnail);
                var divs = document.getElementsByTagName('div');
                for (var i = 0; i < divs.length; i++) {
                    $(".bbok").eq(i).append('<a href="sub2.html">' + "<img src='" + msg.documents[i].thumbnail + "'/>" + "</a>");
                    $(".bbok").eq(i).append("<h3>" + '<a href="sub2.html">' + msg.documents[i].title + "</a>" + "</h3>");
                    
                }
            });


 $(function(){
         function prev() {
            $('.slide li:last').prependTo('.slide');
            $('.slide').stop().css({
                marginLeft: 0
            });
        }

        function next() {
            $('.slide li:first').appendTo('.slide');
            $('.slide').stop().css({
                marginLeft: 0
            });
        }

        $('.prev').click(function() {
            prev();
        });

        $('.next').click(function() {
            next();
        });


});









