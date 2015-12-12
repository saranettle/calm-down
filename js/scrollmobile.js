$(document).ready(function() {


    $(window).scroll( function(){


        $('.text').each( function(i){

            var bottom_text = $(this).offset().top + $(this).outerHeight();
            var bottom_window = $(window).scrollTop() + $(window).height();


            if( bottom_window > bottom_text ){

                $(this).animate({'opacity':'1'}, 2000);

            }




        });

    });

  });
