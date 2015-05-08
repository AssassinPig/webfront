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

    $(document).keydown( function(event){
        if(scrolling)
            return;

        //up
        if ( event.which == 38 || event.which == 33) {
            event.preventDefault();
            if(prev_page == 0) 
                return;
            $('.right_bar_list li div').eq(prev_page-1).click();
        }

        if ( event.which == 40 || event.which == 34) {
            event.preventDefault();

            if(prev_page == 3) 
                return;
            $('.right_bar_list li div').eq(prev_page+1).click();
        }
    });

    $(document).scroll(function(){
        if(scrolling)
            return;

        var now_y = $('body').scrollTop();
        var to_page = parseInt(now_y/1000 + 0.6);
        //console.log(to_page);

        if(to_page<4) {
            $('.right_bar_list li div').eq(to_page).click();    
        }
    });




});
