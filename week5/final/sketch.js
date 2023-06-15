let backgroundImages = [];
let currentBackgroundIndex = 0;
let interval = 300;
let backgroundImage;
let drops = [];

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function preload() {
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/image1.1.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/image2.2.jpg'));
  backgroundImages.push(loadImage('https://dashemshee.github.io/creative-coding/week5/final/image3.3.jpg'));
}

function setup() {
  createCanvas(600, 600);
  setBackgroundImage(currentBackgroundIndex);
  setInterval(changeBackground, interval);

  for (let i = 0; i < 100; i++) {
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

  let now = new Date();
  let currentTimestamp = Date.now();
  let currentSecond = second();
  let currentMinute = minute();
  let currentHour = hour();
  let currentDay = day();
  let currentMonth = month();
  let currentYear = year();
  let currentDayOfWeek = days[now.getDay()];

  text("Timestamp: " + currentTimestamp, 50, 50);
  text("Second: " + currentSecond, 50, 65);
  text("Minute: " + currentMinute, 50, 80);
  text("Hour: " + currentHour, 50, 95);
  text("Day: " + currentDay, 50, 110);
  text("Month: " + currentMonth, 50, 125);
  text("Year: " + currentYear, 50, 140);
  text("Day of the Week: " + currentDayOfWeek, 50, 155);
}

function setBackgroundImage(index) {
  backgroundImage = backgroundImages[index];
}

function changeBackground() {
  currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
  setBackgroundImage(currentBackgroundIndex);
}
 //"the coding train"//
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
    stroke(138, 43, 226);
    line(this.x, this.y, this.x, this.y + 10);
  }
}