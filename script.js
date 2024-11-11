document.addEventListener("DOMContentLoaded", function() {
 const menuToggle = document.getElementById("menu-toggle");
 const menu = document.getElementById("menu")

 menuToggle.addEventListener("click", () => {
   if (menu.classList.contains("hidden")){
         menu.classList.remove("hidden", "slide-out");
         menu.classList.add("slide-in");
   } else{
           menu.classList.remove("slide-in");
           menu.classList.add("slide-out");

           menu.addEventListener("animationend", () => {
               if (menu.classList.contains("slide-out")) {
                   menu.classList.add("hidden");
               }
           }, { once: true });
   }
 })
});

   var swiper = new Swiper(".mySwiper", {
     slidesPerView: 3,
     spaceBetween: 30,
     pagination: {
       el: ".swiper-pagination",
       clickable: true,
     },
   });