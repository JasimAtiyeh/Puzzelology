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


document.addEventListener("DOMContentLoaded", () => {
  const titleBanner = document.getElementById('selection-screen-title-banner');
  const imageSelector = document.getElementById("selection-screen-image-selection");
  const puzzle = document.getElementById('puzzle');
  imageSelector.classList.add('hidden');
  puzzle.classList.add('hidden');

  Object(_src_welcome_screen_banner__WEBPACK_IMPORTED_MODULE_0__["banner"])(titleBanner, imageSelector, puzzle);
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



const imageSelection = (titleBanner, imageSelector, puzzle, difficulty) => {
  let images = Object.values(_assets_default_images__WEBPACK_IMPORTED_MODULE_0__["Images"]);
  let cancel = document.getElementById('cancel');

  images.map(imageLink => {
    let image = document.createElement('img');
    image.setAttribute('src', imageLink);
    image.setAttribute('width', '170');
    image.setAttribute('height', '120');
    image.addEventListener('click', (e) => {
      imageSelector.classList.add('hidden');
      puzzle.classList.remove('hidden');
      Object(_puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_1__["puzzleCanvas"])(difficulty, e.target.src);
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

/***/ "./src/puzzle canvas/puzzle_canvas.js":
/*!********************************************!*\
  !*** ./src/puzzle canvas/puzzle_canvas.js ***!
  \********************************************/
/*! exports provided: puzzleCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puzzleCanvas", function() { return puzzleCanvas; });
let PUZZLE_DIFFICULTY = 10;
let PUZZLE_HOVER_TINT = '#009900';
let canvas;
let ctx;
let img;
let pieces;
let puzzleWidth;
let puzzleHeight;
let pieceWidth;
let pieceHeight;
let currentPiece;
let currentDropPiece;
let mouse;

const puzzleCanvas = (difficulty, imageSrc) => {
  img = new Image();
  img.addEventListener('load', onImage, false);
  img.setAttribute('width', '900');
  img.setAttribute('height', '600');
  img.src = imageSrc;
  PUZZLE_DIFFICULTY = difficulty;
};

const onImage = (e) => {
  pieceWidth = Math.floor(img.width / PUZZLE_DIFFICULTY);
  pieceHeight = Math.floor(img.height / PUZZLE_DIFFICULTY);
  puzzleWidth = pieceWidth * PUZZLE_DIFFICULTY;
  puzzleHeight = pieceHeight * PUZZLE_DIFFICULTY;
  setCanvas();
  initPuzzle();
};

const setCanvas = () => {
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext('2d');
  canvas.width = puzzleWidth;
  canvas.height = puzzleHeight;
  canvas.style.border = "1px solid black";
}

const initPuzzle = () => {
  pieces = [];
  mouse = { x:0, y:0 };
  currentPiece = null;
  currentDropPiece = null;
  ctx.drawImage(img, 0, 0, puzzleWidth, puzzleHeight, 0, 0, puzzleWidth, puzzleHeight);
  createTile("Click to start puzzle");
  buildPieces();
};

const createTile = msg => {
  ctx.fillStyle = "#000000";
  ctx.globalAlpha = .4;
  ctx.fillRect(100, puzzleHeight - 40, puzzleWidth - 200, 40);
  ctx.fillStyle = "#FFFFFF";
  ctx.globalAlpha = 1;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.font = "20px Arial";
  ctx.fillText(msg, puzzleWidth / 2, puzzleHeight - 20);
}

const buildPieces = () => {
  let piece;
  let xPos = 0;
  let yPos = 0;

  for (let i = 0; i < PUZZLE_DIFFICULTY * PUZZLE_DIFFICULTY; i++) {
    piece = {};
    piece.sx = xPos;
    piece.sy = yPos;
    pieces.push(piece);
    xPos += pieceWidth;
    if (xPos >= puzzleWidth) {
      xPos = 0;
      yPos += pieceHeight;
    }
  }
  document.onmousedown = shufflePuzzle;
};

const shufflePuzzle = () => {
  let xPos = 0;
  let yPos = 0;

  pieces = shuffleArray(pieces);
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  for (let i = 0; i < pieces.length; i++) {
    let piece = pieces[i];
    piece.xPos = xPos;
    piece.yPos = yPos;
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, xPos, yPos, pieceWidth, pieceHeight);
    ctx.strokeRect(xPos, yPos, pieceWidth, pieceHeight);
    xPos += pieceWidth;
    if (xPos >= puzzleWidth) {
      xPos = 0;
      yPos += pieceHeight;
    }
  }
  document.onmousedown = onPuzzleClick;
  function shuffleArray(pieces) {
    for (var j, x, i = pieces.length; i; j = parseInt(Math.random() * i), x = pieces[--i], pieces[i] = pieces[j], pieces[j] = x);
    return pieces;
  }
};

const onPuzzleClick = e => {
  if (e.layerX || e.layerY === 0) {
    mouse.x = e.layerX - canvas.offsetLeft;
    mouse.y = e.layerY - canvas.offsetTop;
  } else if (e.offsetX || e.offsetY === 0) {
    mouse.x = e.offsetX - canvas.offsetLeft;
    mouse.y = e.offsetY - canvas.offsetTop;
  }

  currentPiece = checkPieceClicked();
  if (currentPiece !== null) {
    ctx.clearRect(currentPiece.xPos, currentPiece.yPos, pieceWidth, pieceHeight);
    ctx.save();
    ctx.globalAlpha = .9;
    ctx.drawImage(img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight, mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
    ctx.restore();
    document.onmousemove = updatePuzzle;
    document.onmouseup = pieceDropped;
  }
};

const checkPieceClicked = () => {
  let piece;

  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    if ((mouse.x < piece.xPos) || (mouse.x > (piece.xPos + pieceWidth)) || (mouse.y < piece.yPos) || (mouse.y > (piece.yPos + pieceHeight))) {
      continue;
    } else {
      return piece;
    }
  }
  return null;
};

const updatePuzzle = (e) => {
  currentDropPiece = null;
  if (e.layerX || e.layerY === 0) {
    mouse.x = e.layerX - canvas.offsetLeft;
    mouse.y = e.layerY - canvas.offsetTop;
  } else if (e.offsetX || e.offsetY === 0) {
    mouse.x = e.offsetX - canvas.offsetLeft;
    mouse.y = e.offsetY - canvas.offsetTop;
  }
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  let piece;
  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    if (piece === currentPiece) {
      continue;
    }
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPos, piece.yPos, pieceWidth, pieceHeight)
    ctx.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);

    if (currentDropPiece === null) {
      if (mouse.x < piece.xPos || mouse.x > (piece.xPos + pieceWidth) || mouse.y < piece.yPos || mouse.y > (piece.yPos + pieceHeight)) {

      } else {
        currentDropPiece = piece;
        ctx.save();
        ctx.globalAlpha = 0.4;
        ctx.fillStyle = PUZZLE_HOVER_TINT;
        ctx.fillRect(currentDropPiece.xPos, currentDropPiece.yPos, pieceWidth, pieceHeight);
        ctx.restore();
      }
    }
  }
  ctx.save();
  ctx.globalAlpha = 0.6;
  ctx.drawImage(img, currentPiece.sx, currentPiece.sy, pieceWidth, pieceHeight, mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
  ctx.restore();
  ctx.strokeRect(mouse.x - (pieceWidth / 2), mouse.y - (pieceHeight / 2), pieceWidth, pieceHeight);
};

const pieceDropped = e => {
  document.onmousemove = null;
  document.onmouseup = null;
  if (currentDropPiece !== null) {
    let tmp = { xPos: currentPiece.xPos, yPos: currentPiece.yPos };
    currentPiece.xPos = currentDropPiece.xPos;
    currentPiece.yPos = currentDropPiece.yPos;
    currentDropPiece.xPos = tmp.xPos;
    currentDropPiece.yPos = tmp.yPos;
  }
  resetPuzzleAndCheckWin();
};

const resetPuzzleAndCheckWin = () => {
  ctx.clearRect(0, 0, puzzleWidth, puzzleHeight);

  let gameWin = true;
  let piece;
  for (let i = 0; i < pieces.length; i++) {
    piece = pieces[i];
    ctx.drawImage(img, piece.sx, piece.sy, pieceWidth, pieceHeight, piece.xPos, piece.yPos, pieceWidth, pieceHeight);
    ctx.strokeRect(piece.xPos, piece.yPos, pieceWidth, pieceHeight);
    if (piece.xPos !== piece.sx || piece.yPos !== piece.sy) {
      gameWin = false;
    }
  }
  if (gameWin) {
    setTimeout(gameOver, 500);
  }
};

const gameOver = () => {
  document.onmousedown = null;
  document.onmousemove = null;
  document.onmouseup = null;
  initPuzzle();
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


const banner = (titleBanner, imageSelector, puzzle) => {
  let difficultyButtons = document.querySelectorAll('.difficulty-buttons');
  difficultyButtons.forEach(button => button.addEventListener('click', () => (
    Object(_set_difficulty__WEBPACK_IMPORTED_MODULE_0__["setDifficulty"])(button.textContent, titleBanner, imageSelector, puzzle)
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
/* harmony import */ var _image_selection_image_selection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image selection/image_selection */ "./src/image selection/image_selection.js");


const setDifficulty = (level, titleBanner, imageSelector, puzzle) => {
  let difficulty;
  if (level === 'Easy') {
    difficulty = 4;
  } else if (level === 'Medium') {
    difficulty = 7;
  } else if (level === 'Hard') {
    difficulty = 10;
  }
  titleBanner.classList.add('hidden');
  imageSelector.classList.remove('hidden');
  Object(_image_selection_image_selection__WEBPACK_IMPORTED_MODULE_0__["imageSelection"])(titleBanner, imageSelector, puzzle, difficulty);
};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map