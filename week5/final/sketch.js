let backgroundImages = [];
let currentBackgroundIndex = 0;
let interval = 200;
let backgroundImage;
let drops = [];
let raindropImage;


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


//see if image works when uploaded to github
  raindropImage = loadImage('https://dashemshee.github.io/creative-coding/week5/final/twins.jpg');
}

function setup() {
  createCanvas(1000, 600);
  setBackgroundImage(currentBackgroundIndex);
  setInterval(changeBackground, interval);

  const numberOfDrops = 50;


  for (let i = 0; i < numberOfDrops; i++) {
    drops.push(new Drop());
}
}

function draw() {
  background(0);
  image(backgroundImage, 0, 0, width, height);


 //Coding Challenge #4: Purple Rain in Processing by "the coding train"- snippet of code helped me 
  //form the rain drops// 
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
    this.yspeed = random(2, 6);
  }

  fall() {
    this.y += this.yspeed;
    if (this.y > height) {
      this.y = random(-200, -100);
      }
  }

  show() {
 
    push();
    translate(this.x, this.y);
    imageMode(CENTER);
    image(raindropImage, 0, 0, 40, 40);
    pop();
  }
}
