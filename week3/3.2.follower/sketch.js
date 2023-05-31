let debug = false;
let x = 0;
let y = 0;
let d = 0;
let score = 0;
let speedfactor = 3;
let speedx = speedfactor;
let speedy = speedfactor;
let goalx = 0;
let goaly = 0;
let goalSize = 50;
let img;

function preload() {

  backgroundImage = loadImage("https://dashemshee.github.io/creative-coding/week3/3.2.follower/bikini-bottom-spongebob-squarepants-jorge-terrones.jpg");

img = loadImage("https://dashemshee.github.io/creative-coding/week3/3.2.follower/01.jpg");
}

function setup() {
  createCanvas(700, 700);

  x = random(width);
  y = random(height);

  goalx = random(width);
  goaly = random(height);
}

function draw() {
  background(220);

image(backgroundImage, 0, 0, width, height);

  rect(goalx, goaly, goalSize, goalSize);

  // distance formula
  d = sqrt((x - mouseX)**2 + (y - mouseY)**2);

  // add movement
  x += speedx;
  y += speedy;

   image(img, x - 50, y - 50, 100, 100);

  if (mouseX > x) {
    // move to right
    speedx = speedfactor;
  } else {
    // move to left
    speedx = -speedfactor;
  }

  if (mouseY > y) {
    // move down
    speedy = speedfactor;
  } else {
    // move up
    speedy = -speedfactor;
  }

  // check for collision with follower
  if (d < 25) {
    score -= 1;
    x = random(width);
    y = random(height);
  }

  // collision check with square
  if (
    mouseX > goalx &&
    mouseX < goalx + goalSize &&
    mouseY > goaly &&
    mouseY < goaly + goalSize
  ) {
    score += 1;

    // reset follower
    x = random(width);
    y = random(height);

    // reset goal
    goalx = random(width);
    goaly = random(height);
  }

  if (debug) {
    textSize(30);
    text("mouseX: " + mouseX, 50, 50);
    text("mouseY: " + mouseY, 50, 80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180);
    text("score: " + score, 50, 210);
  }
}