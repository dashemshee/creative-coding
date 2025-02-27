let img;
let sampleX = 10;
let sampleY = 20;


function preload() {
  img = loadImage('https://dashemshee.github.io/creative-coding/week2/pixels/Reflections-3.jpg');

}


function setup() {
  createCanvas(700, 800);
  img.loadPixels();
 }

function draw() {
background(220);
noStroke();

for (let x = 0; x <= img.width; x += sampleX ){
for (let y = 0; y <= img.height; y += sampleY ){
   let index = (x + y * img.width) * 4;
      let r = img.pixels[index + 0];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      fill(r, g, b);
      rect(x, y, sampleX, sampleY);
      
      let imgX = map(x, 0, img.width, 0, img.width);
      let imgY = map(y, 0, img.height, 0, img.height);
      let imgColor = img.get(imgX, imgY);
      fill(imgColor);
      ellipse(x, y, sampleX, sampleY);

}
}
}

