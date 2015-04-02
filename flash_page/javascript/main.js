$(document).ready(function(){

    var scrolling = 0;
    var prev_page = 0;
    $('.right_bar_list li div').css('top', '-11px');
    $('.right_bar_list li div').eq(0).css('top', '0px');
    $('.right_bar_list li div').each(function(i, elem){
        elem.onclick = function(){
            var now = $('.right_bar_list li div').index($(this));
            if (prev_page == now)
                return;
            $('.right_bar_list li div').css('top', '-11px');
            $('.right_bar_list li div').eq(now).css('top', '0px');

            scrolling = 1;
            var delta = now*1000 + 'px';
            prev_page = now;

            $('html,body').animate({
                scrollTop : delta
            }, 500, function(){
                scrolling = 0;
            });
        }
    });


    $(document).scroll(function(){
        if(scrolling)
            return;

        var elem = $('#main_ul li').children(':first-child').eq(0);
        var doc_scroll = $(document).scrollTop();
        //console.log(doc_scroll/1000);
        var next_page = doc_scroll/1000 + 0.5;
        var page = parseInt(doc_scroll/1000);

        $('.right_bar_list li div').css('top', '-11px');
        $('.right_bar_list li div').eq(page).css('top', '0px');
    });

});
