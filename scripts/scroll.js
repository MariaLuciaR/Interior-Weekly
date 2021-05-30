// when we scroll we want to run a function
// we want to figure out how far down the page we have scrolled
// display the pixels we have scrolled inside of our progress div

$(document).on('scroll', function() {

    var pixelFromTop = $(document).scrollTop()

    $('.progress').text(pixelsFromTop + ' pixels from top')
    console.log
});