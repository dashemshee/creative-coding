let images = [];
let currentImage = 0;
let countdown = 5;
const interval = 1000;

function preload() {
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/65MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/60MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/50MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/40MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/25MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/10MYA.jpg'));
  images.push(loadImage('https://dashemshee.github.io/creative-coding/week3/time/presentday.jpg'));
  }

function setup() {
  createCanvas(600, 600);
  setInterval(updateCountdown, interval);
}

function draw() {
  background(220);

  image(images[currentImage], 0, 0, width, height);

  textSize(32);

  text("hour: " + hour(), 50, 50);
  text("minute: " + minute(), 50, 75);
  text("second: " + second(), 50, 100);
  textAlign(CENTER, CENTER);
  textFont('cursive');
  fill(0);
  text(countdownText, width / 2, height - 50);

  }
