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

/***/ "./src/js/header/index.js":
/*!********************************!*\
  !*** ./src/js/header/index.js ***!
  \********************************/
/***/ (() => {

eval("// D:\\enviromentDev\\Proyects\\node\\22\\TestGradiW\\src\\src\\js\\header\\index.js\r\n// JS for sticky behavior and scroll\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const header = document.querySelector('.header');\r\n\r\n    window.addEventListener('scroll', () => {\r\n        // console.log(\"se activo el scroll\");\r\n        if (window.scrollY > 50) {\r\n            // console.log(\"se movio 50px\");\r\n            header.classList.add('header--scrolled');\r\n        } else {\r\n            // console.log(\"se movio a menos de 50px\");\r\n            header.classList.remove('header--scrolled');\r\n        }\r\n    });\r\n\r\n    document.querySelector('.header__link[href=\"#products\"]')?.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });\r\n    });\r\n\r\n    document.querySelector('.header__link[href=\"#collections\"]')?.addEventListener('click', e => {\r\n        e.preventDefault();\r\n        document.querySelector('#collections')?.scrollIntoView({ behavior: 'smooth' });\r\n    });\r\n});\r\n\n\n//# sourceURL=webpack://shopify-simulator/./src/js/header/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/header/index.js"]();
/******/ 	
/******/ })()
;