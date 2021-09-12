let nav = document.querySelector('.clasa1');
console.log(nav)


nav.addEventListener('click', (e) => {
    document.querySelector('.navbar-nav').classList.toggle('open');
    console.log('test');
})
const navLinks = document.querySelector(".navbar-nav");
const aNavigation = document.querySelectorAll(".navbar-nav a");

aNavigation.forEach(a => {
    a.addEventListener('click', () => {
        navLinks.classList.remove("open");
    })
});

const swiper = new Swiper('.swiper-container', {
    cssMode: true,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

window.addEventListener('scroll', scrollTop);

function scrollTop() {
    let scrollTop = document.getElementById('scroll-top');
    if (this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}

//MODAL

let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function () {
    modal.style.display = "block"
}
closeBtn.onclick = function () {
    modal.style.display = "none"
}
window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none"
    }
}