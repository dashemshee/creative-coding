function setup() {
  createCanvas(1200, 1200);
 noLoop();
}

function draw() {
  background(220);

  //pushed the grid towards the center
  translate(100,100);
   for (let x = 0; x < 8; x += 1) {
    for (let y = 0; y < 8; y += 1){
      push();

//added new circle
  translate(x * 140,y * 140);

//lines 
  strokeWeight( random (4,50) );
  stroke( random(5,250),120,700); 

  fill(100,random (30,790),300 );

//drawn new circle
  ellipse(0,0,random(80,105)); 

        pop();
    }
  }

}
