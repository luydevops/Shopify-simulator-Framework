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

/***/ "./src/js/footer/index.js":
/*!********************************!*\
  !*** ./src/js/footer/index.js ***!
  \********************************/
/***/ (() => {

eval("// D:\\enviromentDev\\Proyects\\node\\22\\TestGradiW\\src\\src\\js\\footer\\index.js\r\n\r\ndocument.addEventListener('DOMContentLoaded', function() {\r\n    const footerLinks = document.querySelectorAll('.footer__link');\r\n    const currentPath = window.location.pathname;\r\n\r\n    footerLinks.forEach(link => {\r\n        const linkPath = new URL(link.href).pathname;\r\n\r\n        // Caso especial para home\r\n        if ((currentPath === '/' || currentPath === '/index') && linkPath === '/') {\r\n            link.classList.add('footer__link--active');\r\n        }\r\n        // Comparación normal para otras páginas\r\n        else if (currentPath === linkPath) {\r\n            link.classList.add('footer__link--active');\r\n        }\r\n    });\r\n});\n\n//# sourceURL=webpack://shopify-simulator/./src/js/footer/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/footer/index.js"]();
/******/ 	
/******/ })()
;