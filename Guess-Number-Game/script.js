'use strict';

(function () {
  // Initialize game variables
  let secretNumber = generateSecretNumber();
  let score = 20;
  let highScore = 0;

  // Utility function to generate a secret number
  function generateSecretNumber() {
    return Math.trunc(Math.random() * 20) + 1;
  }

  // Utility function to update the UI message
  function displayMessage(message) {
    document.querySelector('.message').textContent = message;
  }

  // Utility function to update the score
  function updateScore(newScore) {
    score = newScore;
    document.querySelector('.score').textContent = score;
  }

  // Utility function to update highScore
  function updateHighScore(newHighScore) {
    highScore = newHighScore;
    document.querySelector('.highScore').textContent = highScore;
  }

  // Utility function to reset the UI to the initial state
  function resetUI() {
    displayMessage('Start guessing...');
    updateScore(20);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  }

  // Function to handle player winning
  function handleWin() {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      updateHighScore(score);
    }
  }

  // Function to handle player guess
  function handleGuess(guess) {
    if (!guess) {
      displayMessage('Enter Your Guess First!');
    } else if (guess < 1 || guess > 20) {
      displayMessage('Guess must be between 1 and 20!');
    } else if (guess === secretNumber) {
      handleWin();
    } else {
      const difference = Math.abs(guess - secretNumber);
      if (difference <= 2) {
        displayMessage('Very close!');
      } else if (difference <= 5) {
        displayMessage('Close!');
      } else {
        displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      }

      if (score > 1) {
        updateScore(score - 1);
      } else {
        displayMessage('You Lost The Game!');
        updateScore(0);
      }
    }
  }

  // Check Button event listener
  document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    handleGuess(guess);
  });

  // Again Button event listener
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = generateSecretNumber();
    resetUI();
  });
})();
