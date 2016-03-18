
function windowSize() {
    windowHeight = window.innerHeight ? window.innerHeight : $(window).height();
    windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
}
windowSize();
$( window ).resize(function() {
    windowSize();
    if (windowWidth <=987) {
    	$('.button_container').css({
                    opacity : '1'
        });
    }
    if (windowWidth >987) {
		$('.button_container').css({
                    opacity : '0'
        });

    }
});

window.addEventListener("scroll",function() { 
   if(windowWidth > 987 && window.scrollY >500) {
      $('.button_container').css({
                    opacity : '1'
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
      $('.overlay').css({
                    opacity : '1'
                });

   }
},false);
