// when we scroll we want to run a function
// we want to figure out how far down the page we have scrolled
// display the pixels we have scrolled inside of our progress div

$(document).on('scroll', function() {

    let pixelsFromTop = $(document).scrollTop()
    let percentScroll = 100 * (pixelsFromTop / ($(document).height() - $(window).height() ));

    $('.progress-bar').css('width', percentScroll + '%');
    $('.progress-counter').text(pixelsFromTop + ' pixels down');

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
