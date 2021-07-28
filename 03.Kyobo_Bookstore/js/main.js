<!---햄버거버튼 --->

        $(function() {

            $(".a").click(function() {

                $(".navbox").stop().slideToggle("fast");

            });

        });


        $(window).resize(function() {

            if (window.innerWidth <= 1099) {

                $('.navbox').hide();
            }

            if (window.innerWidth > 1100) {

                $('.navbox').show();
            }
        });

    


    <!---슬라이더 스크립트 --->

        $(function() {
            var i = 0;



            function slide() {

                i++;

                if (i > $('.slide li:last').index()) {

                    i = 0;

                }

                $('.slide li').eq(i).stop().fadeIn('slow');

                $('.slide li').eq(i - 1).stop().fadeOut();

            }



            setInterval(slide, 3000);

        });

  