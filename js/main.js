const menuBtn = document.querySelector(".menu__btn"); /* В этот эл-т будем жать */
const menuMobile = document.querySelector(".header__menu-list"); /* В этот эл-т будем вносить изменения после того, как на первый будем жать */

menuBtn.addEventListener('click', () => {
    menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper(".feedback__slider", {
  // Optional parameters
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

const swiperTwo = new Swiper(".certificates__slider", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    360: {
      slidesPerView: 1,
    },
  },
});

// Accordeon

const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
    accordeonTitle.addEventListener("click", function () {
      const currentText = accordeonTitle.parentElement.querySelector(".accordeon__text");

      accordeonTitle.classList.toggle("accordeon__title--active");
      currentText.classList.toggle("accordeon__text--visible");

      if (currentText.classList.contains("accordeon__text--visible")) {
        currentText.style.maxHeight = currentText.scrollHeight + 'px';
      } else {
        currentText.style.maxHeight = null
      }
      
    });
});