$(document).ready(function(){

    var now_pic = 0;

    function show() {

        var to = (now_pic+1)%4;
        var left_operation = '';
        var delta = to - now_pic;

        if( delta < 0) {
            left_operation = '+='+ ( -delta * 640) + 'px';
        }
        if (delta > 0) {
            left_operation = '-='+ ( delta * 640) + 'px';
        }

        //console.log(left_operation);
        now_pic = to;

        $('.nav_middle_bar ul').animate( {
                left: left_operation
            },
            500,
            function() {
                //console.log('complete');
            }
        );

    }

    setInterval(show,3000);

    $('.nav_middle_bar ul li').click( function(){
        //console.log($(this).filter(':first-child').text());

        $('.nav_middle_bar ul').animate({
                left: '-=640px'
            },
            500,
            function() {
                console.log('complete');
            }
        );
    });

    $('.tab_header ul li:first-child').addClass('tab_active');
    $('.tab_content').addClass('hidden');
    $('.tab_content:first-child').removeClass('hidden');
    $('.tab_content:first-child').addClass('display');

    $('.tab_header ul li').hover(function(){
            $(this).siblings().removeClass('tab_active');
            $(this).addClass('tab_active');
            var index = $('.tab_header ul li').index($(this));

            $('.tab_content').removeClass('display').addClass('hidden');
            $('.tab_content').eq(index).addClass('display').removeClass('hidden');
        }
    );

    $('.example_snapshot').hover(function(){
               $(this).children('img').animate({
                    top: '-=3px',
                    left: '-=3px',
                    height: "+=5px",
                    width: '+=3px'
                },
                500,
                function(){
            });
        },
        function(){
            $(this).children('img').animate({
                    top: '+=3px',
                    left: '+=3px',
                    height: "-=5px",
                    width: '-=3px'
                },
                500,
                function(){
                });
    });

});