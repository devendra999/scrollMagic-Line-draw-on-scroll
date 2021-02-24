jQuery(document).ready(function($){


$('.map_list_outer ul.map_list li').hover(function(){
    var list = $(this).attr('data-map_id');
    $('.drag_element').each(function(i){
        var compin = '#' + $(this).attr('id');
    if(list == compin) {
            $(this).addClass('active');
        }
    });
    
}, function(){
    $(document).find('.drag_element').removeClass('active');
});


$('.wrap_svl_center .drag_element').hover(function(){
    var pinImage = '#' + $(this).attr('id');
    $('.map_list_outer ul.map_list li').each(function(i){
        if(jQuery(this).attr('data-map_id') == pinImage) {
            $(this).addClass('active');
        }
    });
    
}, function(){
    $(document).find('.map_list_outer ul.map_list li').removeClass('active');
});


jQuery( ".map_list_outer ul.map_list li" ).click(function(e) {
    var $pin = jQuery(this).attr('data-map_id');
    var pos = jQuery($pin).offset().top;
    
        jQuery('body,html').animate({
            scrollTop: pos
        }, );

});





// init controller
            var controller = new ScrollMagic.Controller();
            

            $('.leftnon').each(function(){
                var vsLine = $(this).find('.vs-line');
                var hsLine = $(this).find('.hs-line');
                height = $(this).outerHeight();
               
                 var tl = new TimelineMax();
                tl
                    .from(vsLine,5,{height:0})
                    .from(hsLine,5,{width:0});

                new ScrollMagic.Scene({
                    triggerElement:this,
                    triggerHook:0.5,
                    duration:height
                })
                .setTween(tl)
                //.addIndicators()
                .addTo(controller);




            });












}); // END READY

$(window).on('load', function(){
    
}); // END LOAD

$(window).on('resize', function(){
    equalheight('.equal-height');
}); // END RESIZE


    
$(window).on('scroll', function(){
    


}); // END SCROLL


// ** EQUAL HEIGHT JS
equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 jQuery(container).each(function() {

   $el = jQuery(this);
   jQuery($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
// ** END EQUAL HEIGHT JS