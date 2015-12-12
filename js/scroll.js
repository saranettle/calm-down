$(window).scroll( function(){


    $('.text').each( function(){

        var bottom_text = $(this).offset().top + $(this).outerHeight();
        var bottom_window = $(window).scrollTop() + $(window).height();
        var top_text = $(this).offset().top;
        var top_window = $(window).scrollTop();

        var center_window = top_window+( bottom_window - top_window )/2;

        var window_height = $(window).height();

        var distanceFromCenter = Math.abs(bottom_text - center_window);
//check to see if this is even working
      console.log(distanceFromCenter/window_height);

      $(this).animate({'opacity':1-((2*distanceFromCenter)/window_height)},1);


    });

});
