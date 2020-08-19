

const squareContainer = document.querySelector('.container[data-morph-to="square"]');
const square = document.querySelector('.container[data-morph-to="square"] > div');
const circleContainer = document.querySelector('.container[data-morph-to="circle"]');
const circle = document.querySelector('.container[data-morph-to="circle"] > div');

const total = 36;
let counter = 1;

while (counter++ < total) {
  let cloneSquare = square.cloneNode(true);
  squareContainer.appendChild(cloneSquare);
  let cloneCircle = circle.cloneNode(true);
  circleContainer.appendChild(cloneCircle);
}
