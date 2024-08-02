$(document).ready(function () {
  $(".services_content").slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
  });
});

Fancybox.bind('[data-fancybox="gallery"]', {
  // Your custom options for a specific gallery
});

// Back-to-top
const btt = document.getElementById("btt");
window.onscroll = function () {
  if (window.scrollY > 1000) {
    console.log(window.scrollY);
    btt.classList.add("backtotop--visible");
  } else {
    btt.classList.remove("backtotop--visible");
  }
};
