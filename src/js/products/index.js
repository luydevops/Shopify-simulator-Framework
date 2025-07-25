// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\products\index.js
document.addEventListener('DOMContentLoaded', () => {
    const viewAllBtn = document.querySelector('.products-grid__view-all');
    const hiddenProducts = document.getElementById('more-products');
    const productCards = Array.from(hiddenProducts.querySelectorAll('.product-card'));
    const PRODUCTS_PER_ROW = 4; // Ajustar según responsive (4/3/2/1)
    const SCROLL_OFFSET = 300; // Margen adicional después del botón
    let currentRow = 0;
    let isManualExpanded = false;
    let triggerPoint = 0;

    // Ocultar todos los productos adicionales inicialmente
    productCards.forEach(card => card.style.display = 'none');
    hiddenProducts.style.display = 'grid';

    // Función para calcular el punto de activación
    function calculateTriggerPoint() {
        const btnRect = viewAllBtn.getBoundingClientRect();
        // Posición absoluta del botón + 200px
        triggerPoint = btnRect.top + window.scrollY + SCROLL_OFFSET;
        console.log(triggerPoint);
    }

    // Función para mostrar una fila específica
    function showRow(rowIndex) {
        const start = rowIndex * PRODUCTS_PER_ROW;
        const end = start + PRODUCTS_PER_ROW;

        productCards.slice(start, end).forEach(card => {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s ease-out';
        });
    }

    // Función para verificar scroll
    function checkScroll() {
        if (isManualExpanded || currentRow * PRODUCTS_PER_ROW >= productCards.length) return;

        calculateTriggerPoint();

        if (window.scrollY + window.innerHeight >= triggerPoint) {
            showRow(currentRow);
            currentRow++;
        }
    }

    // Evento del botón View All
    viewAllBtn.addEventListener('click', () => {
        isManualExpanded = !isManualExpanded;
        viewAllBtn.setAttribute('aria-expanded', isManualExpanded);
        viewAllBtn.textContent = isManualExpanded ? 'Show Less' : 'View All';

        if (isManualExpanded) {
            // Mostrar todos los productos
            productCards.forEach(card => card.style.display = 'block');
            window.removeEventListener('scroll', checkScroll);
        } else {
            // Ocultar todo excepto primera fila
            productCards.forEach((card, index) => {
                card.style.display = index < PRODUCTS_PER_ROW ? 'block' : 'none';
            });
            currentRow = 1;
            window.addEventListener('scroll', checkScroll);
        }
    });

    // Mostrar primera fila oculta y configurar scroll
    currentRow = 0;
    window.addEventListener('scroll', checkScroll);

});