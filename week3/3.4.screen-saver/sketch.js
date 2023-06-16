let backgroundImages = [];
let currentBackgroundIndex = 0;

//interval 
let interval = 6000;
let backgroundImage;


//images came from google (earthcam) website//
function preload() {
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/geo1.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/geo3.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/earth3.jpg'));
  }

function setup() {
  createCanvas(1000, 600);
  setBackgroundImage(currentBackgroundIndex);
  setInterval(changeBackground, interval);
}

function draw() {
  background(0);
  image(backgroundImage, 0, 0, width, height);

  let now = new Date();
  textSize(80);
  fill('white');
  textAlign(CENTER, CENTER);
  text(formatTime(now), width / 2, height / 2);
  }

function setBackgroundImage(index) {
  backgroundImage = backgroundImages[index];
  }

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
  setBackgroundImage(currentBackgroundIndex);
  }
//time
function formatTime(date) {
  let hours = formatDigits(date.getHours());
  let minutes = formatDigits(date.getMinutes());
  let seconds = formatDigits(date.getSeconds());
  return hours + ":" + minutes + ":" + seconds;

  } 

function formatDigits(value) {
  return value < 10 ? "0" + value : value;
  }