/*----- constants -----*/

const gameBoard = {
    size: { rows: 9, columns: 9 },
    grid: [
    // add hashtags to represent black squares 
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
  ]};

  const crosswordWords = {
    across: [
      { clue: "2. Robert De Niro stars in this Martin Scorsese classic", answer: "taxidriver" },
      { clue: "4. Classic film starring Tim Robbins and Morgan Freeman", answer: "shawshank" },
      { clue: "6. Classic Al Pacino film about a Cuban immigrant", answer: "scarface" },
      { clue: "8. Francis Ford Coppola's epic crime drama", answer: "godfather" },
      { clue: "10. Quentin Tarantino's two-part crime film", answer: "killbill" },
      { clue: "12. David Fincher's thriller about a newspaper investigation", answer: "zodiac" },
      { clue: "14. Classic romance set in a Moroccan city during World War II. (9)', answer: 'casablanca" },
      { clue: "16. CLUE FOR DONNIE BRASCO HERE", answer: "brasco" },


    ],
      down: [ 
        { clue: "1. Crime film about an underground fight club", answer: "fightclub" },
        { clue: "3. Tarantino's debut heist film involving color-coded criminals.", answer: "reservoirdogs" },
        { clue: "5. Gangster film featuring Joe Pesci", answer: "casino" },
        { clue: "7. Quentin Tarantino's heist film set in Los Angeles", answer: "pulpfiction" },
      ],
    };

    
    
    // Example of accessing a clue and answer
    const firstAcrossClue = crosswordWords.across[0].clue;
    const firstAcrossAnswer = crosswordWords.across[0].answer;
    
    console.log(`First Across Clue: ${firstAcrossClue}`);
    console.log(`First Across Answer: ${firstAcrossAnswer}`);
    


/*----- state variables -----*/

let selectedCell;
let wordAcross;
let wordDown;
let isSuccess;


/*----- cached elements -----*/

// directionAcross & directionDown (from HTML ID)


/*----- event listeners -----*/



/*----- functions -----*/

// init();

// define init function here...then call render()

//function init() {

    // call render function here

//};

// render: 

// create loop for populating grid for gameboard

// function for checking word fits
// function checkWord() {

  // for loop to check each row 
  
  // for loop to check each column 
// }


// ternary to find if word successfully fits using isSucess