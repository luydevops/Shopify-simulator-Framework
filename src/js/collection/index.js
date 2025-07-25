// D:\enviromentDev\Proyects\node\22\TestGradiW\src\src\js\collections\index.js
document.addEventListener('DOMContentLoaded', () => {
    // Future interactive functionality can be added here
    console.log('Collections section loaded');

    // Example: Add click handlers for collection cards
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Navigate to collection page or show more details
            console.log('Collection clicked');
        });
    });
});