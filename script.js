//cambia anno corrente nel footer
document.getElementById('year').textContent = new Date().getFullYear();

const annoCorrente = new Date().getFullYear();
const annoNascita = 2003;
let eta = annoCorrente - annoNascita;
document.getElementById('eta').textContent = eta;

//menu mobile
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expandet', isOpen);
});

//chiusura del menu
mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
    });
})