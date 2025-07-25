/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/products/index.js":
/*!**********************************!*\
  !*** ./src/js/products/index.js ***!
  \**********************************/
/***/ (() => {

eval("// D:\\enviromentDev\\Proyects\\node\\22\\TestGradiW\\src\\src\\js\\products\\index.js\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const viewAllBtn = document.querySelector('.products-grid__view-all');\r\n    const hiddenProducts = document.getElementById('more-products');\r\n    const productCards = Array.from(hiddenProducts.querySelectorAll('.product-card'));\r\n    const PRODUCTS_PER_ROW = 4; // Ajustar según responsive (4/3/2/1)\r\n    const SCROLL_OFFSET = 300; // Margen adicional después del botón\r\n    let currentRow = 0;\r\n    let isManualExpanded = false;\r\n    let triggerPoint = 0;\r\n\r\n    // Ocultar todos los productos adicionales inicialmente\r\n    productCards.forEach(card => card.style.display = 'none');\r\n    hiddenProducts.style.display = 'grid';\r\n\r\n    // Función para calcular el punto de activación\r\n    function calculateTriggerPoint() {\r\n        const btnRect = viewAllBtn.getBoundingClientRect();\r\n        // Posición absoluta del botón + 200px\r\n        triggerPoint = btnRect.top + window.scrollY + SCROLL_OFFSET;\r\n        console.log(triggerPoint);\r\n    }\r\n\r\n    // Función para mostrar una fila específica\r\n    function showRow(rowIndex) {\r\n        const start = rowIndex * PRODUCTS_PER_ROW;\r\n        const end = start + PRODUCTS_PER_ROW;\r\n\r\n        productCards.slice(start, end).forEach(card => {\r\n            card.style.display = 'block';\r\n            card.style.animation = 'fadeIn 0.5s ease-out';\r\n        });\r\n    }\r\n\r\n    // Función para verificar scroll\r\n    function checkScroll() {\r\n        if (isManualExpanded || currentRow * PRODUCTS_PER_ROW >= productCards.length) return;\r\n\r\n        calculateTriggerPoint();\r\n\r\n        if (window.scrollY + window.innerHeight >= triggerPoint) {\r\n            showRow(currentRow);\r\n            currentRow++;\r\n        }\r\n    }\r\n\r\n    // Evento del botón View All\r\n    viewAllBtn.addEventListener('click', () => {\r\n        isManualExpanded = !isManualExpanded;\r\n        viewAllBtn.setAttribute('aria-expanded', isManualExpanded);\r\n        viewAllBtn.textContent = isManualExpanded ? 'Show Less' : 'View All';\r\n\r\n        if (isManualExpanded) {\r\n            // Mostrar todos los productos\r\n            productCards.forEach(card => card.style.display = 'block');\r\n            window.removeEventListener('scroll', checkScroll);\r\n        } else {\r\n            // Ocultar todo excepto primera fila\r\n            productCards.forEach((card, index) => {\r\n                card.style.display = index < PRODUCTS_PER_ROW ? 'block' : 'none';\r\n            });\r\n            currentRow = 1;\r\n            window.addEventListener('scroll', checkScroll);\r\n        }\r\n    });\r\n\r\n    // Mostrar primera fila oculta y configurar scroll\r\n    currentRow = 0;\r\n    window.addEventListener('scroll', checkScroll);\r\n\r\n});\n\n//# sourceURL=webpack://shopify-simulator/./src/js/products/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/products/index.js"]();
/******/ 	
/******/ })()
;