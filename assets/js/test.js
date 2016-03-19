
function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}

function mobile_nav_basics() {
  if (windowWidth <= 987) {
      $('.button_container').css({
                    opacity : '1'
        });
      $('.button_container').css({
                    display : 'block'
        });
    }
    if (windowWidth > 987) {
    $('.button_container').css({
                    opacity : '0'
        });
    }

}

$( document ).ready(function() {
    mobile_nav_basics();
});


windowSize();
$( window ).resize(function() {
    windowSize();
    mobile_nav_basics();
});

window.addEventListener("scroll",function() { 
   if(windowWidth > 987 && window.scrollY > 500) {
      $('.button_container').css({
                    opacity : '1'
                });
      $('.button_container').css({
                    display : 'block'
                });
      $('.overlay').css({
                    opacity : '1'
                });

   }
},false);

window.addEventListener("scroll",function() { 
   if(windowWidth > 987 && window.scrollY < 500 && !($('#overlay').hasClass('open'))) {
      $('.button_container').css({
                    opacity : '0'
        });
      $('.button_container').css({
                    display : 'none'
                });
      $('.overlay').css({
                    opacity : '1'
                });

   }
},false);
