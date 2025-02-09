jQuery(window).on('load',function() {
    var len = jQuery('.container .item').length;
    var wid = jQuery('.item.active').width();
    
    /* calculating and adding dynamic width */
    jQuery('.container').css('width',len*wid+800);
    
    var $pos = 0;
    /* adding position to each item inside the container */
    jQuery('.container .item').each(function() { 
        var $pos=jQuery(this).position().left;
        jQuery(this).attr('data-pos',$pos);
        if($pos <= 100) {
            jQuery(this).attr('data-pos',550);
        }
    });

    jQuery(window).scrollLeft(500);

    /* code for next button */
    jQuery('.prodnav .next').click(function() {
        $currentpos = jQuery('.item.active').next().attr('data-pos');
        $nextpos = jQuery('.item.active').next().next().attr('data-pos');
        $prevpos = jQuery('.item.active').attr('data-pos');

        jQuery('body').animate({scrollLeft:$currentpos-=570},200);

        jQuery(this).parents('.item').removeClass('active');
        jQuery(this).parents('.item').next().addClass('active');


    });

    /* code on prev button */
    jQuery('.prodnav .prev').click(function() {
        $currentpos = jQuery('.item.active').prev().attr('data-pos');
        $nextpos = jQuery('.item.active').prev().prev().attr('data-pos');
        if($nextpos === undefined || $nextpos === null) {
            $nextpos = '-200';	
        }
        $prevpos = jQuery('.item.active').attr('data-pos');

        console.log($nextpos);

        jQuery('body').animate({'scrollLeft':$nextpos},200);
        
        jQuery(this).parents('.item').removeClass('active');
        jQuery(this).parents('.item').prev().addClass('active');

    });



});
