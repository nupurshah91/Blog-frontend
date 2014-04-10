/**
 * Created by Advie on 4/1/14.
 */

$(document).ready(function(){
        SetFontSize();

        $( window ).on('resize',function() {
            SetFontSize();
        });

        var offset = 200;
        var duration = 500;
        $(window).scroll(function() {

            if ( $(this).scrollTop() > 300 && !$('header').hasClass('open') )
            {
                $('header').addClass('open');
                $('header').slideDown();
            }
            else if ( $(this).scrollTop() <= 300 )
            {
                $('header').removeClass('open');
                $('header').slideUp();
            }


            if ($(this).scrollTop() > offset) {
                $('#up-icon').fadeIn(duration);
            } else {
                $('#up-icon').fadeOut(duration);
            }
        });

        $('#up-icon').click(function(event) {
            event.preventDefault();
            $('html, body').animate({scrollTop: 0}, duration);
            return false;
        });

});

function SetFontSize(){
    setTimeout(function(){
        var h=$(".card-block").height();
        console.log(h);
        $("#ad-height").height(h-6);

        var w=$(".card-block").width();
        console.log(w);

        if(w>=500 && w<=650)
        {
            t=(w*0.25/2)+(h*0.25/2);
            $('.title').css('font-size',t+'%');

            sd=(w*0.2/2)+(h*0.2/2);
            $('.short-desc').css('font-size',sd+'%');

            a=(w*0.15/2)+(h*0.15/2);
            $('.analytics').css('font-size',a+'%');
        }

        else{
            t=(w*0.3/2)+(h*0.3/2);
            $('.title').css('font-size',t+'%');

            sd=(w*0.24/2)+(h*0.24/2);
            $('.short-desc').css('font-size',sd+'%');

            a=(w*0.18/2)+(h*0.18/2);
            $('.analytics').css('font-size',a+'%');
        }

    }, 200);
}
