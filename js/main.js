/*----- constants -----*/

const gameBoard = {
    size: { rows: 17, columns: 17 },
    grid: [
    // add hashtags to represent black squares 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
    ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',], 
  
  ]};

  const answerClue = {
    across: [
      { clue: "1. Robert De Niro stars in this Martin Scorsese classic", answer: "taxidriver" },
      { clue: "2. Classic film starring Tim Robbins and Morgan Freeman", answer: "shawshank" },
      { clue: "3. Classic Al Pacino film about a Cuban immigrant", answer: "scarface" },
      { clue: "4. Francis Ford Coppola's epic crime drama", answer: "godfather" },
      { clue: "5. Quentin Tarantino's two-part crime film", answer: "killbill" },
      { clue: "6. David Fincher's thriller about a newspaper investigation", answer: "zodiac" },
      { clue: "7. Classic romance set in a Moroccan city during World War II. (9)", answer: "casablanca" },
      { clue: "8. CLUE FOR DONNIE BRASCO HERE", answer: "brasco" },
    ],
      down: [ 
        { clue: "9. Crime film about an underground fight club", answer: "fightclub" },
        { clue: "10. Tarantino's debut heist film involving color-coded criminals.", answer: "reservoirdogs" },
        { clue: "11. Gangster film featuring Joe Pesci", answer: "casino" },
        { clue: "12. Quentin Tarantino's heist film set in Los Angeles", answer: "pulpfiction" },
      ],
    };

    
    
  // accessing a clue and answer
  const firstAcrossClue = answerClue.across[0].clue;
  const firstAcrossAnswer = answerClue.across[0].answer;
    
  console.log(`First Across Clue: ${firstAcrossClue}`);
  console.log(`First Across Answer: ${firstAcrossAnswer}`);
    

/*----- state variables -----*/

let selectedCell;
let wordAcross;
let wordDown;
let isSuccess;


/*----- cached elements -----*/



/*----- event listeners -----*/
document.addEventListener('input', function (event) {
  if (event.target.matches('.crossword-cell[contenteditable="true"]')) {
      const userInput = event.target.textContent;
      // logic to check the user's input against the solution
  }
});

document.addEventListener('DOMContentLoaded', function() {
  // clear board button
  const clearButton = document.getElementById('clearButton');
  clearButton.addEventListener('click', function() {
    
  });
});

document.querySelectorAll('td[contenteditable="true"]').forEach(td => {
  td.addEventListener('input', function() {
      if (this.textContent.length > 1) {
          // Keep only the first character and remove the rest
          this.textContent = this.textContent.charAt(0);
      }
  });
});

//  event listener for the "Clear Board" button
document.getElementById("clearButton").addEventListener("click", function () {
  //  logic to clear the board (reset all cells)
});


/*----- functions -----*/

// init();

// define init function here...then call render()

//function init() {

    // call render function here

//};

// render: 

// function for checking if letter/word is correct:

document.addEventListener("DOMContentLoaded", function () {
  
  const correctAnswers = {
    // across
      x3y1: "T",
      x4y1: "A",
      x5y1: "X",
      x6y1: "I",
      x7y1: "D",
      x8y1: "R",
      x9y1: "I",
      x10y1: "V",
      x11Y1: "E",
      x12y1: "R",
 
      x8y3: "S",
      x9y3: "H",
      x10y3: "A",
      x11y3: "W",
      x12y3: "S",
      x13y3: "H",
      x14y3: "A",
      x15y3: "N",
      x16y3: "K",

      x1y4: "S",
      x2y4: "C",
      x3y4: "A",
      x4y4: "R",
      x5y4: "F",
      x6y4: "A",
      x7y4: "C",
      x8y4: "E",

      x7y7: "G",
      x8y7: "O",
      x9y7: "D",
      x10y7: "F",
      x11y7: "A",
      x12y7: "T",
      x13y7: "H",
      x14y7: "E",
      x15y7: "R",

      x10y9: "K",
      x11y9: "I",
      x12y9: "L",
      x13y9: "L",
      x14y9: "B",
      x15y9: "I",
      x16y9: "L",
      x17y9: "L",

      x10y11: "Z",
      x11y11: "O",
      x12y11: "D",
      x13y11: "I",
      x14y11: "A",
      x15y11: "C",

      x6y14:"C",
      x7y14:"A",
      x8y14:"S",
      x9y14:"A",
      x10y14: "B",
      x11y14: "L",
      x12y14: "A",
      x13y14: "N",
      x14y14: "C",
      x15y14: "A",

      x12y5: "B",
      x13y5: "R",
      x14y5: "A",
      x15y5: "S",
      x16y5: "C",
      x17y5: "O",

    // down
      x5y4: "F",
      x5y5: "I",
      x5y6: "G",
      x5y7: "H",
      x5y8: "T",
      x5y9: "C",
      x5y10: "L",
      x5y11: "U",
      x5y12: "B",

      x8y1: "R",
      x8y2: "E",
      x8y3: "S",
      x8y4: "E",
      x8y5: "R",
      x8y6: "V",
      x8y7: "O",
      x8y8: "I",
      x8y9: "R",
      x8y10: "D",
      x8y11: "O",
      x8y12: "G",
      x8y13: "S",

      x11y6: "C",
      x11y7: "A",
      x11y8: "S",
      x11y9: "I",
      x11y10: "N",
      x11y11: "O",
     
      x17y7: "P",
      x17y8: "U",
      x17y9: "L",
      x17y10: "P",
      x17y11: "F",
      x17y12: "I",
      x17y13: "C",
      x17y14: "T",
      x17y15: "I",
      x17y16: "O",
      x17y17: "N",
  };

  // listener for input changes
  document.getElementById("gameboard").addEventListener("input", function (event) {
      const cell = event.target;
      const coordinates = cell.id;

      // check if the cell has a correct answer defined
      if (correctAnswers.hasOwnProperty(coordinates)) {
          const correctAnswer = correctAnswers[coordinates];
          const userInput = cell.innerText.toUpperCase(); // bc input case-insensitive

          // compare user input with correct answer
          if (userInput === correctAnswer) {
              console.log("Correct!");
          } else {
              console.log("Incorrect!");
          }
      }
  });
});


