/*----- constants -----*/

const gameBoard = {
  size: { rows: 17, columns: 17 },
  grid: [
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
  ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '',]
  ]};

const answerClue = {
  across: [
    { clue: "1. Iconic line: \"You talking to me?\"", answer: "taxidriver" },
    { clue: "2. Fictional prison in Maine.", answer: "shawshank" },
    { clue: "3. A chainsaw, a bathtub, and cocaine.", answer: "scarface" },
    { clue: "4. Sending a message with a horse's head.", answer: "godfather" },
    { clue: "5. The Bride", answer: "killbill" },
    { clue: "6. The killer communicated with the media and law enforcement through letters and cryptograms.", answer: "zodiac" },
    { clue: "7. Morocco World War II", answer: "casablanca" },
    { clue: "8. Character called Lefty", answer: "brasco" },
    ],
    down: [ 
      { clue: "9. First Rule", answer: "fightclub" },
      { clue: "10. White, Orange, Blue, Brown, Pink, Blonde.", answer: "reservoirdogs" },
      { clue: "11. Las Vegas Strip", answer: "casino" },
      { clue: "12. Iconic dance scene", answer: "pulpfiction" },
    ],
  };

const correctAnswers = [];
  
/*----- state variables -----*/
let selectedCell;
let wordAcross;
let wordDown;
let isSuccess;

/*----- event listeners -----*/

// stop cells from expanding when pressing 'return'
document.addEventListener('keydown', function (event) {
if (event.key === 'Enter') {
    event.preventDefault();
    if (selectedCell) {
        selectedCell.blur();
    }
  }
});

document.addEventListener('input', function (event) {
if (event.target.matches('.crossword-cell[contenteditable="true"]')) {
    const userInput = event.target.textContent;
  }
});

document.querySelectorAll('td').forEach(td => {
td.addEventListener('input', function() {
  if (this.getAttribute('contenteditable') === 'true') {
    if (this.textContent.length > 1) {
      this.textContent = this.textContent.charAt(0);
    }
    }
  });
});

// event listener for "Clear Board" 
document.addEventListener('DOMContentLoaded', function() {

const clearButton = document.getElementById('clearButton');
clearButton.addEventListener('click', function() {

  for (let row = 0; row < gameBoard.size.rows; row++) {
    for (let col = 0; col < gameBoard.size.columns; col++) {
      const cellId = `x${col + 1}y${row + 1}`;
      const cell = document.getElementById(cellId);
      cell.textContent = '';
    }  
    }
  })
});


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
    x11y1: "E",
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

    x6y13:"C",
    x7y13:"A",
    x8y13:"S",
    x9y13:"A",
    x10y13: "B",
    x11y13: "L",
    x12y13: "A",
    x13y13: "N",
    x14y13: "C",
    x15y13: "A",

    x12y16: "B",
    x13y16: "R",
    x14y16: "A",
    x15y16: "S",
    x16y16: "C",
    x17y16: "O",

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

const emptyValues = {
    x3y1: "",
    x4y1: "",
    x5y1: "",
    x6y1: "",
    x7y1: "",
    x8y1: "",
    x9y1: "",
    x10y1: "",
    x11y1: "",
    x12y1: "",
    x8y3: "",
    x9y3: "",
    x10y3: "",
    x11y3: "",
    x12y3: "",
    x13y3: "",
    x14y3: "",
    x15y3: "",
    x16y3: "",
    x1y4: "",
    x2y4: "",
    x3y4: "",
    x4y4: "",
    x5y4: "",
    x6y4: "",
    x7y4: "",
    x8y4: "",
    x7y7: "",
    x8y7: "",
    x9y7: "",
    x10y7: "",
    x11y7: "",
    x12y7: "",
    x13y7: "",
    x14y7: "",
    x15y7: "",
    x10y9: "",
    x11y9: "",
    x12y9: "",
    x13y9: "",
    x14y9: "",
    x15y9: "",
    x16y9: "",
    x17y9: "",
    x10y11: "",
    x11y11: "",
    x12y11: "",
    x13y11: "",
    x14y11: "",
    x15y11: "",
    x6y13: "",
    x7y13: "",
    x8y13: "",
    x9y13: "",
    x10y13: "",
    x11y13: "",
    x12y13: "",
    x13y13: "",
    x14y13: "",
    x15y13: "",
    x12y16: "",
    x13y16: "",
    x14y16: "",
    x15y16: "",
    x16y16: "",
    x17y16: "",
    x5y4: "",
    x5y5: "",
    x5y6: "",
    x5y7: "",
    x5y8: "",
    x5y9: "",
    x5y10: "",
    x5y11: "",
    x5y12: "",
    x8y1: "",
    x8y2: "",
    x8y3: "",
    x8y4: "",
    x8y5: "",
    x8y6: "",
    x8y7: "",
    x8y8: "",
    x8y9: "",
    x8y10: "",
    x8y11: "",
    x8y12: "",
    x8y13: "",
    x11y6: "",
    x11y7: "",
    x11y8: "",
    x11y9: "",
    x11y10: "",
    x11y11: "",
    x17y7: "",
    x17y8: "",
    x17y9: "",
    x17y10: "",
    x17y11: "",
    x17y12: "",
    x17y13: "",
    x17y14: "",
    x17y15: "",
    x17y16: "",
    x17y17: ""
  };

// listener for input changes
document.getElementById("gameboard").addEventListener("input", function (event) {
  const cell = event.target;
  const coordinates = cell.id;

  if (correctAnswers.hasOwnProperty(coordinates)) {
      const userInput = cell.innerText.toUpperCase(); 

      emptyValues[coordinates] = userInput;
      // save to localStorage
      localStorage.setItem('userInputs', JSON.stringify(emptyValues));

      // compare user input with correct answer
      if (userInput === correctAnswers[coordinates]) {
          console.log("Correct!");
      } else {
          console.log("Incorrect!");
      }
    }
  checkForWinner();
  });
})

document.addEventListener("DOMContentLoaded", function () {
// load saved inputs from localStorage
const savedInputs = JSON.parse(localStorage.getItem('userInputs'));

if (savedInputs) {
    Object.entries(savedInputs).forEach(([key, value]) => {
        const cell = document.getElementById(key);
        if (cell) {
            cell.innerText = value;
        }
    })
  }
});

// check answers button
function fillBoard(correctAnswers) {
for (const coordinates in correctAnswers) {
  const cell = document.getElementById(coordinates);
  if (cell) {
    cell.textContent = correctAnswers[coordinates];
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
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
    x11y1: "E",
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

    x6y13:"C",
    x7y13:"A",
    x8y13:"S",
    x9y13:"A",
    x10y13: "B",
    x11y13: "L",
    x12y13: "A",
    x13y13: "N",
    x14y13: "C",
    x15y13: "A",

    x12y16: "B",
    x13y16: "R",
    x14y16: "A",
    x15y16: "S",
    x16y16: "C",
    x17y16: "O",

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

// fill board button
const fillButton = document.getElementById('fillButton');
fillButton.addEventListener('click', function () {
  fillBoard(correctAnswers);
  });
});

// check for winner 
function checkForWinner() {
for (const coordinates in correctAnswers) {
  const cell = document.getElementById(coordinates);
  if (cell) {
    const userInput = cell.innerText.toUpperCase();
    if (userInput !== correctAnswers[coordinates]) {
      return false; 
      }
    }
  };
    // winner message
    const gameBoardElement = document.getElementById('gameboard');
    const winMessage = document.createElement('div');
    winMessage.textContent = 'Solved';
    winMessage.style.color = 'red';
    winMessage.style.fontSize = '6em'; 
    winMessage.style.position = 'absolute';
    winMessage.style.textTransform = 'uppercase';
    winMessage.style.fontFamily = 'Abril Fatface, serif';
    winMessage.style.letterSpacing = '3px';
    winMessage.style.fontWeight = '700';
    winMessage.style.top = '50%';
    winMessage.style.left = '50%';
    winMessage.style.transform = 'translate(-50%, -50%) rotate(-5deg)';
    gameBoardElement.appendChild(winMessage);
      return true;
    };




