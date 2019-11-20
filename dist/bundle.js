/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/default_images.js":
/*!**********************************!*\
  !*** ./assets/default_images.js ***!
  \**********************************/
/*! exports provided: Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
const Images = {
  image1: 'https://www.montereyairport.com/sites/main/files/imagecache/hd/main-images/camera_lense_0.jpeg',
  image2: 'http://hdwpro.com/wp-content/uploads/2015/12/Widescreen-Image.jpg',
  image3: 'https://www.aussiespecialist.com/content/asp/en/sales-resources/image-and-video-galleries/_jcr_content/mainParsys/hero/image.adapt.1663.medium.jpg',
  image4: 'https://cdn.vox-cdn.com/thumbor/XKPu8Ylce2Cq6yi_pgyLyw80vb4=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63380914/PIA16695_large.0.jpg',
  image5: 'https://i.all3dp.com/cdn-cgi/image/fit=cover,w=1284,h=722,gravity=0.5x0.5,format=auto/wp-content/uploads/2018/12/28144052/background-images-can-come-in-handy-when-modeling-tian-ooi-all3dp-181228.jpg',
  image6: 'https://cdn.bitdegree.org/learn/pexels-photo-920220.jpeg?4d5e638c',
  image7: 'http://i.imgur.com/RRUe0Mo.png',
  image8: 'https://scipy-lectures.org/_images/face.png',
  image9: 'https://ansunibaate.com/wp-content/uploads/2018/07/butterfly-image-wallpaper-d.jpg',
  image10: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Polarlicht_2.jpg'
};

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_welcome_screen_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/welcome screen/banner */ "./src/welcome screen/banner.js");
/* harmony import */ var _src_image_selection_image_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/image selection/image_selection */ "./src/image selection/image_selection.js");



document.addEventListener("DOMContentLoaded", () => {
  const titleBanner = document.getElementById('selection-screen-title-banner');
  const imageSelector = document.getElementById("selection-screen-image-selection");
  const canvas = document.getElementById('canvas');
  const puzzle = document.getElementById('puzzle');
  imageSelector.classList.add('hidden');
  canvas.classList.add('hidden');
  puzzle.classList.add('hidden');

  Object(_src_welcome_screen_banner__WEBPACK_IMPORTED_MODULE_0__["banner"])(titleBanner, imageSelector, canvas);
  Object(_src_image_selection_image_selection__WEBPACK_IMPORTED_MODULE_1__["imageSelection"])(titleBanner, imageSelector, canvas);
  
});


/***/ }),

/***/ "./src/image selection/image_selection.js":
/*!************************************************!*\
  !*** ./src/image selection/image_selection.js ***!
  \************************************************/
/*! exports provided: imageSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSelection", function() { return imageSelection; });
/* harmony import */ var _assets_default_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/default_images */ "./assets/default_images.js");
/* harmony import */ var _puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ..//puzzle canvas/puzzle_canvas */ "./src/puzzle canvas/puzzle_canvas.js");



const imageSelection = (titleBanner, imageSelector, canvas) => {
  let images = Object.values(_assets_default_images__WEBPACK_IMPORTED_MODULE_0__["Images"]);
  let cancel = document.getElementById('cancel');

  images.map(imageLink => {
    let image = document.createElement('img');
    image.setAttribute('src', imageLink);
    image.setAttribute('width', '170');
    image.setAttribute('height', '120');
    image.addEventListener('click', (e) => {
      imageSelector.classList.add('hidden');
      canvas.classList.remove('hidden');
      Object(_puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_1__["puzzleCanvas"])(canvas, e.target.src);
      // puzzle.setAttribute('src', e.target.src);
      // puzzle.setAttribute('onload', 'snapfit.add(this), { mixed: true }');
    });
    imageSelector.appendChild(image);
    image.before(cancel);
  });
  
  cancel.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    imageSelector.classList.add('hidden');
  });
};

/***/ }),

/***/ "./src/puzzle canvas/on_image.js":
/*!***************************************!*\
  !*** ./src/puzzle canvas/on_image.js ***!
  \***************************************/
/*! exports provided: onImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImage", function() { return onImage; });
const onImage = (e) => {
  pieceWidth = canvas.width / 100;
  pieceHeight = canvas.height / 100;
  puzzleWidth = pieceWidth * 100;
  puzzleHeight = pieceHeight * 100;
};



/***/ }),

/***/ "./src/puzzle canvas/puzzle_canvas.js":
/*!********************************************!*\
  !*** ./src/puzzle canvas/puzzle_canvas.js ***!
  \********************************************/
/*! exports provided: puzzleCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puzzleCanvas", function() { return puzzleCanvas; });
/* harmony import */ var _on_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./on_image */ "./src/puzzle canvas/on_image.js");


const PUZZLE_DIFFICULTY = 4;
const PUZZLE_HOVER_TINT = '#009900';

let canvas;
let stage;

let img;
let pieces;
let puzzleWidth;
let puzzleHeight;
let pieceWidth;
let pieceHeight;
let currentPiece;
let currentDropPiece;

let mouse;

const puzzleCanvas = (canvas, imageSrc) => {
  const ctx = canvas.getContext("2d");
  let pieces = [];

  function createPieces(image, canvas) {
    for (let idx1 = 0; idx1 <= canvas.width; idx1 = idx1 + 100) {
      for (let idx2 = 0; idx2 < canvas.height; idx2 = idx2 + 100) {
        let piece = ctx.drawImage(image, idx1, idx2, 100, 100, idx1, idx2, 100, 100);
        pieces.push(piece);
        console.log(piece);
      }
    }
  }

  const image = new Image();
  image.src = imageSrc;
  image.addEventListener('load', _on_image__WEBPACK_IMPORTED_MODULE_0__["onImage"], false);
  // image.onload = createPieces(image, canvas);
  console.log(pieces);
};

/***/ }),

/***/ "./src/welcome screen/banner.js":
/*!**************************************!*\
  !*** ./src/welcome screen/banner.js ***!
  \**************************************/
/*! exports provided: banner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "banner", function() { return banner; });
/* harmony import */ var _set_difficulty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_difficulty */ "./src/welcome screen/set_difficulty.js");


const banner = (titleBanner, imageSelector, canvas) => {
  let difficultyButtons = document.querySelectorAll('.difficulty-buttons');
  difficultyButtons.forEach(button => button.addEventListener('click', () => (
    Object(_set_difficulty__WEBPACK_IMPORTED_MODULE_0__["setDifficulty"])(button.textContent, titleBanner, imageSelector, canvas)
  )));
};

/***/ }),

/***/ "./src/welcome screen/set_difficulty.js":
/*!**********************************************!*\
  !*** ./src/welcome screen/set_difficulty.js ***!
  \**********************************************/
/*! exports provided: setDifficulty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDifficulty", function() { return setDifficulty; });
const setDifficulty = (level, titleBanner, imageSelector, canvas) => {
  let width;
  let height;
  if (level === 'Easy') {
    width = 700;
    height = 500;
  } else if (level === 'Medium') {
    width = 900;
    height = 600;
  } else if (level === 'Hard') {
    width = 1100;
    height = 800;
  }
  titleBanner.classList.add('hidden');
  imageSelector.classList.remove('hidden');

  // puzzle.setAttribute('width', width);
  // puzzle.setAttribute('height', height);

  canvas.width = width;
  canvas.height = height;
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map