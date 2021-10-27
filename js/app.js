// TOGGLE MENU
const menuBtn = document.getElementById('menuBtn'),
      modal = document.getElementById('modal'),
      closeMenu = document.querySelectorAll('.modal__nav');

menuBtn.addEventListener('click', (e)=> {
    e.target.classList.toggle('active');
    modal.classList.toggle('active');
});

closeMenu.forEach(el => el.addEventListener('click', (e)=> {
    menuBtn.classList.remove('active');
    modal.classList.remove('active');
  }));
// SWIPER
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
  });
// SWIPER 2
var swiper = new Swiper(".mySwiperCategories", {
  slidesPerView: 3,
  spaceBetween: 5,
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 5,
    },
    "@0.75": {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    "@1.00": {
      slidesPerView: 6,
      spaceBetween: 20,
    },
    "@1.50": {
      slidesPerView: 8,
      spaceBetween: 30,
    },
  },
});