let backgroundImages = [];
let currentBackgroundIndex = 0;
let interval = 3000;
let backgroundImage;

function preload() {
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/earth3.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/earth4.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/earth5.jpg'));
}

function setup() {
  createCanvas(1000, 600);
  setBackgroundImage(currentBackgroundIndex);
  setInterval(changeBackground, interval);
}

function draw() {
  background(0);
  image(backgroundImage, 0, 0, width, height);
}

function setBackgroundImage(index) {
  backgroundImage = backgroundImages[index];
}

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
  setBackgroundImage(currentBackgroundIndex);
}