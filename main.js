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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAbout\": () => (/* binding */ createAbout)\n/* harmony export */ });\n// Another approach, first initialize the variables and then use cloneNode deep\n// to return a exact copy, somewhat like copying a template.\nconst section = document.createElement(\"section\");\nconst mapSection = document.createElement(\"div\");\nconst infoSection = document.createElement(\"section\");\n\nconst sectionHeading = document.createElement(\"h2\");\nconst subtitleOne = document.createElement(\"h3\");\nconst subtitleTwo = document.createElement(\"h4\");\nconst aboutInfo = document.createElement(\"p\");\nconst table = document.createElement(\"table\");\nconst contactInfo = aboutInfo.cloneNode(false);\n\nconst frame = `<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d790.9665265439548!2d-99.13533571236053!3d19.43433284581673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f92d44f4842d%3A0x4fd88d2c37e31818!2sAv.%205%20de%20Mayo%2052%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Cdad.%20de%20M%C3%A9xico%2C%20Centro%2C%20Cuauht%C3%A9moc%2C%2006000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1sen!2smx!4v1644094979965!5m2!1sen!2smx\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>`;\n\nconst tableData = `<tr><td class=\"bold-txt\">Monday - Thursday</td>\n                    <td>09.00a.m - 11.00p.m</td></tr><tr>\n                    <td class=\"bold-txt\">Friday & Saturday</td>\n                    <td>09.00a.m - 01.00a.m</td></tr>\n                    <tr><td class=\"bold-txt\">Monday</td><td>11.00a.m - 08.00p.m</td></tr>`;\n\nsection.classList.add(\"about-page\");\nmapSection.classList.add(\"map\");\ninfoSection.classList.add(\"about-info\");\nsectionHeading.classList.add(\"about-title\");\nsubtitleOne.classList.add(\"about-subtitle\");\nsubtitleTwo.classList.add(\"about-subtitle\");\n\nsectionHeading.textContent = \"About us\";\naboutInfo.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus nisi phasellus blandit massa dictumst iaculis. Cursuseros nibh proin egestas tincidunt purus. At eu malesuada egestas odio erat sed. Vitae posuere sed nunc, erat. Quam mileo quis commodo aliquet eget pharetra fermentum. Lectus lacus ante eget cursus lectus vel turpis egestas. Condimentumdictum vel, nunc nulla amet. Lacus fermentum risus adipiscing imperdiet dui, orci. Scelerisque donec massa duis hac.`\nsubtitleOne.textContent = \"Working hours\";\nsubtitleTwo.textContent = \"Contact us!\";\ncontactInfo.textContent = \"+(841) 748 847 71\";\n\ntable.insertAdjacentHTML(\"afterbegin\", tableData);\ninfoSection.append(sectionHeading, aboutInfo, subtitleOne, table, subtitleTwo, contactInfo);\nmapSection.insertAdjacentHTML(\"afterbegin\", frame);\nsection.append(mapSection, infoSection);\n\nconst createAbout = () => {\n    return section.cloneNode(true);\n};\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createHeader\": () => (/* binding */ createHeader)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n\n\n\n\nconst createHeader = () => {\n    const header = document.createElement(\"header\");\n    const nav = document.createElement(\"nav\");\n    const homeAnchor = document.createElement(\"a\");\n    const menuAnchor = document.createElement(\"a\");\n    const aboutAnchor = document.createElement(\"a\");\n\n    homeAnchor.id = \"home\";\n    menuAnchor.id = \"menu\";\n    aboutAnchor.id = \"about\";\n    homeAnchor.textContent = \"Home\";\n    menuAnchor.textContent = \"Menu\";\n    aboutAnchor.textContent = \"About\";\n\n    homeAnchor.addEventListener(\"click\", appendContent);\n    menuAnchor.addEventListener(\"click\", appendContent);\n    aboutAnchor.addEventListener(\"click\", appendContent);\n    \n    nav.append(homeAnchor, menuAnchor, aboutAnchor);\n    header.appendChild(nav);\n\n    return header;\n};\n\nfunction appendContent(e) {\n    // Removes the main content, not the header nor footer.\n    const main = document.getElementsByTagName(\"main\");\n    main[0].textContent = \"\";\n    main[0].removeAttribute(\"class\");\n\n    // Check the id of the button that was clicked and append the\n    // appropiate content to the main node.\n    switch (e.target.id) {\n        case \"home\":\n            main[0].append((0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHome)());\n            break;\n        case \"menu\":\n            main[0].classList.add(\"menu-active\");\n            main[0].append((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)());\n            break;\n        case \"about\":\n            main[0].classList.add(\"a-active\");\n            main[0].append((0,_about_js__WEBPACK_IMPORTED_MODULE_2__.createAbout)());\n            break;\n    }\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/header.js?");

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