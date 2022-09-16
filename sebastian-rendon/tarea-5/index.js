import Game from './js/game.js';
import Puzzle from './js/puzzle.js';

let game = new Game();

function setup() {
  const sizeFormEl = document.getElementById('size-form');
  sizeFormEl.addEventListener('submit', onSizeFormSubmit);

  const playAgainBtn = document.getElementById('play-again-btn');
  playAgainBtn.addEventListener('click', onPlayAgainBtnClick);
}

function onSizeFormSubmit(evt) {
  evt.preventDefault();
  const formData = new FormData(evt.target);
  const size = Number.parseInt(formData.get('size'));

  game = new Game(new Puzzle(size), document.getElementById('puzzle'));
  game.puzzle.createPuzzleMap();
  game.puzzle.shuffle();
  game.mountPuzzleElement();
}

function onPlayAgainBtnClick() {
  const puzzleEl = game.element;
  puzzleEl.classList.remove('puzzle__body--visible');

  const formEl = document.getElementById('size-form');
  formEl.classList.remove('size-form--hidden');

  const victoryEl = document.getElementById('victory-message');
  victoryEl.classList.remove('victory--open');
}

window.onload = setup;
