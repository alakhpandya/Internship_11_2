$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    center:true,
    navText: ['<i class="fa-solid fa-angle-left nav-arrow"></i>', '<i class="fa-solid fa-angle-right nav-arrow"></i>'],
    dots: false,
    // autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1200: {
            items: 3
        }
    }
})

const heartIcon = document.querySelector(".heart-icon");
// console.log(heartIcon);
// heartIcon.classList.remove("fa-regular");
// heartIcon.classList.add("fa-solid");

heartIcon.addEventListener("click", () => {
    if(heartIcon.classList.contains("fa-regular")){
        heartIcon.classList.remove("fa-regular");
        heartIcon.classList.add("fa-solid");
        heartIcon.classList.add("designer-heart");
    }
    else{
        heartIcon.classList.remove("fa-solid");
        heartIcon.classList.add("fa-regular");
        heartIcon.classList.remove("designer-heart");
    }
})