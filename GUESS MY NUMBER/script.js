'use strict';
// console.log(document.querySelector('.message'));

// const text = document.querySelector('.message');
// text.textContent = 'hello 刘都成';
// document.querySelector('.score').textContent = 12;
// document.querySelector('.number').textContent = 23;
// document.querySelector('.guess').textContent = 23;
// document.querySelector('.guess').value = 12;
// console.log(document.querySelector('.guess').textContent);

// HANDLE CLICK EVENT

var btn = document.querySelector('.check');
var reset = document.querySelector('.again');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
  document.querySelector('.number').style.width = number;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displyHighscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};
const displayBGC = function (bgc) {
  document.body.style.backgroundColor = bgc;
};
const setSecretNumber = function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
};
// const score = Number(document.querySelector('.score').textContent);
// console.log(typeof score);

// console.log(document.querySelector('.score').textContent);

// console.log((document.querySelector('.number').textContent = secretNumber));
const contrast = document.querySelector('.number');
btn.onclick = function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️No number!';
    displayMessage('⛔️ No number!');
    // when player win
  } else if (guess === secretNumber) {
    // change style
    // document.body.style.backgroundColor = '#60b347';
    displayBGC('#60b347');
    // document.querySelector('.number').style.width = '30rem';
    displayNumber('30rem');
    // document.querySelector('.message').textContent = '🎉 Correct number!';
    displayMessage('🎉 Correct number!');
    // console.log((document.querySelector('.number').textContent = secretNumber));
    displayNumber(secretNumber);
    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      displyHighscore(highscore);
    }
    // when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      // displayScore(score);
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      // document.querySelector('.message').textContent = 'You Lose The Game';
      displayMessage('💥 You Lose The Game');
      document.querySelector('.score').textContent = 0;
      // displayScore(0);
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too High';
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose The Game';
  //     document.querySelector('.score').textContent = 0;
  //   } // when guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = 'Too Low';
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lose The Game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
};
reset.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // document.body.style.backgroundColor = '#222';
  displayBGC('#222');
  // document.querySelector('.highscore').textContent = score;
  // document.querySelector('.number').style.width = '15rem';
  displayNumber('15rem');
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.score').textContent = score;
  // displayScore(20);

  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
});

// btn.addEventListener('click', function () {
//   console.log(document.querySelector('.guess').value);
//   document.querySelector('.message').textContent = 'Correct Number';
// });
