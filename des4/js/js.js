$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
});
// Add smooth scrolling to all links
// Make sure this.hash has a value before overriding default behavior
// Prevent default anchor click behavior
// Store hash
// Using jQuery's animate() method to add smooth page scroll
// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
// Add hash (#) to URL when done scrolling (default click behavior)
// End if
