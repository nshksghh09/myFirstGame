'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.number').textContent = '?';
  if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'you win🎉';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (!guess) {
    document.querySelector('.message').textContent = 'enter a number';
  } else if (guess !== secretNumber) {
    if (score >= 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'too high📈' : 'too low📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score == 0) {
      document.querySelector('.message').textContent = 'you lost';
      document.querySelector('.score').textContent = score;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score;
  });
});
