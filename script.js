'use strict';
// everything we get from the user interface like the value retrieved from the input field is a string

let rand = Math.trunc(Math.random() * 20) + 1;

let score = Number(document.querySelector('.score').textContent);

const setMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

let high = 0;
document.querySelector('.again').addEventListener('click', function () {
  rand = Math.trunc(Math.random() * 20) + 1;
  setMessage('.score', 20);
  setMessage('.message', 'Start guessing');
  setMessage('.number', '?');
  document.querySelector('body').style.backgroundColor = 'black';
  score = 20;
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('body').style.backgroundColor = 'black';
  console.log(guess);
  if (!guess) {
    setMessage('.message', 'No Number !!!');
    // when player wins
  } else if (score > 1) {
    if (guess === rand) {
      document.querySelector('body').style.backgroundColor = '#60b347';
      setMessage('.number', rand);
      setMessage('.message', 'You did it !');
      if (score > high) {
        setMessage('.highscore', score);
        setMessage('.message', 'You did it ! (high score)');
        high = score;
      }
    } else {
      score--;
      setMessage('.message', guess > rand ? 'Too high' : 'Too low');
    }
    setMessage('.score', score);
  } else {
    setMessage('.message', 'You Lost !!');
    setMessage('.score', score - 1);
    document.querySelector('body').style.backgroundColor = 'red';
  }
});
