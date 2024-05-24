if (window.matchMedia("(max-width: 767px)").matches) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 16,
        
        // If we need pagination
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
        
    });
}

const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = swiperWrapper.querySelectorAll('.swiper-slide');
const hideButton = document.querySelector('.swiper-menu__show-btn');

function toggleElements() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 768 && screenWidth <=1119 ) {
        for (let i = slides.length - 1; i >= slides.length - 5; i--) {
            slides[i].style.display = 'none';
        }
    } else if (screenWidth >= 1119) {
        for (let i = slides.length - 1; i >= slides.length - 3; i--) {
            slides[i].style.display = 'none';
        } 
    } else {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'block';
        }
    }
}

window.addEventListener('load', () => {
    toggleElements()
  }); 

hideButton.addEventListener('click', function() {
    if (hideButton.classList.contains('swiper-menu__show-btn')) {
        hideButton.classList.remove('swiper-menu__show-btn');
        hideButton.classList.add('swiper-menu__hide-btn');
        hideButton.textContent = "Скрыть";
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'block';
        }
    } else {
        hideButton.classList.remove('swiper-menu__hide-btn');
        hideButton.classList.add('swiper-menu__show-btn');
        hideButton.textContent = "Показать всё";
        toggleElements();
    }
});


