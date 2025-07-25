// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\hero-banner\index.js
document.addEventListener('DOMContentLoaded', () => {
    const marquee = document.querySelector('.hero__marquee');
    const hero = document.querySelector('.hero');
    const scrollThreshold = 600;

    // Guardamos los valores originales del padding/margin
    const originalPaddingTop = getComputedStyle(marquee).paddingTop;
    const originalPaddingBottom = getComputedStyle(marquee).paddingBottom;
    const originalMarginTop = getComputedStyle(marquee).marginTop;
    const originalMarginBottom = getComputedStyle(marquee).marginBottom;

    const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > scrollThreshold) {
            // Transición de salida
            marquee.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            hero.classList.add('hero--scrolled');
        } else {
            // Restauramos estilos antes de la animación de entrada
            marquee.style.paddingTop = originalPaddingTop;
            marquee.style.paddingBottom = originalPaddingBottom;
            marquee.style.marginTop = originalMarginTop;
            marquee.style.marginBottom = originalMarginBottom;

            // Forzamos reflow para reiniciar la animación
            void marquee.offsetHeight;

            hero.classList.remove('hero--scrolled');
        }
    };

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Inicialización
    handleScroll();
});