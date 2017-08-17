$(document).ready(function() {
  $('#slider-container').slick({
    arrows: true,
    slidesPerRow: 4,
    slidesToShow: 4,
  });

 $('#slider-logos').slick({
    arrows: false,
    // slidesPerRow: 5,
    slidesToShow: 5,
    autoplay:true,
    speed:2000,
    loop: true
  });
})


 
