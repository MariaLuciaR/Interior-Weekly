// when we scroll we want to run a function
// we want to figure out how far down the page we have scrolled
// display the pixels we have scrolled inside of our progress div

$(document).on('scroll', function() {

    var pixelsFromTop = $(document).scrollTop()

    $('.progress').text(pixelsFromTop + ' pixels down');

    if(pixelsFromTop > 50) {
        $('header').addClass('hidden');
    } else {
        $('header').removeClass('hidden');
    }

    if(pixelsFromTop < 600) {
        $('body').css('background-color', '#FFF');
    } else if (pixelsFromTop < 1400) {
        $('body').css('background-color', '#a29c97');
    } else if (pixelsFromTop < 2200) {
        $('body').css('background-color', '#d9dfe4');
    } else if (pixelsFromTop < 3000) {
        $('body').css('background-color', '#fff0f0');
    } else {
        $('body').css('background-color', '#cdccc7');
    }

});

/*
Background color.          #ffffff

Blue Bars color   		   #7fdbff

Brown Background	    #a29c97

Grey Background 	    #d9dfe4

Red Background 		    #fff0f0

Green Background	    #cdccc7
*/ 