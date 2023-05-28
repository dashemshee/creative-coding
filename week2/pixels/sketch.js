let img;


function preload(){


}


function setup() {
  createCanvas(800, 800);
 }

function draw() {
background(220);
for (let x = 0; x < img.width; x += 10) {
  for (let y = 0; y < img.height; y += 10) {
    const c = getPixelColor(x, y, c);
  }
}
}
