let circles = [];
const numColumns = 40;
const numRows = 40;
const circleSpacing = 40;


function setup() {
  createCanvas(800, 800);
  generateCircles();
}

function draw() {
  background(220);
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
    fill('blue');
    circle(circleObj.x, circleObj.y, circleObj.radius);
  }
}