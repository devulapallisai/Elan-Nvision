var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    observer:true,
    observeParents:true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    loop:true,
    autoplay:
    {
        delay:600,
        disableOnInteraction:false
    }
});