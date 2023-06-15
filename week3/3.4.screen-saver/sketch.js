let earthAni;
let earthX = 0;

function setup() {
  createCanvas(500, 160);
  earthAni = loadAnimation('https://dashemshee.github.io/creative-coding/week3/3.4.screen-saver/earth3.jpg');
}

function draw() {
  background(0);
  earthX += 1; 

  dge
  if (earthX > width + earthAni.width) {
    earthX = -earthAni.width;
  }

  animation(earthAni, earthX, 80);
}
