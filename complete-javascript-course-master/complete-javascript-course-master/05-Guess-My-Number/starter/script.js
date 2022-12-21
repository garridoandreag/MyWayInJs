'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = '13';

document.querySelector('.score').textContent = '20';

document.querySelector('.guess').value;
*/

const vSecretNumber = Math.trunc(Math.random() * 20) + 1;
let vScore = 20;
document.querySelector('.number').textContent = vSecretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const txtGuess = Number(document.querySelector('.guess').value);

  if (!txtGuess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (txtGuess === vSecretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (txtGuess > vSecretNumber) {
    if (vScore > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      vScore--;
      document.querySelector('.score').textContent = vScore;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      vScore = 0;
      document.querySelector('.score').textContent = vScore;
    }
  } else if (txtGuess < vSecretNumber) {
    if (vScore > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      vScore--;
      document.querySelector('.score').textContent = vScore;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      vScore = 0;
      document.querySelector('.score').textContent = vScore;
    }
  }
});
