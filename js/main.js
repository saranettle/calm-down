$(document).ready(function() {

  if ( $(window).width() > 550) {
    //Add your javascript for large screens here
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

  }
  else {
    //Add your javascript for small screens here
  }





///Plant time

var count = 0

    $('#plantButton').click(function() {

        count++;


    if(count === 1) {
     $('#plant').attr('src', 'images/plant-02.gif');
    } else if (count === 2) {
        $('#plant').attr('src', 'images/plant-03.gif');
    } else if (count === 3) {
        $('#plant').attr('src', 'images/plant-04.gif');
    } else if (count >= 4) {
        $('#plant').attr('src', 'images/plant-05.gif');
    }

    });




    //rock garden time

    var draw = false;

$('#rockGarden').mousedown(function(){ draw = true; });


$('#rockGarden').mousemove(function(e) {
  if(draw == true) {
    pointer = $('<span>').css({
      'position':'absolute',
      'background-color':'#D79A69',
      'width':'10px',
      'height':'10px',
      top: e.pageY ,
      left: e.pageX
    });

    $(document.body).append(pointer);
  }
});

});
