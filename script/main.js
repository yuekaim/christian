$(document).ready(function(){
    $("#video").show();
    $("#cover").delay(1500).slideUp("slow");
});

$('li').each(function(){
  $(this).click(function(){
    $(".content").not($(this).next()).slideUp(400);
    $(this).next().slideDown(400);

  });

  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

});
