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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?bd63\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/main.js */ \"./js/main.js?9e1e\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/*\n * This is the main entry point for Webpack, the compiler & dependency loader.\n * All files that are necessary for your web page and need to be 'watched' for changes should be included here!\n */\n// HTML Files\n // Stylesheets\n\n // Scripts\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/main.js?9e1e":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ (() => {

eval("// Resize Navbar on Scroll\nwindow.onscroll = function () {\n  var navbar = document.getElementById(\"navbar\");\n\n  if (window.scrollY > 50) {\n    navbar.classList.add(\"small\");\n  } else {\n    navbar.classList.remove(\"small\");\n  }\n}; // Smooth Scrolling for navigation links\n\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  var navLinks = document.querySelectorAll('.nav-link');\n  var offset = 80; // Adjust this value based on your sticky navbar height\n\n  navLinks.forEach(function (link) {\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n      var targetId = this.getAttribute('href').substring(1);\n      var targetSection = document.getElementById(targetId); // Scroll to the section smoothly, accounting for the navbar height\n\n      window.scrollTo({\n        top: targetSection.offsetTop - offset,\n        behavior: 'smooth'\n      });\n    });\n  });\n}); // Highlight the active section in the navbar\n\nvar sections = document.querySelectorAll(\"section\");\nvar navLinks = document.querySelectorAll(\".nav-link\");\nwindow.addEventListener(\"scroll\", function () {\n  var current = \"\";\n  sections.forEach(function (section) {\n    var sectionTop = section.offsetTop;\n    var sectionHeight = section.clientHeight; // Adjust based on the scroll position and section height\n\n    if (pageYOffset >= sectionTop - sectionHeight / 4) {\n      current = section.getAttribute(\"id\");\n    }\n  });\n  navLinks.forEach(function (link) {\n    link.classList.remove(\"active\");\n\n    if (link.getAttribute(\"href\").includes(current)) {\n      link.classList.add(\"active\");\n    }\n  });\n}); // Slider logic for Current Hermanos section\n\nvar currentIndex = 0;\nvar slides = document.querySelectorAll('.slide');\nvar totalSlides = slides.length;\n\nfunction showSlide(index) {\n  var slider = document.querySelector('.slider');\n  slider.style.transform = \"translateX(-\".concat(index * 100, \"%)\");\n} // Auto-slide every 5 seconds (slower than before)\n\n\nvar slideInterval = setInterval(function () {\n  currentIndex = (currentIndex + 1) % totalSlides;\n  showSlide(currentIndex);\n}, 5000); // Add next/previous buttons functionality\n\nvar nextBtn = document.getElementById('next');\nvar prevBtn = document.getElementById('prev');\n\nif (nextBtn && prevBtn) {\n  nextBtn.addEventListener('click', function () {\n    currentIndex = (currentIndex + 1) % totalSlides;\n    showSlide(currentIndex);\n    resetAutoSlide(); // Reset auto-slide timer on manual navigation\n  });\n  prevBtn.addEventListener('click', function () {\n    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;\n    showSlide(currentIndex);\n    resetAutoSlide(); // Reset auto-slide timer on manual navigation\n  });\n} // Reset the auto-slide timer when manually navigating\n\n\nfunction resetAutoSlide() {\n  clearInterval(slideInterval);\n  slideInterval = setInterval(function () {\n    currentIndex = (currentIndex + 1) % totalSlides;\n    showSlide(currentIndex);\n  }, 5000); // Reset the interval to 5 seconds after manual navigation\n} // Open modal when an event column is clicked\n\n\ndocument.querySelectorAll('.event-column').forEach(function (eventColumn) {\n  eventColumn.addEventListener('click', function () {\n    var modalId = this.getAttribute('data-modal');\n    document.getElementById(modalId).style.display = 'block';\n  });\n}); // Close modal when the close button is clicked\n\ndocument.querySelectorAll('.modal .close').forEach(function (closeButton) {\n  closeButton.addEventListener('click', function () {\n    this.closest('.modal').style.display = 'none';\n  });\n}); // Close modal when clicking outside of the modal content\n\nwindow.onclick = function (event) {\n  if (event.target.classList.contains('modal')) {\n    event.target.style.display = 'none';\n  }\n};\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/html-loader/dist/runtime/getUrl.js":
/*!**********************************************************!*\
  !*** ../node_modules/html-loader/dist/runtime/getUrl.js ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///../node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss ***!
  \*************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/IMG_2064.JPEG */ \"./assets/IMG_2064.JPEG\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-family: \\\"Poppins\\\", sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  scroll-behavior: smooth;\\n  text-align: center;\\n  background-color: #5a2e11;\\n  font-weight: 600;\\n  overflow-x: hidden;\\n}\\n\\n/* Sticky Navbar */\\nnav {\\n  position: sticky;\\n  top: 0;\\n  width: 100%;\\n  background-color: #d4a517;\\n  /* Gold color */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  padding: 20px;\\n  z-index: 1000;\\n  transition: all 0.3s ease;\\n  /* Add transition for smooth shrinking */\\n}\\n\\nnav.small {\\n  padding: 10px;\\n  background-color: #a0760c;\\n  /* Optional: Change navbar color when scrolling down */\\n}\\n\\nnav ul {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  list-style-type: none;\\n  width: 100%;\\n  max-width: 1200px;\\n}\\n\\nnav ul li {\\n  flex: 1;\\n  text-align: center;\\n}\\n\\nnav ul a {\\n  color: white;\\n  text-decoration: none;\\n  padding: 10px;\\n  font-size: 18px;\\n  font-weight: 600;\\n  position: relative;\\n}\\n\\nnav ul a.active {\\n  background-color: transparent;\\n  /* No background */\\n}\\n\\nnav ul a.active:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100%;\\n  height: 2px;\\n  background-color: #ff0000;\\n  left: 0;\\n  bottom: -5px;\\n  /* Add space below text */\\n}\\n\\nnav ul a:hover {\\n  color: #a0760c;\\n  /* Gold color on hover */\\n}\\n\\nnav .center-logo {\\n  height: 100px;\\n  transition: height 0.3s ease;\\n}\\n\\nnav.small .center-logo {\\n  height: 60px;\\n  /* Resize logo when navbar shrinks */\\n}\\n\\n/* Centering sections and vertically centering Mission content */\\nsection {\\n  padding: 50px;\\n  min-height: 100vh;\\n  display: flex;\\n  flex-direction: column;\\n  /* Content stacked in a column */\\n  justify-content: center;\\n  align-items: center;\\n  color: white;\\n  font-weight: 600;\\n}\\n\\nsection h1 {\\n  font-size: 3.5rem;\\n}\\n\\nsection p {\\n  font-size: 2rem;\\n}\\n\\n/* Mission section styles */\\n#mission {\\n  background-color: #d4a517;\\n  color: #5a2e11;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  font-weight: 600;\\n  padding: 60px 20px;\\n}\\n\\n#mission h1 {\\n  font-size: 3.2rem;\\n  margin: 30px 30px;\\n  -webkit-animation: slideInLeft 1.5s ease-out;\\n          animation: slideInLeft 1.5s ease-out;\\n  /* Slide from the left */\\n}\\n\\n#mission p {\\n  font-size: 1.8rem;\\n  margin: 20px 20px;\\n  -webkit-animation: slideInRight 1.5s ease-out;\\n          animation: slideInRight 1.5s ease-out;\\n  /* Slide from the right */\\n}\\n\\n@media (max-width: 480px) {\\n  #mission h1 {\\n    font-size: 3.2rem;\\n    /* Further reduce font size for smaller screens */\\n  }\\n\\n  #mission p {\\n    font-size: 1.4rem;\\n    /* Further reduce font size for smaller screens */\\n  }\\n}\\n/* Keyframes for animations */\\n@-webkit-keyframes slideInLeft {\\n  from {\\n    transform: translateX(-100%);\\n    opacity: 0;\\n  }\\n  to {\\n    transform: translateX(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes slideInLeft {\\n  from {\\n    transform: translateX(-100%);\\n    opacity: 0;\\n  }\\n  to {\\n    transform: translateX(0);\\n    opacity: 1;\\n  }\\n}\\n@-webkit-keyframes slideInRight {\\n  from {\\n    transform: translateX(100%);\\n    opacity: 0;\\n  }\\n  to {\\n    transform: translateX(0);\\n    opacity: 1;\\n  }\\n}\\n@keyframes slideInRight {\\n  from {\\n    transform: translateX(100%);\\n    opacity: 0;\\n  }\\n  to {\\n    transform: translateX(0);\\n    opacity: 1;\\n  }\\n}\\n/* Media query for smaller screens */\\n@media (max-width: 768px) {\\n  nav ul a {\\n    font-size: 14px;\\n    /* Smaller text in the navbar */\\n  }\\n\\n  nav .center-logo {\\n    height: 50px;\\n    /* Smaller logo */\\n  }\\n\\n  section h1 {\\n    font-size: 2.5rem;\\n    /* Smaller section titles */\\n  }\\n\\n  section p {\\n    font-size: 1.5rem;\\n    /* Smaller paragraph text */\\n  }\\n}\\n/* Styles for the Pillars section */\\n#pillars {\\n  position: relative;\\n  height: 100vh;\\n  /* Adjusted for mobile */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  text-align: center;\\n  color: #d4a517;\\n  /* Gold text */\\n}\\n\\n#pillars .video-container {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  overflow: hidden;\\n  z-index: 1;\\n}\\n\\n#pillars .video-container .background-video {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  width: 100%;\\n  height: 100%;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n  transform: translate(-50%, -50%);\\n}\\n\\n#pillars .video-container .dark-overlay {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  z-index: 2;\\n}\\n\\n#pillars .pillars-content {\\n  position: relative;\\n  z-index: 3;\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  height: 100%;\\n  padding: 20px;\\n}\\n\\n#pillars .pillars-content h1 {\\n  font-size: 3rem;\\n  margin-bottom: 20px;\\n}\\n\\n#pillars .pillars-content .pillars-grid {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  width: 100%;\\n  max-width: 1200px;\\n  text-align: center;\\n}\\n\\n#pillars .pillars-content .pillars-grid h2 {\\n  font-size: 2.5rem;\\n  padding: 10px;\\n  background-color: rgba(255, 255, 255, 0.1);\\n  border-radius: 8px;\\n  transition: transform 0.3s ease;\\n}\\n\\n#pillars .pillars-content .pillars-grid h2:hover {\\n  transform: scale(1.05);\\n}\\n\\n@media (max-width: 768px) {\\n  #pillars .pillars-grid {\\n    flex-direction: column;\\n    gap: 20px;\\n  }\\n\\n  #pillars h1 {\\n    font-size: 2rem;\\n  }\\n\\n  #pillars h2 {\\n    font-size: 1.5rem;\\n  }\\n}\\n/* Style adjustments for smaller devices */\\n@media (max-width: 480px) {\\n  nav ul a {\\n    font-size: 12px;\\n    /* Further reduce navbar text size */\\n  }\\n\\n  nav .center-logo {\\n    height: 40px;\\n    /* Even smaller logo */\\n  }\\n\\n  section h1 {\\n    font-size: 2rem;\\n  }\\n\\n  section p {\\n    font-size: 1.2rem;\\n  }\\n}\\n.center-vertical {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  text-align: center;\\n}\\n\\n#current-hermanos {\\n  background-color: #5a2e11;\\n  /* Brown background for Hermanos section */\\n  color: #d4a517;\\n  /* Gold text for contrast */\\n}\\n\\n#events {\\n  background-color: #d4a517;\\n  /* Gold background for Events section */\\n  color: #5a2e11;\\n  /* Brown text for contrast */\\n}\\n\\n/* Style for each event column */\\n.event-column {\\n  width: 100%;\\n  /* Ensure columns take full width of the container */\\n  margin-bottom: 30px;\\n  /* Space below each event column */\\n  box-sizing: border-box;\\n  /* Include padding and border in the element's total width and height */\\n  padding: 15px;\\n  /* Optional: Add padding inside each column */\\n  background-color: #f9f9f9;\\n  /* Optional: Add a background color for better contrast */\\n  border-radius: 8px;\\n  /* Optional: Rounded corners */\\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\\n  /* Optional: Subtle shadow for depth */\\n}\\n\\n/* Style for the image container within each event column */\\n.event-image {\\n  text-align: center;\\n  /* Centers the image within the container */\\n  margin-top: 15px;\\n  /* Space above the image */\\n}\\n\\n/* Style for the images themselves */\\n.event-image img {\\n  max-width: 100%;\\n  /* Ensures the image scales down with the container */\\n  height: auto;\\n  /* Maintains the aspect ratio */\\n  border-radius: 5px;\\n  /* Optional: Rounded corners for images */\\n  transition: transform 0.3s ease;\\n  /* Optional: Smooth transition for hover effect */\\n}\\n\\n/* Optional: Add a hover effect to images */\\n.event-image img:hover {\\n  transform: scale(1.05);\\n  /* Slightly enlarges the image on hover */\\n}\\n\\n.event-column h2 {\\n  font-size: 2.3rem;\\n  margin-bottom: 15px;\\n}\\n\\n.event-column p {\\n  font-size: 1.2rem;\\n}\\n\\n#contact {\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") no-repeat center center;\\n  background-size: cover;\\n  background-attachment: fixed;\\n  /* This will fix the background image */\\n  position: relative;\\n  /* To ensure the overlay is positioned correctly */\\n  color: #d4a517;\\n  /* Gold text for contrast */\\n  z-index: 1;\\n  /* Dark overlay */\\n  /* Footer with icons */\\n}\\n\\n#contact::before {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.6);\\n  /* Dark effect with 60% opacity */\\n  z-index: -1;\\n  /* Places the overlay behind the text */\\n}\\n\\n@media (max-width: 768px) {\\n  #contact {\\n    background-size: contain;\\n    /* Adjust background size for smaller screens */\\n    background-attachment: scroll;\\n    /* Change to scroll so the image moves with the content */\\n    padding: 30px 10px;\\n    /* Add padding to avoid text touching the edges */\\n  }\\n}\\n@media (max-width: 480px) {\\n  #contact {\\n    background-size: contain;\\n    /* Ensure the background image fits within the screen */\\n    background-position: center;\\n    padding: 30px 10px;\\n    background-attachment: scroll;\\n    /* Change to scroll for mobile */\\n  }\\n\\n  #contact h1, #contact p {\\n    font-size: 1.5rem;\\n    /* Reduce font size for phone display */\\n  }\\n}\\n#contact h1, #contact p {\\n  z-index: 1;\\n  /* Ensure the text stays on top of the overlay */\\n}\\n\\n#contact .contact-icons {\\n  display: flex;\\n  justify-content: center;\\n  padding: 20px;\\n  gap: 20px;\\n  position: relative;\\n  /* Ensure the icons stay on top */\\n}\\n\\n#contact .contact-icons .icon-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-size: 24px;\\n  color: #d4a517;\\n  /* Gold text */\\n}\\n\\n#contact .contact-icons .icon-container a {\\n  font-size: 3rem;\\n  /* Make icons bigger */\\n  color: #d4a517;\\n  /* Icon in gold */\\n}\\n\\n#contact .contact-icons .icon-container a:hover {\\n  color: #a0760c;\\n  /* Darker gold on hover */\\n}\\n\\n#contact .contact-icons .icon-container p {\\n  margin-top: 10px;\\n  font-size: 1.2rem;\\n  /* Text size under the icons */\\n  color: #d4a517;\\n  /* Gold text */\\n}\\n\\n#contact .contact-icons .icon-container.interest-form a {\\n  font-size: 3rem;\\n  color: #d4a517;\\n  /* Gold icon for the interest form */\\n}\\n\\n#contact .contact-icons .icon-container.interest-form a:hover {\\n  color: #a0760c;\\n  /* Darker gold on hover */\\n}\\n\\n/* Carousel/Slider for Current Hermanos */\\n.carousel {\\n  position: relative;\\n  width: 100%;\\n  overflow: hidden;\\n}\\n\\n.slider {\\n  display: flex;\\n  transition: transform 0.8s ease-in-out;\\n  /* Slower transition for the slides */\\n}\\n\\n.slide {\\n  min-width: 100%;\\n  box-sizing: border-box;\\n}\\n\\n.slide img {\\n  width: 500px;\\n  height: auto;\\n  -o-object-fit: cover;\\n     object-fit: cover;\\n}\\n\\n/* Style for navigation arrows */\\nbutton.prev, button.next {\\n  position: absolute;\\n  top: 50%;\\n  transform: translateY(-50%);\\n  background-color: rgba(0, 0, 0, 0.5);\\n  border: none;\\n  color: white;\\n  padding: 15px;\\n  font-size: 18px;\\n  cursor: pointer;\\n  z-index: 2;\\n}\\n\\nbutton.prev {\\n  left: 0;\\n}\\n\\nbutton.next {\\n  right: 0;\\n}\\n\\nbutton.prev:hover, button.next:hover {\\n  background-color: rgba(0, 0, 0, 0.8);\\n}\\n\\n@media (max-width: 768px) {\\n  .slide img {\\n    width: 300px;\\n    /* Make the image smaller for tablets and larger phones */\\n  }\\n}\\n@media (max-width: 480px) {\\n  .slide img {\\n    width: 300px;\\n    /* Further reduce the size for smaller phone screens */\\n  }\\n}\\n/* Multi-row layout for events */\\n.events-container {\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n  grid-gap: 20px;\\n  width: 100%;\\n  padding: 20px;\\n}\\n\\n.events-container .event-column {\\n  background-color: white;\\n  padding: 20px;\\n  border-radius: 5px;\\n  color: #5a2e11;\\n  /* Brown text inside white event cards */\\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\\n}\\n\\n.events-container .event-column:hover {\\n  transform: scale(1.05);\\n  transition: transform 0.3s ease;\\n}\\n\\n@media (max-width: 480px) {\\n  .events-container {\\n    display: flex;\\n    flex-direction: column;\\n    /* Stack events vertically */\\n    align-items: center;\\n    /* Horizontally center the events */\\n    width: 100%;\\n    padding: 10px;\\n  }\\n\\n  .events-container .event-column {\\n    width: 90%;\\n    /* Make event column occupy most of the screen width */\\n    text-align: center;\\n    /* Center text within event columns */\\n  }\\n\\n  .event-column h2 {\\n    font-size: 1.6rem;\\n    margin-bottom: 15px;\\n  }\\n}\\n/* The Modal (background) */\\n.modal {\\n  display: none;\\n  /* Hidden by default */\\n  position: fixed;\\n  /* Stay in place */\\n  z-index: 999;\\n  /* Sit on top */\\n  left: 0;\\n  top: 50px;\\n  /* Add a top margin to separate from the navbar */\\n  width: 100%;\\n  /* Full width */\\n  height: calc(100% - 50px);\\n  /* Adjust height based on the top margin */\\n  background-color: rgba(0, 0, 0, 0.5);\\n  /* Black background with opacity */\\n  overflow: auto;\\n  /* Enable scrolling if needed */\\n  padding-top: 20px;\\n  /* Optional: Add additional padding inside the modal */\\n}\\n\\n/* Modal Content */\\n.modal-content {\\n  background-color: white;\\n  margin: 0 auto;\\n  /* Centered vertically based on auto margin */\\n  padding: 20px;\\n  border-radius: 8px;\\n  width: 50%;\\n  /* Reduced width for the modal content */\\n  max-width: 700px;\\n  /* Set a maximum width for larger screens */\\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);\\n  /* Subtle shadow */\\n  position: relative;\\n  top: 20px;\\n  /* Add additional margin from the top inside the modal */\\n}\\n\\n/* Smaller image inside the modal */\\n.modal-content img {\\n  max-width: 80%;\\n  /* Reduced the image width to 80% of the modal content */\\n  height: auto;\\n  /* Maintain the aspect ratio */\\n  display: block;\\n  margin: 0 auto;\\n  /* Center the image within the modal */\\n}\\n\\n/* Close Button */\\n.modal .close {\\n  position: absolute;\\n  top: 10px;\\n  right: 20px;\\n  color: #aaa;\\n  font-size: 28px;\\n  font-weight: bold;\\n  cursor: pointer;\\n}\\n\\n.modal .close:hover,\\n.modal .close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n.modal .close:hover,\\n.modal .close:focus {\\n  color: black;\\n  text-decoration: none;\\n  cursor: pointer;\\n}\\n\\n@media (max-width: 480px) {\\n  .modal-content {\\n    width: 95%;\\n    /* Make the modal take almost the full width of the screen */\\n    padding: 15px;\\n    /* Reduce padding for smaller screens */\\n    font-size: 1rem;\\n    /* Adjust text size for readability */\\n  }\\n\\n  .modal-content h2 {\\n    font-size: 1.5rem;\\n    /* Adjust heading size */\\n    margin-bottom: 10px;\\n    /* Adjust spacing */\\n  }\\n\\n  .modal-content p {\\n    font-size: 1rem;\\n    /* Adjust paragraph text size */\\n    line-height: 1.4;\\n    /* Adjust line height for better readability */\\n    margin-bottom: 10px;\\n  }\\n\\n  .modal-content img {\\n    max-width: 100%;\\n    /* Make the image fill the modal's width */\\n    height: auto;\\n    border-radius: 5px;\\n    /* Add rounded corners */\\n    margin-top: 10px;\\n    /* Add spacing above the image */\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./css/main.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"../node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./css/main.scss */ \"./css/main.scss?122f\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/logo.webp */ \"./assets/logo.webp\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6904.jpg */ \"./assets/IMG_6904.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6907.jpg */ \"./assets/IMG_6907.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6908.jpg */ \"./assets/IMG_6908.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6909.jpg */ \"./assets/IMG_6909.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6910.jpg */ \"./assets/IMG_6910.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6911.jpg */ \"./assets/IMG_6911.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6912.jpg */ \"./assets/IMG_6912.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_6913.jpg */ \"./assets/IMG_6913.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_9227.jpg */ \"./assets/IMG_9227.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_9228.jpg */ \"./assets/IMG_9228.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/imagejpeg.JPEG */ \"./assets/imagejpeg.JPEG\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_3615.jpg */ \"./assets/IMG_3615.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/IMG_9247.jpg */ \"./assets/IMG_9247.jpg\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_15___ = new URL(/* asset import */ __webpack_require__(/*! ./js/main.js */ \"./js/main.js?db67\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);\nvar ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);\nvar ___HTML_LOADER_REPLACEMENT_5___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_5___);\nvar ___HTML_LOADER_REPLACEMENT_6___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_6___);\nvar ___HTML_LOADER_REPLACEMENT_7___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_7___);\nvar ___HTML_LOADER_REPLACEMENT_8___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_8___);\nvar ___HTML_LOADER_REPLACEMENT_9___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_9___);\nvar ___HTML_LOADER_REPLACEMENT_10___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_10___);\nvar ___HTML_LOADER_REPLACEMENT_11___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_11___);\nvar ___HTML_LOADER_REPLACEMENT_12___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_12___);\nvar ___HTML_LOADER_REPLACEMENT_13___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_13___);\nvar ___HTML_LOADER_REPLACEMENT_14___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_14___);\nvar ___HTML_LOADER_REPLACEMENT_15___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_15___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"utf-8\\\" />\\n    <meta http-equiv=\\\"x-ua-compatible\\\" content=\\\"ie=edge\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>MP1</title>\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\n    <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css\\\">\\n    <link href=\\\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap\\\" rel=\\\"stylesheet\\\">\\n</head>\\n\\n<body>\\n    <!-- Sticky Navbar -->\\n    <nav id=\\\"navbar\\\">\\n        <ul>\\n            <li><a href=\\\"#mission\\\" class=\\\"nav-link\\\">Mission</a></li>\\n            <li><a href=\\\"#current-hermanos\\\" class=\\\"nav-link\\\">Current Hermanos</a></li>\\n            <li>\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" alt=\\\"LUL Logo\\\" class=\\\"center-logo\\\">\\n            </li>\\n            <li><a href=\\\"#events\\\" class=\\\"nav-link\\\">Events</a></li>\\n            <li><a href=\\\"#contact\\\" class=\\\"nav-link\\\">Contact Us</a></li>\\n        </ul>\\n    </nav>\\n\\n    <!-- Mission Section -->\\n    <section id=\\\"mission\\\">\\n        <div class=\\\"center-vertical\\\">\\n            <h1>Mission</h1>\\n            <p>La Unidad Latina, Lambda Upsilon Lambda Fraternity, Incorporated primarily seeks to take a leadership role in meeting \\n                the needs of the Latino community through academic achievement, cultural awareness, community service and promotion of the \\n                Latino culture and people.</p>\\n        </div>\\n    </section>\\n\\n    <section id=\\\"pillars\\\">\\n        <div class=\\\"video-container\\\">\\n            <!-- Full-screen background video -->\\n            <iframe class=\\\"background-video\\\" src=\\\"https://www.youtube.com/embed/86mzsHf3nrA?autoplay=1&mute=1&loop=1&playlist=86mzsHf3nrA\\\" \\n                frameborder=\\\"0\\\" \\n                allow=\\\"autoplay; encrypted-media\\\" \\n                allowfullscreen \\n                style=\\\"width:100%; height:100%;\\\">\\n            </iframe>\\n            \\n            <div class=\\\"dark-overlay\\\"></div>\\n            <div class=\\\"pillars-content\\\">\\n                <h1>Pillars</h1>\\n                <div class=\\\"pillars-grid\\\">\\n                    <h2>Academics</h2>\\n                    <h2>Culture</h2>\\n                    <h2>Brotherhood</h2>\\n                    <h2>Service</h2>\\n                </div>\\n            </div>\\n        </div>\\n    </section>\\n\\n    <!-- Current Hermanos Section -->\\n    <section id=\\\"current-hermanos\\\">\\n        <h1>Current Hermanos</h1>\\n        <div class=\\\"carousel\\\">\\n            <div class=\\\"slider\\\">\\n                <!-- Larger images for the brothers in the slider -->\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"Brother 1\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_3___ + \"\\\" alt=\\\"Brother 2\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_4___ + \"\\\" alt=\\\"Brother 3\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_5___ + \"\\\" alt=\\\"Brother 4\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_6___ + \"\\\" alt=\\\"Brother 5\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_7___ + \"\\\" alt=\\\"Brother 6\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_8___ + \"\\\" alt=\\\"Brother 7\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_9___ + \"\\\" alt=\\\"Brother 8\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_10___ + \"\\\" alt=\\\"Brother 9\\\"></div>\\n                <div class=\\\"slide\\\"><img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_11___ + \"\\\" alt=\\\"Brother 10\\\"></div>\\n            </div>\\n            <!-- Add navigation arrows -->\\n            <button class=\\\"prev\\\" id=\\\"prev\\\">&#10094;</button>\\n            <button class=\\\"next\\\" id=\\\"next\\\">&#10095;</button>\\n        </div>\\n    </section>\\n\\n    <!-- Events Section -->\\n    <section id=\\\"events\\\">\\n        <h1>Events</h1>\\n        <div class=\\\"events-container\\\">\\n            <div class=\\\"event-column\\\" data-modal=\\\"modal1\\\">\\n                <h2>Hispanic Heritage Month BBQ</h2>  \\n    \\n                <div class=\\\"event-image\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Hispanic Heritage Month BBQ Event\\\">\\n                </div>\\n            </div>\\n    \\n            <div class=\\\"event-column\\\" data-modal=\\\"modal2\\\">\\n                <h2>Women's Empowerment Dinner</h2>\\n                \\n                <div class=\\\"event-image\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Women's Empowerment Dinner Event\\\">\\n                </div>\\n            </div>\\n    \\n            <div class=\\\"event-column\\\" data-modal=\\\"modal3\\\">\\n                <h2>H.O.P.E Gala</h2>\\n    \\n                <div class=\\\"event-image\\\">\\n                    <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"H.O.P.E Gala Event\\\">\\n                </div>\\n            </div>\\n        </div>\\n    </section>\\n\\n    <div id=\\\"modal1\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\">&times;</span>\\n            <h2>Hispanic Heritage Month BBQ</h2>\\n            <p>\\n                We host our annual BBQ at the beginning of Hispanic Heritage Month. \\n                For this event, we invite all LCASO organizations to bring dishes that represent Latin American cuisine. \\n                Attendees will enjoy a variety of foods and live performances from a grupo and a DJ that celebrate the rich Latino culture.\\n            </p>\\n\\n            <div class=\\\"event-image\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_12___ + \"\\\" alt=\\\"Hispanic Heritage Month BBQ Event\\\">\\n            </div>\\n        </div>\\n    </div>\\n    \\n    <div id=\\\"modal2\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\">&times;</span>\\n            <h2>Women's Empowerment Dinner</h2>\\n            <p>\\n                The event brought together students and featured insightful presentations by three distinguished UIUC women faculty members, \\n                who discussed the importance of Women's History Month and empowerment.\\n            </p>\\n\\n            <div class=\\\"event-image\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_13___ + \"\\\" alt=\\\"Women's Empowerment Dinner Event\\\">\\n            </div>\\n        </div>\\n    </div>\\n    \\n    <div id=\\\"modal3\\\" class=\\\"modal\\\">\\n        <div class=\\\"modal-content\\\">\\n            <span class=\\\"close\\\">&times;</span>\\n            <h2>H.O.P.E Gala</h2>\\n            <p>\\n                We host our annual gala to raise funds for the I-HOPE scholarship, awarded annually to four undocumented students. \\n                The evening will feature performances, delicious food, educational activities, and speeches that highlight the undocumented experience.\\n            </p>\\n\\n            <div class=\\\"event-image\\\">\\n                <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_14___ + \"\\\" alt=\\\"H.O.P.E Gala Event\\\">\\n            </div>\\n        </div>\\n    </div>\\n    \\n\\n    <!-- Contact Section -->\\n    <section id=\\\"contact\\\">\\n        <h1>Contact Us</h1>\\n        <div class=\\\"contact-icons\\\">\\n            <div class=\\\"icon-container\\\">\\n                <a href=\\\"https://www.instagram.com/lul_uiuc/\\\" target=\\\"_blank\\\">\\n                    <i class=\\\"fab fa-instagram\\\"></i>\\n                </a>\\n                <p>Instagram</p>\\n            </div>\\n            <div class=\\\"icon-container\\\">\\n                <a href=\\\"https://docs.google.com/forms/d/e/1FAIpQLScXe4jlFV7fCEg045-JZeAcmtNcAzF3KEt3y8JUBswERph0_Q/viewform\\\" target=\\\"_blank\\\">\\n                    <i class=\\\"fas fa-users\\\"></i>\\n                </a>\\n                <p>Interest Form</p>\\n            </div>\\n            <div class=\\\"icon-container\\\">\\n                <a href=\\\"https://www.canva.com/design/DAGSRDXLJzA/j6lSTqFEAkrtelPrspGkLg/edit\\\" target=\\\"_blank\\\">\\n                    <i class=\\\"fas fa-envelope\\\"></i>\\n                </a>\\n                <p>Newsletter</p>\\n            </div>\\n        </div>\\n    </section>\\n\\n    <script src=\\\"\" + ___HTML_LOADER_REPLACEMENT_15___ + \"\\\"></script>\\n</body>\\n\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack:///./index.html?");

/***/ }),

/***/ "./css/main.scss?bd63":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./css/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!*********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \***********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!**********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./assets/IMG_2064.JPEG":
/*!******************************!*\
  !*** ./assets/IMG_2064.JPEG ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9b29fb24d8d76283e77a.JPEG\";\n\n//# sourceURL=webpack:///./assets/IMG_2064.JPEG?");

/***/ }),

/***/ "./assets/imagejpeg.JPEG":
/*!*******************************!*\
  !*** ./assets/imagejpeg.JPEG ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b873f0363a86b325e373.JPEG\";\n\n//# sourceURL=webpack:///./assets/imagejpeg.JPEG?");

/***/ }),

/***/ "./assets/logo.webp":
/*!**************************!*\
  !*** ./assets/logo.webp ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"d688391cc03cff42a3d0.webp\";\n\n//# sourceURL=webpack:///./assets/logo.webp?");

/***/ }),

/***/ "./js/main.js?db67":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"81cd4c25e47fef5d4b67.js\";\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./css/main.scss?122f":
/*!***********************!*\
  !*** ./css/main.scss ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1b1676ce0380ca5fc369.scss\";\n\n//# sourceURL=webpack:///./css/main.scss?");

/***/ }),

/***/ "./assets/IMG_3615.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_3615.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"85f0b54894c6a0fe78a6.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_3615.jpg?");

/***/ }),

/***/ "./assets/IMG_6904.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6904.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9e588da1a4a49850d70e.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6904.jpg?");

/***/ }),

/***/ "./assets/IMG_6907.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6907.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7d0983f72cf0ab5307ba.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6907.jpg?");

/***/ }),

/***/ "./assets/IMG_6908.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6908.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"2d539b98f224199f8d9b.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6908.jpg?");

/***/ }),

/***/ "./assets/IMG_6909.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6909.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"197b656faaba5e41cf59.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6909.jpg?");

/***/ }),

/***/ "./assets/IMG_6910.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6910.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"78fd4c2de98ae861181c.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6910.jpg?");

/***/ }),

/***/ "./assets/IMG_6911.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6911.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"6b7caca3ef73ab046dd7.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6911.jpg?");

/***/ }),

/***/ "./assets/IMG_6912.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6912.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"cfe02c40b4546a17373d.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6912.jpg?");

/***/ }),

/***/ "./assets/IMG_6913.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_6913.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e4fbc6a979eae0b53e73.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_6913.jpg?");

/***/ }),

/***/ "./assets/IMG_9227.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_9227.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"586411313b224a4a5306.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_9227.jpg?");

/***/ }),

/***/ "./assets/IMG_9228.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_9228.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"9a313c61aee4bfb8b565.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_9228.jpg?");

/***/ }),

/***/ "./assets/IMG_9247.jpg":
/*!*****************************!*\
  !*** ./assets/IMG_9247.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c09aaf07c77bf609e275.jpg\";\n\n//# sourceURL=webpack:///./assets/IMG_9247.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;