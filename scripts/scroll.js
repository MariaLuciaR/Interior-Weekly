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
});