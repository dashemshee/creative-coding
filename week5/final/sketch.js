let circles = [];
const numColumns = 50;
const numRows = 50;
const circleSpacing = 40;

let backgroundImage;

function preload() {
  backgroundImage = loadImage('https://dashemshee.github.io/creative-coding/week5/final/skyline.jpg')
}


function setup() {
  createCanvas(800, 800);
  generateCircles();
}

function draw() {
  background(220);

  image(backgroundImage, 0, 0, width, height);
  updateCircles();
  displayCircles();
}

function generateCircles() {
  for (let i = 0; i < numColumns; i++) {
    for(let j = 0; j < numRows; j++) {
      let x = i * circleSpacing + circleSpacing / 2;
      let y = j * circleSpacing + circleSpacing / 2;
      let radius = random(10,30);
      let circleObj = {x, y, radius};
      circles.push(circleObj);
    }
  }
    }

function updateCircles() {
for (let circleObj of circles) {
  circleObj.x += random(-1, 1);
  circleObj.y += random(-1, 1);
}

}

function displayCircles() {
  for (let circleObj of circles) {
    fill('red');
    circle(circleObj.x, circleObj.y, circleObj.radius);
  }
}