 $(function() {
            var i = 0;



            function slide() {

                i++;

                if (i > $('.slide1 li:last').index()) {

                    i = 0;

                }

                $('.slide1 li').eq(i).stop().fadeIn('slow');

                $('.slide1 li').eq(i - 1).stop().fadeOut();

            }



            setInterval(slide, 3000);

        });