
 var elem = document.querySelector('.main-carousel');
  var flty = new Flickity(elem, {
    cellAlign: 'left',
    contain: true,
    percentPosition: false,
    groupCells: true
  })
  $('.main-carousel').flickity({
  cellAlign: 'left',
  contain: true,
});
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    } // End if
  });
});    