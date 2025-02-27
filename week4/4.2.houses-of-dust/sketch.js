let backgroundImage;

let poem = '';

let grammar = tracery.createGrammar({
  "origin": ["A HOUSE OF #material#\n#place#\nUSING #light_source#, INHABITED BY #inhabitants#"],
  "material": ["DUST", "BRICK", "PAPER", "LEAVES", "ROOTS", "DISCARDED CLOTHING", "WEEDS", "WOOD", "TIN", "SAND", "GLASS", "STONE", "STRAW", "PLASTIC", "MUD", "BROKEN DISHES", "PLASTIC"],
  "place": ["CITY", "FOREST", "DESERT", "OCEAN", "MOUNTAIN", "GARDEN", "CAVE", "SPACE", "SKY"],
  "light_source": ["SUNLIGHT", "CANDLELIGHT", "MOONLIGHT", "STARLIGHT", "LAMP", "FIRELIGHT", "ELECTRIC LIGHT"],
  "inhabitants": ["PEOPLE", "ANIMALS", "PLANTS", "SPIRITS", "ROBOTS", "GHOSTS"] });

function preload() {
  backgroundImage = loadImage('https://dashemshee.github.io/creative-coding/week4/4.2.houses-of-dust/dustyimage2.jpg');
  }

function setup() {
  createCanvas(800, 600);
  frameRate(.2);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(backgroundImage);

  poem = grammar.flatten("#origin#");
    textFont("bold");

let fontSize = width / 1;
  textSize(fontSize);

let poemWidth = textWidth(poem);
  while (poemWidth > width - 100) {
    fontSize -= .5;
    textSize(fontSize);
    poemWidth = textWidth(poem);
  }

let lineHeight = fontSize * 1.2;
  textLeading(lineHeight);

  fill('red');
  text(poem, width / 2, height / 2);
}