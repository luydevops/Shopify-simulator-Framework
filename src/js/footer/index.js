// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\footer\index.js

document.addEventListener('DOMContentLoaded', function() {
    const footerLinks = document.querySelectorAll('.footer__link');
    const currentPath = window.location.pathname;

    footerLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;

        // Caso especial para home
        if ((currentPath === '/' || currentPath === '/index') && linkPath === '/') {
            link.classList.add('footer__link--active');
        }
        // Comparación normal para otras páginas
        else if (currentPath === linkPath) {
            link.classList.add('footer__link--active');
        }
    });
});