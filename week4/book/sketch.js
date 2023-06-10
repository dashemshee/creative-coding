function setup() {

//words from tracery
const grammar = tracery.createGrammar({
        "move": ["Bow", "Sprint", "Whisp", "moved", "stung", "ran"],
        "bird": ["mockingjay", "jabberjay", "mockingbird", "jay", "crow", "bird"],
        "agent": ["mentor", "mentee", "#bird#", "sponsor", "trainer"],
        "transVerb": ["forget", "plant", "fight", "remember", "action", "revenge", "love"],
        "emotion": ["sorrow", "love", "pain", "home", "death", "forgiveness", "grace"],
        "substance": ["#emotion#", "mist", "fog", "technology", "silver", "rain", "creek", "forest", "virtue", "sun", "shadow", "gold", "meadow", "darkness"],
        "adj": ["fair", "bright", "gripe", "divine", "inseparable", "fine", "lazy", "grand", "finale", "quick", "poise", "grave", "clear", "faint", "dreary"],
        "doThing": ["nightmare", "move", "cry", "weep", "laugh", "dream"],
        "verb": ["luck", "grace", "bless", "dapple", "touch", "talent", "moving", "crown", "veil"],
        "ground": ["grass", "river", "creek", "sea", "meadow", "forest", "glade", "field", "sky", "waves"],
        "poeticAdj": ["#substance#-#verb.ed#"],
        "poeticDesc": ["#poeticAdj#", "by #substance# #verb#'d", "#adj# with #substance#", "#verb.ed# with #substance#"],
        "ah": ["ah", "alas", "oh", "yet", "but", "and"],
        "on": ["on", "in", "above", "beneath", "under", "by"],
        "punctuation": [",", ":", " ", "!", ".", "?"],
        "noun": ["#ground#", "#agent#"],
        "line": [
            "My #noun#, #poeticDesc#, my #adj# one",
            "More #adj# than #noun# #poeticDesc#",
            "#move.capitalize# with me #on# #poeticAdj# #ground#",
            "The #agent.s# #move#, #adj# and #adj#",
            "#poeticDesc.capitalize#, #poeticDesc#, #ah#, #poeticDesc#",
            "How #adj# is the #poeticDesc# #sub#",
            "#poeticDesc.capitalize# with #emotion#, #transVerb.s# the #noun#"
        ],
        "poem": ["#line##punctuation#\n#line##punctuation#\n#line##punctuation#\n#line#."],
        "origin": ["#[sub:#noun#]poem#"]
});

const bookContent = grammar.flatten('#origin#');

const book = new Bindery.Book({
        content: bookContent,
        pageSize: '4',
        pageMargins: '1',
        hyphenation: true,
        printBackground: true,
        title: 'Words of The hunger games',
        author: 'Emily Herrity, OG -Suzanne Collins',
        fontSize: '12pt',
        font: 'Times New Roman',
        rules: [


            new Bindery.FullBleedPageRule(),
            new Bindery.PageBreakRule({
                selectors: ['by chapter?'],
})
        ]
});

    book.renderTo('main').then(() => {
        console.log('Book rendering complete');
});
}

  const script = document.createElement('script');
script.src = 'https://unpkg.com/rita@2.8.31/dist/rita.js';
script.onload = setup;
document.head.appendChild(script);