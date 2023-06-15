let backgroundImages = [];
let currentBackgroundIndex = 0;
let interval = 200;
let backgroundImage;
let drops = [];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function preload() {
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/1.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/2.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/3.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/4.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/5.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/6.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/7.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/8.PNG'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/9.PNG'));
}

function setup() {
  createCanvas(1000, 600);
  setBackgroundImage(currentBackgroundIndex);
  setInterval(changeBackground, interval);

  const numberOfDrops = 400;

  for (let i = 0; i < numberOfDrops; i++) {
    drops.push(new Drop());
  }
}

function draw() {
  background(0);
  image(backgroundImage, 0, 0, width, height);

  //Coding Challenge #4: Purple Rain in Processing by "the coding train"//

  for (let i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function setBackgroundImage(index) {
  backgroundImage = backgroundImages[index];
}

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
  setBackgroundImage(currentBackgroundIndex);
}

class Drop {
  constructor() {
    this.x = random(width);
    this.y = random(-500, -50);
    this.yspeed = random(4, 10);
  }

  fall() {
    this.y += this.yspeed;
    if (this.y > height) {
      this.y = random(-200, -100);
    }
  }

  show() {
    stroke('red');
    fill('red');
    line(this.x, this.y, this.x, this.y + 10);
  }
}
