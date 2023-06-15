let backgroundImage;
let rain;
let img_rain, img_backgroundImage;

function preload() {
  backgroundImage = loadImage('https://dashemshee.github.io/creative-coding/week5/final/skyline.jpg');
  img_rain = loadImage("https://dashemshee.github.io/creative-coding/week3/3.2.follower/01.jpg");
}

function setup() {
  createCanvas(800, 800);
  noStroke();
  rain = { x: width * 0.36, y: 0 };
}

function draw() {
  background(0, 0, 30);
  image(backgroundImage, 0, 0, width, height);
  image(img_rain, rain.x, rain.y);
}
