/* 
    This script animates the page to scroll to the correct section on menu selection.

    Uses the linkLookup to locate all <a> that mentions a div
    We then use animate to scroll to the correct part of the page in a smooth manner

    Code based on: https://www.geeksforgeeks.org/how-to-set-smooth-scroll-after-clicking-the-link-using-javascript/
*/

let linkLookup = 'a[href^="#"]';

$(linkLookup).on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
});