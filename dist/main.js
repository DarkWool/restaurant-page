/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFooter\": () => (/* binding */ createFooter)\n/* harmony export */ });\nconst createFooter = () => {\n    const footer = document.createElement(\"footer\");\n    footer.innerHTML = `<a href=\"https://github.com/DarkWool/restaurant-page\" target=\"_blank\">\n    <img src=\"images/GitHub-Mark-Light-64px.png\" class=\"contact-icon\"></a>`;\n    \n    return footer;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\nconst createHeader = () => {\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const homeAnchor = document.createElement(\"a\");\n    const menuAnchor = document.createElement(\"a\");\n    const aboutAnchor = document.createElement(\"a\");\n\n    homeAnchor.id = \"home\";\n    menuAnchor.id = \"menu\";\n    aboutAnchor.id = \"about\";\n    homeAnchor.textContent = \"Home\";\n    menuAnchor.textContent = \"Menu\";\n    aboutAnchor.textContent = \"About\";\n\n    homeAnchor.addEventListener(\"click\", appendContent);\n    menuAnchor.addEventListener(\"click\", appendContent);\n    aboutAnchor.addEventListener(\"click\", appendContent);\n    \n    nav.append(homeAnchor, menuAnchor, aboutAnchor);\n    header.appendChild(nav);\n\n    return header;\n};\n\nfunction appendContent(e) {\n    // Removes the main content, not the header nor footer.\n    const main = document.getElementsByTagName(\"main\");\n    main[0].textContent = \"\";\n    main[0].innerHTML = \"\";\n\n    // Check the id of the button that was clicked and append the\n    // appropiate content to the main node.\n    switch (e.target.id) {\n        case \"home\":\n            main[0].append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)());\n            break;\n        case \"menu\":\n            main[0].classList.add(\"menu-active\");\n            main[0].append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)());\n            break;\n        case \"about\":\n            break;\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"initHome\": () => (/* binding */ initHome)\n/* harmony export */ });\nlet btn;\n\nconst initHome = () => {\n    const main = document.createElement(\"main\");\n    main.append(createHome());\n\n    return main;\n};\n\nconst createHome = () => {\n    const heroSection = document.createElement(\"section\");\n    heroSection.id = \"hero-content\";\n    const subtitle = document.createElement(\"h2\");\n    subtitle.classList.add(\"hero-subtitle\");\n    subtitle.textContent = \"Coffee Shop\";\n\n    const heading = document.createElement(\"h1\");\n    heading.classList.add(\"hero-title\");\n    heading.textContent = \"Moonish\";\n\n    const copy = document.createElement(\"p\");\n    copy.classList.add(\"hero-description\");\n    copy.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n    Venenatis, gravida venenatis in tellus enim sit tellus ac leo. Massa amet nunc accumsan interdum volutpat massa nunc.`;\n\n    btn = document.createElement(\"button\");\n    btn.type = \"button\";\n    btn.classList.add(\"hero-btn\");\n    btn.textContent = \"Check Menu\";\n    \n    heroSection.append(subtitle, heading, copy, btn);\n\n    return heroSection;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.js */ \"./src/header.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n\n\n\n\n// Generate initial content\nconst contentDiv = document.getElementById(\"content\");\nlet fragment = new DocumentFragment();\nfragment.append((0,_header_js__WEBPACK_IMPORTED_MODULE_0__.createHeader)(), (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.initHome)(), (0,_footer_js__WEBPACK_IMPORTED_MODULE_2__.createFooter)());\ncontentDiv.append(fragment);\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\nconst items = [\n    { \n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"12\"\n    },\n    {\n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"19.99\"\n    },\n    {\n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"8\"\n    },\n    {\n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"10\"\n    },\n    {\n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"4.99\"\n    },\n    {\n        title: \"Mocha Coffee\",\n        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempus senectus suscipit mauris cras. Risus a suspendisse adipiscing risus, sodales quis faucibus gravida. Neque nibh nec ipsum enim. Quam non fermentum, nascetur facilisis amet volutpat pharetra, dui.`,\n        image: `images/item-01.jpeg`,\n        price: \"4.99\"\n    }\n];\n\nconst createMenu = () => {\n    const section = document.createElement(\"section\");\n    const heading = document.createElement(\"h1\");\n    const itemsContainer = document.createElement(\"div\");\n\n    section.id = \"menu-content\";\n    heading.textContent = \"Our Menu\";\n    \n    const item = document.createElement(\"article\");\n    const imageContainer = document.createElement(\"div\");\n    const descriptionContainer = document.createElement(\"div\");\n\n    const itemPrice = document.createElement(\"span\");\n    const itemImage = document.createElement(\"img\");\n    const itemTitle = document.createElement(\"h2\");\n    const itemDescription = document.createElement(\"p\");\n    \n    itemsContainer.classList.add(\"items-container\");\n    imageContainer.classList.add(\"item-img-container\");\n    descriptionContainer.classList.add(\"item-desc-container\");\n    itemTitle.classList.add(\"item-title\");\n    itemDescription.classList.add(\"item-desc\");\n    itemImage.classList.add(\"item-img\");\n    itemPrice.classList.add(\"item-price\");\n\n    itemPrice.textContent = \"$\";\n    \n    descriptionContainer.append(itemTitle, itemDescription);\n    imageContainer.append(itemPrice, itemImage);\n    item.append(imageContainer, descriptionContainer);\n\n    items.map(el => {\n        itemTitle.textContent = el.title;\n        itemDescription.textContent = el.description;\n        itemImage.src = el.image;\n        itemPrice.textContent = `$${el.price}`;\n\n        itemsContainer.append(item.cloneNode(true));\n    });\n\n    section.append(heading, itemsContainer);\n\n    return section;\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;