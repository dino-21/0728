
        $(function() {

            $(".tab_inner").css({
                marginTop: 400
            });

            $(".tab_view").mouseover(function() {

                $(".tab_inner").stop().animate({
                    marginTop: 250
                });

            });

            $(".tab_view").mouseleave(function() {

                $(".tab_inner").stop().animate({
                    marginTop: 400
                });

            });



        });
