//constants
const colorDefinitions = {
    '1': 'red',
    '-1': 'yellow',
    '0': null
};

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
];


//checking for a tie
const checkForTie = () => {
    if ((playerOneSquares.length + playerTwoSquares.length === 9) && !winner) {
        alert("It's a tie!");
        location.reload();
    }
}

//checking for winner
let selectedSquares;
let tileIndex;
const checkIfWinner = () => {
    // figure out which player is active
    // does the player turn equal 1? if true, put in selected square that they picked into their array
    //otherwise, put selected squares in player two array's
    const selectedSquares = playerTurn === 1 ? playerOneSquares : playerTwoSquares;
    //if the selected squares length is less than 3, there's no way we can have a winner yet, 
    if (selectedSquares.length < 3) { //cannot have a winner yet, do not loop through
        return false; //don't submit this info if the above condition isn't true 
    }

    //for each winning combo, check if every tile index index includes a combo?
    winningCombos.forEach((combo) => { 
        if (selectedSquares.every(tileIndex => combo.includes(tileIndex))) {
            winner = playerTurn; //setting this so that the winner comes up on the player's turn
            alert(`YOU WIN, PLAYER ${playerTurn}!`);
            location.reload(); //reloading the page aftereards
            return true;    //not sure why this is here
        }
    });
    //return false; //not sure why this is here
};

//app's states variables

let playerOneSquares = [];
let playerTwoSquares = [];
let winner = null;

//this is connect name tile0, tile 1, etc to the html id
let tile0 = document.getElementById("square0");
let tile1 = document.getElementById("square1");
let tile2 = document.getElementById("square2");
let tile3 = document.getElementById("square3");
let tile4 = document.getElementById("square4");
let tile5 = document.getElementById("square5");
let tile6 = document.getElementById("square6");
let tile7 = document.getElementById("square7");
let tile8 = document.getElementById("square8");


let boardArray = [0,0,0,0,0,0,0,0,0];
let playerTurn = 1;

let allTiles = [tile0, tile1, tile2, tile3, tile4, tile5, tile6, tile7, tile8];


//event listeners 
allTiles.forEach(
    (element, index)  => {
       let boardPiece = boardArray[index];
        element.addEventListener('click', function() {
            if (boardArray[index] !== 0) {
                alert("sorry that's taken")
            } else {
                if (playerTurn == 1) {
                    playerOneSquares.push(index);
                } else {
                    playerTwoSquares.push(index);
                }
                //do not understand the below function
                const checkForWinner = checkIfWinner();
                if (!checkForWinner) {
                    checkForTie();
                }
                //with splice, adding the tile's value that the player clicked on to their array
                boardArray.splice(index, 1, playerTurn)
                //allowing the program to know whose turn it is by their color definition
                element.style.backgroundColor=colorDefinitions[playerTurn];
            } 
            //this is swtiching turns every time
            playerTurn = playerTurn * -1;
        });
    }
    );

// declare winner/tie/
//if the winner does not equal null, which was declared in first const, then run through the next if 
//else statements 
 if (winner !== null) {
   if (winner === "T" ){ //not sure where "T" comes from, other than instructions told us to do this
     message.innerText = "hey you tied";
   }


 } 
 

