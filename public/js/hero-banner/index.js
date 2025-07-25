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

/***/ "./src/js/hero-banner/index.js":
/*!*************************************!*\
  !*** ./src/js/hero-banner/index.js ***!
  \*************************************/
/***/ (() => {

eval("// D:\\enviromentDev\\Proyects\\node\\22\\TestGradiW\\src\\src\\js\\hero-banner\\index.js\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const marquee = document.querySelector('.hero__marquee');\r\n    const hero = document.querySelector('.hero');\r\n    const scrollThreshold = 600;\r\n\r\n    // Guardamos los valores originales del padding/margin\r\n    const originalPaddingTop = getComputedStyle(marquee).paddingTop;\r\n    const originalPaddingBottom = getComputedStyle(marquee).paddingBottom;\r\n    const originalMarginTop = getComputedStyle(marquee).marginTop;\r\n    const originalMarginBottom = getComputedStyle(marquee).marginBottom;\r\n\r\n    const handleScroll = () => {\r\n        const currentScroll = window.scrollY;\r\n\r\n        if (currentScroll > scrollThreshold) {\r\n            // Transición de salida\r\n            marquee.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';\r\n            hero.classList.add('hero--scrolled');\r\n        } else {\r\n            // Restauramos estilos antes de la animación de entrada\r\n            marquee.style.paddingTop = originalPaddingTop;\r\n            marquee.style.paddingBottom = originalPaddingBottom;\r\n            marquee.style.marginTop = originalMarginTop;\r\n            marquee.style.marginBottom = originalMarginBottom;\r\n\r\n            // Forzamos reflow para reiniciar la animación\r\n            void marquee.offsetHeight;\r\n\r\n            hero.classList.remove('hero--scrolled');\r\n        }\r\n    };\r\n\r\n    let ticking = false;\r\n    window.addEventListener('scroll', () => {\r\n        if (!ticking) {\r\n            window.requestAnimationFrame(() => {\r\n                handleScroll();\r\n                ticking = false;\r\n            });\r\n            ticking = true;\r\n        }\r\n    });\r\n\r\n    // Inicialización\r\n    handleScroll();\r\n});\n\n//# sourceURL=webpack://shopify-simulator/./src/js/hero-banner/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/hero-banner/index.js"]();
/******/ 	
/******/ })()
;