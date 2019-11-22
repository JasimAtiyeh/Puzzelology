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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony import */ var _src_welcome_screen_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/welcome screen/banner */ "./src/welcome screen/banner.js");
/* harmony import */ var _src_puzzle_canvas_toggle_settings_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/puzzle canvas/toggle_settings_menu */ "./src/puzzle canvas/toggle_settings_menu.js");



const init = () => (
  document.addEventListener("DOMContentLoaded", () => {
    const titleBanner = document.getElementById('selection-screen-title-banner');
    const imageSelector = document.getElementById("selection-screen-selection");
    const puzzle = document.getElementById('puzzle');
    const settings = document.getElementById('settings');
    const settingsMenu = document.getElementById('settings-menu');
    const clock = document.getElementById('clock');

    imageSelector.classList.add('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');

    Object(_src_welcome_screen_banner__WEBPACK_IMPORTED_MODULE_0__["banner"])(titleBanner, imageSelector, puzzle);
    settings.addEventListener('click', () => Object(_src_puzzle_canvas_toggle_settings_menu__WEBPACK_IMPORTED_MODULE_1__["toggleSettingsMenu"])(
      settingsMenu,
      titleBanner,
      puzzle,
      imageSelector
    ));

    let time;
    setTimeout(() => {
      time += 1;
      clock.innerHTML = time;
    }, 1000);
  })
);

document.addEventListener('onload', init());

/***/ }),

/***/ "./src/image selection/image_selection.js":
/*!************************************************!*\
  !*** ./src/image selection/image_selection.js ***!
  \************************************************/
/*! exports provided: imageSelection, Images */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imageSelection", function() { return imageSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Images", function() { return Images; });
/* harmony import */ var _puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ..//puzzle canvas/puzzle_canvas */ "./src/puzzle canvas/puzzle_canvas.js");


const imageSelection = (titleBanner, imageSelector, puzzle, difficulty) => {
  let images = Object.values(Images);
  let imageSelection = document.getElementById('selection-screen-image-selection');
  let setDifficulty = document.getElementById('set-difficulty');
  let uploadImage = document.getElementById('upload-image-input');

  images.map(imageLink => {
    let image = document.createElement('img');
    image.setAttribute('src', imageLink);
    image.setAttribute('width', '250');
    image.setAttribute('height', '200');
    image.addEventListener('click', (e) => {
      imageSelector.classList.add('hidden');
      puzzle.classList.remove('hidden');
      Object(_puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_0__["puzzleCanvas"])(difficulty, e.target.src);
    });
    imageSelection.appendChild(image);
  });
  
  setDifficulty.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    imageSelector.classList.add('hidden');
  });

  uploadImage.addEventListener('change', (e) => {
    const input = e.target;
    let src = window.URL.createObjectURL(input.files[0]);

    imageSelector.classList.add('hidden');
    puzzle.classList.remove('hidden');
    Object(_puzzle_canvas_puzzle_canvas__WEBPACK_IMPORTED_MODULE_0__["puzzleCanvas"])(difficulty, src);
  });
};

// export const Images = {
//   image1: 'https://puzzleology.s3.us-east-2.amazonaws.com/A2_SigmaPhiEpsilon-900x600.jpg',
//   image2: 'https://puzzleology.s3.us-east-2.amazonaws.com/5718269042_8b2181bed8_o-900x600.png',
//   image3: 'https://puzzleology.s3.us-east-2.amazonaws.com/A2_SigmaPhiEpsilon-900x600.jpg',
//   image4: 'https://puzzleology.s3.us-east-2.amazonaws.com/KIlworth-House-Hotel_0003-3-900x600.jpeg',
//   image5: 'https://puzzleology.s3.us-east-2.amazonaws.com/KIlworth-House-Hotel_0003-3-900x600.jpg',
//   image6: 'https://puzzleology.s3.us-east-2.amazonaws.com/Wayne_campus_scienglib_900x600.jpg',
//   image7: 'https://puzzleology.s3.us-east-2.amazonaws.com/bahia-de-las-aguilas-pedernales-900x600.jpg',
//   image8: 'https://puzzleology.s3.us-east-2.amazonaws.com/heidi-kaden-n7NwHLauoJ0-unsplash-900x600.jpg',
//   image9: 'https://puzzleology.s3.us-east-2.amazonaws.com/march_moon.900x600.jpg',
//   image10: 'https://puzzleology.s3.us-east-2.amazonaws.com/spice-of-life-900x600.jpg'
// };

const Images = {
  image1: '../../assets/images/111919_Events-900x600.jpg',
  image2: '../../assets/images/5718269042_8b2181bed8_o-900x600.png',
  image3: '../../assets/images/A2_SigmaPhiEpsilon-900x600.jpg',
  image4: '../../assets/images/bahia-de-las-aguilas-pedernales-900x600.jpg',
  image5: '../../assets/images/heidi-kaden-n7NwHLauoJ0-unsplash-900x600.jpg',
  image6: '../../assets/images/KIlworth-House-Hotel_0003-3-900x600.jpeg',
  image7: '../../assets/images/KIlworth-House-Hotel_0003-3-900x600.jpg',
  image8: '../../assets/images/march_moon.900x600.jpg',
  image9: '../../assets/images/spice-of-life-900x600.jpg',
  image10: '../../assets/images/Wayne_campus_scienglib_900x600.jpg'
};

/***/ }),

/***/ "./src/puzzle canvas/puzzle_canvas.js":
/*!********************************************!*\
  !*** ./src/puzzle canvas/puzzle_canvas.js ***!
  \********************************************/
/*! exports provided: puzzleCanvas, initPuzzle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "puzzleCanvas", function() { return puzzleCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPuzzle", function() { return initPuzzle; });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../.. */ "./index.js");


let PUZZLE_DIFFICULTY;
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
  let audio = document.getElementById('audio');
  audio.muted = false;
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
  canvas.style.backgroundSize = 'cover';
  canvas.width = puzzleWidth;
  canvas.height = puzzleHeight;
  canvas.style.border = "1px solid #16619f";
};

const initPuzzle = () => {
  pieces = [];
  mouse = { x:0, y:0 };
  currentPiece = null;
  currentDropPiece = null;
  ctx.drawImage(img, 0, 0, puzzleWidth, puzzleHeight);
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
};

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
  if (e.clientX || e.clientY === 0) {
    mouse.x = e.clientX - canvas.offsetLeft;
    mouse.y = e.clientY - canvas.offsetTop;
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
  if (e.clientX || e.clientY === 0) {
    mouse.x = e.clientX - canvas.offsetLeft;
    mouse.y = e.clientY - canvas.offsetTop;
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

/***/ "./src/puzzle canvas/toggle_settings_menu.js":
/*!***************************************************!*\
  !*** ./src/puzzle canvas/toggle_settings_menu.js ***!
  \***************************************************/
/*! exports provided: toggleSettingsMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleSettingsMenu", function() { return toggleSettingsMenu; });
/* harmony import */ var _puzzle_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./puzzle_canvas */ "./src/puzzle canvas/puzzle_canvas.js");


const toggleSettingsMenu = (
  settingsMenu,
  titleBanner,
  puzzle,
  imageSelector
  ) => {
  settingsMenu.classList.toggle('hidden');
  let mute = document.getElementById('mute');
  let notMute = document.getElementById('not-mute');
  let setDifficulty = document.getElementById('set-difficulty-button');
  let selectImage = document.getElementById('select-image');
  let restartPuzzle = document.getElementById('restart-puzzle');
  let audio = document.getElementById('audio');

  notMute.addEventListener('click', () => {
    audio.muted = true;
    notMute.classList.add('hidden');
    mute.classList.remove('hidden');
  });

  mute.addEventListener('click', () => {
    audio.muted = false;
    notMute.classList.remove('hidden');
    mute.classList.add('hidden');
  });

  setDifficulty.addEventListener('click', () => {
    titleBanner.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    audio.muted = true;
  });
  
  selectImage.addEventListener('click', () => {
    imageSelector.classList.remove('hidden');
    puzzle.classList.add('hidden');
    settingsMenu.classList.add('hidden');
    audio.muted = true;
  });
  
  restartPuzzle.addEventListener('click', () => {
    Object(_puzzle_canvas__WEBPACK_IMPORTED_MODULE_0__["initPuzzle"])();
    settingsMenu.classList.add('hidden');
  });
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