const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');
const submitButton = document.querySelector('#buttonSubmit');

let displayRating = document.querySelector('span')

let input

button1.addEventListener('click', function () {
  input = 1;
  updateThankYou()
});

button2.addEventListener('click', function () {
  input = 2;
  updateThankYou()
});

button3.addEventListener('click', function () {
  input = 3;
  updateThankYou()
});

button4.addEventListener('click', function () {
  input = 4;
  updateThankYou()
});

button5.addEventListener('click', function () {
  input = 5;
  updateThankYou()
});

function updateThankYou() {
  switch (input) {
    case 1: displayRating.textContent = '1';
      break;

    case 2: displayRating.textContent = '2';
      break;

    case 3: displayRating.textContent = '3';
      break;

    case 4: displayRating.textContent = '4';
      break;

    case 5: displayRating.textContent = '5';
      break;
  }
}

const rateCard = document.querySelector('#ratingCard');
const thankYouCard = document.querySelector('#thankYouCard');
submitButton.addEventListener('click', changeCard);

function changeCard() {
  rateCard.style.display = 'none';
  thankYouCard.style.display = 'flex';
}
