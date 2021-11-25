'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👍 Correct number!';
console.log(document.querySelector('.message').textContent);

// amending "values" for the HTML element that are not number
// .number (plain text typed in html)  & .score (label)
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// amending the value of a number
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
// reminder - this is function
function() {
    console.log(23);
};

// reminder - this is function expression
const x = function() {
    console.log(23);
};
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// EVENT LISTENING
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🤬 No number! ';

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😤 Too High!';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤗 you lost lol!';
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😴 Too Low ...';
      score = score - 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🤗 you lost lol!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});
