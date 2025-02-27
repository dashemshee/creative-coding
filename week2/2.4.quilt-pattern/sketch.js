function setup() {
  createCanvas(700, 700);
  noLoop();
}
function draw() {
  background(220);
  angleMode(DEGREES);

//I choose this specific quilt design because it looked really unique the X cross shape pattern. It was very fun messing around with the different patterns and being creative. I found a few different quilt patterns that were a little bit similar to this for inspiration.

    //quilt colors
  const colors = ['hotpink', 'lavender', 'black'];
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
  const numCols = pattern.length;

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