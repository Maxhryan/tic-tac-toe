let cells = document.querySelectorAll('.row > div');

//keep track of number of turns

let statusDisplay = document.querySelector('.winningMessage');

const player1 = 'x';
const player2 = 'o';
let counter = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function winningMessage(){
  if(counter % 2 == 0){
  return `O has won!`;
}else{
  return `X has won!`;
}
}

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

function cellClicked(event) {
    counter++;
    if(counter % 2 == 0){
        event.target.textContent = 'o';
    }else{
        event.target.textContent = 'x';
    }
  for(let i = 0; i < cells.length; i++) {
    if(cells[i].textContent != "") {
      gameBoard[i] = cells[i].textContent;
      winningConditions();
    }
  }
}

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function winningConditions() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winner[i];
        let a = gameBoard[winCondition[0]];
        let b = gameBoard[winCondition[1]];
        let c = gameBoard[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }if (a === b && b === c) {
            roundWon = true;
            break
        }
    }if (roundWon) {
        statusDisplay.innerHTML = winningMessage();
        gameActive = false;
        return;
    }
};

