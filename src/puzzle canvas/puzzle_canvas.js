import { init } from "../..";

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

export const puzzleCanvas = (difficulty, imageSrc) => {
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

export const initPuzzle = () => {
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
  countTime();
};

const countTime = () => {
  const clock = document.getElementById('clock');
  clock.classList.remove('hidden');

  let seconds = 0;
  let minutes = 0;
  setTimeout(() => {
    seconds += 1;
    if (seconds > 59) {
      seconds = 0;
      minutes += 1;
    }
    console.log(seconds);
    let time = `${minutes}:${seconds}`
    clock.innerHTML = time;
  }, 1000);
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