function setup() {
  const grammar = tracery.createGrammar({
  });

const bookContent = grammar.flatten('#origin#');

  const book = new Bindery.Book({
    content: bookContent,
    pageSize: 'A4',
    pageMargins: '1in',
    hyphenation: true,
    printBackground: true,
    title: 'Computer-Generated Book',
    author: 'Your Name',
    fontSize: '12pt',
    font: 'Times New Roman',
    rules: [

      new Bindery.FullBleedPageRule(),
      new Bindery.PageBreakRule({
        selectors: ['.chapter'],
      } ),
],
});

    book.renderTo('main').then(() => {
  
if (book.pages.length >= 500) {
      const numPagesToRemove = 500;
      for (let i = 0; i < numPagesToRemove; i++) {
        book.pages[i].remove();
}
      book.printPdf();
    } else {
      console.log('The book has fewer than 500 pages.');
}
});
}

const script = document.createElement('script');
script.src = 'https://unpkg.com/rita@2.8.31/dist/rita.js';
script.onload = setup;
document.head.appendChild(script);