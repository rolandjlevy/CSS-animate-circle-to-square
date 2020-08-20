// functions for random hex

const base = 16;
const hexStringLength = 6;
const hexChars = [];
let counter = 0;

while (++counter < base) {
  let char = counter.toString(base);
  hexChars.push(char);
}

const getHexString = () => {
  let result = '#';
  let counter = 0;
  while (++counter <= hexStringLength) {
    const n = getRandomNum(hexChars.length-1);
    result += hexChars[n];
  }
  return result;
}

const getRandomNum = (n) => Math.round(Math.random() * n);

const getGradient = () => `
  radial-gradient(ellipse at 10% 20%,
  ${getHexString()} 0%,  
  ${getHexString()} 33%, 
  ${getHexString()} 66%, 
  ${getHexString()} 100%)
`;

const squareContainer = document.querySelector('.container[data-morph-to="square"]');
const square = document.querySelector('.container[data-morph-to="square"] > div');
square.style.background = getGradient();

const circleContainer = document.querySelector('.container[data-morph-to="circle"]');
const circle = document.querySelector('.container[data-morph-to="circle"] > div');
circle.style.background = getGradient();


// clone circles and squares

const total = 36;
let count = 1;

while (count++ < total) {
  let cloneCircle = circle.cloneNode(true);
  cloneCircle.style.background = getGradient();
  circleContainer.appendChild(cloneCircle);
  let cloneSquare = square.cloneNode(true);
  cloneSquare.style.background = getGradient();
  squareContainer.appendChild(cloneSquare);
}