let numObjects = 5;
let x = [];
let y = [];
let xspeed = [];
let yspeed = [];
let colors = [];


function setup() {
  createCanvas(400, 400);

for (let i = 0; i < numObjects; i++) {
  x[i] = random(width);
  y[i] = random(height);
  xspeed[i] = random(-1, 1);
  yspeed[i] = random(-1, 1);
  colors[i] = color(random(210), random(25), random(50));
}
}


function draw() {
  background(220);

for (let i = 0; i < numObjects; i++)   {
  if (x[i] < 0 || x[i] > width) {
    xspeed[i] *= -1;
  }

  if (y[i] < 0 || y[i] > height) {
    yspeed[i] *= -1;
  }

  x[i] += xspeed[i];
  y[i] += yspeed[i];

  //circle colors
    
    fill(colors[i]);
    circle(x[i], y[i], 50); }
} 
//pretty please work





