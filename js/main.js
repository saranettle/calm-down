$(document).ready(function() {


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


///Plant time

var count = 0

    $('#plantButton').click(function() {

        count++;


    if(count === 1) {
     $('#plant').attr('src', 'images/plant-02.png');
    } else if (count === 2) {
        $('#plant').attr('src', 'images/plant-03.png');
    } else if (count === 3) {
        $('#plant').attr('src', 'images/plant-04.png');
    } else if (count >= 4) {
        $('#plant').attr('src', 'images/plant-05.png');
    }

    });




    //rock garden time

    var draw = false;

$('#rockGarden').mouseenter(function(){ draw = true; });


$('#rockGarden').mousemove(function(e) {
  if(draw == true) {
    pointer = $('<span>').css({
      'position':'absolute',
      'background-color':'#FFF',
      'width':'5px',
      'height':'5px',
      top: e.pageY ,
      left: e.pageX
    });

    $(document.body).append(pointer);
  }
});

});
