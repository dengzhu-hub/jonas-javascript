'use strict';

let currentScore, activePlayer, playing, scores;
const player1 = document.querySelector('.player--0 ');
const player2 = document.querySelector('.player--1');
const score1 = document.getElementById('score--0');
const score2 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn--roll');
const btn_new = document.querySelector('.btn--new');
const btn_hold = document.querySelector('.btn--hold');
const current1 = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];
  score1.textContent = 0;
  score2.textContent = 0;
  current1.textContent = 0;
  current2.textContent = 0;
  diceEl.classList.add('hidden');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

btn_roll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  } else {
    window.alert('请点击New Game 按钮');
  }
});

btn_hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceEl.classList.toggle('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  } else {
    window.alert('请点击New Game 按钮');
  }
});

btn_new.addEventListener('click', init);
