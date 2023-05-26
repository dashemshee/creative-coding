function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background('lightgray');

let squareSize = 40;

for (let x = 0; x < width; x += squareSize) {
  for (let y = 0; y< height; y += squareSize) {

  let alpha = map(x + y, 0, width + height, 0, 255);

  let size = map(sin(x * y), -10, 1, squareSize / 2, squareSize * 2);

//Colors

let fillColor = color('black');
fillColor.setAlpha(alpha);

fill(fillColor);

stroke('black');
strokeWeight(2);


//positioning
push();
translate(x + squareSize / 2, y + squareSize / 2);
rotate(20);
rectMode(CENTER);
rect(0, 0, squareSize, squareSize);
pop();

  }
} 
  }