
let anchorSelector = 'a[href^="#"]';

$(anchorSelector).on('click', function (e) {
    e.preventDefault();
    let destination = $(this.hash);
    let scrollPosition = destination.offset().top;
    let animationDuration = 500;
    $('html, body').animate({
            scrollTop: scrollPosition
        }, animationDuration);
    });