const titleScroll = document.querySelector('.under-background');
const titleScroll2 = document.querySelector('.under-background-2');
const titleScroll3 = document.querySelector('.under-background-3');
const pointer = document.querySelector('.pointer')

 $(document).on('scroll', function(){
               $('.under-background').css("left", Math.max(500 - 1.5*window.scrollY) + "px")
            });

$(document).on('scroll', function(){
               $('.under-background-2').css("left", Math.max(1300 - 0.4*window.scrollY) + "px")
            });
$(document).on('scroll', function(){
               $('.under-background-3').css("left", Math.max(2100 - 0.6*window.scrollY) + "px")
            })
 $(document).mousemove(function(e){
               $('.pointer').css({left:e.pageX,top:e.pageY})
            })