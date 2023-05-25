function setup() {
  createCanvas(700, 700);
  noLoop();
}
function draw() {
  background(220);
  angleMode(DEGREES);

    //quilt colors
  const colors = ['pink', 'lightblue', 'black'];
  const letters = ['A', 'B', 'C'];


  // quilt pattern
  const pattern = [
    ['A', 'B', 'C', 'A', 'C', 'B', 'A'],
    ['C', 'A', 'B', 'C', 'B', 'A', 'C'],
    ['B', 'C', 'A', 'B', 'A', 'C', 'B'],
    ['A', 'B', 'C', 'A', 'C', 'B', 'A'],
    ['B', 'C', 'A', 'B', 'A', 'C', 'B'],
    ['C', 'A', 'B', 'C', 'B', 'A', 'C'],
    ['A', 'B', 'C', 'A', 'C', 'B', 'A']
       ];

  const numRows = pattern.length;
  const numCols = pattern[0].length;

  //size
  const blockWidth = width/numCols;
  const blockHeight = height/numRows;

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const letter = pattern[row][col];

      const index = letters.indexOf(letter);
      const color = colors[index];

      push();

      translate(col * blockWidth, row * blockHeight);
      fill(color);
      rect(0, 0, blockWidth, blockHeight);

      pop();
    }
     }
}