// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\products\index.js
document.addEventListener('DOMContentLoaded', () => {
    const viewAllBtn = document.querySelector('.products-grid__view-all');
    const hiddenProducts = document.getElementById('more-products');

    if (viewAllBtn && hiddenProducts) {
        viewAllBtn.addEventListener('click', () => {
            const isExpanded = viewAllBtn.getAttribute('aria-expanded') === 'true';

            // Toggle visibility
            hiddenProducts.style.display = isExpanded ? 'none' : 'grid';
            viewAllBtn.setAttribute('aria-expanded', !isExpanded);
            viewAllBtn.textContent = isExpanded ? 'View All Products' : 'Show Less';

            // Smooth animation
            if (!isExpanded) {
                hiddenProducts.style.opacity = '0';
                hiddenProducts.style.transition = 'opacity 0.3s ease';
                setTimeout(() => {
                    hiddenProducts.style.opacity = '1';
                }, 10);
            }
        });
    }
});