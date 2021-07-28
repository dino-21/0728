//교보문고

        $(function() {
            $('#slidewrap .slide').mouseenter(function() {

                $('#slidewrap .slide li img').stop().animate({
                    marginTop: "-1840px"
                }, 5000);

            }).mouseleave(function() {

                $('#slidewrap .slide li img').stop().animate({
                    margin: '0'
                }, 3000);


            });
        });



//3
        function slide() {
            $('.slide3').stop().animate({
                marginTop: -600
            }, function() {
                $('.slide3 li:first').appendTo('.slide3');
                $('.slide3').css({
                    marginTop: 0
                });
            });
        }
        setInterval(slide, 2000);



//4
        function slide() {
            $('.slide4').stop().animate({
                marginTop: -600
            }, function() {
                $('.slide4 li:first').appendTo('.slide4');
                $('.slide4').css({
                    marginTop: 0
                });
            });
        }
        setInterval(slide, 3000);


   //5
    
        $(function() {
            $('#slidewrap5 .slide5').mouseenter(function() {

                $('#slidewrap5 .slide5 li  img').stop().animate({
                    marginTop: "-1750px"
                }, 5000);

            }).mouseleave(function() {

                $('#slidewrap5 .slide5 li  img').stop().animate({
                    margin: '0'
                }, 3000);


            });
        });
   