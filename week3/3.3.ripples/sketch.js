let ripplers = [];
let maxDiameterRange = [50, 200];
let speedRange = [1, 3];

//ripple number
let numRipples = 6; 


let rippleDelay = 100; 
function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(135, 206, 250);
  
  for (let i = 0; i < ripplers.length; i++) {
    ripplers[i].draw();
  }
  }

function mousePressed() {
  let x = mouseX;
  let y = mouseY;

  for (let i = 0; i < numRipples; i++) {
    setTimeout(function() {
      let newRippler = new Rippler(x, y);
      ripplers.push(newRippler);
    }, i * rippleDelay);
  }
  }

class Rippler {
  constructor(x, y) {
  this.x = x;
  this.y = y;
   this.diameter = 0;
    this.maxDiameter = random(maxDiameterRange[0], maxDiameterRange[1]);
    this.speed = random(speedRange[0], speedRange[1]);
  
  }

  draw() {
      this.diameter += this.speed;
    noFill();
    stroke(255);

    let alpha = map(this.diameter, 0, this.maxDiameter, 255, 0);
    stroke(255, alpha);
    ellipse(this.x, this.y, this.diameter);

    if (this.diameter > this.maxDiameter) {
      ripplers.splice(ripplers.indexOf(this), 1);
    }
  }
  }