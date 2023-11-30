/*----- constants -----*/

const gameBoard = {
    size: { rows: 9, columns: 9 },
    grid: [
    // add hashtags to represent black squares 
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
    ]};

const answers = []; 


/*----- state variables -----*/

let selectedCell;
let wordAcross;
let wordDown;
let isSuccess;


/*----- cached elements -----*/

// directionAcross & directionDown (from HTML ID)


/*----- event listeners -----*/



/*----- functions -----*/

init();

// define init function here...then call render()

function init() {
    grid = [
      ['', '', '', '', '', '', '', '', ''], // a1
      ['', '', '', '', '', '', '', '', ''], // a2
      ['', '', '', '', '', '', '', '', ''], // a3
      ['', '', '', '', '', '', '', '', ''], // a4
      ['', '', '', '', '', '', '', '', ''], // a5
      ['', '', '', '', '', '', '', '', ''], // a6
      ['', '', '', '', '', '', '', '', ''], // a7
      ['', '', '', '', '', '', '', '', ''], // a8
      ['', '', '', '', '', '', '', '', ''], // a9
    // d1, d2, d3, d4, d5, d6, d7, d8, d9
    ];

    // call render function here
    ;
}

// render: 

// create loop for populating grid for gameboard

// function for checking word fits
function checkWord() {

  // for loop to check each row 
  
  // for loop to check each column 
}


// ternary to find if word successfully fits using isSucess