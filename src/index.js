  // Define selector for selecting
        // anchor links with the hash
let anchorSelector = 'a[href^="#"]';

$(anchorSelector).on('click', function (e) {
         
            // Prevent scrolling if the
            // hash value is blank
    e.preventDefault();
     
            // Get the destination to scroll to
            // using the hash property
    let destination = $(this.hash);
     
            // Get the position of the destination
            // using the coordinates returned by
            // offset() method
    let scrollPosition = destination.offset().top;
     
            // Specify animation duration
    let animationDuration = 500;
     
            // Animate the html/body with
            // the scrollTop() method
    $('html, body').animate({
            scrollTop: scrollPosition
        }, animationDuration);
    });