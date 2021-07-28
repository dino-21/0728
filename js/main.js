 <!----네비버튼----->

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
    <script>
        var nav = $("#dot ul li");
        var contents = $("#contents > div");

        nav.click(function(e) {
            e.preventDefault();
            var target = $(this);
            var index = target.index();
            var section = contents.eq(index);
            var offset = section.offset().top;

            $("html,body").animate({
                scrollTop: offset
            }, 600, "easeInOutExpo");
        });


        $(window).scroll(function() {
            var wScroll = $(this).scrollTop();

            if (wScroll >= contents.eq(0).offset().top) {
                nav.removeClass("active");
                nav.eq(0).addClass("active");
            }
            if (wScroll >= contents.eq(1).offset().top) {
                nav.removeClass("active");
                nav.eq(1).addClass("active");
            }
            if (wScroll >= contents.eq(2).offset().top) {
                nav.removeClass("active");
                nav.eq(2).addClass("active");
            }
            if (wScroll >= contents.eq(3).offset().top) {
                nav.removeClass("active");
                nav.eq(3).addClass("active");
            }
            if (wScroll >= contents.eq(4).offset().top) {
                nav.removeClass("active");
                nav.eq(4).addClass("active");
            }
            if (wScroll >= contents.eq(5).offset().top) {
                nav.removeClass("active");
                nav.eq(5).addClass("active");
            }
        });
    </script>








    <!---파티클스크립트----->
    <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
    <script>
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 64,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 2.5,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 25,
                    "color": "#ffffff",
                    "opacity": 0.42,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2.5,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "bounce",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 100,
                        "size": 5,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });
        var count_particles, stats, update;
        stats = new Stats;
        stats.setMode(0);
        stats.domElement.style.position = 'absolute';
        stats.domElement.style.left = '0px';
        stats.domElement.style.top = '0px';
        document.body.appendChild(stats.domElement);
        count_particles = document.querySelector('.js-count-particles');
        update = function() {
            stats.begin();
            stats.end();
            if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
            }
            requestAnimationFrame(update);
        };
        requestAnimationFrame(update);;
    </script>
    <script type="text/javascript">
        new fullpage("#fullpage", {
            sectionsColor: [],
            verticalCentered: false,
            scrollBar: true,
            anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
            menu: '#menu',
        });
    </script>










    <script>
        var typingBool = false;
        var typingIdx = 0;
        var liIndex = 0;
        var liLength = $(".typing-txt>ul>li").length;

        // 타이핑될 텍스트를 가져온다 
        var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();
        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        if (typingBool == false) { // 타이핑이 진행되지 않았다면 
            typingBool = true;
            var tyInt = setInterval(typing, 100); // 반복동작 
        }

        function typing() {
            if (typingIdx < typingTxt.length) { // 타이핑될 텍스트 길이만큼 반복 
                $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
                typingIdx++;
            } else { //한문장이끝나면
                //다음문장으로.. 마지막문장이면 다시 첫번째 문장으로 
                if (liIndex >= liLength - 1) {
                    liIndex = 0;
                } else {
                    liIndex++;
                }

                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing-txt>ul>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                setTimeout(function() {
                    $(".typing").html('');
                    tyInt = setInterval(typing, 100);
                }, 1000);
            }
        }
    </script>




    <!----메일,전화,인스타 픽스---->
    <script>
        $(function() {
            $("#nav1 .a").mouseover(function() {
                $("#nav1 .a p").stop().fadeIn("slow");
            }).mouseout(function() {
                $("#nav1 .a p").stop().fadeOut();
            });
        });

        $(function() {
            $("#nav1 .b").mouseover(function() {
                $("#nav1 .b p").stop().fadeIn("slow");
            }).mouseout(function() {
                $("#nav1 .b p").stop().fadeOut();
            });
        });

        $(function() {
            $("#nav1 .c").mouseover(function() {
                $("#nav1 .c p").stop().fadeIn("slow");
            }).mouseout(function() {
                $("#nav1 .c p").stop().fadeOut();
            });
        });
    </script>


    <!--포폴슬라이드---->
    <script>
        function slide() {
            $('.slide').stop().animate({
                marginTop: -600
            }, function() {
                $('.slide li:first').appendTo('.slide');
                $('.slide').css({
                    marginTop: 0
                });
            });
        }
        setInterval(slide, 2000);
    </script>
    
        <!--3번째꺼---->
    <script>
        function slide() {
            $('.slide2').stop().animate({
                marginTop: -600
            }, function() {
                $('.slide2 li:first').appendTo('.slide2');
                $('.slide2').css({
                    marginTop: 0
                });
            });
        }
        setInterval(slide, 2000);
    </script>
    
    
    <!--4번째꺼-->
    <script>
        function slide() {
            $('.slide1').stop().animate({
                marginTop: -600
            }, function() {
                $('.slide1 li:first').appendTo('.slide1');
                $('.slide1').css({
                    marginTop: 0
                });
            });
        }
        setInterval(slide, 2000);
    </script>

<!------모바일슬라이드------->
    <script>
        $(function() {
            $('#sec2box .mobile').mouseenter(function() {

                $('#sec2box .mobile > .mobilepage > img').stop().animate({
                    marginTop: "-4820px"
                }, 8000);

            }).mouseleave(function() {

                $('#sec2box .mobile > .mobilepage > img').stop().animate({
                    margin: '0'
                }, 2000);


            });
        });
    </script>
