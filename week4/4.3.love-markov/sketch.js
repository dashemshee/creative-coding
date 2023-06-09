
//markov model
let rm = RiTa.markov(3);

// finding data
let data = document.getElementById("source").innerText;


//train model
rm.addText(data);


function setup() {
 
 let lines = rm.generate(6);


 //find letter div
 let letter = select("#letter");


//salutation
 letter.child( createP("Dear Catherine,") );

 for (let l = 0; l < lines.length; l++ ){
    letter.child(
        createP( lines[l]  )

      );

 }

//closing
 letter.child( createP("Yours Truly,<br> Mr Gatsby")  );
 }