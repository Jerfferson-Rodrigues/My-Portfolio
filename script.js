window.addEventListener('scroll', function () {
    var header = this.document.querySelector('header');
    header.classList.toggle('bar', window.scrollY > 0);
});
function toggleMenu() {
    var menutoggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menutoggle.classList.toggle('active')
    menu.classList.toggle('active')
}

/* ==== GSAP ANIMATION ====*/
/// header
gsap.from('.logo, .toggle', { opacity: 0, duration: 1, delay: 2, y: 10 })
gsap.from('.item', { opacity: 0, duration: 1, delay: 2.1, x: 45, stagger: 0.2 })

// HOME
gsap.from('.textBn', { opacity: 0, duration: 1, delay: 1.6, y: 45 })
gsap.from('.btn', { opacity: 0, duration: 1, delay: 2.1, y: 45 })
