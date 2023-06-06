let backgroundImage;
let poem = '';

let grammar = tracery.createGrammar({
  "origin": ["A HOUSE OF #material#, #place#, USING #light_source#, INHABITED BY #inhabitants#"],
  "material": ["DUST", "BRICK", "PAPER", "LEAVES", "ROOTS", "DISCARDED CLOTHING", "WEEDS", "WOOD", "TIN", "SAND", "GLASS", "STONE", "STRAW", "PLASTIC", "MUD", "BROKEN DISHES", "PLASTIC"],
  "place": ["CITY", "FOREST", "DESERT", "OCEAN", "MOUNTAIN", "GARDEN", "CAVE", "SPACE", "SKY"],
  "light_source": ["SUNLIGHT", "CANDLELIGHT", "MOONLIGHT", "STARLIGHT", "LAMP", "FIRELIGHT", "ELECTRIC LIGHT"],
  "inhabitants": ["PEOPLE", "ANIMALS", "PLANTS", "SPIRITS", "ROBOTS", "GHOSTS"] });

function preLoad() {
  backgroundImage = loadImage('')
}

function setup()  {
  createCanvas(800, 800);
  frameRate(.2);
  textAlign(CENTER, CENTER);
  }

function draw() {
  background(220);
  poem = grammar.flatten("#origin#");
  textFont("bold");

  let fontSize = width / 15;
  textSize(fontSize);

  let poemWidth = textWidth(poem);
  while (poemWidth > width - 100) {
    fontSize -= 1;
    textSize(fontSize);
    poemWidth = textWidth(poem);
  }

let lineHeight =  fontSize * 1.2;
textLeading(lineHeight);


fill('red');
text(poem, width / 2, height / 2);
}