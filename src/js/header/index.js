// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\header\index.js
// JS for sticky behavior and scroll
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        // console.log("se activo el scroll");
        if (window.scrollY > 50) {
            // console.log("se movio 50px");
            header.classList.add('header--scrolled');
        } else {
            // console.log("se movio a menos de 50px");
            header.classList.remove('header--scrolled');
        }
    });

    document.querySelector('.header__link[href="#products"]')?.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
    });

    document.querySelector('.header__link[href="#collections"]')?.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });
    });


    const menuButton = document.querySelector('.header__menu-btn');
    const mobileMenu = document.querySelector('.header__mobile-nav');

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');

            // Cambiar icono de hamburguesa a X y viceversa
            const icon = menuButton.querySelector('i');
            if (mobileMenu.classList.contains('is-open')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
});
