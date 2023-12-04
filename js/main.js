// Tabs of the car page
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((el) => {
    el.addEventListener('click', (open));
});

function open (event) {
    const tabTarget = event.currentTarget;
    // Use data-attribute to get id later
    const button = tabTarget.dataset.button;

    tabItem.forEach((item) => {
        item.classList.remove('tabs__btn-item--active');
    })

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach((item) => {
        item.classList.remove('tabs__content-item--active')
    })

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active')
}

// Swiper
const swiper = new Swiper('.swiper', {
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: "fade",
});