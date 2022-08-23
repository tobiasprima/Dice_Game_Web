var randomNumber1 = Math.floor(Math.random() * 9) + 1;

var randomDice = 'images/dice' + randomNumber1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src', randomDice);
